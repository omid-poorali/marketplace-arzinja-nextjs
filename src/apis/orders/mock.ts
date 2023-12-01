import {
  GetOrdersRequest,
  GetOrdersResponse,
  CreateOrderRequest,
  CreateOrderResponse
} from './contract';
import * as Models from "@/models";
import * as Utils from "@/utils";

const orders: Models.Order[] = [];

export const get = async (payload: GetOrdersRequest) => new Promise<GetOrdersResponse>((resolve, reject) => {
  resolve({ data: orders });
});

//-------------------------------------------------------------------------------------


export const createOrder = async (payload: CreateOrderRequest) => new Promise<CreateOrderResponse>((resolve, reject) => {
  const newOrder: Models.Order = {
    id: Utils.UUID.generate(),
    status: "pending",
    ...payload
  };
  orders.push(newOrder);
  resolve({ data: newOrder });
});