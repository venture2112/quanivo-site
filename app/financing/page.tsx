import Image from "next/image";
import { Menu, ShoppingCart, User, X, MessageCircle } from "lucide-react";

export default function Financing() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a className="flex items-center gap-2" href="/">
              <div className="w-10 h-10 relative">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <circle cx="20" cy="20" r="15" fill="#56CCF2" />
                  <path d="M20 5 Q32 20 20 35 Q8 20 20 5" fill="none" stroke="white" strokeWidth="3" />
                </svg>
              </div>
              <span className="text-2xl font-semibold text-gray-800">Quanivo</span>
            </a>
            
            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-6">
              <a className="text-sm text-gray-500 hover:text-gray-700" href="/about-us">About Us</a>
              <div className="relative group">
                <a className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1" href="/bioresonance">
                  Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-48 hidden group-hover:block z-50">
                  <a href="/bioresonance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Bioresonance</a>
                  <a href="/cryotherapy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cryotherapy</a>
                  <a href="/hyperbaric" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hyperbaric Chambers</a>
                  <a href="/infrared" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Infrared</a>
                  <a href="/massage-chairs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Massage Chairs</a>
                  <a href="/fitness" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Fitness</a>
                </div>
              </div>
              <a className="text-sm text-gray-500 hover:text-gray-700" href="/businesses">For Business</a>
              <a className="text-sm text-cyan-400 border-b-2 border-cyan-400 pb-1" href="/financing">Financing</a>
              <a className="text-sm text-gray-500 hover:text-gray-700" href="/faq">FAQ</a>
              <a className="text-sm text-gray-500 hover:text-gray-700" href="/blog">Blog</a>
              <a className="text-sm text-gray-500 hover:text-gray-700" href="/contact">Contact</a>
            </div>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button className="lg:hidden p-2 text-gray-600 hover:text-gray-800">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <section className="py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden">
            <Image 
              src="/images/financing-hero.jpg" 
              alt="Wellness Equipment Financing" 
              width={1200} 
              height={400} 
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Financing Available Section */}
      <section className="py-12 bg-white">
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
      <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-6">
            <a href="/contact" className="hover:text-gray-900">Contact</a>
            <a href="/privacy-policy" className="hover:text-gray-900">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-gray-900">Terms and Conditions</a>
            <a href="/disclaimer" className="hover:text-gray-900">Disclaimer</a>
            <a href="/refund-policy" className="hover:text-gray-900">Refund Policy</a>
            <a href="/dmca" className="hover:text-gray-900">DMCA</a>
            <a href="/cookies" className="hover:text-gray-900">Cookies</a>
            <a href="/california-privacy" className="hover:text-gray-900">California Privacy</a>
            <a href="/financing" className="hover:text-gray-900">Financing</a>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold text-cyan-500 mb-2">Quanivo Wellness</h3>
            <p className="text-gray-500 text-sm">Copyright 2025. All rights reserved</p>
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
