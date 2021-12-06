import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TransactionPageComponent } from './pages/transaction-page/transaction-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { BudgetPageComponent } from './pages/budget-page/budget-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CategoryComponentComponent } from './components/category-component/category-component.component';
import { TransactionComponentComponent } from './components/transaction-component/transaction-component.component';
import { ModifyCategoryComponent } from './components/modals/modify-category/modify-category.component';
import { ModifyTransactionComponent } from './components/modals/modify-transaction/modify-transaction.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DialogModifyCategory } from './components/modals/dialog-modify-category/dialog-modify-category.component';
import { MatDialogClose, MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    LoginButtonComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    AuthNavComponent,
    NavBarComponent,
    MainNavComponent,
    LoadingComponent,
    ProfileComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponent,
    HeaderComponent,
    TransactionPageComponent,
    BudgetPageComponent,
    CategoryPageComponent,
    SideBarComponent,
    MainPageComponent,
    CategoryComponentComponent,
    TransactionComponentComponent,
    ModifyCategoryComponent,
    ModifyTransactionComponent,
    DialogModifyCategory,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        allowedList: [`${env.dev.serverUrl}/api*`],
      },
    }),
    NgbModule,
    MDBBootstrapModule.forRoot(),
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    NgxChartsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    FlexLayoutModule

  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    HttpClientModule


  ],
  bootstrap: [AppComponent, BudgetPageComponent]
})
export class AppModule { }
