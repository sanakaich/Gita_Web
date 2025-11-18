import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

type Lesson = {
  title: string;
  summary: string;
  body: string;
  extras?: string; // exercises, practice prompts etc.
};

const LESSONS: Record<number, Lesson> = {
  1: {
    title: "Sanskrit Module 1: Foundations — Letters & Sounds",
    summary:
      "Learn vowels (स्वर), the basic consonant groups (व्यंजन), pronunciation tips and simple greetings.",
    body: `Welcome to Module 1 — Foundations.

Goals:
• Learn all basic vowels and an introductory set of consonants.
• Understand simple pronunciation rules and practice short greetings & simple sentences.

Vowels (स्वर) — pronunciation tips:
अ (a) short as in 'about'
आ (ā) long
इ (i) short like 'bit'
ई (ī) long
उ (u) short like 'put'
ऊ (ū) long
ऋ (ṛ) approximates 'ri' sound
ए (e), ऐ (ai), ओ (o), औ (au)

Consonant groups (high level) — practice each group slowly:
क ख ग घ ङ  — velar
च छ ज झ ञ  — palatal
ट ठ ड ढ ण  — retroflex
त थ द ध न  — dental
प फ ब भ म  — labial

Useful words:
नमस्ते — Hello
धन्यवादः — Thank you

Pronunciation exercise:
• Read each vowel 3×: short — long — short
• Read consonant rows slowly; notice tongue placement.

Tip: practice aloud for 5 minutes daily.`,
    extras: `Practice tasks:
1) Write the vowel chart on paper and recite each line aloud.
2) Record yourself saying 'नमस्ते' and compare pronunciation.
3) Form 3 two-word phrases (e.g., बालकः पठति — the boy reads).`
  },

  2: {
    title: "Sanskrit Module 2: Everyday Nouns & Verbs",
    summary:
      "Expand vocabulary with daily nouns, common verbs and build straightforward S-V-O sentences.",
    body: `This module builds useful vocabulary (nouns + verbs) and shows how to compose basic sentences.

Daily nouns:
जलम् — water
अन्नम् — food
गृहः — house
पुस्तकम् — book
शाला — school
फलम् — fruit
मित्रः — friend

Common verbs (present tense):
पठति — reads
पिबति / पिबामि — drinks (pibati = he/she drinks, pibāmi = I drink)
गच्छति — goes
कथेति/वदति — speaks / says

Simple sentences (SOV order common in Sanskrit):
अहं जलं पिबामि — I drink water.
सः पुस्तकम् पठति — He reads a book.
सा शालां गच्छति — She goes to school.

Practice:
• Make 5 new sentences using nouns + one verb.
• Swap subject to change verb endings (अहं पठामि — I read).`,
    extras: `Exercises:
1) Translate 5 household items into Sanskrit.
2) Compose 3 commands politely (e.g., पठतु — please read).`
  },

  3: {
    title: "Sanskrit Module 3: Pronouns, Persons & Verb Endings",
    summary:
      "Learn personal pronouns and present-tense verb endings so you can conjugate simple verbs.",
    body: `Focus: pronouns and how verbs change with person/number.

Personal pronouns:
अहं — I
त्वं — you (singular)
भवान् / भवती — you (formal male/female)
सः — he, सा — she
वयम् — we

Verb endings (present, simple pattern):
(approx)
- पठामि — I read
- पठसि — you read
- पठति — he/she reads
- पठामः — we read
- पठथ — you (pl) read
- पठन्ति — they read

Practice patterns:
1) Take verb root 'पठ्' and add endings to make sentences.
2) Convert 'He reads a book' → 'We read a book'.

Tip: memorize one verb fully (all 6 forms) for strong retention.`,
    extras: `Practice:
• Conjugate 'गच्छ्' (to go) in present for all six persons.
• Make short role-play dialogues using pronouns.`
  },

  4: {
    title: "Sanskrit Module 4: Sandhi (Joining) & Noun Cases Intro",
    summary:
      "Understand sandhi (how sounds join) and the first exposure to case endings (nominative vs accusative).",
    body: `Sandhi (sound changes) — short intro:
• When two sounds meet across word boundaries they often combine (e.g., अ + इ → ऐ in some cases).
• Practice: 'rama' + 'indra' → see how vowels can merge in spoken flow.

Noun cases (intro):
• Nominative (subject): रामः (rāmaḥ)
• Accusative (object): रामम् (rāmam)

Example sentences:
रामः पुस्तकम् पठति — Rāma reads a book. (रामः is subject)
अहं रामम् पश्यामि — I see Rāma. (रामम् is object)

Practice:
• Convert simple subject-object pairs by changing endings.
• Read aloud and notice sandhi in short phrases.`,
    extras: `Exercises:
1) Mark subject and object in 5 sentences.
2) Try a few sandhi pairings and pronounce them slowly.`
  },

  5: {
    title: "Sanskrit Module 5: Numbers, Time & Useful Phrases",
    summary:
      "Learn counting basics, time words and common everyday phrases to describe routines.",
    body: `Numbers (1–10 quick list):
1 एक (eka)
2 द्वि (dvi)
3 त्रि (tri)
4 चत्वारि / चतुर् (catur)
5 पञ्च (pañca)
6 षट् (ṣaṭ)
7 सप्त (sapta)
8 अष्ट (aṣṭa)
9 नव (nava)
10 दश (daśa)

Time words & phrases:
अधुना — now
सकाले — in the morning
रात्रौ — at night
प्रतिदिनम् — daily

Example:
अहं प्रतिदिनम् पठामि — I study daily.
सः सकाले उद्यानं गच्छति — He goes to the garden in the morning.

Practice:
• Count aloud 1–10 daily for fluency.`,
    extras: `Exercises:
• Create 3 sentences stating daily routine times.
• Try saying the numbers backward from 10 to 1.`
  },

  6: {
    title: "Sanskrit Module 6: Adjectives & Agreement",
    summary:
      "Learn how adjectives agree with nouns in gender/number/case — describe people and things.",
    body: `Adjectives must match the noun:
Masculine: सुन्दरः बालकः — a beautiful boy
Feminine: सुन्दरी बालिका — a beautiful girl
Neuter: सुन्दरं phalam — a beautiful fruit (neuter example)

Agreement notes:
• Gender affects adjective endings.
• Number (singular/plural) also changes endings.

Practice:
• Describe 5 things in your room using short adjective phrases.
• Convert masculine descriptive phrases to feminine/neuter.`,
    extras: `Exercises:
1) Write descriptions (3 lines) for people you know using adjectives properly.
2) Make plural forms and describe 'the children (बालका)'.`
  },

  7: {
    title: "Sanskrit Module 7: Short Dialogues & Practice",
    summary:
      "Bring everything together — short dialogues, comprehension practice and simple writing prompts.",
    body: `Goal: produce short dialogues and short written answers.

Sample dialogue:
A: भवतः नाम किम्? — What is your name?
B: मम नाम रामः। — My name is Rāma.

Mini-tasks:
1) Short Q&A:
- त्वं कुत्र गच्छसि? — Where do you go?
- अहं शालां गच्छामि। — I go to school.

2) Write a 4-line self-introduction:
• Name, age (संख्या), what you study, one hobby.

Practice:
• Record yourself reading a 4-line dialogue.
• Exchange simple lines with a study partner (or practice aloud).`,
    extras: `Completion challenge:
• Prepare a short 6-line dialogue mixing greetings, name, and one sentence about your routine.`
  }
};

