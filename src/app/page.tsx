import MascotImage from "@/components/MascotImage";
import SmartCTA from "@/components/SmartCTA";
import SectionReveal from "@/components/SectionReveal";
import AnimCounter from "@/components/AnimCounter";

/* ─── JSON-LD ─────────────────────────────────────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Spaiky",
  operatingSystem: "iOS, Android",
  applicationCategory: "EducationalApplication",
  description:
    "Spaiky turns AI into a game. Short lessons on prompting, machine learning, and more. Five minutes a day, no tech background needed.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1200",
    bestRating: "5",
  },
};

/* ─── DATA ────────────────────────────────────────────────────── */

const FEATURES = [
  {
    emoji: "🎮",
    title: "Gamified Lessons",
    desc: "You earn XP, collect trophies, and keep streaks going. It honestly feels like leveling up in a game.",
    color: "purple",
  },
  {
    emoji: "⚡",
    title: "5-Minute Sessions",
    desc: "Short enough for a commute or a coffee break. You'll finish before your latte gets cold.",
    color: "green",
  },
  {
    emoji: "🧠",
    title: "No Jargon Zone",
    desc: "We explain AI the way a friend would. Lots of analogies, a bit of humor, zero jargon.",
    color: "pink",
  },
  {
    emoji: "🏆",
    title: "Trophy Collection",
    desc: "Four tiers from Bronze to Platinum. Collect them all if you're the competitive type.",
    color: "gold",
  },
  {
    emoji: "🔥",
    title: "Daily Streaks",
    desc: "Your streak counter is surprisingly motivating. Miss a day and you'll actually feel it.",
    color: "orange",
  },
  {
    emoji: "📊",
    title: "Track Progress",
    desc: "See how far you've come across every module. Numbers don't lie.",
    color: "cyan",
  },
] as const;

const STATS = [
  { target: 1200, suffix: "+", label: "Learners", color: "purple" },
  { target: 80, suffix: "+", label: "Lessons", color: "green" },
  { target: 48, suffix: "%", label: "Avg. score improvement", color: "pink" },
  { target: 5, suffix: " min", label: "Average lesson time", color: "gold" },
] as const;

const TESTIMONIALS = [
  {
    emoji: "👩‍💻",
    name: "Emma L.",
    role: "Marketing Student",
    quote:
      "Went from zero AI knowledge to using ChatGPT like a pro at my internship. The streak feature? Genuinely addictive.",
  },
  {
    emoji: "🧑‍🎓",
    name: "James R.",
    role: "Business Analyst",
    quote:
      "First AI course I've tried that doesn't feel like a lecture. I actually look forward to opening it in the morning.",
  },
  {
    emoji: "👨‍🔬",
    name: "Priya S.",
    role: "Junior Developer",
    quote:
      "The prompting module alone saved me hours at work. Going for Platinum on the trophies next.",
  },
] as const;

const PRESS = ["TechCrunch", "Product Hunt", "The Verge", "Wired", "Fast Company"];

/* ─── COLOR MAPS ──────────────────────────────────────────────── */

const ICON_BG: Record<string, string> = {
  purple: "bg-purple/15",
  green: "bg-green/15",
  pink: "bg-pink/15",
  gold: "bg-gold/15",
  orange: "bg-orange/15",
  cyan: "bg-cyan/15",
};

const BORDER_GLOW: Record<string, string> = {
  purple: "hover:border-purple/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]",
  green: "hover:border-green/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
  pink: "hover:border-pink/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)]",
  gold: "hover:border-gold/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]",
  orange: "hover:border-orange/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]",
  cyan: "hover:border-cyan/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]",
};

const STAT_COLOR: Record<string, string> = {
  purple: "text-purple",
  green: "text-green",
  pink: "text-pink",
  gold: "text-gold",
};

const STEP_RING: Record<string, string> = {
  purple: "border-purple bg-purple/15 text-purple",
  green: "border-green bg-green/15 text-green",
  pink: "border-pink bg-pink/15",
};

