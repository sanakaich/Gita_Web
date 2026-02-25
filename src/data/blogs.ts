export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  coverImage: string;
  content: string; // HTML string rendered inside the blog post page
};

// ── Add new posts at the TOP of this array ───────────────────────────────────
export const blogs: BlogPost[] = [
  {
    id: 8,
    slug: "what-is-dharma",
    title: "What is Dharma? The Gita's Answer",
    date: "February 25, 2026",
    category: "Philosophy",
    readTime: "6 min read",
    excerpt:
      "Dharma is one of the most misunderstood words in Indian thought. The Bhagavad Gita offers a nuanced, layered answer that goes far beyond mere duty or religion.",
    coverImage: "/blog-1.png",
    content: `
      <h2>A Word That Resists Translation</h2>
      <p>
        "Dharma" is often translated as "duty," "righteousness," or "religion." But none of these
        captures its full depth. The Sanskrit root <em>dhri</em> means "to hold" or "to sustain."
        Dharma, then, is that which holds the world together — the moral and cosmic order underlying
        all life.
      </p>
      <p>
        The Bhagavad Gita opens with the word <em>dharma-kshetra</em> — the field of dharma.
        The entire dialogue between Krishna and Arjuna is, at its core, a conversation about
        what dharma means when life becomes impossibly complex.
      </p>

      <h2>Svadharma — Your Own Dharma</h2>
      <p>
        One of the Gita's most significant insights is the concept of <strong>svadharma</strong>
        — one's own unique duty. Krishna tells Arjuna: <em>"Better is one's own dharma, though
        imperfectly performed, than the dharma of another well performed."</em> (3.35)
      </p>
      <p>
        This is a radical teaching. It means dharma is not a universal rulebook applied identically
        to everyone. It is deeply personal — shaped by one's nature (<em>svabhava</em>), one's
        role in life, and the demands of the moment.
      </p>

      <h2>Dharma in a Moment of Conflict</h2>
      <p>
        Arjuna's crisis is precisely a conflict of dharmas: his duty as a warrior demands he fight;
        his duty as a son and student demands he protect his elders. Krishna does not dismiss the
        conflict — he walks through it, step by step, until Arjuna can see which dharma is primary.
      </p>
      <p>
        The lesson is not that one dharma always trumps another. It is that each situation
        demands careful discernment, guided by wisdom rather than emotion.
      </p>

      <h2>Living Dharma Today</h2>
      <p>
        Every day we face smaller versions of Arjuna's dilemma — moments when obligations conflict,
        when the easy path and the right path diverge. The Gita's answer is not a formula.
        It is an invitation to cultivate the inner clarity needed to recognise dharma when
        it stands before you.
      </p>
    `,
  },
  {
    id: 7,
    slug: "overcoming-fear-gita",
    title: "What the Gita Teaches Us About Fear",
    date: "February 23, 2026",
    category: "Lifestyle",
    readTime: "4 min read",
    excerpt:
      "Fear is the first emotion Arjuna feels on the battlefield. The Gita's treatment of fear is more compassionate — and more practical — than you might expect.",
    coverImage: "/blog-2.png",
    content: `
      <h2>Fear on the Battlefield</h2>
      <p>
        When Arjuna stands between the two armies, his body shakes, his mouth goes dry, his bow
        slips from his hand. This is not metaphor — it is a precise description of acute fear.
        The Gita does not begin with a superhero. It begins with a terrified human being.
      </p>

      <h2>The Source of Fear</h2>
      <p>
        Krishna diagnoses the root of Arjuna's fear as <strong>avidya</strong> — ignorance of
        the true nature of the self. We fear loss because we believe we <em>are</em> what we
        might lose: our body, our relationships, our status. The Gita's teaching on the eternal
        nature of the soul is, in part, a cure for existential fear.
      </p>
      <p>
        <em>"The soul is never born, nor does it die. It is not slain when the body is slain."</em>
        (2.19-20). When you know what you truly are, the fear of loss transforms.
      </p>

      <h2>Abhayam — Fearlessness as a Virtue</h2>
      <p>
        In Chapter 16, Krishna lists the divine qualities. <strong>Abhayam</strong> —
        fearlessness — is the very first. Not courage in spite of fear, but a groundedness
        so deep that fear loses its grip.
      </p>
      <p>
        This fearlessness is not recklessness. It is the calm of someone who has understood
        what is truly at stake — and what is not.
      </p>

      <h2>A Practice for Today</h2>
      <p>
        The next time fear arises, try asking: <em>What am I identifying with that I fear losing?</em>
        The Gita suggests that the closer we look at the "self" we are protecting, the more we
        find it has no fixed boundary — and therefore nothing to truly lose.
      </p>
    `,
  },
  {
    id: 6,
    slug: "karma-yoga-guide",
    title: "Karma Yoga: The Art of Selfless Action",
    date: "February 21, 2026",
    category: "Yoga",
    readTime: "5 min read",
    excerpt:
      "Karma Yoga, the path of action without selfish motive, is one of the Gita's most practical and revolutionary teachings for anyone living an active, worldly life.",
    coverImage: "/blog-1.png",
    content: `
      <h2>The World's Oldest Productivity Hack?</h2>
      <p>
        Before modern psychology discovered "flow" and research showed intrinsic motivation
        outperforms extrinsic reward, the Gita was already teaching it. <strong>Karma Yoga</strong>
        — the yoga of action — is the path for people who must act in the world and cannot
        retire to a cave.
      </p>

      <h2>The Core Teaching</h2>
      <p>
        <em>"Let right deeds be thy motive, not the fruit which comes from them."</em> (2.47)
      </p>
      <p>
        This is the heart of Karma Yoga. Act with full effort. But release attachment to the
        outcome. The result is paradoxical: acting without clinging to results often leads to
        better results, because the action is purer, clearer, and undistorted by anxiety.
      </p>

      <h2>Not Passivity — Engagement</h2>
      <p>
        A common misreading is that Karma Yoga means indifference. Krishna is clear: he is
        not teaching Arjuna to do nothing. He is teaching him to act <em>fully</em>, without
        the ego-grasping that taints action and leads to suffering.
      </p>
      <p>
        The Karma Yogi works harder than most. But they work without the weight of ego,
        without the fear of failure defining their every move.
      </p>

      <h2>Karma Yoga in Daily Life</h2>
      <ul>
        <li>Do your work as an offering — not for acclaim</li>
        <li>Give your full attention to the task, not to imagined future rewards</li>
        <li>Accept outcomes — good or bad — with equal composure</li>
        <li>Let the quality of your action be your only measure</li>
      </ul>
    `,
  },
  {
    id: 5,
    slug: "krishna-the-teacher",
    title: "Krishna as a Teacher: Why He Didn't Just Give Answers",
    date: "February 19, 2026",
    category: "Stories",
    readTime: "5 min read",
    excerpt:
      "Krishna knew the answer before Arjuna asked the first question. Yet he took 18 chapters to share it. Understanding why reveals the deepest purpose of the Bhagavad Gita.",
    coverImage: "/blog-2.png",
    content: `
      <h2>The Reluctant Teacher</h2>
      <p>
        Krishna does not launch into philosophy when Arjuna collapses. He first listens.
        He lets Arjuna speak his fear, his grief, his confusion. Only when Arjuna explicitly
        says, <em>"I am your student. Teach me. I surrender to you,"</em> does Krishna begin.
      </p>
      <p>
        This is not incidental. It reflects a deep principle in Indian pedagogy: wisdom
        cannot be poured into an unwilling vessel. The student must be prepared — broken open,
        in a sense — before real teaching can begin.
      </p>

      <h2>Questions Over Answers</h2>
      <p>
        Throughout the Gita, Krishna rarely lectures without first raising a question. He
        challenges Arjuna's assumptions, probes his reasoning, and invites him to think more
        carefully. The 18 chapters are a sustained Socratic dialogue dressed in poetry.
      </p>
      <p>
        This is why the Gita remains alive after millennia. It does not give you a fish;
        it changes how you see the river.
      </p>

      <h2>The Final Test</h2>
      <p>
        At the very end of his teaching, Krishna does something remarkable. He turns to Arjuna
        and says: <em>"I have now explained this knowledge to you. Deliberate on it fully, and
        then do as you choose."</em> (18.63)
      </p>
      <p>
        A true teacher ultimately returns the student to themselves. Krishna's final act of
        teaching is to let Arjuna decide. That freedom — informed, illuminated, but free —
        is the whole point.
      </p>
    `,
  },
  {
    id: 4,
    slug: "bhakti-the-path-of-devotion",
    title: "Bhakti: The Gita's Path of Love and Devotion",
    date: "February 17, 2026",
    category: "Devotion",
    readTime: "4 min read",
    excerpt:
      "Of all the paths described in the Gita — karma, jnana, dhyana — Krishna calls bhakti the easiest and the highest. Here's why devotion is not weakness but the purest form of strength.",
    coverImage: "/blog-1.png",
    content: `
      <h2>The Highest Path</h2>
      <p>
        The Bhagavad Gita describes four primary paths to liberation: Karma Yoga (action),
        Jnana Yoga (knowledge), Dhyana Yoga (meditation), and Bhakti Yoga (devotion). At the
        end of Chapter 12, Krishna quietly reveals his preference: <em>"Those who worship me
        with devotion, meditating on my transcendental form — I carry what they lack and
        preserve what they have."</em>
      </p>

      <h2>What Bhakti Actually Means</h2>
      <p>
        Bhakti is not blind faith or sentimental piety. The Sanskrit root <em>bhaj</em> means
        "to share" or "to participate." Bhakti is the orientation of the whole self — thought,
        feeling, will — toward the divine. It is presence, not performance.
      </p>
      <p>
        The devotee sees the sacred not only in temples but in every face, every tree, every
        moment of beauty. This seeing — this constant recognition — is bhakti in practice.
      </p>

      <h2>Devotion Without Object</h2>
      <p>
        For those who do not relate to a personal God, the Gita also describes bhakti
        toward truth itself, toward the welfare of all beings, toward the highest ideal one
        can conceive. The <em>direction</em> of the heart matters more than the name
        one gives it.
      </p>

      <h2>The Easiest Path</h2>
      <p>
        Krishna calls bhakti easy because it does not require perfect knowledge or perfect
        action — only sincerity. A single genuine act of love offered without calculation
        is worth more, the Gita suggests, than elaborate ritual performed with a distracted mind.
      </p>
    `,
  },
  {
    id: 3,
    slug: "meditation-in-the-gita",
    title: "Meditation in the Gita: The Sixth Chapter Explained",
    date: "February 14, 2026",
    category: "Yoga",
    readTime: "6 min read",
    excerpt:
      "Chapter 6 of the Gita — Dhyana Yoga — is the most practical meditation manual in ancient literature. Here is everything it teaches, broken down for the modern practitioner.",
    coverImage: "/blog-2.png",
    content: `
      <h2>The Sixth Chapter: A Manual for the Mind</h2>
      <p>
        Among the Gita's eighteen chapters, the sixth — <em>Dhyana Yoga</em>, the Yoga of
        Meditation — stands apart for its practical specificity. Krishna does not speak in
        metaphors here. He gives posture, environment, schedule, and diet.
      </p>

      <h2>The Setup Krishna Recommends</h2>
      <ul>
        <li>A <strong>firm seat</strong> of grass, deerskin, and cloth — not too high, not too low</li>
        <li>A <strong>clean, solitary place</strong> — neither too dusty nor too exposed</li>
        <li><strong>Regulated eating and sleeping</strong> — neither excess nor deprivation</li>
        <li>Eyes <strong>half-closed and fixed</strong> on the tip of the nose</li>
      </ul>
      <p>
        This is not mythology. This is a meditation posture description as precise as any
        modern manual.
      </p>

      <h2>The Goal: Stilling the Fluctuations</h2>
      <p>
        What is the practitioner working toward? Krishna says: <em>"When the mind, restrained
        by the practice of yoga, attains quietude, and when seeing the Self by the self,
        one is satisfied in the Self."</em> (6.20)
      </p>
      <p>
        In modern terms: meditation is the practice of watching the mind without being swept
        away by it. The reward is a stable, joyful awareness that doesn't depend on external
        circumstances.
      </p>

      <h2>When Arjuna Says It's Too Hard</h2>
      <p>
        Arjuna protests: the mind is too restless; it cannot be controlled. Krishna agrees —
        and says two things suffice: <strong>practice</strong> (<em>abhyasa</em>) and
        <strong>non-attachment</strong> (<em>vairagya</em>). No special talent. No perfect
        conditions. Just consistent effort and the willingness to let go.
      </p>
      <p>
        That teaching has not aged a day.
      </p>
    `,
  },

  {
    id: 2,
    slug: "lessons-from-arjuna",
    title: "Lessons from the Life of Arjuna",
    date: "February 20, 2026",
    category: "Stories",
    readTime: "5 min read",
    excerpt:
      "Explore the courage, doubts, and wisdom of Arjuna on the battlefield of life — and what his journey teaches us about facing our own inner conflicts.",
    coverImage: "/blog-2.png",
    content: `
      <h2>The Warrior Who Wept</h2>
      <p>
        On the battlefield of Kurukshetra, surrounded by armies and the sound of conches,
        the greatest archer of his age laid down his bow. Arjuna — mighty, celebrated,
        trained by the gods themselves — was paralysed not by an enemy's arrow but by doubt.
      </p>
      <p>
        This moment is not a sign of weakness. It is the most human moment in all of scripture.
        Arjuna saw his teachers, his cousins, his family on the opposing side and asked the
        question every reflective person eventually asks: <em>"What is the right thing to do
        when duty conflicts with love?"</em>
      </p>

      <h2>The Three Faces of Arjuna's Crisis</h2>
      <p>
        Scholars identify three layers in Arjuna's grief on the battlefield:
      </p>
      <ul>
        <li><strong>Shoka (grief)</strong> — sorrow at the prospect of killing loved ones</li>
        <li><strong>Moha (delusion)</strong> — confusion about what is truly real and lasting</li>
        <li><strong>Bhaya (fear)</strong> — anxiety about consequences and the unknown</li>
      </ul>
      <p>
        These three — grief, delusion, and fear — are the same forces that paralyse us in our
        daily lives. We grieve change. We are deluded about permanence. We fear the unknown.
        Arjuna's crisis is our crisis, written in verse two thousand years ago.
      </p>

      <h2>What Krishna's Answer Reveals</h2>
      <p>
        Krishna does not dismiss Arjuna's grief. He does not say "stop feeling." He says:
        <em>"Grieve not, O Arjuna. The soul is eternal. What you mourn is only the body."</em>
      </p>
      <p>
        This is the foundation of the Gita's teaching — that beneath the temporary drama of
        life and death lies an unchanging reality. Understanding this is not escapism; it is
        the ground from which courageous action becomes possible.
      </p>

      <h2>Arjuna's Lesson for Us</h2>
      <p>
        Arjuna teaches us that it is OK to pause. To question. To feel the full weight of a
        difficult choice. But he also shows us that the pause must lead somewhere — to clarity,
        to action aligned with one's deepest duty.
      </p>
      <p>
        By the end of the Gita, Arjuna says: <em>"My delusion is destroyed. I have regained
        memory. I stand firm, freed of doubt. I will act according to your word."</em>
      </p>
      <p>
        That transformation — from paralysis to purposeful action — is the gift the Gita
        offers every reader.
      </p>
    `,
  },
  {
    id: 1,
    slug: "finding-inner-peace-through-the-gita",
    title: "Finding Inner Peace through the Gita",
    date: "February 10, 2026",
    category: "Philosophy",
    readTime: "4 min read",
    excerpt:
      "Discover how the timeless teachings of the Bhagavad Gita can help bring inner peace, clarity, and a sense of purpose to your everyday life.",
    coverImage: "/blog-1.png",
    content: `
      <h2>The Restless Mind</h2>
      <p>
        In chapter six, Arjuna tells Krishna that the mind is "restless, turbulent, strong,
        and unyielding." He compares controlling it to controlling the wind. Krishna agrees —
        but adds that it can be mastered through practice and detachment.
      </p>
      <p>
        This exchange is strikingly modern. Thousands of years before psychology existed as
        a field, the Gita was diagnosing the restless human mind and offering a path to calm it.
      </p>

      <h2>Nishkama Karma — Action Without Attachment</h2>
      <p>
        The Gita's most famous teaching is also its most counterintuitive: <em>"You have a
        right to perform your prescribed duties, but you are not entitled to the fruits of
        your actions."</em> (2.47)
      </p>
      <p>
        This does not mean indifference. It means performing your best work while releasing
        the desperate clinging to outcomes. The anxiety that robs us of peace almost always
        comes from our attachment to results, not from the work itself.
      </p>

      <h2>Equanimity as a Practice</h2>
      <p>
        The Sanskrit word <strong>samatvam</strong> — equanimity — appears repeatedly in the Gita.
        It describes the mental state of one who is neither elated by pleasure nor crushed by
        pain. This is not emotional numbness; it is emotional stability.
      </p>
      <p>
        Practically, it looks like this: giving your full effort to what is in front of you,
        accepting what comes without resistance, and moving forward without self-pity.
      </p>

      <h2>Starting Today</h2>
      <p>
        You do not need to master philosophy to begin. The Gita itself suggests a simple
        starting point: choose one thing you are doing today and do it without thinking about
        how it will be received or what reward it will bring.
      </p>
      <p>
        That single act of detachment, repeated daily, is the seed of the inner peace the
        Gita describes.
      </p>
    `,
  },
];

// The 2 most recent blogs for homepage preview
export const recentBlogs = blogs.slice(0, 2);
