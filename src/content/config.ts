import { defineCollection, z } from "astro:content";

const portfolio = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    roleLabel: z.string().default("Role"),
    roleValue: z.string(),

    servicesLabel: z.string().default("Services"),
    servicesValue: z.string(),

    dateLabel: z.string().default("Date"),
    dateValue: z.string(),

    designerLabel: z.string().default("Designer"),
    designerValue: z.string(),

    visitLabel: z.string().default("Visit Site"),
    visitUrl: z.string().url(),

    cardImage: z.string(),
    tags: z.array(z.string()).default([]),

    overviewTitle: z.string().default("Brand overview"),
    overviewParagraphs: z.array(z.string()).default([]),
    overviewBullets: z.array(z.string()).default([]),

    galleryMain: z.string(),
    galleryGrid: z.array(z.string()).default([]),

    stepsTitle: z.string(),
    steps: z.array(
      z.object({
        number: z.string(),
        title: z.string(),
        text: z.string(),
      })
    ).default([]),
  }),
});

export const collections = { portfolio };
