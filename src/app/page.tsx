import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { getLatestVideos } from "../lib/youtube";

const WORDS = ["DISCIPLINE","EXECUTION","MINDSET","STRATEGY","RESULTS","ACTION","GROWTH","FOCUS"];
const MARQUEE_ITEMS = [...WORDS, ...WORDS, ...WORDS];

export default async function Home() {
  const videos = await getLatestVideos("UCE6hrW3g0K_sj3XLvBxIC0g", 3);

  return (
    <main>

      {/* ─────────────── HERO ─────────────────────── */}
      <section style={{ minHeight:"100svh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"8rem 1.5rem 5rem", position:"relative", overflow:"hidden" }}>

        {/* ambient glow */}
        <div aria-hidden style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 70% 50% at 50% 0%, rgba(82,113,255,0.08) 0%, transparent 70%)", pointerEvents:"none" }} />

        <p className="eyebrow anim-fade-up" style={{ marginBottom:"2rem", animationDelay:"0s" }}>
          Founder · Backbenchers University
        </p>

        <h1 className="heading anim-fade-up" style={{ fontSize:"clamp(3.5rem, 12vw, 10rem)", animationDelay:"0.08s", maxWidth:"900px" }}>
          Muhammad<br />
          <span style={{ color:"var(--accent)" }}>Asif Raihan</span>
        </h1>

        <p className="anim-fade-up" style={{ marginTop:"2rem", maxWidth:"36rem", color:"var(--fg-muted)", fontSize:"1.05rem", lineHeight:1.75, animationDelay:"0.18s" }}>
          Motivational creator &amp; community builder. Founder of{" "}
          <span style={{ color:"var(--fg)", fontWeight:600 }}>Backbenchers University</span> — empowering the next generation of rebels and dreamers.
        </p>

        <div className="anim-fade-up" style={{ display:"flex", flexWrap:"wrap", gap:"0.75rem", marginTop:"2.5rem", justifyContent:"center", animationDelay:"0.28s" }}>
          <a href="https://youtube.com/channel/UCE6hrW3g0K_sj3XLvBxIC0g" target="_blank" rel="noopener noreferrer" className="btn btn-fill">
            <FaYoutube style={{ width:"1.1rem", height:"1.1rem" }} />
            130K+ Subs
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <FaFacebook style={{ width:"1rem", height:"1rem", color:"#4A90D9" }} />
            300K+ Followers
          </a>
        </div>

        {/* scroll indicator */}
        <div style={{ position:"absolute", bottom:"2.5rem", left:"50%", display:"flex", flexDirection:"column", alignItems:"center", gap:"0.4rem", animation:"float 4s ease-in-out infinite" }}>
          <div style={{ width:"1px", height:"3rem", background:"linear-gradient(to bottom, var(--accent), transparent)", opacity:0.6 }} />
        </div>
      </section>

      {/* ─────────────── MARQUEE ──────────────────── */}
      <div style={{ borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)", padding:"1rem 0", background:"var(--bg-card)" }}>
        <div className="marquee-wrap">
          <div className="marquee-track">
            <div className="marquee-content">
              {MARQUEE_ITEMS.map((w, i) => (
                <span key={i} className="heading" style={{ fontSize:"0.85rem", letterSpacing:"0.2em", color: i % 5 === 0 ? "var(--accent)" : "var(--fg-muted)", whiteSpace:"nowrap" }}>
                  {w}
                </span>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {MARQUEE_ITEMS.map((w, i) => (
                <span key={`dup-${i}`} className="heading" style={{ fontSize:"0.85rem", letterSpacing:"0.2em", color: i % 5 === 0 ? "var(--accent)" : "var(--fg-muted)", whiteSpace:"nowrap" }}>
                  {w}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────── FEATURED ON ──────────────── */}
      <section style={{ maxWidth:"1200px", margin:"0 auto", padding:"6rem 1.5rem", textAlign:"center" }}>
        <p className="eyebrow" style={{ marginBottom:"2rem", justifyContent:"center" }}>Featured On</p>
        <div style={{ display:"flex", flexWrap:"wrap", gap:"4rem", justifyContent:"center", alignItems:"center", opacity:0.6, filter:"grayscale(100%)" }}>
          {/* Placeholder text for logos since we don't have SVG assets */}
          {["FORBES", "TECHCRUNCH", "ENTREPRENEUR", "GQ", "BUSINESS INSIDER"].map((logo) => (
            <span key={logo} className="heading" style={{ fontSize:"1.5rem", letterSpacing:"0.1em", color:"var(--fg-muted)" }}>
              {logo}
            </span>
          ))}
        </div>
      </section>

      {/* ─────────────── RULE ─────────────────────── */}
      <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 1.5rem" }}><div className="rule" /></div>

      {/* ─────────────── ABOUT ────────────────────── */}
      <section id="about" style={{ maxWidth:"1200px", margin:"0 auto", padding:"8rem 1.5rem" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"center" }}>

          {/* image */}
          <div style={{ position:"relative", aspectRatio:"4/5", borderRadius:"6px", overflow:"hidden", border:"1px solid var(--border)" }}>
            <Image src="/creator_portrait.jpg" alt="Muhammad Asif Raihan" fill style={{ objectFit:"cover", objectPosition:"center" }} />
            {/* orange top-left corner */}
            <div aria-hidden style={{ position:"absolute", top:0, left:0, width:"2px", height:"4rem", background:"var(--accent)" }} />
            <div aria-hidden style={{ position:"absolute", top:0, left:0, width:"4rem", height:"2px", background:"var(--accent)" }} />
          </div>

          {/* text */}
          <div>
            <p className="eyebrow" style={{ marginBottom:"1.5rem" }}>The Story</p>
            <h2 className="heading" style={{ fontSize:"clamp(2.5rem, 5vw, 4rem)", marginBottom:"2rem" }}>
              Who Am I?
            </h2>
            <div style={{ color:"var(--fg-muted)", fontSize:"1rem", lineHeight:1.8, display:"flex", flexDirection:"column", gap:"1.25rem" }}>
              <p>Started with nothing but a relentless drive to understand what makes people tick. For years I navigated the digital world, distilling complex strategies into actionable systems.</p>
              <p>Today I help creators and entrepreneurs break through their own ceilings. My approach: <span style={{ color:"var(--fg)", fontWeight:600 }}>no fluff, just signal</span>. Small strategic actions multiplied by unyielding consistency.</p>
              <p>Whether through videos, writing, or consulting — I arm you with mental models to ignite your potential.</p>
            </div>

            {/* stats */}
            <div style={{ display:"flex", gap:"2.5rem", marginTop:"2.5rem", paddingTop:"2rem", borderTop:"1px solid var(--border)" }}>
              {[["130K+","YouTube"],["300K+","Facebook"],["5Y+","Creating"]].map(([n, l]) => (
                <div key={l}>
                  <div className="heading" style={{ fontSize:"2rem", color:"var(--fg)" }}>{n}</div>
                  <div style={{ fontSize:"0.65rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--fg-muted)", fontWeight:700, marginTop:"0.2rem" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── RULE ─────────────────────── */}
      <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 1.5rem" }}><div className="rule" /></div>

      {/* ─────────────── BACKBENCHERS UNIVERSITY ──── */}
      <section style={{ maxWidth:"1200px", margin:"0 auto", padding:"8rem 1.5rem" }}>
        <div className="card" style={{ padding:"4rem", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", background:"radial-gradient(circle at center top, rgba(82,113,255,0.08) 0%, var(--bg-card) 60%)", borderTop:"2px solid var(--accent)" }}>
          <p className="eyebrow" style={{ marginBottom:"1.5rem", justifyContent:"center" }}>The Masterclass</p>
          <h2 className="heading" style={{ fontSize:"clamp(2.5rem, 6vw, 4.5rem)", marginBottom:"1.5rem" }}>
            Backbenchers <span style={{ color:"var(--accent)" }}>University.</span>
          </h2>
          <p style={{ color:"var(--fg-muted)", fontSize:"1.05rem", lineHeight:1.75, maxWidth:"600px", margin:"0 auto 3rem" }}>
            Not for the apathetic. A rigorous, cohort-based curriculum designed to strip away your excuses, rebuild your mental models, and install the operating system of high performance.
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))", gap:"2rem", width:"100%", maxWidth:"800px", marginBottom:"3.5rem", textAlign:"left" }}>
            {[
              { title:"Mindset Protocol", desc:"Eradicate limiting beliefs and build undeniable confidence." },
              { title:"Execution Engine", desc:"Daily systems to guarantee deep work and compound output." },
              { title:"The Inner Circle", desc:"Direct access to a network of like-minded builders." }
            ].map((feature, i) => (
              <div key={i} style={{ padding:"1.5rem", background:"var(--bg)", border:"1px solid var(--border)", borderRadius:"4px" }}>
                <h3 className="heading" style={{ fontSize:"1.2rem", marginBottom:"0.5rem" }}>{feature.title}</h3>
                <p style={{ color:"var(--fg-muted)", fontSize:"0.85rem", lineHeight:1.5 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
          <a href="#" className="btn btn-fill">Apply for the next cohort</a>
        </div>
      </section>

      {/* ─────────────── RULE ─────────────────────── */}
      <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 1.5rem" }}><div className="rule" /></div>

      {/* ─────────────── PHILOSOPHY ───────────────── */}
      <section style={{ maxWidth:"1200px", margin:"0 auto", padding:"8rem 1.5rem" }}>
        <p className="eyebrow" style={{ marginBottom:"1.5rem" }}>The Method</p>
        <h2 className="heading" style={{ fontSize:"clamp(2rem, 5vw, 3.5rem)", marginBottom:"4rem", maxWidth:"600px" }}>
          Strategy. Discipline.<br /><span style={{ color:"var(--accent)" }}>Action.</span>
        </h2>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.5rem" }}>
          {[
            { n:"01", t:"Awaken", b:"Understanding your goals, fears, and challenges through deep introspection and brutal reality checks." },
            { n:"02", t:"Build",  b:"Transforming raw motivation into robust, repeatable systems and unbreakable daily habits." },
            { n:"03", t:"Conquer",b:"Executing with clarity and precision to achieve your ultimate potential in life and business." },
          ].map(({ n, t, b }) => (
            <div key={n} className="card" style={{ padding:"2.5rem" }}>
              <div className="heading" style={{ fontSize:"3.5rem", color:"var(--border)", marginBottom:"1.5rem" }}>{n}</div>
              <h3 className="heading" style={{ fontSize:"1.8rem", marginBottom:"0.75rem" }}>{t}</h3>
              <p style={{ color:"var(--fg-muted)", lineHeight:1.75, fontSize:"0.95rem" }}>{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────── RULE ─────────────────────── */}
      <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 1.5rem" }}><div className="rule" /></div>

      {/* ─────────────── CONTENT ──────────────────── */}
      <section id="content" style={{ maxWidth:"1200px", margin:"0 auto", padding:"8rem 1.5rem" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"3rem", flexWrap:"wrap", gap:"1rem" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom:"1rem" }}>Fresh off the channel</p>
            <h2 className="heading" style={{ fontSize:"clamp(2rem, 5vw, 3.5rem)" }}>Latest Content</h2>
          </div>
          <a href="https://youtube.com/channel/UCE6hrW3g0K_sj3XLvBxIC0g" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize:"0.8rem", padding:"0.55rem 1.2rem" }}>
            All Videos <ArrowRight style={{ width:"0.85rem", height:"0.85rem" }} />
          </a>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:"1.25rem" }}>
          {videos.length > 0 ? videos.map(v => (
            <a key={v.id} href={v.link} target="_blank" rel="noopener noreferrer" className="vcard">
              <div style={{ position:"relative", aspectRatio:"16/9", overflow:"hidden", background:"#111" }}>
                <Image src={v.thumbnail} alt={v.title} fill className="vthumb" style={{ objectFit:"cover" }} />
                <div aria-hidden style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)", zIndex:1 }} />
                <div className="vplay">
                  <div style={{ width:"3rem", height:"3rem", borderRadius:"50%", background:"var(--accent)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <Play style={{ width:"1rem", height:"1rem", color:"#fff", marginLeft:"2px" }} />
                  </div>
                </div>
              </div>
              <div style={{ padding:"1.25rem" }}>
                <span style={{ fontSize:"0.6rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--accent)", fontWeight:700, display:"block", marginBottom:"0.5rem" }}>Video</span>
                <h3 className="vtitle heading" style={{ fontSize:"1.35rem", lineHeight:1.05, marginBottom:"0.5rem" }}>{v.title}</h3>
                <p style={{ color:"var(--fg-muted)", fontSize:"0.85rem", lineHeight:1.6 }}>Watch the latest deep dive into strategy, mindset, and execution.</p>
              </div>
            </a>
          )) : <p style={{ color:"var(--fg-muted)", gridColumn:"1/-1" }}>No videos found.</p>}
        </div>
      </section>

      {/* ─────────────── RULE ─────────────────────── */}
      <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 1.5rem" }}><div className="rule" /></div>

      {/* ─────────────── INSIGHTS ─────────────────── */}
      <section style={{ maxWidth:"1200px", margin:"0 auto", padding:"8rem 1.5rem" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"3rem", flexWrap:"wrap", gap:"1rem" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom:"1rem" }}>From the mind</p>
            <h2 className="heading" style={{ fontSize:"clamp(2rem, 5vw, 3.5rem)" }}>Latest Insights</h2>
          </div>
          <Link href="/blog" className="btn btn-outline" style={{ fontSize:"0.8rem", padding:"0.55rem 1.2rem" }}>
            Read All <ArrowRight style={{ width:"0.85rem", height:"0.85rem" }} />
          </Link>
        </div>

        <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
          {[
            { date:"Apr 12, 2026", read:"5 min", title:"Why Your 'Perfect Plan' is Killing Your Progress",  body:"Stop over-analyzing and start executing. Friction is inaction, not lack of strategy." },
            { date:"Mar 28, 2026", read:"7 min", title:"The Compound Effect of Daily Discipline",           body:"Small consistent actions compound into extraordinary results. Here's the math." },
            { date:"Mar 14, 2026", read:"6 min", title:"How I Built 130K Subscribers From Zero",           body:"No shortcuts. A repeatable system built on clarity, consistency, and content." },
          ].map((post, i) => (
            <a key={i} href="#" className="irow">
              <div style={{ flex:1, minWidth:"220px" }}>
                <span style={{ fontSize:"0.6rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--accent)", fontWeight:700, display:"block", marginBottom:"0.5rem" }}>
                  {post.date} · {post.read} read
                </span>
                <h3 className="heading" style={{ fontSize:"1.4rem", lineHeight:1.05, color:"var(--fg)", marginBottom:"0.4rem" }}>{post.title}</h3>
                <p style={{ color:"var(--fg-muted)", fontSize:"0.88rem", lineHeight:1.6 }}>{post.body}</p>
              </div>
              <span className="irow-arrow heading" style={{ fontSize:"0.8rem", letterSpacing:"0.12em", display:"flex", alignItems:"center", gap:"0.4rem", flexShrink:0 }}>
                Read <ArrowRight style={{ width:"0.85rem", height:"0.85rem" }} />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ─────────────── TESTIMONIALS ─────────────── */}
      <div style={{ background:"var(--bg-card)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)" }}>
        <section style={{ maxWidth:"1200px", margin:"0 auto", padding:"8rem 1.5rem" }}>
          <p className="eyebrow" style={{ marginBottom:"1.5rem" }}>Community Impact</p>
          <h2 className="heading" style={{ fontSize:"clamp(2rem, 5vw, 3.5rem)", marginBottom:"3.5rem" }}>
            Real <span style={{ color:"var(--accent)" }}>Results.</span>
          </h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:"1.25rem" }}>
            {[
              { name:"Sarah J.",  role:"Entrepreneur", text:"The mindset shift completely changed my business trajectory. Unbelievable value." },
              { name:"Marcus T.", role:"Creator",       text:"Rare to find content that balances high-level strategy with actionable tactics. Real deal." },
              { name:"Elena R.",  role:"Designer",      text:"Stuck for months. The frameworks gave me the exact roadmap I needed to scale." },
            ].map((t, i) => (
              <div key={i} className="card" style={{ padding:"2rem" }}>
                <div style={{ color:"var(--accent)", fontSize:"0.9rem", marginBottom:"1rem", letterSpacing:"0.08em" }}>★★★★★</div>
                <p style={{ color:"var(--fg-muted)", lineHeight:1.8, fontSize:"0.95rem", marginBottom:"1.5rem" }}>&ldquo;{t.text}&rdquo;</p>
                <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", paddingTop:"1rem", borderTop:"1px solid var(--border)" }}>
                  <div style={{ width:"2rem", height:"2rem", borderRadius:"50%", background:"var(--border)", flexShrink:0, border:"1px solid var(--border)" }} />
                  <div>
                    <div className="heading" style={{ fontSize:"1rem" }}>{t.name}</div>
                    <div style={{ fontSize:"0.6rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--accent)", fontWeight:700 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ─────────────── CTA ──────────────────────── */}
      <section style={{ position:"relative", padding:"10rem 1.5rem", textAlign:"center", overflow:"hidden" }}>
        <div aria-hidden style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at center, rgba(37,211,102,0.15) 0%, transparent 70%)", pointerEvents:"none" }} />
        <div style={{ maxWidth:"700px", margin:"0 auto", position:"relative", zIndex:1 }}>
          <p className="eyebrow" style={{ marginBottom:"1.5rem", justifyContent:"center" }}>Join the movement</p>
          <h2 className="heading" style={{ fontSize:"clamp(2.5rem, 8vw, 5.5rem)", marginBottom:"1.5rem" }}>
            Join the <span style={{ color:"#25D366" }}>Inner</span> Circle.
          </h2>
          <p style={{ color:"var(--fg-muted)", fontSize:"1rem", lineHeight:1.8, maxWidth:"480px", margin:"0 auto 2.5rem" }}>
            Exclusive voice notes, raw strategies, and real-time updates — straight to your phone.
          </p>
          <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            <FaWhatsapp style={{ width:"1.2rem", height:"1.2rem" }} />
            Join WhatsApp Group
            <ArrowRight style={{ width:"0.9rem", height:"0.9rem" }} />
          </a>
        </div>
      </section>

      {/* ─────────────── FOOTER ───────────────────── */}
      <footer style={{ borderTop:"1px solid var(--border)", background:"var(--bg-card)", padding:"2.5rem 1.5rem" }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"1.5rem" }}>
          <div>
            <div className="heading" style={{ fontSize:"1.4rem" }}>
              Asif<span style={{ color:"var(--accent)" }}>.</span>
            </div>
            <p style={{ color:"var(--fg-muted)", fontSize:"0.7rem", letterSpacing:"0.12em", textTransform:"uppercase", marginTop:"0.2rem" }}>
              © 2026 Backbenchers University
            </p>
          </div>
          <div style={{ display:"flex", gap:"1.75rem" }}>
            {[["YouTube","https://youtube.com/channel/UCE6hrW3g0K_sj3XLvBxIC0g"],["Facebook","#"],["Instagram","#"]].map(([l,h]) => (
              <a key={l} href={h} className="flink">{l}</a>
            ))}
          </div>
        </div>
      </footer>

    </main>
  );
}
