import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

/* --- Varāha story (English + Sanskrit) --- */
const STORIES = {
  varaha: {
    title: "Lord Vishnu — Varāha Avatar (The Boar who Lifted the Earth)",
    youtubeId: "4imzRF3aGZg",
    english: `When the whole earth had drowned in the great deluge, there was water everywhere—endless, deep water. No mountains were visible, no vast forests, no sunlight, no soothing moonlight. Only dense darkness—deep, overwhelming. The earth, which was once the foundation of life, had now become a nearly lost point submerged in the waters. The deluge had swallowed everything. The four Vedas had fallen silent. Sages had disappeared. Even the gods felt helpless as their powers weakened.



The demon Hiranyaksha was not an ordinary demon but a great ascetic who had performed severe penance for years. He asked Lord Brahma for a boon—one that would make him undefeatable. He said, “Let no god, no human, no animal, no demon, no living being be able to kill me.” Pleased with his penance, Brahma granted the boon. But that very boon became the cause of a great storm of unrighteousness.



Hiranyaksha defeated Indra with his immense strength. Heaven trembled, fear spread everywhere. Then his eyes fell upon the earth—the very foundation of creation. He thought, “If I take control of the earth, all of creation will belong to me.” With that thought, he seized Mother Earth with his gigantic arms like a terrifying cyclone that sweeps away everything in its path. He dragged her down into the deep realms of the underworld. Mother Earth cried out, begged for help, but her voice was lost in the waters.



All the gods panicked. Every direction showed ominous signs. Fear gripped all hearts. Indra, the lord of the sky; Varuna, the lord of the waters; Agni, the lord of fire—all appealed to Lord Vishnu: “O Lord, save Mother Earth, save creation. All life has come to a standstill.”



There was movement in Vaikuntha. Vishnu smiled and said, “There is no need to fear. I will come.” But this time he did not come in his usual form—neither holding the conch nor the discus. He did not come in human form. He chose a completely different form. A form no one had ever seen—the Varaha Avatar, the divine boar.



In the form of Varaha, Vishnu radiated immense light. Energy blazed from his tusks. His snout challenged the power of the deluge itself. It was a form of protection—a warning that when unrighteousness crosses its limits, God manifests in unexpected, extraordinary forms.



As soon as Varaha appeared, all directions stilled. Even the seven sages bowed before his brilliance. His body shone like a blazing ocean of fire. All the energy of the cosmos seemed to reside within him.



Then he leapt into the ocean with a tremendous roar. The waters churned. Aquatic beings fled. Serpents hissed. Deep within the ocean lay a hidden kingdom—the realm of the demons—where Mother Earth was imprisoned.



Varaha began his battle—against sea creatures, serpents, darkness, and the arrogance that had swallowed the earth. When he rose from the waters, Mother Earth rested on his mighty tusks—calm, beautiful, returning to life.



But the story did not end there. Hiranyaksha returned, furious. He saw the earth shining on the tusks of a divine boar. He mocked: “Vishnu! You came as a boar? Is this your divinity? I will free both you and the earth from existence!”



A great battle began—Varaha versus Hiranyaksha. Dharma versus Adharma. Compassion versus Rage. Protector versus Destroyer. The clash of weapons shook the three worlds. Oceans trembled. Time itself paused.



Finally, with a mighty blow of his tusks, Varaha struck down Hiranyaksha, who crumbled like dust. The universe breathed again. Righteousness returned.



Varaha then carried Mother Earth gently upward. As he ascended from the waters, Vedic hymns echoed. Gods showered flowers. Nature awakened. Rivers began to flow again. Trees turned green. Life revived.



Varaha, once the rescuer, now became the guardian. Vishnu looked at Bhudevi—worn yet divine—and married her. It was more than a union; it was the bond of nature and divinity. A promise that earth must be cherished, not exploited.



You can still see Varaha’s statues in ancient temples across India—depicting him lifting the earth on his tusks. They are reminders that even when everything sinks, love and righteousness can survive.



Several sacred places commemorate Varaha’s presence:



Tirumala, Andhra Pradesh – Varaha Swamy Temple, believed to be the place where Hiranyaksha was defeated.



Pushkar, Rajasthan – Varaha Temple by the Pushkar Lake.



Khajuraho, Madhya Pradesh – UNESCO World Heritage Varaha Temple with carvings of 674 deities.



Cave temples near Vijayawada – Natural caves with Varaha-Bhudevi idols.



Joshimath, Uttarakhand – Varaha Temple worshipped when Badrinath closes for winter.



Kolhapur, Maharashtra – Varaha Temple near Mahalakshmi Temple.



Why did Vishnu choose the form of a boar? Because a boar digs deep into the earth—into darkness and filth—finding what is hidden, forgotten, and buried. When the earth sank into darkness, only such a form could retrieve her. The form was not impure—it was the purest, for it restored creation.



The story is not just mythology—it is a message. Today’s Hiranyaksha is greed, pollution, overconsumption, war, and environmental destruction. The earth is drowning again—not in water, but in waste, smoke, plastic, and ignorance.



Will a Varaha come again?

Or must we become Varaha?



We must dive into the depths—face the problems—and lift the earth again. For the earth is not just a planet. She is our mother.


`,

    sanskrit: `यदा सम्पूर्णा पृथ्वी महाप्रलये निमग्ना आसीत्, तदा सर्वतः केवलं वारि-वारि एव दृश्यते स्म। न पर्वतः, न वने, न सूर्यस्य प्रकाशः, न चन्द्रमसः शीतलच्छाया— केवलं घन tamas एव सर्वत्र व्याप्यस्थितम्। या पृथ्वी जीवनस्य आधारः आसीत् सा अद्य जल-राशौ लुप्त-प्राय बिन्दुवत् जाता आसीत्। प्रलयः सर्वं ग्रसित्वा स्थितः। चत्वारः वेदाः मौनम् अगच्छन्, ऋषयः मुनयः अदृश्याः अभवन्, देवा अपि स्वशक्तीनां क्षयम् अनुभूय विवशाः अभवन्।



दैत्यः हिरण्याक्षः न साधारणः दैत्यः आसीत्, अपि तु दीर्घकालं कठोर-तपः कृतवान् तपस्वी। स ब्रह्माणम् उवाच— “मां न कश्चन देवः, न मनुष्यः, न पशुः, न असुरः, न कश्चन जीवः मारयितुं शक्नोति।” ब्रह्मा तस्य तपसा तुष्टः सन् तं वरं दत्तवान्। स एव वरः तस्य अहंकारस्य मूलं जाता, तथा अधर्मस्य महातूफानम् आरब्धम्।



हिरण्याक्षः प्रथमं इन्द्रं पराजितवान्। स्वर्गः कम्पितः। सर्वे देवाः भयेन पीडिताः। ततः स पृथिवीं द‍ृष्ट्वा मनसि न्यध्यात्— “यदि अहं पृथिवीं स्वीकुर्याम् तर्हि सर्वा सृष्टिः मम एव।” स महाबाहुभ्याम् पृथिवीम् आकृष्य पातालगतम् अकुंशीत्। पृथिवी रोदितवती, साहाय्यं याचितवती, किन्तु तस्याः स्वनः जले निमग्नः।



देवाः सर्वे विष्णुम् आह्वयन्— “हे प्रभो! पृथिवीं रक्ष। सृष्टिं रक्ष।” वैकुण्ठे हलचलः अभवत्। विष्णुः स्मितपूर्वकं उवाच— “मा बिभेत। अहम् आगच्छामि।” किन्तु एतस्मिन् अवसरे न शंख-चक्रधारी न मानव-रूपेण सः। किं तर्हि? अद्भुतरूपेण— वराहावतारेण।



वराहस्य रूपं तेजोमयं द्योतितम्। तस्य दन्ताभ्यां दिव्या ज्योतयः निःसृताः। तस्य नासिका प्रलयस्य शक्तिम् अपि चुनौती ददौ। स विश्वस्य रक्षकः आसीत्।



वराहः समुद्रे महान् प्लवमानः निपत्य जलं कम्पयामास। नागाः फुफ्कारम् अददुः। दानवानां राज्यं जलान्तर्गतम् आसीत्, यत्र पृथिवी बद्धा आसीत्। वराहः अन्धकारेण युद्धम् अकरोत्। यदा स पुनः उदकात् उदतिष्ठत् तदा पृथिवी तस्य महादन्तयोः उपरि शोभमाना आसीत्— शांत, पुनर्जागृता।



हिरण्याक्षोऽपि पुनरागतः। स कुपितः उवाच— “विष्णो! त्वं सूकररूपेण आगतः? अहं त्वां च पृथिवीं च नाशयिष्यामि!” तदा आरब्धः महासंग्रामः— धर्मः विरुद्धम् अधर्मः।



संग्रामे त्रयो लोकाः कम्पिताः। शस्त्राणि गर्जन्ति स्म। अन्ते वराहः स्वदन्ताभ्याम् हिरण्याक्षं विदारितवान्। स धूलिवत् पतितः। धर्मः पुनः प्रतिष्ठितः।



वराहः सावधानतया पृथिवीं परिगृह्य उपरि आरोहितवान्। देवाः पुष्पवृष्टिं कृतवन्तः। वेदानां निनादः पुनः आकाशम् आवृत्य स्थितः। वृक्षाः हरिताः अभवन्, नदीः प्रवहन्त्यः, जीवाः पुनः जागृताः।



तत् पश्चात् विष्णुः भू-देव्याः रूपं दृष्ट्वा तया सह विवाहम् अकरोत्— प्रकृतेः सम्मानस्य संदेशः दत्वा। वराह-मूर्ति भारतस्य अनेकेषु प्राचीन-देवालयेषु दृश्यते— यत्र भगवान् पृथिवीं स्वदन्ताभ्यां उद्धृत्य धारयन् दृश्यते।`,

  },
};

