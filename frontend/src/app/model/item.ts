import { Category } from './category';
import { Order } from './order';

export class Item {
    id: string;
    name: string;
    price: number;
    unit: string;
    rowOrder: number;
    categories: Category[];
    orders: Order[];

    constructor() {
        this.categories = [];
        this.orders = [];
    }
}
