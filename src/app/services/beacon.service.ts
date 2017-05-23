/**
 * Created by Vyndee on 08/03/2017.
 */
import {Injectable} from "@angular/core";
import {Beacon} from "../models/beacon";
import {Headers, Http} from "@angular/http";
import {Config} from "../config";
import 'rxjs/add/operator/toPromise';
import * as _ from 'underscore';

@Injectable()
export class BeaconService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {

  }

  create(beacon: Beacon) {
    console.log(JSON.stringify(beacon));
    return this.http
      .post(Config.apiUrl + "/beacons/add",
        JSON.stringify(beacon),
        {headers: this.headers}
      )
      .toPromise()
      .then(res => {
        return res.json();
      })
      .catch(this.handleError)
  }

  getAll() {
    return this.http
      .get(Config.apiUrl + "/beacons")
      .toPromise()
      .then(res => {
        return res.json();
      })
      .catch(this.handleError)
  }

  filter() {
    return this.http
      .get(Config.apiUrl + "/beacons")
      .toPromise()
      .then(res => {
        
        var beacons = JSON.parse(res.json());
        var filtered = _.where(beacons, {date: "1"});
        
        return filtered;
      })
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
