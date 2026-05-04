import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    image: image().optional(),
    icon: image().optional(),
    platform: z.string().optional(),
    role: z.string().optional(),
    status: z.string().optional(),
    stack: z.array(z.string()).optional(),
    highlights: z.array(z.string()).optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

export const collections = { blog, projects };
