import { RECIPE_LIST_COMPONENTS } from './recipe-list';
import { RECIPE_DETAIL_COMPONENTS } from './recipe-detail';
import { RECIPE_EDIT_COMPONENTS } from './recipe-edit';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start.component';

export { RecipesComponent } from './recipes.component';
export { RecipeService } from './recipe.service';
export { RECIPES_ROUTES } from './recipes.routes';

export const RECIPES_COMPONENTS = [
    RECIPE_LIST_COMPONENTS,
    RECIPE_DETAIL_COMPONENTS,
    RECIPE_EDIT_COMPONENTS,
    RecipesComponent,
    RecipeStartComponent
];