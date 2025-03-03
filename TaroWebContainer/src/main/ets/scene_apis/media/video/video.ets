import { getVideoInfoOptions } from '../../../interfaces/InjectObject'
import { switchInternalToHapSandBox } from '../../../utils/InternalPath'
import { media } from '@kit.MediaKit';
import { fileIo as fs } from '@kit.CoreFileKit';
import { FFmpeg, FFAbortController } from '@sj/ffmpeg';

const TAG = 'MetadataDemo'

const ORI: ESObject = {
  '0': 'left',
  '90': 'up',
  '180': 'right',
  '270': 'down',
}

export async function getVideoInfo(options: getVideoInfoOptions): Promise<void> {
  try {
    let uri: string = options.src
    if (uri.startsWith('internal://')) {
      uri = switchInternalToHapSandBox(uri)
    }
    if (!fs.accessSync(uri)) {
      options.fail({ errMsg: `getVideoInfo fail,src not exist!` })
      return
    }
    const file = fs.openSync(uri, fs.OpenMode.READ_WRITE)
    if (!file) {
      options.fail({ errMsg: `getVideoInfo fail,src not exist!` })
      return
    }

    const fd = file.fd
    const stat = fs.statSync(fd)
    const sizes = stat.size
    const buf = new ArrayBuffer(sizes)
    const byteLength = buf.byteLength;
    const size = (byteLength / 1024).toFixed(2)
    // 创建AVMetadataExtractor对象
    let avMetadataExtractor = await media.createAVMetadataExtractor()
    // 设置fdSrc
    avMetadataExtractor.fdSrc = fs.openSync(uri);
    // 获取元数据（promise模式）
    let metadata = await avMetadataExtractor.fetchMetadata()


    let abortController: FFAbortController = new FFAbortController(); // 创建 abortController, 在需要时终止脚本执行;
    setTimeout(() => {
      abortController.abort()
    }, 500); // 模拟取消; 这里模拟取消, 延迟1s后取消操作;
    let fps: number = 30
    let commands: Array<string | undefined> = [
      "ffprobe",
      "-v", "info",
      "-select_streams", "v:0",
      "-of", "json",
      "-show_entries", "stream=r_frame_rate,bit_rate",
      "-i", uri
    ]
    FFmpeg.execute(commands, {
      logCallback: (logLevel: number, logMessage: string) => {
        if (logMessage.indexOf("r_frame_rate")) {
          const regex: RegExp = /"r_frame_rate": "(\d+\/\d+)"/;
          const match: RegExpMatchArray | null = logMessage.match(regex);
          if (match) {
            options.success({
              type: metadata.mimeType,
              orientation: ORI[metadata.videoOrientation??'0'],
              duration: Number(metadata.duration) / 1000,
              size: Number(size),
              height: Number(metadata.videoHeight),
              width: Number(metadata.videoWidth),
              bitrate: Math.round((Number(size) * 8 * 1000) / (Number(metadata.duration) * 1024)),
              fps: parseInt(match[1], 10)
            })
            return;
          }
        }
      }
    ,
      outputCallback: (message: string) => {
      },
      signal: abortController.signal
    }).then(() => {
      console.info(`Execution succeeded with output: ${fps}`);
    }).catch((error: Error) => {
      console.error(`Execution failed with error: ${error.message}`);
    });


    options.success({
      type: metadata.mimeType,
      orientation: ORI[metadata.videoOrientation??'0'],
      duration: Number(metadata.duration) / 1000,
      size: Number(size),
      height: Number(metadata.videoHeight),
      width: Number(metadata.videoWidth),
      bitrate: Math.round((Number(size) * 8 * 1000) / (Number(metadata.duration) * 1024)),
      fps: fps
    })
    // 释放资源（promise模式）
    avMetadataExtractor.release()
    fs.closeSync(file)
  } catch (err) {
    console.error("metadata error:", err)
    options.fail({ errMsg: `getVideoInfo is fail!${err}` })
  }
}