// StoryPage.jsx
import { useParams } from "react-router-dom";

const stories = {
  narasimha: {
    title: "Story of Narasimha",
    youtubeId: "wde8JLqbKJ4",
    paragraph: `When tyranny overwhelmed the cosmos and Hiranyakashipu's arrogance
threatened dharma, his son Prahlada stood firm in devotion. To protect the
devotee and restore balance, Vishnu manifested as Narasimha — a fierce form
neither man nor beast. Appearing at twilight on a palace threshold, Narasimha
overcame the tyrant in a way that fulfilled divine law and exposed the limits
of hubris. This story teaches that sincere devotion and cosmic justice prevail
against oppression.`,
  },

  varaha: {
    title: "Story of Varaha",
    youtubeId: "4imzRF3aGZg",
    paragraph: `When the demon Hiranyaksha dragged the Earth beneath the cosmic ocean,
Vishnu took the form of a boar, Varaha, dove into the waters, lifted the Earth
on his tusks, and restored order. The tale speaks of rescue, resolve, and the
restoration of balance when everything seems lost.`,
  },

  krishna: {
    title: "Stories of Krishna",
    youtubeId: "",
    paragraph: `Krishna's life blends mischief, love and divine purpose. From playful
childhood episodes to his role as charioteer and teacher in the Mahabharata,
his stories show how courage, wisdom and joy can coexist in a life lived with
integrity.`,
  },
};

export default function StoryPage() {
  const { name } = useParams();
  const key = (name || "").toLowerCase();
  const story = stories[key] || {
    title: "Story Not Found",
    youtubeId: null,
    paragraph: "The story you are looking for does not exist.",
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{story.title}</h1>

      {/* Video area */}
      {story.youtubeId ? (
        <div className="mb-6">
          <div className="relative" style={{ paddingTop: "56.25%" /* 16:9 */ }}>
            <iframe
              title={story.title}
              src={`https://www.youtube.com/embed/${story.youtubeId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-lg border"
            />
          </div>

          <p className="mt-3 text-sm">
            Watch on YouTube:{" "}
            <a
              href={`https://youtu.be/${story.youtubeId}`}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 hover:underline"
            >
              https://youtu.be/{story.youtubeId}
            </a>
          </p>
        </div>
      ) : (
        <div className="mb-6">
          {/* graceful fallback when no video present */}
          <div className="h-56 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
            No video available
          </div>
        </div>
      )}

      {/* Paragraph */}
      <article className="prose prose-lg max-w-none">
        <p>{story.paragraph}</p>
      </article>
    </div>
  );
}
