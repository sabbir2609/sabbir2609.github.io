import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative z-40 py-6 bg-base-200">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold">Sabbir Hasan Munna</h2>
                    <p className="mt-2">Full Stack Developer | Writer | Researcher</p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-4">
                    <Link href="https://github.com/sabbir2609" target="_blank" aria-label="Github" className="hover:text-gray-400">
                        <FaGithub size={24} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/sabbir2609" target="_blank" aria-label="LinkedIn" className="hover:text-gray-400">
                        <FaLinkedin size={24} />
                    </Link>
                    <Link href="https://x.com/sabbir2609" target="_blank" aria-label="Twitter" className="hover:text-gray-400">
                        <FaTwitter size={24} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}