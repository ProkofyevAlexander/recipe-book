import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
    selector: 'rb-shopping-list',
    templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

    constructor(private shoppingListService: ShoppingListService) {
    }

    items: Ingredient[] = [];
    selectedItem: Ingredient = null;

    ngOnInit() {
        this.items = this.shoppingListService.getItems();
    }

    onSelectItem(item: Ingredient) {
        this.selectedItem = item;
    }

    onCleared() {
        this.selectedItem = null;
    }
}
