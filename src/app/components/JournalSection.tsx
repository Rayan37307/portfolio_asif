"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "./animations";

export default function JournalSection({ posts }: { posts: any[] }) {
  return (
    <section id="journal" className="px-4 md:px-8 max-w-[1400px] mx-auto w-full">
      <Reveal>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-blue-500" />
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.4em]">Insights</span>
            </div>
            <h2 className="heading-display text-4xl md:text-6xl text-white">The Journal.</h2>
          </div>
          <Link href="/blog" className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors">
            <span className="text-sm font-bold uppercase tracking-widest">Read All Insights</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500 transition-all">
              <ArrowUpRight size={16} className="text-white" />
            </div>
          </Link>
        </div>
      </Reveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <StaggerItem key={post.id || i}>
            <Link href={`/blog/${post.id}`} className="group block h-full">
              <div className="bg-white/[0.03] border border-white/5 p-8 rounded-[32px] h-full flex flex-col hover:bg-white/[0.06] hover:border-blue-500/40 transition-all duration-500 relative overflow-hidden">
                {/* Background Accent */}
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors" />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Calendar size={14} className="text-blue-400" />
                  </div>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{post.date}</span>
                </div>

                <h3 className="heading text-2xl !text-white mb-6 group-hover:!text-blue-300 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-500/60 group-hover:text-blue-400 transition-colors">Read Post</span>
                  <ArrowUpRight size={20} className="text-white/20 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
