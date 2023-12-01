import request from "@/apis/request";

import {
    GetOrdersRequest,
    GetOrdersResponse,
    CreateOrderRequest,
    CreateOrderResponse
} from './contract';
import * as Utils from "@/utils";



export const get = async (_payload: GetOrdersRequest) => request.get<GetOrdersResponse>(`/v1/orders`);

export const createOrder = async (payload: CreateOrderRequest) => request.post<CreateOrderRequest, CreateOrderResponse>(`/v1/orders`, payload);