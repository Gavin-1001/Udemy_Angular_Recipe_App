import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('Recipe Name', 'Description',
    'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/strozzapreti-pumpkin-bacon.jpg?itok=6JolD0_-&mtime=1490577640'),

  new Recipe('Recipe Name', 'Description',
    'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/strozzapreti-pumpkin-bacon.jpg?itok=6JolD0_-&mtime=1490577640'),

  new Recipe('Recipe Name', 'Description',
    'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/strozzapreti-pumpkin-bacon.jpg?itok=6JolD0_-&mtime=1490577640'),

  new Recipe('Recipe Name', 'Description',
    'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/strozzapreti-pumpkin-bacon.jpg?itok=6JolD0_-&mtime=1490577640'),

  new Recipe('Recipe Name', 'Description',
    'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/strozzapreti-pumpkin-bacon.jpg?itok=6JolD0_-&mtime=1490577640'),
];
  constructor() { }

  ngOnInit(): void {
  }

}
