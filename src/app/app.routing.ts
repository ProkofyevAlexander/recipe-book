import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent, RECIPES_ROUTES } from './recipes';
import { ShoppingListComponent } from './shopping-list';

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        component: RecipesComponent,
        children: RECIPES_ROUTES
    },
    {
        path: 'shopping-list',
        component: ShoppingListComponent
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);