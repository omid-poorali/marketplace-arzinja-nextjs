import React from "react";
import clsx from "clsx";
import "./IconButton.scss";

type CustomProps = {
    className?: string;
};

type PropsType = CustomProps & Omit<React.ComponentPropsWithoutRef<'button'>, keyof CustomProps>

export const IconButton = React.forwardRef((props: PropsType, forwardedRef: React.Ref<HTMLButtonElement>) => {
    const {
        className,
        children,
        type = 'button',
        ...rest
    } = props;

    const rootClassName = clsx("uiIconButton", className);

    return (
        <button ref={forwardedRef}
            type={type}
            className={rootClassName}
            {...rest}>
            {children}
        </button>

    );
});

IconButton.displayName = "IconButton";
