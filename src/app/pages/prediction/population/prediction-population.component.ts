/**
 * Created by Vyndee on 30/04/2017.
 */
/**
 * Created by Vyndee on 08/03/2017.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {MapTypeStyle} from "angular2-google-maps/core";
import {Beacon} from "../../../models/beacon";
import {NotificationService} from "../../../services/notification.service";
import {BeaconService} from "../../../services/beacon.service";
import {PredictionService} from "../../../services/prediction.service";


@Component({
  selector: 'add-beacon',
  styleUrls: ['./prediction-population.css'],
  templateUrl: './prediction-population.html'
})
export class PredictionPopulationComponent implements OnInit, OnDestroy {


  lat: number = 36.9216285;
  lng: number = 10.2872767;
  zoom: number = 16;
  styles: any[];
  marker: marker;
  date: Date;
  radiusCircle: number;
  x: number = 851;

  constructor(private beaconService: BeaconService,
              private toasterService: NotificationService,
              private predictionService: PredictionService) {
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

  }

  markerDragEnd(m: marker, $event: any) {

  }


  onSubmit() {


  }

  onChange(event) {
    console.log(this.date);
    var timeDiff = Math.abs(new Date().getTime() - this.date.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    this.radiusCircle = Math.floor(Math.random() * 100 + 1);
    console.log(this.radiusCircle);

    this.predictionService.predictPopulation(diffDays)
      .then(res => {
        console.log(res);
      })
  }
}
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
