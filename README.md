# Gita Serenity – Bhagavad Gita & Sanskrit Learning Web App

A modern, responsive React + TypeScript web application to explore the Bhagavad Gita, Sanskrit shlokas, and spiritual stories in a calm, immersive UI.
This project uses Vite, React, TypeScript, Tailwind CSS, and shadcn-ui components, with client-side routing powered by React Router.

---

## Table of Contents

1. Features
2. Tech Stack
3. Project Structure
4. Getting Started
5. Available Scripts
6. Routing Overview
7. Key Pages & Functionality
8. Styling & UI
9. Code Quality
10. Deployment
11. Future Improvements
12. License

---

## Features

* Landing / Home Page

  * Hero section with video background (bg-video.mp4) and peaceful gradient
  * Overview of Sanskrit learning, Gita exploration, and stories
  * Highlight sections for Sanskrit, Gita chapters, and stories

* Bhagavad Gita Chapter 1 Explorer

  * Interactive page for Chapter 1 (Arjuna Vishada Yoga)
  * Verse cards with:

    * Verse number
    * Sanskrit text
    * Concise explanation
  * Expandable cards for full verse view in manuscript style

* Sanskrit Shlokas Page

  * Sanskrit text (Devanagari)
  * Transliteration
  * English translation
  * Reference metadata

* Spiritual Stories

  * Card-based narrative previews
  * Individual story pages
  * Calm and devotional UX

* Dynamic Client Routing

  * gita/:chapter
  * sanskrit/:Course
  * stories/:name

* Global UI / UX

  * Persistent Navbar and Footer
  * Smooth gradients & glow effects
  * Toasts & tooltips integrated

---

## Tech Stack

Core:

* React 18
* TypeScript
* Vite

Routing & Data:

* react-router-dom
* @tanstack/react-query

Styling & UI:

* Tailwind CSS
* shadcn-ui
* lucide-react icons

Utilities:

* zod
* react-hook-form
* embla-carousel-react
* recharts
* sonner

---

## Project Structure

gita-serenity/
README.md
index.html
package.json
tailwind.config.ts
vite.config.ts
public/
src/
components/
pages/
hooks/
lib/
index.css

---

## Getting Started

### Prerequisites

* Node.js v18+
* npm or another package manager

Check versions:
node -v
npm -v

### Installation

git clone <YOUR_GIT_URL>
cd gita-serenity
npm install
npm run dev

Open in browser:
[https://gita-web-sanak.vercel.app/](https://gita-web-sanak.vercel.app/)

---

## Available Scripts

npm run dev — starts development server
npm run build — creates production build
npm run build:dev — debug-mode build
npm run preview — preview production build
npm run lint — run ESLint

---

## Routing Overview

Routes defined in src/App.tsx:

/ → Index (Landing page)
/blog → Blog
/stories → Stories page
/sanskrit → Sanskrit page
/gita/:chapter → Gita chapter view
/sanskrit/:Course → Sanskrit course view
/stories/:name → Specific story page

* → NotFound

App is wrapped with:

* QueryClientProvider
* TooltipProvider
* Sonner and shadcn Toaster

---

## Key Pages & Functionality

### Home / Index

* Video background
* Sections for Sanskrit, Gita & Stories
* Smooth scrolling UI

### Gita Chapter 1 Explorer

* Verses stored as JS objects
* Expandable verse cards
* Traditional manuscript aesthetic

### Sanskrit Shlokas

* Devanagari + transliteration + English meaning
* Clean typography
* Spiritual ambiance

### Stories

* Card UI with previews
* Continue reading pages
* Rich storytelling layout

---

## Styling & UI

* Tailwind utility classes
* Global styles in src/index.css
* shadcn-ui:

  * Button, Card, Dropdown, Dialog, Input, Tabs, Toast, Tooltip, Accordion
* lucide-react icons

---

## Code Quality

* ESLint enabled (npm run lint)
* TypeScript strict mode
* Modular component architecture
* Centralized UI styles

---

## Deployment

Build:
npm run build
npm run preview

Static hosting (Netlify, Vercel, GitHub Pages):

* Build command: npm run build
* Output directory: dist
* Enable SPA mode → redirect all routes to index.html

---

## Future Improvements

* Full Gita: all 18 chapters
* Audio chanting for verses
* Word-by-word Sanskrit translation
* Learning progress & memory
* Story archives & timelines
* Light/Dark mode switching

---

## License

Currently proprietary — license to be determined.

