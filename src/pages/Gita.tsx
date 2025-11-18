import React, { useState } from "react";

// Gita Chapter 1 page
// - Shows verse number, short Sanskrit hook, and a concise explanation for each verse of Chapter 1
// - Designed to be dropped into a React + Tailwind app as a page component

const verses = [
  {
  num: "1.1",
  sanskrit: "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||",
  explanation: "Dhritarashtra asks Sanjaya to describe the events at Kurukshetra. This opens the dialogue and frames the whole teaching as a report of a crisis."
},

{
  num: "1.2",
  sanskrit: "सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् ||",
  explanation: "Sanjaya begins narrating the battlefield scene. He describes Duryodhana approaching Dronacharya after seeing the Pandava army arranged for battle."
},

{
  num: "1.3",
  sanskrit: "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् | व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता ||",
  explanation: "He points out to Drona the Pandava army arranged by Dhrishtadyumna, Drona’s own former student. This highlights the gravity of the conflict."
},

{
  num: "1.4",
  sanskrit: "अत्र शूरा महेष्वासा भीमार्जुनसमा युधि | युयुधानो विराटश्च द्रुपदश्च महारथः ||",
  explanation: "Arjuna surveys the armies and sees powerful warriors on both sides. This recognition begins to trigger his moral dilemma."
},

{
  num: "1.5",
  sanskrit: "धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान् | पुरुषेन्द्रः कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः ||",
  explanation: "Arjuna notices friends and relatives among the warriors. The emotional weight of fighting people he respects increases his distress."
},

{
  num: "1.6",
  sanskrit: "युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान् | सौभद्रो द्रौपदेयाश्च सर्व एव महारथाः ||",
  explanation: "Arjuna reflects on the might of his allies, but instead of gaining confidence, he feels sorrow and confusion. His inner conflict intensifies."
},

{
  num: "1.7",
  sanskrit: "अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम | नायका मम सैन्यस्य संज्ञार्थं तान्ब्रवीमि ते ||",
  explanation: "He questions how victory could justify the loss of kin. The contrast between powerful warriors and moral hesitation frames the ethical puzzle."
},

{
  num: "1.8",
  sanskrit: "भवान्भीष्मश्च कर्णश्च कृपश्च समितिञ्जयः | अश्वत्थामा विकर्णश्च सौमदत्तिस्तथैव च ||",
  explanation: "Arjuna admits he lacks clarity on what is right. His humility prepares him to seek guidance rather than act blindly."
},

{
  num: "1.9",
  sanskrit: "अन्ये च बहवः शूरा मदर्थे त्यक्तजीविताः | नानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः ||",
  explanation: "He fears the destruction of family traditions and the moral disorder that would follow if the battle happens."
},

{
  num: "1.10",
  sanskrit: "अपर्याप्तं तदस्माकं बलं भीष्माभिरक्षितम् | पर्याप्तं त्विदमेतेषां बलं भीमाभिरक्षितम् ||",
  explanation: "He imagines how loss of dharma will corrupt rituals and social order. The fear of ethical collapse shapes his crisis."
}
,
{
  num: "1.11",
  sanskrit: "तस्मात्सर्वेषु कौन्तेय सैनिकेषु यथाभगम् | भीष्ममेवाभिरक्षन्तु भवन्तः सर्व एव हि ||",
  explanation: "Arjuna calls the idea of killing elders and teachers adharmic. The act feels like a violation of moral law."
},

{
  num: "1.12",
  sanskrit: "तस्य सञ्जनयन्हर्षं कुरुवृद्धः पितामहः | सिंहनादं विनद्योच्चैः शङ्खं दध्मौ प्रतापवान् ||",
  explanation: "He imagines ancestors suffering if their descendants are destroyed. It shows his fear of long term spiritual consequences."
},

{
  num: "1.13",
  sanskrit: "ततः शङ्खाश्च भेर्यश्च पणवानकगोमुखाः | सहसैवाभ्यहन्यन्त स शब्दस्तुमुलोऽभवत् ||",
  explanation: "He fears the sin of killing family members. The karmic cost overshadows political considerations."
},

{
  num: "1.14",
  sanskrit: "ततः श्वेतैर्हयैर्युक्ते महति स्यन्दने स्थितौ | माधवः पाण्डवश्चैव दिव्यौ शङ्खौ प्रदध्मतुः ||",
  explanation: "Arjuna says he would rather renounce a kingdom than win it through bloodshed. His values outweigh ambition."
},

{
  num: "1.15",
  sanskrit: "पाञ्चजन्यं हृषीकेशो देवदत्तं धनंजयः | पौण्ड्रं दध्मौ महाशङ्खं भीमकर्मा वृकोदरः ||",
  explanation: "He argues that wealth, pleasure and victory mean nothing if dharma is destroyed in the process."
},

{
  num: "1.16",
  sanskrit: "अन्तरिक्षे च भूर्यश्च शङ्खा दध्मुः पृथक्पृथक् | स शब्दस्तुमुलस्तत्र नभश्च पृथिवीं चापि ||",
  explanation: "Arjuna explains how his mind is spinning and his body fails. The crisis is emotional and physical."
},

{
  num: "1.17",
  sanskrit: "स तदा शङ्खनिनादैः स शब्दः प्रतिशुशुभे | भीष्मश्च दध्मौ शङ्खं कुरुनामधिराजतः ||",
  explanation: "His trembling, dry mouth and racing heart show how deeply he’s shaken. His body reflects moral paralysis."
},

{
  num: "1.18",
  sanskrit: "ततः शब्दोऽभ्यनुनादयन्नभश्च पृथिवीं चापि | दुर्योधनस्य हर्षोऽभूत् कर्म तस्य मनोहरम् ||",
  explanation: "He confesses he cannot stand or lift his bow. His inner conflict makes him unable to fight."
},

{
  num: "1.19",
  sanskrit: "स वै महातेजा: पाण्डवो धनंजयः | उवाच हृषीकेशं मध्यं सैन्योर्यथास्थितम् ||",
  explanation: "Arjuna asks Krishna to place the chariot between the armies so he can see who he is expected to fight. He seeks clarity before acting."
},

{
  num: "1.20",
  sanskrit: "सैव रथोद्धतः कृष्णो स्थानं प्रापयतं द्वयोः | भीष्मद्रोणप्रमुखतः सर्वेषां च महीक्षिताम् ||",
  explanation: "Krishna moves the chariot forward. That motion symbolizes Arjuna’s shift from confusion to seeking guidance."
}
,
{
  num: "1.21",
  sanskrit: "अर्जुन उवाच | सेनयोरुभयोर मध्ये रथं स्थापय मेऽच्युत | यावदेतान्निरीक्षेऽहं योद्धुकामानवस्थितान् ||",
  explanation: "Arjuna asks Krishna to halt the chariot between the two armies so he can clearly see those he must fight. The faces he sees trouble him deeply."
},

{
  num: "1.22",
  sanskrit: "कैर्मया सह योद्धव्यमस्मिन् रणसमुद्यमे | मायैतेऽत्र समागता युद्धसामर्थ्यसम्पदः ||",
  explanation: "Feeling overwhelmed, Arjuna calls himself weak-hearted. Shame mixes with fear, increasing his inner conflict."
},

{
  num: "1.23",
  sanskrit: "योग्येऽवस्थितानन्यांश्च किमर्थं न प्रयात्सि मे | योधुं न शक्नोमि देवान्वै कुर्वन्ति समरे जनाः ||",
  explanation: "He says it is better to remain still than kill loved ones. His refusal comes from sorrow, not cowardice."
},

{
  num: "1.24",
  sanskrit: "सञ्जय उवाच | एवमुक्तो हृषीकेशो गुडाकेशेन भारत | सेनयोरुभयोर्मध्ये स्थापयित्वा रथोत्तमम् ||",
  explanation: "Arjuna worries that even rulers who win kingdoms by killing relatives will live in misery. Success without moral ground feels empty."
},

{
  num: "1.25",
  sanskrit: "भीष्मद्रोणप्रमुखतः सर्वेषां च महीक्षिताम् | उवाच पार्थ पश्यैतान्समवेतान्कुरूनिति ||",
  explanation: "He reflects on the warrior’s duty but feels it contradicts his conscience. His judgment rejects violence that destroys society."
},

{
  num: "1.26",
  sanskrit: "तत्रापश्यत्स्थितान्पार्थः पितॄनथ पितामहान् | आचार्यान्मातुलान्भ्रातॄन्पुत्रान्पौत्रान्सखींस्तथा ||",
  explanation: "Arjuna sees his own family lined up to die. He decides inaction is safer morally than carrying the sin of killing kin."
},

{
  num: "1.27",
  sanskrit: "श्वशुरान्सुहृदश्चैव सेनयोरुभयोरपि | तान्समीक्ष्य स कौन्तेयः सर्वान्बन्धूनवस्थितान् ||",
  explanation: "He concludes that killing relatives will bring only grief, not glory. His argument is both practical and ethical."
},

{
  num: "1.28",
  sanskrit: "क्रिपया परयाऽविष्टो विषीदन्निदमब्रवीत् | दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम् ||",
  explanation: "Arjuna’s resolve breaks completely. His bow slips from his hand and he collapses emotionally."
},

{
  num: "1.29",
  sanskrit: "सीदन्ति मम गात्राणि मुखं च परिशुष्यति | वेपथुश्च शरीरे मे रोमहेर्षश्च जायते ||",
  explanation: "His fear and moral confusion become physically visible. Arjuna’s crisis is now fully out in the open."
},

{
  num: "1.30",
  sanskrit: "गाण्डीवं स्रंसते हस्तात्त्वक्चैव परिदह्यते | न च शक्नोम्यवस्थातुं भ्रान्तीव च मे मनः ||",
  explanation: "He cannot stand, cannot focus, and cannot fight. The chapter’s tension peaks as the storyteller prepares for what comes next."
}
,
{
  num: "1.31",
  sanskrit: "न च श्रेयोऽनुपश्यामि हत्वा स्वजनमाहवे | न काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च ||",
  explanation: "Arjuna says he sees no good in killing his own people. Victory, happiness and kingdom feel meaningless to him."
},

{
  num: "1.32",
  sanskrit: "किं नो राज्येन गोविन्द किं भोगैर्जीवितेन वा | येषामर्थे काङ्क्षितं नो राज्यं भोगाः सुखानि च ||",
  explanation: "He explains that the very people for whom he desires wealth and joy now stand against him. Without them, nothing feels worthwhile."
},

{
  num: "1.33",
  sanskrit: "त इमेऽवस्थिताः युद्धे प्राणांस्त्यक्त्वा धनानि च | आचार्याः पितरः पुत्रास्तथैव च पितामहाः ||",
  explanation: "He sees revered elders and beloved relatives ready to die. It deepens his hesitation and grief."
},

{
  num: "1.34",
  sanskrit: "मातुलाः श्वशुराः पौत्रा: श्यालाः सम्बन्धिनस्तथा | एतान्न हन्तुमिच्छामि घ्नतोऽपि मधुसूदन ||",
  explanation: "Arjuna confesses he does not want to kill these loved ones, even if they attack him first."
},

{
  num: "1.35",
  sanskrit: "अपि त्रैलोक्यराज्यस्य हेतोः किं नु महीकृते | न हन्तुं इच्छामि घ्नतोऽपि प्रीतिपूर्वकमानवम् ||",
  explanation: "He says that even ruling all three worlds wouldn’t justify killing family. Kingdoms are not worth bloodshed."
},

{
  num: "1.36",
  sanskrit: "निहत्य धार्तराष्ट्रान्नः का प्रीतिः स्याज्जनार्दन | पापमेवाश्रयेदस्मान्हत्वैतानाततायिनः ||",
  explanation: "Arjuna fears sin will fall upon them if they kill the sons of Dhritarashtra, even if they are aggressors."
},

{
  num: "1.37",
  sanskrit: "तस्मान्नार्हा वयं हन्तुं धार्तराष्ट्रान्स्वबान्धवान् | स्वजनं हि कथं हत्वा सुखिनः स्याम माधव ||",
  explanation: "He argues that killing one’s own family cannot lead to happiness. Social and inner ruin would follow."
},

{
  num: "1.38",
  sanskrit: "यद्यप्येते न पश्यन्ति लोभोपहतचेतसः | कुलक्षयकृतं दोषं मित्रद्रोहे च पातकम् ||",
  explanation: "He criticizes the opposing side for not seeing the moral consequences of destroying family lines."
},

{
  num: "1.39",
  sanskrit: "कथं न ज्ञेयमस्माभिः पापादस्मान्निवर्तितुम् | कुलक्षयकृतं दोषं प्रपश्यद्भिर्जनार्दन ||",
  explanation: "He insists they must avoid the sin of destroying a family, especially since they clearly see the harm."
},

{
  num: "1.40",
  sanskrit: "कुलक्षये प्रणश्यन्ति कुलधर्माः सनातनाः | धर्मे नष्टे कुलं कृत्स्नमधर्मोऽभिभवत्युत ||",
  explanation: "Arjuna worries that once a family is destroyed, ancient duties disappear and society falls into chaos."
}
,
{
  num: "1.41",
  sanskrit: "अधर्माभिभवात्कृष्ण प्रदुष्यन्ति कुलस्त्रियः | स्त्रीषु दुष्टासु वार्ष्णेय जायते वर्णसङ्करः ||",
  explanation: "He believes moral corruption will affect families, starting with women, leading to social disorder."
},

{
  num: "1.42",
  sanskrit: "सङ्करो नरकायैव कुलघ्नानां कुलस्य च | पतन्ति पितरो ह्येषां लुप्तपिण्डोदकक्रियाः ||",
  explanation: "He fears that ancestors fall to misery when rituals stop due to the family being destroyed."
},

{
  num: "1.43",
  sanskrit: "दोषैरेतैः कुलघ्नानां वर्णसङ्करकारकैः | उत्साद्यन्ते जातिधर्माः कुलधर्माश्च शाश्वताः ||",
  explanation: "He imagines the collapse of family and social duties through the chain reaction of war."
},

{
  num: "1.44",
  sanskrit: "उत्सन्नकुलधर्माणां मनुष्याणां जनार्दन | नरकेऽनियतं वासो भवतीत्यनुशुश्रुम ||",
  explanation: "He says those who destroy family dharma suffer endlessly. His fear of spiritual punishment grows."
},

{
  num: "1.45",
  sanskrit: "अहो बत महत्पापं कर्तुं व्यवसिता वयम् | यद्राज्यसुखलोभेन हन्तुं स्वजनमुद्यताः ||",
  explanation: "Arjuna laments that they are ready to commit grave sin out of desire for pleasure and power."
},

{
  num: "1.46",
  sanskrit: "यदि मामप्रतीकारमशस्त्रं शस्त्रपाणयः | धार्तराष्ट्रा रणे हन्युस्तन्मे क्षेमतरं भवेत् ||",
  explanation: "He says it is better to be killed unarmed than to kill his own family. This marks complete collapse of will."
},

{
  num: "1.47",
  sanskrit: "सञ्जय उवाच | एवमुक्त्वार्जुनः सङ्ख्ये रथोपस्थ उपाविशत् | विसृज्य सशरं चापं शोकसंविग्नमानसः ||",
  explanation: "Arjuna drops his bow and sits down on the chariot, overwhelmed by grief. This ends the first chapter."
},

{
  num: "1.48",
  sanskrit: "इति श्रीमद्भगवद्गीतासु उपनिषत्सु ब्रह्मविद्यायां योगशास्त्रे अर्जुनविषादयोगो नाम प्रथमोऽध्यायः ||",
  explanation: "A traditional closing line marking the end of Chapter 1, called Arjuna Vishada Yoga. It signals the shift toward Krishna’s teaching in the next chapter."
},
];

