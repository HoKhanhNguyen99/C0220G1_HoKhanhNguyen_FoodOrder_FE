import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './form/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**', component: PagenotfoundComponent
  }

];
@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
