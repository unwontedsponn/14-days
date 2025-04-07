import { notFound } from "next/navigation";
import { book1Track } from "@/app/lib/book1Track";

interface PageProps {
    params: {
      slug: string;
    };
  }
  
  export default function LessonPage({ params }: PageProps) {
    const lesson = book1Track.find((l) => l.id === params.slug); 

  if (!lesson) return notFound();

  return (
    <div className="px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
      <p className="text-gray-600 text-lg mb-6">{lesson.tagline}</p>

      {lesson.content.map((block, idx) => {
        if (block.type === "title") {
          return (
            <h2
              key={idx}
              className="text-xl font-bold text-blue-700 mb-4"
            >
              {block.value}
            </h2>
          );
        }

        if (block.type === "list" && Array.isArray(block.value)) {
          return (
            <ul
              key={idx}
              className="mb-6 list-disc list-inside space-y-1 text-gray-700"
            >
              {block.value.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "text") {
          return (
            <p key={idx} className="mb-4 text-gray-800">
              {block.value}
            </p>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={idx}
              className="mb-4 pl-4 border-l-4 border-blue-300 italic text-gray-600"
            >
              {block.value}
            </blockquote>
          );
        }

        if (block.type === "task") {
          return (
            <div
              key={idx}
              className="mb-4 bg-blue-50 border border-blue-200 p-4 rounded"
            >
              <strong>🎯 Task:</strong> {block.value}
            </div>
          );
        }

        if (block.type === "offline") {
          return (
            <div
              key={idx}
              className="mb-4 bg-yellow-50 border border-yellow-200 p-4 rounded"
            >
              <strong>📝 Offline Mission:</strong> {block.value}
            </div>
          );
        }

        if (block.type === "pdf" && "url" in block && "label" in block) {
          return (
            <div key={idx} className="mt-6">
              <a
                href={block.url}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 {block.label}
              </a>
            </div>
          );
        }

        return null;
      })}

      <div className="mt-10 flex justify-between items-center border-t pt-6">
        {lesson.prev && (
          <a
            href={`/learn/book1/${lesson.prev}`}
            className="text-sm text-blue-600 hover:underline"
          >
            ← Previous Lesson
          </a>
        )}
        <div className="flex-grow" />
        {lesson.next && (
          <a
            href={`/learn/book1/${lesson.next}`}
            className="text-sm bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Next Lesson →
          </a>
        )}
      </div>
    </div>
  );
}
