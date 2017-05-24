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
var core_1 = require('@angular/core');
var beacon_1 = require("../../../models/beacon");
var AddBeaconComponent = (function () {
    function AddBeaconComponent(beaconService, toasterService) {
        this.beaconService = beaconService;
        this.toasterService = toasterService;
        this.title = 'My first angular2-google-maps project';
        this.lat = 36.9216285;
        this.lng = 10.2872767;
        this.zoom = 16;
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
        this.beacon = new beacon_1.Beacon();
        this.marker = {
            draggable: true,
            lat: this.lat,
            lng: this.lng
        };
        this.styles = styles;
    }
    AddBeaconComponent.prototype.ngOnInit = function () {
    };
    AddBeaconComponent.prototype.ngOnDestroy = function () {
    };
    AddBeaconComponent.prototype.mapClicked = function ($event) {
        this.marker = {
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        };
    };
    AddBeaconComponent.prototype.markerDragEnd = function (m, $event) {
        console.log("Drag end", m, $event);
        this.marker = {
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        };
    };
    AddBeaconComponent.prototype.onSubmit = function () {
        var baseContext = this;
        console.log("Beacons", JSON.stringify(this.beacon));
        this.beacon.position = {
            latitude: JSON.stringify(this.marker.lat),
            longitude: JSON.stringify(this.marker.lng)
        };
        if (this.beacon.isValid()) {
            this.beaconService.create(this.beacon)
                .then(function (hero) {
                console.log(hero);
                baseContext.beacon = new beacon_1.Beacon();
                baseContext.toasterService.success("Ajout d'un beacons");
            }, function (error) {
                console.log("Error", error);
            });
        }
        else {
            this.toasterService.error("Remplir les champs !!");
        }
    };
    AddBeaconComponent = __decorate([
        core_1.Component({
            selector: 'add-beacon',
            styleUrls: ['./add-beacon.css'],
            templateUrl: './add-beacon.html'
        })
    ], AddBeaconComponent);
    return AddBeaconComponent;
}());
exports.AddBeaconComponent = AddBeaconComponent;
