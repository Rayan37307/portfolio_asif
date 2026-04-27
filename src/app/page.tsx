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

      {/* ─────────────── HERO (REDESIGNED - SYNTH STYLE) ────── */}
      <section className="px-4 md:px-8 pt-4">
        <div className="relative w-full h-[85vh] min-h-[700px] rounded-[40px] overflow-hidden bg-[#0a0f1a] flex flex-col items-center justify-center">
          
          {/* Large Background Typography */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden">
            <h1 className="heading-display text-[25vw] text-white/[0.03] leading-none tracking-tighter uppercase">
              ASIF
            </h1>
          </div>

          {/* Script Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <Reveal delay={0.6}>
              <span className="font-script text-[clamp(2rem,6vw,6rem)] text-blue-400 drop-shadow-[0_0_40px_rgba(37,99,235,0.5)] rotate-[-4deg] translate-y-[35%] translate-x-[2%] opacity-90 leading-tight">
                Engineering Mindsets
              </span>
            </Reveal>
          </div>

          {/* Central Floating Image */}
          <div className="relative z-10 w-full max-w-[500px] aspect-[4/5] md:aspect-square flex items-center justify-center">
            <Reveal delay={0.2} direction="up">
              <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[550px] rounded-[32px] overflow-hidden shadow-[0_48px_100px_rgba(0,0,0,0.8)] border border-white/10 group">
                <Image
                  src="/creator_portrait.jpg"
                  alt="Muhammad Asif"
                  fill
                  className="object-cover opacity-40 scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-60" />
              </div>
            </Reveal>
          </div>

          {/* Side Content: Left (Details) */}
          <div className="absolute bottom-12 left-12 max-w-[280px] hidden lg:block z-30">
            <Reveal delay={0.4} direction="left">
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">The Vision</p>
              <h4 className="text-white text-xl font-medium mb-4 leading-tight">
                Built for those who refuse to be average.
              </h4>
              <p className="text-white/40 text-xs leading-relaxed mb-8">
                Turning raw motivation into repeatable systems. Join the network of high-performance builders.
              </p>
              <div className="flex gap-4">
                <a href="https://youtube.com/channel/UCE6hrW3g0K_sj3XLvBxIC0g" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <FaYoutube size={16} />
                </a>
                <a href="https://www.facebook.com/MuhammadAsifRayhanOfficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <FaFacebook size={16} />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Side Content: Right (Card) */}
          <div className="absolute bottom-12 right-12 hidden lg:block z-30">
            <Reveal delay={0.5} direction="right">
              <div className="glass-dark p-8 w-[320px] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
                <p className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Latest Achievement</p>
                <h4 className="text-white text-lg font-bold mb-2">300K+ Facebook Followers</h4>
                <p className="text-white/40 text-xs mb-6">Building the largest performance-driven mindset community in the region.</p>
                <a href="https://www.facebook.com/MuhammadAsifRayhanOfficial" target="_blank" rel="noopener noreferrer" className="text-white text-xs font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Visit Facebook <ArrowRight size={14} className="text-blue-400" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Nav Hint (Top Left) */}
          <div className="absolute top-12 left-12 hidden md:flex items-center gap-3 z-30">
            <div className="w-8 h-[1px] bg-white/20" />
            <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Muhammad Asif</span>
          </div>


        </div>
      </section>

      {/* ─────────────── LOGO MARQUEE ──────────────────── */}
      <section className="px-4 md:px-8 border-y border-white/5 py-8 bg-black flex items-center justify-between gap-8">
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
                <span key={`dup-${logo}`} className="heading text-xl md:text-3xl text-white">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ─────────────── QUOTE SECTION (REDESIGNED) ────────── */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto w-full py-20">
        <Reveal>
          <div className="relative w-full rounded-[48px] bg-[#0a0f1e] p-12 md:p-24 overflow-hidden border border-white/5 group">
            {/* Topographical Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none topo-bg scale-150 transition-transform duration-[20s] group-hover:scale-125" />
            
            {/* Ambient Glows - Same as Method Section */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Floating Sparkle Icons */}
            <div className="absolute top-12 right-12 text-blue-500/20 animate-pulse">
              <Star size={64} strokeWidth={1} />
            </div>
            <div className="absolute bottom-12 left-12 text-blue-500/10">
              <Star size={40} strokeWidth={1} />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3">
                <div className="inline-block bg-blue-500/20 backdrop-blur-md px-6 py-2 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-blue-500/20">
                  Statement of Intent
                </div>
                <h3 className="heading !text-white text-3xl mb-2 drop-shadow-lg">Muhammad Asif</h3>
                <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Professional Creator</p>
              </div>

              <div className="w-full md:w-2/3">
                <h2 className="heading-display text-white text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight drop-shadow-2xl">
                  "I don't just create content. I engineer <span className="text-blue-400 bg-white/10 px-3 rounded-lg border border-white/5">mindsets</span>, dissect raw truths, and build systems that turn passive observers into relentless executors."
                </h2>
              </div>
            </div>
          </div>
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
          <div className="relative rounded-[48px] bg-[#050b18] p-8 md:p-20 flex flex-col items-center text-center overflow-hidden border border-white/5">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(37,99,235,0.15),transparent_70%)]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-[20%] left-[-5%] w-[300px] h-[300px] bg-indigo-600/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10">
              <span className="inline-block bg-blue-500/10 backdrop-blur-md px-4 py-1.5 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-blue-500/20">
                The Masterclass
              </span>
              <h2 className="heading-display text-white text-[clamp(2.5rem,7vw,5rem)] mb-6 leading-none tracking-tighter">
                Backbenchers <br />
                <span className="text-blue-500">University.</span>
              </h2>
              <p className="text-white/70 text-lg max-w-[650px] mx-auto mb-16 font-medium leading-relaxed">
                Not for the apathetic. A rigorous, cohort-based curriculum designed to strip away your excuses, rebuild your mental models, and install the operating system of high performance.
              </p>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1100px] text-left mb-16">
                {[
                  { title: "Mindset Protocol", desc: "Eradicate limiting beliefs and build undeniable confidence.", icon: Brain },
                  { title: "Execution Engine", desc: "Daily systems to guarantee deep work and compound output.", icon: Zap },
                  { title: "The Inner Circle", desc: "Direct access to a network of like-minded builders.", icon: Target }
                ].map((feature, i) => (
                  <StaggerItem key={i}>
                    <div className="group bg-white/[0.03] backdrop-blur-xl p-8 rounded-[32px] border border-white/[0.05] hover:border-blue-500/40 hover:bg-white/[0.05] transition-all duration-500 h-full relative overflow-hidden">
                      {/* Hover Glow */}
                      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                        <feature.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="heading text-xl !text-white mb-3 !font-bold">{feature.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/90 transition-colors">{feature.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <a href="#" className="btn bg-blue-500 hover:bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:scale-105 transition-all group">
                Apply for the next cohort
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="px-4 md:px-8"><div className="rule" /></div>

      {/* ─────────────── PHILOSOPHY (REDESIGNED - DARK) ── */}
      <section id="method" className="px-4 md:px-8 max-w-[1500px] mx-auto w-full">
        <div className="bg-[#0a0f1e] rounded-[48px] p-8 md:p-24 relative overflow-hidden border border-white/5">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

          <Reveal>
            <div className="mb-20">
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.3em] mb-6 block">STEP</span>
              <h2 className="heading-display text-white text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-tighter max-w-[900px]">
                Maximize your growth with a <br />
                <span className="text-blue-400">Method</span> that generates results.
              </h2>
            </div>
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              { 
                n: "1", 
                t: "Awaken", 
                b: "Understanding your goals, fears, and challenges through deep introspection and brutal reality checks."
              },
              { 
                n: "2", 
                t: "Build", 
                b: "Transforming raw motivation into robust, repeatable systems and unbreakable daily habits."
              },
              { 
                n: "3", 
                t: "Conquer", 
                b: "Executing with clarity and precision to achieve your ultimate potential in life and business."
              },
            ].map(({ n, t, b }) => (
              <StaggerItem key={n}>
                <div className="group relative bg-white/[0.04] p-10 md:p-12 rounded-[32px] h-full border border-white/[0.08] hover:bg-white/[0.07] hover:border-blue-400/40 transition-all duration-500">
                  {/* Glowing background effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px]" />
                  
                  <div className="relative z-10">
                    <div className="heading-display text-[7rem] md:text-[8rem] text-white/10 mb-4 leading-none group-hover:text-blue-400/20 transition-colors">
                      {n}
                    </div>
                    <h3 className="heading text-2xl !text-white mb-4 group-hover:!text-blue-300 transition-colors">
                      {t}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-base group-hover:text-white/90 transition-colors">
                      {b}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="px-4 md:px-8"><div className="rule" /></div>

      {/* ─────────────── PERSONAL INTERESTS (REDESIGNED) ── */}
      <section id="interests" className="px-4 md:px-8 max-w-[1500px] mx-auto w-full">
        <div className="bg-[#0a0f1e] rounded-[40px] p-8 md:p-20 relative overflow-hidden border border-white/5">
          {/* Ambient Glows */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div className="max-w-[600px]">
                <p className="eyebrow mb-4">Beyond Work</p>
                <h2 className="heading-display text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1]">
                  What Drives <br />
                  <span className="text-blue-400">My Ambition.</span>
                </h2>
              </div>
              <p className="text-white/50 text-lg max-w-[300px] font-medium leading-relaxed">
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
                <div className="group bg-white/[0.03] backdrop-blur-xl p-10 h-full relative overflow-hidden rounded-[32px] border border-white/5 hover:border-blue-400/30 transition-all duration-500">
                  {/* Large Background Icon Outline */}
                  <div className="absolute -right-8 -bottom-8 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                    <Icon className="w-[12rem] h-[12rem] text-blue-400 stroke-[1px]" />
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>

                  <h3 className="heading text-2xl !text-white mb-4 relative z-10 group-hover:!text-blue-300 transition-colors">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 relative z-10 group-hover:text-white/80 transition-colors">{desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                    {tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal delay={0.2}>
            <div className="bg-white/[0.02] backdrop-blur-md p-8 md:p-12 rounded-[32px] border border-white/5 relative z-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-transparent to-blue-500/5 pointer-events-none" />
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center relative z-10">
                <div className="md:w-1/3 text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <h3 className="heading text-2xl !text-white">Currently Exploring</h3>
                  </div>
                  <p className="text-white/40 text-sm">The frontier I'm diving deep into right now.</p>
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {[
                    { icon: Brain, label: "AI Agents", sub: "Autonomous workflows" },
                    { icon: Code, label: "No-Code Tools", sub: "Building without code" },
                    { icon: Zap, label: "Content Velocity", sub: "Scale without burnout" },
                  ].map(({ icon: Icon, label, sub }) => (
                    <div key={label} className="group/item cursor-default text-left">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-blue-400 transition-all">
                          <Icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="heading text-sm !text-white mb-1 group-hover/item:!text-blue-400 transition-colors">{label}</h4>
                          <p className="text-white/30 text-[11px] leading-tight font-medium uppercase tracking-tighter">{sub}</p>
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
              <a href={v.link} target="_blank" rel="noopener noreferrer" className="vcard border-none bg-white/[0.03]">
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
              <a href={`https://youtu.be/${video.id}`} target="_blank" rel="noopener noreferrer" className="vcard border-none bg-white/[0.03]">
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
            <p className="eyebrow mb-4 !text-blue-400">Community Impact</p>
            <h2 className="heading-display text-[clamp(2rem,5vw,3.5rem)] !text-white">Real Results.</h2>
          </Reveal>
        </div>

        <div className="marquee-wrap">
          <div className="marquee-track" style={{ animationDuration: '40s' }}>
            <div className="marquee-content" style={{ gap: '2rem', paddingRight: '2rem' }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="card p-8 bg-white/[0.03] border-none w-[320px] md:w-[400px] shrink-0 h-[260px] flex flex-col justify-between cursor-default">
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
                <div key={`dup-${i}`} className="card p-8 bg-white/[0.03] border-none w-[320px] md:w-[400px] shrink-0 h-[260px] flex flex-col justify-between cursor-default">
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
              {[
                ["YouTube", "https://youtube.com/channel/UCE6hrW3g0K_sj3XLvBxIC0g"],
                ["Facebook", "https://www.facebook.com/MuhammadAsifRayhanOfficial"]
              ].map(([l, h]) => (
                <a key={l} href={h} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm font-bold transition-colors">{l}</a>
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
