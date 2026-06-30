import Image from "next/image";
import { Sparkles, Menu, Zap, Sun, Waves, Palette } from "lucide-react";

export default function Technology() {
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
              <a className="text-sm font-medium text-blue-600" href="/technology">Technology</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/business">For Business</a>
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Technology</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Five powerful modalities combined into one transformative experience.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"><Zap className="w-8 h-8 text-blue-600" /></div>
                <h3 className="text-xl font-bold mb-2">Quantum Energy</h3>
                <p className="text-gray-600">Scalar wave technology for cellular regeneration.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4"><Sun className="w-8 h-8 text-red-600" /></div>
                <h3 className="text-xl font-bold mb-2">Red Light Therapy</h3>
                <p className="text-gray-600">Photobiomodulation for tissue repair and inflammation reduction.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"><Waves className="w-8 h-8 text-orange-600" /></div>
                <h3 className="text-xl font-bold mb-2">Far-Infrared Heat</h3>
                <p className="text-gray-600">Deep penetrating heat for detoxification and circulation.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"><Palette className="w-8 h-8 text-purple-600" /></div>
                <h3 className="text-xl font-bold mb-2">Chromotherapy</h3>
                <p className="text-gray-600">Color light therapy for mood and energy balancing.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <Image src="/images/benefits-chart.png" alt="Technology Benefits" width={600} height={500} className="w-full h-full object-cover" />
                <div className="p-12">
                  <h2 className="text-3xl font-bold mb-6">Bio-Stacking™ Technology</h2>
                  <p className="text-gray-600 text-lg mb-6">Our proprietary Bio-Stacking™ approach combines multiple therapeutic modalities simultaneously, creating a synergistic effect greater than any single therapy alone.</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span><span>Enhanced cellular ATP production</span></li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span><span>Improved mitochondrial function</span></li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span><span>Reduced oxidative stress</span></li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span><span>Accelerated recovery</span></li>
                  </ul>
                </div>
              </div>
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