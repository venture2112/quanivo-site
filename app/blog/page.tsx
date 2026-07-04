import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "./blog-data";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0abab5]/10 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quanivo Wellness Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights on energy therapy, holistic wellness, and innovative approaches to health and recovery.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href={`/blog/${blogPosts[0].slug}`}>
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto bg-gray-100 relative overflow-hidden">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span className="text-[#0abab5] font-medium">{blogPosts[0].category}</span>
                    <span>•</span>
                    <span>{blogPosts[0].date}</span>
                    <span>•</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-[#0abab5] transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <span className="inline-flex items-center text-[#0abab5] font-medium">
                    Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article 
                key={post.slug}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="h-48 bg-gray-100 relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span className="text-[#0abab5] font-medium">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-[#0abab5] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-[#0abab5] font-medium text-sm hover:underline"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated on Wellness Innovation
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest insights on energy therapy, holistic health, and wellness technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0abab5]"
            />
            <button className="px-6 py-3 bg-[#0abab5] text-white font-medium rounded-lg hover:bg-[#09a8a3] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
