import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'rb-recipe-detail',
    templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

    selectedRecipe: Recipe;

    constructor(private shoppingListService: ShoppingListService,
                private router: Router,
                private route: ActivatedRoute,
                private recipeService: RecipeService) {
    }

    private recipeIndex: number;
    private paramsSubscription: Subscription;

    ngOnInit() {
        this.paramsSubscription = this.route.params.subscribe(params => {
            this.recipeIndex = params['id'];
            this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
        });
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }

    onAddToShoppingList(): void {
        this.shoppingListService.addItems(this.selectedRecipe.ingredients);
    }

    onEdit(): void {
        this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
    }

    onDelete(): void {
        this.recipeService.deleteRecipe(this.selectedRecipe);
        this.router.navigate(['/recipes']);
    }
}
