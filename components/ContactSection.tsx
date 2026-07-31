import React from 'react';
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";


export default function ContactSection() {
    return (
        <section className="relative py-12 bg-base-300 lg:min-h-screen content-center">
            <div className="mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Tell Me About Your Next Project</h2>
                <p className="mb-8 text-lg">
                    I would love to hear about your upcoming projects. Feel free to reach out to me through WhatsApp or email.
                </p>
                <div className="flex justify-center space-x-4">
                    <Link
                        href="https://wa.me/8801610488539"
                        target="_blank"
                        className="btn btn-primary rounded-full flex items-center space-x-2"
                    >
                        <FaWhatsapp size={24} />
                        <span>WhatsApp</span>
                    </Link>
                    <Link
                        href="mailto:sabbirhasan2999@gmail.com"
                        className="btn btn-secondary rounded-full flex items-center space-x-2"
                    >
                        <MdMailOutline size={24} />
                        <span>Mail Me</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};