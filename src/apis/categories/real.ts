import request from "@/apis/request";

import {
    GetCategoriesRequest,
    GetCategoriesResponse,
} from './contract';

export const get = async (_payload: GetCategoriesRequest) => request.get<GetCategoriesResponse>(`/v1/categories`);