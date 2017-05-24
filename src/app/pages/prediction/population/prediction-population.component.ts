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
  markers: marker[] = [];
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
    this.markers = [];
    let date = this.date.getDate() + "/" + (this.date.getMonth() + 1) + "/" + this.date.getFullYear();
    this.predictionService.predictPopulation(date)
      .then(res => {
        console.log(res);
        let data = res.data;
        for (let i = 0; i < data.length; i++) {
          this.markers.push({
            draggable: false,
            lat: parseFloat(data[i].beacon.position.latitude),
            lng: parseFloat(data[i].beacon.position.longitude),
            radius: data[i].predicted * 2,
            color: getRandomColor()
          })
        }
      })
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }


}
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  radius: number;
  color : string;
}
