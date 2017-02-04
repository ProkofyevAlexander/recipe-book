import {
    Component,
    OnInit,
    OnDestroy
} from '@angular/core';
import {
    FormArray,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import { Subscription } from 'rxjs';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
    selector: 'rb-recipe-edit',
    templateUrl: 'recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {

    constructor(private route: ActivatedRoute,
                private recipeService: RecipeService,
                private formBuilder: FormBuilder,
                private router: Router) {
    }

    recipeForm: FormGroup;

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
            (params: any) => {
                this.isNew = !params.hasOwnProperty('id');
                if (!this.isNew) {
                    this.recipeIndex = +params['id'];
                }
                this.recipe = this.isNew
                    ? null
                    : this.recipeService.getRecipe(this.recipeIndex);
                this.initForm();
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onSubmit(): void {
        const newRecipe = this.recipeForm.value;
        if (this.isNew) {
            this.recipeService.addRecipe(newRecipe);
        }
        else {
            this.recipeService.editRecipe(this.recipe, newRecipe);
        }
        this.navigateBack();
    }

    onCancel(): void {
        this.navigateBack();
    }

    onAddItem(name: string, amount: string): void {
        (<FormArray>this.recipeForm.controls['ingredients']).push(
            new FormGroup({
                name: new FormControl(name, Validators.required),
                amount: new FormControl(amount, [
                    Validators.required,
                    Validators.pattern('\\d+')
                ])
            })
        )
    }

    onRemoveItem(index: number): void {
        (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
    }

    private recipeIndex: number;
    private recipe: Recipe;
    private isNew = true;
    private subscription: Subscription;

    private navigateBack(): void {
        this.router.navigate(['../']);
    }

    private initForm(): void {
        let recipeName = '';
        let recipeImageUrl = '';
        let recipeContent = '';
        let recipeIngredients: FormArray = new FormArray([]);

        if (!this.isNew) {
            this.recipe.ingredients.forEach(ingredient => {
                recipeIngredients.push(
                    new FormGroup({
                        name: new FormControl(ingredient.name, Validators.required),
                        amount: new FormControl(ingredient.amount, [
                            Validators.required,
                            Validators.pattern('\\d+')
                        ])
                    })
                )
            });
            recipeName = this.recipe.name;
            recipeImageUrl = this.recipe.imagePath;
            recipeContent = this.recipe.description;
        }
        this.recipeForm = this.formBuilder.group({
            name: [recipeName, Validators.required],
            imagePath: [recipeImageUrl, Validators.required],
            description: [recipeContent, Validators.required],
            ingredients: recipeIngredients
        });
    }
}