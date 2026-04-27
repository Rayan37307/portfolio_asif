import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Star, Dumbbell, Laptop, Sparkles, Brain, Code, Zap, Eye, Target, Trophy, Boxes } from "lucide-react";
import { FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { getLatestVideos } from "../lib/youtube";
import { getSortedPostsData } from "../lib/posts";
import { Reveal, StaggerContainer, StaggerItem, ParallaxHeroImage, AnimatedSVGLines, CountUp } from "./components/animations";
import IdeaMatrix from "./components/IdeaMatrix";
import Hero3D from "./components/Hero3D";

const WORDS = ["DISCIPLINE", "EXECUTION", "MINDSET", "STRATEGY", "RESULTS", "ACTION", "GROWTH", "FOCUS"];
const MARQUEE_ITEMS = [...WORDS, ...WORDS, ...WORDS];

const TESTIMONIALS = [
  { name: "@shariaral0015", role: "Follower", text: "ভাই আপনার কারণে আমার কনফিডেন্স লেভেল বেড়েছে। ধন্যবাদ এবং আল্লাহ আপনার মঙ্গল করুন বস।" },
  { name: "@NOT-_-BOSS-_-0", role: "Viewer", text: "আলহামদুলিল্লাহ আপনার জন্য আমি আমার জীবনের উদ্দেশ্য বুঝতে পারছি, ধন্যবাদ বস।" },
  { name: "@Masud-sk88", role: "Student", text: "আপনাকে সত্যি অনেক ভালো লাগে ভাই। আপনার ব্যবহার, বুঝানোর ধরণ আর ইসলাম নিয়ে কথা বলার জন্য আপনাকে অনেক ভালোবাসি।" },
  { name: "@samiul-topic", role: "Video Editor", text: "ভাই আপনার ভিডিও এডিটিং অনেক ভালো হয়, একদম প্রফেশনাল লেভেলের। অনেক কিছু শিখতে পারছি।" },
  { name: "@ImtiyazAbrar-b9h", role: "Supporter", text: "সেরা রে বস। আপনি তো আমাদের সত্যি একটা আইডল। আপনার কাজগুলো আমাদের অনেক অনুপ্রাণিত করে।" },
  { name: "@nazrulmahmudul67", role: "Student", text: "সৎভাবে মন থেকে মানুষকে সহায়তা করতে চাইলে আপনি সফল হতে বাধ্য। আপনার ভিডিওগুলো সত্যি অনেক কাজের।" },
];

export default async function Home() {
  const videos = await getLatestVideos("UCE6hrW3g0K_sj3XLvBxIC0g", 3);
  const posts = getSortedPostsData().slice(0, 3);

  return (
    <main className="flex flex-col gap-16 pb-16">

      {/* ─────────────── HERO ─────────────────────── */}
      <section className="px-4 md:px-8">
        <Reveal delay={0}>
          <div className="relative w-full h-[75vh] min-h-[600px] rounded-[32px] overflow-hidden bg-[#0a0f1a] flex flex-col justify-center items-center text-center">

            {/* Background Image */}
            <ParallaxHeroImage
              src="/hero_bg.png"
              alt="Aesthetic background"
              className="object-cover opacity-50 scale-105"
            />

            {/* 3D Abstract Object */}
            {/* <Hero3D /> */}

            {/* Corner Brackets */}
            <div className="bracket-tl hidden md:block"></div>
            <div className="bracket-tr hidden md:block"></div>
            <div className="bracket-bl hidden md:block"></div>
            <div className="bracket-br hidden md:block"></div>

            {/* Crosshairs */}
            <div className="absolute left-[20%] top-[40%] text-blue-400/50 text-xl font-light hidden md:block">+</div>
            <div className="absolute left-[50%] top-[40%] text-blue-400/50 text-xl font-light hidden md:block">+</div>
            <div className="absolute right-[20%] top-[40%] text-blue-400/50 text-xl font-light hidden md:block">+</div>

            {/* Main Title */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex items-start">
                <h1 className="heading-display text-white text-[clamp(4rem,15vw,12rem)] tracking-tighter leading-none drop-shadow-[0_4px_32px_rgba(37,99,235,0.3)]">
                  asif
                </h1>
                <span className="text-white text-[clamp(1.5rem,4vw,3rem)] font-light mt-[clamp(0.5rem,2vw,1.5rem)] ml-1">®</span>
              </div>
              <p className="text-white/80 text-xl md:text-3xl font-light tracking-wide mt-2">
                through my mind
              </p>
            </div>

            {/* Floating Left Text */}
            <Reveal delay={0.4} className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-[300px] text-left z-10 hidden md:block">
              <p className="text-white/90 text-sm leading-relaxed font-medium mb-5">
                — Build real momentum and turn fleeting motivation—habits, daily discipline, or shared visions into lasting results.
              </p>
              <div className="flex gap-3">
                <a href="https://youtube.com/channel/UCE6hrW3g0K_sj3XLvBxIC0g" target="_blank" rel="noopener noreferrer" className="btn bg-blue-500/20 text-white border border-blue-400/30 hover:bg-blue-500/30 hover:border-blue-400/60 text-xs px-4 py-2 backdrop-blur-sm">
                  <FaYoutube className="w-4 h-4" /> YouTube
                </a>
                <a href="https://www.facebook.com/MuhammadAsifRayhanOfficial" target="_blank" rel="noopener noreferrer" className="btn bg-blue-500/20 text-white border border-blue-400/30 hover:bg-blue-500/30 hover:border-blue-400/60 text-xs px-4 py-2 backdrop-blur-sm">
                  <FaFacebook className="w-4 h-4" /> Facebook
                </a>
              </div>
            </Reveal>

            {/* Floating Right Card */}

          </div>
        </Reveal>
      </section>

      {/* ─────────────── LOGO MARQUEE ──────────────────── */}
      <section className="px-4 md:px-8 border-y border-border py-4 bg-white flex items-center justify-between gap-8">
        <div className="flex-1 marquee-wrap opacity-70">
          <div className="marquee-track">
            <div className="marquee-content grayscale">
              {["CONTENT", "CREATION", "EDUCATION", "TECHNOLOGY", "ENTERTAINMENT"].map((logo) => (
                <span key={logo} className="heading text-xl md:text-3xl text-black">
                  {logo}
                </span>
              ))}
            </div>
            <div className="marquee-content grayscale" aria-hidden="true">
              {["CONTENT", "CREATION", "EDUCATION", "TECHNOLOGY", "ENTERTAINMENT"].map((logo) => (
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
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-blue-500 text-blue-500" />)}
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
            <span className="text-blue-500/60 text-[1.2em] leading-none absolute -ml-[0.6em] mt-[-0.1em]">"“</span>
            I don't just create content. I engineer mindsets, dissect raw truths, and build systems that turn passive observers into <span className="gradient-text">relentless executors</span>.<span className="text-blue-500/60">”</span>
          </h2>
        </Reveal>
      </section>

      <div className="px-4 md:px-8"><div className="rule" /></div>

      {/* ─────────────── ABOUT & STATS ──────────────── */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_8px_40px_rgba(37,99,235,0.12)]">
            <Image src="/creator_portrait.jpg" alt="Muhammad Asif Raihan" fill className="object-cover" />
          </div>
        </Reveal>
        <div>
          <Reveal delay={0.1}>
            <p className="eyebrow mb-4">The Story</p>
            <h2 className="heading-display text-4xl md:text-5xl mb-6 gradient-text-warm">
              Who Am I?
            </h2>
            <div className="flex flex-col gap-4 text-muted text-lg font-medium leading-relaxed mb-8">
              <p>I started with zero leverage—just a relentless drive to understand what makes top performers tick. Over the years, I've dissected the digital landscape, turning complex psychology into actionable execution systems.</p>
              <p>Today, I help millions of creators and entrepreneurs shatter their own mental ceilings. My philosophy is simple: <span className="text-blue-600 font-bold">no fluff, pure signal</span>. Massive action multiplied by unyielding consistency.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <CountUp target={150} suffix="K+" className="heading-display text-3xl md:text-4xl block gradient-text" />
                <div className="text-xs uppercase tracking-widest text-muted font-bold mt-1">YouTube</div>
              </div>
              <div>
                <CountUp target={300} suffix="K+" className="heading-display text-3xl md:text-4xl block gradient-text" />
                <div className="text-xs uppercase tracking-widest text-muted font-bold mt-1">Facebook</div>
              </div>
              <div>
                <CountUp target={1} suffix="Y+" className="heading-display text-3xl md:text-4xl block gradient-text" />
                <div className="text-xs uppercase tracking-widest text-muted font-bold mt-1">Creating</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="px-4 md:px-8"><div className="rule" /></div>

      {/* ─────────────── CONTENT IDEAS GRAPH ─────────────── */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <Reveal>
          <p className="eyebrow mb-4">Ecosystem</p>
          <h2 className="heading-display text-4xl md:text-5xl mb-12">
            The Idea Matrix.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <IdeaMatrix />
        </Reveal>
      </section>

      <div className="px-4 md:px-8"><div className="rule" /></div>

      {/* ─────────────── BACKBENCHERS UNIVERSITY ──── */}
      <section id="masterclass" className="px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <Reveal>
          <div className="card bg-gradient-to-br from-[#eef2ff] to-[#f9f9ff] border-none p-8 md:p-16 flex flex-col items-center text-center relative overflow-hidden">
            {/* Subtle glow behind */}
            <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-400/8 rounded-full blur-[100px] pointer-events-none" />
            <p className="eyebrow mb-4">The Masterclass</p>
            <h2 className="heading-display text-[clamp(2.5rem,6vw,4.5rem)] mb-6 relative">
              Backbenchers <span className="gradient-text">University.</span>
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto mb-12">
              Not for the apathetic. A rigorous, cohort-based curriculum designed to strip away your excuses, rebuild your mental models, and install the operating system of high performance.
            </p>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1000px] text-left mb-12">
              {[
                { title: "Mindset Protocol", desc: "Eradicate limiting beliefs and build undeniable confidence." },
                { title: "Execution Engine", desc: "Daily systems to guarantee deep work and compound output." },
                { title: "The Inner Circle", desc: "Direct access to a network of like-minded builders." }
              ].map((feature, i) => (
                <StaggerItem key={i}>
                  <div className="bg-white p-6 rounded-[16px] shadow-sm border border-border/50 hover:border-blue-400/30 hover:shadow-[0_4px_24px_rgba(37,99,235,0.08)] transition-all">
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

      {/* ─────────────── PHILOSOPHY (REDESIGNED - LIGHT) ── */}
      <section id="method" className="px-4 md:px-8 max-w-[1500px] mx-auto w-full">
        <div className="bg-white rounded-[40px] p-8 md:p-20 relative overflow-hidden border border-border/50">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/3 rounded-full blur-[100px] pointer-events-none" />

          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div className="max-w-[600px]">
                <p className="eyebrow mb-4">The Method</p>
                <h2 className="heading-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1]">
                  Strategy. Discipline. <br />
                  <span className="gradient-text">Massive Action.</span>
                </h2>
              </div>
              <p className="text-muted text-lg max-w-[300px] font-medium leading-relaxed">
                A precision-engineered framework for personal and professional peak performance.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              { 
                n: "01", 
                t: "Awaken", 
                b: "Understanding your goals, fears, and challenges through deep introspection and brutal reality checks.",
                icon: Eye,
                color: "text-blue-400"
              },
              { 
                n: "02", 
                t: "Build", 
                b: "Transforming raw motivation into robust, repeatable systems and unbreakable daily habits.",
                icon: Boxes,
                color: "text-blue-500"
              },
              { 
                n: "03", 
                t: "Conquer", 
                b: "Executing with clarity and precision to achieve your ultimate potential in life and business.",
                icon: Trophy,
                color: "text-blue-600"
              },
            ].map(({ n, t, b, icon: Icon, color }) => (
              <StaggerItem key={n}>
                <div className="glass-card p-10 h-full relative group overflow-hidden bg-[#fafafa] border-border/40">
                  {/* Large Background Number */}
                  <div className="absolute -right-4 -bottom-8 heading-display text-[12rem] text-outline group-hover:opacity-80 transition-opacity">
                    {n}
                  </div>

                  <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 border border-border shadow-sm group-hover:border-blue-500/50 transition-colors`}>
                    <Icon className={`w-7 h-7 ${color}`} />
                  </div>

                  <h3 className="heading text-3xl text-black mb-4 relative z-10 group-hover:text-blue-600 transition-colors">
                    {t}
                  </h3>
                  <p className="text-muted leading-relaxed text-base relative z-10">
                    {b}
                  </p>
                  
                  {/* Hover Accent Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="px-4 md:px-8"><div className="rule" /></div>

      {/* ─────────────── PERSONAL INTERESTS (REDESIGNED) ── */}
      <section id="interests" className="px-4 md:px-8 max-w-[1500px] mx-auto w-full">
        <div className="bg-white rounded-[40px] p-8 md:p-20 relative overflow-hidden border border-border/50">
          {/* Ambient Glows */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div className="max-w-[600px]">
                <p className="eyebrow mb-4">Beyond Work</p>
                <h2 className="heading-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1]">
                  What Drives <br />
                  <span className="gradient-text">My Ambition.</span>
                </h2>
              </div>
              <p className="text-muted text-lg max-w-[300px] font-medium leading-relaxed">
                The core pillars that fuel my consistency and creativity.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative z-10">
            {[
              {
                icon: Dumbbell,
                title: "Fitness & Health",
                desc: "Discipline starts with the body. Early morning workouts aren't optional—they're the foundation.",
                tags: ["Early Riser", "Strength Training", "Mental Clarity"],
                n: "01"
              },
              {
                icon: Laptop,
                title: "Tech & Tools",
                desc: "Obsessed with optimizing workflows. The right system can 10x your output overnight.",
                tags: ["Productivity", "Automation", "Workflow Design"],
                n: "02"
              },
              {
                icon: Sparkles,
                title: "AI Specialist",
                desc: "Living at the edge of what's possible. Exploring AI tools before they go mainstream.",
                tags: ["Machine Learning", "Prompt Engineering", "Future Tech"],
                n: "03"
              },
            ].map(({ icon: Icon, title, desc, tags, n }) => (
              <StaggerItem key={title}>
                <div className="glass-card p-10 h-full relative group overflow-hidden bg-[#fafafa] border-border/40">
                  {/* Large Background Icon Outline */}
                  <div className="absolute -right-8 -bottom-8 opacity-20 group-hover:opacity-30 transition-opacity">
                    <Icon className="w-[12rem] h-[12rem] text-blue-500/20 stroke-[1px]" />
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 border border-border shadow-sm group-hover:border-blue-500/50 transition-colors">
                    <Icon className="w-7 h-7 text-blue-500" />
                  </div>

                  <h3 className="heading text-2xl text-black mb-4 relative z-10 group-hover:text-blue-600 transition-colors">{title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-8 relative z-10">{desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                    {tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-white border border-border text-muted uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover Accent Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal delay={0.2}>
            <div className="glass-card bg-[#fcfcfc] p-8 md:p-12 border-border/60 relative z-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-transparent to-blue-50/30 pointer-events-none" />
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center relative z-10">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <h3 className="heading text-2xl">Currently Exploring</h3>
                  </div>
                  <p className="text-muted text-sm">The frontier I'm diving deep into right now.</p>
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {[
                    { icon: Brain, label: "AI Agents", sub: "Autonomous workflows" },
                    { icon: Code, label: "No-Code Tools", sub: "Building without code" },
                    { icon: Zap, label: "Content Velocity", sub: "Scale without burnout" },
                  ].map(({ icon: Icon, label, sub }) => (
                    <div key={label} className="group/item cursor-default">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 shadow-sm group-hover/item:border-blue-400 group-hover/item:shadow-md transition-all">
                          <Icon className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                          <h4 className="heading text-sm mb-1 group-hover/item:text-blue-600 transition-colors">{label}</h4>
                          <p className="text-muted text-[11px] leading-tight font-medium uppercase tracking-tighter">{sub}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="px-4 md:px-8"><div className="rule" /></div>

      {/* ─────────────── CONTENT ──────────────────── */}
      <section id="content" className="px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <h2 className="heading-display text-4xl md:text-5xl">Latest Contents</h2>
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
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <Play className="w-4 h-4 text-white ml-1" />
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
                  <Image src={video.thumb} alt={video.title} fill className="vthumb object-cover" />
                  <div className="vplay">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <Play className="w-4 h-4 text-white ml-1" />
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
      <section id="journal" className="px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <h2 className="heading-display text-4xl md:text-5xl">Journal</h2>
            </div>
            <Link href="/blog" className="btn btn-outline text-sm">
              Read All
            </Link>
          </div>
        </Reveal>

        <StaggerContainer className="flex flex-col gap-4">
          {posts.length > 0 ? posts.map((post: any, i: number) => (
            <StaggerItem key={post.id || i}>
              <Link href={`/blog/${post.id}`} className="irow">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 flex-1">
                  <span className="text-xs font-semibold text-muted uppercase tracking-widest md:w-[120px] shrink-0">
                    {post.date}
                  </span>
                  <h3 className="heading text-xl md:text-2xl">{post.title}</h3>
                </div>
                <span className="irow-arrow hidden md:block">
                  <ArrowRight size={24} strokeWidth={1.5} />
                </span>
              </Link>
            </StaggerItem>
          )) : (
            <p className="text-muted">No posts available.</p>
          )}
        </StaggerContainer>
      </section>

      <div className="px-4 md:px-8"><div className="rule" /></div>

{/* ─────────────── REAL RESULTS ─────────────── */}
      <section className="py-12 md:py-20 w-full overflow-hidden">
        <div className="px-4 md:px-8 max-w-[1400px] mx-auto w-full mb-12">
          <Reveal>
            <p className="eyebrow mb-4">Community Impact</p>
            <h2 className="heading-display text-[clamp(2rem,5vw,3.5rem)]">Real Results.</h2>
          </Reveal>
        </div>

        <div className="marquee-wrap">
          <div className="marquee-track" style={{ animationDuration: '40s' }}>
            <div className="marquee-content" style={{ gap: '2rem', paddingRight: '2rem' }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="card p-8 bg-[#f9f9f9] border-none w-[320px] md:w-[400px] shrink-0 h-[260px] flex flex-col justify-between cursor-default">
                  <div>
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map(star => <Star key={star} size={14} className="fill-blue-500 text-blue-500" />)}
                    </div>
                    <p className="text-muted leading-relaxed text-sm">"{t.text}"</p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div>
                      <div className="heading text-sm">{t.name}</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted font-bold mt-1">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="marquee-content" style={{ gap: '2rem', paddingRight: '2rem' }} aria-hidden="true">
              {TESTIMONIALS.map((t, i) => (
                <div key={`dup-${i}`} className="card p-8 bg-[#f9f9f9] border-none w-[320px] md:w-[400px] shrink-0 h-[260px] flex flex-col justify-between cursor-default">
                  <div>
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map(star => <Star key={star} size={14} className="fill-blue-500 text-blue-500" />)}
                    </div>
                    <p className="text-muted leading-relaxed text-sm">"{t.text}"</p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div>
                      <div className="heading text-sm">{t.name}</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted font-bold mt-1">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 md:px-8"><div className="rule" /></div>

      {/* ─────────────── CTA / COMMUNITY (REDESIGNED - IMAGE STYLE) ── */}
      <footer className="mt-16 px-4 md:px-8 mb-8">
        <div className="bg-[#4f46e5] rounded-[32px] p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden shadow-[0_24px_48px_rgba(79,70,229,0.2)]">
          
          {/* Subtle Geometric Patterns (Optional, matching image) */}
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-white/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-white/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Top Icon / Logo */}
          <div className="w-20 h-20 bg-[#0a0f1a] rounded-[24px] overflow-hidden flex items-center justify-center mb-10 shadow-2xl relative z-10 border border-white/10">
            <Image 
              src="/bu_logo.jpg" 
              alt="Backbenchers University Logo" 
              width={80} 
              height={80} 
              className="object-cover"
            />
          </div>

          <Reveal className="relative z-10 w-full">
            <h2 className="text-white text-3xl md:text-5xl font-medium mb-4 tracking-tight">
              Let's Build Your <span className="font-bold">Next Vision</span>
            </h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <h3 className="text-white text-3xl md:text-5xl font-bold">Together.</h3>
              <a href="https://chat.whatsapp.com/FVioaoB7Ew7EI2w5ZSaVW4" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:scale-105 transition-transform shadow-lg group">
                Join WhatsApp Hub
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Checkmark Benefits */}
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-white/90 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <Star size={10} className="fill-white text-white" />
                </div>
                Real Raw Insights
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <Star size={10} className="fill-white text-white" />
                </div>
                No Fluff Content
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <Star size={10} className="fill-white text-white" />
                </div>
                Direct Access
              </div>
            </div>
          </Reveal>

          {/* Minimal Footer Bottom */}
          <div className="w-full mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
            <div className="heading-display text-white text-2xl">
              asif®
            </div>
            <div className="flex gap-8">
              {["YouTube", "Facebook", "LinkedIn"].map((l) => (
                <a key={l} href="#" className="text-white/60 hover:text-white text-sm font-bold transition-colors">{l}</a>
              ))}
            </div>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
              © 2026 MUHAMMAD ASIF RAIHAN
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
