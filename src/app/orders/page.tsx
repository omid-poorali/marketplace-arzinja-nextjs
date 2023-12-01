import React from "react";
import { Orders } from "./Orders";
import { getOrders } from "./actions";

import './page.scss';


export default async function OrdersPage() {

  const { data: orders } = await getOrders();

  const classes = {
    root: "OrdersPage",
    list: "OrdersPage-list"
  }

  return (
    <main className={classes.root}>
      <ul className={classes.list}>
        <Orders initialOrders={orders} />
      </ul>
    </main>
  )
}