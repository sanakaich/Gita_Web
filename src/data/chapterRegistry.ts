/**
 * chapterRegistry.ts
 * Single source of truth for all Bhagavad Gita chapter data.
 * To add a new chapter: import its JSON, add a normaliser entry, and add metadata.
 */

import rawChapter1 from "./chapter1.json";
import rawChapter2 from "./chapter2.json";

/* ── Normalised verse type ────────────────────────────────── */
export interface Verse {
    verseId: string;   // e.g. "1", "2.1"
    sanskrit: string;
    translation: string;
    innerMeaning: string;
}

/* ── Chapter 1 raw type ───────────────────────────────────── */
type Ch1Raw = {
    "Serial Number": string;
    "Sanskrit (Devanagari)": string;
    "English Translation": string;
    "Inner Meaning": string;
};

/* ── Chapter 2 raw type ───────────────────────────────────── */
type Ch2Raw = {
    "Verse Number": string; // "2,1"
    "Sanskrit": string;
    "English Translation": string;
    "Inner Meaning": string;
};

/* ── Normalisers ──────────────────────────────────────────── */
function normalise1(raw: Ch1Raw[]): Verse[] {
    return raw.map((v) => ({
        verseId: v["Serial Number"],
        sanskrit: v["Sanskrit (Devanagari)"],
        translation: v["English Translation"],
        innerMeaning: v["Inner Meaning"],
    }));
}

function normalise2(raw: Ch2Raw[]): Verse[] {
    return raw.map((v) => ({
        verseId: v["Verse Number"].replace(",", "."), // "2,1" → "2.1"
        sanskrit: v["Sanskrit"],
        translation: v["English Translation"],
        innerMeaning: v["Inner Meaning"],
    }));
}

/* ── Chapter metadata ─────────────────────────────────────── */
export interface ChapterMeta {
    title: string;
    subtitle: string;
    prev?: string;
    next?: string;
}

export const CHAPTER_META: Record<string, ChapterMeta> = {
    "1": {
        title: "Chapter 1",
        subtitle: "Arjuna Viṣāda Yoga — The Yoga of Arjuna's Dejection",
        next: "2",
    },
    "2": {
        title: "Chapter 2",
        subtitle: "Sāṅkhya Yoga — The Yoga of Knowledge",
        prev: "1",
    },
};

/* ── Verse data ───────────────────────────────────────────── */
export const CHAPTER_DATA: Record<string, Verse[]> = {
    "1": normalise1(rawChapter1 as Ch1Raw[]),
    "2": normalise2(rawChapter2 as Ch2Raw[]),
};

export const AVAILABLE_CHAPTERS = Object.keys(CHAPTER_META);
