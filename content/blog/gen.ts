import * as fs from 'node:fs/promises';
import * as path from 'node:path';

// Configuration
const OUTPUT_DIR = path.join(process.cwd(), 'posts');
const FILE_COUNT = 5; // Change this to the number of MDX files you need

const CATEGORIES = ['General', 'Next.js', 'TypeScript', 'WebDev', 'Tutorials'];
const TAG_POOL = ['Introduction', 'Next.js', 'React', 'TypeScript', 'WebDev', 'Guide', 'Frontend'];

/**
 * Generate a slugified string from a title
 */
function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

/**
 * Pick a few random items from an array
 */
function getRandomItems<T>(arr: T[], count: number): T[] {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

/**
 * Build MDX file content string
 */
function createMdxContent(index: number): { fileName: string; content: string } {
    const title = index === 1 ? 'Hello World' : `Blog Post Number ${index}`;
    const slug = slugify(title);
    const category = CATEGORIES[(index - 1) % CATEGORIES.length];
    const tags = getRandomItems(TAG_POOL, 2);

    // Format date as YYYY-MM-DD
    const date = new Date().toISOString().split('T')[0];

    const content = `---
title: "${title}"
description: "${index === 1 ? 'My first blog post.' : `This is auto-generated blog post #${index}.`}"
date: "${date}"
category: "${category}"
tags:
${tags.map((tag) => `  - ${tag}`).join('\n')}
published: true
cover: "/blog/images/${slug}.jpg"
---

# ${title}

This is ${index === 1 ? 'my first MDX blog post' : `auto-generated post #${index}`}.

## Why MDX?

Because I can write Markdown and React components together.
`;

    return {
        fileName: `${slug}.mdx`,
        content,
    };
}

/**
 * Main execution script
 */
async function generateMdxFiles(count: number): Promise<void> {
    try {
        // Ensure the output directory exists
        await fs.mkdir(OUTPUT_DIR, { recursive: true });

        console.log(` Generating ${count} MDX files in: ${OUTPUT_DIR}\n`);

        for (let i = 1; i <= count; i++) {
            const { fileName, content } = createMdxContent(i);
            const filePath = path.join(OUTPUT_DIR, fileName);

            await fs.writeFile(filePath, content, 'utf-8');
            console.log(` Created: ${fileName}`);
        }

        console.log(`\n Successfully generated ${count} files.`);
    } catch (error) {
        console.error(' Error generating MDX files:', error);
    }
}

// Run the script
generateMdxFiles(20);