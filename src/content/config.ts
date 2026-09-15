import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Elena Vance'),
    authorRole: z.string().default('Lead Interior Stylist & Founder'),
    authorAvatar: z.string().default('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'),
    category: z.enum([
      'coastal-farmhouse',
      'luxury-bedrooms',
      'wardrobe-vanity',
      'modern-kitchens'
    ]),
    categoryLabel: z.string(),
    featured: z.boolean().default(false),
    heroImage: z.string(),
    heroAlt: z.string(),
    pinterestImage: z.string(), // 1000x1500 optimized vertical image
    pinterestPinTitle: z.string().optional(),
    readTime: z.string().default('5 min read'),
    tags: z.array(z.string()).default([]),
    affiliateDisclosure: z.boolean().default(true),
    affiliateProducts: z.array(z.object({
      id: z.string(),
      name: z.string(),
      brand: z.string().optional(),
      price: z.string(),
      rating: z.string().optional(),
      affiliateUrl: z.string(),
      imageUrl: z.string(),
      altText: z.string(),
      prime: z.boolean().default(true),
      badge: z.string().optional()
    })).optional()
  }),
});

export const collections = {
  blog: blogCollection,
};
