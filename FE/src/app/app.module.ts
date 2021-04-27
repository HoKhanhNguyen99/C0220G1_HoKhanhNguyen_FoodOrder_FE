import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from '../app-routing.module';
import {RouterModule} from '@angular/router';
import {FoodModule} from "./form/food.module";
import { FoodRoutingModule } from './form/food-routing.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FoodModule,
    FoodRoutingModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
