import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {DetailComponent} from "./detail/detail/detail.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [HomeComponent, DetailComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FoodModule {
}
