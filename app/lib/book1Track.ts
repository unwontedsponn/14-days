// lib/curriculum/musicTrack.ts

export const book1Track = [
    {
      id: "intro",
      title: "🎼 Beginner to Composer in 14 Days",
      tagline: "A playful journey into piano, patterns, and improvisation.",
      xp: 5,
      content: [
        {
          type: "text",
          value:
            "This isn’t about becoming a piano master. It’s about becoming *musically fluent* — fast. In just 14 days, you’ll go from zero to creating your own pieces. No grades. No pressure. Just creative momentum.",
        },
        {
          type: "text",
          value:
            "You’ll learn through real play: using your ears, hands, and heart — not just your head.",
        },
        {
          type: "title",
          value: "🛠 How to Use This Course",
        },
        {
          type: "list",
          value: [
            "Each day = 1 small lesson, 10–20 mins",
            "Read → Do the XP task → Try the offline mission",
            "Track your progress and earn XP along the way",
            "Use the worksheet printables (if you like)",
          ],
        },
        {
          type: "title",
          value: "🎹 What You’ll Need",
        },
        {
          type: "list",
          value: [
            "A keyboard or piano (any size works!)",
            "Paper and pencil (for sketching ideas)",
            "Curiosity and a sense of play",
          ],
        },
        {
          type: "title",
          value: "💬 A Note From Ben",
        },
        {
          type: "text",
          value:
            "I wrote this because I believe music belongs to everyone — not just the 'talented' or 'trained.' If you can tap a rhythm and press a key, you’ve already started. This course is about unlocking your creative voice, one playful step at a time.",
        },
      ],
      prev: null,
      next: "ben-story",
    },
    {
      id: "ben-story",
      title: "💬 Musings from a Somerset Punk",
      tagline: "Where this all began — and why it matters",
      xp: 5,
      content: [
        {
          type: "text",
          value:
            "Somewhere in Somerset, a teenage boy with a four-track and a distortion pedal wrote songs about school dinners and heartbreak. He didn’t know any music theory. Didn’t read a note. But he could hear something in his head, and make it real. That was the start.",
        },
        {
          type: "text",
          value:
            "There’s a punk in everyone — the part that makes things up, that doesn’t wait to be picked, that experiments before it’s ready. That’s what this course is about.",
        },
        {
          type: "quote",
          value: "“The goal isn’t to be perfect — it’s to be playful.”",
        },
        {
          type: "text",
          value:
            "This isn’t about grades or expertise. It’s about becoming musically fluent — fast. So you can get in the flow, surprise yourself, and maybe even make something that sticks.",
        },
        {
          type: "text",
          value: "Welcome to 14 Days. Start scrappy. Finish proud.",
        },
      ],
      prev: "intro",
      next: "day-1",
    },  
    {
      id: "day-1",
      title: "Day 1: Ebony & Ivory",
      tagline: "Exploring the notes of the piano",
      xp: 10,
      content: [
        {
          type: "text",
          value: "At first glance, the piano can feel like a maze—but there's a pattern waiting to be discovered. Today, we explore black and white notes, pitch, and your first musical improvisation.",
        },
        {
          type: "quote",
          value: "“The musician is perhaps the most modest of animals, but he is also the proudest.” – Erik Satie",
        },
        {
          type: "task",
          value: "Find all the C’s on your piano. Notice how they're just to the left of the black note pairs. Try playing them up and down the keyboard. Now do the same for D, F, and A.",
        },
        {
          type: "text",
          value: "Next, explore black notes: C♯ and D♭ are the same key, just with different names. These are called enharmonic equivalents—big term, simple idea.",
        },
        {
          type: "offline",
          value: "Draw your own keyboard on paper. Label where all the C’s, D’s, F’s, and black notes live. Use colours to help you group them visually.",
        },
        {
          type: "task",
          value: "Play a chromatic scale (every note) from one C to the next. Try one octave, then two. Say each note out loud. Use sharps going up, flats coming down.",
        },
        {
          type: "task",
          value: "Choose your root note—the one you’ll build from. If it’s your first time, start with C. Write it down. This will guide your piece.",
        },
        {
          type: "offline",
          value: "Improvise using just your root note for one minute. Change speed, dynamics, use different fingers or hands. Don’t worry how it sounds—just play.",
        },
        {
          type: "pdf",
          label: "Download Worksheet: Ebony & Ivory",
          url: "/worksheets/day-1-ebony-ivory.pdf",
        },
      ],
      prev: null,
      next: "day-2",
    },
    {
      id: "day-2",
      title: "Day 2: Slave to the Rhythm",
      tagline: "Understanding simple rhythm",
      xp: 10,
      content: [
        {
          type: "text",
          value: "Today we explore pulse and rhythm. The pulse is the beat—like your heartbeat. Rhythm is what dances between the beats.",
        },
        {
          type: "quote",
          value: "“After silence, that which comes nearest to expressing the inexpressible is music.” – Aldous Huxley",
        },
        {
          type: "text",
          value: "We'll start with 3 common rhythmic values: whole notes (4 beats), half notes (2 beats), and quarter notes (1 beat).",
        },
        {
          type: "task",
          value: "Tap your foot to the second hand of a clock (60bpm). Now clap: first just on beat 1 (whole notes), then beats 1 and 3 (half notes), then all beats (quarter notes).",
        },
        {
          type: "offline",
          value: "Repeat this exercise using your root note from Day 1. Can you play it in each of the 3 rhythms?",
        },
        {
          type: "text",
          value: "Now create a rhythmic phrase using any combination of the 3 note values. Use the worksheet to help you.",
        },
        {
          type: "task",
          value: "Play your rhythm at 60bpm. Then double it (120bpm). Then again (240bpm). Get it smooth and consistent.",
        },
        {
          type: "offline",
          value: "Improvise using your rhythmic phrase and root note. Vary dynamics, hand use, emotion, and tempo.",
        },
        {
          type: "pdf",
          label: "Download Worksheet: Rhythm Builder",
          url: "/worksheets/day-2-rhythm.pdf",
        },
      ],
      prev: "day-1",
      next: "day-3",
    },
    {
      id: "day-3",
      title: "Day 3: Ground Control to Major Tom",
      tagline: "Playing in a major key",
      xp: 10,
      content: [
        {
          type: "text",
          value:
            "Today, we’re landing in our musical ‘home’ — the major key. Just like astronauts need ground control, composers need a key centre to anchor their ideas. Let’s explore what a major key really is.",
        },
        {
          type: "quote",
          value:
            "‘To understand is to perceive patterns.’ – Isaiah Berlin",
        },
        {
          type: "text",
          value:
            "Each key has a home base — a set of notes that give it a feel. C major sounds happy. C minor? Mysterious. The major scale uses the pattern: RTTSTTTS (Root, Tone, Tone, Semitone...).",
        },
        {
          type: "task",
          value:
            "Use your Day 1 root note. Apply the RTTSTTTS formula to discover your major key. Write the notes down, and if you have a keyboard, play them slowly ascending and descending.",
        },
        {
          type: "text",
          value:
            "Now for some fingerwork! Practice the C major scale with this pattern: 1-2-3, thumb under, then 1-2-3-4-5. Use both hands and aim for smooth motion.",
        },
        {
          type: "offline",
          value:
            "Draw out the major scale pattern and finger numbers. Memorize RTTSTTTS. Try improvising for 1 minute using only the notes of your major key.",
        },
        {
          type: "offline",
          value:
            "Challenge: Combine your Day 2 rhythm with your Day 3 scale. Can you loop your rhythmic phrase using only your major key notes?",
        },
        {
          type: "pdf",
          label: "Download Scale Worksheet",
          url: "/worksheets/day-3-major-key.pdf",
        },
      ],
      prev: "day-2",
      next: "story",
    },
    {
      id: "story",
      title: "🎻 The Sexy Curvy Bass",
      tagline: "A true tale of learning, play, and a lockdown debut.",
      xp: 0,
      content: [
        {
          type: "text",
          value: "‘You’ve got to be joking’ she said, not so much a question as a statement...",
        },
        {
          type: "text",
          value: "As a self-taught drummer and pianist, the prospect of learning something new never phases me...",
        },
        {
          type: "text",
          value: "Over the weeks that followed I tried my hand at writing and playing simple parts...",
        },
        {
          type: "text",
          value: "I twisted Hayley’s arm. The whole thing made her nervous...",
        },
        {
          type: "text",
          value: "On the night of the gig we moved a sweetheart plant from the bathroom to the music room...",
        },
      ],
      prev: "day-3",
      next: "day-4",
    },  
  ];
  