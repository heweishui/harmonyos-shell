#include "napi/native_api.h"
#include <bits/alltypes.h>
#include "hilog/log.h"
#include <unistd.h>
#include <stdio.h>
#include "zlib.h"

extern "C" {
#include <libavformat/avformat.h>
#include <libavcodec/avcodec.h>
#include <libavutil/dict.h>
#include <libavutil/time.h>
#include <libavutil/imgutils.h>
#include <libavutil/error.h>
#include <libavutil/avutil.h>
#include <libavcodec/packet.h>
#include <libavutil/log.h>
#include <libavformat/avio.h>
#include <libavcodec/codec_par.h>
}


#define LOG_TAG "tarotest"
static napi_value Add(napi_env env, napi_callback_info info) {
    size_t requireArgc = 2;
    size_t argc = 2;
    napi_value args[2] = {nullptr};

    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

    napi_valuetype valuetype0;
    napi_typeof(env, args[0], &valuetype0);

    napi_valuetype valuetype1;
    napi_typeof(env, args[1], &valuetype1);

    double value0;
    napi_get_value_double(env, args[0], &value0);

    double value1;
    napi_get_value_double(env, args[1], &value1);

    napi_value sum;
    napi_create_double(env, value0 + value1, &sum);

    return sum;
}

void log_callback(void *avcl, int level, const char *fmt, va_list vl) { OH_LOG_INFO(LOG_APP, fmt, vl); }

static double r2d(AVRational r) { return (r.num == 0 || r.den == 0) ? 0.0 : (double)r.num / (double)r.den; }

