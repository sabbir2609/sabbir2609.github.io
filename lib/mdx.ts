import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";

export async function compilePost(source: string) {
    const { content } = await compileMDX({
        source,
        options: {
            mdxOptions: {
                remarkPlugins: [
                    remarkGfm,
                    remarkMath,
                ],
                rehypePlugins: [
                    rehypeKatex,
                    rehypePrettyCode,
                ],
            },
        },
    });

    return content;
}