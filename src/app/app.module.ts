import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { TimeagoModule } from 'ngx-timeago';
import { NgSelectModule } from '@ng-select/ng-select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicHomeComponent } from './pages/public-home/public-home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DefaultComponent } from './layouts/default/default.component';
import { ServiceProviderComponent } from './layouts/service-provider/service-provider.component';

import { NotyfToast } from './services/toast.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PrintComponent } from './layouts/print/print.component';

import { CustomeTimePipe } from '../app/time-pipe.pipe';



export function tokenGetter() {
  return localStorage.getItem("accessToken");
}

function toInteger(value: any): number {
  return parseInt(`${value}`, 10);
}

function isNumber(value: any): value is number {
  return !isNaN(toInteger(value));
}

function padNumber(value: number) {
  if (isNumber(value)) {
    return `0${value}`.slice(-2);
  } else {
    return '';
  }
}




@NgModule({
  declarations: [
    AppComponent,
    NotyfToast,
    PublicHomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    DefaultComponent,
      CustomeTimePipe,
    SidebarComponent,
    ServiceProviderComponent,
    PrintComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    LoadingBarHttpClientModule,
    LoadingBarModule,
    FileUploadModule,
    NgSelectModule,
    TimeagoModule.forRoot(),
    
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['', ''],
        blacklistedRoutes: []
      }
    }),
    ToastrModule.forRoot({
      toastComponent: NotyfToast,
    }),
  ],
  entryComponents: [NotyfToast],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
