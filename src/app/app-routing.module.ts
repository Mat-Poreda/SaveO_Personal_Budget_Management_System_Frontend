import { HomeComponent } from './pages/home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BudgetPageComponent } from './pages/budget-page/budget-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { TransactionPageComponent } from './pages/transaction-page/transaction-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent
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
    path: 'main',
    component: MainPageComponent,
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
