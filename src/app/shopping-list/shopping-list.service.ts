import { Ingredient } from '../shared';

export class ShoppingListService {

    constructor() {
    }

    getItems(): Ingredient[] {
        return this.items;
    }

    addItems(items: Ingredient[]): void {
        Array.prototype.push.apply(this.items, items);
    }

    private items: Ingredient[] = [];

}
