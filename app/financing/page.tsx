import Image from "next/image";
import { Menu, X, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export default function Financing() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a className="flex items-center" href="/">
              <Image src="/images/logo-new.jpg" alt="Quanivo" width={40} height={40} className="rounded" />
              
            </a>
            <div className="hidden lg:flex items-center gap-8">
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/">Home</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/about-us">About Us</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/products">Products</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/businesses">For Business</a>
              <a className="text-sm font-medium text-gray-900" href="/financing">Financing</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/faq">FAQ</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/blog">Blog</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/contact">Contact</a>
              <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white text-sm font-medium px-6 py-3 hover:bg-blue-700">Get Quote</a>
            </div>
            <button className="lg:hidden p-2"><Menu className="w-6 h-6" /></button>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/financing-hero.jpg" 
          alt="Wellness Equipment Financing" 
          fill
          className="object-cover object-[center_45%]"
        />
      </section>

      {/* Financing Available Section */}
      <section className="pt-20 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Financing Available</h1>
          
          <h2 className="text-2xl md:text-3xl font-normal text-gray-800 mb-6">Why Invest in Wellness Equipment?</h2>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            High-quality wellness equipment, such as bio-resonance pods, cryotherapy, massage chairs, infrared, or advanced fitness machines, can significantly enhance your health and well-being. However, the upfront cost can be a barrier. Our flexible financing options make it easier to bring these transformative tools into your home without breaking the bank.
          </p>
        </div>
      </section>

      {/* Flexible Financing Options Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Flexible Financing Options</h2>
          
          <p className="text-lg text-gray-600 text-center mb-10">
            We partner with trusted financing providers to offer affordable payment plans that fit your budget.
          </p>
          
          <p className="text-lg text-gray-600 text-center mb-8">
            Spread the cost of your wellness equipment over time with manageable monthly payments.
          </p>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3"><strong>Affirm</strong></h3>
              <p className="text-gray-600">Affirm offers transparent financing with fixed monthly payments. Choose a plan that suits you, with terms ranging from 3 to 36 months. Enjoy competitive interest rates and no hidden fees. Check your eligibility in seconds without impacting your credit score.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3"><strong>Afterpay</strong></h3>
              <p className="text-gray-600">With Afterpay, you can split your purchase into four interest-free payments, due every few weeks. It's a simple way to get your wellness equipment now and pay over time, with no credit check required for most purchases.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3"><strong>Klarna</strong></h3>
              <p className="text-gray-600">Klarna provides flexible payment options, including paying in 4 interest-free installments or financing over longer terms with competitive rates. Select a plan at checkout and enjoy instant approval with clear terms.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3"><strong>Clearpay</strong></h3>
              <p className="text-gray-600">Clearpay allows you to split your purchase into four interest-free payments, paid every two weeks. It's a straightforward option for budgeting your wellness investment, with no hidden fees.</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 text-center mt-10">
            These options allow you to enjoy your equipment immediately while paying at a pace that works for you.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">How It Works</h2>
          
          <p className="text-lg text-gray-600 text-center mb-10">
            We make it easy for you to choose one of our financing options
          </p>
          
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="flex gap-4">
              <span className="text-cyan-500 font-bold text-xl">1.</span>
              <p className="text-gray-600"><em className="font-semibold text-gray-800">Choose Your Equipment</em>: Browse our selection of premium wellness products.</p>
            </div>
            
            <div className="flex gap-4">
              <span className="text-cyan-500 font-bold text-xl">2.</span>
              <p className="text-gray-600"><em className="font-semibold text-gray-800">Select Financing at Checkout</em>: Pick Affirm or Afterpay and complete a quick application.</p>
            </div>
            
            <div className="flex gap-4">
              <span className="text-cyan-500 font-bold text-xl">3.</span>
              <p className="text-gray-600"><em className="font-semibold text-gray-800">Get Approved</em>: Receive instant approval in most cases, with clear terms upfront.</p>
            </div>
            
            <div className="flex gap-4">
              <span className="text-cyan-500 font-bold text-xl">4.</span>
              <p className="text-gray-600"><em className="font-semibold text-gray-800">Enjoy Your Equipment</em>: Get your equipment now, and you pay over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Image src="/images/logo-new.jpg" alt="Quanivo" width={32} height={32} className="rounded" />
                
              </div>
              <p className="text-gray-400">Quantum wellness solutions for businesses and homes.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about-us" className="hover:text-white">About Us</a></li>
                <li><a href="/products" className="hover:text-white">Products</a></li>
                <li><a href="/businesses" className="hover:text-white">For Business</a></li>
                <li><a href="/financing" className="hover:text-white">Financing</a></li>
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
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> 760-203-6399</li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@quanivo.com</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Carlsbad, CA 92011</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 Quanivo Wellness. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg hover:bg-cyan-500 transition-colors">
          <MessageCircle className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
}
