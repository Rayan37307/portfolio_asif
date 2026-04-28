import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Star, Dumbbell, Laptop, Sparkles, Brain, Code, Zap, Eye, Target, Trophy, Boxes } from "lucide-react";
import { FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { getLatestVideos } from "../lib/youtube";
import { getSortedPostsData } from "../lib/posts";
import { Reveal, StaggerContainer, StaggerItem, ParallaxHeroImage, AnimatedSVGLines, CountUp, MagneticButton } from "./components/animations";
import IdeaMatrix from "./components/IdeaMatrix";
import Hero3D from "./components/Hero3D";
import BUVisual from "./components/BUVisual";
import AmbitionSection from "./components/AmbitionSection";
import MethodSection from "./components/MethodSection";
import BrandMarquee from "./components/BrandMarquee";
import JournalSection from "./components/JournalSection";

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
              <div className="font-script text-[clamp(2.5rem,8vw,6rem)] text-blue-400 drop-shadow-[0_0_40px_rgba(37,99,235,0.5)] rotate-[-4deg] md:translate-y-[35%] translate-y-[80%] translate-x-[2%] opacity-90 leading-[0.8] md:leading-tight text-center flex flex-col md:block">
                <span>Engineering</span>
                <span> Mindsets</span>
              </div>
            </Reveal>
          </div>

          {/* Central Floating Image */}
          <div className="relative z-10 w-full max-w-[500px] aspect-[4/5] md:aspect-square flex items-center justify-center">
            <Reveal delay={0.2} direction="up">
              <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[550px] rounded-[32px] overflow-hidden shadow-[0_48px_100px_rgba(0,0,0,0.8)] border border-white/10 group">
                <Image
                  src="/creator.jpg"
                  alt="Muhammad Asif"
                  fill
                  className="object-cover opacity-40 scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-60" />
              </div>
            </Reveal>
          </div>

          {/* Bottom/Side Content: Details */}
          <div className="absolute bottom-8 md:bottom-12 left-0 md:left-12 w-full md:w-auto md:max-w-[280px] z-30 flex flex-col items-center md:items-start text-center md:text-left px-4">
            <Reveal delay={0.4} direction="up">
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 md:mb-4">The Vision</p>
              <h4 className="text-white text-lg md:text-xl font-medium mb-3 md:mb-4 leading-tight">
                Built for those who refuse to be average.
              </h4>
              <p className="text-white/40 text-xs leading-relaxed mb-6 md:mb-8 max-w-[300px] md:max-w-none">
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
          <div className="absolute top-8 left-6 md:top-12 md:left-12 flex items-center gap-3 z-30">
            <div className="w-6 md:w-8 h-[1px] bg-white/20" />
            <span className="text-white/40 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em]">Muhammad Asif</span>
          </div>

          {/* Status Badge (Top Right) */}
          <div className="absolute top-8 right-6 md:top-12 md:right-12 z-30">
            <Reveal delay={0.8} direction="down">
              <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md text-white/50 text-[8px] md:text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="hidden sm:inline">Operating System:</span> High Performance
              </div>
            </Reveal>
          </div>


        </div>
      </section>

      {/* ─────────────── LOGO MARQUEE (UPGRADED) ───────── */}
      <BrandMarquee />

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

      {/* ─────────────── CONTENT ECOSYSTEM (BENTO GRID) ─── */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <Reveal>
          <p className="eyebrow mb-4">Ecosystem</p>
          <h2 className="heading-display text-4xl md:text-5xl mb-4">
            Content Pillars.
          </h2>
          <p className="text-muted text-lg max-w-[550px] mb-12 font-medium leading-relaxed">
            The core disciplines that power every piece of content, strategy, and system I build.
          </p>
        </Reveal>

        <IdeaMatrix />
      </section>

      <div className="px-4 md:px-8"><div className="rule" /></div>

      {/* ─────────────── BACKBENCHERS UNIVERSITY ──── */}
      <section id="masterclass" className="px-4 md:px-8 max-w-[1500px] mx-auto w-full">
        <div className="relative rounded-[60px] bg-[#050b18] p-8 md:p-16 lg:p-24 overflow-hidden border border-white/5 shadow-3xl">
          {/* Background Technical Elements */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Content */}
            <div className="flex flex-col items-start text-left">
              <Reveal>
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-12 h-[1px] bg-blue-500/50" />
                  <span className="text-blue-400 text-xs font-black uppercase tracking-[0.4em]">The Academy</span>
                </div>
                
                <h2 className="heading-display text-white text-[clamp(2.5rem,6vw,5rem)] mb-8 leading-[0.9] tracking-tighter">
                  Backbenchers <br />
                  <span className="text-blue-500">University.</span>
                </h2>
                
                <p className="text-white/60 text-lg md:text-xl max-w-[550px] mb-12 font-medium leading-relaxed">
                  The definitive operating system for high-performance individuals. We strip away the noise and install the protocols of world-class executors.
                </p>

                <div className="flex flex-wrap gap-4 mb-16">
                  <MagneticButton>
                    <a href="https://chat.whatsapp.com/FVioaoB7Ew7EI2w5ZSaVW4" target="_blank" rel="noopener noreferrer" 
                       className="px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-colors shadow-[0_20px_40px_rgba(37,99,235,0.2)] flex items-center gap-3 group">
                      Join
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </MagneticButton>
                  <a href="#curriculum" className="px-10 py-5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-all">
                    View Syllabus
                  </a>
                </div>
              </Reveal>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                {[
                  { title: "Mindset", module: "01", icon: Brain },
                  { title: "Execution", module: "02", icon: Zap },
                  { title: "Network", module: "03", icon: Target }
                ].map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="bg-white/[0.03] border border-white/5 p-6 rounded-3xl hover:bg-white/[0.05] hover:border-blue-500/30 transition-all group">
                      <div className="flex justify-between items-start mb-4">
                        <item.icon className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-mono text-white/30 uppercase">Module {item.module}</span>
                      </div>
                      <h3 className="heading text-sm !text-white !font-bold tracking-wider uppercase">{item.title} Protocol</h3>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Right Column: Visual */}
            <div className="relative">
              <Reveal direction="right" delay={0.2}>
                <BUVisual />
              </Reveal>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-4 -left-4 md:-left-12 glass-dark p-6 rounded-3xl border border-white/10 animate-float z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                    <Trophy className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Active Cohort</p>
                    <p className="text-xl text-white font-bold">Limitless v2.0</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="px-4 md:px-8"><div className="rule" /></div>

      {/* ─────────────── PHILOSOPHY SECTION (UPGRADED) ── */}
      <MethodSection />

      <div className="px-4 md:px-8"><div className="rule" /></div>

      {/* ─────────────── AMBITION SECTION (UPGRADED) ──── */}
      <AmbitionSection />

      <div className="px-4 md:px-8"><div className="rule" /></div>

      {/* ─────────────── LATEST CONTENT ──────────────────── */}
      <section id="content" className="px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-blue-500" />
                <span className="text-blue-400 text-xs font-black uppercase tracking-[0.4em]">Broadcast</span>
              </div>
              <h2 className="heading-display text-4xl md:text-5xl text-white">Latest Contents.</h2>
            </div>
            <a href="https://youtube.com/channel/UCE6hrW3g0K_sj3XLvBxIC0g" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-sm">
              All Videos
            </a>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.length > 0 ? videos.map((v, idx) => (
            <StaggerItem key={v.id}>
              <a href={v.link} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="bg-white/[0.03] border border-white/5 rounded-[32px] overflow-hidden hover:bg-white/[0.06] hover:border-blue-500/30 transition-all duration-500 h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={v.thumbnail} alt={v.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-xl">
                        <Play size={16} className="fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-4 block">Video {idx + 1}</span>
                    <h3 className="heading text-xl !text-white mb-0 line-clamp-2 group-hover:!text-blue-400 transition-colors">{v.title}</h3>
                  </div>
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
          <div className="mb-12">
            <p className="eyebrow mb-4">Must Watch</p>
            <h2 className="heading-display text-4xl md:text-6xl mb-6">Banger Contents.</h2>
            <p className="text-white/50 text-lg max-w-[600px] font-medium leading-relaxed">
              Hand-picked videos that hit different. These are the ones that changed everything.
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { id: "O7cYmFH6GwE", thumb: "/banger-1.avif", title: "Education Trap: যেভাবে 99.63% মানুষ ভুল পথে দৌড়াচ্ছে 🤫", views: "Viral" },
          ].map((video, i) => (
            <StaggerItem key={i}>
              <a href={`https://youtu.be/${video.id}`} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="bg-white/[0.03] border border-white/5 rounded-[40px] overflow-hidden hover:bg-white/[0.06] hover:border-blue-500/30 transition-all duration-500">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={video.thumb} alt={video.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-blue-600/90 backdrop-blur-md flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                        <Play size={20} className="fill-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1 bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">🔥 {video.views}</span>
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="heading text-2xl !text-white mb-0 leading-tight group-hover:!text-blue-400 transition-colors">{video.title}</h3>
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <div className="px-4 md:px-8"><div className="rule" /></div>

      {/* ─────────────── JOURNAL SECTION (UPGRADED) ────────── */}
      <JournalSection posts={posts} />

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
        <div className="bg-[#0a0f1e] rounded-[32px] p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden border border-white/5 shadow-2xl">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent_70%)]" />

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
              <a href="https://chat.whatsapp.com/FVioaoB7Ew7EI2w5ZSaVW4" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(59,130,246,0.3)] group">
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
