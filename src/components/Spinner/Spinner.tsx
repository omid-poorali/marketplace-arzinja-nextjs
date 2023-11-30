import clsx from "clsx";
import React from "react";
import "./Spinner.scss";

type CustomProps = {
    children?: React.ReactNode;
    className?: string;
};

type PropsType = CustomProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof CustomProps>

export const Spinner = React.forwardRef((props: PropsType, forwardedRef: React.Ref<HTMLImageElement>) => {

    const {
        children,
        className,
        ...rest
    } = props;

    const spinnerClassName = clsx("uiSpinner", className);

    return (
        <div ref={forwardedRef} className={spinnerClassName} {...rest} />
    );
})

Spinner.displayName = "Spinner";
