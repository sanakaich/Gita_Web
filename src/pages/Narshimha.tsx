import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

/* --- stories data (kept same as your previous version) --- */
const STORIES = {
  narasimha: {
    title: "The Untold Story of Narasiṁha",
    youtubeId: "wde8JLqbKJ4",
    english: `In the early ages of creation, when the distinction between gods and demons was slowly taking shape—before cities, kingdoms, battles, or settled peace existed—when the cosmos itself was new and everything was being formed—Brahmā, who created the universe, conceived a great sage in his mind. Kaśyapa was no ordinary rishi. His austerities, wisdom, and inner power were so extraordinary that both devas and daityas respected him. Brahmā entrusted him with a special responsibility: to maintain cosmic balance and foster life.



Rishi Kaśyapa took thirteen wives, and through them sprang forth the many beings of the world—gods, demons, gandharvas, nāgas, animals, and birds. Among those wives was Diti, whose descendants would later change the course of cosmic events. From Diti came a lineage that set the stage for the eternal clash between dharma and adharma, divine duty and ego, and also for the story of a son who would bear the torch of truth and devotion even against his own father.



Kaśyapa and Diti had two sons—Hiraṇyākṣa and Hiraṇyakaśyapa. From childhood they were different: while other children played, they sat in meditation. Their hearts were devoted to strength, learning, and penance. Gradually, however, anger, pride, and hatred toward the gods grew within them. Hiraṇyākṣa dragged the Earth into the netherworld; to rescue it, Lord Viṣṇu incarnated as Varāha and slew Hiraṇyākṣa. Hiraṇyakaśyapa recognized that Viṣṇu had slain his brother—and thus his desire for revenge began. He ceased to be merely a king; he became one resolved to confront Viṣṇu himself.



Hiraṇyakaśyapa retreated to the forest and performed severe penances for thousands of years. At last Brahmā appeared and, pleased, offered him a boon. Hiraṇyakaśyapa asked for a boon that seemed to trap immortality itself: that he should not die by day or night, by deity or demon, by living being or inanimate object, by weapon or tool, in sky or earth or netherworld. Brahmā granted it. Empowered by that boon, Hiraṇyakaśyapa declared himself supreme—establishing a capital called Sonitapura, surrounding it with walls of gold and silver, erecting images of himself where gods once were worshiped, and mandating that anyone worthy of worship in that realm was only he. Dissenters were killed or made to disappear; the people lived in fear.



Yet even in darkness a lamp burns somewhere—within Hiraṇyakaśyapa’s own house a lamp shone: Prahlāda. From the womb and by the company of Sage Nārada, the seeds of Viṣṇu-devotion were sown in Prahlāda’s heart. His whole being was absorbed in devotion to Viṣṇu. When Hiraṇyakaśyapa learned that his own son chanted the name of Viṣṇu—the one who killed his brother—he was enraged. He tried to admonish, scold, and even kill him, demanding that the child abandon that name. The more he tried, the firmer Prahlāda became. Standing in the royal court he calmly told his father that he only worshiped Nārāyaṇa. Thus began the tragic spectacle of a father against his devoted son.



As Prahlāda grew, his devotion deepened: he sought neither power nor glory; his entire devotion was to Nārāyaṇa. Sent to study under teachers who taught daitya ways and obedience to the father, Prahlāda remained absorbed in devotion, replying that gods pass but Viṣṇu is eternal. Hiraṇyakaśyapa, unable to change him, resolved to destroy him. He commanded enormous, enraged elephants to trample the boy; he cast Prahlāda into caverns full of deadly serpents; he threw him into boiling oil—yet each attempt failed. The elephants bowed, the snakes curled peacefully around him, the boiling oil cooled upon touching him, and when thrown from a great height, a gentle breeze cradled him to the earth like a lotus landing lightly—each miracle confounded the tyrant’s pride.



Finally Hiraṇyakaśyapa dragged Prahlāda to the court and asked, “Where is your Viṣṇu?” Prahlāda replied simply: “He is in every particle, father—even in this pillar.” Enraged, Hiraṇyakaśyapa struck the grand pillar with his mace. The pillar did not break. From it erupted a terrible roar and a divine, fearsome form emerged—Narasimha: neither fully man nor beast, a lion-faced, human-bodied manifestation, eyes blazing like fire, claws like thunder, a radiance that drove away darkness. Narasiṁha declared that he was not deity or demon but the protector of dharma. A titanic battle ensued. No weapon, no timing—neither day nor night—was able to constrain the Lord. Narasiṁha seized Hiraṇyakaśyapa, placed him on the threshold of the court (neither in the sky nor on earth), and with his sharp claws ripped him apart—thereby ending adharma without violating Brahmā’s boon (the circumstances—time, place, means—were such that the boon’s conditions were not contravened).



Prahlāda bowed at the Lord’s feet; his devotion had accomplished what great ascetics could not. Narasiṁha’s fury, however, still burned. The cosmos trembled; the gods feared that his wrath might consume everything. Then Prahlāda, folding his hands, pleaded compassionately, “O Lord, be merciful; I am but your small devotee.” Hearing those words, the Lord’s anger subsided. He embraced Prahlāda, blessed him, and proclaimed him a true devotee. Prahlāda’s devotion became an enduring lesson: no power withstands sincere devotion. Whenever adharma grows, the Lord will incarnate to restore dharma. Prahlāda, however, never ruled as a proud king—he ruled with humility, justice, and compassion, and then renounced the world; his story still echoes as a symbol of true devotion and righteousness.



Many Narasiṁha temples across India claim the sites of these events—the pillar, the place where Hiraṇyakaśyapa fell—and devotees feel that the lion’s roar still resonates there. Some images are veiled in sandal paste and revealed only once a year; in other places the deity is considered to test devotees along rugged trails. The narration then becomes a pilgrimage: Ahobilam in the Nallamala hills is among the oldest Narasiṁha shrines, said to be the very spot of the Lord’s appearance; it contains nine Narasiṁha shrines, each representing an aspect or experience. Other famous sites include Singachalam (where the image is covered with sandal paste and unveiled on Akshaya Tritiya), Yoga Narasiṁha (a meditative form at Melkote), Namakkal (a rock temple), Devaraya Durg, Shivlingur (with 1300 steps), Mangalagiri (where a miraculous palm-juice offering is said to be partly absorbed), and Ladpur in the Himalayas (a quiet shrine where devotees say they experienced the Divine in the wind and greenery).`,
    sanskrit: `सृष्टेः आरम्भिके कालि यदा देवदानवानांभेदः शनैः शनैः निर्मीयते स्म, न कस्यचित् नगरं, न राजपाटं, न युद्धस्य प्राक्काले काचित् स्थिरता आसीत्। सृष्टिरपि तदा नवीनवन्तः सर्वं स्वरूपं स्वीकुर्वन् आसीत्। तस्मिन् काले ब्रह्मा, यः स्वयम् अस्य जगतः सृष्टिं कृतवान्, तस्य मनसि एकः महान्तः ऋषिःोत्पन्नः — काश्यपो नवो न स्यमानः।

काश्यपस्य तपसो ज्ञानं च अद्भुतं आसीत् यत् देवैः दैत्यैश्च सः समादृतः। ब्रह्मणा तं विशेषकार्येण नियुक्तम् — सृष्टौ समत्वं स्थापयितुं, जीवसमुदायं प्रसारितुं च।

काश्यपः त्रयोदशान् भार्याः गृह्णीतवान् । ताभ्यः विविधाः जाती जनिताः — देवता दानवाः गंधर्वा नागाः पशवः पक्षिणश्च। तेषु एका दिति नाम्नी सुष्टवा अतिशयः वंशः जातः यस्य फलैः सृष्टेः गति अपि परिवर्तिता। एततः आरभ्य धर्म-अधर्मयोः सङ्ग्रामस्य कथा प्रवर्तते — ईश्वरस्य अहंकारस्य च संघर्षः च संगतम्, यत्र एकः पुत्रः स्वपितुः सर्वसमक्षं सत्यभक्त्या द्योतमानः भवति।

दितेर् पुत्रौ हिरण्याक्षश्च हिरण्यकश्यपो च आसन्। तौ बाल्यकालात् विशिष्टौ आसीतुः — यत्र अन्ये बालकाः क्रीडन्ति, तौ ध्यानसम्प्रवृत्तौ आसन्। तेषां हृदयं बलं विद्या तपश्चाऽपि आसक्तम्। परन्तु कालस्य प्रभावे क्रोधः अहंकारश्च देवेषु द्वेषश्च तेषु उत्पन्नः। हिरण्याक्षेन पृथिवी पाताले गृहीता अभवत्त्, तस्मिन् समये विष्णुः वराहावतारं गृह्णीत् पृथिवीं रक्षितवान्। तस्मिन् संग्रामे हिरण्याक्षः हतः, तस्य भ्राता हिरण्यकश्यपः दृष्ट्वा निर्योग्यं क्लेदं प्राप्‍तवान् — ‘‘मम भ्रातुः मारकः विष्णुः एव’’ इति। एतत् तस्य प्रतिशोधस्य मूलम् अभवत्।

हिरण्यकश्यपः वनं गत्वा दीर्घतपसा सह सहस्रवर्षाणि तुष्टः अभवत्। ततो ब्रह्मा प्रत्युत्पन्नः तस्मै वरदानम् अविदधात्। हिरण्यकश्यपेन यः वरः याचितः, सः अमृतस्यावलम्बः इव आसीत् — न दिने न रात्रौ मृत्युः, न देवैः न दैत्यैः, न जीविना न निर्जीविना, न अस्त्रे न शस्त्रे, न आकाशे न भूमौ न पाताले इति। ब्रह्मणा तत् अनुमोदितम् — तथास्तु।

एतं वरदानं लब्ध्वा हिरण्यकश्यपः अतिरिच्य स्वात्मानम् ईश्वरवत् विज्ञाय सोनितपुरं नाम राजधानी संस्थाप्य सुवर्णरजताभ्यः प्राचीरैः परिधत्तवान्। तत्र स्वमूर्तयः स्थापयति स्म, यत्र सहसा तस्य आज्ञा सर्वोपरि अभवति। यस्य विरोधः कश्चित् आसीत् सः हतः वा अनावृत्तः अभवत्। लोकाः भयेन जीवन्।

यदपि तमसा अपि कुत्रापि दीपः स्थातुम् आरभते, हिरण्यकश्यपगृहे प्रह्लाद इति दीपः प्रकाशितः। नारणामाङ्गे नारदमुनिना च सिनेहसहितेन प्रह्लादस्य मनसि विष्णुप्रेमबीजानि विक्षिप्तानि। स बालकः प्रारम्भदक्षिणे एव विष्णु-भक्तेर्निमग्नः आसीत्।

यदा हिरण्यकश्यपेन ज्ञातम् यत् तस्या भ्रातरः घातिनः विष्णोः नामोपासकः सः पुत्रः — क्लेशसमन्वितः स तस्मात् क्रुद्धः अभवत्। स पुत्रं शिक्षयितुं, अत्रम्पाराधयितुं, वा हन्तुं आज्ञातवान्। परन्तु यथोक्तम्—यतः यतः तस्य निषेधः जातः, ततोऽत्यधिकं तस्य दृढता अभवत्। दरबारे तया उक्तम् — पित, त्वं जितः कथञ्चित् वद; अहं केवलं नारायणं ईश्वरम् मानोमि।

प्रह्लादस्य वृद्धौ तस्य भक्तिः घटती न सृष्टा; स राज्यं न अपेक्षति, न वैभवं। गुरोः शिष्योः समीपे शिक्षा प्राप्तवान् परन्तु पुनः पुनरपि विष्णुभक्तेः मध्ये ही स्थितवान्। अतः हिरण्यकश्यपः क्रुध्य प्रवृत्तः अनेकानि दुष्टकर्माणि कल्पयत् — महतीं हस्तीन् प्रह्लादस्य चरणे विन्दयितुं व्याप्तवान्, विषभयोद्गारयुक्तानां सर्पाणां गुहायाम् अपहर्तुं तं उपकृतवान्, अतिकृष्टतेलस्य कढायाम् अपकर्षितुम् आदेशं दत्तवान्।

परीक्षासु सर्वासु चमत्काराः द्रष्टाः — हस्तिनः कटुन्नादाः शान्तत्वे परिणताः, सर्पाणां पुस्‍तक्रीडाः तस्य चार्चोपरि सुखेन संस्थिताः, उष्णतेलस्य स्पर्शे शीतलता अभवत्। एकदा ऊर्ध्वं तस्य पतनार्थं कृत्वा पर्वतशिखरात् टालितः तदा नूतनः वातः तं स्वीकृतवान्, दक्षिणैकं पुष्पतरेव मृदुता सहितं आश्रित्य तं पृथिव्याम् उतारयत्। एते च सर्वे चमत्काराः हिरण्यकश्यपस्य अहंकारं चूर्णीकुरुत।

परन्तु अन्ते सः पुनरपि प्रह्लादं दरबारे आह्वयत् आशीर्वादपूर्वकं पूंछत् — ‘‘तव नारायण कतः अस्ति?’’ प्रह्लादेन सहजेन उवाच — ‘‘पित, सः सर्वत्र अस्ति — अणुप्रतिक्षेपे अपि, अस्मिन् खम्भे अपि।’’

स तत् श्रुत्वा क्रोधात् आप्लुतः खड्गेन स महत्यां खम्भाम् आहत् परन्तु खम्भः न भिद्यत्। तत् खम्भात् भयानकं गर्जनं निर्गतं च दिव्यरूपं प्रकटम् — नरसिंहावतारः। अर्धमानुषः अर्धसिंहः, सिंहमुखः, मानव देहः, ज्वलन्तदृष्टयः, वज्रसमवते नाखूनाः, तनुज्योतिर्दीप्ता — एवम् विकरालः रूपः। स उवाच — न अहं देवो न च दैत्यः; धर्मरक्षणस्य संकल्पेऽहं प्रत्यक्षितः।

युद्धं प्रचण्डं जातम्। नास्ति दिनं न रात्री, न आकाश-पृथिव्योः बन्धः — नरसिंहेन हिरण्यकश्यपः धृतेन दहल्यं, दरबारदहलीजे स्थित्वा तं नखैः विच्छिद्य तं समापयत्। एतत् च अधर्मस्य विनाशः अभवत् तथा च ब्रह्मदत्तविधेः उल्लंघनं न जातम्।

प्रह्लादः भगवतः चरणयोः प्रार्थनया नतमस्तकः अभवत्। स च अतिशयभक्त्या तस्य फलम् प्राप्तवान्। नरसिंहे क्रोधस्य ज्वालाः अपि तस्य प्रह्लादवचनैः समुदिताः — प्रह्लादस्य करुणासूचनां शृण्वन् स शान्तः अभवत्, तं आलिङ्ग्य आशीर्वादं दत्तवान्, उवाच — ‘‘त्वं मम सच्चः भक्तः’’। एतत् द्रष्ट्वा लोकाः सन्देहविहीनाः अभवन् यत् सत्यभक्तेः समक्षे न किंचिद् शक्तिमती सम्भवति।

नरसिंहस्य महात्म्येन परमपरीहिताः मंदिराणि भिन्नभिन्नेषु स्थानेषु भारतभूमौ रचिता: कतिपयाः वर्षे एकवारं मात्र मूर्त्या चन्दनलेपेन आवृता उद्घाट्यन्ते। कतिपयेषु गिरीपथेषु श्रद्धापरीक्षादायिनः पथाः सन्ति। अहोबिलम् इति प्राचीनं स्थलम् अत्र नारसिंहपर्यटनस्य केन्द्रम्, नल्लामला-श्रेणिषु स्थितम्, नव नरसिंह-मन्दिराणि तत्र सन्ति। सिंहाचलम् इति स्थानं चेद्यद् अस्ति यत्र मूर्तौ वर्षभरं चन्दनलेपे वृत्तम् तदेव अक्शयतृतीयायां चन्दनोत्सवेन उद्घाटितम् इति। मेलकोट् (योगनरसिंह), नमक्कल् (एकाशिला-नरसिंह), देवरायदुर्ग्, शिवलिंगुर् (एकसर्वोच्च-सीढ्याः), मंगलगिरि (यत्र देवः पानरसं स्वीकुर्वति—अद्भुतम्), हिमालये लाड्पुर् — एतानि कतिपयेषु प्रसिद्धाः तीर्थानि।

एतया कथाया यात्रया वयं समाप्तिं कुर्मः। प्रतिमान् पन्थान् अनुभवित्वा प्रार्थयामः — ‘‘जय श्री नरसिंह देवः। भवतः मार्गदर्शनेन रक्षणं भवतु।’’`,
  },
  // varaha / krishna entries if you keep them
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
  const key = (name || "narasimha").toLowerCase();
  const story = STORIES[key] || STORIES.narasimha;

  const [lang, setLang] = useState("english"); // "english" | "sanskrit"
  const text = lang === "sanskrit" ? story.sanskrit : story.english;
  const hasVideo = Boolean(story.youtubeId);

  const dos = {
    english: [
      "Practice steadfast devotion. Like Prahlāda, sincere faith and constant remembrance protect one even in danger.",
      "Stand for dharma (righteousness): speak truth and act justly even when powerful forces oppose you.",
      "Cultivate humility: power and position are transient, humility preserves wisdom and compassion.",
      "Develop inner strength through discipline: study, self-control, and steady practice (tapas).",
      "Help others and rule with compassion: govern with justice and mercy if in leadership.",
    ],
    sanskrit: [
      "धर्मे दृढता धारयेत्— सत्यं परिशील्य धर्ममार्गे स्थित्वा।",
      "श्रद्धया भजेत्— सततं भगवतः स्मरणं कर्तव्यम्।",
      "विनयं परिगृह्य कार्यं कुर्यात्— अहंकारहीनता फलकारी।",
      "तपसा च अध्ययनै च मनोबलं वर्धयेत्— आतमा दृढा भूयात्।",
      "परोपकारे च सदाचारे च न्यूनता न भवेत्— जीवनस्य सार्थकता उत्पाद्यते।",
    ],
  };

  const donts = {
    english: [
      "Do not let ego (ahankāra) dominate: Hiraṇyakaśyapa’s pride led to cruelty and destruction.",
      "Do not persecute harmless faith: suppressing conscience and devotion breeds unrest and invites downfall.",
      "Avoid cruelty and violence born of anger: reactive wrath causes suffering for self and others.",
      "Do not equate power with righteousness: authority without dharma is destructive.",
      "Do not disregard the protective power of virtue: truth and devotion can overturn mighty threats.",
    ],
    sanskrit: [
      "अहंकारं नातिवर्धयेत्— अहंकारः विनाशाय मार्गः।",
      "श्रद्धासमर्पितान् नहन्तु— श्रद्धाविहीनता द्वेष्यते।",
      "क्रोधाद् हिंसाम् न कुर्यात्— क्रोधः सर्वव्यापकदुःखरूपः।",
      "अधर्ममार्गं न अनुवर्त्यताम्— शक्त्या धर्मस्यापि विनाशः सम्भवति।",
      "परोपकारे च सदाचारे च न्यूनता न भवेत्— जीवनस्य सार्थकता एतेभ्यः उत्पादितव्या।",
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
            Read the story in English or Sanskrit. Toggle inside the page below for a comfortable reading experience.
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
              <h4 className="text-sm font-semibold text-amber-800 mb-3">{lang === "sanskrit" ? "कर्तव्यानि" : "Do’s"}</h4>
              <ul className="list-decimal pl-5 space-y-2 text-sm text-amber-800/90">
                {(lang === "sanskrit" ? dos.sanskrit : dos.english).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-amber-700/12 bg-gradient-to-b from-black/5 to-transparent">
              <h4 className="text-sm font-semibold text-amber-800 mb-3">{lang === "sanskrit" ? "अकर्तव्यानि" : "Don’ts"}</h4>
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
