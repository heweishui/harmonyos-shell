import hilog from '@ohos.hilog';

class Logger {
  private domain: number;
  private prefix: string;
  private format: string = '%{public}s,%{public}s';
  private showLog = true;

  constructor(prefix: string) {
    this.prefix = prefix;
    this.domain = 0xff00;
  }

  needLog(needShow: boolean) {
    this.showLog = needShow;
  }

  debug(...args: string[]): void {
    if (!this.showLog) return;
    hilog.debug(this.domain, this.prefix, this.format, args);
  }

  info(...args: string[]): void {
    if (!this.showLog) return;
    hilog.info(this.domain, this.prefix, this.format, args);
  }

  warn(...args: string[]): void {
    if (!this.showLog) return;
    hilog.warn(this.domain, this.prefix, this.format, args);
  }

  error(...args: string[]): void {
    if (!this.showLog) return;
    hilog.error(this.domain, this.prefix, this.format, args);
  }
}

export default new Logger('[Samples_Camera]');