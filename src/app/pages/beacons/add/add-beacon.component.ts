/**
 * Created by Vyndee on 08/03/2017.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {MapTypeStyle} from "angular2-google-maps/core";
import {Beacon} from "../../../models/beacon";
import {NotificationService} from "../../../services/notification.service";
import {BeaconService} from "../../../services/beacon.service";


@Component({
  selector: 'add-beacon',
  styleUrls: ['./add-beacon.css'],
  templateUrl: './add-beacon.html'
})
export class AddBeaconComponent implements OnInit, OnDestroy {
  title: string = 'My first angular2-google-maps project';
  lat: number = 36.9216285;
  lng: number = 10.2872767;
  zoom: number = 16;
  styles: any[];
  marker: marker;
  beacon: Beacon;

  constructor(private beaconService: BeaconService,
              private toasterService: NotificationService) {
    // TODO
    let styles = [
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#444444"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "color": "#f2f2f2"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 45
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#46bcec"
          },
          {
            "visibility": "on"
          }
        ]
      }
    ];
    this.beacon = new Beacon();
    this.marker = {
      draggable: true,
      lat: this.lat,
      lng: this.lng
    };

    this.styles = styles;
  }

  public ngOnInit() {


  }

  public ngOnDestroy() {

  }

  mapClicked($event: any) {
    this.marker = {
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    }
  }

  markerDragEnd(m: marker, $event: any) {
    console.log("Drag end", m, $event);
    this.marker = {
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    }
  }

  onSubmit() {
    let baseContext = this ;
    console.log("Beacons", JSON.stringify(this.beacon));
    this.beacon.position = {
      latitude: JSON.stringify(this.marker.lat),
      longitude: JSON.stringify(this.marker.lng)
    };
    if (this.beacon.isValid()) {
      this.beaconService.create(this.beacon)
        .then(
          hero => {
            console.log(hero);
            baseContext.beacon = new Beacon();
            baseContext.toasterService.success("Ajout d'un beacons");
          },
          error => {
            console.log("Error", error);
          }
        );
    } else {
      this.toasterService.error("Remplir les champs !!");
    }


  }
}
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
