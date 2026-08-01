import { Footer, Navbar } from "@/components";
import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";

import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "Sabbir Hasan Munna";
const APP_DEFAULT_TITLE = "Researcher | Full Stack Developer";
const APP_TITLE_TEMPLATE = "%s - Sabbir2609";
const APP_DESCRIPTION = "Sabbir Hasan Munna is postgraduate student in Physics from Khulna University of Engineering & Technology (KUET). He is a researcher and also a Full Stack Developer and a passionate programmer. He loves to solve problems and learn new things. He is a quick learner and always ready to take challenges.";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  metadataBase: new URL('https://sabbir2609.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'bn-BD': '/bn-BD',
    },
  },
  openGraph: {
    images: '/og-image.png',
  },
}

const jost = Jost({
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={jost.className}>
        <NextTopLoader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
