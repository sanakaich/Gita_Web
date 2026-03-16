export type Lang = "en" | "hi" | "sa";

export interface StorySection {
  type: "heading" | "paragraph" | "quote";
  en: string;
  hi: string;
  sa: string;
}

export interface Story {
  slug: string;
  character: "krishna" | "rama" | "hanuman";
  accentColor: string;
  gradientFrom: string;
  tags: string[];
  en: { title: string; tagline: string; excerpt: string };
  hi: { title: string; tagline: string; excerpt: string };
  sa: { title: string; tagline: string; excerpt: string };
  sections: StorySection[];
}

export const STORIES: Story[] = [
  {
    slug: "krishna",
    character: "krishna",
    accentColor: "#4F46E5",
    gradientFrom: "#EEF2FF",
    tags: ["Krishna", "Devotion", "Vrindavan"],
    en: {
      title: "Krishna and the Govardhan Mountain",
      tagline: "The day a child held a mountain on his finger",
      excerpt: "When the pride of Indra threatened Vrindavan with storms and floods, young Krishna lifted the mighty Govardhan mountain on his little finger to shelter every soul.",
    },
    hi: {
      title: "कृष्ण और गोवर्धन पर्वत",
      tagline: "वह दिन जब एक बालक ने पर्वत को अँगुली पर उठा लिया",
      excerpt: "जब इन्द्र के अहंकार ने वृंदावन पर तूफान भेजा, तो बालक कृष्ण ने गोवर्धन पर्वत को अपनी एक अँगुली पर उठाकर पूरे गाँव की रक्षा की।",
    },
    sa: {
      title: "कृष्णः गोवर्धनश्च",
      tagline: "यदा बालः एकया अङ्गुल्या पर्वतम् अधारयत्",
      excerpt: "इन्द्रस्य गर्वात् वृन्दावने महावृष्टिः जाता। तदा बालः कृष्णः गोवर्धनपर्वतम् एकया अङ्गुल्या उत्थाप्य सर्वान् रक्षितवान्।",
    },
    sections: [
      {
        type: "heading",
        en: "The Pride of Indra",
        hi: "इन्द्र का अहंकार",
        sa: "इन्द्रस्य गर्वः",
      },
      {
        type: "paragraph",
        en: "Long ago in the village of Vrindavan, the people prepared for their annual worship of Indra, the king of the gods. When young Krishna saw the preparations, he asked his father Nanda why they worshipped Indra instead of Govardhan — the mountain that truly sustained their cattle and crops.",
        hi: "बहुत पहले वृंदावन में, लोग प्रतिवर्ष इन्द्र देवता की पूजा की तैयारी करते थे। बालक कृष्ण ने अपने पिता नन्द से पूछा — \"हम इन्द्र की पूजा क्यों करें? हमें तो गोवर्धन पर्वत की पूजा करनी चाहिए जो हमें जल और चारा देता है।\"",
        sa: "पुरा वृन्दावने जनाः इन्द्रस्य पूजाम् अकुर्वन्। बालः कृष्णः पितरं नन्दम् अपृच्छत् — \"किमर्थम् इन्द्रं पूजयामः? गोवर्धनः पर्वतः अस्माकं धेनूनां तृणं जलञ्च ददाति।\"",
      },
      {
        type: "quote",
        en: "Worship that which truly sustains you — not power, but the source of all life.",
        hi: "जो वास्तव में जीवन देता है, उसी की पूजा करो — शक्ति की नहीं, जीवन के स्रोत की।",
        sa: "यः वास्तवं जीवनं ददाति, तस्य पूजनं कर्तव्यम्।",
      },
      {
        type: "heading",
        en: "Indra's Fury",
        hi: "इन्द्र का क्रोध",
        sa: "इन्द्रस्य कोपः",
      },
      {
        type: "paragraph",
        en: "The villagers, trusting Krishna, turned their offerings toward Govardhan. When news reached Indra, his pride turned to rage. He unleashed torrential rains, thunderstorms, and floods upon Vrindavan for seven days and seven nights, threatening to drown every home and cow.",
        hi: "गाँव वालों ने कृष्ण की बात मानकर गोवर्धन की पूजा की। इन्द्र को जब यह पता चला, तो उनका अहंकार क्रोध में बदल गया। उन्होंने सात दिन सात रात वृंदावन पर भयंकर तूफान और बाढ़ भेजी।",
        sa: "ग्रामजनाः कृष्णस्य वचनं श्रुत्वा गोवर्धनं पूजितवन्तः। इन्द्रः क्रुद्धः जातः। सः सप्त दिनानि सप्त रात्रयः वृन्दावने महावृष्टिं वज्रञ्च प्रेषितवान्।",
      },
      {
        type: "heading",
        en: "The Mountain on a Finger",
        hi: "अँगुली पर पर्वत",
        sa: "अङ्गुल्यां पर्वतः",
      },
      {
        type: "paragraph",
        en: "Without hesitation, Krishna walked to the base of Govardhan. With a gentle smile, he slipped one small finger beneath the great mountain and lifted it high into the sky — creating a vast shelter for every person, animal, and home in Vrindavan. Not a drop of rain touched them.",
        hi: "कृष्ण बिना एक पल रुके गोवर्धन पर्वत के पास गए। उन्होंने मुस्कुराते हुए अपनी एक छोटी अँगुली पर्वत के नीचे रखी और उसे आकाश में उठा लिया। सभी गाँव वाले, उनकी गाएँ और घर उसकी छाया में सुरक्षित हो गए।",
        sa: "कृष्णः गोवर्धनस्य समीपं गत्वा एकया अङ्गुल्या तं महान्तं पर्वतम् उत्थापितवान्। सर्वे जनाः धेनवः गृहाणि च तस्य छायायां स्थितवन्तः। वृष्टिबिन्दुः तान् न स्पृशत्।",
      },
      {
        type: "quote",
        en: "For seven days and seven nights, an entire village sheltered beneath a mountain held aloft by a child's little finger.",
        hi: "सात दिन और सात रात — एक बालक की छोटी अँगुली पर टिका पर्वत पूरे वृंदावन की रक्षा करता रहा।",
        sa: "सप्त दिनानि सप्त रात्रयः — बालकस्य एका अङ्गुलिः पर्वतं धारयन्ती समग्रं ग्रामं रक्षितवती।",
      },
      {
        type: "heading",
        en: "Indra Bows",
        hi: "इन्द्र का नतमस्तक होना",
        sa: "इन्द्रः नमति",
      },
      {
        type: "paragraph",
        en: "Humbled and ashamed, Indra finally withdrew his storms. He descended from heaven and bowed before Krishna, realising he stood before the Supreme Lord himself. He apologised for his arrogance, and Krishna accepted with great compassion and grace.",
        hi: "अंततः इन्द्र को लज्जा आई। वे स्वर्ग से उतरे और कृष्ण के सामने नतमस्तक हुए, यह जानकर कि वे परमेश्वर के सामने खड़े हैं। उन्होंने अपने अहंकार के लिए क्षमा माँगी, और कृष्ण ने करुणा से क्षमा कर दिया।",
        sa: "इन्द्रः लज्जितः जातः वृष्टिं च उपरतवान्। सः स्वर्गात् अवतीर्य कृष्णस्य पुरतः प्रणमत्। ज्ञातवान् — अयं साक्षात् परमात्मा अस्ति। सः क्षमां याचितवान्, कृष्णः च करुणया क्षमितवान्।",
      },
      {
        type: "quote",
        en: "Arrogance blinds even the mightiest. True wisdom begins with humility.",
        hi: "अहंकार सबसे बड़े को भी अंधा कर देता है। विनम्रता से ही ज्ञान का प्रारंभ होता है।",
        sa: "गर्वः महान्तमपि अन्धं करोति। विनम्रता एव ज्ञानस्य आरम्भः।",
      },
    ],
  },
  {
    slug: "rama",
    character: "rama",
    accentColor: "#B45309",
    gradientFrom: "#FFFBEB",
    tags: ["Rama", "Dharma", "Ramayana"],
    en: {
      title: "Rama and the Bridge to Lanka",
      tagline: "How faith and devotion built a bridge across the ocean",
      excerpt: "When Sita was taken captive in Lanka, Rama and his devoted vanara army built an impossible bridge across the ocean — stone by stone, through faith and love.",
    },
    hi: {
      title: "राम और लंका का सेतु",
      tagline: "जब श्रद्धा और भक्ति ने समुद्र पर सेतु बनाया",
      excerpt: "जब सीता को लंका में बंदी बनाया गया, राम और उनकी वानर सेना ने असंभव लगने वाले कार्य को संभव कर दिखाया — समुद्र पर सेतु बनाकर।",
    },
    sa: {
      title: "रामः लङ्कासेतुश्च",
      tagline: "यदा श्रद्धया समुद्रे सेतुः निर्मितः",
      excerpt: "सीतायाः अपहरणानन्तरं रामः वानरसेनया सह समुद्रे सेतुं निर्मितवान् — एकैकं प्रस्तरम् श्रद्धया स्थापयित्वा।",
    },
    sections: [
      {
        type: "heading",
        en: "The Sorrow of Separation",
        hi: "वियोग का दुख",
        sa: "वियोगदुःखम्",
      },
      {
        type: "paragraph",
        en: "Ravana, the mighty king of Lanka, had abducted Sita — the beloved wife of Rama — and taken her across the vast ocean to his island kingdom. Rama searched through forests and mountains, his heart heavy with grief, until Hanuman brought the news: Sita was alive, held captive in the Ashok Vatika of Lanka.",
        hi: "लंका के शक्तिशाली राजा रावण ने माता सीता का अपहरण किया था। राम वनों और पहाड़ों में उन्हें खोजते रहे, जब तक हनुमान ने समाचार नहीं लाया — सीता लंका के अशोक वाटिका में जीवित हैं।",
        sa: "लङ्काधिपः रावणः सीताम् अपहृत्य समुद्रपारं नीतवान्। रामः वनेषु पर्वतेषु च मार्गम् अन्वेषयत्। तदा हनुमान् आगत्य अकथयत् — सीता लङ्कायाम् अशोकवाटिकायां वर्तते।",
      },
      {
        type: "heading",
        en: "The Impossible Challenge",
        hi: "असंभव चुनौती",
        sa: "असाध्यं कार्यम्",
      },
      {
        type: "paragraph",
        en: "To rescue Sita, Rama had to cross the vast ocean — a hundred yojanas of roaring waves, with no ships and no bridge. His generals despaired. It seemed impossible. Yet Rama sat in meditation on the shore, trusting that where there is dharma, there is always a way.",
        hi: "सीता को मुक्त करने के लिए राम को विशाल समुद्र पार करना था — सौ योजन का गरजता समुद्र, जिस पर न कोई जहाज न कोई पुल। सेनापति निराश हो गए। पर राम समुद्र के तट पर ध्यान में बैठ गए, धर्म में विश्वास रखते हुए।",
        sa: "सीताया उद्धारार्थं रामः शतयोजनं समुद्रं तर्तुम् ऐच्छत्। नौकाः नासन्, सेतुश्च नासीत्। सेनापतयः निराशाः अभवन्। रामः तु तटे ध्यानमग्नः उपविशत् — धर्मे विश्वासं धारयन्।",
      },
      {
        type: "quote",
        en: "Where there is righteousness and resolve, the universe itself bends to help.",
        hi: "जहाँ धर्म और संकल्प होता है, वहाँ ब्रह्मांड स्वयं सहायता करता है।",
        sa: "यत्र धर्मः संकल्पश्च, तत्र विश्वं स्वयं साहाय्यं करोति।",
      },
      {
        type: "heading",
        en: "Stones That Float",
        hi: "तैरते पत्थर",
        sa: "तरन्तः प्रस्तराः",
      },
      {
        type: "paragraph",
        en: "The vanara architect Nala, blessed by divine grace, revealed that any stone inscribed with Rama's name would float upon the ocean. The entire vanara army — millions of monkeys and bears — began hurling rocks into the sea, each carved with \"Ram\". Stone by stone, the bridge took shape across the raging waters.",
        hi: "दिव्य कृपा से वानर शिल्पकार नल ने बताया कि जिस पत्थर पर राम का नाम लिखा हो, वह समुद्र पर तैरेगा। लाखों वानर और भालू राम का नाम लिखकर पत्थर समुद्र में फेंकने लगे। धीरे-धीरे सेतु बनने लगा।",
        sa: "वानरशिल्पी नलः उक्तवान् — रामनामाङ्कितः प्रस्तरः जले तरति। ततः कोटिशः वानराः भल्लूकाश्च प्रस्तरेषु रामनाम लिखित्वा समुद्रे क्षिप्तवन्तः। एवं सेतुः क्रमेण निर्मितः।",
      },
      {
        type: "paragraph",
        en: "For five days the army worked, day and night, with unwavering devotion. The bridge — known as Ram Setu — stretched across the ocean, one hundred yojanas long, connecting the mainland to Lanka. Even the ocean itself grew calm as the bridge was built over its waters.",
        hi: "पाँच दिन तक दिन-रात सेना ने अथक परिश्रम किया। सेतु — जिसे रामसेतु कहा गया — सौ योजन लंबा बनकर तैयार हो गया। जैसे-जैसे सेतु बनता गया, समुद्र भी शांत होता गया।",
        sa: "पञ्च दिनानि सेना अहोरात्रं कार्यम् अकरोत्। रामसेतुः शतयोजनदीर्घः निर्मितः। सेतुनिर्माणेन समुद्रोऽपि शान्तः जातः।",
      },
      {
        type: "quote",
        en: "When millions act as one in devotion, even the ocean yields and mountains move.",
        hi: "जब लाखों लोग भक्तिभाव से एक होकर कार्य करते हैं, तो समुद्र भी रास्ता देता है।",
        sa: "यदा कोटयः एकस्मिन् भक्तिभावे एकत्र मिलन्ति, तदा समुद्रोऽपि पन्थानं ददाति।",
      },
      {
        type: "heading",
        en: "The March to Victory",
        hi: "विजय की ओर प्रस्थान",
        sa: "विजयाय प्रस्थानम्",
      },
      {
        type: "paragraph",
        en: "Rama's army crossed the bridge and reached Lanka. The battle that followed was fierce, but guided by dharma and love, Rama ultimately defeated Ravana and freed Sita. The Ram Setu became an eternal symbol — not just a bridge of stones, but a bridge of faith, love, and the triumph of good over evil.",
        hi: "राम की सेना सेतु पार करके लंका पहुँची। भीषण युद्ध हुआ, पर धर्म की जीत हुई। राम ने रावण का वध किया और सीता को मुक्त किया। रामसेतु सदा के लिए एक प्रतीक बन गया — पत्थरों का नहीं, श्रद्धा और प्रेम का सेतु।",
        sa: "राम सेनया सह सेतुं तीर्त्वा लङ्कां प्राप्य रावणेन सह युद्धं कृतवान्। धर्मस्य जयः जातः — रावणः मृतः, सीता मुक्ता। रामसेतुः श्रद्धायाः प्रेम्णश्च शाश्वतं प्रतीकम् अभवत्।",
      },
    ],
  },
  {
    slug: "hanuman",
    character: "hanuman",
    accentColor: "#C2410C",
    gradientFrom: "#FFF7ED",
    tags: ["Hanuman", "Devotion", "Courage"],
    en: {
      title: "Hanuman's Leap to Lanka",
      tagline: "The ocean-crossing journey of the world's greatest devotee",
      excerpt: "To find Sita in Lanka, Hanuman made an impossible leap across one hundred yojanas of ocean — powered not by strength alone, but by unwavering devotion to Lord Rama.",
    },
    hi: {
      title: "हनुमान की लंका छलांग",
      tagline: "संसार के महानतम भक्त की अद्भुत समुद्र यात्रा",
      excerpt: "सीता माता को लंका में ढूँढने के लिए हनुमान ने सौ योजन समुद्र को एक छलांग में पार कर लिया — केवल बल से नहीं, बल्कि राम के प्रति अटूट भक्ति से।",
    },
    sa: {
      title: "हनुमतः लङ्काप्रस्थानम्",
      tagline: "विश्वस्य श्रेष्ठभक्तस्य अद्भुतसमुद्रलङ्घनम्",
      excerpt: "सीतायाः अन्वेषणार्थं हनुमान् शतयोजनं समुद्रम् एकेन कूर्दनेन अतरत् — केवलं बलेन नहि, रामभक्त्या एव।",
    },
    sections: [
      {
        type: "heading",
        en: "Who Can Cross the Sea?",
        hi: "समुद्र कौन पार करेगा?",
        sa: "समुद्रं कः तरिष्यति?",
      },
      {
        type: "paragraph",
        en: "After learning that Sita was held captive in Lanka, Rama's army of vanaras gathered at the southern shore. The ocean roared before them — one hundred yojanas wide, impossible to swim, filled with sea monsters. The question hung heavy in the air: who among them could make such a crossing?",
        hi: "सीता के लंका में होने की खबर मिलने पर वानर सेना दक्षिण के तट पर एकत्र हुई। सामने विशाल समुद्र गरज रहा था — सौ योजन चौड़ा, राक्षसों से भरा। सभी के मन में एक ही प्रश्न था — इसे कौन पार कर सकता है?",
        sa: "सीतायाः वृत्तान्तं ज्ञात्वा वानरसेना दक्षिणतटे एकत्रिता। शतयोजनं समुद्रः पुरतः गर्जति स्म। सर्वेषां मनसि एकमेव प्रश्नः — एनं समुद्रं कः तरिष्यति?",
      },
      {
        type: "paragraph",
        en: "One by one the great vanaras measured their strength. Jambavan, the wise bear king, recalled the ancient truth — Hanuman, son of the wind god Vayu, had been blessed with limitless power since birth. But Hanuman sat quietly, unaware of his own greatness, his head bowed in humility.",
        hi: "एक-एक करके महान वानर अपनी शक्ति का अनुमान लगाने लगे। जामवन्त, बुद्धिमान भालुओं के राजा, को याद आया — हनुमान, पवनपुत्र, जन्म से ही असीम शक्ति के धनी हैं। पर हनुमान चुपचाप बैठे थे, अपनी महानता से अनजान।",
        sa: "वानराः एकैकशः स्वबलं आकलितवन्तः। जाम्बवान् वृद्धः भल्लूकराजः स्मृतवान् — हनुमान् वायुपुत्रः जन्मतः अनन्तशक्तिमान्। परन्तु हनुमान् मौनेन उपविष्टः आसीत्, स्वमहत्त्वम् अजानन्।",
      },
      {
        type: "quote",
        en: "Great souls often forget their own power. It is the reminder of love that awakens them.",
        hi: "महान आत्माएँ प्रायः अपनी शक्ति भूल जाती हैं। प्रेम की याद ही उन्हें जगाती है।",
        sa: "महात्मानः प्रायः स्वशक्तिं विस्मरन्ति। प्रेम्णः स्मृतिः एव तान् बोधयति।",
      },
      {
        type: "heading",
        en: "Hanuman Remembers",
        hi: "हनुमान को याद आई अपनी शक्ति",
        sa: "हनुमान् स्वशक्तिं स्मरति",
      },
      {
        type: "paragraph",
        en: "Jambavan approached Hanuman softly and spoke of his divine birth — how the Wind God had blessed him, how he had swallowed the sun as a child, how no weapon in the cosmos could truly harm him. As the words fell, something stirred in Hanuman's chest. He rose. His body began to expand, growing as tall as a mountain, blazing like the sun.",
        hi: "जामवन्त ने धीरे से हनुमान के पास जाकर उनका दिव्य परिचय दिया — वायुदेव का आशीर्वाद, बालपन में सूर्य को निगलने का प्रसंग। यह सुनते ही हनुमान के भीतर कुछ जागा। वे उठे। उनका शरीर पर्वत जितना बड़ा होने लगा, सूर्य जैसा तेजस्वी।",
        sa: "जाम्बवान् हनुमन्तं समीप्य अकथयत् — वायुदेवस्य आशीर्वादः, बाल्ये सूर्यग्रहणम्। एतत् श्रुत्वा हनुमन्तः अन्तरे किमपि उदबुद्ध्यत। सः उत्थितः। तस्य शरीरं पर्वतसमम् उच्चम् अभवत्।",
      },
      {
        type: "heading",
        en: "The Great Leap",
        hi: "महान छलांग",
        sa: "महत् कूर्दनम्",
      },
      {
        type: "paragraph",
        en: "Hanuman climbed to the peak of Mount Mahendra, coiled his body like a spring, and with the name of Rama on his lips, launched himself into the sky. He flew like a streak of light across the sky — clouds parted, fish leaped from the ocean to witness his flight, mountains rose from the sea to support him.",
        hi: "हनुमान महेन्द्र पर्वत की चोटी पर गए, अपना शरीर संकुचित किया और राम का नाम लेते हुए आकाश में उड़ान भरी। वे आकाश में प्रकाश की एक रेखा की तरह उड़े — बादल रास्ता देने लगे, समुद्र से मछलियाँ उनकी उड़ान देखने को उछलीं।",
        sa: "हनुमान् महेन्द्रपर्वतस्य शिखरम् आरुह्य, रामनाम उच्चारयन्, आकाशे उत्प्लुतवान्। सः प्रकाशरेखेव उड्डयत — मेघाः मार्गं दत्तवन्तः, समुद्रात् मत्स्याः उत्प्लुत्य तस्य उड्डयनं द्रष्टुम् इच्छन्तः।",
      },
      {
        type: "quote",
        en: "Powered by devotion, Hanuman crossed one hundred yojanas as if they were a single step.",
        hi: "भक्ति की शक्ति से हनुमान ने सौ योजन समुद्र को एक कदम की तरह पार कर लिया।",
        sa: "भक्त्या बलितः हनुमान् शतयोजनं समुद्रम् एकेन पदेन अतरत्।",
      },
      {
        type: "heading",
        en: "Finding Sita",
        hi: "सीता माता का दर्शन",
        sa: "सीतायाः दर्शनम्",
      },
      {
        type: "paragraph",
        en: "Hanuman reached Lanka and searched through the night. He finally found Sita in the Ashok Vatika — pale, sorrowful, but unbroken in spirit. He revealed himself softly, offered Rama's ring as proof, and whispered that her husband was coming. Sita's eyes lit with hope for the first time in months.",
        hi: "हनुमान रात भर खोजते रहे और अंत में अशोक वाटिका में सीता माता को पाया — दुखी, पर हिम्मत नहीं हारी। उन्होंने धीरे से खुद को परिचय दिया, राम की अंगूठी सौंपी और कहा — स्वामी जल्द आएंगे। सीता की आँखों में महीनों बाद आशा की ज्योत जली।",
        sa: "हनुमान् लङ्कायां रात्रिम् अन्वेषणं कृत्वा अशोकवाटिकायां सीतां प्राप्तवान् — दुःखितां किन्तु अपराजितां। सः मृदुतया स्वपरिचयम् अददात्, रामस्य मुद्रिकां च अर्पितवान्। सीतायाः नयनयोः आशाज्योतिः प्रज्वलिता।",
      },
      {
        type: "quote",
        en: "Even in the darkest captivity, the name of Rama is enough to light a lamp of hope.",
        hi: "घोरतम बंधन में भी, राम का नाम आशा का दीपक जलाने के लिए पर्याप्त है।",
        sa: "घोरतमे बन्धने अपि, रामनाम एव आशादीपं प्रज्वालयति।",
      },
    ],
  },
];

export const STORY_MAP = Object.fromEntries(STORIES.map(s => [s.slug, s]));
