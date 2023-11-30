'use client'

import React, { useMemo } from 'react';
import { useControlled } from '@/hooks';
import { Option } from '@/types';
import clsx from 'clsx';
import './TabMenu.scss';

type CustomPropsType = {
    className?: string;
    disabled?: boolean;
    options?: Array<Option>;
    value?: any;
    defaultValue?: any;
    onChange?: (_event: { event: React.MouseEvent<HTMLButtonElement>, option: Option, value: any }) => void;
};

type PropsType = CustomPropsType & Omit<React.ComponentPropsWithoutRef<'ul'>, keyof CustomPropsType>

export const TabMenu = React.forwardRef((props: PropsType, forwardedRef: React.Ref<HTMLUListElement>) => {
    const {
        onChange,
        options = [],
        value: propValue,
        defaultValue,
        className,
        disabled = false,
        ...rest
    } = props;

    const [value, setValue] = useControlled<any>({
        controlled: propValue,
        default: defaultValue
    });

    const selectedOptionIndex = useMemo((): number => {
        for (let i = 0; i < options.length; i++) {
            if (options[i].value === value) {
                return i;
            }
        }

        return -1;
    }, [options, value]);

    const handleTabItemClick = (event: React.MouseEvent<HTMLButtonElement>, option: Option) => {
        if (!disabled) {
            setValue(option.value);
            onChange?.({ event, option, value: option.value });
        }
    };

    const rootClassName = clsx('uiTabMenu', className);
    const buttonClassName = 'uiTabMenu-button';

    return (
        <ul
            ref={forwardedRef}
            className={rootClassName}
            {...rest}>
            {React.Children.toArray(options.map((option, index) => (
                <li>
                    <button
                        data-active={selectedOptionIndex === index}
                        className={buttonClassName}
                        type="button"
                        onClick={event => handleTabItemClick(event, option)}>
                        {option.label}
                    </button>
                </li>
            )))}
        </ul>
    );
});

TabMenu.displayName = "TabMenu";
