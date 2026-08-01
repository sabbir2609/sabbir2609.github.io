import Link from "next/link";
import { notFound } from "next/navigation";

import {
    getAllTags,
    getPostsByTag,
} from "@/lib/posts";

interface Props {
    params: Promise<{
        tag: string;
    }>;
}

export async function generateStaticParams() {
    return getAllTags().map((tag) => ({
        tag,
    }));
}

export default async function TagPage({
    params,
}: Props) {
    const { tag } = await params;

    const posts = getPostsByTag(tag);

    if (posts.length === 0) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-3xl px-6 py-12">
            <h1 className="text-4xl font-bold mb-8">
                Tag: {tag}
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