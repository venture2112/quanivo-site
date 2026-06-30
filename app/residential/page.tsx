import Image from "next/image";
import { Sparkles, Menu, Home, Heart, Moon, Shield } from "lucide-react";

export default function Residential() {
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
              <a className="text-sm font-medium text-blue-600" href="/residential">For Home</a>
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">For Your Home</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Bring the future of wellness into your home with our residential quantum wellness pod.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold mb-6">Wellness at Home</h2>
                <p className="text-gray-600 text-lg mb-8">Transform your home into a personal wellness sanctuary. The compact 5×9 foot design fits perfectly in most homes, garages, or dedicated wellness rooms.</p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3"><Home className="w-6 h-6 text-blue-600 flex-shrink-0" /><div><h4 className="font-bold">Compact Design</h4><p className="text-sm text-gray-600">Fits in most spaces</p></div></div>
                  <div className="flex items-start gap-3"><Heart className="w-6 h-6 text-blue-600 flex-shrink-0" /><div><h4 className="font-bold">Daily Wellness</h4><p className="text-sm text-gray-600">15-60 min sessions</p></div></div>
                  <div className="flex items-start gap-3"><Moon className="w-6 h-6 text-blue-600 flex-shrink-0" /><div><h4 className="font-bold">Better Sleep</h4><p className="text-sm text-gray-600">Improved rest quality</p></div></div>
                  <div className="flex items-start gap-3"><Shield className="w-6 h-6 text-blue-600 flex-shrink-0" /><div><h4 className="font-bold">Family Health</h4><p className="text-sm text-gray-600">For all ages</p></div></div>
                </div>
              </div>
              <Image src="/images/wellness-lifestyle.png" alt="Home Wellness" width={600} height={500} className="rounded-xl shadow-lg" />
            </div>

            <div className="bg-white rounded-xl shadow-lg p-12 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Home Installation Includes:</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-blue-600 font-bold">1</span></div>
                  <h4 className="font-bold mb-2">White-Glove Delivery</h4>
                  <p className="text-gray-600">Professional delivery and placement</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-blue-600 font-bold">2</span></div>
                  <h4 className="font-bold mb-2">Expert Setup</h4>
                  <p className="text-gray-600">Complete installation and testing</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-blue-600 font-bold">3</span></div>
                  <h4 className="font-bold mb-2">Training Session</h4>
                  <p className="text-gray-600">Learn to use your pod effectively</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 rounded-xl shadow-lg p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready for Home Wellness?</h2>
              <p className="text-xl mb-8">Schedule a home consultation to see how the Quantum Pod fits your space.</p>
              <a href="/contact" className="inline-flex items-center justify-center bg-white text-blue-600 font-medium text-lg px-8 py-4 rounded-lg hover:bg-gray-100">Schedule Consultation</a>
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