/**
 * Created by Vyndee on 08/03/2017.
 */
import {Position} from "./shared/Position";
export class Beacon {
  public id: string;
  public name: string;
  public uuid: string;
  public major: string;
  public minor: string;
  public position: Position;

  isValid() {
    if (this.name && this.uuid && this.major && this.minor && this.position) {
      return true;
    }
    return false;
  }

}
