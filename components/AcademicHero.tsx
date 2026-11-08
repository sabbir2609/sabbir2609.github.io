import Image from "next/image";
import Link from "next/link";
import { cvData } from "@/lib/cvData";
import { FaEnvelope, FaFileDownload, FaCode, FaGithub, FaLinkedin, FaFlask } from "react-icons/fa";
import profilePic from "@/public/me/profile.jpg";
import { SiGooglescholar, SiOrcid, SiResearchgate } from "react-icons/si";

const socialLinks = (personalInfo: typeof cvData.personalInfo) => [
    { href: personalInfo.github, icon: <FaGithub size={18} />, label: "GitHub", hover: "hover:text-primary" },
    { href: personalInfo.linkedin, icon: <FaLinkedin size={18} />, label: "LinkedIn", hover: "hover:text-[#0A66C2]" },
    { href: personalInfo.rg, icon: <SiResearchgate size={18} />, label: "ResearchGate", hover: "hover:text-[#00CCBB]" },
    { href: `https://orcid.org/${personalInfo.orchid}`, icon: <SiOrcid size={18} />, label: "ORCID", hover: "hover:text-[#A6CE39]" },
    { href: personalInfo.google_scholor, icon: <SiGooglescholar size={18} />, label: "Scholar", hover: "hover:text-primary" },
];

export default function AcademicHero() {
    const { personalInfo, education, manuscripts, conferences } = cvData;
    const masterDegree = education[0];

    const stats = [
        { value: manuscripts.filter(m => m.status === 'Published' || m.status === 'Under Review' || m.status === 'Submitted').length, label: "Manuscripts" },
        { value: conferences.reduce((acc, c) => acc + c.presentations.length, 0), label: "Presentations" },
        { value: conferences.length, label: "Conferences" },
    ];

    return (
        <section className="relative overflow-hidden bg-linear-to-b from-base-200/50 via-base-100 to-base-100 py-12 md:py-20 border-b border-base-200">
            <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                    {/* Left Column */}
                    <div className="lg:col-span-8 space-y-6">

                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold uppercase tracking-wide">
                            <FaFlask />
                            <span>Physics Postgraduate Researcher</span>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
                                {personalInfo.name}
                            </h1>
                            <p className="text-lg lg:text-xl font-medium text-base-content/70">
                                {personalInfo.specialization}
                            </p>
                            <div className="flex flex-col gap-0.5 text-sm font-mono text-primary pt-1">
                                <span>{masterDegree.institution}</span>
                                <span>{masterDegree.lab}</span>
                            </div>
                        </div>

                        <blockquote className="bg-base-200/60 px-5 py-4 rounded-2xl border-l-4 border border-base-300 backdrop-blur-sm">
                            <p className="text-sm text-base-content/80 leading-relaxed italic">
                                "Rage rage against the dying of the light..."
                            </p>
                        </blockquote>

                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-2">
                            {stats.map((stat, i) => (
                                <div key={i} className="bg-base-200/60 border border-base-300 rounded-xl px-4 py-2.5 text-center min-w-20">
                                    <p className="text-xl font-extrabold text-primary">{stat.value}+</p>
                                    <p className="text-[10px] uppercase tracking-wider text-base-content/60 font-semibold">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-3">
                            <Link href={personalInfo.cvPdfPath} target="_blank" rel="noopener noreferrer"
                                className="btn btn-primary shadow-lg shadow-primary/20 flex items-center justify-center gap-2 rounded-xl">
                                <FaFileDownload /> CV
                            </Link>
                            <Link href={`mailto:${personalInfo.email}`}
                                className="btn btn-outline flex items-center justify-center gap-2 rounded-xl">
                                <FaEnvelope /> Contact
                            </Link>
                            <Link href="/dev"
                                className="btn btn-secondary btn-outline flex items-center justify-center gap-2 rounded-xl">
                                <FaCode /> Developer
                            </Link>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 pt-1">
                            {socialLinks(personalInfo).map(({ href, icon, label, hover }) => (
                                <Link key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-base-200 border border-base-300 text-base-content/60 text-xs font-mono ${hover} hover:border-current transition-colors`}>
                                    {icon} {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-primary to-secondary opacity-30 blur-xl group-hover:opacity-50 transition duration-500"></div>
                            <div className="aura aura-rainbow p-1 rounded-[28px]">
                                <div className="card bg-base-100 rounded-3xl overflow-hidden border-4 border-base-100 shadow-2xl w-72 h-72 relative">
                                    <Image src={profilePic} alt={personalInfo.name} fill priority
                                        sizes="288px"
                                        className="object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-base-100 text-base-content px-4 py-1.5 rounded-full border border-base-300 shadow-md text-xs font-bold whitespace-nowrap flex items-center gap-1.5 z-10">
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
