import Link from "next/link";
import Pagination from "@/components/blog/Pagination";

interface BlogListProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    posts: any[];
    currentPage: number;
    totalPages: number;
}

export default function BlogList({
    posts,
    currentPage,
    totalPages,
}: BlogListProps) {
    return (
        <main className="mx-auto max-w-3xl p-8">
            <h1 className="mb-8 text-4xl font-bold">
                Blog
            </h1>

            {posts.map((post) => (
                <article
                    key={post.slug}
                    className="mb-6 rounded-lg border p-6"
                >
                    <Link href={`/blog/${post.slug}`}>
                        <h2 className="text-2xl font-bold hover:underline">
                            {post.title}
                        </h2>
                    </Link>

                    <p className="text-sm text-muted-foreground">
                        {post.date} • {post.readingTime}
                    </p>

                    <p className="mt-2">{post.description}</p>
                </article>
            ))}

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </main>
    );
}