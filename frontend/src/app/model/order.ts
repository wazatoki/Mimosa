import { Item } from './item';

export class Order {
    id: string;
    date: Date;
    seatID: string;
    item: Item;
    quantity: number;
    isCompleted: boolean;
    isChecked: boolean;
}
