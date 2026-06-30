import Image from "next/image";
import { Sparkles, Menu, Target, Eye, Award } from "lucide-react";

export default function About() {
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
              <a className="text-sm font-medium text-blue-600" href="/about">About</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/blog">Blog</a>
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">About Quanivo</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Pioneering the future of wellness through quantum technology.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <Image src="/images/additional-wellness.jpeg" alt="About Quanivo" width={600} height={500} className="rounded-xl shadow-lg" />
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 text-lg mb-6">Quanivo was founded with a mission to make advanced wellness technology accessible to everyone. We believe that optimal health shouldn't be limited to elite athletes or expensive clinics.</p>
                <p className="text-gray-600 text-lg">Our team of engineers, wellness experts, and medical advisors have spent years developing the Quantum Wellness Pod - a device that combines multiple proven therapeutic modalities into one seamless experience.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"><Target className="w-8 h-8 text-blue-600" /></div>
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-gray-600">To democratize access to advanced wellness technology for homes and businesses worldwide.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"><Eye className="w-8 h-8 text-purple-600" /></div>
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p className="text-gray-600">A world where everyone has access to the tools they need to achieve optimal health and vitality.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><Award className="w-8 h-8 text-green-600" /></div>
                <h3 className="text-xl font-bold mb-2">Our Values</h3>
                <p className="text-gray-600">Innovation, accessibility, and a commitment to evidence-based wellness solutions.</p>
              </div>
            </div>

            <div className="bg-blue-600 rounded-xl shadow-lg p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Join the Wellness Revolution</h2>
              <p className="text-xl mb-8">Be part of the future of health and wellness.</p>
              <a href="/contact" className="inline-flex items-center justify-center bg-white text-blue-600 font-medium text-lg px-8 py-4 rounded-lg hover:bg-gray-100">Get in Touch</a>
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