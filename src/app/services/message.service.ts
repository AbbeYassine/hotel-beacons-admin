/**
 * Created by Vyndee on 09/03/2017.
 */
/**
 * Created by Vyndee on 08/03/2017.
 */
import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {Config} from "../config";
import 'rxjs/add/operator/toPromise';
import {Message} from "../models/message";
@Injectable()
export class MessageService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {

  }

  getByBeaconId(idBeacon: string) {
    console.log(JSON.stringify(idBeacon));
    return this.http
      .get(Config.apiUrl + "/message/beacon/" + idBeacon,
        {headers: this.headers}
      )
      .toPromise()
      .then(res => {
        return res.json();
      })
      .catch(this.handleError)
  }

  createOrUpdateMessage(idBeacon: string, message: Message) {
    console.log(JSON.stringify(message));
    return this.http
      .post(Config.apiUrl + "/message/beacon/" + idBeacon,
        JSON.stringify(message),
        {headers: this.headers})
      .toPromise()
      .then(res => {
        return res.json();
      })
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
