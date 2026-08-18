import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  // src/content/posts 下的 .md / .mdx 都会自动成为一篇文章
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum([
      '日常碎碎念',
      '旅行足迹',
      '读书观影',
      '美食厨房',
      '手作',
    ]),
    tags: z.array(z.string()).default([]),
    // 封面图：填图床/对象存储链接；留空则按栏目色生成占位图
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
