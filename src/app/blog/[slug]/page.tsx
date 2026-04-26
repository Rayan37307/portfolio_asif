import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  let postData;
  try {
    postData = await getPostData(resolvedParams.slug);
  } catch (e) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden pt-32 pb-20 px-6">
      <article className="w-full max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-zinc-400 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Articles
        </Link>
        
        <header className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">{postData.category}</span>
            <span className="text-zinc-500 text-sm">{new Date(postData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
            {postData.title}
          </h1>
        </header>

        <div 
          className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-accent hover:prose-a:text-accent-glow prose-strong:text-white prose-blockquote:border-accent prose-blockquote:bg-accent/5 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-p:text-zinc-300 prose-li:text-zinc-300"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
        />
      </article>
    </main>
  );
}
