import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes: Recipe[] = [
  new Recipe('Recipe Name', 'Description',
    'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/strozzapreti-pumpkin-bacon.jpg?itok=6JolD0_-&mtime=1490577640'),

  new Recipe('Another Recipe Name', 'Description',
    'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/strozzapreti-pumpkin-bacon.jpg?itok=6JolD0_-&mtime=1490577640'),

  new Recipe('Another 2 Recipe Name', 'Description',
    'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/strozzapreti-pumpkin-bacon.jpg?itok=6JolD0_-&mtime=1490577640'),

  new Recipe(' Another 22Recipe Name', 'Description',
    'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/strozzapreti-pumpkin-bacon.jpg?itok=6JolD0_-&mtime=1490577640'),

  new Recipe('Recipe Name 1', 'Description',
    'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/strozzapreti-pumpkin-bacon.jpg?itok=6JolD0_-&mtime=1490577640'),
];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
