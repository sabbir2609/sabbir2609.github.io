import Link from "next/link";

interface BlogSidebarProps {
    categories: string[];
}

export default function BlogSidebar({
    categories,
}: BlogSidebarProps) {
    return (
        <aside className="w-full md:w-64">
            <div className="rounded-lg border p-5">
                <h2 className="mb-4 text-xl font-bold">
                    Categories
                </h2>

                <ul className="space-y-2">
                    {categories.map((category) => (
                        <li key={category}>
                            <Link
                                href={`/blog/category/${category}`}
                                className="hover:underline"
                            >
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}