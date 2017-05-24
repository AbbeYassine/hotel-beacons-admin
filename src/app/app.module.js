"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// external module
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var angularfire2_1 = require('angularfire2');
var angular2_toaster_1 = require('angular2-toaster/angular2-toaster');
var environment_1 = require('../environments/environment');
var ng2_translate_1 = require('ng2-translate');
var core_2 = require('angular2-google-maps/core');
var ng2_charts_1 = require('ng2-charts');
function createTranslateLoader(http) {
    return new ng2_translate_1.TranslateStaticLoader(http, '../public/assets/i18n', '.json');
}
exports.createTranslateLoader = createTranslateLoader;
var modules = [
    ng2_bootstrap_1.AlertModule.forRoot(),
    ng2_bootstrap_1.DatepickerModule.forRoot(),
    platform_browser_1.BrowserModule,
    forms_1.FormsModule,
    http_1.HttpModule,
    /*RouterModule.forRoot([
     {path: 'stat', component: StatComponent}
     ]),*/
    angularfire2_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
    ng2_translate_1.TranslateModule.forRoot({
        deps: [http_1.Http],
        provide: ng2_translate_1.TranslateLoader,
        useFactory: (createTranslateLoader)
    }),
    angular2_toaster_1.ToasterModule,
];
var app_component_1 = require('./app.component');
var app_header_1 = require('./widgets/app-header');
var app_footer_1 = require('./widgets/app-footer');
var menu_aside_1 = require('./widgets/menu-aside');
var control_sidebar_1 = require('./widgets/control-sidebar');
var messages_box_1 = require('./widgets/messages-box');
var notification_box_1 = require('./widgets/notification-box');
var tasks_box_1 = require('./widgets/tasks-box');
var user_box_1 = require('./widgets/user-box');
var breadcrumb_1 = require('./widgets/breadcrumb');
var widgets = [
    app_component_1.AppComponent,
    breadcrumb_1.BreadcrumbComponent,
    app_header_1.AppHeaderComponent,
    app_footer_1.AppFooterComponent,
    menu_aside_1.MenuAsideComponent,
    control_sidebar_1.ControlSidebarComponent,
    messages_box_1.MessagesBoxComponent,
    notification_box_1.NotificationBoxComponent,
    tasks_box_1.TasksBoxComponent,
    user_box_1.UserBoxComponent
];
var user_service_1 = require('./services/user.service');
var messages_service_1 = require('./services/messages.service');
var guard_service_1 = require('./services/guard.service');
var notification_service_1 = require('./services/notification.service');
var breadcrumb_service_1 = require('./services/breadcrumb.service');
var translate_service_1 = require('./services/translate.service');
var logger_service_1 = require('./services/logger.service');
var services = [
    user_service_1.UserService,
    breadcrumb_service_1.BreadcrumbService,
    messages_service_1.MessagesService,
    guard_service_1.CanActivateGuard,
    notification_service_1.NotificationService,
    translate_service_1.AdminLTETranslateService,
    logger_service_1.LoggerService,
];
// les pages
var home_component_1 = require('./pages/home/home.component');
var page_num_component_1 = require('./pages/page-num/page-num.component');
var client_component_1 = require('./pages/client/client.component');
var auth_1 = require('./pages/layouts/auth/auth');
var login_component_1 = require('./pages/login/login.component');
var register_component_1 = require('./pages/register/register.component');
var add_beacon_component_1 = require("./pages/beacons/add/add-beacon.component");
var message_beacon_component_1 = require("./pages/beacons/message/message-beacon.component");
var pages = [
    home_component_1.HomeComponent,
    page_num_component_1.PageNumComponent,
    client_component_1.ClientComponent,
    auth_1.LayoutsAuthComponent,
    login_component_1.LoginComponent,
    register_component_1.RegisterComponent,
    add_beacon_component_1.AddBeaconComponent,
    message_beacon_component_1.MessageBeaconComponent,
    prediction_population_component_1.PredictionPopulationComponent,
    promotions_component_1.PromotionsComponent
];
// main bootstrap
var app_routes_1 = require('./app.routes');
var beacon_service_1 = require("./services/beacon.service");
var message_service_1 = require("./services/message.service");
var prediction_population_component_1 = require("./pages/prediction/population/prediction-population.component");
var prediction_service_1 = require("./services/prediction.service");
var promotions_component_1 = require("./pages/promotions/promotions.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            declarations: widgets.concat(pages),
            imports: modules.concat([
                app_routes_1.routing,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyCx49k72qN0yBuWsUIpgAojQIrhB62vtrM'
                }),
                ng2_charts_1.ChartsModule
            ]),
            providers: services.concat([
                beacon_service_1.BeaconService,
                message_service_1.MessageService,
                prediction_service_1.PredictionService
            ])
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
