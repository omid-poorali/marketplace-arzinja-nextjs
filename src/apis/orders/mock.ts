import {
  GetOrdersRequest,
  GetOrdersResponse,
  CreateOrderRequest,
  CreateOrderResponse
} from './contract';
import * as Models from "@/models";
import * as Utils from "@/utils";

let orders: Models.Order[] = [
  {
    id: Utils.UUID.generate(),
    address: {
      lat: 0,
      lng: 0
    },
    product: {
      id: "uuid1",
      title: "گوشی موبایل سامسونگ مدل Galaxy A34 5G دو سیم کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت - ویتنام",
      price: 15450000,
      image: {
        src: "/images/products/a54.jpg",
        alt: ""
      }
    },
    status: Models.OrderStatus.PENDING
  }
];

const getStatus = (prevState: Models.OrderStatus) => {
  switch (prevState) {
    case Models.OrderStatus.PENDING:
      return Models.OrderStatus.IN_PROGRESS;

    case Models.OrderStatus.IN_PROGRESS:
      return Models.OrderStatus.DELIVERY;

    default:
      return Models.OrderStatus.DELIVERED;
  }
}

setInterval(() => {
  orders = orders.map(order => ({ ...order, status: getStatus(order.status) }))
}, 30000)

export const get = async (_payload: GetOrdersRequest) => new Promise<GetOrdersResponse>((resolve) => {
  resolve({ data: orders });
});

//-------------------------------------------------------------------------------------


export const createOrder = async (payload: CreateOrderRequest) => new Promise<CreateOrderResponse>((resolve) => {
  const newOrder: Models.Order = {
    id: Utils.UUID.generate(),
    status: Models.OrderStatus.PENDING,
    ...payload
  };
  resolve({ data: newOrder });
});