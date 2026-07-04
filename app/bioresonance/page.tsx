"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Menu, Phone, Mail, MapPin, Check, Zap, Waves, Sun, Wind, Activity, Disc, Thermometer, Volume2, Monitor, Mic, Hand, Maximize, Shield, Truck, Award, Palette } from "lucide-react";

export default function Bioresonance() {
  const [mainImage, setMainImage] = useState("/images/bioresonance-bed-1.jpg");
  const [reclinerImage, setReclinerImage] = useState("/images/recliner-1.jpg");
  
  const images = [
    "/images/bioresonance-bed-1.jpg",
    "/images/bioresonance-bed-2.jpg",
    "/images/bioresonance-bed-3.jpg",
    "/images/bioresonance-bed-4.jpg",
    "/images/bioresonance-bed-5.jpg",
    "/images/bioresonance-bed-6.jpg",
    "/images/bioresonance-bed-7.jpg",
    "/images/bioresonance-bed-8.jpg"
  ];
  
  const reclinerImages = [
    "/images/recliner-1.jpg",
    "/images/recliner-2.jpg",
    "/images/recliner-3.jpg",
    "/images/recliner-4.jpg",
    "/images/recliner-5.jpg",
    "/images/recliner-6.jpg",
    "/images/recliner-7.jpg"
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
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-800">
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Bio-Resonance Technology
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Advanced quantum wellness systems combining multiple therapeutic modalities for optimal cellular health
            </p>
          </div>
        </section>

        {/* Product 1: Bio-Wellness Energy Bed */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Main Large Image */}
                <div className="mb-4">
                  <Image 
                    src={mainImage}
                    alt="Bio-Wellness Energy Bed" 
                    width={600} 
                    height={500} 
                    className="rounded-xl shadow-lg object-cover w-full h-[28rem] md:h-[32rem]" 
                  />
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-4 gap-2">
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
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Bio-Wellness Energy Bed</h2>
                <p className="text-3xl font-bold text-blue-600 mb-6">$14,900.00</p>
                <p className="text-gray-600 text-lg mb-6">
                  An advanced wellness technology that integrates Cellular Resonance, Negative Ion, Far Infrared, Graphene Heating, Chromotherapy, and Gyromagnetic Therapy to promote relaxation, rejuvenation, and alignment with your optimal wellness potential.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Maximize className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">7.55 x 2.85 x 3.94 ft</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">1 Year Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Direct Import</span>
                  </div>
                </div>
                <a href="/" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white font-medium text-lg px-8 py-4 hover:bg-blue-700">
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Energy Bed Technical Specifications */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Energy Bed Technical Features</h3>
            
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                <Waves className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Bioresonance Technology</h4>
                <p className="text-gray-600 text-sm">Resonance waves resonate with human body cells, shaking off impurities and toxins from cell walls. Activates cell activity, opens micro-circulation, strengthens metabolism, and enhances immunity.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-600">
                <Thermometer className="w-8 h-8 text-orange-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Infrared Heat</h4>
                <p className="text-gray-600 text-sm">Far infrared thermal heat unlocks cells for deeper mitochondrial penetration. Promotes blood circulation, detoxification, lymphatic cleansing, pain relief, and deep relaxation.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-600">
                <Sun className="w-8 h-8 text-red-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Infrared Light Therapy</h4>
                <p className="text-gray-600 text-sm">Far-infrared, red light, and blue light therapies promote deep tissue healing, boost circulation, reduce inflammation, enhance skin health, and support relaxation and mood regulation.</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-cyan-600">
                <Wind className="w-8 h-8 text-cyan-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Negative Ions</h4>
                <p className="text-gray-600 text-sm">Neutralize free radicals, enhance mood, reduce stress, and boost energy by increasing serotonin and oxygen flow. Supports detoxification and reduces inflammation.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-600">
                <Zap className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Terahertz Waves</h4>
                <p className="text-gray-600 text-sm">Stimulate cellular repair, enhance nerve regeneration, and reduce pain by resonating with bio macro-molecules. Promotes immune function with non-invasive, high-frequency energy.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-600">
                <Activity className="w-8 h-8 text-green-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Vibrational Therapy</h4>
                <p className="text-gray-600 text-sm">Amplifies cellular resonance to enhance energy flow, ease tension, and promote healing. Offers relief from pain, improves circulation, and nurtures emotional harmony.</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-600">
                <Disc className="w-8 h-8 text-indigo-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">PEMF Technology</h4>
                <p className="text-gray-600 text-sm">Improves cellular metabolism, increases ATP (energy) production, and reduces inflammation. Mimics Earth's natural magnetic fields for non-invasive pain relief and tissue healing.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-yellow-600">
                <Sun className="w-8 h-8 text-yellow-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Photon Lamp</h4>
                <p className="text-gray-600 text-sm">Uses targeted light wavelengths to stimulate cellular repair, boost collagen production, reduce inflammation, and enhance skin health while promoting relaxation and pain relief.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-emerald-600">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-emerald-600 font-bold text-sm">J</span>
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-900">Jade Stone Surface</h4>
                <p className="text-gray-600 text-sm">Promotes health by emitting far-infrared rays that improve circulation, reduce inflammation, and ease muscle tension. Cooling properties support relaxation and skin rejuvenation.</p>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-600">
                <Wind className="w-8 h-8 text-teal-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Ozone Disinfection</h4>
                <p className="text-gray-600 text-sm">One-touch operation eliminates bacteria, viruses, and odors by releasing ozone gas, which oxidizes pathogens, improves air quality, and supports a cleaner environment without chemical residues.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-pink-600">
                <Volume2 className="w-8 h-8 text-pink-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Bluetooth Speakers</h4>
                <p className="text-gray-600 text-sm">Quality sound system with Bluetooth connection for perfect relaxation. Stream your favorite music, guided meditations, or therapeutic frequencies during sessions.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-gray-600">
                <Monitor className="w-8 h-8 text-gray-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Touch Screen Control</h4>
                <p className="text-gray-600 text-sm">Built-in touch pad allows use of one or more therapeutic options simultaneously. Intuitive interface for complete control over your wellness experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Energy Bed Additional Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Energy Bed Additional Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <Mic className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">AI Voice Sync</h4>
                <p className="text-gray-600 text-sm">Operate via preprogrammed voice commands for hands-free control during your wellness sessions.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <Hand className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Safety Handrails</h4>
                <p className="text-gray-600 text-sm">Secure handrails for safe entry and exit from the unit, ensuring stability and confidence.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <Maximize className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Dimensions</h4>
                <p className="text-gray-600 text-sm">7.55 x 2.85 x 3.94 feet (L x W x H) - Spacious interior for comfortable full-body therapy sessions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product 2: Bio-Wellness Energy Recliner */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Bio-Wellness Energy Recliner</h2>
                <p className="text-3xl font-bold text-blue-600 mb-6">$14,900.00</p>
                <p className="text-gray-600 text-lg mb-6">
                  An advanced wellness technology that integrates Cellular Resonance, Negative Ion, Far Infrared, Graphene Heating, Chromotherapy, and Gyromagnetic Therapy to promote relaxation, rejuvenation, and alignment with your optimal wellness potential — all in a comfortable seated position.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Maximize className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">5.25 x 2.49 x 4.27 ft</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">1 Year Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Color: Black or White</span>
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
                    src={reclinerImage}
                    alt="Bio-Wellness Energy Recliner" 
                    width={600} 
                    height={500} 
                    className="rounded-xl shadow-lg object-cover w-full h-[28rem] md:h-[32rem]" 
                  />
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-4 gap-2">
                  {reclinerImages.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setReclinerImage(img)}
                      className={`relative rounded-lg overflow-hidden transition-all ${reclinerImage === img ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-blue-300'}`}
                    >
                      <Image src={img} alt={`Recliner View ${idx + 1}`} width={150} height={100} className="object-cover w-full h-24" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Energy Recliner Technical Specifications */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Energy Recliner Technical Features</h3>
            
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                <Waves className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Bioresonance Technology</h4>
                <p className="text-gray-600 text-sm">Resonance waves resonate with human body cells, shaking off impurities and toxins from cell walls. Activates cell activity, opens micro-circulation, strengthens metabolism, and enhances immunity.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-600">
                <Thermometer className="w-8 h-8 text-orange-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Infrared Heat</h4>
                <p className="text-gray-600 text-sm">Far infrared thermal heat unlocks cells for deeper mitochondrial penetration. Promotes blood circulation, detoxification, lymphatic cleansing, pain relief, and deep relaxation.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-600">
                <Sun className="w-8 h-8 text-red-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Infrared Light Therapy</h4>
                <p className="text-gray-600 text-sm">Far-infrared, red light, and blue light therapies promote deep tissue healing, boost circulation, reduce inflammation, enhance skin health, and support relaxation and mood regulation.</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-cyan-600">
                <Wind className="w-8 h-8 text-cyan-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Negative Ions</h4>
                <p className="text-gray-600 text-sm">Neutralize free radicals, enhance mood, reduce stress, and boost energy by increasing serotonin and oxygen flow. Supports detoxification and reduces inflammation.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-600">
                <Zap className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Terahertz Waves</h4>
                <p className="text-gray-600 text-sm">Stimulate cellular repair, enhance nerve regeneration, and reduce pain by resonating with bio-macromolecules. Promotes immune function with non-invasive, high-frequency energy.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-600">
                <Disc className="w-8 h-8 text-indigo-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">PEMF Technology</h4>
                <p className="text-gray-600 text-sm">Improves cellular metabolism, increases ATP (energy) production, and reduces inflammation. Mimics Earth's natural magnetic fields for non-invasive pain relief and tissue healing.</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-yellow-600">
                <Sun className="w-8 h-8 text-yellow-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Photon Lamp</h4>
                <p className="text-gray-600 text-sm">Uses targeted light wavelengths to stimulate cellular repair, boost collagen production, reduce inflammation, and enhance skin health while promoting relaxation and pain relief.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-emerald-600">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-emerald-600 font-bold text-sm">J</span>
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-900">Jade Stone Surface</h4>
                <p className="text-gray-600 text-sm">Promotes health by emitting far-infrared rays that improve circulation, reduce inflammation, and ease muscle tension. Cooling properties support relaxation and skin rejuvenation.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-600">
                <Wind className="w-8 h-8 text-teal-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Ozone Disinfection</h4>
                <p className="text-gray-600 text-sm">One-touch operation eliminates bacteria, viruses, and odors by releasing ozone gas, which oxidizes pathogens, improves air quality, and supports a cleaner environment without chemical residues.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Energy Recliner Additional Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Energy Recliner Additional Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6">
                <Volume2 className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Bluetooth Speakers</h4>
                <p className="text-gray-600 text-sm">Quality sound system with Bluetooth connection for perfect relaxation.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <Monitor className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Touch Screen Control</h4>
                <p className="text-gray-600 text-sm">Built-in touch pad allows use of one or more therapeutic options simultaneously.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <Hand className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Safety Handrails</h4>
                <p className="text-gray-600 text-sm">Secure handrails for safe entry and exit from the unit.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <Maximize className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Dimensions</h4>
                <p className="text-gray-600 text-sm">5.25 x 2.49 x 4.27 feet (L x W x H) - Compact seated design.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Warranty & Shipping */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <Shield className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                <h3 className="text-xl font-bold mb-2">1 Year Warranty</h3>
                <p className="text-white/80">Full manufacturer warranty covering all components and functionality</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <Truck className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
                <p className="text-white/80">Free front door delivery. White glove delivery available at additional cost</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <Award className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
                <p className="text-white/80">Direct import with full quality assurance and support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Experience Bio-Resonance Therapy?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to learn more about the Bio-Wellness Energy Bed or Energy Recliner and how they can transform your wellness routine.
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
