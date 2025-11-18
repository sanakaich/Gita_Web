import { useParams } from "react-router-dom";

export default function SanskritCourse1() {
  const { Course } = useParams();

  const lessons = {
    1: {
      title: "Sanskrit Module 1: Basics",
      body: `Welcome to your first Sanskrit module.

Let’s build a clean foundation.

Vowels (स्वर):
अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, औ

Consonants (व्यंजन):
क, ख, ग, घ, ङ
च, छ, ज, झ, ञ
ट, ठ, ड, ढ, ण
त, थ, द, ध, न
प, फ, ब, भ, म

Basic Words:
नमस्ते = Hello
बालकः = Boy
बालिका = Girl
भवन्तः = You (plural)

Simple Sentences:
अहं विद्यार्थी अस्मि = I am a student.
त्वं पठसि = You study.

Click 'Next Module' to continue learning.`
    },
    2: {
      title: "Sanskrit Module 2: Words and Sentences",
      body: `Now that you know the letters, let’s build vocabulary.

Daily-use Words:
जलम् = water
अन्नम् = food
गृहः = house
पुस्तकम् = book
शाला = school

Simple Sentences:
अहं जलं पिबामि = I drink water.
सः पुस्तकं पठति = He reads a book.
सा शालां गच्छति = She goes to school.

More practice coming up in the next module.`
    }
  };

  const lesson = lessons[Course] || {
    title: "Course Not Found",
    body: "The Sanskrit module you are looking for does not exist."
  };

  const nextModule = Number(Course) + 1;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <pre className="whitespace-pre-wrap text-lg leading-relaxed mb-8">{lesson.body}</pre>

      <div className="flex justify-end">
        <a
          href={`/sanskrit/${nextModule}`}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Next Module
        </a>
      </div>
    </div>
  );
}