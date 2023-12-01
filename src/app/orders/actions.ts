'use server'

import * as APIs from "@/apis";

export async function getOrders() {
    return await APIs.orders.get();
}
