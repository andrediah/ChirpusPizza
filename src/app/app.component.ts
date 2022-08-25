import { Component } from '@angular/core';
import { Category } from './enums/category';
import { MenuItem } from './interfaces/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Chirpus Pizza!';
  Category = Category;

  menuItems:MenuItem[] = [
    {category:Category.Dinner,name:"Chicken Fingers",price:11.99},
    {category:Category.Dinner,name:"Pizza",price:11.99},
    {category:Category.Sides,name:" Wings",price:8.99},
    {category:Category.Sides,name:" Breadsticks",price:4.99},
    {category:Category.Salads,name:"Ceasar Salad",price:5.99},
    {category:Category.Desserts,name:"Cinnamon Roll",price:8.99}
  ]
}
