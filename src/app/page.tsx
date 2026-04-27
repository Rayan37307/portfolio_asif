import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";
import { FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { getLatestVideos } from "../lib/youtube";
import { Reveal, StaggerContainer, StaggerItem } from "./components/animations";

const WORDS = ["DISCIPLINE", "EXECUTION", "MINDSET", "STRATEGY", "RESULTS", "ACTION", "GROWTH", "FOCUS"];
const MARQUEE_ITEMS = [...WORDS, ...WORDS, ...WORDS];

export default async function Home() {
  const videos = await getLatestVideos("UCE6hrW3g0K_sj3XLvBxIC0g", 3);

  return (
    <main className="flex flex-col gap-16 pb-16">

      {/* ─────────────── HERO ─────────────────────── */}
      <section className="px-4 md:px-8">
        <Reveal delay={0}>
          <div className="relative w-full h-[75vh] min-h-[600px] rounded-[32px] overflow-hidden bg-[#111] flex flex-col justify-center items-center text-center">
            
            {/* Background Image */}
            <Image 
              src="/hero_bg.png" 
              alt="Aesthetic background" 
              fill 
              priority
              className="object-cover opacity-80 mix-blend-luminosity" 
            />
            
            {/* Corner Brackets */}
            <div className="bracket-tl hidden md:block"></div>
            <div className="bracket-tr hidden md:block"></div>
            <div className="bracket-bl hidden md:block"></div>
            <div className="bracket-br hidden md:block"></div>

            {/* Crosshairs */}
            <div className="absolute left-[20%] top-[40%] text-white/50 text-xl font-light hidden md:block">+</div>
            <div className="absolute left-[50%] top-[40%] text-white/50 text-xl font-light hidden md:block">+</div>
            <div className="absolute right-[20%] top-[40%] text-white/50 text-xl font-light hidden md:block">+</div>

            {/* Main Title */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex items-start">
                <h1 className="heading-display text-white text-[clamp(4rem,15vw,12rem)] tracking-tighter leading-none">
                  asif
                </h1>
                <span className="text-white text-[clamp(1.5rem,4vw,3rem)] font-light mt-[clamp(0.5rem,2vw,1.5rem)] ml-1">®</span>
              </div>
              <p className="text-white/80 text-xl md:text-3xl font-light tracking-wide mt-2">
                through my mind
              </p>
            </div>

            {/* Floating Left Text */}
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-[300px] text-left z-10 hidden md:block">
              <p className="text-white/90 text-sm leading-relaxed font-medium">
                — Build real momentum and turn fleeting motivation—habits, daily discipline, or shared visions into lasting results.
              </p>
            </div>

            {/* Floating Right Card */}
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-10 hidden lg:flex flex-col gap-4">
              
              {/* Clients Pill */}
              <div className="self-end bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-2 px-4 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full bg-gray-300 border-2 border-transparent overflow-hidden">
                       <Image src="/creator_portrait.jpg" alt="Client" width={24} height={24} className="object-cover w-full h-full grayscale" />
                    </div>
                  ))}
                </div>
                <span className="text-white text-xs font-medium">Happy creators worldwide</span>
              </div>

              {/* Main Floating Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-[240px] text-left shadow-2xl">
                <h3 className="text-white font-medium text-sm leading-tight mb-3">
                  Professional creative<br/>entrepreneur
                </h3>
                <div className="w-full h-[120px] rounded-lg overflow-hidden relative mb-4">
                  <Image src="/creator_portrait.jpg" alt="Creator" fill className="object-cover grayscale" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-xs">© 2026</span>
                  <a href="#" className="bg-white text-black text-xs font-bold py-1.5 px-3 rounded-full hover:scale-105 transition-transform">
                    Let's chat
                  </a>
                </div>
              </div>
            </div>

          </div>
        </Reveal>
      </section>

      {/* ─────────────── LOGO MARQUEE ──────────────────── */}
      <section className="px-4 md:px-8 border-y border-border py-4 bg-white flex items-center justify-between gap-8">
        <div className="flex-1 marquee-wrap opacity-60">
          <div className="marquee-track">
            <div className="marquee-content grayscale">
              {["FORBES", "TECHCRUNCH", "ENTREPRENEUR", "GQ", "BUSINESS INSIDER"].map((logo) => (
                <span key={logo} className="heading text-xl md:text-3xl text-black">
                  {logo}
                </span>
              ))}
            </div>
            <div className="marquee-content grayscale" aria-hidden="true">
              {["FORBES", "TECHCRUNCH", "ENTREPRENEUR", "GQ", "BUSINESS INSIDER"].map((logo) => (
                <span key={`dup-${logo}`} className="heading text-xl md:text-3xl text-black">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Rating Right Side */}
        <div className="hidden md:flex flex-col items-end flex-shrink-0">
          <div className="flex gap-1 mb-1">
            {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-black text-black" />)}
            <span className="text-xs font-bold ml-1">4.9/5</span>
          </div>
          <span className="text-[10px] text-muted uppercase tracking-wider font-semibold">Trusted by 100+ businesses</span>
        </div>
      </section>

      {/* ─────────────── QUOTE SECTION ────────────────────── */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto w-full py-12 md:py-20 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        <Reveal className="w-full md:w-1/4 pt-2">
          <div className="flex flex-col">
            <h3 className="heading text-lg">Muhammad Asif</h3>
            <p className="text-muted text-sm font-medium">Professional creator</p>
          </div>
        </Reveal>
        
        <Reveal delay={0.1} className="w-full md:w-3/4">
          <h2 className="heading-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.1] tracking-tight">
            <span className="text-muted text-[1.2em] leading-none absolute -ml-[0.6em] mt-[-0.1em]">"</span>
            I don't just create videos capture raw emotions, subtle moments, and untold stories that make life beautiful.<span className="text-muted">"</span>
          </h2>
        </Reveal>
      </section>

      <div className="px-4 md:px-8"><div className="rule" /></div>

      {/* ─────────────── ABOUT & STATS ──────────────── */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden">
            <Image src="/creator_portrait.jpg" alt="Muhammad Asif Raihan" fill className="object-cover grayscale" />
          </div>
        </Reveal>
        <div>
          <Reveal delay={0.1}>
            <p className="eyebrow mb-4">The Story</p>
            <h2 className="heading-display text-4xl md:text-5xl mb-6">
              Who Am I?
            </h2>
            <div className="flex flex-col gap-4 text-muted text-lg font-medium leading-relaxed mb-8">
              <p>Started with nothing but a relentless drive to understand what makes people tick. For years I navigated the digital world, distilling complex strategies into actionable systems.</p>
              <p>Today I help creators and entrepreneurs break through their own ceilings. My approach: <span className="text-black">no fluff, just signal</span>. Small strategic actions multiplied by unyielding consistency.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex gap-8 pt-8 border-t border-border">
              {[["130K+","YouTube"],["300K+","Facebook"],["5Y+","Creating"]].map(([n, l]) => (
                <div key={l}>
                  <div className="heading-display text-3xl md:text-4xl">{n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted font-bold mt-1">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="px-4 md:px-8"><div className="rule" /></div>

      {/* ─────────────── BACKBENCHERS UNIVERSITY ──── */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <Reveal>
          <div className="card bg-[#f9f9f9] border-none p-8 md:p-16 flex flex-col items-center text-center">
            <p className="eyebrow mb-4">The Masterclass</p>
            <h2 className="heading-display text-[clamp(2.5rem,6vw,4.5rem)] mb-6">
              Backbenchers University.
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto mb-12">
              Not for the apathetic. A rigorous, cohort-based curriculum designed to strip away your excuses, rebuild your mental models, and install the operating system of high performance.
            </p>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1000px] text-left mb-12">
              {[
                { title:"Mindset Protocol", desc:"Eradicate limiting beliefs and build undeniable confidence." },
                { title:"Execution Engine", desc:"Daily systems to guarantee deep work and compound output." },
                { title:"The Inner Circle", desc:"Direct access to a network of like-minded builders." }
              ].map((feature, i) => (
                <StaggerItem key={i}>
                  <div className="bg-white p-6 rounded-[16px] shadow-sm border border-border/50">
                    <h3 className="heading text-xl mb-2">{feature.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <a href="#" className="btn btn-fill">Apply for the next cohort</a>
          </div>
        </Reveal>
      </section>

      <div className="px-4 md:px-8"><div className="rule" /></div>

      {/* ─────────────── PHILOSOPHY ───────────────── */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <Reveal>
          <p className="eyebrow mb-4">The Method</p>
          <h2 className="heading-display text-[clamp(2rem,5vw,3.5rem)] mb-12 max-w-[600px]">
            Strategy. Discipline.<br />Action.
          </h2>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { n:"01", t:"Awaken", b:"Understanding your goals, fears, and challenges through deep introspection and brutal reality checks." },
            { n:"02", t:"Build",  b:"Transforming raw motivation into robust, repeatable systems and unbreakable daily habits." },
            { n:"03", t:"Conquer",b:"Executing with clarity and precision to achieve your ultimate potential in life and business." },
          ].map(({ n, t, b }) => (
            <StaggerItem key={n}>
              <div className="card p-8 bg-[#f9f9f9] border-none">
                <div className="heading-display text-5xl text-muted/30 mb-6">{n}</div>
                <h3 className="heading text-2xl mb-3">{t}</h3>
                <p className="text-muted leading-relaxed text-sm">{b}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <div className="px-4 md:px-8"><div className="rule" /></div>

      {/* ─────────────── CONTENT ──────────────────── */}
      <section id="content" className="px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h2 className="heading-display text-4xl md:text-5xl">Latest Work</h2>
            </div>
            <a href="https://youtube.com/channel/UCE6hrW3g0K_sj3XLvBxIC0g" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-sm">
              All Videos
            </a>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.length > 0 ? videos.map((v, idx) => (
            <StaggerItem key={v.id}>
              <a href={v.link} target="_blank" rel="noopener noreferrer" className="vcard border-none bg-[#f9f9f9]">
                <div className="relative aspect-video overflow-hidden rounded-t-[24px]">
                  <Image src={v.thumbnail} alt={v.title} fill className="vthumb object-cover" />
                  <div className="vplay">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                      <Play className="w-4 h-4 text-black ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs tracking-widest uppercase font-bold text-muted mb-2 block">Video {idx + 1}</span>
                  <h3 className="vtitle heading text-xl leading-tight mb-2">{v.title}</h3>
                </div>
              </a>
            </StaggerItem>
          )) : <p className="text-muted">No videos found.</p>}
        </StaggerContainer>
      </section>

      <div className="px-4 md:px-8"><div className="rule" /></div>

      {/* ─────────────── BANGER CONTENTS ──────────── */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <Reveal>
          <div className="mb-8">
            <p className="eyebrow mb-2">Must Watch</p>
            <h2 className="heading-display text-4xl md:text-5xl mb-4">Banger Contents.</h2>
            <p className="text-muted text-sm max-w-[500px]">Hand-picked videos that hit different. These are the ones that changed everything.</p>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: "O7cYmFH6GwE", thumb: "/banger-1.avif", title: "Education Trap: যেভাবে 99.63% মানুষ ভুল পথে দৌড়াচ্ছে 🤫", views: "Viral" },
          ].map((video, i) => (
            <StaggerItem key={i}>
              <a href={`https://youtu.be/${video.id}`} target="_blank" rel="noopener noreferrer" className="vcard border-none bg-[#f9f9f9]">
                <div className="relative aspect-video overflow-hidden rounded-t-[24px]">
                  <Image src={video.thumb} alt={video.title} fill className="vthumb object-cover grayscale" />
                  <div className="vplay">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                      <Play className="w-4 h-4 text-black ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs tracking-widest uppercase font-bold text-muted mb-2 block">🔥 {video.views}</span>
                  <h3 className="vtitle heading text-xl leading-tight mb-2">{video.title}</h3>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <div className="px-4 md:px-8"><div className="rule" /></div>

      {/* ─────────────── INSIGHTS / BLOG ─────────────────── */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h2 className="heading-display text-4xl md:text-5xl">Journal</h2>
            </div>
            <Link href="/blog" className="btn btn-outline text-sm">
              Read All
            </Link>
          </div>
        </Reveal>

        <StaggerContainer className="flex flex-col gap-4">
          {[
            { date:"Apr 12, 2026", title:"Why Your 'Perfect Plan' is Killing Your Progress" },
            { date:"Mar 28, 2026", title:"The Compound Effect of Daily Discipline" },
            { date:"Mar 14, 2026", title:"How I Built 130K Subscribers From Zero" },
          ].map((post, i) => (
            <StaggerItem key={i}>
              <a href="#" className="irow">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 flex-1">
                  <span className="text-xs font-semibold text-muted uppercase tracking-widest md:w-[120px] shrink-0">
                    {post.date}
                  </span>
                  <h3 className="heading text-xl md:text-2xl">{post.title}</h3>
                </div>
                <span className="irow-arrow hidden md:block">
                  <ArrowRight size={24} strokeWidth={1.5} />
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <div className="px-4 md:px-8"><div className="rule" /></div>

      {/* ─────────────── TESTIMONIALS ─────────────── */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <Reveal>
          <p className="eyebrow mb-4">Community Impact</p>
          <h2 className="heading-display text-[clamp(2rem,5vw,3.5rem)] mb-12">Real Results.</h2>
        </Reveal>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name:"Sarah J.",  role:"Entrepreneur", text:"The mindset shift completely changed my business trajectory. Unbelievable value." },
            { name:"Marcus T.", role:"Creator",       text:"Rare to find content that balances high-level strategy with actionable tactics. Real deal." },
            { name:"Elena R.",  role:"Designer",      text:"Stuck for months. The frameworks gave me the exact roadmap I needed to scale." },
          ].map((t, i) => (
            <StaggerItem key={i}>
              <div className="card p-8 bg-[#f9f9f9] border-none h-full flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-black text-black" />)}
                  </div>
                  <p className="text-muted leading-relaxed text-sm mb-8">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gray-200" />
                  <div>
                    <div className="heading text-sm">{t.name}</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted font-bold mt-1">{t.role}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ─────────────── FOOTER ───────────────────── */}
      <footer className="mt-8 px-4 md:px-8">
        <div className="bg-[#111] rounded-[32px] p-8 md:p-16 flex flex-col items-center text-center relative overflow-hidden">
          
          <Reveal>
            <h2 className="heading-display text-white text-[clamp(3rem,8vw,6rem)] leading-none mb-8">
              Let's create <br/> something real.
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="btn btn-fill bg-white text-black hover:bg-gray-200 text-lg px-8 py-4">
                Get in touch
              </a>
            </div>
          </Reveal>

          <div className="w-full mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="heading-display text-white text-2xl">
              asif®
            </div>
            <div className="flex gap-6">
              {[["YouTube","https://youtube.com/channel/UCE6hrW3g0K_sj3XLvBxIC0g"],["Facebook","#"],["Instagram","#"]].map(([l,h]) => (
                <a key={l} href={h} className="text-white/60 hover:text-white text-sm font-medium transition-colors">{l}</a>
              ))}
            </div>
            <p className="text-white/40 text-xs font-medium">
              © 2026 All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
