/**
 * Created by Vyndee on 08/03/2017.
 */
export class TimeOut {
  public content: string;
  public period: number;

  isValid() {
    if (this.content && this.period) {
      return true;
    } else {
      return false;
    }
  }

  constructor(object?: TimeOut) {
  }
}
