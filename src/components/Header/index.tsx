import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom";

interface Props {
    dark: Boolean
    onToggleDarkMode: () => void,
}

const Header = ({
    dark = false,
    onToggleDarkMode
}: Props) => {
    return (
        <div className=" bg-white dark:bg-blue-700 dark:text-white shadow-md transition-colors">
            <div className="container mx-auto flex justify-between items-center h-20 md:h-24 px-2">
                <div className="flex flex-col sm:flex-row sm:space-x-2 items-baseline p-3">
                    <h1 className="font-bold">
                        <Link to="./" rel="home" className="px-1 py-1 block">Where in the World?</Link>
                    </h1>
                </div>
                <div className="flex space-x-4 items-center">
                    <a href="https://twitter.com/mixchex?ref_src=twsrc%5Etfw" className="hidden bg-blue-700 text-white md:block px-4 py-1 rounded-full dark:bg-white dark:text-blue-800 twitter-follow-button" data-show-count="false">Follow @mixchex</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                    <button onClick={() => onToggleDarkMode()} className="flex space-x-2 items-center px-3 py-2">
                        { dark ?
                            <>
                                <SunIcon className="w-6 h-6" />
                                <span className="hidden sm:block">Light Mode</span>
                            </> :
                            <>
                                <MoonIcon className="w-6 h-6" />
                                <span className="hidden sm:block">Dark Mode</span>
                            </>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Header;