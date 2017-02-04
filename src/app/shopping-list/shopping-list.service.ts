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

    addItem(item: Ingredient): void {
        this.items.push(item);
    }

    editItem(oldItem: Ingredient, newItem: Ingredient) {
        this.items[this.items.indexOf(oldItem)] = newItem;
    }

    deleteItem(item: Ingredient) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    private items: Ingredient[] = [];

}
