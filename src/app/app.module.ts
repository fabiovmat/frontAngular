import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component'; /*requisicoes ajax*/
import {  Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { LoginComponent } from './login/login.component' ;

export const appRouters:Routes = [

{path: 'home', component: HomeComponent},
{path: 'login',component: LoginComponent},
{path: '', component:LoginComponent}

];

export const routes : ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRouters);





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routes   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
