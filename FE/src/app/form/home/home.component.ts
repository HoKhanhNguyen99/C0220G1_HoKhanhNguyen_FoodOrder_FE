import {Component, OnInit} from '@angular/core';
import {FoodService} from "../../service/food/food.service";
import {Food} from "../../model/food/food";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private foodService: FoodService) {
  }

  foodList: Food[] = [];
  foodName = '';

  ngOnInit(): void {
    this.foodService.listFood().subscribe(next => {
      this.foodList = next
    }, error => console.log(error))
  }

  search() {
    this.foodService.findAllByName(this.foodName).subscribe(next => {
      this.foodList = next;
      console.log(this.foodList);
      console.log(this.foodName)
    }, error => console.log(error))
  }
}
