'use client'

import React from "react";
import { useOrder } from "../order-context";
import { Button } from "@/components";
import * as Models from "@/models";

type CustomProps = Models.Product;

type PropsType = CustomProps & Omit<React.ComponentPropsWithoutRef<'button'>, keyof CustomProps>

export const BuyButton = React.forwardRef((props: PropsType, forwardedRef: React.Ref<HTMLButtonElement>) => {
    const {
        id,
        title,
        price,
        image
    } = props;

    const { createOrder } = useOrder();

    const handleClick = () => {
        createOrder({ id, title, image, price });
    }

    return (
        <Button onClick={handleClick}>خرید</Button>
    );
});

BuyButton.displayName = "BuyButton";    