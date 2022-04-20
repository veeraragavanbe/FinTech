import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicHomeComponent } from './pages/public-home/public-home.component';
import { LoginComponent } from './pages/login/login.component';
import { DefaultComponent } from './layouts/default/default.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PrintComponent } from './layouts/print/print.component';



const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', component: PublicHomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ]
  },
  {
    path: '',
    component: PrintComponent,
    children: [
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
