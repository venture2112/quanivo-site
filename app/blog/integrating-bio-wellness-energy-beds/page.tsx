import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Integrating Bio Wellness Energy Beds Into Your Wellness Clinic | Quanivo Wellness Blog",
  description: "Integrating Bio Wellness Energy Beds into a wellness clinic can enhance patient care and support better treatment outcomes.",
};

export default function BlogPostPage() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0abab5]/10 to-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Link 
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-[#0abab5] mb-6 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span className="text-[#0abab5] font-medium">Business Wellness Solutions</span>
            <span>•</span>
            <span>March 27, 2026</span>
            <span>•</span>
            <span>13 min read</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Integrating Bio Wellness Energy Beds Into Your Wellness Clinic
          </h1>
          
          <div className="h-64 md:h-80 bg-gray-100 rounded-xl relative overflow-hidden mb-8">
            <Image
              src="/blog-images/69b9af61ad0276d5ae57278d.png"
              alt="Integrating Bio Wellness Energy Beds Into Your Wellness Clinic"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{
              __html: `<h2>Integrating Bio Wellness Energy Beds Into Your Wellness Clinic</h2>
<p>Integrating Bio Wellness Energy Beds into a wellness clinic can enhance patient care and support better treatment outcomes. These beds employ targeted energy therapy intended to promote relaxation, support sleep quality, and contribute to overall well-being.</p>
<h3>Integration Steps</h3>
<p>Successful integration requires planning across clinical, operational, and spatial domains to ensure consistent delivery and patient comfort.</p>
<h3>Conclusion</h3>
<p>Integrating Bio Wellness Energy Beds into a wellness clinic can enhance care delivery by supporting relaxation, sleep quality, and overall wellbeing.</p>`
            }}
          />
        </div>
      </div>
    </article>
  );
}