/**
 * Utility: small SVG grain pattern for the paper texture.
 * We URL-encode the SVG when used in style below.
 */
const svgGrain = `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><rect width='24' height='24' fill='none'/><circle cx='2' cy='2' r='0.6' fill='rgba(0,0,0,0.02)' /><circle cx='12' cy='12' r='0.6' fill='rgba(0,0,0,0.02)' /></svg>`;
const paperPatternUrl = `url("data:image/svg+xml;utf8,${encodeURIComponent(svgGrain)}")`;

/**
 * Card style (page / parchment effect)
 * - layered backgrounds: subtle warmth gradient + tiny SVG grain on top
 * - inner inset shadow for 'ink on paper' effect
 */
const paperStyle: React.CSSProperties = {
  backgroundImage: [
    // grain overlay (top layer)
    paperPatternUrl,
    // warm parchment subtle paper gradient
    "linear-gradient(180deg, rgba(255,249,238,0.95), rgba(255,241,210,0.85))",
    // faint warm vignette to give depth
    "radial-gradient(1200px 600px at 10% 10%, rgba(255,230,170,0.06), transparent 20%)"
  ].join(", "),
  backgroundBlendMode: "overlay, normal, normal",
  // subtle parchment texture scale and repeat
  backgroundRepeat: "repeat, no-repeat, no-repeat",
  // inner shadow via boxShadow style (also keep Tailwind shadow)
  boxShadow: "inset 0 2px 16px rgba(0,0,0,0.18), 0 20px 50px rgba(255,184,28,0.03)"
};

