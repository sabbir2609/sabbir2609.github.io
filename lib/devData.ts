export interface DevProject {
  id: number;
  title: string;
  category: 'Full Stack' | 'Backend' | 'Frontend' | 'Machine Learning' | 'Computational Tool' | 'IoT & Hardware';
  description: string;
  technologies: string[];
  repo?: string;
  githubUrl?: string;
  liveLink?: string;
  image?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export const devData = {
  header: {
    title: "Developer & Software Projects",
    subtitle: "Full-Stack Web Engineering, Machine Learning & Computational Tool Development",
    bio: "Combining deep analytical skills from Physics with robust full-stack software development. Specialized in building scalable backends with Python & Django, dynamic frontends with React & Next.js, machine learning pipelines, and custom scientific tools."
  },

  techStack: [
    { name: "Python", category: "Language / Backend" },
    { name: "Django & DRF", category: "Backend Framework" },
    { name: "TypeScript / JavaScript", category: "Language / Frontend" },
    { name: "React / Next.js", category: "Frontend Framework" },
    { name: "Tailwind CSS & DaisyUI", category: "Styling & UI" },
    { name: "PostgreSQL & Redis", category: "Database & Caching" },
    { name: "WebSockets & MQTT", category: "Real-time & IoT" },
    { name: "NumPy / Pandas / SciPy", category: "Scientific & Data" },
    { name: "Scikit-Learn & PyTorch/LSTM", category: "Machine Learning" },
    { name: "Docker & Git", category: "DevOps & Tools" }
  ],

  projects: [
    {
      id: 1,
      title: "Fast AI-Assisted Material Screening",
      category: "Computational Tool",
      description: "Automated crystal structure generation and DFT screening workflow using Microsoft MatterGen, MatCalc, CASTEP, Quantum ESPRESSO, and Python data visualization.",
      technologies: ["Python", "MatterGen", "CASTEP", "Quantum ESPRESSO", "MatCalc", "VESTA"],
      repo: "Fast-AI-Material-Screening",
      githubUrl: "https://github.com/sabbir2609/matsimx",
      featured: true
    },
    {
      id: 2,
      title: "Headless E-commerce Platform",
      category: "Backend",
      description: "High-performance headless e-commerce backend built with Django REST Framework, Django Signals, PostgreSQL, and Redis caching.",
      technologies: ["Django", "DRF", "PostgreSQL", "Redis", "Python"],
      repo: "storefront",
      githubUrl: "https://github.com/sabbir2609/storefront",
      featured: true
    },
    {
      id: 3,
      title: "Hotel Management System (Zenith)",
      category: "Full Stack",
      description: "Complete hospitality suite: Backend built with Django REST Framework, WebSockets, Uvicorn, and MQTT IoT integration; Frontend powered by Next.js App Router, Tailwind CSS, and React Query.",
      technologies: ["Next.js", "Django REST", "WebSockets", "MQTT", "Tailwind CSS", "React Query"],
      repo: "zenith-be",
      githubUrl: "https://github.com/sabbir2609/zenith-be",
      featured: true
    },
    {
      id: 4,
      title: "School Management System",
      category: "Full Stack",
      description: "Comprehensive multi-role administrative system featuring student records, grading, attendance tracking, and finance modules.",
      technologies: ["Django", "Bootstrap", "jQuery", "AJAX", "PostgreSQL"],
      repo: "next-school",
      githubUrl: "https://github.com/sabbir2609/next-school",
      featured: false
    },
    {
      id: 5,
      title: "CO2 Emissions Time-Series Forecasting",
      category: "Machine Learning",
      description: "Predictive environmental analytics project using Python, Recurrent Neural Networks (RNN), and Long Short-Term Memory (LSTM) models.",
      technologies: ["Python", "TensorFlow/Keras", "LSTM", "Pandas", "Matplotlib"],
      repo: "Time-Series-Forecasting-RNN-LSTM",
      githubUrl: "https://github.com/sabbir2609/Time-Series-Forecasting-RNN-LSTM",
      featured: true
    },
    {
      id: 6,
      title: "The Viriditas - Plant-Based Decor Platform",
      category: "Full Stack",
      description: "E-commerce & gallery site for sustainable plant-based home decor powered by Django backend, Next.js frontend, and Cloudinary media management.",
      technologies: ["Next.js", "Django", "Cloudinary", "Tailwind CSS"],
      image: "/image/viriditas.png",
      liveLink: "https://theviriditas.com/",
      featured: true
    }
  ] as DevProject[]
};
