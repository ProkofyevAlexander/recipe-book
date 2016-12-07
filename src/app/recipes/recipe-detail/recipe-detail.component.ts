import { Component, Input } from '@angular/core';

import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list';

@Component({
    selector: 'rb-recipe-detail',
    templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent {

    @Input() selectedRecipe: Recipe;

    constructor(private shoppingListService: ShoppingListService) {
    }

    onAddToShoppingList(): void {
        this.shoppingListService.addItems(this.selectedRecipe.ingredients);
    }
}
