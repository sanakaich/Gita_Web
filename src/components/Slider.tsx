import React, { useEffect, useRef, useState } from "react";

const imagesList = [
  "krishna.jpg",
  "bhismpitamah.jpg",
  "Dhritrastra.jpg",
  "dronacharya.jpg",
  "karna.jpg",
  "sanjaya.jpg",
  "Ved-Vyasa.jpg",
  "Yudhishthira.jpg",
];

type Quote = {
  title: string;
  subtitle?: string;
  chapter?: string;
  sanskrit?: string;
  note?: string;
};

const quotesMap: Record<string, Quote> = {
  "krishna": {
    title: "कृष्ण (Krishna) — The Eternal Teacher",
    chapter: "Chapter 4, Verse 7–8",
    sanskrit:
      "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानम् अधर्मस्य तदाऽअत्मानं सृजाम्यहम्॥\nपरित्राणाय साधूनां विनाशाय च दुष्कृताम्।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥",
    subtitle: "When righteousness declines and unrighteousness rises, I manifest myself.",
  },
  "bhismpitamah": {
    title: "भीष्म पितामह (Bhishma Pitamah)",
    chapter: "Chapter 2 — symbolic verses",
    sanskrit:
      "कुतस्त्वा कश्मलमिदं विषमे समुपस्थितम्।\nअनार्यजुष्टम् अस्वर्ग्यम् अकीर्तिकरम् अर्जुन॥\nक्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते।\nक्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप॥",
    subtitle: "Duty and courage; overcome faint-heartedness.",
  },
  "dhritrastra": {
    title: "धृतराष्ट्र (Dhritarashtra)",
    chapter: "Opening verse — the blind king's view",
    sanskrit:
      "धृतराष्ट्र उवाच —\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥",
    subtitle: "Dhritarashtra asks what happened on the battlefield.",
  },
  "dronacharya": {
    title: "द्रोणाचार्य (Dronacharya)",
    chapter: "Chapter 18, Verse 45 (on svadharma)",
    sanskrit:
      "स्वे स्वे कर्मण्यभिरतः संसिद्धिं लभते नरः।\nस्वकर्मनिरतः सिद्धिं यथा विन्दति तच्छृणु॥",
    subtitle: "Success comes by performing one's own duty.",
  },
  "karna": {
    title: "कर्ण (Karna)",
    chapter: "Chapter 2, Verse 47 (on selfless action)",
    sanskrit:
      "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    subtitle: "You have the right to action only, not to its fruits.",
  },
  "sanjaya": {
    title: "संजय (Sanjaya)",
    chapter: "Chapter 18, Verses 76–77 (Sanjaya's vision)",
    sanskrit:
      "राजन् संवृत्य संवृत्य समालोच्य पुनः पुनः।\nयमद्भुतं परमं पुण्यं कीर्तितं मम हृष्यति॥\nविस्मयो मे महान् राजन् हृष्यामि च पुनः पुनः।\nयत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः॥",
    subtitle: "Sanjaya recounts the vision and glory of the Lord and Arjuna.",
  },
  "ved-vyasa": {
    title: "वेद व्यास (Ved Vyasa)",
    chapter: "Chapter 10, Verse 38 & 10.2 (wisdom & authorship)",
    sanskrit:
      "क्षमा सत्यं दमश्चैव शमस्तुष्टिस्तपो दानम्।\nयशोऽयशश्च भूम्यंश्च भवन्ति भूतस्य धारिणः॥\n\nन मे विदुः सुरगणाः प्रभवं न महर्षयः।\nअहमादिर्हि देवानां महर्षीणां च सर्वशः॥",
    subtitle: "Wisdom and the source of divinity; the compiler of the epic.",
  },
  "yudhishthira": {
    title: "युधिष्ठिर (Yudhishthira)",
    chapter: "Chapter 3, Verse 19 (righteous duty)",
    sanskrit:
      "तस्मादसक्तः सततं कार्यं कर्म समाचर।\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥",
    subtitle: "Do your prescribed work without attachment; that's the way to perfection.",
  },
};

const toKey = (filename: string) =>
  filename.replace(/\.[^/.]+$/, "").toLowerCase().replace(/\s+/g, "-");

const srcFor = (f: string) => `/images/${f}`;

const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const length = imagesList.length;
  const intervalRef = useRef<number | null>(null);

  const startAuto = () => {
    stopAuto();
    intervalRef.current = window.setInterval(() => {
      setCurrent((p) => (p + 1) % length);
    }, 5000);
  };

  const stopAuto = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prev = () => {
    stopAuto();
    setCurrent((p) => (p - 1 + length) % length);
    startAuto();
  };

  const next = () => {
    stopAuto();
    setCurrent((p) => (p + 1) % length);
    startAuto();
  };

  const key = toKey(imagesList[current]);
  const quote = quotesMap[key];

  return (
    <section className="w-full max-w-7xl mx-auto p-4 md:p-6" aria-label="Gita slider">
      <div className="bg-transparent rounded-xl overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Left: Image (takes half on md+) */}
          <div className="md:w-1/2 w-full bg-black flex items-center justify-center" style={{ minHeight: 420 }}>
            <img
              src={srcFor(imagesList[current])}
              alt={imagesList[current]}
              onError={(e) => {
                console.error("Image error:", e.currentTarget.src);
                e.currentTarget.style.display = "none";
              }}
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
              className="block"
            />
          </div>

          {/* Right: Text box */}
          <div className="md:w-1/2 w-full p-6 flex flex-col justify-center bg-white/5">
            <div className="bg-black/60 text-white rounded-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold leading-tight">
                {quote?.title ?? imagesList[current].replace(/\.[^/.]+$/, "")}
              </h2>

              {quote?.chapter && (
                <p className="mt-2 text-sm md:text-base opacity-90">{quote.chapter}</p>
              )}

              {quote?.subtitle && (
                <p className="mt-3 text-sm md:text-base opacity-95">{quote.subtitle}</p>
              )}

              {quote?.sanskrit && (
                <div
                  className="mt-4 text-sm md:text-base leading-relaxed"
                  style={{ whiteSpace: "pre-line", fontFamily: "Noto Sans Devanagari, serif" }}
                >
                  {quote.sanskrit}
                </div>
              )}

              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={prev}
                  className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded text-white"
                  aria-label="Previous"
                >
                  Prev
                </button>
                <button
                  onClick={next}
                  className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded text-white"
                  aria-label="Next"
                >
                  Next
                </button>

                <div className="ml-auto text-xs text-white/80 italic">
                  {current + 1} / {length}
                </div>
              </div>
            </div>

            {/* Dots (below text on small screens; aligned right on md) */}
            <div className="mt-4 flex justify-center md:justify-end gap-2">
              {imagesList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    stopAuto();
                    setCurrent(idx);
                    startAuto();
                  }}
                  className={`w-3 h-3 rounded-full transition ${idx === current ? "bg-white" : "bg-white/40"}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
