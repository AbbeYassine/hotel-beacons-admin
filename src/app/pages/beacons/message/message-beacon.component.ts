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
import {MessagesService} from "../../../services/messages.service";
import {MessageService} from "../../../services/message.service";
import {NotificationService} from "../../../services/notification.service";


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
  markers: any[] = [];

  constructor(private beaconService: BeaconService,
              private messageService: MessageService,
              private notificationService: NotificationService) {
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
    this.initializeObjects();

    this.beaconSelected = new Beacon();


    this.getAllBeacons();
  }

  initializeObjects() {
    this.message = new Message();
    this.message.timeout = new TimeOut();
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
              latitude: parseFloat(item.position.latitude),
              longitude: parseFloat(item.position.longitude)
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
    this.initializeObjects();
    let baseContext = this;
    this.messageService.getByBeaconId(this.beaconSelected.id)
      .then(
        data => {
          if (data.length != 0) {
            baseContext.message.in = data[0].in;
            baseContext.message.out = data[0].out;
            baseContext.message.timeout.content = data[0].timeout.content;
            baseContext.message.timeout.period = data[0].timeout.period;


            console.log("Message", baseContext.message);
          }

        },
        error => {
          console.log("Error");
        })
  }

  onSubmit() {
    console.log("Message", this.message);
    if (this.message.isValid() && this.beaconSelected.id) {

      this.messageService.createOrUpdateMessage(this.beaconSelected.id, this.message)
        .then(
          data => {
            console.log(data);
            this.notificationService.success("Succés");
          },
          error => {

          }
        )
    } else {
      this.notificationService.error("Remplir les champs");
    }
  }
}
