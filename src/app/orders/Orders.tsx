"use client";

import React, { useEffect, useRef, useState } from "react";
import { Order } from "./Order";
import { getOrders } from "./actions";
import * as Models from "@/models";

type CustomProps = {
    initialOrders: Models.Order[];
};

export const Orders = (props: CustomProps) => {

    const { initialOrders } = props;

    const [orders, setOrders] = useState(initialOrders);

    const checkInterval = useRef<NodeJS.Timeout | null>();

    useEffect(() => {
        if (!checkInterval.current) {
            checkInterval.current = setInterval(() => {
                getOrders().then(res => {
                    setOrders(() => res.data);
                });
            }, 5000);
        }
        return () => {
            if (checkInterval.current) {
                clearInterval(checkInterval.current);
                checkInterval.current = null;
            }
        }
    }, [checkInterval]);

    return (
        <>
            {React.Children.toArray(orders.map(order => (
                <Order {...order} />
            )))}
        </>
    );
};