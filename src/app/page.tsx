import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { FaYoutube, FaFacebook, FaInstagram, FaXTwitter, FaTwitch, FaWhatsapp } from "react-icons/fa6";
import { getLatestVideos } from "../lib/youtube";

export default async function Home() {
  const latestVideos = await getLatestVideos('UCE6hrW3g0K_sj3XLvBxIC0g', 3);
  const newestVideo = latestVideos.length > 0 ? latestVideos[0] : null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden">

      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center text-center">
        {/* Top badge */}
        <div className="glass px-5 py-2.5 rounded-full flex items-center gap-3 mb-8 animate-fade-in-up border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-semibold tracking-widest uppercase text-muted">Founder · Backbenchers University</span>
        </div>

        <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 uppercase leading-none">
          Muhammad <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#60A5FA] to-accent">
            Asif Raihan
          </span>
        </h1>

        <p className="max-w-2xl text-muted text-lg md:text-xl mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Motivational content creator & community builder. Founder of <span className="text-foreground font-semibold">Backbenchers University</span> — a movement empowering the next generation of rebels and dreamers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up mt-4" style={{ animationDelay: '0.4s' }}>
          <a href="https://youtube.com/channel/UCE6hrW3g0K_sj3XLvBxIC0g" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 glass border-[#FF0000]/20 hover:bg-[#FF0000]/10 hover:border-[#FF0000]/50 text-white rounded-full font-bold uppercase tracking-wider flex items-center gap-4 transition-all hover:scale-105 shadow-[0_0_30px_-10px_rgba(255,0,0,0.2)]">
            <FaYoutube className="w-7 h-7 text-[#FF0000] group-hover:scale-110 transition-transform" />
            <div className="flex flex-col items-start text-left leading-tight">
              <span className="text-[10px] text-muted font-bold tracking-widest group-hover:text-muted transition-colors">Subscribe on YouTube</span>
              <span className="font-heading text-xl md:text-2xl mt-0.5 tracking-wide text-white">130K+ Subs</span>
            </div>
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 glass border-[#1877F2]/20 hover:bg-[#1877F2]/10 hover:border-[#1877F2]/50 text-white rounded-full font-bold uppercase tracking-wider flex items-center gap-4 transition-all hover:scale-105 shadow-[0_0_30px_-10px_rgba(24,119,242,0.2)]">
            <FaFacebook className="w-7 h-7 text-[#1877F2] group-hover:scale-110 transition-transform" />
            <div className="flex flex-col items-start text-left leading-tight">
              <span className="text-[10px] text-muted font-bold tracking-widest group-hover:text-muted transition-colors">Follow on Facebook</span>
              <span className="font-heading text-xl md:text-2xl mt-0.5 tracking-wide text-white">300K+ Followers</span>
            </div>
          </a>
        </div>

      </section>

      {/* About / Who Am I Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 relative flex flex-col md:flex-row items-center gap-16">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-[120%] bg-accent/5 blur-[150px] rounded-full -z-10" />
        
        <div className="w-full md:w-1/2 flex flex-col items-start text-left space-y-8">
          <div className="glass px-5 py-2.5 rounded-full flex items-center gap-3 border-white/10 w-fit">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="text-sm font-semibold tracking-widest uppercase text-muted">The Story</span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-wide leading-tight">
            Who <span className="text-accent">Am I?</span>
          </h2>
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              I started with nothing but a relentless drive to understand what makes people tick and what drives true, lasting success. For years, I navigated the noise of the digital world, distilling complex strategies into actionable systems.
            </p>
            <p>
              Today, I help creators and entrepreneurs break through their own ceilings. My approach is simple: <strong className="text-white font-semibold">no fluff, just signal</strong>. I believe in the power of compound interest applied to human effort—small, strategic actions multiplied by unyielding consistency.
            </p>
            <p>
              Whether through my videos, writings, or direct consulting, my mission is to arm you with the mental models and tactical frameworks you need to ignite your potential and build something that outlasts you.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative flex justify-center">
          <div className="relative w-full aspect-[3/4] max-w-md rounded-[2rem] overflow-hidden border border-white/10 glass shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
            <Image
              src="/creator_portrait.jpg"
              alt="Who Am I"
              fill
              className="object-cover object-center opacity-95 transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-accent/10 blur-[120px] rounded-full -z-10" />

        <h2 className="font-heading text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto mb-20 uppercase tracking-wide">
          Blending clear <span className="text-accent">strategy</span>, thoughtful <span className="text-accent">discipline</span>, and raw <span className="text-accent">action</span>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="glass p-10 rounded-[2rem] text-left border border-white/5 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 group shadow-xl">
            <span className="font-heading text-7xl font-black text-white/5 group-hover:text-accent/20 transition-colors mb-6 block">01</span>
            <h3 className="font-heading text-3xl font-bold mb-4 uppercase tracking-wide">Awaken</h3>
            <p className="text-muted leading-relaxed text-lg">Understanding your goals, fears, and challenges through deep introspection and reality checks.</p>
          </div>
          <div className="glass p-10 rounded-[2rem] text-left border border-white/5 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 group shadow-xl md:translate-y-12">
            <span className="font-heading text-7xl font-black text-white/5 group-hover:text-accent/20 transition-colors mb-6 block">02</span>
            <h3 className="font-heading text-3xl font-bold mb-4 uppercase tracking-wide">Build</h3>
            <p className="text-muted leading-relaxed text-lg">Transforming raw motivation into robust, repeatable systems and unbreakable habits.</p>
          </div>
          <div className="glass p-10 rounded-[2rem] text-left border border-white/5 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 group shadow-xl">
            <span className="font-heading text-7xl font-black text-white/5 group-hover:text-accent/20 transition-colors mb-6 block">03</span>
            <h3 className="font-heading text-3xl font-bold mb-4 uppercase tracking-wide">Conquer</h3>
            <p className="text-muted leading-relaxed text-lg">Executing with clarity and precision to achieve your ultimate potential in life and business.</p>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3 block">Fresh off the channel</span>
            <h2 className="font-heading text-5xl md:text-7xl font-bold mb-4 uppercase tracking-wide leading-none">Latest Content</h2>
            <p className="text-muted max-w-lg text-lg">Raw, unfiltered breakdowns of mindset, strategy, and the habits that separate winners from everyone else.</p>
          </div>
          <button className="text-accent font-bold uppercase tracking-wider hover:text-[#60A5FA] mt-6 md:mt-0 flex items-center gap-2 transition-colors text-sm border border-accent/30 hover:border-[#60A5FA]/50 px-5 py-2.5 rounded-full">View All <ArrowRight className="w-4 h-4" /></button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestVideos.length > 0 ? latestVideos.map((video) => (
            <a key={video.id} href={video.link} target="_blank" rel="noopener noreferrer" className="glass rounded-[2rem] overflow-hidden group cursor-pointer border border-white/5 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 text-left flex flex-col shadow-xl">
              <div className="w-full aspect-video bg-[#2B2D42] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/50 z-10 scale-110 group-hover:scale-100">
                  <div className="w-20 h-20 rounded-full bg-accent text-white flex items-center justify-center backdrop-blur-md shadow-lg shadow-accent/50"><Play className="w-10 h-10 ml-2" /></div>
                </div>
                <Image src={video.thumbnail} alt={video.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-accent/40 to-black/80 mix-blend-overlay group-hover:scale-105 transition-transform duration-700 pointer-events-none"></div>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">Video</span>
                <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 group-hover:text-accent transition-colors uppercase leading-tight line-clamp-2">{video.title}</h3>
                <p className="text-muted text-sm md:text-base line-clamp-2">Watch the latest deep dive into strategy, mindset, and execution.</p>
              </div>
            </a>
          )) : (
            <p className="text-muted/70 col-span-1 md:col-span-2 lg:col-span-3">No videos found.</p>
          )}
        </div>
      </section>

      {/* Blog Teaser Section */}
      <section className="w-full border-y border-white/5 bg-black/40 py-24 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="text-left">
              <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4 uppercase tracking-wide">Latest Insights</h2>
              <p className="text-muted max-w-lg text-lg">Written thoughts, essays, and deep dives into the mechanics of high performance.</p>
            </div>
            <Link href="/blog" className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all font-bold uppercase tracking-widest mt-6 md:mt-0">Read the Blog</Link>
          </div>

          <div className="flex flex-col gap-6">
            {[1, 2, 3].map((item) => (
              <a key={item} href="#" className="glass p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-accent/40 transition-all duration-300 flex flex-col md:flex-row justify-between md:items-center gap-6 group hover:-translate-y-1 shadow-lg">
                <div className="flex flex-col text-left max-w-3xl">
                  <span className="font-heading text-accent uppercase tracking-widest text-sm mb-3">October {12 + item}, 2026 • 5 min read</span>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent transition-colors uppercase">Why Your 'Perfect Plan' is Killing Your Progress</h3>
                  <p className="text-muted text-lg">Stop over-analyzing and start executing. The friction you feel is a byproduct of inaction, not a lack of strategy.</p>
                </div>
                <div className="flex items-center text-white font-bold uppercase tracking-wider group-hover:text-accent transition-colors whitespace-nowrap">
                  Read Article <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 text-center relative">
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-20 uppercase tracking-wide">Community <span className="text-accent">Impact</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Sarah J.", role: "Entrepreneur", text: "The mindset shift I experienced after implementing these strategies completely changed my business trajectory. Unbelievable value." },
            { name: "Marcus T.", role: "Creator", text: "It's rare to find content that balances high-level strategy with actionable, gritty tactics. This is the real deal." },
            { name: "Elena R.", role: "Designer", text: "I was stuck in a rut for months. The frameworks provided here gave me the exact roadmap I needed to get back on track and scale." }
          ].map((testimonial, i) => (
            <div key={i} className="glass p-10 rounded-[2rem] text-left border border-white/5 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full -z-10" />
              <div className="flex gap-1 text-accent mb-6 text-xl">
                {"★★★★★".split('').map((star, j) => <span key={j}>{star}</span>)}
              </div>
              <p className="text-muted text-lg mb-10 italic leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full bg-[#2B2D42] border-2 border-white/10" />
                <div>
                  <h4 className="font-heading font-bold text-xl uppercase tracking-wide">{testimonial.name}</h4>
                  <p className="text-accent text-sm font-semibold uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp Group */}
      <section className="w-full border-t border-white/5 bg-gradient-to-b from-transparent to-[#25D366]/10 py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1/2 bg-[#25D366]/20 blur-[150px] rounded-t-full -z-10" />
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
          <h2 className="font-heading text-5xl md:text-7xl font-bold mb-6 uppercase tracking-wide">Join the Movement</h2>
          <p className="text-muted text-xl mb-12 max-w-2xl">Connect directly with me and a community of high-performers. Get exclusive voice notes, raw strategies, and real-time updates straight to your phone.</p>

          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative px-10 py-5 bg-[#25D366] text-black rounded-full font-heading font-bold uppercase tracking-widest hover:bg-[#1ebd5c] hover:scale-105 transition-all flex items-center gap-4 shadow-[0_0_40px_-10px_rgba(37,211,102,0.5)]"
          >
            <FaWhatsapp className="w-6 h-6" />
            Join WhatsApp Group
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-white/10 bg-black text-center text-muted/70 text-sm font-medium uppercase tracking-widest">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© 2026 Backbenchers University. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-accent transition-colors">Twitter</a>
            <a href="#" className="hover:text-accent transition-colors">YouTube</a>
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
