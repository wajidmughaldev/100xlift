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

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    order: z.number().default(0),

    listDate: z.string(),
    listTitleHtml: z.string(),
    listSummary: z.string(),

    heroSubtitle: z.string(),
    heroTitle: z.string(),
    heroLinks: z.array(z.string()).default([]),

    bannerTop: z.string(),

    processTitle: z.string(),
    processSteps: z
      .array(
        z.object({
          number: z.string(),
          title: z.string(),
          text: z.string(),
        })
      )
      .default([]),
    processCtaText: z.string(),
    processCtaLabel: z.string(),
    processCtaUrl: z.string(),

    overviewTitle: z.string(),
    overviewDescription: z.string(),
    overviewApproachTitle: z.string(),
    overviewApproachBullets: z.array(z.string()).default([]),
    overviewImage: z.string(),

    faqOneSubtitle: z.string(),
    faqOneTitle: z.string(),
    faqOneSupport: z.string(),
    faqOneItems: z
      .array(
        z.object({
          number: z.string(),
          title: z.string(),
          bodyHtml: z.string(),
        })
      )
      .default([]),

    bannerBottom: z.string(),

    faqTwoSubtitle: z.string(),
    faqTwoTitle: z.string(),
    faqTwoItems: z
      .array(
        z.object({
          number: z.string(),
          question: z.string(),
          answerHtml: z.string(),
        })
      )
      .default([]),

    finalCtaTitle: z.string(),
    finalCtaSubtitle: z.string(),
    finalCtaButtonLabel: z.string(),
    finalCtaButtonUrl: z.string(),
  }),
});

export const collections = { portfolio, services };
