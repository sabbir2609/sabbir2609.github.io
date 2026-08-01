import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_PATH = path.join(process.cwd(), "content", "blog");

export interface Post {
    slug: string;
    title: string;
    description: string;
    date: string;
    category: string;
    tags: string[];
    published: boolean;
    cover: string;
    readingTime: string;
}

export interface PostContent extends Post {
    content: string;
}

export function getAllPosts(): Post[] {
    const files = fs.readdirSync(POSTS_PATH);

    return files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => {
            const source = fs.readFileSync(path.join(POSTS_PATH, file), "utf8");

            const { data, content } = matter(source);

            return {
                slug: file.replace(/\.mdx$/, ""),
                title: data.title,
                description: data.description,
                date: data.date,
                category: data.category,
                tags: data.tags ?? [],
                published: data.published,
                cover: data.cover,
                readingTime: readingTime(content).text,
            };
        })
        .filter((post) => post.published)
        .sort(
            (a, b) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
        );
}

export function getPostBySlug(slug: string): PostContent | null {
    const filePath = path.join(POSTS_PATH, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const source = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(source);

    return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        category: data.category,
        tags: data.tags ?? [],
        published: data.published,
        cover: data.cover,
        readingTime: readingTime(content).text,
        content,
    };
}

export function getAllCategories(): string[] {
    return [...new Set(getAllPosts().map((post) => post.category))].sort();
}

export function getPostsByCategory(category: string): Post[] {
    return getAllPosts().filter(
        (post) => post.category.toLowerCase() === category.toLowerCase()
    );
}

export function getAllTags(): string[] {
    return [
        ...new Set(
            getAllPosts().flatMap((post) => post.tags)
        ),
    ].sort();
}

export function getPostsByTag(tag: string): Post[] {
    return getAllPosts().filter((post) =>
        post.tags.some(
            (t) => t.toLowerCase() === tag.toLowerCase()
        )
    );
}

export const POSTS_PER_PAGE = 5;

export function getPaginatedPosts(
    page: number,
    pageSize: number
) {
    const posts = getAllPosts();

    const totalPosts = posts.length;
    const totalPages = Math.ceil(totalPosts / pageSize);

    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    return {
        posts: posts.slice(start, end),
        currentPage: page,
        totalPages,
        totalPosts,
    };
}