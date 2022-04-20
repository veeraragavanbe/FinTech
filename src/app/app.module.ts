import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { NgbModule, NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { AgmCoreModule } from '@agm/core';
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

import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';


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

@Injectable()
export class NgbFormatter extends NgbDateParserFormatter {

  parse(value: string): NgbDateStruct {
    if (value) {
      const dateParts = value.trim().split('-');
      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return { year: toInteger(dateParts[0]), month: null, day: null };
      } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
        return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: null };
      } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
        return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: toInteger(dateParts[2]) };
      }
    }
    return null;
  }

  format(date: NgbDateStruct): string {
    return date ?
      `${isNumber(date.day) ? padNumber(date.day) : ''}-${isNumber(date.month) ? padNumber(date.month) : ''}-${date.year}` :
      '';
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
    NgbModule.forRoot(),
    ToastrModule.forRoot({
      toastComponent: NotyfToast,
    }),
  ],
  entryComponents: [NotyfToast],
  providers: [{
    provide: NgbDateParserFormatter, useClass: NgbFormatter
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
