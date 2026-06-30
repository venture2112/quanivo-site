import Image from "next/image";
import { Sparkles, ArrowRight, CircleCheck, Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a className="flex items-center gap-2" href="/">
              <Sparkles className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold text-gold-gradient">Quanivo</span>
            </a>
            <div className="hidden lg:flex items-center gap-6">
              <a className="text-sm font-medium text-blue-600" href="/">Home</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/products">Products</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/technology">Technology</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/business">For Business</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/residential">For Home</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/about">About</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/blog">Blog</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/contact">Contact</a>
              <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white text-sm font-medium px-4 py-2 hover:bg-blue-700">
                Get Quote
              </a>
            </div>
            <button className="lg:hidden p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-wellness-pod.jpeg"
              alt="Quantum Wellness Pod"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center rounded-full bg-white/10 text-white text-xs font-medium px-3 py-1 mb-6 border border-white/20 backdrop-blur-sm">
              $3.7 Trillion Wellness Industry
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white">
              <span className="text-blue-400">Quantum Wellness</span>
              <br />
              <span>Redefined</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10">
              State-of-the-art bio-wellness pods and equipment for businesses and homes. Harness quantum energy, light therapy, and vibrational healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/products" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white font-medium text-lg px-8 py-4 hover:bg-blue-700">
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="/contact" className="inline-flex items-center justify-center rounded-lg border border-white text-white font-medium text-lg px-8 py-4 hover:bg-white/10">
                Request Demo
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">$100</div>
                <div className="text-sm text-white/70">Per Hour Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">5×9</div>
                <div className="text-sm text-white/70">Feet Footprint</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">30%</div>
                <div className="text-sm text-white/70">Revenue Boost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">15-60</div>
                <div className="text-sm text-white/70">Min Sessions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Flagship Product Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 mb-4">
                  Flagship Product
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Quantum Energy <span className="text-blue-gradient">Bio-Wellness Pod</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Our signature multi-modality wellness pod combines quantum energy, red light therapy, far-infrared heat, vibrational therapy, and chromotherapy in one immersive experience.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CircleCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>15-60 minute customizable sessions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CircleCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>5×9 foot compact footprint</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CircleCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Minimal staff training required</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CircleCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>$100/hour average revenue potential</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CircleCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>White-glove installation included</span>
                  </li>
                </ul>
                <a href="/products/quantum-pod" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white text-sm font-medium px-5 py-3 hover:bg-blue-700">
                  View Details
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  <div className="p-8">
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mb-6 overflow-hidden">
                      <Image
                        src="/images/pod-session.jpeg"
                        alt="Quantum Wellness Pod Session"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2">Starting at</h3>
                      <p className="text-4xl font-bold text-blue-gradient mb-4">$30,000</p>
                      <p className="text-sm text-gray-500 mb-4">Financing available • 30-day guarantee</p>
                      <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white text-sm font-medium px-5 py-3 hover:bg-blue-700 w-full">
                        Get Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Gallery Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Product Gallery</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Explore our state-of-the-art wellness equipment designed for optimal results.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/pod-interior.jpeg"
                  alt="Pod Interior"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Interior Design</h3>
                  <p className="text-gray-600">Ergonomic and comfortable interior for maximum relaxation.</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/product-shot-1.png"
                  alt="Product Shot"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Sleek Exterior</h3>
                  <p className="text-gray-600">Modern design that fits any wellness center or home.</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/product-shot-2.png"
                  alt="Product Details"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Advanced Technology</h3>
                  <p className="text-gray-600">Cutting-edge quantum energy and light therapy systems.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/images/benefits-chart.png"
                  alt="Wellness Benefits Chart"
                  width={600}
                  height={500}
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Proven <span className="text-blue-gradient">Wellness Benefits</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Our quantum wellness technology delivers measurable results across multiple health dimensions.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CircleCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Reduced inflammation and pain relief</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CircleCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Improved circulation and detoxification</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CircleCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Enhanced cellular regeneration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CircleCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Stress reduction and better sleep</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CircleCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Increased energy and vitality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Wellness Business?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Join the quantum wellness revolution. Schedule a demo and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-white text-blue-600 font-medium text-lg px-8 py-4 hover:bg-gray-100">
                Schedule Demo
              </a>
              <a href="/products" className="inline-flex items-center justify-center rounded-lg border border-white text-white font-medium text-lg px-8 py-4 hover:bg-white/10">
                View All Products
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">Quanivo</span>
              </div>
              <p className="text-gray-400">
                Quantum wellness solutions for businesses and homes.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/products" className="hover:text-white">Quantum Pod</a></li>
                <li><a href="/products" className="hover:text-white">Accessories</a></li>
                <li><a href="/products" className="hover:text-white">Financing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white">About</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@quanivo.com</li>
                <li>1-800-QUANIVO</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            © 2024 Quanivo. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}