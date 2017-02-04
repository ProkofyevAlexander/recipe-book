import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from '../shared';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
        'Schnitzel',
        'Very tasty',
        'http://amam.ru/recepts_img/406/shnitsel_iz_tre-shag_12_amam.ru.jpg',
        [
            new Ingredient('French Fries', 2),
            new Ingredient('Pork Meat', 1)
        ]
    ),
    new Recipe(
        'Summer Salad',
        'Okayish',
        'http://www.jlady.ru/wp-content/uploads/2010/06/salat-letnij-1.jpg',
        []
    )
  ];

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipe(id: number): Recipe {
      return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe): void {
      this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe): void {
      this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe): void {
      this.recipes[this.recipes.lastIndexOf(oldRecipe)] = newRecipe;
  }
}
