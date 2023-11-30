import React from "react";
import Image from "next/image";
import clsx from "clsx";
import DefaultImage from '@/assets/avatar.jpg';
import "./Avatar.scss";

type CustomProps = {
    className?: string;
    imageUrl?: string;
    alt?: string;
};

type PropsType = CustomProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof CustomProps>

export const Avatar = React.forwardRef((props: PropsType, forwardedRef: React.Ref<HTMLDivElement>) => {
    const {
        className,
        imageUrl,
        alt = "user profile avatar",
        ...rest
    } = props;

    const rootClassName = clsx("uiAvatar", className);

    return (
        <div ref={forwardedRef}
            className={rootClassName}
            {...rest}>
            <Image
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'contain',
                }}
                src={imageUrl ?? DefaultImage}
                alt={alt}
            />
        </div>

    );
});

Avatar.displayName = "Avatar";
