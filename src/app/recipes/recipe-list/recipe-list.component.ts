import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
    selector: 'rb-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Very tasty', 'http://amam.ru/recepts_img/406/shnitsel_iz_tre-shag_12_amam.ru.jpg', []),
        new Recipe('Summer Salad', 'Okayish', 'http://www.jlady.ru/wp-content/uploads/2010/06/salat-letnij-1.jpg', [])
    ];
    @Output() recipeSelected = new EventEmitter<Recipe>();

    onSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }
}
