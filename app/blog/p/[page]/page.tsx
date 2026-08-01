// app/blog/p/[page]/page.tsx

import { notFound } from "next/navigation";

import BlogList from "./BlogList";
import { getPaginatedPosts, POSTS_PER_PAGE } from "@/lib/posts";

interface Props {
    params: Promise<{
        page: string;
    }>;
}

export function generateStaticParams() {
    const totalPosts = getPaginatedPosts(1, POSTS_PER_PAGE).totalPosts;
    const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

    return Array.from(
        { length: totalPages - 1 },
        (_, i) => ({
            page: String(i + 2),
        })
    );
}

export default async function BlogPagination({
    params,
}: Props) {
    const page = Number((await params).page);

    if (Number.isNaN(page) || page < 2) {
        notFound();
    }

    const data = getPaginatedPosts(page, POSTS_PER_PAGE);

    if (data.posts.length === 0) {
        notFound();
    }

    return <BlogList {...data} />;
}