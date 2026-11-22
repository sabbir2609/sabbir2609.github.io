import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/blog/Pagination";
import type { Post } from "@/lib/posts";

interface BlogListProps {
    posts: Post[];
    currentPage: number;
    totalPages: number;
}

export default function BlogList({ posts, currentPage, totalPages }: BlogListProps) {
    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Blog</h1>

            <div className="flex flex-col gap-5">
                {posts.map((post) => (
                    <article
                        key={post.slug}
                        className="group rounded-xl border border-base-300 bg-base-200/30 overflow-hidden transition-shadow hover:shadow-md"
                    >
                        {post.cover && (
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={post.cover}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        )}

                        <div className="p-5">
                            <div className="mb-2 flex items-center gap-2">
                                <Link
                                    href={`/blog/category/${post.category}`}
                                    className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary hover:bg-primary/20 transition-colors"
                                >
                                    {post.category}
                                </Link>
                                <span className="text-xs text-base-content/50">
                                    {post.date} · {post.readingTime}
                                </span>
                            </div>

                            <Link href={`/blog/${post.slug}`}>
                                <h2 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>
                            </Link>

                            <p className="mt-2 text-sm text-base-content/70 line-clamp-2">
                                {post.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>

            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
    );
}