import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getSortedPostsData } from "@/lib/posts";

export default function BlogList() {
  const posts = getSortedPostsData();

  return (
    <main style={{ minHeight:"100vh", paddingTop:"8rem", paddingBottom:"6rem" }}>
      <div style={{ maxWidth:"780px", margin:"0 auto", padding:"0 1.5rem" }}>

        <Link href="/" className="btn btn-outline" style={{ fontSize:"0.75rem", padding:"0.5rem 1rem", marginBottom:"3.5rem", display:"inline-flex" }}>
          <ArrowLeft style={{ width:"0.8rem", height:"0.8rem" }} /> Back
        </Link>

        <div style={{ marginBottom:"3.5rem" }}>
          <p className="eyebrow" style={{ marginBottom:"1.25rem" }}>Written signal</p>
          <h1 className="heading" style={{ fontSize:"clamp(3rem, 9vw, 6rem)", marginBottom:"1rem" }}>
            The <span style={{ color:"var(--accent)" }}>Signal.</span>
          </h1>
          <p style={{ color:"var(--fg-muted)", fontSize:"1rem", lineHeight:1.75, maxWidth:"440px" }}>
            Thoughts, strategies, and pure signal on mindset and execution. No fluff.
          </p>
        </div>

        <div className="rule" style={{ marginBottom:"2.5rem" }} />

        <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
          {posts.length > 0 ? posts.map(({ id, date, title, excerpt, category }) => (
            <Link key={id} href={`/blog/${id}`} className="bcard">
              <div style={{ flex:1, minWidth:"220px" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", marginBottom:"0.6rem", flexWrap:"wrap" }}>
                  <span style={{
                    fontSize:"0.58rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase",
                    color:"var(--accent)", background:"rgba(82,113,255,0.08)", padding:"0.18rem 0.6rem",
                    borderRadius:"3px", border:"1px solid rgba(82,113,255,0.18)",
                  }}>{category}</span>
                  <span style={{ color:"var(--fg-muted)", fontSize:"0.78rem" }}>
                    {new Date(date).toLocaleDateString("en-US", { year:"numeric", month:"long", day:"numeric" })}
                  </span>
                </div>
                <h2 className="heading" style={{ fontSize:"clamp(1.3rem, 3vw, 1.75rem)", lineHeight:1.05, color:"var(--fg)", marginBottom:"0.4rem" }}>
                  {title}
                </h2>
                <p style={{ color:"var(--fg-muted)", fontSize:"0.88rem", lineHeight:1.6 }}>{excerpt}</p>
              </div>
              <span className="bcard-arrow heading" style={{ fontSize:"0.78rem", letterSpacing:"0.12em", display:"flex", alignItems:"center", gap:"0.4rem", flexShrink:0 }}>
                Read <ArrowRight style={{ width:"0.85rem", height:"0.85rem" }} />
              </span>
            </Link>
          )) : (
            <div style={{ textAlign:"center", padding:"5rem 0", color:"var(--fg-muted)" }}>
              <div className="heading" style={{ fontSize:"4rem", opacity:0.15, marginBottom:"1rem" }}>∅</div>
              <p style={{ fontSize:"0.8rem", letterSpacing:"0.15em", textTransform:"uppercase", fontWeight:700 }}>No posts yet.</p>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
