import React from "react";
import Image from "next/image";
import clsx from "clsx";
import * as Models from "@/models";
import * as Utils from '@/utils';

type CustomProps = Models.Order;

type PropsType = CustomProps & Omit<React.ComponentPropsWithoutRef<'li'>, keyof CustomProps>

export const Order = React.forwardRef((props: PropsType, forwardedRef: React.Ref<HTMLLIElement>) => {
    const {
        className,
        product,
        status
    } = props;

    const classes = {
        root: clsx("Order", className),
        article: "Order-article",
        imageContainer: "Order-imageContainer",
        square: "Order-square",
        container: "Order-container",
        title: "Order-title",
        price: "Order-price",
        priceNumber: "Order-priceNumber",
        status: "Order-status",
    }

    return (
        <li ref={forwardedRef} className={classes.root}>
            <article className={classes.article}>
                <div className={classes.imageContainer}>
                    <div className={classes.square}>
                        <Image
                            fill
                            style={{ objectFit: 'cover' }}
                            alt={product.image.alt}
                            src={product.image.src} />
                    </div>
                </div>
                <div className={classes.container}>
                    <h3 className={classes.title}>{product.title}</h3>
                    <div className={classes.price}>
                        <span className={classes.priceNumber}>{Utils.String.numberWithCommas(product.price)}</span>
                        <span>تومان</span>
                    </div>
                </div>
                <div className={classes.status}>{status}</div>
            </article>
        </li>
    );
});

Order.displayName = "Order";    