'use client'

import React, { useEffect, useState } from 'react';
import { Enums } from '@/constants';
import { IconButton } from '../IconButton';
import { Moon as DarkModeIcon, Sun as LightModeIcon } from 'lucide-react';
import clsx from 'clsx';
import './DarkModeToggle.scss';

type CustomProps = {
    className?: string | undefined;
}

type DarkModeToggleProps = CustomProps & Omit<React.ComponentPropsWithoutRef<'button'>, keyof CustomProps>;


export const DarkModeToggle = React.forwardRef<HTMLButtonElement, DarkModeToggleProps>((props, ref) => {
    const {
        className,
        children,
        ...rest
    } = props;


    const [theme, setTheme] = useState<Enums.Theme>()

    const toggleTheme = () => {
        if (theme == Enums.Theme.LIGHT) {
            setTheme(Enums.Theme.DARK)
        }
        else setTheme(Enums.Theme.LIGHT)
    }


    const maybeTheme = () => {
        const themeLocalStorage = localStorage.getItem('theme')
        const themeSystem = window.matchMedia('(prefers-color-scheme: dark)').matches ? Enums.Theme.DARK : Enums.Theme.LIGHT

        return (themeLocalStorage ?? themeSystem ?? "light") as Enums.Theme
    }

    useEffect(() => {
        const currentTheme = theme ?? maybeTheme();
        document.documentElement.setAttribute("data-theme", currentTheme);
        localStorage.setItem('theme', currentTheme)
        setTheme(currentTheme)

        const useSetTheme = (e: MediaQueryListEvent) => { setTheme(e.matches ? Enums.Theme.DARK : Enums.Theme.LIGHT) }

        const watchSysTheme = window.matchMedia('(prefers-color-scheme: dark)')

        watchSysTheme.addEventListener('change', useSetTheme)

        return () => watchSysTheme.removeEventListener('change', useSetTheme);
    }, [theme])

    const classes = {
        root: "uiDarkModeToggle"
    }


    return (
        <IconButton
            ref={ref}
            className={clsx(classes.root, className)}
            aria-label="Dark mode toggle"
            {...rest}
            onClick={toggleTheme}>
            {theme === Enums.Theme.DARK ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
    )
})

DarkModeToggle.displayName = 'DarkModeToggle';