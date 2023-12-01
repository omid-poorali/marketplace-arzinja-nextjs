'use client'

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Divider, TabMenu } from "@/components";
import { Routes } from '@/constants';
import { Option } from '@/types';
import { clsx } from "clsx";

import './Tabs.scss';


const options: Option[] = [
    { label: 'جستجو', value: 'search' },
    { label: 'سفارشات', value: 'orders' }
];

type PropsType = React.ComponentPropsWithoutRef<'div'>;

export const Tabs = (props: PropsType) => {

    const { className } = props;

    const router = useRouter();
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState(() => {
        if (pathname === Routes.HOME) {
            return 'search';
        }
        return 'orders'
    });


    const handleChange = ({ value }: { value: string }) => {
        setActiveTab(() => value);
        if (value === "search") {
            router.replace(Routes.HOME);
        }
        else router.replace(Routes.ORDERS);
    };

    const classes = {
        root: clsx("HomeTabs", className),
        tabs: "HomeTabs-tabs"
    };

    return (
        <nav className={classes.root}>
            <TabMenu
                className={classes.tabs}
                value={activeTab}
                options={options}
                onChange={handleChange} />
            <Divider />
        </nav>
    )
}