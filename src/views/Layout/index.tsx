import React, { ReactNode, useState, useEffect } from 'react';
import classnames from 'classnames';

import '../../App.css';
import Header from '../../components/Header';

interface Props {
    children: ReactNode
}

const Layout = ({
    children
}: Props) => {
    const lsKey = 'mixchex_countries_darkmode';
    const [dark, setDark] = useState<boolean>(localStorage.getItem(lsKey) === 'true');

    const toggleDarkMode = () => {
        let darkSetting = !dark;
        setDark(darkSetting);
        localStorage.setItem(lsKey, darkSetting.toString());
    }

    return (
        <div className={classnames({
            dark: dark
        })}>
        <div className="bg-gray-100 dark:bg-blue-800 dark:text-white w-screen h-screen transition-colors overflow-auto">
            <Header
                dark={dark}
                onToggleDarkMode={toggleDarkMode}
            />
            <main className="container mx-auto py-6 md:py-8 md:text-sm">
                {children}
            </main>
        </div>
        </div>
    )
}

export default Layout;