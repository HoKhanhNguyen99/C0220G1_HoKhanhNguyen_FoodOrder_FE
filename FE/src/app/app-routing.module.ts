import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./form/home/home.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {FoodRoutingModule} from "./form/food-routing.module";


export const routes: Routes = [
  {path: '**', component: PagenotfoundComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FoodRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