const VerseCard = ({ v }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-2xl p-4 bg-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-start gap-4"
        aria-expanded={open}
      >
        <div className="text-sm font-medium w-20">{v.num}</div>
        <div className="flex-1">
          <div className="text-lg font-semibold">{v.sanskrit}</div>
          <div className="text-sm text-muted-foreground mt-1">
            {v.explanation.slice(0, 120)}{v.explanation.length > 120 ? '...' : ''}
          </div>
        </div>
        <div className="w-8 text-right">{open ? '−' : '+'}</div>
      </button>

      {open && (
        <div className="mt-4 text-sm leading-relaxed text-slate-200">
          <p className="mb-2">
            <strong>Sanskrit hook</strong>: {v.sanskrit}
          </p>
          <p>{v.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default function GitaChapter1Page() {
  return (
    <div className="min-h-screen p-8 bg-slate-900 text-white font-sans">
      {/* Background Enhancement: A subtle, large, radial gradient for a celestial feel */}
      <div className="absolute inset-0 bg-radial-gradient"></div>
      
      {/* Content Container: Centered and elevated */}
      <div className="max-w-4xl mx-auto relative z-10 space-y-10">
        
        {/* Header Section */}
        <header className="py-6 border-b border-teal-500/30">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
            Bhagavad Gita — Chapter 1
          </h1>
          <p className="mt-3 text-xl font-light text-slate-300 border-l-4 border-teal-400 pl-4 italic">
            Chapter 1 sets the scene at Kurukshetra and records Arjuna's moral crisis. Below are concise explanations for every verse in the chapter.
          </p>
        </header>

        {/* Main Content (Verses Grid) */}
        <main className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {verses.map((v) => (
            <VerseCard v={v} key={v.num} />
          ))}
        </main>

        {/* Footer Section */}
        <footer className="mt-12 pt-6 border-t border-slate-700 text-center text-sm text-slate-500">
          <p>
            Use this page as a study aid. If you want the original Devanagari, word-for-word translations, or commentary from a particular scholar, tell me which edition and I will add that next.
          </p>
          <p className="mt-1 text-xs text-slate-600">
            &copy; 2025 Gita Study Guide
          </p>
        </footer>
      </div>
    </div>
  );
}
