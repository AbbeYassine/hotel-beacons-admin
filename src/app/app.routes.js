"use strict";
var router_1 = require('@angular/router');
var guard_service_1 = require('./services/guard.service');
var auth_1 = require('./pages/layouts/auth/auth');
var login_component_1 = require('./pages/login/login.component');
var register_component_1 = require('./pages/register/register.component');
var add_beacon_component_1 = require("./pages/beacons/add/add-beacon.component");
var message_beacon_component_1 = require("./pages/beacons/message/message-beacon.component");
var prediction_population_component_1 = require("./pages/prediction/population/prediction-population.component");
var promotions_component_1 = require("./pages/promotions/promotions.component");
var routes = [
    // logged routes
    {
        canActivate: [guard_service_1.CanActivateGuard],
        /* children: [
         {
         canActivate: [CanActivateGuard],
         component: HomeComponent,
         path: 'home'
         },
         {
         canActivate: [CanActivateGuard],
         component: PageNumComponent,
         path: 'page/:id'
         },
         {
         canActivate: [CanActivateGuard],
         component: ClientComponent,
         path: 'client'
         }
         ],*/
        children: [
            {
                canActivate: [guard_service_1.CanActivateGuard],
                component: add_beacon_component_1.AddBeaconComponent,
                path: 'beacons/add'
            },
            {
                canActivate: [guard_service_1.CanActivateGuard],
                component: message_beacon_component_1.MessageBeaconComponent,
                path: 'beacons/message'
            },
            {
                canActivate: [guard_service_1.CanActivateGuard],
                component: prediction_population_component_1.PredictionPopulationComponent,
                path: 'prediction/population'
            },
            {
                canActivate: [guard_service_1.CanActivateGuard],
                component: promotions_component_1.PromotionsComponent,
                path: 'promotion/add'
            }
        ],
        component: auth_1.LayoutsAuthComponent,
        path: '',
    },
    // not logged routes
    {
        component: login_component_1.LoginComponent,
        path: 'login'
    },
    {
        component: register_component_1.RegisterComponent,
        path: 'register'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
