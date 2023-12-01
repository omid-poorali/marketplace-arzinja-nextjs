import { Product } from ".";

export enum OrderStatus {
    PENDING = 'pending',
    IN_PROGRESS = 'in-process',
    DELIVERY = 'delivery',
    DELIVERED = 'delivered'
}

export type Order = {
    id: string;
    status: OrderStatus;
    product: Product;
    address: {
        lat: number;
        lng: number;
    }
};

export type NewOrder = Pick<Order, 'product' | 'address'>