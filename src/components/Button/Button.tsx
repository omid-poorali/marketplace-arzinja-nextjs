import React from "react";
import clsx from "clsx";
import "./Button.scss";


type PropsType = React.ComponentPropsWithoutRef<'button'>

export const Button = React.forwardRef((props: PropsType, forwardedRef: React.Ref<HTMLButtonElement>) => {
    const {
        className,
        ...rest
    } = props;

    const rootClassName = clsx("uiButton", className);

    return (
        <button ref={forwardedRef} className={rootClassName}{...rest} />
    );
});

Button.displayName = "Button";
