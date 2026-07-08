"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, Phone, Mail, MapPin, Check, Armchair, Monitor, Volume2, Zap, Thermometer, Layers, Maximize, Shield, Truck, Award, Sun, Activity, Wind } from "lucide-react";

export default function MassageChairs() {
  const [mainImage, setMainImage] = useState("/images/massage-chair-1.jpg");
  const [valeraImage, setValeraImage] = useState("/images/valera-1.jpg");
  
  const images = [
    "/images/massage-chair-1.jpg",
    "/images/massage-chair-2.jpg",
    "/images/massage-chair-3.jpg",
    "/images/massage-chair-4.jpg",
    "/images/massage-chair-5.jpg"
  ];
  
  const valeraImages = [
    "/images/valera-1.jpg",
    "/images/valera-2.jpg",
    "/images/valera-3.jpg",
    "/images/valera-4.jpg",
    "/images/valera-5.jpg",
    "/images/valera-6.jpg",
    "/images/valera-7.jpg"
  ];
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a className="flex items-center gap-2" href="/">
              <Image src="/images/logo-new.jpg" alt="Quanivo" width={40} height={40} className="rounded" />
              <span className="text-2xl font-bold text-gray-900">Quanivo</span>
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
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-800">
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Premium Massage Chairs
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Luxury massage chairs designed for premier spas, wellness clinics, and luxury homes
            </p>
          </div>
        </section>

        {/* Product 1: Celestine Harmony Massage Chair */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Main Large Image */}
                <div className="mb-4">
                  <Image 
                    src={mainImage}
                    alt="Celestine Harmony Massage Chair" 
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
                      <Image src={img} alt={`View ${idx + 1}`} width={150} height={100} className="object-cover w-full h-24" />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Celestine Harmony Massage Chair</h2>
                <p className="text-3xl font-bold text-blue-600 mb-6">$4,499.00</p>
                <p className="text-gray-600 text-lg mb-6">
                  Experience unparalleled relaxation with the Zero gravity Celestine Harmony Massage Chair, crafted for premier spas, wellness clinics, and luxury homes. Features 3D SL-Track Precision Massage, advanced airbags, Thai-Inspired Stretching Therapy, and Premium Silicone Leather.
                </p>
                
                {/* Product Video */}
                <div className="mb-6">
                  <video 
                    controls 
                    className="w-full max-w-sm rounded-xl shadow-lg aspect-video"
                    poster="/images/massage-chair-1.jpg"
                  >
                    <source src="/videos/L50.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Armchair className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Zero Gravity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">13 Massage Programs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Monitor className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">7-inch TFT Touch Screen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
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

        {/* Celestine Harmony Technical Specifications */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Celestine Harmony Technical Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                <Wind className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Negative Ion Air Purification</h4>
                <p className="text-gray-600 text-sm">Releases negative ions to cleanse the air, reducing allergens and promoting a refreshing, revitalizing environment during your session.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-600">
                <Activity className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">13 Massage Programs</h4>
                <p className="text-gray-600 text-sm">Offers personalized, versatile relief, tailoring each session to your unique comfort and wellness needs.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-600">
                <Layers className="w-8 h-8 text-indigo-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">6 Airbag Intensity Adjustments</h4>
                <p className="text-gray-600 text-sm">Deliver customized compression, enhancing circulation and providing tailored relief for optimal relaxation and wellness.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-cyan-600">
                <Armchair className="w-8 h-8 text-cyan-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Zero Gravity</h4>
                <p className="text-gray-600 text-sm">Reclines you into a weightless position, reducing spinal pressure, enhancing circulation, and deepening relaxation for superior wellness.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-600">
                <Activity className="w-8 h-8 text-teal-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Calf and Foot Massage</h4>
                <p className="text-gray-600 text-sm">Targets key pressure points, relieving tension, boosting circulation, and promoting deep relaxation.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-gray-600">
                <Monitor className="w-8 h-8 text-gray-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">7-inch Large TFT Touch Screen</h4>
                <p className="text-gray-600 text-sm">Intuitive interface, allowing easy navigation of massage programs for a seamless, personalized enjoyment.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-pink-600">
                <Layers className="w-8 h-8 text-pink-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">High-end Silicone Leather</h4>
                <p className="text-gray-600 text-sm">Provides a luxurious, durable finish, enhancing comfort and aesthetic appeal.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-600">
                <Activity className="w-8 h-8 text-orange-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Thai Stretching</h4>
                <p className="text-gray-600 text-sm">Gently extends muscles and joints, mimicking traditional Thai massage to improve flexibility and relieve tension.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-600">
                <Zap className="w-8 h-8 text-green-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">6 Massage Techniques</h4>
                <p className="text-gray-600 text-sm">Targets tension with tailored kneading, shiatsu, and rolling, easing the stress of the day.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                <Layers className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Full Body Airbag Massage</h4>
                <p className="text-gray-600 text-sm">Envelops you in rhythmic compression, enhancing circulation and relieving muscle tension.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-600">
                <Thermometer className="w-8 h-8 text-red-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Back Heating</h4>
                <p className="text-gray-600 text-sm">Delivers soothing warmth to the lower back, easing muscle tension and improving blood flow.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-yellow-600">
                <Sun className="w-8 h-8 text-yellow-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">LED Ambient Lighting</h4>
                <p className="text-gray-600 text-sm">Creates a calming, immersive atmosphere with customizable hues, enhancing relaxation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Celestine Harmony Additional Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Additional Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <Maximize className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Selectable Massage Area</h4>
                <p className="text-gray-600 text-sm">Target specific body zones, delivering customized relief precisely where you need it.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <Maximize className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Automatic Leg Extension</h4>
                <p className="text-gray-600 text-sm">Ensuring a perfect fit for all users, enhancing comfort, and promoting optimal leg and foot relaxation.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <Activity className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Massage Time Selection</h4>
                <p className="text-gray-600 text-sm">Lets you customize session durations, tailoring each experience to your schedule and wellness goals.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <Volume2 className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Bluetooth Stereo Speaker</h4>
                <p className="text-gray-600 text-sm">High-quality Bluetooth stereo speaker for immersive audio experience.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <Zap className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Wireless/USB Charging</h4>
                <p className="text-gray-600 text-sm">No need to leave the chair to charge your devices.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <Layers className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Base Rollers</h4>
                <p className="text-gray-600 text-sm">Base rollers for easy handling and positioning.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">One-Piece Design</h4>
                <p className="text-gray-600 text-sm">No installation required, ready to use out of the box.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <Truck className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Free White Glove Delivery</h4>
                <p className="text-gray-600 text-sm">Complimentary white glove delivery and setup included.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product 2: Velara Bliss Massage Chair */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Velara Bliss Massage Chair</h2>
                <p className="text-3xl font-bold text-blue-600 mb-6">$6,900.00</p>
                <p className="text-gray-600 text-lg mb-6">
                  Unwind in unparalleled luxury with the Velara Bliss Massage Chair, designed for high-end spas, wellness clinics, and sophisticated homes. Features advanced airbags, 6 massage techniques, zero-gravity positioning and more.
                </p>
                
                {/* Product Video */}
                <div className="mb-6">
                  <video 
                    controls 
                    className="w-full max-w-sm rounded-xl shadow-lg aspect-video"
                    poster="/images/valera-1.jpg"
                  >
                    <source src="/videos/L39max.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Armchair className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Zero Gravity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">24-Speed Programs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Monitor className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Widescreen LCD Touch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">1 Year Warranty</span>
                  </div>
                </div>
                
                <a href="/" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white font-medium text-lg px-8 py-4 hover:bg-blue-700">
                  Request Quote
                </a>
              </div>
              <div className="order-1 lg:order-2">
                {/* Main Large Image */}
                <div className="mb-4">
                  <Image 
                    src={valeraImage}
                    alt="Velara Bliss Massage Chair" 
                    width={600} 
                    height={500} 
                    className="rounded-xl shadow-lg object-cover w-full h-[28rem] md:h-[32rem]" 
                  />
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-4 gap-2">
                  {valeraImages.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setValeraImage(img)}
                      className={`relative rounded-lg overflow-hidden transition-all ${valeraImage === img ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-blue-300'}`}
                    >
                      <Image src={img} alt={`Valera View ${idx + 1}`} width={150} height={100} className="object-cover w-full h-24" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Velara Bliss Technical Specifications */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Velara Bliss Technical Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                <Activity className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">3D SL Manipulator Roller</h4>
                <p className="text-gray-600 text-sm">Delivers a human-like massage, using advanced rollers that move along an SL-track to target from neck to thighs, with adjustable depth for personalized intensity.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-600">
                <Layers className="w-8 h-8 text-orange-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Scraping Massage</h4>
                <p className="text-gray-600 text-sm">Mimics Gua Sha, using gentle, targeted strokes to stimulate circulation, release muscle tension, and promote lymphatic drainage.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-600">
                <Activity className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Thai Stretch</h4>
                <p className="text-gray-600 text-sm">Gently extends muscles and joints, mimicking traditional Thai massage to improve flexibility and relieve tension.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-600">
                <Zap className="w-8 h-8 text-indigo-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">24-Speed Automatic Program</h4>
                <p className="text-gray-600 text-sm">Offers a versatile range of pre-set massage cycles, with adjustable speeds to deliver tailored relaxation, recovery, or pain relief.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-cyan-600">
                <Activity className="w-8 h-8 text-cyan-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">6-Speed Manual Program</h4>
                <p className="text-gray-600 text-sm">Allows you to customize massage speeds, providing precise control to target tension and enhance relaxation.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-600">
                <Zap className="w-8 h-8 text-green-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">6 Massage Techniques</h4>
                <p className="text-gray-600 text-sm">Choose between kneading, shiatsu, tapping, and more to relieve tension and boost circulation.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-pink-600">
                <Layers className="w-8 h-8 text-pink-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">6 Airbag Intensity Adjustments</h4>
                <p className="text-gray-600 text-sm">Deliver customized compression, enhancing circulation and providing tailored relief for optimal relaxation.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-600">
                <Layers className="w-8 h-8 text-teal-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">3 Air Bag Force Adjustments</h4>
                <p className="text-gray-600 text-sm">Provides customizable compression levels, allowing you to fine-tune intensity for optimal circulation.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                <Layers className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Full Body Balloon Massage</h4>
                <p className="text-gray-600 text-sm">Envelops you in rhythmic compression, enhancing circulation and relieving muscle tension.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-cyan-600">
                <Armchair className="w-8 h-8 text-cyan-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Zero Gravity</h4>
                <p className="text-gray-600 text-sm">Reclines you into a weightless position, reducing spinal pressure, enhancing circulation, and deepening relaxation.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-600">
                <Thermometer className="w-8 h-8 text-red-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Waist Heating</h4>
                <p className="text-gray-600 text-sm">Delivers targeted warmth to the lower back and waist, soothing muscle tension and enhancing blood flow.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-yellow-600">
                <Activity className="w-8 h-8 text-yellow-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Shoulder & Neck Detection</h4>
                <p className="text-gray-600 text-sm">Accurate detection targets tension with tailored kneading, shiatsu, and rolling techniques.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Velara Bliss Additional Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Additional Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6">
                <Activity className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Foot Roller Massage</h4>
                <p className="text-gray-600 text-sm">Combines dynamic rollers, compression, Gua Sha-inspired scraping, and deep kneading to stimulate acupressure points.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <Monitor className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Widescreen LCD Touch Control</h4>
                <p className="text-gray-600 text-sm">Intuitive interface for easy navigation of massage programs.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <Layers className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">High-end Silicone Leather</h4>
                <p className="text-gray-600 text-sm">Provides a luxurious, durable finish, enhancing comfort and aesthetic appeal.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <Activity className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Massage Time Selection</h4>
                <p className="text-gray-600 text-sm">Customize session durations to your schedule and wellness goals.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <Layers className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">SL Guide Rail</h4>
                <p className="text-gray-600 text-sm">Advanced extended track follows the natural S-curve of your spine from neck to thighs.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <Sun className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">LED Ambient Lighting</h4>
                <p className="text-gray-600 text-sm">Creates a calming, immersive atmosphere with customizable hues.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <Volume2 className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Bluetooth Stereo Speaker</h4>
                <p className="text-gray-600 text-sm">High-quality Bluetooth stereo speaker for immersive audio.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <Layers className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Base Roller</h4>
                <p className="text-gray-600 text-sm">Base roller for easy handling and positioning.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Warranty & Shipping */}
        <section className="py-16 bg-gradient-to-br from-purple-900 to-indigo-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <Shield className="w-12 h-12 mx-auto mb-4 text-purple-300" />
                <h3 className="text-xl font-bold mb-2">1 Year Warranty</h3>
                <p className="text-white/80">Full manufacturer warranty on all massage chairs</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <Truck className="w-12 h-12 mx-auto mb-4 text-purple-300" />
                <h3 className="text-xl font-bold mb-2">Free White Glove Delivery</h3>
                <p className="text-white/80">Complimentary delivery and setup included</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <Award className="w-12 h-12 mx-auto mb-4 text-purple-300" />
                <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
                <p className="text-white/80">Designed for luxury spas and sophisticated homes</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Experience Ultimate Relaxation?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to learn more about our premium massage chairs and find the perfect fit for your wellness space.
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
                <Image src="/images/pod-session.jpeg" alt="Massage Chair" width={400} height={300} className="rounded-xl shadow-lg" />
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
                <Image src="/images/logo-new.jpg" alt="Quanivo" width={32} height={32} className="rounded" />
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