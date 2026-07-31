'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { devData, DevProject } from '@/lib/devData';
import { FaCode, FaGithub, FaExternalLinkAlt, FaGraduationCap, FaFilter, FaLayerGroup, FaTerminal, FaLaptopCode, FaWrench } from 'react-icons/fa';

export default function DevPage() {
    const { header, techStack, projects } = devData;
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const categories = ['All', 'Computational Tool', 'Full Stack', 'Backend', 'Machine Learning', 'IoT & Hardware'];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <main className="min-h-screen bg-base-100 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                {/* DEVELOPER HERO */}
                <section className="bg-linear-to-br from-base-200/80 via-base-100 to-base-200/40 p-8 sm:p-12 rounded-3xl border border-base-300 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none hidden md:block">
                        <FaCode size={220} />
                    </div>

                    <div className="max-w-3xl space-y-6 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-xs font-mono font-semibold uppercase tracking-wider">
                            <FaTerminal />
                            <span>Developer Portal</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                            {header.title}
                        </h1>

                        <p className="text-lg sm:text-xl font-medium text-secondary">
                            {header.subtitle}
                        </p>

                        <p className="text-base-content/80 text-sm sm:text-base leading-relaxed">
                            {header.bio}
                        </p>

                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <a
                                href="https://github.com/sabbir2609"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary shadow-lg shadow-secondary/20 flex items-center gap-2 rounded-xl"
                            >
                                <FaGithub size={18} /> Visit GitHub Profile
                            </a>
                            <Link
                                href="/"
                                className="btn btn-outline flex items-center gap-2 rounded-xl"
                            >
                                <FaGraduationCap size={18} /> View Academic CV
                            </Link>
                        </div>
                    </div>
                </section>

                {/* TECH STACK MATRIX */}
                <section id="tech-stack" className="scroll-mt-20 space-y-6">
                    <div className="flex items-center space-x-3">
                        <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
                            <FaWrench size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold">Technical Stack & Tools</h2>
                            <p className="text-sm text-base-content/70">Languages, frameworks, databases, and scientific libraries</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {techStack.map((tech, idx) => (
                            <div
                                key={idx}
                                className="bg-base-100 p-4 rounded-2xl border border-base-200 shadow-xs hover:border-secondary/50 hover:shadow-sm transition-all flex flex-col justify-between"
                            >
                                <span className="text-[10px] font-mono text-secondary uppercase tracking-wide">{tech.category}</span>
                                <h3 className="font-bold text-sm text-base-content mt-2">{tech.name}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FEATURED PROJECTS WITH CATEGORY FILTER */}
                <section id="projects" className="scroll-mt-20 space-y-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center space-x-3">
                            <div className="p-3 bg-primary/10 text-primary rounded-xl">
                                <FaLaptopCode size={24} />
                            </div>
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold">Software & ML Projects</h2>
                                <p className="text-sm text-base-content/70">Full Stack Apps, Machine Learning, & Computational Tools</p>
                            </div>
                        </div>

                        {/* Category Filter Pills */}
                        <div className="flex flex-wrap items-center gap-1.5 bg-base-200/60 p-1.5 rounded-2xl border border-base-300 text-xs">
                            <FaFilter className="text-base-content/50 ml-2 mr-1 hidden sm:inline" />
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-3 py-1.5 rounded-xl font-medium transition-colors ${selectedCategory === cat
                                        ? 'bg-secondary text-secondary-content shadow-xs'
                                        : 'hover:bg-base-300/60 text-base-content/80'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project: DevProject) => (
                            <div
                                key={project.id}
                                className="bg-base-100 rounded-2xl border border-base-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                            >
                                <div>
                                    {/* Cover Image or Socialify Banner */}
                                    <div className="relative h-44 bg-base-200 overflow-hidden border-b border-base-200">
                                        <Image
                                            src={
                                                project.image
                                                    ? project.image
                                                    : `https://socialify.git.ci/sabbir2609/${project.repo || 'storefront'}/image?description=1&font=Inter&forks=1&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&stargazers=1&theme=Dark`
                                            }
                                            alt={project.title}
                                            fill
                                            unoptimized
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="eager"
                                        />
                                        <div className="absolute top-3 right-3">
                                            <span className="badge badge-secondary font-mono text-[10px] shadow-sm">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 space-y-3">
                                        <h3 className="font-extrabold text-lg group-hover:text-secondary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-base-content/80 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tech Badges */}
                                        <div className="flex flex-wrap gap-1.5 pt-2">
                                            {project.technologies.map((tech, tIdx) => (
                                                <span
                                                    key={tIdx}
                                                    className="bg-base-200 px-2.5 py-0.5 rounded-md text-[10px] font-mono text-base-content/70 border border-base-300/50"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Card Actions */}
                                <div className="px-6 py-4 bg-base-200/40 border-t border-base-200 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-xs btn-outline gap-1"
                                            >
                                                <FaGithub /> GitHub
                                            </a>
                                        )}
                                        {project.liveLink && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-xs btn-secondary gap-1"
                                            >
                                                <FaExternalLinkAlt size={10} /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                    <span className="text-[10px] font-mono text-base-content/50">sabbir2609</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* BOTTOM ACADEMIC CALLOUT BANNER */}
                <section className="bg-primary/5 p-8 rounded-3xl border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="space-y-1 text-center sm:text-left">
                        <h3 className="text-lg font-bold text-primary">Interested in Physics Research & DFT Calculations?</h3>
                        <p className="text-xs sm:text-sm text-base-content/80">
                            Explore Sabbir Hasan Munna&apos;s academic CV, manuscripts under review, and experimental condensed matter research.
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="btn btn-primary shadow-md shrink-0 flex items-center gap-2 rounded-xl"
                    >
                        <FaGraduationCap size={18} /> Switch to Academic Profile
                    </Link>
                </section>

            </div>
        </main>
    );
}
