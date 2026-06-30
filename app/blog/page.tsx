import Image from "next/image";
import { Sparkles, Menu, Calendar, User } from "lucide-react";

export default function Blog() {
  const posts = [
    { title: "The Science Behind Quantum Wellness", excerpt: "Exploring the research and technology that powers our wellness pods.", date: "Dec 15, 2024", author: "Dr. Sarah Chen", image: "/images/pod-interior.jpeg" },
    { title: "5 Ways Red Light Therapy Boosts Recovery", excerpt: "Discover how photobiomodulation can accelerate healing and reduce inflammation.", date: "Dec 10, 2024", author: "Mark Johnson", image: "/images/product-shot-1.png" },
    { title: "Why Wellness Centers Love Our Pods", excerpt: "Hear from business owners who have transformed their revenue with Quanivo.", date: "Dec 5, 2024", author: "Lisa Park", image: "/images/pod-session.jpeg" },
    { title: "Home Wellness: Creating Your Sanctuary", excerpt: "Tips for integrating wellness technology into your daily routine at home.", date: "Nov 28, 2024", author: "Emma Wilson", image: "/images/wellness-lifestyle.png" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a className="flex items-center gap-2" href="/">
              <Sparkles className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold text-gold-gradient">Quanivo</span>
            </a>
            <div className="hidden lg:flex items-center gap-6">
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/">Home</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/products">Products</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/technology">Technology</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/business">For Business</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/residential">For Home</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/about">About</a>
              <a className="text-sm font-medium text-blue-600" href="/blog">Blog</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/contact">Contact</a>
              <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white text-sm font-medium px-4 py-2 hover:bg-blue-700">Get Quote</a>
            </div>
            <button className="lg:hidden p-2"><Menu className="w-6 h-6" /></button>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-16">
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Insights on wellness, technology, and the future of health.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <Image src={post.image} alt={post.title} width={600} height={300} className="w-full h-48 object-cover" />
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                      <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <a href="#" className="text-blue-600 font-medium hover:underline">Read More →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div><div className="flex items-center gap-2 mb-4"><Sparkles className="w-6 h-6 text-blue-400" /><span className="text-xl font-bold">Quanivo</span></div><p className="text-gray-400">Quantum wellness solutions.</p></div>
            <div><h4 className="font-bold mb-4">Products</h4><ul className="space-y-2 text-gray-400"><li><a href="/products" className="hover:text-white">Quantum Pod</a></li></ul></div>
            <div><h4 className="font-bold mb-4">Company</h4><ul className="space-y-2 text-gray-400"><li><a href="/about" className="hover:text-white">About</a></li></ul></div>
            <div><h4 className="font-bold mb-4">Contact</h4><ul className="space-y-2 text-gray-400"><li>info@quanivo.com</li></ul></div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">© 2024 Quanivo. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}