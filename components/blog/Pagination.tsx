import Link from "next/link";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

export default function Pagination({
    currentPage,
    totalPages,
}: PaginationProps) {
    const previousHref =
        currentPage === 2
            ? "/blog"
            : `/blog/p/${currentPage - 1}`;

    const nextHref = `/blog/p/${currentPage + 1}`;

    return (
        <div className="join mt-10 flex justify-center">
            {/* Previous */}
            {currentPage > 1 ? (
                <Link
                    href={previousHref}
                    className="join-item btn"
                >
                    «
                </Link>
            ) : (
                <button
                    className="join-item btn btn-disabled"
                >
                    «
                </button>
            )}

            {/* Current Page */}
            <button className="join-item btn">
                Page {currentPage} of {totalPages}
            </button>

            {/* Next */}
            {currentPage < totalPages ? (
                <Link
                    href={nextHref}
                    className="join-item btn"
                >
                    »
                </Link>
            ) : (
                <button
                    className="join-item btn btn-disabled"
                >
                    »
                </button>
            )}
        </div>
    );
}