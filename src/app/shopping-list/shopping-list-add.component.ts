import {
    Component,
    Input,
    Output,
    OnChanges,
    EventEmitter
} from '@angular/core';

import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
    selector: 'rb-shopping-list-add',
    templateUrl: 'shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {

    @Input() item: Ingredient;
    @Output() cleared = new EventEmitter<void>();

    constructor(private shoppingListService: ShoppingListService) {
    }

    isAdd = true;

    ngOnChanges(changes) {
        this.isAdd = changes.item.currentValue === null;
        if (this.isAdd) {
            this.item = {
                name: null,
                amount: null
            }
        }
    }

    onSubmit(ingredient: Ingredient) {
        const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
        if (!this.isAdd) {
            this.shoppingListService.editItem(this.item, newIngredient);
            this.onClear();
        }
        else {
            this.item = newIngredient;
            this.shoppingListService.addItem(this.item);
        }
    }

    onDelete() {
        this.shoppingListService.deleteItem(this.item);
        this.onClear();
    }

    onClear() {
        this.isAdd = true;
        this.cleared.emit();
    }
}
