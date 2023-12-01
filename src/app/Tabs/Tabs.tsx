'use client'

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

    const handleChange = ({ value }: { value: string }) => {
        if (value === "orders") {
            router.replace(Routes.ORDERS);
        }
        else router.replace(Routes.HOME);
    };

    const classes = {
        root: clsx("HomeTabs", className),
        tabs: "HomeTabs-tabs"
    };

    const activeTab = pathname.includes(Routes.ORDERS) ? "orders" : "search"

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