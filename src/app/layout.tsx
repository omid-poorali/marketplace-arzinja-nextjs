import '@/styles/index.scss';
import type { Metadata } from 'next';
import { Header } from '@/components';
import { Tabs } from './Tabs';
import './layout.scss';

export const metadata: Metadata = {
  title: 'ارزینجا | بزرگترین سامانه خرید و فروش بیت کوین و ارز دیجیتال',
  description: 'ارزینجا | خرید بیت کوین و فروش بیت کوین وخرید و فروش بیتکوین و خرید ارزدیجیتال و فروش ارزدیجیتال و صرافی ارزدیجیتال و تتر و خرید و فروش ترون',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const classes = {
    header: "HomeLayout-header",
    body: "HomeLayout-body",
    tabs: "HomeLayout-tabs",
    curtain: "HomeLayout-curtain",
  };

  return (
    <html lang="fa" dir='rtl' data-theme="light">
      <body className={classes.body} >
        <Header className={classes.header} />
        <Tabs className={classes.tabs} />
        <div className={classes.curtain} />
        {children}
      </body>
    </html>
  )
}
