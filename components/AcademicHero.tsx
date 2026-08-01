import Image from "next/image";
import Link from "next/link";
import { cvData } from "@/lib/cvData";
import { FaEnvelope, FaFileDownload, FaCode, FaGithub, FaLinkedin, FaFlask } from "react-icons/fa";
import profilePic from "@/public/me/profile.jpg";

export default function AcademicHero() {
    const { personalInfo, education } = cvData;
    const masterDegree = education[0];

    return (
        <section className="relative overflow-hidden bg-linear-to-b from-base-200/50 via-base-100 to-base-100 py-12 md:py-20 border-b border-base-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Left Column: Information */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold uppercase tracking-wide">
                            <FaFlask className="text-primary" />
                            <span>Physics Postgraduate Researcher</span>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                                {personalInfo.name}
                            </h1>
                            <p className="text-xl lg:text-2xl font-medium text-base-content/80">
                                {personalInfo.specialization}
                            </p>
                            <p className="text-sm font-mono text-primary flex items-center gap-1.5 pt-1">
                                &gt; {masterDegree.institution} <br />
                                &gt; {masterDegree.lab}
                            </p>
                        </div>

                        {/* Research Aspiration Quote / Summary */}
                        <div className="bg-base-200/60 p-5 rounded-2xl border border-base-300 backdrop-blur-sm relative">
                            <p className="text-sm sm:text-base text-base-content/90 leading-relaxed">
                                &quot;Rage rage against the dying of the light...&quot;
                            </p>
                        </div>

                        {/* Call to Action Buttons */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <Link
                                href={personalInfo.cvPdfPath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary shadow-lg shadow-primary/20 flex items-center gap-2 rounded-xl"
                            >
                                <FaFileDownload /> Download Academic CV (PDF)
                            </Link>
                            <Link
                                href={`mailto:${personalInfo.email}`}
                                className="btn btn-outline flex items-center gap-2 rounded-xl"
                            >
                                <FaEnvelope /> Contact Researcher
                            </Link>
                            <Link
                                href="/dev"
                                className="btn btn-secondary btn-outline flex items-center gap-2 rounded-xl"
                            >
                                <FaCode /> Developer & Projects
                            </Link>
                        </div>

                        {/* Social & Contact Bar */}
                        <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-base-content/70">
                            <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary font-mono transition-colors">
                                <FaGithub size={16} /> github.com/sabbir2609
                            </Link>
                            <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary font-mono transition-colors">
                                <FaLinkedin size={16} /> linkedin.com/in/sabbir2609
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Profile Image & Badge */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
                        <div className="relative group">
                            {/* Decorative Glow */}
                            <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-primary to-secondary opacity-30 blur-xl group-hover:opacity-50 transition duration-500"></div>

                            <div className="relative rounded-3xl overflow-hidden border-4 border-base-100 bg-base-200 shadow-2xl w-64 h-64 sm:w-72 sm:h-72">
                                <Image
                                    src={profilePic}
                                    alt={personalInfo.name}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 256px, 288px"
                                    className="object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Badge Tag */}
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-base-100 text-base-content px-4 py-1.5 rounded-full border border-base-300 shadow-md text-xs font-bold whitespace-nowrap flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Seeking PhD Position
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
