import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "@/constants";
import { BuyButton } from "./BuyButton";
import clsx from "clsx";
import * as Models from "@/models";
import * as Utils from '@/utils';

type CustomProps = Models.Product;

type PropsType = CustomProps & Omit<React.ComponentPropsWithoutRef<'li'>, keyof CustomProps>

export const HomeProduct = React.forwardRef((props: PropsType, forwardedRef: React.Ref<HTMLLIElement>) => {
    const {
        className,
        id,
        title,
        price,
        image
    } = props;

    const classes = {
        root: clsx("HomeProduct", className),
        article: "HomeProduct-article",
        images: "HomeProduct-images",
        square: "HomeProduct-square",
        title: "HomeProduct-title",
        price: "HomeProduct-price",
        priceNumber: "HomeProduct-priceNumber",
    }

    return (
        <li ref={forwardedRef} className={classes.root}>
            <Link
                href={Utils.Route.generatePath(Routes.SEARCH_CATEGORY, { category: id })}>
                <article className={classes.article}>
                    <div className={classes.square}>
                        <Image
                            fill
                            style={{ objectFit: 'cover' }}
                            alt={image.alt}
                            src={image.src} />
                    </div>
                    <h3 className={classes.title}>{title}</h3>
                    <div className={classes.price}>
                        <span className={classes.priceNumber}>{Utils.String.numberWithCommas(price)}</span>
                        <span>تومان</span>
                    </div>
                    <BuyButton {...{ id, title, price, image }} />
                </article>
            </Link>
        </li>
    );
});

HomeProduct.displayName = "HomeProduct";    