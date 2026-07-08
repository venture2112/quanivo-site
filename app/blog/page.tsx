import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { blogPosts } from "./blog-data";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a className="flex items-center gap-2" href="/">
              <Image src="/images/logo-new.jpg" alt="Quanivo" width={40} height={40} className="rounded" />
              <span className="text-2xl font-bold text-gray-900">Quanivo</span>
            </a>
            <div className="hidden lg:flex items-center gap-8">
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/">Home</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/about-us">About Us</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/products">Products</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/businesses">For Business</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/financing">Financing</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/faq">FAQ</a>
              <a className="text-sm font-medium text-gray-900" href="/blog">Blog</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/contact">Contact</a>
              <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white text-sm font-medium px-6 py-3 hover:bg-blue-700">Get Quote</a>
            </div>
            <button className="lg:hidden p-2"><Menu className="w-6 h-6" /></button>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-20">
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
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/images/logo-new.jpg" alt="Quanivo" width={32} height={32} className="rounded" />
                <span className="text-xl font-bold">Quanivo</span>
              </div>
              <p className="text-gray-400">Quantum wellness solutions for businesses and homes.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/about-us" className="hover:text-white">About Us</a></li>
                <li><a href="/products" className="hover:text-white">Products</a></li>
                <li><a href="/businesses" className="hover:text-white">For Business</a></li>
                <li><a href="/financing" className="hover:text-white">Financing</a></li>
                <li><a href="/faq" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/bioresonance" className="hover:text-white">Bioresonance</a></li>
                <li><a href="/hyperbaric" className="hover:text-white">Hyperbaric</a></li>
                <li><a href="/infrared" className="hover:text-white">Infrared</a></li>
                <li><a href="/cryotherapy" className="hover:text-white">Cryotherapy</a></li>
                <li><a href="/massage-chairs" className="hover:text-white">Massage Chairs</a></li>
                <li><a href="/fitness" className="hover:text-white">Fitness</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@quanivo.com</li>
                <li>760-203-6399</li>
                <li>Carlsbad, CA 92011</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Quanivo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
