import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    facebookUrl: z.string().url().optional(),
    videos: z.array(z.object({
      platform: z.enum(['facebook', 'youtube', 'instagram', 'tiktok', 'douyin']),
      url: z.string().url(),
      title: z.string().optional(),
    })).default([]),
  }),
});

export const collections = { articles };
