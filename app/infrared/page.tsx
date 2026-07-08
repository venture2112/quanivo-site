"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, Phone, Mail, MapPin, Check, Sun, Heart, Thermometer, Zap, Timer, Settings, Shield, Layers, ArrowRight, Power } from "lucide-react";

export default function Infrared() {
  const [mainImage, setMainImage] = useState("/images/infrared-panel-1.jpg");
  
  const images = [
    "/images/infrared-panel-1.jpg",
    "/images/infrared-panel-2.jpg",
    "/images/infrared-panel-3.jpg",
    "/images/infrared-panel-4.jpg",
    "/images/infrared-panel-5.jpg",
    "/images/infrared-panel-6.jpg",
    "/images/infrared-panel-7.jpg",
    "/images/infrared-panel-8.jpg",
    "/images/infrared-panel-9.jpg"
  ];

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
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/financing">Financing</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/faq">FAQ</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/blog">Blog</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/contact">Contact</a>
              <a href="/" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white text-sm font-medium px-6 py-3 hover:bg-blue-700">Get Quote</a>
            </div>
            <button className="lg:hidden p-2"><Menu className="w-6 h-6" /></button>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-900 to-red-800">
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Infrared Wellness Products
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Advanced infrared technology for deep heat therapy, detoxification, and holistic wellness
            </p>
          </div>
        </section>

        {/* Product 1: Infrared Light Panels */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Main Large Image */}
                <div className="mb-4">
                  <Image 
                    src={mainImage}
                    alt="Infrared Light Panels" 
                    width={600} 
                    height={500} 
                    className="rounded-xl shadow-lg object-cover w-full h-[28rem] md:h-[32rem]" 
                  />
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-5 gap-2">
                  {images.slice(0, 5).map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setMainImage(img)}
                      className={`relative rounded-lg overflow-hidden transition-all ${mainImage === img ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-blue-300'}`}
                    >
                      <Image src={img} alt={`Panel View ${idx + 1}`} width={150} height={100} className="object-cover w-full h-24" />
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {images.slice(5).map((img, idx) => (
                    <button 
                      key={idx + 5}
                      onClick={() => setMainImage(img)}
                      className={`relative rounded-lg overflow-hidden transition-all ${mainImage === img ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-blue-300'}`}
                    >
                      <Image src={img} alt={`Panel View ${idx + 6}`} width={150} height={100} className="object-cover w-full h-24" />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Infrared Light Panels</h2>
                <p className="text-3xl font-bold text-blue-600 mb-2">Starting at $895.00</p>
                <p className="text-gray-500 text-sm mb-6">Available in 1500W, 2100W, and 2400W options</p>
                <p className="text-gray-600 text-lg mb-6">
                  Transform your wellness routine with our premium Infrared Wellness Panels. Designed to deliver therapeutic warmth for clinics, studios, and home sanctuaries with deep-penetrating heat to enhance circulation, relieve muscle tension, and promote detoxification.
                </p>
                
                {/* Product Video */}
                <div className="mb-6">
                  <video 
                    controls 
                    className="w-full max-w-sm rounded-xl shadow-lg aspect-video"
                    poster="/images/infrared-panel-1.jpg"
                  >
                    <source src="/videos/red-light-panels.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Sun className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">5 Wavelengths: 630-850nm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Power className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">600W Real Power</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Timer className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">50,000 Hour Lifespan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">IP65 Waterproof</span>
                  </div>
                </div>
                <a href="/" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white font-medium text-lg px-8 py-4 hover:bg-blue-700">
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Product 1 Features - Light Panels */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Infrared Panel Technical Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-600">
                <Sun className="w-8 h-8 text-red-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Dual Chip Full Body Red Therapy</h4>
                <p className="text-gray-600 text-sm">5 wavelengths: 630, 660, 810, 830, 850nm deliver therapeutic benefits by targeting different depths and biological processes in the body.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-600">
                <Zap className="w-8 h-8 text-orange-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">600W Real Power</h4>
                <p className="text-gray-600 text-sm">Delivers robust, consistent energy output across all wavelengths for maximum therapeutic effect.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-yellow-600">
                <Timer className="w-8 h-8 text-yellow-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">50,000 Hour Lifespan</h4>
                <p className="text-gray-600 text-sm">Ensures decades of reliable performance with high-quality LED components.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                <Settings className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Digital Time Adjustment</h4>
                <p className="text-gray-600 text-sm">Adjust the time to your personal needs with easy-to-use digital controls.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-600">
                <Zap className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">High-Power 5W LED</h4>
                <p className="text-gray-600 text-sm">Delivers intense, focused energy across 630nm-850nm wavelengths, enhancing deep tissue penetration.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-cyan-600">
                <Shield className="w-8 h-8 text-cyan-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">IP65 Waterproof</h4>
                <p className="text-gray-600 text-sm">Ensures robust protection against water and dust, guaranteeing safe, durable performance in humid or clinical environments.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-600">
                <Layers className="w-8 h-8 text-green-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Multiple Accessories Included</h4>
                <p className="text-gray-600 text-sm">Lifting rope, wire rope, power cable, door mask, eye mask, ear plugs, and door hook included.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-600">
                <Shield className="w-8 h-8 text-indigo-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">5 Year Warranty</h4>
                <p className="text-gray-600 text-sm">Enjoy peace of mind that your product will provide many years of value.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-pink-600">
                <Layers className="w-8 h-8 text-pink-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Stand Available</h4>
                <p className="text-gray-600 text-sm">Optional stand available as an add-on for freestanding installation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Infrared Products */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Complete Your Infrared Wellness Suite</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Energy Bed Card */}
              <a href="/bioresonance" className="group block bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-100 hover:border-orange-300 transition-all hover:shadow-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Bio-Wellness Energy Bed</h4>
                    <p className="text-3xl font-bold text-orange-600">$14,900.00</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-orange-600 group-hover:translate-x-2 transition-transform" />
                </div>
                <p className="text-gray-600 mb-4">
                  Full-body infrared therapy bed with bioresonance technology, jade stone surface, and 6 independent heating zones.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Far-Infrared Heat</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Bioresonance</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Jade Stones</span>
                </div>
                <p className="mt-4 text-sm text-orange-600 font-medium">View full details & photos →</p>
              </a>
              
              {/* Energy Recliner Card */}
              <a href="/bioresonance" className="group block bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Bio-Wellness Energy Recliner</h4>
                    <p className="text-3xl font-bold text-blue-600">$14,900.00</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-blue-600 group-hover:translate-x-2 transition-transform" />
                </div>
                <p className="text-gray-600 mb-4">
                  Seated infrared therapy with the same bioresonance technology in a comfortable recliner format.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Compact Design</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Full Features</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Seated Therapy</span>
                </div>
                <p className="mt-4 text-sm text-blue-600 font-medium">View full details & photos →</p>
              </a>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">How Infrared Therapy Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sun className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Deep Heat Penetration</h3>
                <p className="text-gray-600">Far-infrared rays penetrate 1.5 to 2 inches into the body, warming muscles, joints, and tissues from the inside out for deep therapeutic benefits.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Increased Circulation</h3>
                <p className="text-gray-600">The gentle heat expands blood vessels, improving circulation and delivering more oxygen and nutrients to cells while removing toxins.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Thermometer className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Natural Detoxification</h3>
                <p className="text-gray-600">Deep sweating induced by infrared heat helps eliminate heavy metals, toxins, and impurities through the skin&apos;s pores.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-orange-900 to-red-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-16 text-center">Key Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <Check className="w-8 h-8 mb-4 text-orange-300" />
                <h3 className="text-lg font-bold mb-2">Pain Relief</h3>
                <p className="text-white/80 text-sm">Reduces muscle tension, joint pain, and chronic discomfort</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <Check className="w-8 h-8 mb-4 text-orange-300" />
                <h3 className="text-lg font-bold mb-2">Improved Skin</h3>
                <p className="text-white/80 text-sm">Promotes collagen production and clearer, healthier skin</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <Check className="w-8 h-8 mb-4 text-orange-300" />
                <h3 className="text-lg font-bold mb-2">Weight Management</h3>
                <p className="text-white/80 text-sm">Burns calories and supports metabolism during sessions</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <Check className="w-8 h-8 mb-4 text-orange-300" />
                <h3 className="text-lg font-bold mb-2">Stress Reduction</h3>
                <p className="text-white/80 text-sm">Promotes deep relaxation and reduces cortisol levels</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Experience Infrared Therapy?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to learn more about our infrared products and find the perfect solution for your wellness needs.
            </p>
            <a href="/" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white font-medium text-lg px-10 py-4 hover:bg-blue-700">
              Get Your Quote
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Post Address and Mail</h3>
                <p className="text-gray-600 mb-2"><strong>Email:</strong> hello@quanivo.com</p>
                <p className="text-gray-600"><strong>Address:</strong><br />Office: 7040 Avenida Encinas<br />Carlsbad CA 92011</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Get In Touch</h3>
                <p className="text-gray-600"><strong>Phone Number:</strong><br />760-203-6399</p>
              </div>
              <div>
                <Image src="/images/pod-session.jpeg" alt="Wellness Pod" width={400} height={300} className="rounded-xl shadow-lg" />
              </div>
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
}
