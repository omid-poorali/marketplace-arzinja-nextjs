import request from "@/apis/request";

import {
    GetProductsRequest,
    GetProductsResponse,
} from './contract';
import * as Utils from "@/utils";



export const get = async (payload: GetProductsRequest) => request.get<GetProductsResponse>(`/v1/products${Utils.API.createQueryString(payload)}`);