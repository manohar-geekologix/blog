'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
    const size = "24px";
    const [darkMode, setDarkMode] = useState('dark');

    const switchMode = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (darkMode) {
                localStorage.setItem("darkMode", "true");
                window.document.documentElement.classList.add('dark');

            }

            else if (darkMode == false) {
                localStorage.setItem("darkMode", "false");
                window.document.documentElement.classList.remove('dark');
            }

            else {
                setDarkMode(localStorage.getItem('darkMode') === "true");
            }
        }
    }, [darkMode]);

    return (
        <div className="mx-auto bg-sky-900 dark:bg-sky-900 dark:text-black">
            <div className="container mx-auto">
                <div className="flex justify-between mx-auto py-4">
                    <div>
                        <Link href={'/'} className="p-3 hover:text-blue-600">Home</Link>
                        <Link href={'/blog'} className="p-3 hover:text-blue-600">Blog</Link>
                    </div>

                    <div className="transition animate-bounce scale-150">
                        {darkMode ?
                            <FontAwesomeIcon
                                icon={faSun}
                                width={20}
                                height={20}
                                onClick={switchMode}
                            /> :
                            <FontAwesomeIcon
                                icon={faMoon}
                                width={20}
                                height={20}
                                onClick={switchMode}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}