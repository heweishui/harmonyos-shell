import common from '@ohos.app.ability.common';
import abilityAccessCtrl from '@ohos.abilityAccessCtrl';
import hilog from '@ohos.hilog';
import image from '@ohos.multimedia.image';
import camera from '@ohos.multimedia.camera';
import audio from '@ohos.multimedia.audio';
import { BusinessError } from '@ohos.base';
import display from '@ohos.display';
import testNapi from 'libtarowebcontainer.so';
import Logger from './Logger';
import { HostPageState } from '../interfaces/HostPageState';


//camera控制相关
let cameraWidth = 1920;
let cameraHeight = 1080;
let previewOutput: camera.PreviewOutput;
let previewOutputX: camera.PreviewOutput;
let cameraInput: camera.CameraInput;
let captureSession: camera.CaptureSession;

@Observed
export class LivePushController {
  public pushSignal: boolean = false;
  public loading: boolean = false;
  public visible: boolean = true;
}


/**
 * LivePush,直播预览
 */

@Component
export struct LivePush {
  //   同步宿主页面页面状态
  @Prop @Watch('onPageStateUpdated') pageState: HostPageState;
  //   LivePush 组件控制器
  @ObjectLink livePushController: LivePushController;
  //   XComponent相关
  private mXComponentController: XComponentController = new XComponentController;
  private surfaceIDX: string = '-1';
  private display = display.getDefaultDisplaySync();
  private heightPx = (this.display.width * cameraWidth / cameraHeight) + 'px';
  private context: Context | undefined = undefined;

  //   audio帧数据接收
  private audioCapturer:Promise<audio.AudioCapturer|null>=this.createAudioCapturer();

  //   video帧数据接收
  private imageReceiver: image.ImageReceiver = this.createImageReceiver();
  private url: string = '';

  aboutToAppear() {
    this.context = getContext() as common.UIAbilityContext;
    abilityAccessCtrl.createAtManager()
      .requestPermissionsFromUser(this.context, ['ohos.permission.MICROPHONE',
        'ohos.permission.CAMERA', 'ohos.permission.MEDIA_LOCATION', 'ohos.permission.WRITE_MEDIA']).then(() => {

    });
  }

  onPageStateUpdated(state: HostPageState) {
    if (state === HostPageState.PageOnShow) {
      //   启动相机
      this.createVideoStream();
      //   启动音频
      this.createAudioStream();
    } else {
      Logger.debug("onpageHode-- stopRecoder");
      this.releaseCamera();
    }
  }

  /**
   * 创建预览接收器，设置回调
   * @return image.ImageReceiver
   */
  createImageReceiver(): image.ImageReceiver {
    let receiver: image.ImageReceiver = image.createImageReceiver(cameraWidth, cameraHeight, 4, 8);
    receiver.on('imageArrival', () => {
      receiver.readNextImage((err: BusinessError, nextImage: image.Image) => {
        Logger.debug();
        if (err || nextImage === undefined) {
          Logger.error();
          return;
        }
        nextImage.getComponent(4, (err: BusinessError, imgComponent: image.Component) => {
          if (err || imgComponent === undefined) {
            Logger.error();
            return;
          }
          if (imgComponent.byteBuffer as ArrayBuffer) {
            let buffer = imgComponent.byteBuffer;
            let num = testNapi.pushRtmp(buffer, this.url);

            Logger.debug();
            nextImage.release() //需要将对应的image释放，确保surface的BufferQueue正常轮转
          } else {
            Logger.debug();
            return;
          }
        })


      })
    })
    return receiver;
  }

  /**
   * 相机取流
   * @return void
   */
  async createVideoStream(): Promise<void> {
    let cameraManager = await camera.getCameraManager(this.context);
    //   获取支持的相机设备对象
    let cameraDevices: Array<camera.CameraDevice> = cameraManager.getSupportedCameras();

    //   获取对应相机设备的预览profiles
    let profiles: camera.CameraOutputCapability = cameraManager.getSupportedOutputCapability(cameraDevices[0]);
    let previewProfiles: Array<camera.Profile> = profiles.previewProfiles;
    let previewProfilesObjX: camera.Profile;

    //   创建 预览流_X
    if (this.surfaceIDX !== '-1') {
      Logger.debug();
      previewProfilesObjX = previewProfiles[0];
      previewOutputX = cameraManager.createPreviewOutput(previewProfilesObjX, this.surfaceIDX);
    }

    //   创建 预览流_ffmpeg
    let previewProfilesObj: camera.Profile = previewProfiles[0];
    let imageReceiverSurfaceId: string = await this.imageReceiver.getReceivingSurfaceId();
    previewOutput = cameraManager.createPreviewOutput(previewProfilesObj, imageReceiverSurfaceId);

    //   创建cameraInput对象
    cameraInput = cameraManager.createCameraInput(cameraDevices[0]);
    //   打开相机
    await cameraInput.open();
    //   会话流程
    captureSession = cameraManager.createCaptureSession();
    //   开始配置会话
    captureSession.beginConfig();
    //   把cameraInput加入到会话
    captureSession.addInput(cameraInput);
    //   把流加入到会话
    if (this.surfaceIDX !== '-1') {
      captureSession.addOutput(previewOutputX);
    }
    captureSession.addOutput(previewOutput);
    //   提交配置信息
    await captureSession.commitConfig();
    //   会话（预览）开始
    await captureSession.start();
  }

  /**
   * 创建音频接收器，设置回调
   * @returns
   */
  createAudioCapturer(): Promise<audio.AudioCapturer | null> {
    return new Promise<audio.AudioCapturer | null>((resolve, reject) => {
      let audioStreamInfo: audio.AudioStreamInfo = {
        samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_44100,
        channels: audio.AudioChannel.CHANNEL_1,
        sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE,
        encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW,
      }

      let audioCapturerInfo: audio.AudioCapturerInfo = {
        source: audio.SourceType.SOURCE_TYPE_MIC, //音源类型
        capturerFlags: 0  //音频采集器标志
      }

      let audioCapturerOptions: audio.AudioCapturerOptions = {
        streamInfo: audioStreamInfo,
        capturerInfo: audioCapturerInfo,
      }

      audio.createAudioCapturer(audioCapturerOptions,(err:BusinessError,capturer)=>{
        if (err) {
          Logger.error();
          return;
        }
        if (capturer) {
          capturer.on('markReach',100,(position:number)=>{
            if (position===100) {
              capturer.getBufferSize(async (err:BusinessError,bufferSize:number)=>{
                if (err||bufferSize===undefined) {
                  return;
                }
                hilog.info(0x0000,'testTag','%{public}d',bufferSize);

                capturer.read(bufferSize,true,(err:BusinessError,audioBuffer:ArrayBuffer)=>{
                  if (err||audioBuffer===undefined) {
                    return;
                  }
                  hilog.info(0x0000,'testTag','%{public}d',bufferSize);
                })
              })
            }
          })
          resolve(capturer);
        }else {
          resolve(null)
        }
      })
    })
  }

  /**
   * 获取音频流
   * @return void
   */
  async createAudioStream():Promise<void>{

  //当且仅当状态为STATE_PREPARED、STATE_PAUSED和STATE_STOPPED之一时才能启动采集
    let stateGroup=[audio.AudioState.STATE_PREPARED,audio.AudioState.STATE_PAUSED,audio.AudioState.STATE_STOPPED];


  }
}