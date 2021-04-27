import {Category} from "../category/category";

export class Food {
  foodId: number;
  foodName: string;
  price: number;
  img: string;
  category: Category;

  constructor(foodId: number, foodName: string, price: number, img: string, category: Category) {
    this.foodId = foodId;
    this.foodName = foodName;
    this.price = price;
    this.img = img;
    this.category = category;
  }
}
