export default function Footer() {
    return (
      <footer className="bg-[#F9FAFB] border-t border-gray-200 py-6 mt-16">
        <div className="max-w-5xl mx-auto text-center text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="font-semibold text-gray-700">14 Days</span>.  
          Learn your way ⏱️
          {" "} — built by{" "}
          <a
            href="https://www.benspooner.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700 transition"
          >
            Ben Spooner
          </a>
        </div>
      </footer>
    );
  }
  