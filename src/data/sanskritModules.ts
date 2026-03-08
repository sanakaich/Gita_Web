/**
 * sanskritModules.ts
 * Registry for all Sanskrit learning modules.
 * To add a new module: add quiz JSON, notes, and an entry below.
 */
import quiz1 from "./quiz/quiz1.json";
import quiz3 from "./quiz/quiz3.json";
import quiz4 from "./quiz/quiz4.json";

export interface QuizQuestion {
    question: string;
    options: string[];
    correct: number;
}

export interface NoteSection {
    heading: string;
    content: string;
}

export interface SanskritModule {
    id: string;
    day: number;
    title: string;
    description: string;
    youtubeId: string;
    tags: string[];
    notes: NoteSection[] | null; // null = no notes for this day
    quiz: QuizQuestion[] | null; // null = no quiz for this day
    prev: string | null;
    next: string | null;
}

export const PASS_PERCENT = 70;

export const SANSKRIT_MODULES: SanskritModule[] = [
    {
        id: "1",
        day: 1,
        title: "Basic Greetings & Introductions",
        description:
            "Learn everyday Sanskrit greetings, how to introduce yourself, ask someone's name, and express basic polite phrases.",
        youtubeId: "RRxcNRxNBX8",
        tags: ["Greetings", "Introductions", "Vocabulary"],
        notes: [
            {
                heading: "Overview",
                content:
                    "In this lesson, we learn some basic Sanskrit sentences that help us in everyday conversations. These simple expressions allow us to greet people, introduce ourselves, ask questions, and speak politely in Sanskrit.",
            },
            {
                heading: "Greetings",
                content:
                    "• नमस्ते (Namaste) — Hello / Greetings\n• सुप्रभातम् (Suprabhatam) — Good Morning\n• सुभसंध्या (Subhasandhyā) — Good Evening",
            },
            {
                heading: "Introducing Yourself",
                content:
                    "• मम नाम ______ अस्ति (Mama Nāma ______ Asti) — My name is ______\n• अहं विद्यार्थी अस्मि (Aham Vidyārthī Asmi) — I am a student\n• भवतः नाम किम्? (Bhavataḥ Nāma Kim?) — What is your name?",
            },
            {
                heading: "Useful Phrases",
                content:
                    "• अहं संस्कृतं पठामि (Aham Saṁskṛtam Paṭhāmi) — I study Sanskrit\n• अहं भारतात् अस्मि (Aham Bhāratāt Asmi) — I am from India\n• धन्यवादः (Dhanyavādaḥ) — Thank you\n• क्षम्यताम् (Kṣamyatām) — Sorry / Excuse me\n• अहं न जानामि (Aham Na Jānāmi) — I don't know",
            },
        ],
        quiz: quiz1 as QuizQuestion[],
        prev: null,
        next: "2",
    },
    {
        id: "2",
        day: 2,
        title: "Sanskrit Pronunciation",
        description:
            "Master the sounds of Sanskrit — vowels, consonants, and the unique phonetic rules that make Sanskrit one of the most precise languages in the world.",
        youtubeId: "tbQyT8TIqu0",
        tags: ["Pronunciation", "Phonetics", "Devanagari"],
        notes: [
            {
                heading: "Sanskrit Vowels (स्वर)",
                content:
                    "Sanskrit has 16 vowels. The short and long vowels differ in duration:\n" +
                    "• अ (a) — short, like 'u' in 'fun'\n" +
                    "• आ (ā) — long, like 'a' in 'father'\n" +
                    "• इ (i) — short, like 'i' in 'sit'\n" +
                    "• ई (ī) — long, like 'ee' in 'see'\n" +
                    "• उ (u) — short, like 'u' in 'put'\n" +
                    "• ऊ (ū) — long, like 'oo' in 'moon'\n" +
                    "• ए (e) — like 'a' in 'name'\n" +
                    "• ओ (o) — like 'o' in 'go'",
            },
            {
                heading: "Sanskrit Consonants (व्यञ्जन)",
                content:
                    "Sanskrit consonants are grouped by place of articulation:\n" +
                    "• Gutturals (throat): क ख ग घ\n" +
                    "• Palatals (palate): च छ ज झ\n" +
                    "• Cerebrals (retroflex, tongue curled back): ट ठ ड ढ\n" +
                    "• Dentals (teeth): त थ द ध\n" +
                    "• Labials (lips): प फ ब भ\n" +
                    "Each group has an aspirated form (with 'h' breath) and an unaspirated form.",
            },
            {
                heading: "Pronunciation Tips",
                content:
                    "• Every letter in Sanskrit is always pronounced — no silent letters\n" +
                    "• Aspirated consonants (ख, घ, छ, झ…) have a puff of breath\n" +
                    "• Retroflex consonants (ट, ड…) curve the tongue to the roof of the mouth\n" +
                    "• Always pronounce the inherent 'a' vowel after a consonant unless a virama (्) is used\n" +
                    "• Stress is typically on the second-to-last syllable in longer words",
            },
            {
                heading: "Devanagari Script Basics",
                content:
                    "• Each character represents a syllable (consonant + inherent 'a')\n" +
                    "• Vowel marks (matras) modify the inherent vowel: क + ि = कि (ki)\n" +
                    "• Anusvara (ं) adds a nasal sound: हं\n" +
                    "• Visarga (ः) adds an 'h' echo: नमः\n" +
                    "• Conjunct consonants are formed by combining two consonants using virama",
            },
        ],
        quiz: null,
        prev: "1",
        next: "3",
    },
    {
        id: "3",
        day: 3,
        title: "Basic Sentence Patterns",
        description:
            "Learn four foundational Sanskrit sentence patterns to describe identity, introduce yourself, identify objects by gender, and describe actions in the present tense.",
        youtubeId: "X8m4uoa25BQ",
        tags: ["Sentence Structure", "Grammar", "Verbs"],
        notes: [
            {
                heading: "Overview",
                content:
                    "In this lesson, we learn four basic Sanskrit sentence patterns that allow us to form simple, meaningful sentences without needing complicated grammar.",
            },
            {
                heading: "Pattern 1 — I am…  (अहम् __ अस्मि)",
                content:
                    "Structure: Aham + [Identity] + Asmi\n• अहम् विद्यार्थी अस्मि — I am a student\n• अहम् शिक्षकः अस्मि — I am a teacher",
            },
            {
                heading: "Pattern 2 — My name is…  (मम नाम __ अस्ति)",
                content:
                    "Structure: Mama + Nāma + [Name] + Asti\n• मम नाम रामः अस्ति — My name is Rama\n• मम नाम सीता अस्ति — My name is Sita",
            },
            {
                heading: "Pattern 3 — This is…  (एषः / एषा / एतत्)",
                content:
                    "Gender-based demonstratives:\n• एषः (masculine) — एषः बालकः — This is a boy\n• एषा (feminine) — एषा बालिका — This is a girl\n• एतत् (neuter) — एतत् पुस्तकम् — This is a book",
            },
            {
                heading: "Pattern 4 — Present Actions  (अहम् + verb ending in -मि)",
                content:
                    "• अहम् गच्छामि — I go\n• अहम् पठामि — I read\n• अहम् खादामि — I eat\n• अहम् लिखामि — I write",
            },
        ],
        quiz: quiz3 as QuizQuestion[],
        prev: "2",
        next: "4",
    },
    {
        id: "4",
        day: 4,
        title: "Adding Context & Sentence Expansion",
        description:
            "Learn to enrich basic Sanskrit sentences by adding place, number, time, and object information — turning simple statements into full, descriptive expressions.",
        youtubeId: "MpLMHN2SL7U",
        tags: ["Sentence Expansion", "Context", "Advanced"],
        notes: [
            {
                heading: "Overview",
                content:
                    "In this lesson, we make Sanskrit sentences more meaningful by adding context. Instead of only simple sentences, we include place, number, action, and time details.",
            },
            {
                heading: "Adding Place",
                content:
                    "• अहम् गृहे अस्मि — I am at home (गृहे = at home)\n• अहम् कक्षायाम् उपविशामि — I am sitting in the room (कक्षायाम् = in the room)",
            },
            {
                heading: "Adding Number",
                content:
                    "• अत्र त्रयः छात्राः सन्ति — There are three students here\n  (अत्र = here, त्रयः = three, छात्राः = students, सन्ति = are)",
            },
            {
                heading: "Sentence Expansion — Step by Step",
                content:
                    "Start simple, add detail progressively:\n1. अहम् पठामि — I read\n2. अहम् पुस्तकम् पठामि — I read a book (+ object)\n3. अहम् गृहे पुस्तकम् पठामि — I read a book at home (+ place)\n4. अहम् प्रातः पुस्तकम् पठामि — I read a book in the morning (+ time)\n5. अहम् दश पुस्तकानि पठामि — I read ten books (+ number)",
            },
        ],
        quiz: quiz4 as QuizQuestion[],
        prev: "3",
        next: null,
    },
];

export const MODULE_MAP = Object.fromEntries(
    SANSKRIT_MODULES.map((m) => [m.id, m])
);
