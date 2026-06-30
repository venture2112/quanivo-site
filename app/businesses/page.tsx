'use client';

import Image from "next/image";
import { Menu, ShoppingCart, User, X, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Businesses() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/images/hero-slider-1.jpg',
    '/images/hero-slider-2.jpg',
    '/images/hero-slider-3.jpg',
    '/images/hero-slider-4.jpg'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);
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
              <a className="text-sm text-gray-500 hover:text-gray-700" href="/bioresonance">Products</a>
              <a className="text-sm text-cyan-400 border-b-2 border-cyan-400 pb-1" href="/businesses">For Business</a>
              <a className="text-sm text-gray-500 hover:text-gray-700" href="/financing">Financing</a>
              <a className="text-sm text-gray-500 hover:text-gray-700" href="/faq">FAQ</a>
              <a className="text-sm text-gray-500 hover:text-gray-700" href="/blog">Blog</a>
              <a className="text-sm text-gray-500 hover:text-gray-700" href="/contact">Contact</a>
            </div>
            
            {/* Utility Icons */}
            <div className="hidden lg:flex items-center gap-4">
              <ShoppingCart className="w-5 h-5 text-gray-600" />
              <div className="w-px h-5 bg-gray-300"></div>
              <User className="w-5 h-5 text-gray-600" />
            </div>
            
            <button className="lg:hidden p-2"><Menu className="w-6 h-6" /></button>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Image Carousel */}
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="relative rounded-lg overflow-hidden bg-gray-100">
              {/* Slider Images */}
              <div className="relative h-[500px]">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={slide}
                      alt={`Wellness Clinic Interior ${index + 1}`}
                      fill
                      className="object-cover object-top"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Carousel Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white shadow-md z-10"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white shadow-md z-10"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`rounded-full transition-all ${
                      index === currentSlide
                        ? 'w-3 h-3 bg-black'
                        : 'w-2 h-2 bg-gray-400 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Chat Widget */}
        <div className="fixed bottom-6 right-6 z-50">
          {/* Chat Bubble */}
          <div className="bg-white rounded-lg shadow-lg p-4 mb-3 max-w-xs border border-gray-100">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <p className="text-sm text-gray-700">Welcome, have a question?</p>
                <p className="text-sm text-gray-500">Ask us here.</p>
              </div>
            </div>
          </div>
          {/* Chat Button */}
          <button className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600">
            <MessageCircle className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Headline Section */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Amplify Your Success with<br />Quanivo Wellness Solutions
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Welcome to Quanivo Wellness, where we empower spas, clinics, gyms, corporate wellness programs, and innovative business owners to lead the charge in the $3.7 trillion wellness industry.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you&apos;re a gym, wellness center or spa owner, chiropractor, acupuncturist, nutritionist, practitioner, or natural health doctor, our bio-wellness pods and advanced equipment, like cryotherapy chambers, hyperbaric chambers, and luxury massage chairs, are designed to elevate your offerings, attract new clients, and boost profitability. By partnering with Quanivo Wellness, you gain access to cutting-edge quantum wellness solutions that deliver transformative results, ensuring your business thrives in a competitive market.
            </p>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-8 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image src="/images/wellness-lifestyle.png" alt="Silhouette at sunset" width={400} height={300} className="w-full h-64 object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image src="/images/additional-wellness.jpeg" alt="Mind Body Soul stones" width={400} height={300} className="w-full h-64 object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image src="/images/pod-session.jpeg" alt="Woman with light" width={400} height={300} className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Why Choose Quanivo Wellness<br />for Your Business?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our flagship Quantum Energy Bio-Wellness Pod is a game-changer, blending quantum energy, red light therapy (630nm-850nm), far-infrared heat, vibrational therapy, and more to create immersive 15-60 minute sessions that enhance circulation, detoxification, muscle recovery, and mental clarity. Priced at an average of $100/hour, these pods capitalize on your existing clientele—athletes, busy professionals, and wellness enthusiasts—while drawing new patrons with a service so exclusive it often commands waitlists due to limited availability. Requiring just 5x9 feet of space, the pod is a perfect fit for underutilized areas in spas, gyms, hotels, or wellness resorts, delivering rapid profitability with minimal staff training and seamless integration into your operations.
            </p>
          </div>
        </section>

        {/* Tailored Solutions Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
              Tailored Solutions for<br />Diverse Wellness Businesses
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Wellness Practitioners:</h3>
                <p className="text-gray-600 leading-relaxed">
                  Chiropractors, acupuncturists, and natural doctors can enhance their practice with our bio-wellness pods, offering clients a unique experience that complements existing therapies.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Spas and Gyms:</h3>
                <p className="text-gray-600 leading-relaxed">
                  Maximize unused space and elevate your brand as a cutting-edge wellness destination. Our equipment, designed with modern elegance, creates a luxurious ambiance, encouraging repeat visits and boosting revenue by up to 30%, as seen with our cryotherapy chambers and massage technologies.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Corporate Wellness Programs:</h3>
                <p className="text-gray-600 leading-relaxed">
                  Large businesses seeking employee perks can integrate our pods to reduce sick days and insurance claims. Bulk pricing is available, making it cost-effective to foster a healthier workforce with benefits like pain relief and stress reduction. Our hyperbaric chambers and massage chairs further enhance corporate wellness initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Investment Section */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Strategic Investment for<br />Long-Term Growth
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Investing in Quanivo&apos;s wellness solutions positions your business at the forefront of the holistic health movement. Our bio-wellness pods and related equipment offer customizable protocols for weight management, recovery, or relaxation, driving client loyalty and organic growth. With ease of use, your operations remain streamlined, allowing you to focus on delivering exceptional services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Transform your business into a beacon of health and profitability with Quanivo Wellness, where innovation meets unparalleled client satisfaction.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 relative">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    <circle cx="20" cy="20" r="15" fill="#56CCF2" />
                    <path d="M20 5 Q32 20 20 35 Q8 20 20 5" fill="none" stroke="white" strokeWidth="3" />
                  </svg>
                </div>
                <span className="text-xl font-semibold text-gray-800">Quanivo</span>
              </div>
              <p className="text-gray-500 text-sm">Quantum wellness solutions for businesses and homes.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="/about-us" className="hover:text-gray-700">About Us</a></li>
                <li><a href="/bioresonance" className="hover:text-gray-700">Products</a></li>
                <li><a href="/businesses" className="hover:text-gray-700">For Business</a></li>
                <li><a href="/financing" className="hover:text-gray-700">Financing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="/bioresonance" className="hover:text-gray-700">Bioresonance</a></li>
                <li><a href="/hyperbaric" className="hover:text-gray-700">Hyperbaric</a></li>
                <li><a href="/infrared" className="hover:text-gray-700">Infrared</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>760-203-6399</li>
                <li>hello@quanivo.com</li>
                <li>Carlsbad, CA 92011</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Quanivo Wellness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
