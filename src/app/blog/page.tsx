import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getSortedPostsData } from "@/lib/posts";

export default function BlogList() {
  const allPostsData = getSortedPostsData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden pt-32 pb-20 px-6">
      <div className="w-full max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Signal</span>
        </h1>
        <p className="text-xl text-zinc-400 mb-16">Thoughts, strategies, and pure signal on mindset and execution.</p>

        <div className="flex flex-col gap-8">
          {allPostsData.map(({ id, date, title, excerpt, category }) => (
            <Link key={id} href={`/blog/${id}`} className="glass p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-colors flex flex-col md:flex-row justify-between md:items-center gap-6 group">
              <div className="flex flex-col text-left max-w-2xl">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">{category}</span>
                  <span className="text-zinc-500 text-sm">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{title}</h3>
                <p className="text-zinc-400 text-base">{excerpt}</p>
              </div>
              <div className="flex items-center text-white font-medium group-hover:text-accent transition-colors md:pl-8">
                Read <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