export default function SanskritCoursePage(): JSX.Element {
  const params = useParams<{ Course?: string }>();
  const raw = params.Course ?? "1";
  const idx = Math.max(1, Math.min(7, Number(raw) || 1)); // clamp 1..7
  const lesson = LESSONS[idx];
  const nextIdx = idx + 1;
  const isLast = idx === 7;

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">
      {/* Navbar */}
      <div className="w-full z-20">
        <Navbar />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-300 drop-shadow-[0_8px_30px_rgba(255,184,28,0.12)]">
            Sanskrit — Course 1
          </h1>

          <p className="mt-3 text-lg text-amber-100/80">
            A warm, structured 7-module journey into Sanskrit — letters, core grammar, and short dialogues.
          </p>

          <div className="mt-4 p-4 rounded-xl border border-amber-700/20 bg-gradient-to-b from-[#070705]/80 to-black/60 shadow-[0_10px_30px_rgba(255,184,28,0.04)]">
            <h2 className="text-2xl font-semibold text-amber-200">{lesson.title}</h2>
            <p className="mt-2 text-amber-100/80">{lesson.summary}</p>
          </div>
        </header>

        {/* Paper-like Card */}
        <main>
          <article
            className="relative rounded-2xl border border-amber-800/20 p-6 transition-all"
            style={paperStyle}
          >
            {/* subtle golden glow behind card */}
            <div
              aria-hidden
              className="absolute -inset-1 rounded-2xl pointer-events-none"
              style={{ boxShadow: "0 30px 80px rgba(255,184,28,0.03)" }}
            />

            <h3 className="text-2xl font-semibold text-amber-900 mb-3">{lesson.title}</h3>

            {/* content area uses darker warm ink color for readability */}
            <pre className="whitespace-pre-wrap text-lg leading-relaxed text-amber-900/95 bg-transparent relative z-10">
              {lesson.body}
            </pre>

            {/* extras / exercises */}
            {lesson.extras && (
              <div className="mt-6 p-4 rounded-lg border border-amber-700/10 bg-amber-50/5">
                <h4 className="text-sm font-semibold text-amber-700 mb-2">Practice & Exercises</h4>
                <pre className="whitespace-pre-wrap text-sm text-amber-900/80">{lesson.extras}</pre>
              </div>
            )}

            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-amber-700/60">Module {idx} of 7</div>

              <div className="flex items-center gap-3">
                {idx > 1 ? (
                  <Link
                    to={`/sanskrit/${idx - 1}`}
                    className="px-4 py-2 rounded-md bg-transparent border border-amber-600/20 text-amber-900 hover:bg-amber-700/5 transition"
                  >
                    ← Previous
                  </Link>
                ) : (
                  <div />
                )}

                {!isLast ? (
                  <Link
                    to={`/sanskrit/${nextIdx}`}
                    className="px-4 py-2 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-900 hover:shadow-[0_8px_30px_rgba(255,184,28,0.08)] transition"
                    aria-label={`Go to module ${nextIdx}`}
                  >
                    Next Module →
                  </Link>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="text-amber-900/95 px-3 py-2 rounded-md bg-gradient-to-r from-yellow-600/6 to-amber-700/6 border border-amber-700/10 shadow-[0_8px_30px_rgba(255,184,28,0.06)]">
                      Congrats — you completed Course 1
                    </div>
                    <Link
                      to="/sanskrit-course-2"
                      className="px-4 py-2 rounded-md bg-amber-400 text-black font-semibold hover:brightness-105 transition shadow-[0_10px_30px_rgba(255,184,28,0.12)]"
                    >
                      Go to Course 2
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </article>
        </main>

        <footer className="mt-10 text-center text-sm text-amber-200/50">
          <p>Practice aloud and write the letters — small daily steps build fluency.</p>
        </footer>
      </div>
    </div>
  );
}
