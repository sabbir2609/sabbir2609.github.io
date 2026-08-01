// app/blog/category/[category]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";

import {
    getAllCategories,
    getPostsByCategory,
} from "@/lib/posts";

interface Props {
    params: Promise<{
        category: string;
    }>;
}

export async function generateStaticParams() {
    return getAllCategories().map((category) => ({
        category,
    }));
}

export default async function CategoryPage({
    params,
}: Props) {
    const { category } = await params;

    const posts = getPostsByCategory(category);

    if (posts.length === 0) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-3xl px-6 py-12">
            <h1 className="text-4xl font-bold mb-8">
                Category: {category}
            </h1>

            {posts.map((post) => (
                <article
                    key={post.slug}
                    className="mb-6 border rounded-lg p-5"
                >
                    <Link href={`/blog/${post.slug}`}>
                        <h2 className="text-2xl font-semibold hover:underline">
                            {post.title}
                        </h2>
                    </Link>

                    <p className="text-sm text-muted-foreground">
                        {post.date} • {post.readingTime}
                    </p>

                    <p className="mt-2">{post.description}</p>
                </article>
            ))}
        </main>
    );
}