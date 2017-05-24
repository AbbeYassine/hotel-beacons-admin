// external module
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import {RouterModule} from '@angular/router';
import {AlertModule, DatepickerModule} from 'ng2-bootstrap';
import {AngularFireModule, FirebaseAppConfig} from 'angularfire2';
import {ToasterModule} from 'angular2-toaster/angular2-toaster';
import {environment} from '../environments/environment';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';
import {AgmCoreModule} from 'angular2-google-maps/core'
import {ChartsModule} from 'ng2-charts';
import {Uploader}      from 'angular2-http-file-upload';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, '../public/assets/i18n', '.json');
}

let modules = [
  AlertModule.forRoot(),
  DatepickerModule.forRoot(),
  BrowserModule,
  FormsModule,
  HttpModule,
  /*RouterModule.forRoot([
   {path: 'stat', component: StatComponent}
   ]),*/
  AngularFireModule.initializeApp(environment.firebase),
  TranslateModule.forRoot({
    deps: [Http],
    provide: TranslateLoader,
    useFactory: (createTranslateLoader)
  }),
  ToasterModule,
];

import {AppComponent} from './app.component';

import {AppHeaderComponent} from './widgets/app-header';
import {AppFooterComponent} from './widgets/app-footer';
import {MenuAsideComponent} from './widgets/menu-aside';
import {ControlSidebarComponent} from './widgets/control-sidebar';
import {MessagesBoxComponent} from './widgets/messages-box';
import {NotificationBoxComponent} from './widgets/notification-box';
import {TasksBoxComponent} from './widgets/tasks-box';
import {UserBoxComponent} from './widgets/user-box';
import {BreadcrumbComponent} from './widgets/breadcrumb';

let widgets = [
  AppComponent,
  BreadcrumbComponent,
  AppHeaderComponent,
  AppFooterComponent,
  MenuAsideComponent,
  ControlSidebarComponent,
  MessagesBoxComponent,
  NotificationBoxComponent,
  TasksBoxComponent,
  UserBoxComponent
];

import {UserService} from './services/user.service';
import {MessagesService} from './services/messages.service';
import {CanActivateGuard} from './services/guard.service';
import {NotificationService} from './services/notification.service';
import {BreadcrumbService} from './services/breadcrumb.service';
import {AdminLTETranslateService} from './services/translate.service';
import {LoggerService} from './services/logger.service';

let services = [
  UserService,
  BreadcrumbService,
  MessagesService,
  CanActivateGuard,
  NotificationService,
  AdminLTETranslateService,
  LoggerService,
];

// les pages
import {HomeComponent} from './pages/home/home.component';
import {PageNumComponent} from './pages/page-num/page-num.component';
import {ClientComponent} from './pages/client/client.component';
import {LayoutsAuthComponent} from './pages/layouts/auth/auth';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {AddBeaconComponent} from "./pages/beacons/add/add-beacon.component";
import {MessageBeaconComponent} from "./pages/beacons/message/message-beacon.component";


let pages = [
  HomeComponent,
  PageNumComponent,
  ClientComponent,
  LayoutsAuthComponent,
  LoginComponent,
  RegisterComponent,
  AddBeaconComponent,
  MessageBeaconComponent,
  PredictionPopulationComponent,
  PromotionsComponent,
  ActivitiesComponent,
  ChambreComponent
  //StatComponent
];

// main bootstrap
import {routing} from './app.routes';
import {BeaconService} from "./services/beacon.service";
import {MessageService} from "./services/message.service";
import {PredictionPopulationComponent} from "./pages/prediction/population/prediction-population.component";
import {PredictionService} from "./services/prediction.service";
import {PromotionsComponent} from "./pages/promotions/promotions.component";
import {ActivitiesComponent} from "./pages/activities/activities.component";
import {ChambreComponent} from "./pages/chambres/chambre.component";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    ...widgets,
    ...pages
  ],
  imports: [
    ...modules,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCx49k72qN0yBuWsUIpgAojQIrhB62vtrM'
    }),
    ChartsModule
  ],
  providers: [
    Uploader,
    ...services,
    BeaconService,
    MessageService,
    PredictionService
  ]
})
export class AppModule {
}
