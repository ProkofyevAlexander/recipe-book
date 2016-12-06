import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
    selector: 'rb-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
    recipes: Recipe[];
    @Output() recipeSelected = new EventEmitter<Recipe>();
    recipe = new Recipe('Dummy', 'Dummy', 'https://www.beaulieu.co.uk/wp/wp-content/uploads/2016/02/Crash-Test-Dummy-11.jpg');

    onSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }
}
