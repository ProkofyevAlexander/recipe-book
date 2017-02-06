import { Injectable, EventEmitter } from '@angular/core';
import {
    Headers,
    Http,
    Response
} from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs';

import { Recipe } from './recipe';

@Injectable()
export class RecipeService {

    recipeChanged = new EventEmitter<Recipe[]>();

    private recipes: Recipe[] = [];

    constructor(private http: Http) {
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

    storeData(): Observable<Response> {
        const body = JSON.stringify(this.recipes);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.put(
            'https://recipe-book-66a06.firebaseio.com/recipes.json',
            body,
            {
                headers: headers
            }
        );
    }

    fetchData(): void {
        this.http.get('https://recipe-book-66a06.firebaseio.com/recipes.json')
            .map((response: Response) => response.json())
            .subscribe((data: Recipe[]) => {
                this.recipes = data;
                this.recipeChanged.emit(this.recipes);
            });
    }
}
