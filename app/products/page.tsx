import Image from "next/image";
import { Sparkles, ArrowRight, CircleCheck, Menu } from "lucide-react";

export default function Products() {
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
              <a className="text-sm font-medium text-blue-600" href="/products">Products</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/technology">Technology</a>
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">State-of-the-art bio-wellness equipment for businesses and homes.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 mb-4">Flagship</span>
                <h2 className="text-4xl font-bold mb-6">Quantum Energy Bio-Wellness Pod</h2>
                <p className="text-gray-600 text-lg mb-8">Our signature multi-modality wellness pod combines quantum energy, red light therapy, far-infrared heat, vibrational therapy, and chromotherapy.</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3"><CircleCheck className="w-5 h-5 text-blue-600" /><span>15-60 minute customizable sessions</span></li>
                  <li className="flex items-center gap-3"><CircleCheck className="w-5 h-5 text-blue-600" /><span>5×9 foot compact footprint</span></li>
                  <li className="flex items-center gap-3"><CircleCheck className="w-5 h-5 text-blue-600" /><span>$100/hour revenue potential</span></li>
                </ul>
                <p className="text-3xl font-bold text-blue-600 mb-4">$30,000</p>
                <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white font-medium px-6 py-3 hover:bg-blue-700">Get Quote <ArrowRight className="ml-2 w-5 h-5" /></a>
              </div>
              <div className="relative">
                <Image src="/images/hero-wellness-pod.jpeg" alt="Quantum Wellness Pod" width={600} height={500} className="rounded-xl shadow-lg" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Image src="/images/pod-interior.jpeg" alt="Pod Interior" width={400} height={300} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Interior Package</h3>
                  <p className="text-gray-600 mb-4">Premium interior upgrades and accessories.</p>
                  <p className="text-2xl font-bold text-blue-600">$2,500</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Image src="/images/product-shot-1.png" alt="Maintenance Kit" width={400} height={300} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Maintenance Kit</h3>
                  <p className="text-gray-600 mb-4">Annual maintenance and cleaning supplies.</p>
                  <p className="text-2xl font-bold text-blue-600">$500/year</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Image src="/images/product-shot-2.png" alt="Training Package" width={400} height={300} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Training Package</h3>
                  <p className="text-gray-600 mb-4">Staff training and certification program.</p>
                  <p className="text-2xl font-bold text-blue-600">$1,500</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4"><Sparkles className="w-6 h-6 text-blue-400" /><span className="text-xl font-bold">Quanivo</span></div>
              <p className="text-gray-400">Quantum wellness solutions for businesses and homes.</p>
            </div>
            <div><h4 className="font-bold mb-4">Products</h4><ul className="space-y-2 text-gray-400"><li><a href="/products" className="hover:text-white">Quantum Pod</a></li><li><a href="/products" className="hover:text-white">Accessories</a></li></ul></div>
            <div><h4 className="font-bold mb-4">Company</h4><ul className="space-y-2 text-gray-400"><li><a href="/about" className="hover:text-white">About</a></li><li><a href="/contact" className="hover:text-white">Contact</a></li></ul></div>
            <div><h4 className="font-bold mb-4">Contact</h4><ul className="space-y-2 text-gray-400"><li>info@quanivo.com</li></ul></div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">© 2024 Quanivo. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}