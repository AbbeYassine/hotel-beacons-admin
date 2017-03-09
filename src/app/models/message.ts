import {TimeOut} from "./shared/timeout";
/**
 * Created by Vyndee on 08/03/2017.
 */
export class Message {
  public in: string;
  public out: string;
  public timeout: TimeOut;


  constructor(object?: Message) {
  }

  public isValid() {
    if (this.in && this.out && this.timeout.isValid()) {
      return true
    }
    return false;
  }
}
