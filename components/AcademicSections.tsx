'use client';

import { useState } from 'react';
import { cvData, Manuscript } from '@/lib/cvData';
import {
    FaBookOpen, FaGraduationCap, FaFlask, FaMicroscope,
    FaUsers, FaAward, FaChalkboardTeacher, FaUserCheck, FaRegCopy, FaCheck, FaExternalLinkAlt
} from 'react-icons/fa';
import { FaFileLines } from 'react-icons/fa6';

export default function AcademicSections() {
    const {
        personalInfo, education, manuscripts, researchExperience,
        academicProjects, conferences, skills, webinarsAndCertifications,
        professionalExperience, memberships, references
    } = cvData;

    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleCopyCitation = (ms: Manuscript) => {
        const citation = `S. H. Munna et al., "${ms.title}", ${ms.journal} (${ms.status}).`;
        navigator.clipboard.writeText(citation);
        setCopiedId(ms.id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">

            {/* 1. RESEARCH PROFILE & OVERVIEW */}
            <section id="overview" className="scroll-mt-20">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl">
                        <FaFlask size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold">Research Profile & Focus</h2>
                        <p className="text-sm text-base-content/70">Condensed Matter Physics & Computational Materials Science</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-base-100 p-6 sm:p-8 rounded-2xl border border-base-200 shadow-sm space-y-4">
                        <h3 className="text-lg font-bold text-primary">Personal Profile Statement</h3>
                        <p className="text-base-content/90 leading-relaxed text-sm sm:text-base">
                            {personalInfo.bio}
                        </p>
                        <div className="pt-4 border-t border-base-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="font-bold text-base-content block">Primary Methodologies:</span>
                                <span className="text-base-content/70">Solid-State Synthesis, XRD, VSM, EIS, SEM, DFT (VASP, Quantum ESPRESSO, CASTEP)</span>
                            </div>
                            <div>
                                <span className="font-bold text-base-content block">Research Direction:</span>
                                <span className="text-base-content/70">Atomic-scale quantum materials, spin-dependent transport, 2D bipolar semiconductors</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-base-200/50 p-6 rounded-2xl border border-base-300 space-y-4">
                        <h3 className="text-base font-bold flex items-center gap-2">
                            <FaAward className="text-secondary" /> Memberships
                        </h3>
                        <div className="space-y-3">
                            {memberships.map((mem, idx) => (
                                <div key={idx} className="p-3 bg-base-100 rounded-xl border border-base-300/80 text-xs font-semibold">
                                    <p className="text-base-content">{mem.name}</p>
                                    <span className="text-primary font-mono">{mem.period}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-2">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-base-content/60 mb-2">Languages</h4>
                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="badge badge-outline">Bengali (Native)</span>
                                <span className="badge badge-primary">English (IELTS 6.5)</span>
                                <span className="badge badge-outline">Hindi (Conversational)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. MANUSCRIPTS & PUBLICATIONS */}
            <section id="manuscripts" className="scroll-mt-20">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
                        <FaBookOpen size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold">Manuscripts & Publications</h2>
                        <p className="text-sm text-base-content/70">Journal papers under review, submitted, and in preparation</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {manuscripts.map((ms) => {
                        const statusColors = {
                            'Under Review': 'badge-warning text-warning-content',
                            'Submitted': 'badge-info text-info-content',
                            'In Preparation': 'badge-neutral text-neutral-content'
                        };

                        return (
                            <div
                                key={ms.id}
                                className="bg-base-100 p-6 rounded-2xl border border-base-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                            >
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between gap-2">
                                        <span className={`badge ${statusColors[ms.status]} font-semibold text-xs py-2 px-3`}>
                                            {ms.status}
                                        </span>
                                        <span className="text-xs font-mono text-base-content/60 font-bold">
                                            {ms.journal}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-base sm:text-lg leading-snug hover:text-primary transition-colors">
                                        &quot;{ms.title}&quot;
                                    </h3>
                                    <p className="text-xs sm:text-sm text-base-content/70 leading-relaxed">
                                        {ms.abstractSummary}
                                    </p>
                                </div>

                                <div className="mt-4 pt-4 border-t border-base-200 flex items-center justify-between text-xs">
                                    <span className="text-base-content/60 font-medium">{ms.type}</span>
                                    <button
                                        onClick={() => handleCopyCitation(ms)}
                                        className="btn btn-xs btn-ghost gap-1 hover:bg-base-200"
                                        title="Copy formatted citation"
                                    >
                                        {copiedId === ms.id ? (
                                            <>
                                                <FaCheck className="text-emerald-500" /> Copied
                                            </>
                                        ) : (
                                            <>
                                                <FaRegCopy /> Copy Citation
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 3. EDUCATION & THESIS DETAILS */}
            <section id="education" className="scroll-mt-20">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-accent/10 text-accent rounded-xl">
                        <FaGraduationCap size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold">Education</h2>
                        <p className="text-sm text-base-content/70">MSc & BSc degrees in Physics</p>
                    </div>
                </div>

                <div className="space-y-6">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="bg-base-100 p-6 sm:p-8 rounded-2xl border border-base-200 shadow-sm relative overflow-hidden"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-base-200 pb-4 mb-4">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{edu.institution}</span>
                                    <h3 className="text-xl font-extrabold">{edu.degree}</h3>
                                    <p className="text-xs text-base-content/70">{edu.location}</p>
                                </div>
                                <div className="sm:text-right">
                                    <span className="badge badge-primary font-bold text-xs">{edu.completionDate}</span>
                                    <p className="text-xs font-mono font-semibold mt-1">GPA: {edu.gpa}</p>
                                </div>
                            </div>

                            {edu.thesis && (
                                <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 mb-4">
                                    <span className="text-xs font-bold uppercase text-primary tracking-wider">MSc Thesis Title:</span>
                                    <p className="font-semibold text-sm sm:text-base mt-1 text-base-content">
                                        &quot;{edu.thesis}&quot;
                                    </p>
                                    {edu.lab && (
                                        <p className="text-xs text-base-content/70 mt-1">
                                            <strong>Laboratory:</strong> {edu.lab}
                                        </p>
                                    )}
                                </div>
                            )}

                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-base-content/60 mb-2">Relevant Coursework:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {edu.coursework.map((course, cIdx) => (
                                        <span key={cIdx} className="badge badge-outline text-xs py-2">
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {edu.activities && (
                                <p className="text-xs text-base-content/70 mt-3 pt-3 border-t border-base-200">
                                    <strong>Activities & Societies:</strong> {edu.activities}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. RESEARCH EXPERIENCE & GROUP LEADERSHIP */}
            <section id="research" className="scroll-mt-20">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl">
                        <FaMicroscope size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold">Research Experience & Group Leadership</h2>
                        <p className="text-sm text-base-content/70">Solid State Physics Laboratory, KUET</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-7 bg-base-100 p-6 sm:p-8 rounded-2xl border border-base-200 shadow-sm space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-bold">{researchExperience.role}</h3>
                                <p className="text-xs text-base-content/70">{researchExperience.institution}</p>
                            </div>
                            <span className="badge badge-outline text-xs font-mono">{researchExperience.period}</span>
                        </div>

                        <ul className="space-y-2.5 text-sm text-base-content/90">
                            {researchExperience.highlights.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Group Leadership Card */}
                    <div className="lg:col-span-5 bg-linear-to-br from-base-200 to-base-300/50 p-6 rounded-2xl border border-base-300 space-y-4">
                        <h3 className="text-base font-bold flex items-center gap-2">
                            <FaUsers className="text-primary" /> Active Group Leadership Projects
                        </h3>
                        <div className="space-y-3">
                            {researchExperience.currentLeadership?.map((lead, idx) => (
                                <div key={idx} className="p-3 bg-base-100 rounded-xl border border-base-300 text-xs font-medium shadow-xs">
                                    {lead}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Computational & Hardware Academic Projects */}
                <div className="mt-8">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <FaFileLines className="text-secondary" /> Featured Research Projects
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {academicProjects.map((proj, idx) => (
                            <div key={idx} className="bg-base-100 p-5 rounded-2xl border border-base-200 shadow-sm space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="badge badge-secondary badge-sm font-mono">{proj.year}</span>
                                </div>
                                <h4 className="font-bold text-sm sm:text-base leading-snug">{proj.title}</h4>
                                <ul className="text-xs text-base-content/70 space-y-1">
                                    {proj.description.map((desc, dIdx) => (
                                        <li key={dIdx}>• {desc}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-1 pt-2">
                                    {proj.tools.map((t, tIdx) => (
                                        <span key={tIdx} className="bg-base-200 px-2 py-0.5 rounded text-[10px] font-mono">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CONFERENCES & PRESENTATIONS */}
            <section id="conferences" className="scroll-mt-20">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-accent/10 text-accent rounded-xl">
                        <FaAward size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold">Conferences & Keynote Talks</h2>
                        <p className="text-sm text-base-content/70">International presentations & scientific symposiums</p>
                    </div>
                </div>

                <div className="space-y-6">
                    {conferences.map((conf, index) => (
                        <div key={index} className="bg-base-100 p-6 rounded-2xl border border-base-200 shadow-sm space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-base-200 pb-3">
                                <div>
                                    <h3 className="font-extrabold text-lg">{conf.conference}</h3>
                                    <p className="text-xs text-base-content/70">{conf.location}</p>
                                </div>
                                <span className="badge badge-accent text-xs font-bold font-mono mt-2 sm:mt-0">{conf.date}</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {conf.presentations.map((pres, pIdx) => {
                                    const badgeColor = pres.type === 'Keynote' ? 'badge-secondary' : pres.type === 'Oral Presentation' ? 'badge-primary' : 'badge-outline';
                                    return (
                                        <div key={pIdx} className="bg-base-200/50 p-4 rounded-xl border border-base-300 space-y-2">
                                            <span className={`badge ${badgeColor} text-xs font-bold`}>{pres.type}</span>
                                            <p className="font-semibold text-sm text-base-content leading-snug">
                                                &quot;{pres.title}&quot;
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. SCIENTIFIC SKILLS MATRIX */}
            <section id="skills" className="scroll-mt-20">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl">
                        <FaFlask size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold">Scientific & Computational Skills</h2>
                        <p className="text-sm text-base-content/70">Characterization, DFT modeling, and data science</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((group, idx) => (
                        <div key={idx} className="bg-base-100 p-6 rounded-2xl border border-base-200 shadow-sm space-y-3">
                            <h3 className="text-base font-bold text-primary border-b border-base-200 pb-2">{group.category}</h3>
                            <div className="flex flex-wrap gap-2 pt-1">
                                {group.skills.map((sk, sIdx) => (
                                    <span key={sIdx} className="bg-base-200 hover:bg-primary/10 hover:text-primary transition-colors text-xs font-medium px-3 py-1.5 rounded-lg border border-base-300/60">
                                        {sk}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. WEBINARS, WORKSHOPS & CERTIFICATIONS */}
            <section id="certifications" className="scroll-mt-20">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
                        <FaAward size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold">Webinars, Workshops & Certifications</h2>
                        <p className="text-sm text-base-content/70">APS, MRS Bulletin, Westlake Symposia, Stanford Code in Place</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {webinarsAndCertifications.map((item, idx) => (
                        <div key={idx} className="bg-base-100 p-5 rounded-2xl border border-base-200 shadow-xs flex flex-col justify-between space-y-2">
                            <div>
                                <span className="text-[11px] font-bold text-primary uppercase font-mono">{item.organizer}</span>
                                <h3 className="font-bold text-sm leading-snug mt-1">{item.title}</h3>
                                {item.topic && (
                                    <p className="text-xs text-base-content/70 mt-1 leading-normal">{item.topic}</p>
                                )}
                            </div>
                            <span className="text-[10px] font-mono text-base-content/50 pt-2 border-t border-base-200">{item.date}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 8. TEACHING & PROFESSIONAL EXPERIENCE */}
            <section id="teaching" className="scroll-mt-20">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-accent/10 text-accent rounded-xl">
                        <FaChalkboardTeacher size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold">Instruction & Science Writing</h2>
                        <p className="text-sm text-base-content/70">Teaching physics and authoring undergraduate textbooks</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {professionalExperience.map((exp, idx) => (
                        <div key={idx} className="bg-base-100 p-6 rounded-2xl border border-base-200 shadow-sm space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-accent">{exp.organization}</span>
                                <span className="badge badge-ghost text-xs font-mono">{exp.period}</span>
                            </div>
                            <h3 className="font-extrabold text-lg">{exp.role}</h3>
                            <p className="text-xs text-base-content/60">{exp.location}</p>
                            <ul className="text-xs sm:text-sm text-base-content/80 space-y-1.5 pt-2 border-t border-base-200">
                                {exp.highlights.map((h, hIdx) => (
                                    <li key={hIdx}>• {h}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* 9. ACADEMIC REFERENCES */}
            <section id="contact" className="scroll-mt-20">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl">
                        <FaUserCheck size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold">Academic References</h2>
                        <p className="text-sm text-base-content/70">Professors and research supervisors</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {references.map((ref, idx) => (
                        <div key={idx} className="bg-base-100 p-5 rounded-2xl border border-base-200 shadow-sm flex flex-col justify-between space-y-3">
                            <div className="space-y-1">
                                <h3 className="font-extrabold text-base">{ref.name}</h3>
                                <p className="text-xs font-semibold text-primary">{ref.title}</p>
                                <p className="text-xs text-base-content/70">{ref.institution}</p>
                            </div>
                            <a
                                href={`mailto:${ref.email}`}
                                className="btn btn-xs btn-outline btn-primary gap-1 w-full font-mono mt-2"
                            >
                                <FaExternalLinkAlt size={10} /> {ref.email}
                            </a>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
