import Link from "next/link";
import Image from "next/image";
import type { Metadata } from 'next';
import viriditasImg from "@/public/image/viriditas.png";

export const metadata: Metadata = {
    title: "Projects",
    description: "Explore Sabbir Hasan Munna's projects, including full stack web applications, machine learning projects, and more.",
};

interface Project {
    id: number;
    title: string;
    type: string;
    description: string;
    repo?: string;
    image?: string;
    live_link: string;
}

export default function Projects() {
    const projects: Project[] = [
        {
            "id": 1,
            "title": "Headless E-commerce",
            "type": "Backend",
            "description": "A headless e-commerce platform using Django REST Framework, Signals, PostgreSQL, and Redis.",
            "repo": "storefront",
            "live_link": "#"
        },
        {
            "id": 2,
            "title": "School Management System",
            "type": "Full Stack",
            "description": "A comprehensive school management system built with Django, Bootstrap, jQuery, Ajax, and PostgreSQL.",
            "repo": "next-school",
            "live_link": "#"
        },
        {
            "id": 3,
            "title": "CO2 Forecasting",
            "type": "Machine Learning",
            "description": "A CO2 Time Series forecasting project using Python and LSTM.",
            "repo": "Time-Series-Forecasting-RNN-LSTM",
            "live_link": "#"
        },
        {
            "id": 4,
            "title": "Hotel Management System Backend",
            "type": "Backend",
            "description": "Hotel management system backend using Django REST Framework, Next.js, WebSockets, Uvicorn, IoT, and MQTT.",
            "repo": "zenith-be",
            "live_link": "#"
        },
        {
            "id": 5,
            "title": "Hotel Management System Frontend",
            "type": "Frontend",
            "description": "Hotel management system frontend using Next.js 14 App Routes, Tailwind CSS, and React Query.",
            "repo": "zenith-fe",
            "live_link": "#"
        },
        {
            "id": 6,
            "title": "Plant Based Decor Website Backend",
            "type": "Backend",
            "description": "A website for plant-based decor built with Django, Next.js, and Cloudinary.",
            "image": viriditasImg.src,
            "live_link": "#"
        },
        {
            "id": 7,
            "title": "Plant Based Decor Website Frontend",
            "type": "Frontend",
            "description": "A website for plant-based decor built with Django, Next.js, and Cloudinary.",
            "image": viriditasImg.src,
            "live_link": "https://theviriditas.com/"
        },
    ];
    return (
        <section className="mt-6 mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="card card-compact bg-base-200 shadow-md lg:hover:scale-105 transform transition-transform ease-in-out duration-300">
                        <figure>
                            <Image
                                src={project.image ? project.image : `https://socialify.git.ci/sabbir2609/${project.repo}/image?description=1&forks=1&issues=1&language=1&name=1&owner=1&pattern=Signal&pulls=1&stargazers=1&theme=Light`}
                                alt={project.title}
                                width={500}
                                height={500}
                                className="h-52 object-cover w-full"
                                unoptimized
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="card-actions justify-end items-center mt-2">
                                <Link
                                    href={`https://github.com/sabbir2609/${project.repo}`}
                                    className="btn btn-sm hover:text-primary" target="_blank">
                                    GitHub
                                </Link>
                                {project.live_link !== "#" && (
                                    <Link href={project.live_link} className="btn btn-sm hover:text-primary ml-2" target="_blank">Live</Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}