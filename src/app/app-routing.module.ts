import { HomeComponent } from './pages/home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';

import { AuthGuard } from '@auth0/auth0-angular';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BudgetPageComponent } from './pages/budget-page/budget-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { TransactionPageComponent } from './pages/transaction-page/transaction-page.component';


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
    path: 'budget',
    component: BudgetPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'category',
    component: CategoryPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'transaction',
    component: TransactionPageComponent,
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
