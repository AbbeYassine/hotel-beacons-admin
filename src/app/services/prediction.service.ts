/**
 * Created by Vyndee on 30/04/2017.
 */
/**
 * Created by Vyndee on 08/03/2017.
 */
import {Injectable} from "@angular/core";
import {Beacon} from "../models/beacon";
import {Headers, Http} from "@angular/http";
import {Config} from "../config";
import 'rxjs/add/operator/toPromise';
@Injectable()
export class PredictionService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {

  }

  predictPopulation(x: number) {

    return this.http
      .post(Config.apiPredictionUrl,
        JSON.stringify({
          x1: x,
          x2: x
        }),
        {headers: this.headers}
      )
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
