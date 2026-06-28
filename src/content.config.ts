import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),
    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
  }),
});

const photoCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/photo' }),
  schema: z.object({
    title: z.string(),
    caption: z.string().optional(),
    date: z.date().optional(),
    order: z.number().default(0),
    image: z.string(),
    isInGallery: z.boolean().default(true),
    isInTimeline: z.boolean().default(false),
    timelineEvent: z.string().optional(),
  }),
});

export const collections = {
  post: postCollection,
  photo: photoCollection,
};
