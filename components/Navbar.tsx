'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaRegTimesCircle, FaRegArrowAltCircleLeft } from "react-icons/fa";
import ThemeChange from './utils/ThemeChange';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const menuItems = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Projects', link: '/projects' },
        { name: 'Contact', link: '/contact' },
    ];

    return (
        <header className="relative z-40">
            <nav className="mx-auto flex justify-between items-center p-3">
                <Link href="/" className="btn btn-ghost btn-sm text-lg font-bold text-blue-500">Sabbir</Link>
                <div className='flex items-center space-x-4'>

                    <div className="hidden md:flex space-x-4">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                className="btn btn-sm btn-ghost"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>



                    <ThemeChange />

                    <div className="md:hidden z-50">
                        <button onClick={toggleMenu} className="btn btn-ghost btn-circle transition duration-500 ease-in-out transform hover:scale-110 focus:outline-none">
                            {isOpen ? <FaRegTimesCircle /> : <FaRegArrowAltCircleLeft />}
                        </button>
                    </div>

                </div>

            </nav>
            <div
                className={`md:hidden fixed top-0 left-0 right-0 bottom-0 bg-base-300 bg-opacity-90 z-40 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            onClick={toggleMenu}
                            className="font-bold text-2xl"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
