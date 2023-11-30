import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "@/constants";
import clsx from "clsx";
import * as Models from "@/models";
import * as Utils from '@/utils';

type CustomProps = Models.Category;

type PropsType = CustomProps & Omit<React.ComponentPropsWithoutRef<'li'>, keyof CustomProps>

export const HomeCategory = React.forwardRef((props: PropsType, forwardedRef: React.Ref<HTMLLIElement>) => {
    const {
        className,
        id,
        title,
        image
    } = props;

    const classes = {
        root: clsx("HomeCategory", className),
        article: "HomeCategory-article",
        images: "HomeCategory-images",
        square: "HomeCategory-square",
        title: "HomeCategory-title"
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
                </article>
            </Link>
        </li>
    );
});

HomeCategory.displayName = "HomeCategory";    