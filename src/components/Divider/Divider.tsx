import React from "react";
import clsx from "clsx";
import "./Divider.scss";

type CustomProps = {
    dashed?: boolean;
    type?: 'horizontal' | 'vertical';
};

type PropsType = CustomProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof CustomProps>

export const Divider = React.forwardRef((props: PropsType, forwardedRef: React.Ref<HTMLDivElement>) => {
    const {
        className,
        children,
        dashed = false,
        type = 'horizontal',
        ...rest
    } = props;

    const rootClassName = clsx("uiDivider",
        `uiDivider-${type}`,
        { "uiDivider-dashed": dashed }
        , className);

    return (
        <div ref={forwardedRef}
            className={rootClassName}
            {...rest}>

        </div>

    );
});

Divider.displayName = "Divider";    