import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RECIPE_LIST_COMPONENTS } from './recipe-list';
import { RECIPE_DETAIL_COMPONENTS } from './recipe-detail';
import { RECIPE_EDIT_COMPONENTS } from './recipe-edit';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start.component';
import { recipesRouting } from './recipes.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        RECIPE_LIST_COMPONENTS,
        RECIPE_DETAIL_COMPONENTS,
        RECIPE_EDIT_COMPONENTS,
        RecipesComponent,
        RecipeStartComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        recipesRouting
    ]
})
export class RecipesModule {}