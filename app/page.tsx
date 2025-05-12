// pages/index.js

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rethinking Health Secrets</title>
        <meta name="description" content="Uncover the truths Big Pharma doesn't want you to know." />
      </Head>

      <header className="text-white text-center py-20 px-4">
        <section className="bg-[#f9f8f4] text-gray-700 py-16 px-4">
          <div className="border-t border-gray-300 mb-8"></div>
          <p className="uppercase text-center text-sm tracking-widest text-gray-500 mb-10">
            Your Journey to Music Creation Starts Here
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center text-center gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">120 Pages</h3>
              <p className="text-sm text-gray-500">Practical, daily exercises</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ben Spooner</h3>
              <p className="text-sm text-gray-500">Composer, Author, Educator</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No Experience Needed</h3>
              <p className="text-sm text-gray-500">Perfect for beginners</p>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-8"></div>
        </section>


        <section className="bg-[#f9f8f4] py-20 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Book Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <svg
                width="400"
                height="600"
                viewBox="0 0 400 600"
                xmlns="http://www.w3.org/2000/svg"
                style={{ background: '#f4b630' }}
              >
                <rect width="400" height="600" fill="#f4b630" />
                <text
                  x="50%"
                  y="30%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize="32"
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                  fill="#000"
                >
                  BEGINNER
                </text>
                <text
                  x="50%"
                  y="38%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize="32"
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                  fill="#000"
                >
                  TO
                </text>
                <text
                  x="50%"
                  y="46%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize="32"
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                  fill="#000"
                >
                  COMPOSER
                </text>
                <text
                  x="50%"
                  y="54%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize="32"
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                  fill="#000"
                >
                  IN 14 DAYS
                </text>
                <text
                  x="50%"
                  y="80%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize="20"
                  fontFamily="Arial, sans-serif"
                  fill="#000"
                >
                  Ben Spooner
                </text>
              </svg>
            </div>

            {/* Book Info */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Beginner to Composer in 14 Days
              </h2>
              <p className="text-lg text-gray-700 mb-1">By Ben Spooner</p>

              {/* Optional: Rating Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.383 2.457a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.538 1.118L10 13.011l-3.384 2.456c-.782.57-1.837-.197-1.538-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.617 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                <span className="text-sm text-gray-600 ml-2">(New)</span>
              </div>

              <p className="italic text-gray-800 mb-3">
                What if you could write music confidently in just two weeks?
              </p>
              <p className="italic text-gray-800 font-semibold mb-4">
                Unlock your musical potential — no experience needed.
              </p>
              <p className="text-gray-600 mb-6">
                This hands-on guide walks you step-by-step through practical composing skills. Whether you're just starting out or revisiting music, this book gives you structure, encouragement, and the right foundation to succeed.
              </p>

              <a
                href="#bundle-offer"
                className="bg-black text-white font-semibold py-3 px-6 rounded hover:bg-gray-800 transition"
              >
                Start Reading
              </a>
            </div>
          </div>
        </section>

      </header>

      <section className="bg-gray-100 py-16 px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Why Is Our Book Currently Censored?</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-base md:text-lg">
          Rethinking Health Secrets challenges mainstream health narratives, exposing hidden truths about the industry, Big Pharma, and the misinformation shaping our well-being. Because this book reveals what they don’t want you to know, it has faced censorship for being “too controversial.”
        </p>
      </section>

      <section id="bundle-offer" className="py-16 px-4 text-center bg-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Get Limited Time Bundle Today and Save 40% Off + Free Audiobook</h2>
        <ul className="list-disc text-left max-w-xl mx-auto mb-6 text-gray-800 space-y-2">
          <li>Rethinking Health Secrets book</li>
          <li>7-Day Health Body & Mind Reset by Heather Collins</li>
          <li>Free Audiobook version of Rethinking Health Secrets book</li>
        </ul>
        <a href="https://buy.stripe.com/..." className="bg-green-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-500 transition">
          Get It Now and Save 40% Off
        </a>
      </section>

      <section className="bg-gray-100 py-16 px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">What Readers Are Saying</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              quote: 'This book provides a unique perspective on the health industry. It’s packed with actionable tips and shocking truths that everyone should know. Highly recommend it!',
              author: 'Dr. Tom Reynolds'
            },
            {
              quote: 'This book is a wake-up call for anyone who blindly trusts the healthcare system. It shines a light on practices most doctors won’t discuss, would recommend it to everyone',
              author: 'Dr. Amelia Hartfield, Ph.D'
            },
            {
              quote: 'One of the best books I have ever read in health related topic!',
              author: 'Ethan Cole, Functional Medicine Practitioner'
            }
          ].map((testimonial, i) => (
            <blockquote key={i} className="bg-white shadow-lg p-6 rounded-lg">
              <p className="italic text-gray-800">"{testimonial.quote}"</p>
              <footer className="mt-4 font-semibold text-gray-600">- {testimonial.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Subscribe to Dr. Heather Collins' Newsletter for Book Updates</h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-700">
          Subscribe to Heather's monthly newsletter and join over 120,000+ readers to stay updated on her book, Health Secrets Industry Hides...
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
          <input type="email" placeholder="Enter your email" className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition">
            Subscribe
          </button>
        </form>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              question: 'What is "Rethinking Health Secrets" about?',
              answer: 'This book provides valuable general health advice, offering practical tips to improve your well-being...'
            },
            {
              question: 'How do I access my e-book?',
              answer: 'Once your order is placed, a PDF copy of the eBook will be instantly available for download...'
            },
            {
              question: 'Do you sell Physical copy of the book?',
              answer: 'We are actively working on making the physical book available, but for now it’s only in digital format.'
            },
            {
              question: 'Do you have other socials?',
              answer: 'Yes, find me on Instagram @dr.heathercollins or contact me via the website.'
            }
          ].map((faq, i) => (
            <details key={i} className="bg-white p-4 rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">{faq.question}</summary>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="bg-black text-white py-6 text-center">
        <p className="text-sm">&copy; 2024 RethinkingHealthSecrets. All rights reserved.</p>
        <nav className="flex justify-center gap-6 mt-4 text-sm">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="/refund-policy" className="hover:underline">Refund Policy</a>
          <a href="/contact-us" className="hover:underline">Contact Us</a>
        </nav>
      </footer>
    </>
  );
}
