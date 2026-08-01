import BlogList from "./p/[page]/BlogList";
import { getPaginatedPosts, POSTS_PER_PAGE } from "@/lib/posts";

export default function BlogPage() {
    const data = getPaginatedPosts(1, POSTS_PER_PAGE);

    return <BlogList {...data} />;
}