import profileImage from "@/public/me/profile.jpg";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { MdMailOutline } from "react-icons/md";

export default function Hero() {
    const socialLinks = [
        {
            href: 'https://github.com/sabbir2609',
            label: 'Github',
            icon: <FaGithub size={24} />,
        },
        {
            href: 'https://www.linkedin.com/in/sabbir2609',
            label: 'LinkedIn',
            icon: <FaLinkedin size={24} />,
        },
        {
            href: 'https://twitter.com/sabbir2609',
            label: 'Twitter',
            icon: <FaTwitter size={24} />,
        },
        {
            href: 'https://instagram.com/0xsabbir',
            label: 'Instagram',
            icon: <FaInstagram size={24} />,
        },
        {
            href: 'https://fb.me/0xsabbir',
            label: 'Facebook',
            icon: <FaFacebook size={24} />,
        }
    ];
    return (
        <section className="relative w-full overflow-hidden min-h-[92vh] content-center">
            <div className="relative z-20 hero p-2">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image
                        src={profileImage}
                        alt="Sabbir Hasan Munna Image"
                        width={500}
                        height={500}
                        loading="lazy"
                        placeholder="blur"
                        className="lg:max-w-sm rounded-lg shadow-xl"
                    />
                    <div className="flex flex-col justify-center space-y-4 px-8 lg:mt-0 tracking-tight">
                        <h1 className="text-3xl md:text-4xl lg:6xl font-bold pt-4">First, solve the problem. Then, write the code.</h1>
                        <p className="pt-2 text-lg">- John Johnson</p>
                        <p className="pt-6 text-lg">I am Link Full Stack Developer. I love to solve problems and write code. I am passionate about learning new technologies and building new things. I am Link quick learner and love to work in Link team. I am always ready to take new challenges and solve them.</p>
                        <div className="flex mt-4 space-x-2">
                            <Link
                                href="/doc/sabbir_academic_cv.pdf"
                                target="_blank"
                                className="btn btn-primary rounded-md"
                            >
                                Resume
                            </Link>
                            <Link
                                href="mailto:sabbirhasan2999@gmail.com"
                                className="btn btn-secondary rounded-full flex items-center space-x-2"
                            >
                                <MdMailOutline size={24} />
                                <span>Mail Me</span>
                            </Link>
                        </div>
                        <div className="flex mt-4 space-x-4">
                            {socialLinks.map((social, key) => (
                                <Link
                                    key={key}
                                    href={social.href}
                                    target="_blank"
                                    className=" hover:text-primary"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
