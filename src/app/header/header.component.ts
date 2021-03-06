import { Component } from '@angular/core';

import { RecipeService } from '../recipes/recipe.service';

@Component({
    selector: 'rb-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private recipeService: RecipeService) {
    }

    onStore(): void {
        this.recipeService.storeData().subscribe(
            data => console.log(data),
            error => console.error(error)
        );
    }

    onFetch(): void {
        this.recipeService.fetchData();
    }
}
