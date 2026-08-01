'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaRegTimesCircle, FaBars, FaCode, FaGraduationCap, FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeChange from './utils/ThemeChange';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isDevPage = pathname?.startsWith('/dev');
    const isHomePage = pathname === '/';

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const getLinkHref = (href: string) => {
        if (!href.startsWith("#")) {
            return href;
        }

        return isHomePage ? href : `/${href}`;
    };

    const academicMenuItems = [
        { name: "Overview", href: "#overview" },
        { name: "Education", href: "#education" },
        { name: "Research", href: "#research" },
        { name: "Publications", href: "#manuscripts" },
        { name: "Conferences", href: "#conferences" },
        { name: "Skills", href: "#skills" },
        { name: "Blog", href: "/blog" },
    ];

    const devMenuItems = [
        { name: 'Dev Home', href: '/dev' },
        { name: 'Tech Stack', href: '/dev#tech-stack' },
        { name: 'Projects', href: '/dev#projects' },
        { name: 'Academic Profile', href: '/' },
    ];

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        closeMenu();
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.slice(1);
            const targetElement = document.getElementById(targetId);
            targetElement?.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-base-100/90 backdrop-blur-md border-b border-base-200 transition-colors">
            <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
                {/* Brand Logo & Mode Indicator */}
                <div className="flex items-center space-x-3">
                    <Link href="/" onClick={closeMenu} className="group flex items-center space-x-2">
                        <div className="flex flex-col">
                            <span className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                                Sabbir Hasan
                            </span>
                            <span className="text-xs text-base-content/70 flex items-center gap-1 font-mono">
                                {isDevPage ? (
                                    <>
                                        <FaCode className="text-secondary" /> Dev
                                    </>
                                ) : (
                                    <>
                                        <FaGraduationCap className="text-primary" /> Researcher
                                    </>
                                )}
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center space-x-1">
                    {isDevPage ? (
                        devMenuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="btn btn-ghost btn-sm font-medium hover:bg-base-200 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))
                    ) : (
                        academicMenuItems.map((item) => {
                            const href = getLinkHref(item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={href}
                                    onClick={(e) => handleNavClick(e, href)}
                                    className="btn btn-ghost btn-sm font-medium hover:bg-base-200 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            );
                        })
                    )}
                </div>

                {/* Right Side Actions: Switcher + Theme + Socials */}
                <div className="flex items-center space-x-2 sm:space-x-3">
                    {/* Dev / Academic Mode Switcher */}
                    {isDevPage ? (
                        <Link
                            href="/"
                            onClick={closeMenu}
                            className="btn btn-outline btn-primary btn-sm flex items-center gap-1.5 rounded-full px-3 shadow-sm hover:scale-105 transition-all"
                        >
                            <FaGraduationCap className="text-sm" />
                            <span>Academic</span>
                        </Link>
                    ) : (
                        <Link
                            href="/dev"
                            onClick={closeMenu}
                            className="btn btn-primary btn-sm flex items-center gap-1.5 rounded-full px-3 shadow-md hover:scale-105 transition-all"
                        >
                            <FaCode className="text-sm" />
                            <span>Developer</span>
                        </Link>
                    )}

                    <ThemeChange />

                    {/* Social Quick Links */}
                    <div className="hidden sm:flex items-center space-x-1 pl-1 border-l border-base-300">
                        <Link
                            href="https://github.com/sabbir2609"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost btn-circle btn-sm text-base-content/80 hover:text-primary"
                            title="GitHub Profile"
                        >
                            <FaGithub size={18} />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/sabbir2609"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost btn-circle btn-sm text-base-content/80 hover:text-primary"
                            title="LinkedIn Profile"
                        >
                            <FaLinkedin size={18} />
                        </Link>
                    </div>

                    {/* Mobile Hamburger Toggle Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="btn btn-ghost btn-circle btn-sm focus:outline-none text-base-content"
                            aria-label="Toggle Navigation Slider Menu"
                        >
                            {isOpen ? <FaRegTimesCircle size={22} /> : <FaBars size={22} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Slide-Out Drawer Navigation Menu */}
            {isOpen && (
                <div className="lg:hidden fixed top-full left-0 right-0 w-full bg-base-100 backdrop-blur-xl z-50 border-t border-base-200 flex flex-col p-6 space-y-6 overflow-y-auto h-[calc(100vh-64px)] shadow-2xl">
                    <div className="flex flex-col space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-base-content/50 px-2 pb-1 border-b border-base-200">
                            {isDevPage ? 'Developer Navigation' : 'Academic Navigation'}
                        </span>
                        {isDevPage ? (
                            devMenuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="text-lg font-semibold px-3 py-2.5 rounded-xl hover:bg-base-200 transition-colors flex items-center justify-between"
                                >
                                    <span>{item.name}</span>
                                </Link>
                            ))
                        ) : (
                            academicMenuItems.map((item) => {
                                const href = getLinkHref(item.href);

                                return (
                                    <Link
                                        key={item.href}
                                        href={href}
                                        onClick={(e) => handleNavClick(e, href)}
                                        className="text-lg font-semibold px-3 py-2.5 rounded-xl hover:bg-base-200 transition-colors flex items-center justify-between"
                                    >
                                        <span>{item.name}</span>
                                    </Link>
                                );
                            })
                        )}
                    </div>

                    <div className="pt-4 border-t border-base-200 flex flex-col space-y-3">
                        {isDevPage ? (
                            <Link
                                href="/"
                                onClick={closeMenu}
                                className="btn btn-primary w-full flex items-center justify-center gap-2 rounded-xl py-3"
                            >
                                <FaGraduationCap /> View Academic CV
                            </Link>
                        ) : (
                            <Link
                                href="/dev"
                                onClick={closeMenu}
                                className="btn btn-primary w-full flex items-center justify-center gap-2 rounded-xl py-3"
                            >
                                <FaCode /> Switch to Developer Portal
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}
