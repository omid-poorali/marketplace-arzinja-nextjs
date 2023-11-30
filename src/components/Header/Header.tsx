import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserMenu } from './UserMenu';
import { DarkModeToggle } from '@/components';
import LogoImage from '@/assets/logo.png';
import clsx from 'clsx';
import './Header.scss';


type PropsType = React.ComponentPropsWithoutRef<'div'>

export const Header = (props: PropsType) => {

    const { className } = props;

    const classes = {
        root: clsx("uiHeader", className),
        title: "uiHeader-title",
        logo: "uiHeader-logo",
        side: "uiHeader-side"
    };

    return (
        <header className={classes.root}>
            <h1 className={classes.title}>خرید آنلاین بلیط هواپیما، قطار و اتوبوس</h1>
            <div className={classes.side}>
                <Link href="/">
                    <Image
                        className={classes.logo}
                        width={60}
                        height={60}
                        src={LogoImage}
                        alt="logo" />
                </Link>

            </div>

            <div className={classes.side}>
                <DarkModeToggle />
                <UserMenu />
            </div>
        </header>
    )
}