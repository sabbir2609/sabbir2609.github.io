import { notFound } from "next/navigation";

import { compilePost } from "@/lib/mdx";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import Image from "next/image";
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
        <main className="px-2 lg:px-8 py-6">
            <div className="mb-2">
                <Link
                    href="/blog"
                    className="text-sm text-base-content/50 hover:text-base-content transition-colors"
                >
                    ← Back to blog
                </Link>
            </div>

            <h1 className="mt-4 text-3xl font-bold leading-tight">
                {post.title}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-3">
                <Link
                    href={`/blog/category/${post.category}`}
                    className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary hover:bg-primary/20 transition-colors"
                >
                    {post.category}
                </Link>
                <span className="text-sm text-base-content/50">
                    {post.date} · {post.readingTime}
                </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                    <Link
                        key={tag}
                        href={`/blog/tag/${encodeURIComponent(tag)}`}
                        className="rounded-full border border-base-300 px-2.5 py-0.5 text-xs hover:bg-base-200 transition-colors"
                    >
                        #{tag}
                    </Link>
                ))}
            </div>

            {post.cover && (
                <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl">
                    <Image
                        src={post.cover}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            <article className="prose prose-neutral dark:prose-invert mt-10 max-w-none">
                {content}
            </article>
        </main>
    );
}