import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CanActivateGuard} from './services/guard.service';

// Components
import {HomeComponent} from './pages/home/home.component';
import {PageNumComponent} from './pages/page-num/page-num.component';
import {ClientComponent} from './pages/client/client.component';
import {LayoutsAuthComponent} from './pages/layouts/auth/auth';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {AddBeaconComponent} from "./pages/beacons/add/add-beacon.component";
import {MessageBeaconComponent} from "./pages/beacons/message/message-beacon.component";
import {PredictionPopulationComponent} from "./pages/prediction/population/prediction-population.component";
import {PromotionsComponent} from "./pages/promotions/promotions.component";
import {ActivitiesComponent} from "./pages/activities/activities.component";
import {ChambreComponent} from "./pages/chambres/chambre.component";

const routes: Routes = [
    // logged routes
    {
      canActivate: [CanActivateGuard],
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
          canActivate: [CanActivateGuard],
          component: AddBeaconComponent,
          path: 'beacons/add'
        },
        {
          canActivate: [CanActivateGuard],
          component: MessageBeaconComponent,
          path: 'beacons/message'
        },
        {
          canActivate: [CanActivateGuard],
          component: PredictionPopulationComponent,
          path: 'prediction/population'
        },
        {
          canActivate: [CanActivateGuard],
          component: PromotionsComponent,
          path: 'promotion/add'
        },
        {
          canActivate: [CanActivateGuard],
          component: ActivitiesComponent,
          path: 'activity/add'
        },
        {
          canActivate: [CanActivateGuard],
          component: ChambreComponent,
          path: 'chambre/add'
        }
      ],
      component: LayoutsAuthComponent,
      path: '',
    },
    // not logged routes
    {
      component: LoginComponent,
      path: 'login'
    },
    {
      component: RegisterComponent,
      path: 'register'
    }
  ]
  ;

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
