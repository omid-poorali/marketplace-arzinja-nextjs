import "./Categories.scss";
import React from "react";
import { HomeCategory } from "../Category";
import clsx from "clsx";
import * as APIs from "@/apis";

type PropsType = React.ComponentPropsWithoutRef<"main">;

async function getCategories() {
    return await APIs.categories.get();
};

export const Categories = async (props: PropsType) => {
    const { className } = props;

    const { data: categories } = await getCategories();

    const classes = {
        root: clsx("HomeCategories", className),
        list: "HomeCategories-list"
    }

    return (
        <main className={classes.root}>
            <ul className={classes.list}>
                {React.Children.toArray(categories.map(category => (
                    <HomeCategory {...category} />
                )))}
            </ul>
        </main>
    )
}