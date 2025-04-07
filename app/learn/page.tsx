export default function LearnHome() {
    const courses = [
      {
        title: "🎼 Beginner to Composer in 14 Days",
        description:
          "Learn the piano, unlock your creativity, and compose original music — even if you’re just getting started.",
        href: "/learn/book1/intro",
        color: "bg-yellow-100 text-yellow-800",
      },
    ];
  
    return (
      <div className="min-h-screen px-6 py-20 bg-white text-gray-900 font-sans">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight">
          🚀 Start Your First Course
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg mb-12 leading-relaxed">
          Your journey begins with music. This hands-on, 14-day course will take you from zero to composing your own pieces — all through play, patterns, and improvisation.
        </p>
  
        <div className="max-w-xl mx-auto">
          {courses.map((course) => (
            <a
              key={course.title}
              href={course.href}
              className={`block rounded-2xl p-6 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 ease-out ${course.color}`}
            >
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-base text-gray-700 leading-snug">
                {course.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    );
  }
  