"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Menu, Phone, Mail, MapPin, Check, Wind, Thermometer, Zap, Activity, Layers, Volume2, Monitor, Glasses, Truck, Award, Bike, Flame, Maximize, Shield } from "lucide-react";

export default function Cryotherapy() {
  const [mainImage, setMainImage] = useState("/images/cryobike-1.jpg");
  const [chamberImage, setChamberImage] = useState("/images/cryo-electric-1.jpg");
  const [treadmillImage, setTreadmillImage] = useState("/images/vacuum-treadmill-1.jpg");

  const images = [
    "/images/cryobike-1.jpg",
    "/images/cryobike-2.jpg",
    "/images/cryobike-3.jpg",
    "/images/cryobike-4.jpg",
    "/images/cryobike-5.jpg",
    "/images/cryobike-6.jpg",
    "/images/cryobike-7.jpg"
  ];

  const chamberImages = [
    "/images/cryo-electric-1.jpg",
    "/images/cryo-electric-2.jpg",
    "/images/cryo-electric-3.jpg",
    "/images/cryo-electric-4.jpg",
    "/images/cryo-electric-5.jpg"
  ];

  const treadmillImages = [
    "/images/vacuum-treadmill-1.jpg",
    "/images/vacuum-treadmill-2.jpg",
    "/images/vacuum-treadmill-3.jpg",
    "/images/vacuum-treadmill-4.jpg",
    "/images/vacuum-treadmill-5.jpg",
    "/images/vacuum-treadmill-6.jpg",
    "/images/vacuum-treadmill-7.jpg",
    "/images/vacuum-treadmill-8.jpg",
    "/images/vacuum-treadmill-9.jpg",
    "/images/vacuum-treadmill-10.jpg"
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
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-900 to-blue-800">
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Cryotherapy Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Advanced cold therapy systems for recovery, wellness, and performance enhancement
            </p>
          </div>
        </section>

        {/* Product 1: Cryotherapy Bike */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Main Large Image */}
                <div className="mb-4">
                  <Image 
                    src={mainImage}
                    alt="Cryotherapy Bike" 
                    width={600} 
                    height={500} 
                    className="rounded-xl shadow-lg object-cover w-full h-[28rem] md:h-[32rem]" 
                  />
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-4 gap-2">
                  {images.slice(0, 4).map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setMainImage(img)}
                      className={`relative rounded-lg overflow-hidden transition-all ${mainImage === img ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-blue-300'}`}
                    >
                      <Image src={img} alt={`Cryobike View ${idx + 1}`} width={150} height={100} className="object-cover w-full h-24" />
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {images.slice(4).map((img, idx) => (
                    <button 
                      key={idx + 4}
                      onClick={() => setMainImage(img)}
                      className={`relative rounded-lg overflow-hidden transition-all ${mainImage === img ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-blue-300'}`}
                    >
                      <Image src={img} alt={`Cryobike View ${idx + 5}`} width={150} height={100} className="object-cover w-full h-24" />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Cryotherapy Bike</h2>
                <p className="text-3xl font-bold text-blue-600 mb-6">$22,999.00</p>
                <p className="text-gray-600 text-lg mb-6">
                  Experience the Cryo Bike, a groundbreaking fitness device blending vacuum resistance, infrared heat, cryotherapy, pure oxygen breathing, collagen rejuvenation, and aromatherapy for a transformative workout.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Bike className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Zero-Gravity Vacuum</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Cryotherapy + Infrared</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Monitor className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Virtual Reality Display</span>
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

        {/* Cryo Bike Technical Specifications */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Cryo Bike Technical Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                <Bike className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Zero-Gravity Vacuum Resistance</h4>
                <p className="text-gray-600 text-sm">Creates negative pressure to boost blood and lymphatic circulation, reducing cellulite and enhancing fat-to-energy conversion for targeted sculpting.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-cyan-600">
                <Thermometer className="w-8 h-8 text-cyan-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Cryotherapy Recovery</h4>
                <p className="text-gray-600 text-sm">Cryonick technology enables cold-temperature pedaling, alleviating muscle soreness, reducing inflammation, and speeding recovery.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-600">
                <Flame className="w-8 h-8 text-orange-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Infrared Light Therapy</h4>
                <p className="text-gray-600 text-sm">Heats tissues to intensify sweating, detoxify skin, and promote cellular regeneration for improved metabolism and wellness.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-600">
                <Layers className="w-8 h-8 text-red-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Collagen Light Rejuvenation</h4>
                <p className="text-gray-600 text-sm">Red light therapy stimulates collagen production, enhancing skin elasticity and texture for a youthful glow.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-600">
                <Wind className="w-8 h-8 text-teal-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Ozone Therapy</h4>
                <p className="text-gray-600 text-sm">Infuses skin with O3 to boost immunity, improve skin health, and support natural healing processes.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-600">
                <Activity className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Aromatherapy Enhancement</h4>
                <p className="text-gray-600 text-sm">Therapeutic essential oils elevate relaxation, combat bacteria, and enrich the workout experience with rejuvenating scents.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-600">
                <Glasses className="w-8 h-8 text-indigo-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Virtual Reality Display</h4>
                <p className="text-gray-600 text-sm">Immersive VR experience for entertainment and engagement during workouts.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-pink-600">
                <Volume2 className="w-8 h-8 text-pink-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Bluetooth Headphones</h4>
                <p className="text-gray-600 text-sm">Wireless audio connectivity for seamless entertainment during sessions.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-600">
                <Zap className="w-8 h-8 text-green-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Wi-Fi & App Integration</h4>
                <p className="text-gray-600 text-sm">Wi-Fi connection with Android/iPhone app integration for tracking and control.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product 2: Electric Cryotherapy Chamber */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Electric Cryotherapy Chamber</h2>
                <p className="text-3xl font-bold text-blue-600 mb-6">$99,999.00</p>
                <p className="text-gray-600 text-lg mb-6">
                  Ignite Optimal Health with Electric Precision. A cutting-edge, nitrogen-free system delivering whole-body cryotherapy at ultra-low temperatures (-110°C to -140°C).
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">-110°C to -140°C</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Fully Electric</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Monitor className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Touchscreen Control</span>
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
              <div className="order-1 lg:order-2">
                {/* Main Large Image */}
                <div className="mb-4">
                  <Image 
                    src={chamberImage}
                    alt="Electric Cryotherapy Chamber" 
                    width={600} 
                    height={500} 
                    className="rounded-xl shadow-lg object-cover w-full h-[28rem] md:h-[32rem]" 
                  />
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-5 gap-2">
                  {chamberImages.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setChamberImage(img)}
                      className={`relative rounded-lg overflow-hidden transition-all ${chamberImage === img ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-blue-300'}`}
                    >
                      <Image src={img} alt={`Chamber View ${idx + 1}`} width={150} height={100} className="object-cover w-full h-24" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Electric Chamber Technical Specifications */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Electric Chamber Technical Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                <Zap className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Fully Electric Cooling</h4>
                <p className="text-gray-600 text-sm">Eliminates liquid nitrogen for reliable, sustainable temperatures (-110°C/-148°F to -140°C).</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-600">
                <Layers className="w-8 h-8 text-indigo-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Single or Dual Compressor Options</h4>
                <p className="text-gray-600 text-sm">Customizable performance to suit diverse clinical or home needs.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-600">
                <Maximize className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Spacious Interior</h4>
                <p className="text-gray-600 text-sm">Ensures comfort and effective treatment for all body types with premium, sophisticated design.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-600">
                <Activity className="w-8 h-8 text-green-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Energy Efficiency</h4>
                <p className="text-gray-600 text-sm">Lowers costs with a sustainable, low-maintenance system.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-600">
                <Shield className="w-8 h-8 text-red-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Advanced Safety Features</h4>
                <p className="text-gray-600 text-sm">Equipped with oxygen sensors, emergency shutoff and automatic shut-off for secure sessions.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-cyan-600">
                <Layers className="w-8 h-8 text-cyan-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Double Glass Thermal Insulated</h4>
                <p className="text-gray-600 text-sm">Maintains temperature control with superior thermal insulation.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-600">
                <Maximize className="w-8 h-8 text-orange-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Easy Installation</h4>
                <p className="text-gray-600 text-sm">Requires just 10m² (100 sq ft) for effortless setup in any wellness space.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-gray-600">
                <Monitor className="w-8 h-8 text-gray-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Intuitive Touchscreen Control Panel</h4>
                <p className="text-gray-600 text-sm">Easy customization of temperature, session duration, and other settings.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-600">
                <Layers className="w-8 h-8 text-teal-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Glass Door</h4>
                <p className="text-gray-600 text-sm">Premium glass door design for visibility and safety.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product 3: Vacuum Cryotherapy Treadmill */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Main Large Image */}
                <div className="mb-4">
                  <Image 
                    src={treadmillImage}
                    alt="Vacuum Cryotherapy Treadmill" 
                    width={600} 
                    height={500} 
                    className="rounded-xl shadow-lg object-cover w-full h-[28rem] md:h-[32rem]" 
                  />
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-5 gap-2">
                  {treadmillImages.slice(0, 5).map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setTreadmillImage(img)}
                      className={`relative rounded-lg overflow-hidden transition-all ${treadmillImage === img ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-blue-300'}`}
                    >
                      <Image src={img} alt={`Treadmill View ${idx + 1}`} width={150} height={100} className="object-cover w-full h-24" />
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-5 gap-2 mt-2">
                  {treadmillImages.slice(5).map((img, idx) => (
                    <button 
                      key={idx + 5}
                      onClick={() => setTreadmillImage(img)}
                      className={`relative rounded-lg overflow-hidden transition-all ${treadmillImage === img ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-blue-300'}`}
                    >
                      <Image src={img} alt={`Treadmill View ${idx + 6}`} width={150} height={100} className="object-cover w-full h-24" />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Vacuum Cryotherapy Treadmill</h2>
                <p className="text-3xl font-bold text-blue-600 mb-6">$27,999.00</p>
                <p className="text-gray-600 text-lg mb-6">
                  Step into a new realm of wellness with our Vacuum Cryo Treadmill, blending zero-gravity vacuum resistance, infrared heating, and cryotherapy to transform weight loss and rehabilitation.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Hot & Cold Therapy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">EMS Belts Included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Monitor className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">VR Display</span>
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

        {/* Vacuum Treadmill Technical Specifications */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Vacuum Treadmill Technical Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                <Bike className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Zero-Gravity Vacuum Resistance</h4>
                <p className="text-gray-600 text-sm">Boosts blood and lymphatic flow to burn fat and reduce cellulite in hips, thighs, and buttocks.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-600">
                <Flame className="w-8 h-8 text-orange-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Infrared Heating</h4>
                <p className="text-gray-600 text-sm">Enhances metabolism, promotes sweating, and detoxifies for firmer, smoother skin.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-cyan-600">
                <Thermometer className="w-8 h-8 text-cyan-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Cryotherapy Recovery</h4>
                <p className="text-gray-600 text-sm">Numbs pain and reduces inflammation, supporting injury rehab and muscle restoration. Up to -20°C/-4°F.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-600">
                <Activity className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Multitherapy Integration</h4>
                <p className="text-gray-600 text-sm">Includes aromatherapy, ozone, and collagen light for skincare, relaxation, and immune support.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-600">
                <Zap className="w-8 h-8 text-red-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Real EMS</h4>
                <p className="text-gray-600 text-sm">Electrical Muscular Stimulation Belts target biceps, shoulders, and waist for enhanced toning.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-600">
                <Layers className="w-8 h-8 text-green-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Low-Impact Design</h4>
                <p className="text-gray-600 text-sm">Minimizes joint stress, ideal for post-COVID recovery and physical therapy.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-600">
                <Glasses className="w-8 h-8 text-indigo-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Virtual Reality Display</h4>
                <p className="text-gray-600 text-sm">Netflix, YouTube, Facebook integration for entertainment during workouts.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-pink-600">
                <Layers className="w-8 h-8 text-pink-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">5 Neoprene Skirts</h4>
                <p className="text-gray-600 text-sm">Creates airtight seal between body and capsule for targeted vacuum therapy on hips, buttocks, thighs.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-600">
                <Zap className="w-8 h-8 text-teal-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">iPhone/Android Integration</h4>
                <p className="text-gray-600 text-sm">Application control for seamless device connectivity and workout tracking.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Warranty & Shipping */}
        <section className="py-16 bg-gradient-to-br from-cyan-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <Thermometer className="w-12 h-12 mx-auto mb-4 text-cyan-300" />
                <h3 className="text-xl font-bold mb-2">Extreme Temperature Control</h3>
                <p className="text-white/80">Precision cooling and heating for optimal therapy results</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <Shield className="w-12 h-12 mx-auto mb-4 text-cyan-300" />
                <h3 className="text-xl font-bold mb-2">1 Year Warranty</h3>
                <p className="text-white/80">Full manufacturer warranty on all cryotherapy equipment</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <Award className="w-12 h-12 mx-auto mb-4 text-cyan-300" />
                <h3 className="text-xl font-bold mb-2">Professional Grade</h3>
                <p className="text-white/80">Built for commercial and residential use</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Experience Cryotherapy?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to learn more about our cryotherapy solutions and find the perfect system for your wellness goals.
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