static napi_value pushRtmp(napi_env env, napi_callback_info info) {

    //    解析参数
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    //    获取arraybuffer数据
    void *arrayBuffer = nullptr;
    size_t arrayBufferSize;
    napi_get_arraybuffer_info(env, args[0], &arrayBuffer, &arrayBufferSize);

    char url[256];
    size_t urlLength;
    napi_get_value_string_utf8(env, args[1], url, 256, &urlLength);

    OH_LOG_INFO(LOG_APP, "url is %{public}s", url);


    // 初始化网络库以及网络加密协议相关的库
    avformat_network_init();
    av_log_set_flags(AV_LOG_DEBUG);
    av_log_set_callback(log_callback);

    // 打开文件, 解封文件头
    AVFormatContext *inContext = NULL;
    char *inFile = "https://stream7.iqilu.com/10339/upload_transcode/202002/17/20200217021133Eggh6zdlAO.mp4";
    int ret = avformat_open_input(&inContext, inFile, 0, 0);
    if (ret != 0) {
        OH_LOG_INFO(LOG_APP, "无法打开输入文件:");
        av_err2str(ret);
        napi_value res;
        napi_create_int32(env, -001, &res);
        return res;
    }

    OH_LOG_INFO(LOG_APP, "avformat_open_input success");

    // 获取音视频流信息
    ret = avformat_find_stream_info(inContext, 0);
    if (ret != 0) {
        OH_LOG_INFO(LOG_APP, "获取音视频流信息");
        napi_value res;
        napi_create_int32(env, -002, &res);
        return res;
    }

    OH_LOG_INFO(LOG_APP, "avformat_find_stream_info success");

    // 打印信息
    av_dump_format(inContext, 0, inFile, 0);

    // 输出流
    AVFormatContext *outContext;
    char *outFile = url;
    ret = avformat_alloc_output_context2(&outContext, 0, "flv", outFile);
    if (outContext == 0) {
        OH_LOG_INFO(LOG_APP, "输出流创建失败");
        napi_value res;
        napi_create_int32(env, -003, &res);
        return res;
    }

    OH_LOG_INFO(LOG_APP, "avformat_alloc_output_context2 success");

    // 配置输出流
    // 遍历输入的AVStream
    for (int i = 0; i < inContext->nb_streams; i++) {
        AVStream *outStream = avformat_new_stream(outContext, NULL);
        if (outStream == NULL) {
            OH_LOG_INFO(LOG_APP, "outStream为null");
            napi_value res;
            napi_create_int32(env, -004, &res);
            return res;
        }

        // 复制配置信息
        ret = avcodec_parameters_copy(outStream->codecpar, inContext->streams[i]->codecpar);
        if (ret < 0) {
            OH_LOG_INFO(LOG_APP, "copy codec失败");
            napi_value res;
            napi_create_int32(env, -005, &res);
            return res;
        }

        outStream->codecpar->codec_tag = 0;
    }

    // 输出
    av_dump_format(outContext, 0, outFile, 1);

    // rtmp推流

    // 打开io
    ret = avio_open(&outContext->pb, outFile, AVIO_FLAG_WRITE);
    if (ret != 0) {
        OH_LOG_INFO(LOG_APP, "打开io失败");
        napi_value res;
        napi_create_int32(env, -006, &res);
        return res;
    }

    OH_LOG_INFO(LOG_APP, "avio_open success");

    // 写入头信息
    ret = avformat_write_header(outContext, NULL);
    if (ret < 0) {
        OH_LOG_INFO(LOG_APP, "头信息写入失败");
        napi_value res;
        napi_create_int32(env, -007, &res);
        return res;
    }

    OH_LOG_INFO(LOG_APP, "avformat_write_header success");

    // 推流帧数据
    AVPacket avpkt;
    long long startTime = av_gettime();
    while (1) {
        // 读帧数据
        ret = av_read_frame(inContext, &avpkt);
        if (ret != 0) {
            OH_LOG_INFO(LOG_APP, "av_read_frame失败");
            break;
        }

        //        OH_LOG_INFO(LOG_APP, "avpkt.pts is %{public}s",avpkt.pts);

        // 计算转换pts dts
        AVRational inTime = inContext->streams[avpkt.stream_index]->time_base;
        AVRational outTime = outContext->streams[avpkt.stream_index]->time_base;
        avpkt.pts =
            av_rescale_q_rnd(avpkt.pts, inTime, outTime, (AVRounding)(AV_ROUND_NEAR_INF | AV_ROUND_PASS_MINMAX));
        avpkt.dts =
            av_rescale_q_rnd(avpkt.dts, inTime, outTime, (AVRounding)(AV_ROUND_NEAR_INF | AV_ROUND_PASS_MINMAX));
        avpkt.duration =
            av_rescale_q_rnd(avpkt.duration, inTime, outTime, (AVRounding)(AV_ROUND_NEAR_INF | AV_ROUND_PASS_MINMAX));
        avpkt.pos = -1;

        // 处理视频帧,控制推流速度
        if (inContext->streams[avpkt.stream_index]->codecpar->codec_type = AVMEDIA_TYPE_VIDEO) {
            // 时间基数
            AVRational tb = inContext->streams[avpkt.stream_index]->time_base;

            long long nowTime = av_gettime() - startTime;
            long long dtsTime = avpkt.dts * (1000 * 1000 * r2d(tb));
            if (dtsTime > nowTime) {
                av_usleep(dtsTime - nowTime);
            }
        }


        // 发送数据
        ret = av_interleaved_write_frame(outContext, &avpkt);
        if (ret < 0) {
            OH_LOG_INFO(LOG_APP, "数据发送失败");
            napi_value res;
            napi_create_int32(env, -101, &res);
            return res;
        }

        // 释放
        av_packet_unref(&avpkt);
    }

    // 写入尾文件
    ret = av_write_trailer(outContext);
    if (ret < 0) {
        OH_LOG_INFO(LOG_APP, "无法写入尾文件");
        napi_value res;
        napi_create_int32(env, -102, &res);
        return res;
    }
    //    释放资源
    avformat_close_input(&inContext);
    avformat_free_context(inContext);
    avformat_free_context(outContext);

    napi_value res;
    napi_create_int32(env, 200, &res);
    return res;
}

EXTERN_C_START static napi_value Init(napi_env env, napi_value exports) {
    napi_property_descriptor desc[] = {
        {"add", nullptr, Add, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"pushRtmp", nullptr, pushRtmp, nullptr, nullptr, nullptr, napi_default, nullptr},
    };
    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);
    return exports;
}
EXTERN_C_END

static napi_module demoModule = {
    .nm_version = 1,
    .nm_flags = 0,
    .nm_filename = nullptr,
    .nm_register_func = Init,
    .nm_modname = "tarowebcontainer",
    .nm_priv = ((void *)0),
    .reserved = {0},
};

extern "C" __attribute__((constructor)) void RegisterTaroWebContainerModule(void) { napi_module_register(&demoModule); }
