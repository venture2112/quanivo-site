import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../blog-data";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  
  return {
    title: `${post.title} | Quanivo Wellness Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    notFound();
  }
  
  // Get related posts (same category or recent)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);
  
  if (relatedPosts.length < 2) {
    const otherPosts = blogPosts
      .filter((p) => p.slug !== slug && !relatedPosts.find((rp) => rp.slug === p.slug))
      .slice(0, 2 - relatedPosts.length);
    relatedPosts.push(...otherPosts);
  }

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
            <span className="text-[#0abab5] font-medium">{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="h-64 md:h-80 bg-gray-100 rounded-xl relative overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
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
          {/* Excerpt / Summary */}
          <div className="bg-gradient-to-br from-[#0abab5]/5 to-white rounded-xl p-8 mb-8 border border-[#0abab5]/10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Article Summary</h2>
            <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
              {post.excerpt}
            </p>
            <Link 
              href={`/blog/full/${slug}`}
              className="inline-flex items-center px-6 py-3 bg-[#0abab5] text-white font-medium rounded-lg hover:bg-[#09a8a3] transition-colors"
            >
              Read Full Story
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Key Takeaways */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#0abab5]/10 text-[#0abab5] mr-3 mt-0.5 flex-shrink-0 text-sm font-bold">1</span>
                <span className="text-gray-700">Understanding the fundamentals of {post.category.toLowerCase()} and its applications</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#0abab5]/10 text-[#0abab5] mr-3 mt-0.5 flex-shrink-0 text-sm font-bold">2</span>
                <span className="text-gray-700">Practical strategies for implementing these insights in your wellness routine</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#0abab5]/10 text-[#0abab5] mr-3 mt-0.5 flex-shrink-0 text-sm font-bold">3</span>
                <span className="text-gray-700">Evidence-based approaches to enhance your overall well-being</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Understanding {post.category}
          </h2>
          
          <p className="text-gray-700 mb-6">
            {post.category} represents a significant advancement in holistic health approaches. 
            By integrating modern technology with time-tested wellness principles, practitioners 
            and individuals alike can achieve remarkable improvements in their health outcomes.
          </p>

          <p className="text-gray-700 mb-6">
            The field continues to evolve as research reveals new connections between energy, 
            biology, and overall wellness. This article explores the current state of knowledge 
            and practical applications for those seeking to enhance their health journey.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Benefits and Applications
          </h2>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#0abab5]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0abab5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Improved Wellness</h3>
                <p className="text-sm text-gray-600">Enhanced overall health and vitality</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#0abab5]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0abab5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Holistic Support</h3>
                <p className="text-sm text-gray-600">Comprehensive mind-body benefits</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#0abab5]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0abab5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Enhanced Energy</h3>
                <p className="text-sm text-gray-600">Improved vitality and focus</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Implementation Strategies
          </h2>
          
          <p className="text-gray-700 mb-6">
            Successfully integrating these wellness practices requires a thoughtful approach. 
            Start by assessing your current routine and identifying areas where these techniques 
            can provide the most benefit. Consider consulting with wellness professionals who 
            can guide your implementation.
          </p>

          <p className="text-gray-700 mb-6">
            Consistency is key. Whether you&apos;re incorporating these practices at home or 
            in a professional setting, regular application yields the best results. Track your 
            progress and adjust your approach based on your individual response.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 mb-12">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How long does it take to see results?</h3>
              <p className="text-gray-700">
                Results vary by individual, but many people report noticing improvements within 
                2-4 weeks of consistent practice. For optimal benefits, maintain regular sessions 
                over a period of 2-3 months.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Is this suitable for everyone?</h3>
              <p className="text-gray-700">
                While generally safe for most people, we recommend consulting with a healthcare 
                provider before starting any new wellness regimen, especially if you have existing 
                health conditions or are pregnant.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How often should I practice?</h3>
              <p className="text-gray-700">
                For best results, we recommend 2-3 sessions per week. Consistency is more important 
                than duration, so even shorter regular sessions can yield significant benefits over time.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#0abab5]/10 to-white rounded-xl p-8 border border-[#0abab5]/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience the Benefits?</h2>
            <p className="text-gray-700 mb-6">
              Contact us to learn more about how our wellness solutions can support your health journey. 
              Our team is here to answer your questions and guide you toward optimal well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#0abab5] text-white font-medium rounded-lg hover:bg-[#09a8a3] transition-colors"
              >
                Get in Touch
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link 
                href="/businesses"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#0abab5] text-[#0abab5] font-medium rounded-lg hover:bg-[#0abab5] hover:text-white transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Author Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-[#0abab5]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-[#0abab5]">{post.author.charAt(0)}</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">{post.author}</h3>
              <p className="text-gray-600 text-sm">{post.authorBio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {relatedPosts.map((relatedPost) => (
            <article key={relatedPost.slug} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <Link href={`/blog/${relatedPost.slug}`}>
                <div className="h-48 bg-gray-100 relative overflow-hidden">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span className="text-[#0abab5] font-medium">{relatedPost.category}</span>
                  <span>•</span>
                  <span>{relatedPost.readTime}</span>
                </div>
                <Link href={`/blog/${relatedPost.slug}`}>
                  <h3 className="text-lg font-bold text-gray-900 hover:text-[#0abab5] transition-colors">
                    {relatedPost.title}
                  </h3>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </article>
  );
}
