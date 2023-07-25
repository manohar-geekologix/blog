'use client';
//import { 'Great Vibes' } from 'next/font/google'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Home from "../app/page";

export default function Header() {
    const size = "24px";
    const [darkMode, setDarkMode] = useState('');

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
        <div className="container mx-auto bg-blue-300 dark:bg-yellow-100 dark:text-black">
            <div>
                <Link href={'/'} className="p-3 mt-8">Home</Link>
                <Link href={'/blog'} className="p-3 mt-8">Blog</Link>
            </div>

            <div className="flex basis-1/4  cursor-pointer hover:text-blue-600 justify-end mr-10 mt-3">
                <div className="transition animate-bounce m-5 scale-150">
                    {darkMode ? <div onClick={switchMode} >sun</div> : <div onClick={switchMode}>moon</div>}
                </div>
            </div>
        </div>

    )
}