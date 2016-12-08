import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { ShoppingListService } from './shopping-list.service';

export { ShoppingListComponent } from './shopping-list.component';
export { ShoppingListService } from './shopping-list.service';

export const SHOPPING_LIST_COMPONENTS = [
    ShoppingListComponent,
    ShoppingListAddComponent
];

export const SHOPPING_LIST_SERVICES = [
    ShoppingListService
];