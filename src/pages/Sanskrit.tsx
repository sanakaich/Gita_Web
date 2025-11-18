import Navbar from "@/components/Navbar";
import { Scroll } from "lucide-react";

const Sanskrit = () => {
  const shlokas = [
    {
      sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
      transliteration: "Karmaṇy-evādhikāras te mā phaleṣhu kadāchana, mā karma-phala-hetur bhūr mā te saṅgo 'stvakarmaṇi",
      translation: "You have the right to perform your duty, but not to the fruits thereof. Never consider yourself to be the cause of the results, nor be attached to inaction.",
      chapter: "Chapter 2, Verse 47"
    },
    {
      sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय। सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
      transliteration: "Yogasthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya, siddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga uchyate",
      translation: "Perform your duty equipoised, abandoning all attachment to success or failure. Such equanimity is called yoga.",
      chapter: "Chapter 2, Verse 48"
    },
    {
      sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
      transliteration: "Yadā yadā hi dharmasya glānir bhavati bhārata, abhyutthānam adharmasya tadātmānaṁ sṛijāmyaham",
      translation: "Whenever there is a decline in righteousness and a rise in unrighteousness, O Arjuna, at that time I manifest myself on earth.",
      chapter: "Chapter 4, Verse 7"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-peaceful">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center space-y-6 animate-fade-in">
          <Scroll className="w-20 h-20 text-primary mx-auto" />
          <h1 className="text-5xl font-heading font-bold text-foreground">
            Sanskrit Shlokas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the divine verses in their original Sanskrit form
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {shlokas.map((shloka, index) => (
            <article
              key={index}
              className="bg-card rounded-lg p-12 shadow-soft border border-border hover:shadow-glow transition-all duration-300"
            >
              <p className="text-3xl font-sanskrit font-semibold text-primary leading-relaxed text-center mb-6">
                {shloka.sanskrit}
              </p>
              <p className="text-lg font-heading italic text-muted-foreground text-center mb-6">
                {shloka.transliteration}
              </p>
              <div className="border-t border-border pt-6">
                <p className="text-lg text-foreground/80 leading-relaxed text-center mb-4">
                  {shloka.translation}
                </p>
                <p className="text-sm font-heading text-primary text-center">
                  {shloka.chapter}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Sanskrit;
