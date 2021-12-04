import { HomeComponent } from './pages/home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';

import { AuthGuard } from '@auth0/auth0-angular';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {

    path: '**',
    component: PageNotFoundComponent,
   }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
