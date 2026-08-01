import { notFound } from "next/navigation";

import { compilePost } from "@/lib/mdx";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import Link from "next/link";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return getAllPosts().map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({
    params,
}: Props) {
    const { slug } = await params;

    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const content = await compilePost(post.content);

    return (
        <main className="mx-auto max-w-3xl px-6 py-12">
            <h1 className="text-5xl font-bold">
                {post.title}
            </h1>

            <p className="mt-3 text-muted-foreground">
                {post.date} · {post.readingTime}
            </p>

            <div className="mt-4">
                <Link
                    href={`/blog/category/${post.category}`}
                    className="rounded bg-muted px-3 py-1 text-sm hover:underline"
                >
                    {post.category}
                </Link>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                    <Link
                        key={tag}
                        href={`/blog/tag/${tag}`}
                        className="rounded-full border px-3 py-1 text-sm hover:bg-muted"
                    >
                        #{tag}
                    </Link>
                ))}
            </div>

            <article className="prose prose-neutral dark:prose-invert mt-10 max-w-none">
                {content}
            </article>
        </main>
    );
}