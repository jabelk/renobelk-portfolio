import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/work" }),
  schema: z.object({
    title: z.string().min(1),
    slug: z.string().min(1),
    tagline: z.string().min(1),
    description: z.string().min(1),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    whyThisStack: z.string().min(1),
    primaryStack: z.array(z.string()).default([]),
    domains: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    aiAssistNote: z.string().min(1),
    order: z.number(),
    draft: z.boolean().default(false),
    numbers: z.object({
      monthsLive: z.number().optional(),
      users: z.string().optional(),
      payments: z.string().optional(),
      infra: z.array(z.string()).default([]),
      auth: z.string().optional(),
      community: z.string().optional(),
      marketing: z.string().optional(),
      specCount: z.number().optional(),
    }).default({}),
    skills: z.array(z.object({
      name: z.string(),
      domain: z.string(),
      decision: z.string(),
      broke: z.string(),
      measured: z.string(),
      fixed: z.string(),
      media: z.string().optional(),
    })).default([]),
  }),
});

export const collections = { work };
