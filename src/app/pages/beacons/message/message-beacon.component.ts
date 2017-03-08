/**
 * Created by Vyndee on 08/03/2017.
 */
/**
 * Created by Vyndee on 08/03/2017.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Message} from "../../../models/message";
import {BeaconService} from "../../../services/beacon.service";
import {Beacon} from "../../../models/beacon";
import {TimeOut} from "../../../models/shared/timeout";


@Component({
  selector: 'message-beacon',
  styleUrls: ['./message-beacon.css'],
  templateUrl: './message-beacon.html'
})
export class MessageBeaconComponent implements OnInit, OnDestroy {


  message: Message;
  beacons: Beacon[] = [];
  beaconSelected: Beacon;


  title: string = 'My first angular2-google-maps project';
  lat: number = 36.9216285;
  lng: number = 10.2872767;
  zoom: number = 16;
  styles: any[];
  markers : any[]=[];

  constructor(private beaconService: BeaconService) {
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
    this.styles = styles;
    this.message = new Message();
    this.message.timeout = new TimeOut();
    this.beaconSelected = new Beacon();


    this.getAllBeacons();
  }

  public ngOnInit() {


  }

  public ngOnDestroy() {

  }

  private getAllBeacons() {
    let baseContext = this;
    this.beaconService.getAll()
      .then(
        data => {
          console.log(data);
          baseContext.beacons = data;
          baseContext.beacons.forEach(function (item) {
            baseContext.markers.push({
              latitude : parseFloat(item.position.latitude),
              longitude : parseFloat(item.position.longitude)
            })
          })

        },
        error => {
          console.log(error);
        }
      );
  }

  public clickedMarker(index) {
    this.beaconSelected = this.beacons[index];
  }
}
