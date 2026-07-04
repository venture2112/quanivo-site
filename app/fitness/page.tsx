"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Menu, Phone, Mail, MapPin, Check, Bike, Flame, Thermometer, Layers, Zap, Monitor, Volume2, Activity, Glasses, Award, Truck, Shield } from "lucide-react";

export default function Fitness() {
  const [mainImage, setMainImage] = useState("/images/fitness-treadmill-1.jpg");

  const images = [
    "/images/fitness-treadmill-1.jpg",
    "/images/fitness-treadmill-2.jpg",
    "/images/fitness-treadmill-3.jpg",
    "/images/fitness-treadmill-4.jpg",
    "/images/fitness-treadmill-5.jpg"
  ];
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a className="flex items-center gap-2" href="/">
              <Sparkles className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Quanivo</span>
            </a>
            <div className="hidden lg:flex items-center gap-8">
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/">Home</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/about-us">About Us</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/products">Products</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/businesses">For Business</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/financing">Financing</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/faq">FAQ</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/contact">Contact</a>
              <a href="/" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white text-sm font-medium px-6 py-3 hover:bg-blue-700">Get Quote</a>
            </div>
            <button className="lg:hidden p-2"><Menu className="w-6 h-6" /></button>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 to-teal-800">
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Advanced Fitness Equipment
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Cutting-edge fitness technology integrating infrared, cryotherapy, and smart features for optimal performance
            </p>
          </div>
        </section>

        {/* Product 1: Infrared Treadmill */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Main Large Image */}
                <div className="mb-4">
                  <Image 
                    src={mainImage}
                    alt="Infrared Treadmill" 
                    width={600} 
                    height={500} 
                    className="rounded-xl shadow-lg object-cover w-full h-[28rem] md:h-[32rem]" 
                  />
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-5 gap-2">
                  {images.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setMainImage(img)}
                      className={`relative rounded-lg overflow-hidden transition-all ${mainImage === img ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-blue-300'}`}
                    >
                      <Image src={img} alt={`Treadmill View ${idx + 1}`} width={150} height={100} className="object-cover w-full h-24" />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Infrared Treadmill</h2>
                <p className="text-3xl font-bold text-blue-600 mb-6">$9,999.00</p>
                <p className="text-gray-600 text-lg mb-6">
                  Experience fitness redefined with the Quanivo Wellness Infrared Treadmill. Integrates advanced infrared heat technology to enhance your workout, promoting improved circulation, faster muscle recovery, and reduced joint stress.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Infrared Heat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">2HP Commercial Motor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Monitor className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Large Touchscreen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">1 Year Warranty</span>
                  </div>
                </div>
                <a href="/" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white font-medium text-lg px-8 py-4 hover:bg-blue-700">
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Infrared Treadmill Technical Specifications */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Infrared Treadmill Technical Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                <Activity className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Commercial 2HP 3-Phase Motor</h4>
                <p className="text-gray-600 text-sm">Delivers powerful, reliable performance, ensuring smooth operation and durability for high-traffic wellness facilities and luxury home gyms.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-600">
                <Layers className="w-8 h-8 text-orange-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Incline Mode</h4>
                <p className="text-gray-600 text-sm">Enhances workouts by allowing adjustable elevation, targeting diverse muscle groups and boosting calorie burn for a more effective fitness experience.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-600">
                <Flame className="w-8 h-8 text-red-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Infrared Lamps</h4>
                <p className="text-gray-600 text-sm">Delivers targeted heat therapy, promoting muscle relaxation, improved circulation, and faster recovery during workouts.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-pink-600">
                <Layers className="w-8 h-8 text-pink-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Collagen Lamp</h4>
                <p className="text-gray-600 text-sm">Stimulates collagen and elastin production through targeted red light therapy at 633nm, promoting skin rejuvenation and reducing fine lines.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-600">
                <Activity className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Aromatherapy</h4>
                <p className="text-gray-600 text-sm">Infuses workouts with calming essential oils like lavender and sandalwood, promoting stress relief, enhanced focus, and a soothing sensory experience.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-600">
                <Glasses className="w-8 h-8 text-indigo-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Virtual Reality Display</h4>
                <p className="text-gray-600 text-sm">Netflix, YouTube, Facebook integration for entertainment during workouts.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-gray-600">
                <Monitor className="w-8 h-8 text-gray-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Large Touchscreen</h4>
                <p className="text-gray-600 text-sm">High-definition interface for seamless control of workout settings, streaming virtual scenic routes enhancing engagement and personalization.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-600">
                <Zap className="w-8 h-8 text-teal-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">iPhone/Android Integration</h4>
                <p className="text-gray-600 text-sm">Application control for seamless device connectivity and workout tracking.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-pink-600">
                <Volume2 className="w-8 h-8 text-pink-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Bluetooth Headphones</h4>
                <p className="text-gray-600 text-sm">Wireless audio connectivity for immersive entertainment during workouts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Warranty & Shipping */}
        <section className="py-16 bg-gradient-to-br from-green-900 to-teal-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <Flame className="w-12 h-12 mx-auto mb-4 text-green-300" />
                <h3 className="text-xl font-bold mb-2">Infrared Technology</h3>
                <p className="text-white/80">Advanced heat therapy integrated into your cardio workout</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <Shield className="w-12 h-12 mx-auto mb-4 text-green-300" />
                <h3 className="text-xl font-bold mb-2">1 Year Warranty</h3>
                <p className="text-white/80">Full manufacturer warranty on all fitness equipment</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <Award className="w-12 h-12 mx-auto mb-4 text-green-300" />
                <h3 className="text-xl font-bold mb-2">Commercial Grade</h3>
                <p className="text-white/80">Built for high-traffic facilities and luxury home gyms</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Transform Your Fitness Routine?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to learn more about our advanced fitness equipment and find the perfect solution for your wellness goals.
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
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">Quanivo</span>
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
