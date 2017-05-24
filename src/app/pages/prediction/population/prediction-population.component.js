"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Vyndee on 30/04/2017.
 */
/**
 * Created by Vyndee on 08/03/2017.
 */
var core_1 = require('@angular/core');
var PredictionPopulationComponent = (function () {
    function PredictionPopulationComponent(beaconService, toasterService, predictionService) {
        this.beaconService = beaconService;
        this.toasterService = toasterService;
        this.predictionService = predictionService;
        this.lat = 36.9216285;
        this.lng = 10.2872767;
        this.zoom = 16;
        this.markers = [];
        this.x = 851;
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
    }
    PredictionPopulationComponent.prototype.ngOnInit = function () {
    };
    PredictionPopulationComponent.prototype.ngOnDestroy = function () {
    };
    PredictionPopulationComponent.prototype.mapClicked = function ($event) {
    };
    PredictionPopulationComponent.prototype.markerDragEnd = function (m, $event) {
    };
    PredictionPopulationComponent.prototype.onSubmit = function () {
    };
    PredictionPopulationComponent.prototype.onChange = function (event) {
        var _this = this;
        console.log(this.date);
        this.markers = [];
        var date = this.date.getDate() + "/" + (this.date.getMonth() + 1) + "/" + this.date.getFullYear();
        this.predictionService.predictPopulation(date)
            .then(function (res) {
            console.log(res);
            var data = res.data;
            for (var i = 0; i < data.length; i++) {
                _this.markers.push({
                    draggable: false,
                    lat: parseFloat(data[i].beacon.position.latitude),
                    lng: parseFloat(data[i].beacon.position.longitude),
                    radius: data[i].predicted * 2,
                    color: getRandomColor()
                });
            }
        });
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    };
    PredictionPopulationComponent = __decorate([
        core_1.Component({
            selector: 'add-beacon',
            styleUrls: ['./prediction-population.css'],
            templateUrl: './prediction-population.html'
        })
    ], PredictionPopulationComponent);
    return PredictionPopulationComponent;
}());
exports.PredictionPopulationComponent = PredictionPopulationComponent;
