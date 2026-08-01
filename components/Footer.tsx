import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaGraduationCap, FaCode } from "react-icons/fa6";
import Link from "next/link";
import { cvData } from "@/lib/cvData";

export default function Footer() {
    return (
        <footer className="bg-base-300 text-base-content border-t border-base-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Profile Brand */}
                <div className="md:col-span-2 space-y-4">
                    <div className="flex items-center space-x-2">
                        <span className="w-8 h-8 rounded-lg bg-primary text-primary-content flex items-center justify-center font-bold text-lg">
                            S
                        </span>
                        <h2 className="text-xl font-bold">{cvData.personalInfo.name}</h2>
                    </div>
                    <p className="text-sm text-base-content/80 max-w-md leading-relaxed">
                        Physics Postgraduate Researcher at Khulna University of Engineering & Technology (KUET), specializing in experimental condensed matter physics, magnetic materials, and Density Functional Theory (DFT).
                    </p>
                    <div className="flex items-center space-x-3 pt-2">
                        <Link
                            href={cvData.personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost btn-circle btn-sm text-base-content/80 hover:text-primary hover:bg-base-200"
                            aria-label="GitHub"
                        >
                            <FaGithub size={20} />
                        </Link>
                        <Link
                            href={cvData.personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost btn-circle btn-sm text-base-content/80 hover:text-primary hover:bg-base-200"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={20} />
                        </Link>
                        <Link
                            href="https://x.com/sabbir2609"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost btn-circle btn-sm text-base-content/80 hover:text-primary hover:bg-base-200"
                            aria-label="Twitter"
                        >
                            <FaTwitter size={20} />
                        </Link>
                        <Link
                            href={`mailto:${cvData.personalInfo.email}`}
                            className="btn btn-ghost btn-circle btn-sm text-base-content/80 hover:text-primary hover:bg-base-200"
                            aria-label="Email"
                        >
                            <FaEnvelope size={20} />
                        </Link>
                    </div>
                </div>

                {/* Academic Quick Navigation */}
                <div className="space-y-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-base-content/70 flex items-center gap-1.5">
                        <FaGraduationCap className="text-primary" /> Academic Profile
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/#overview" className="hover:text-primary transition-colors">Research Overview</Link>
                        </li>
                        <li>
                            <Link href="/#manuscripts" className="hover:text-primary transition-colors">Manuscripts & Papers</Link>
                        </li>
                        <li>
                            <Link href="/#education" className="hover:text-primary transition-colors">Education & KUET MSc</Link>
                        </li>
                        <li>
                            <Link href="/#conferences" className="hover:text-primary transition-colors">Conferences & Talks</Link>
                        </li>
                        <li>
                            <Link href="/#skills" className="hover:text-primary transition-colors">Scientific Skills</Link>
                        </li>
                    </ul>
                </div>

                {/* Developer Hub Navigation */}
                <div className="space-y-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-base-content/70 flex items-center gap-1.5">
                        <FaCode className="text-secondary" /> Developer Portal
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/dev" className="hover:text-secondary font-medium transition-colors">Developer Portal (/dev)</Link>
                        </li>
                        <li>
                            <Link href="/dev#projects" className="hover:text-secondary transition-colors">Software & ML Projects</Link>
                        </li>
                        <li>
                            <Link href="/dev#tech-stack" className="hover:text-secondary transition-colors">Full-Stack Tech Stack</Link>
                        </li>
                        <li>
                            <Link
                                href={cvData.personalInfo.cvPdfPath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors flex items-center gap-1"
                            >
                                Download Academic CV (PDF)
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-base-200 flex flex-col sm:flex-row justify-between items-center text-xs text-base-content/60">
                <p>© {new Date().getFullYear()} Sabbir Hasan Munna. All rights reserved.</p>
                <p className="mt-2 sm:mt-0 font-mono">KUET Solid State Physics Laboratory</p>
            </div>
        </footer>
    );
}