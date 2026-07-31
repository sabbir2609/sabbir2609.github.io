export interface Manuscript {
  id: string;
  title: string;
  status: 'Under Review' | 'Submitted' | 'In Preparation';
  journal: string;
  type: string;
  abstractSummary: string;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  gpa: string;
  completionDate: string;
  thesis?: string;
  coursework: string[];
  activities?: string;
  specialization?: string;
  lab?: string;
}

export interface ResearchExperience {
  role: string;
  institution: string;
  period: string;
  highlights: string[];
  currentLeadership?: string[];
}

export interface ProjectAcademic {
  title: string;
  year: string;
  description: string[];
  tools: string[];
}

export interface ConferencePresentation {
  conference: string;
  location: string;
  date: string;
  presentations: {
    type: 'Keynote' | 'Oral Presentation' | 'Poster Presentation';
    title: string;
  }[];
}

export interface ScientificSkillGroup {
  category: string;
  skills: string[];
}

export interface CertificationWebinar {
  title: string;
  organizer: string;
  date: string;
  topic?: string;
}

export interface ProfessionalExp {
  organization: string;
  location: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Reference {
  name: string;
  title: string;
  institution: string;
  email: string;
}

export const cvData = {
  personalInfo: {
    name: "Sabbir Hasan Munna",
    title: "Physics Postgraduate Researcher",
    specialization: "Experimental Condensed Matter Physics & Computational Materials Science",
    email: "sabbirhasan2999@gmail.com",
    phone: "+8801303782589",
    address: "House # 44, Road # 14, Sonadanga R/A (2nd Phase), Khulna, Bangladesh",
    linkedin: "https://www.linkedin.com/in/sabbir2609",
    github: "https://github.com/sabbir2609",
    cvPdfPath: "/doc/sabbir_academic_cv.pdf",
    profilePic: "/me/profile.jpg",
    bio: "I am a Physics postgraduate researcher specialized in computational materials science and experimental condensed matter physics. My research includes synthesis and characterization of functional materials and first-principles Density Functional Theory (DFT) calculations to explore their structural, electronic, magnetic and spin-dependent properties. My expertise includes solid-state synthesis, advanced materials characterization, and scientific computing using Python for data analysis and materials modeling. My recent research on transition-metal-doped two-dimensional materials and altermagnetic systems has further stimulated my interest in electronic structure theory, quantum materials and computational methods for functional materials. I am looking for a PhD position that could combine first-principles simulations and experimental collaboration to further understand and design next-generation materials."
  },

  education: [
    {
      institution: "Khulna University of Engineering & Technology",
      location: "Khulna, Bangladesh",
      degree: "MSc in Physics",
      gpa: "3.25 / 4.0",
      completionDate: "November 2025",
      specialization: "Solid State Physics",
      lab: "Solid State Physics Laboratory",
      thesis: "Enhancement of Magnetic Properties of Lanthanum-Doped Manganese-Zinc Ferrites for Efficient Chromium Removal from Wastewater.",
      coursework: [
        "X-ray Diffraction Crystallography",
        "Solid State Physics",
        "Thermodynamics of Solids",
        "Experimental Techniques in Solid State Physics",
        "Quantum Mechanics",
        "Magnetism"
      ],
      activities: "Consumer Youth Bangladesh - Secretary of Publication and Publicity"
    },
    {
      institution: "National University of Bangladesh",
      location: "Gazipur, Bangladesh",
      degree: "BSc in Physics",
      gpa: "3.14 / 4.0",
      completionDate: "October 2023",
      coursework: [
        "Mathematical Physics",
        "Classical Mechanics",
        "Electromagnetism",
        "Quantum Mechanics",
        "Statistical Mechanics",
        "Solid State Physics",
        "Classical Electrodynamics",
        "Nuclear Physics",
        "Atomic and Molecular Physics"
      ],
      activities: "Science Club"
    }
  ] as Education[],

  manuscripts: [
    {
      id: "ms-1",
      title: "Improved Wideband Electromagnetic Performance in La3+ Substituted Mn-Zn Spinel Ferrites: Structure-Microstructure Regulation of Grain-Boundary Non-Debye Relaxation",
      status: "Under Review",
      journal: "Surfaces and Interfaces",
      type: "Research Article",
      abstractSummary: "Investigates structural and dielectric non-Debye relaxation behavior engineered through La3+ substitution in Mn-Zn ferrites to achieve enhanced wideband electromagnetic shielding."
    },
    {
      id: "ms-2",
      title: "Y3+ Substituted Mg-Zn Spinel Ferrites: Phase Stability, Grain Boundary Dominated Low Loss Response, and Stable MHz Permeability for Multilayer Chip Inductors",
      status: "Under Review",
      journal: "Ceramics International",
      type: "Research Article",
      abstractSummary: "Demonstrates low-loss magnetic response and stable MHz permeability in Y3+ substituted Mg-Zn spinel ferrites suitable for high-frequency MLCI applications."
    },
    {
      id: "ms-3",
      title: "Spin-Dependent Dual-Mode Gas Sensing in Bipolar Magnetic Semiconductor Mo-Doped Hexagonal Boron Nitride: A First-Principles Study of CO2, CO, NO, and H2S",
      status: "Submitted",
      journal: "Applied Surface Science",
      type: "First-Principles DFT Study",
      abstractSummary: "DFT calculations revealing spin-polarized transport and dual-mode adsorption kinetics for environmental gas detection using Mo-doped hBN monolayers."
    },
    {
      id: "ms-4",
      title: "Advanced Frontiers in Spatiotemporal Electron Microscopy: From Sub-Angstrom Ptychography to Quantum Coherence Mapping",
      status: "In Preparation",
      journal: "Light: Science & Applications",
      type: "Review Article",
      abstractSummary: "Comprehensive study covering sub-Angstrom electron ptychography, ultrafast electron diffraction, and quantum coherence mapping."
    },
    {
      id: "ms-5",
      title: "Strain-Tunable Anomalous Hall Conductivity in a Rutile Altermagnetic Insulator",
      status: "In Preparation",
      journal: "Physical Review Materials",
      type: "Theoretical & Computational",
      abstractSummary: "Probing strain engineering effects on the anomalous Hall response in novel rutile-structure altermagnet systems via DFT and symmetry analysis."
    }
  ] as Manuscript[],

  researchExperience: {
    role: "MSc Researcher",
    institution: "KUET Solid State Physics Laboratory",
    period: "2024 - Present",
    highlights: [
      "Synthesized Ni-Zn, Lanthanum-doped Mn-Zn, and Yttrium-doped Mg-Zn ferrites using solid-state reaction and chemical routes.",
      "Characterized structural (XRD), morphological (SEM), magnetic (VSM), thermal (DTA), and dielectric (EIS) properties.",
      "Investigated doping-induced changes in electronic band structure, magnetic domain behavior, and dielectric relaxation.",
      "Developed custom Python pipelines for automated processing, Peak Fitting, and visualization of XRD & VSM spectrum datasets.",
      "Utilized Density Functional Theory (DFT) and Special Quasirandom Structure (SQS) calculations to model disordered spin configurations and predict electronic properties."
    ],
    currentLeadership: [
      "High-entropy forsterite solid-state synthesis",
      "La-doped Mn-Zn Ferrite green synthesis for wastewater treatment",
      "Mn-doped Co ferrite hydrothermal synthesis",
      "DFT of Double Perovskites and SCAPS-1D solar cell simulations"
    ]
  } as ResearchExperience,

  academicProjects: [
    {
      title: "Fast AI-Assisted Material Screening: Specific Properties of Materials",
      year: "2025",
      description: [
        "Generated candidate crystal structures using Microsoft MatterGen for targeted magnetic & electronic properties.",
        "Computed phonon spectrum stability with MatCalc, followed by DFT calculations using CASTEP and Quantum ESPRESSO.",
        "Analyzed structure-property relationships using Python automated scripts."
      ],
      tools: ["MatterGen", "MatCalc", "CASTEP", "Quantum ESPRESSO", "Python", "VESTA"]
    },
    {
      title: "Micro Smart Grid for Smart City Modeling",
      year: "2022",
      description: ["Modeled and analyzed the impact of renewable energy integration on grid stability and microgrid distribution efficiency."],
      tools: ["MATLAB-Simulink", "Energy Analytics"]
    },
    {
      title: "Home Gas Leakage Detection System",
      year: "2022",
      description: ["Developed an IoT hardware prototype with gas sensors and microcontroller alerts for real-time safety monitoring."],
      tools: ["Microcontrollers", "Sensors", "Hardware Design"]
    }
  ] as ProjectAcademic[],

  conferences: [
    {
      conference: "International Conference on Physics",
      location: "Dhaka, Bangladesh",
      date: "April 2026",
      presentations: [
        {
          type: "Oral Presentation",
          title: "Enhanced Adsorption and Activation of Greenhouse and Toxic Gases on Mo-doped hBN Monolayers: A First-Principles Investigation."
        },
        {
          type: "Poster Presentation",
          title: "Magneto-Dielectric and Relaxation Behavior of Yttrium-Substituted Mg-Zn and Mn-Zn Spinel Ferrites for High-Frequency Applications."
        }
      ]
    },
    {
      conference: "International Conference and Bioscience Carnival",
      location: "Rangamati, Chittagong, Bangladesh",
      date: "May 2025",
      presentations: [
        {
          type: "Keynote",
          title: "Enhanced Magnetic Properties and Adsorption of La-Doped Mn-Zn Ferrites for Industrial Wastewater Treatment."
        },
        {
          type: "Poster Presentation",
          title: "Optimization of Magnetic Properties of Yttrium-Doped Mg-Zn Ferrites for Heavy Metal Removal from Industrial Wastewater Treatment."
        }
      ]
    },
    {
      conference: "International Conference on Physics",
      location: "Dhaka, Bangladesh",
      date: "May 2024",
      presentations: [
        {
          type: "Poster Presentation",
          title: "Impact of Sintering Temperature on Ni-Mn Nano Ferrites Prepared by Chemical Co-precipitation Method."
        }
      ]
    }
  ] as ConferencePresentation[],

  skills: [
    {
      category: "Experimental Characterization",
      skills: [
        "X-ray Diffraction (XRD)",
        "Scanning Electron Microscopy (SEM)",
        "Vibrating Sample Magnetometry (VSM)",
        "Electrochemical Impedance Spectroscopy (EIS)",
        "Fourier Transform Infrared Spectroscopy (FTIR)",
        "Thermogravimetric Analysis (TGA)",
        "Rietveld Analysis (Fullprof)"
      ]
    },
    {
      category: "Computational Materials Science & DFT",
      skills: [
        "Density Functional Theory (VASP, Quantum ESPRESSO, CASTEP)",
        "Microsoft MatterGen & MatCalc",
        "Micromagnetic Simulation (OOMMF, Ubermag)",
        "Special Quasirandom Structures SQS (ATAT)",
        "Crystal & Charge Visualization (VESTA, MATCH!)",
        "Multiphysics & Simulation (COMSOL, MATLAB-Simulink, SCAPS-1D)"
      ]
    },
    {
      category: "Scientific Data Analysis & Computing",
      skills: [
        "Python (NumPy, Pandas, Matplotlib, Seaborn, SciPy, Scikit-Learn, JupyterLab)",
        "OriginPro",
        "ImageJ / Morphological Analysis"
      ]
    },
    {
      category: "Languages & Soft Skills",
      skills: [
        "Bengali (Native)",
        "English (IELTS 6.5)",
        "Hindi (Conversational)",
        "Research Leadership",
        "Scientific Writing",
        "Team Collaboration"
      ]
    }
  ] as ScientificSkillGroup[],

  webinarsAndCertifications: [
    {
      title: "Code in Place 2026",
      organizer: "Stanford University, Stanford, CA",
      date: "2026",
      topic: "Python & Computer Science Foundations"
    },
    {
      title: "Perovskite Optoelectronics-2026",
      organizer: "Westlake × Science Symposium #1",
      date: "April 9, 2026",
      topic: "Perovskite advancements, efficiency records, and stability challenges"
    },
    {
      title: "Grain Boundary Defect Phases Webinar",
      organizer: "Materials Research Society (MRS Bulletin)",
      date: "February 2026",
      topic: "Thermodynamics, Atomic Structure, and Properties of Grain Boundary Defect Phases"
    },
    {
      title: "Quantum Connect Webinar Series",
      organizer: "American Physical Society (APS)",
      date: "2025",
      topic: "Quantum technologies in national defense, quantum radar, secure communications, high-energy particles"
    },
    {
      title: "Two-dimensional Materials and Devices",
      organizer: "Westlake × Science Symposia",
      date: "2025",
      topic: "2D materials synthesis, moiré lattices quantum phenomena, next-gen energy devices"
    },
    {
      title: "Machine Learning with Python",
      organizer: "Enhancing Digital Government & Economy Project, Bangladesh",
      date: "2025",
      topic: "Machine Learning models & data science applications"
    },
    {
      title: "Innovative Energy Infrastructure",
      organizer: "BEPRC × KUET",
      date: "2025",
      topic: "Renewable Energy and Sustainable Development in Bangladesh"
    },
    {
      title: "Deep Learning Specialization (Audited)",
      organizer: "deeplearning.ai Coursera",
      date: "2023",
      topic: "Neural networks, CNNs, Sequence models"
    },
    {
      title: "Apps and Website Development Training",
      organizer: "Ministry of Public Administration of Bangladesh",
      date: "2023",
      topic: "Full-stack software development training"
    }
  ] as CertificationWebinar[],

  professionalExperience: [
    {
      organization: "OxBridge Coaching",
      location: "Khulna, Bangladesh",
      role: "Physics Instructor",
      period: "2022 - 2023",
      highlights: [
        "Conducted tutoring sessions for undergraduate physics, chemistry, and mathematics majors.",
        "Developed customized lesson plans to enhance student conceptual understanding and problem-solving skills."
      ]
    },
    {
      organization: "Science View Publications",
      location: "Khulna, Bangladesh",
      role: "Physics Writer",
      period: "2022 - Present",
      highlights: [
        "Authored textbooks and reference material for undergraduate physics students.",
        "Covered core topics including Classical Mechanics, Electromagnetism, Modern Physics, and Thermodynamics."
      ]
    }
  ] as ProfessionalExp[],

  memberships: [
    { name: "Student Member, American Physical Society (APS)", period: "2025 - Present" },
    { name: "Student Member, Materials Research Society (MRS)", period: "2025 - Present" }
  ],

  references: [
    {
      name: "Dr. Md. Alomgir Hossain",
      title: "Professor, Dept. of Physics",
      institution: "Khulna University of Engineering & Technology (KUET), Bangladesh",
      email: "liton@phy.kuet.ac.bd"
    },
    {
      name: "Dr. Sujit Kumar Shil",
      title: "Professor, Dept. of Physics",
      institution: "Khulna University of Engineering & Technology (KUET), Bangladesh",
      email: "sujit@phy.kuet.ac.bd"
    },
    {
      name: "Dr. S. M. Sajjad Hossain",
      title: "Deputy Director",
      institution: "Directorate of Secondary & Higher Education, Khulna, Bangladesh",
      email: "drsmsajjad@gmail.com"
    },
    {
      name: "Md. Kamal Hossain",
      title: "Assistant Professor, Dept. of Physics",
      institution: "Khulna University of Engineering & Technology (KUET), Bangladesh",
      email: "kamal@phy.kuet.ac.bd"
    }
  ] as Reference[]
};
