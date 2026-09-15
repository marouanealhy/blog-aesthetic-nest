# Aesthetic Nest — Home Decor & Interior Design Blog

Aesthetic Nest is an editorial home decor blog built with [Astro 5](https://astro.build/). It combines an organic minimal design aesthetic with Markdown/MDX content collections, Pinterest 1000×1500 vertical image optimization, Amazon affiliate integrations, and SEO structured data.

---

## ✨ Features

- **Editorial Design System**: Warm neutral palette (alabaster, linen, warm taupe, terracotta, and olive sage) pairing *Playfair Display* serif headings with *Plus Jakarta Sans* body text.
- **Content Collections (MDX)**: Strict type-safety and frontmatter validation powered by Astro and Zod.
- **4 Core Interior Design Categories**:
  - Coastal Farmhouse Living Rooms
  - Luxury Bedrooms
  - Wardrobe & Vanity Combos
  - Modern Kitchens
- **Amazon Affiliate Integrations**:
  - `<ProductCard />` for in-article callouts with live pricing, ratings, Prime tags, and `rel="sponsored nofollow"` compliance.
  - `<ShopTheLook />` for multi-item curated decor grids.
  - Reader disclosure notice across all articles and dedicated `/disclosure` policy page.
- **Pinterest 1000×1500 Optimization**:
  - 2:3 vertical aspect-ratio framing on all imagery.
  - Hover "Save to Pinterest" overlay buttons with automatic pre-filled share URLs.
  - OpenGraph & Pinterest rich pin meta tags.
- **SEO Ready**: Dynamic meta tags, OpenGraph, Twitter cards, XML sitemap, and JSON-LD `BlogPosting` schemas.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📝 Creating New Blog Posts

Add a new `.mdx` file under `src/content/blog/`:

```mdx
---
title: "Your Post Title"
description: "A short summary of your design guide"
pubDate: 2026-09-15
category: "luxury-bedrooms"
categoryLabel: "Luxury Bedrooms"
featured: false
readTime: "5 min read"
heroImage: "https://example.com/image.jpg"
heroAlt: "Description of the space"
pinterestImage: "https://example.com/1000x1500-vertical.jpg"
tags: ["Bedroom", "Decor"]
affiliateDisclosure: true
---
import ProductCard from '../../components/ProductCard.astro';

Your content goes here...
```

---

## 📜 License
Private & proprietary. All rights reserved.
