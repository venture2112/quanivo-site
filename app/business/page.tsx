import Image from "next/image";
import { Sparkles, Menu, TrendingUp, Users, Clock, DollarSign } from "lucide-react";

export default function Business() {
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
              <a className="text-sm font-medium text-blue-600" href="/business">For Business</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/residential">For Home</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/about">About</a>
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">For Business</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Transform your wellness business with our revenue-generating quantum wellness pods.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><DollarSign className="w-8 h-8 text-green-600" /></div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">$100</h3>
                <p className="text-gray-600">Per Hour Revenue</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"><TrendingUp className="w-8 h-8 text-blue-600" /></div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">30%</h3>
                <p className="text-gray-600">Revenue Boost</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"><Users className="w-8 h-8 text-purple-600" /></div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">Minimal</h3>
                <p className="text-gray-600">Staff Training</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"><Clock className="w-8 h-8 text-orange-600" /></div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">15-60</h3>
                <p className="text-gray-600">Min Sessions</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <Image src="/images/pod-session.jpeg" alt="Business Session" width={600} height={500} className="rounded-xl shadow-lg" />
              <div>
                <h2 className="text-4xl font-bold mb-6">Perfect For:</h2>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><span className="w-3 h-3 bg-blue-600 rounded-full"></span><span className="text-lg">Spas & Wellness Centers</span></li>
                  <li className="flex items-center gap-3"><span className="w-3 h-3 bg-blue-600 rounded-full"></span><span className="text-lg">Medical & Chiropractic Offices</span></li>
                  <li className="flex items-center gap-3"><span className="w-3 h-3 bg-blue-600 rounded-full"></span><span className="text-lg">Gyms & Fitness Centers</span></li>
                  <li className="flex items-center gap-3"><span className="w-3 h-3 bg-blue-600 rounded-full"></span><span className="text-lg">Hotels & Resorts</span></li>
                  <li className="flex items-center gap-3"><span className="w-3 h-3 bg-blue-600 rounded-full"></span><span className="text-lg">Corporate Wellness Programs</span></li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-600 rounded-xl shadow-lg p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Revenue?</h2>
              <p className="text-xl mb-8">Schedule a consultation to learn how the Quantum Pod can transform your business.</p>
              <a href="/contact" className="inline-flex items-center justify-center bg-white text-blue-600 font-medium text-lg px-8 py-4 rounded-lg hover:bg-gray-100">Get Started</a>
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