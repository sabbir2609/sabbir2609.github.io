// app/blog/layout.tsx

import BlogSidebar from "@/components/blog/BlogSidebar";
import { getAllCategories } from "@/lib/posts";

interface BlogLayoutProps {
    children: React.ReactNode;
}

export default function BlogLayout({
    children,
}: BlogLayoutProps) {
    const categories = getAllCategories();

    return (
        <main className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex flex-col gap-8 md:flex-row">

                <BlogSidebar categories={categories} />

                <section className="flex-1">
                    {children}
                </section>

            </div>
        </main>
    );
}