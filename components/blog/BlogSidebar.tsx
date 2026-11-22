import Link from "next/link";
import { getAllTags } from "@/lib/posts";

interface BlogSidebarProps {
    categories: string[];
}

export default function BlogSidebar({ categories }: BlogSidebarProps) {
    const tags = getAllTags();

    return (
        <aside className="w-full md:w-56 shrink-0">

            {/* Mobile: native collapsible */}
            <details className="md:hidden group rounded-xl border border-base-300 bg-base-200/40">
                <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold list-none">
                    <span>Browse</span>
                    <span className="transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="flex flex-col gap-4 px-4 pb-4">
                    <SidebarContent categories={categories} tags={tags} />
                </div>
            </details>

            {/* Desktop: always visible sticky */}
            <div className="hidden md:flex flex-col gap-4 sticky top-20">
                <SidebarContent categories={categories} tags={tags} />
            </div>

        </aside>
    );
}

function SidebarContent({ categories, tags }: { categories: string[]; tags: string[] }) {
    return (
        <>
            <Link
                href="/blog"
                className="text-sm text-base-content/60 hover:text-base-content transition-colors"
            >
                ← All posts
            </Link>

            <div className="rounded-xl border border-base-300 bg-base-200/40 p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-base-content/50">
                    Categories
                </p>
                <ul className="space-y-1">
                    {categories.map((category) => (
                        <li key={category}>
                            <Link
                                href={`/blog/category/${category}`}
                                className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition-colors hover:bg-base-300"
                            >
                                <span className="size-1.5 rounded-full bg-primary" />
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {tags.length > 0 && (
                <div className="rounded-xl border border-base-300 bg-base-200/40 p-4">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-base-content/50">
                        Tags
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <Link
                                key={tag}
                                href={`/blog/tag/${tag}`}
                                className="rounded-full border border-base-300 px-2.5 py-0.5 text-xs hover:bg-base-300 transition-colors"
                            >
                                #{tag}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}