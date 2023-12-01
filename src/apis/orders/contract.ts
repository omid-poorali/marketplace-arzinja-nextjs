import * as Models from '@/models';


export type GetOrdersRequest = void;

export type GetOrdersResponse = {
    data: Models.Order[];
};

//------------------------------------------------------------------------------------


export type CreateOrderRequest = Models.NewOrder;

export type CreateOrderResponse = {
    data: Models.Order;
};