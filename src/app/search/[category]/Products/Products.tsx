import "./Products.scss";
import React from "react";
import { HomeProduct } from "../Product";
import clsx from "clsx";
import * as APIs from "@/apis";

type CustomProps = {
    category: string;
};

type PropsType = CustomProps & React.ComponentPropsWithoutRef<"main">;

async function getProducts(category: string) {
    return await APIs.products.get({ category });
};

export const Products = async (props: PropsType) => {
    const { category } = props;

    const { className } = props;

    const { data: Products } = await getProducts(category);

    const classes = {
        root: clsx("HomeProducts", className),
        list: "HomeProducts-list"
    }

    return (
        <main className={classes.root}>
            <ul className={classes.list}>
                {React.Children.toArray(Products.map(category => (
                    <HomeProduct {...category} />
                )))}
            </ul>
        </main>
    )
}