/* tiny SVG grain for paper texture */
const svgGrain = `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><rect width='24' height='24' fill='none'/><circle cx='2' cy='2' r='0.5' fill='rgba(0,0,0,0.02)' /><circle cx='12' cy='12' r='0.5' fill='rgba(0,0,0,0.02)' /></svg>`;
const grainUrl = `url("data:image/svg+xml;utf8,${encodeURIComponent(svgGrain)}")`;

/* unified paper style for the story card */
const paperStyle = {
  backgroundImage: `${grainUrl}, linear-gradient(180deg, rgba(255,250,238,0.98), rgba(252,244,220,0.96))`,
  backgroundRepeat: "repeat, no-repeat",
  backgroundBlendMode: "overlay, normal",
  boxShadow: "inset 0 2px 18px rgba(0,0,0,0.14), 0 30px 80px rgba(255,184,28,0.03)",
  color: "#2b1e12",
};

export default function StoryPage() {
  const { name } = useParams();
  const key = (name || "varaha").toLowerCase();
  const story = STORIES[key] || STORIES.varaha;

  const [lang, setLang] = useState("english"); // "english" | "sanskrit"
  const text = lang === "sanskrit" ? story.sanskrit : story.english;
  const hasVideo = Boolean(story.youtubeId);

  const dos = {
    english: [
      "Protect nature and respect the earth.",
      "Reduce pollution, plastic use, and waste.",
      "Practice compassion and righteousness (Dharma).",
      "Stand up against wrong, even when difficult.",
      "Preserve natural resources for future generations.",
      "Live responsibly and consciously.",
    ],
    sanskrit: [
      "पृथिवीं रक्षतु — Protect the earth.",
      "प्रकृतेः सम्मानं कुर्वन्तु — Respect nature.",
      "अल्प-उपभोगं आचरन्तु — Practice minimalism.",
      "धर्मे स्थिताः भवन्तु — Stand by righteousness.",
      "प्रदूषण-निवारणम् कुर्वन्तु — Reduce pollution.",
      "जीवनस्य प्रत्येकं रूपं करुणया पश्यन्तु — Treat all life with compassion.",
    ],
  };

  const donts = {
    english: [
      "Don’t exploit or harm the environment.",
      "Don’t follow greed, arrogance, or excessive consumption.",
      "Don’t treat nature as an object to use and discard.",
      "Don’t ignore environmental or moral responsibilities.",
      "Don’t contribute to destruction through carelessness.",
    ],
    sanskrit: [
      "प्रकृतेः दुरुपयोगं न कुर्वन्तु — Do not exploit nature.",
      "लालसा, स्वार्थः, अतिकामना त्यजतु — Avoid greed and selfish behavior.",
      "कूपे, धूमे, प्लास्टिके भूमिं न निमज्जयन्तु — Don’t pollute with waste, smoke, plastic.",
      "अधर्मं न पालयन्तु — Do not support wrongdoing.",
      "प्रकृतिं केवलं उपयोग-वस्तु न मन्यन्तु — Don’t treat earth as an object.",
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">
      {/* Navbar */}
      <div className="w-full z-20">
        <Navbar />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Page header */}
        <header className="mb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-300 drop-shadow-[0_10px_30px_rgba(255,184,28,0.12)]">
            {story.title}
          </h1>
          <p className="mt-2 text-amber-100/80 max-w-2xl">
            Read the Varāha story in English or Sanskrit. Toggle inside the page below for a comfortable reading experience.
          </p>
        </header>

        {/* Full-width video at top */}
        <div className="mb-8 rounded-xl overflow-hidden border border-amber-700/20 shadow-[0_30px_80px_rgba(255,184,28,0.04)]">
          {hasVideo ? (
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              <iframe
                title={story.title}
                src={`https://www.youtube.com/embed/${story.youtubeId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          ) : (
            <div className="h-64 flex items-center justify-center bg-amber-900/5 text-amber-200/60">
              No video available
            </div>
          )}
        </div>

        {/* Story card with language toggle INSIDE */}
        <article className="relative rounded-2xl border border-amber-700/18 p-8" style={paperStyle}>
          {/* decorative warm glow */}
          <div aria-hidden className="absolute -inset-0.5 rounded-2xl pointer-events-none" style={{ boxShadow: "0 30px 120px rgba(255,184,28,0.04)" }} />

          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-amber-800">
                {lang === "sanskrit" ? "संस्कृत कथा" : "English Story"}
              </h2>
              <p className="text-sm text-amber-700/70 mt-1">{lang === "sanskrit" ? "श्लोकानुसारं पठतु।" : "Read slowly and reverently."}</p>
            </div>

            {/* Language toggle inside the card */}
            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={() => setLang("english")}
                className={`px-3 py-2 rounded-md font-medium transition ${
                  lang === "english"
                    ? "bg-amber-400 text-black shadow-[0_8px_30px_rgba(255,184,28,0.12)]"
                    : "bg-transparent text-amber-800/80 border border-amber-700/12 hover:bg-amber-700/4"
                }`}
              >
                English
              </button>

              <button
                onClick={() => setLang("sanskrit")}
                className={`px-3 py-2 rounded-md font-medium transition ${
                  lang === "sanskrit"
                    ? "bg-amber-400 text-black shadow-[0_8px_30px_rgba(255,184,28,0.12)]"
                    : "bg-transparent text-amber-800/80 border border-amber-700/12 hover:bg-amber-700/4"
                }`}
              >
                संस्कृतम्
              </button>
            </div>
          </div>

          {/* story text */}
          <div className="prose max-w-none prose-lg" style={{ color: "#2b1e12", whiteSpace: "pre-wrap" }}>
            <p>{text}</p>
          </div>

          {/* Do's & Don'ts */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg border border-amber-700/12 bg-gradient-to-b from-yellow-50/40 to-transparent">
              <h4 className="text-sm font-semibold text-amber-800 mb-3">{lang === "sanskrit" ? "करणीयानि" : "Do’s"}</h4>
              <ul className="list-decimal pl-5 space-y-2 text-sm text-amber-800/90">
                {(lang === "sanskrit" ? dos.sanskrit : dos.english).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-amber-700/12 bg-gradient-to-b from-black/5 to-transparent">
              <h4 className="text-sm font-semibold text-amber-800 mb-3">{lang === "sanskrit" ? "अकरणीयानि" : "Don’ts"}</h4>
              <ul className="list-decimal pl-5 space-y-2 text-sm text-amber-800/90">
                {(lang === "sanskrit" ? donts.sanskrit : donts.english).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
