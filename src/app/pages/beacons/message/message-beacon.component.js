"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Vyndee on 08/03/2017.
 */
/**
 * Created by Vyndee on 08/03/2017.
 */
var core_1 = require('@angular/core');
var message_1 = require("../../../models/message");
var beacon_1 = require("../../../models/beacon");
var timeout_1 = require("../../../models/shared/timeout");
var MessageBeaconComponent = (function () {
    function MessageBeaconComponent(beaconService, messageService, notificationService) {
        this.beaconService = beaconService;
        this.messageService = messageService;
        this.notificationService = notificationService;
        this.beacons = [];
        this.title = 'My first angular2-google-maps project';
        this.lat = 36.9216285;
        this.lng = 10.2872767;
        this.zoom = 16;
        this.markers = [];
        // TODO
        var styles = [
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
        this.beaconSelected = new beacon_1.Beacon();
        this.getAllBeacons();
    }
    MessageBeaconComponent.prototype.initializeObjects = function () {
        this.message = new message_1.Message();
        this.message.timeout = new timeout_1.TimeOut();
    };
    MessageBeaconComponent.prototype.ngOnInit = function () {
    };
    MessageBeaconComponent.prototype.ngOnDestroy = function () {
    };
    MessageBeaconComponent.prototype.getAllBeacons = function () {
        var baseContext = this;
        this.beaconService.getAll()
            .then(function (data) {
            console.log(data);
            baseContext.beacons = data;
            baseContext.beacons.forEach(function (item) {
                baseContext.markers.push({
                    latitude: parseFloat(item.position.latitude),
                    longitude: parseFloat(item.position.longitude)
                });
            });
        }, function (error) {
            console.log(error);
        });
    };
    MessageBeaconComponent.prototype.clickedMarker = function (index) {
        this.beaconSelected = this.beacons[index];
        this.initializeObjects();
        var baseContext = this;
        this.messageService.getByBeaconId(this.beaconSelected.id)
            .then(function (data) {
            if (data.length != 0) {
                baseContext.message.in = data[0].in;
                baseContext.message.out = data[0].out;
                baseContext.message.timeout.content = data[0].timeout.content;
                baseContext.message.timeout.period = data[0].timeout.period;
                console.log("Message", baseContext.message);
            }
        }, function (error) {
            console.log("Error");
        });
    };
    MessageBeaconComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("Message", this.message);
        if (this.message.isValid() && this.beaconSelected.id) {
            this.messageService.createOrUpdateMessage(this.beaconSelected.id, this.message)
                .then(function (data) {
                console.log(data);
                _this.notificationService.success("Succés");
            }, function (error) {
            });
        }
        else {
            this.notificationService.error("Remplir les champs");
        }
    };
    MessageBeaconComponent = __decorate([
        core_1.Component({
            selector: 'message-beacon',
            styleUrls: ['./message-beacon.css'],
            templateUrl: './message-beacon.html'
        })
    ], MessageBeaconComponent);
    return MessageBeaconComponent;
}());
exports.MessageBeaconComponent = MessageBeaconComponent;