/* ─── PAGE ────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── STICKY NAV ───────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#" className="flex items-center gap-2 font-heading text-xl font-bold text-white">
            <MascotImage src="/mascots/hero.png" alt="" size={28} className="!drop-shadow-none" />
            Spaiky
          </a>

          <div className="hidden items-center gap-8 text-sm text-text-muted md:flex">
            <a href="#features" className="transition-colors hover:text-white">Features</a>
            <a href="#how-it-works" className="transition-colors hover:text-white">How It Works</a>
            <a href="#testimonials" className="transition-colors hover:text-white">Testimonials</a>
          </div>

          <a
            href="#get-spaiky"
            className="rounded-full bg-purple px-5 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(124,58,237,0.4)]"
          >
            Get Started
          </a>
        </div>
      </nav>

      <main>
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-5 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-green/30 bg-green/10 px-4 py-1.5 text-sm font-medium text-green-light">
                ⭐ Now on Android, iPhone coming soon
              </span>

              <div className="mb-4 animate-bobble">
                <MascotImage src="/mascots/hero.png" alt="Spaiky mascot waving" size={140} />
              </div>

              <h1 className="mb-5 max-w-lg font-heading text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
                The fun way to become{" "}
                <span className="bg-gradient-to-r from-white to-purple-light bg-clip-text text-transparent">
                  AI&#8209;fluent
                </span>
              </h1>

              <p className="mb-8 max-w-lg text-lg leading-relaxed text-text-muted">
                Short, fun lessons on AI prompting, machine learning, and more. Five minutes a
                day is all it takes. No tech background needed.
              </p>

              <SmartCTA size="large" className="mb-8" />

              <div className="flex flex-wrap justify-center gap-6 text-sm text-text-muted lg:justify-start">
                <span>👥 <strong className="text-white">1,200+</strong> learners</span>
                <span>🤖 <strong className="text-white">80+</strong> lessons</span>
                <span>🎉 <strong className="text-white">100%</strong> free to start</span>
              </div>
            </div>

            {/* Phone mockup, desktop only */}
            <div className="hidden justify-center lg:flex">
              <PhoneMockup />
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF STRIP ─────────────────────────────── */}
        <section className="border-y border-purple/20">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-5 py-5 md:gap-12">
            <span className="text-xs font-semibold tracking-widest text-text-muted uppercase">
              Featured in
            </span>
            {PRESS.map((name) => (
              <span key={name} className="font-heading text-lg font-bold text-white/40 select-none md:text-xl">
                {name}
              </span>
            ))}
          </div>
        </section>

        {/* ── FEATURES ───────────────────────────────────────── */}
        <section id="features" className="px-5 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionReveal className="mb-14 flex flex-col items-center text-center">
              <MascotImage src="/mascots/teaching.png" alt="Spaiky teaching" size={90} className="mb-4" />
              <span className="mb-2 text-xs font-bold tracking-widest text-green uppercase">
                Why Spaiky
              </span>
              <h2 className="max-w-md font-heading text-3xl font-bold sm:text-4xl">
                Learning AI should feel like a game
              </h2>
            </SectionReveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f, i) => (
                <SectionReveal key={f.title} delay={i * 0.08}>
                  <div
                    className={`group h-full rounded-2xl border border-white/5 bg-card p-6 transition-all duration-200 hover:-translate-y-1 ${BORDER_GLOW[f.color]}`}
                  >
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${ICON_BG[f.color]}`}
                    >
                      {f.emoji}
                    </div>
                    <h3 className="mb-2 font-heading text-lg font-bold text-white">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-text-muted">{f.desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ───────────────────────────────────── */}
        <section id="how-it-works" className="px-5 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <SectionReveal className="mb-14 flex flex-col items-center text-center">
              <MascotImage src="/mascots/thinking.png" alt="Spaiky thinking" size={90} className="mb-4" />
              <span className="mb-2 text-xs font-bold tracking-widest text-pink uppercase">
                How it works
              </span>
              <h2 className="max-w-md font-heading text-3xl font-bold sm:text-4xl">
                Start mastering AI in 3 steps
              </h2>
            </SectionReveal>

            <div className="flex flex-col gap-10">
              {/* Step 1 */}
              <SectionReveal>
                <div className="flex gap-5">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 font-heading text-xl font-bold ${STEP_RING.purple}`}>
                    1
                  </div>
                  <div>
                    <h3 className="mb-1 font-heading text-xl font-bold text-white">
                      Grab the app &amp; pick your path
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      Download on Android (or join the iPhone waitlist) and choose a module
                      like &ldquo;Mastering AI Prompts&rdquo; or &ldquo;How LLMs Work&rdquo;.
                    </p>
                  </div>
                </div>
              </SectionReveal>

              {/* Step 2 */}
              <SectionReveal delay={0.1}>
                <div className="flex gap-5">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 font-heading text-xl font-bold ${STEP_RING.green}`}>
                    2
                  </div>
                  <div>
                    <h3 className="mb-1 font-heading text-xl font-bold text-white">
                      Learn through bite-sized levels
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      Each lesson mixes short explanations with quick quizzes. You'll be done in
                      under 5 minutes.
                    </p>
                  </div>
                </div>
              </SectionReveal>

              {/* Step 3 */}
              <SectionReveal delay={0.2}>
                <div className="flex gap-5">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 overflow-hidden ${STEP_RING.pink}`}>
                    <MascotImage src="/mascots/trophy.png" alt="Trophy" size={36} className="!drop-shadow-none" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-heading text-xl font-bold text-white">
                      Earn XP, trophies &amp; streaks
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      Watch your XP climb, unlock trophies, and build a learning habit you'll
                      actually keep.
                    </p>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* ── STATS ──────────────────────────────────────────── */}
        <section className="bg-gradient-to-b from-purple/5 via-purple/10 to-purple/5 px-5 py-20 lg:py-28">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {STATS.map((s) => (
              <SectionReveal key={s.label}>
                <div>
                  <AnimCounter
                    target={s.target}
                    suffix={s.suffix}
                    className={`font-heading text-4xl font-bold sm:text-5xl ${STAT_COLOR[s.color]}`}
                  />
                  <p className="mt-2 text-sm text-text-muted">{s.label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>

        {/* ── TESTIMONIALS ───────────────────────────────────── */}
        <section id="testimonials" className="px-5 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionReveal className="mb-14 flex flex-col items-center text-center">
              <span className="mb-2 text-xs font-bold tracking-widest text-gold uppercase">
                What learners say
              </span>
              <h2 className="max-w-md font-heading text-3xl font-bold sm:text-4xl">
                Hear it from actual learners
              </h2>
            </SectionReveal>

            <div className="grid gap-5 md:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <SectionReveal key={t.name} delay={i * 0.1}>
                  <div className="flex h-full flex-col rounded-2xl border border-white/5 bg-card p-6">
                    <p className="mb-6 flex-1 text-text-muted italic leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple to-pink text-lg">
                        {t.emoji}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{t.name}</p>
                        <p className="text-xs text-text-muted">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ──────────────────────────────────────── */}
        <section id="get-spaiky" className="px-5 py-20 lg:py-28">
          <SectionReveal>
            <div className="relative mx-auto max-w-[700px] overflow-hidden rounded-3xl border border-purple/30 bg-gradient-to-br from-purple/10 via-green/5 to-pink/10 p-10 text-center sm:p-14">
              <div className="mb-4 inline-block animate-bobble">
                <MascotImage src="/mascots/final-cta.png" alt="Spaiky celebrating" size={130} />
              </div>
              <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
                Ready to speak AI?
              </h2>
              <p className="mx-auto mb-8 max-w-md text-text-muted leading-relaxed">
                1,200+ people are already learning with Spaiky. Get in and start your first
                lesson today.
              </p>
              <SmartCTA size="large" className="mx-auto" />
            </div>
          </SectionReveal>
        </section>
      </main>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer className="border-t border-white/5 px-5 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-text-muted sm:flex-row">
          <div className="flex items-center gap-2">
            <MascotImage src="/mascots/hero.png" alt="" size={24} className="!drop-shadow-none" />
            <span className="font-heading font-bold text-white">Spaiky</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
            <a href="#" className="transition-colors hover:text-white">Contact</a>
          </div>
        </div>
      </footer>

      {/* ── STICKY MOBILE CTA ────────────────────────────────── */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-background/90 p-3 backdrop-blur-lg md:hidden">
        <a
          href="#get-spaiky"
          className="flex w-full items-center justify-center rounded-xl bg-purple py-3 text-sm font-semibold text-white transition-all active:scale-[0.98]"
        >
          Get Started, It&apos;s Free
        </a>
      </div>
    </>
  );
}

/* ─── PHONE MOCKUP ──────────────────────────────────────────── */

function PhoneMockup() {
  return (
    <div className="w-[280px] rounded-[40px] border-2 border-white/10 bg-card p-3 shadow-[0_0_60px_rgba(124,58,237,0.15)]">
      <div className="overflow-hidden rounded-[28px] bg-background">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-2 text-[10px] text-text-muted">
          <span>9:41</span>
          <div className="mx-auto h-5 w-20 rounded-full bg-white/10" />
          <span className="flex gap-1">
            <span>📶</span>
            <span>🔋</span>
          </span>
        </div>

        {/* App header */}
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-1.5">
            <span className="text-base">🐾</span>
            <span className="font-heading text-sm font-bold text-white">Spaiky</span>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-orange/15 px-2.5 py-0.5 text-xs font-bold text-orange">
            🔥 7
          </div>
        </div>

        {/* Lesson card */}
        <div className="mx-3 mt-2 rounded-xl border border-white/5 bg-card p-3.5">
          <p className="text-[10px] font-semibold text-purple-light">Module 1 · Lesson 3</p>
          <p className="mt-0.5 text-sm font-bold text-white leading-tight">Writing Better Prompts</p>
          <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-purple to-purple-light" />
          </div>
          <p className="mt-1 text-right text-[10px] text-text-muted">60%</p>
        </div>

        {/* Quiz */}
        <div className="mx-3 mt-3 mb-2">
          <p className="mb-2 text-xs font-semibold text-white">What makes a great AI prompt?</p>
          <div className="flex flex-col gap-1.5">
            <QuizOption label="Use the biggest words" />
            <QuizOption label="Give clear context & specifics" correct />
            <QuizOption label="Write as much as possible" />
            <QuizOption label="Copy what others do" />
          </div>
        </div>

        {/* XP bar */}
        <div className="mx-3 mt-2 mb-4 flex items-center justify-between rounded-lg bg-green/10 px-3 py-2 text-xs font-bold text-green-light">
          <span>+10 XP earned</span>
          <span>🏆 Trophy close!</span>
        </div>
      </div>
    </div>
  );
}

function QuizOption({ label, correct = false }: { label: string; correct?: boolean }) {
  return (
    <div
      className={`rounded-lg border px-3 py-1.5 text-[11px] ${
        correct
          ? "border-green/50 bg-green/10 font-semibold text-green-light"
          : "border-white/5 bg-white/[0.02] text-text-muted"
      }`}
    >
      <span className="mr-1.5">{correct ? "●" : "○"}</span>
      {label}
    </div>
  );
}
