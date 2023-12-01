import { Product } from ".";

export type Order = {
    id: string;
    status: 'pending' | 'in-process' | 'delivery' | 'delivered';
    product: Product;
    address: {
        lat: number;
        lng: number;
    }
};

export type NewOrder = Pick<Order, 'product' | 'address'>