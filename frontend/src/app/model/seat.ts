import { Order } from './order';

export class Seat {
    id: string;
    orders: Order[];

    constructor() {
        this.orders = [];
    }
}
