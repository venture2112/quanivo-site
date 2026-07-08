"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, Phone, Mail, MapPin, Check, Wind, Shield, Maximize, Weight, Thermometer, Gauge, Layers, Zap, Truck, Award, Wrench, Monitor, Settings } from "lucide-react";

export default function Hyperbaric() {
  const [mainImage, setMainImage] = useState("/images/hyperbaric-32-1.jpg");
  const [walledImage, setWalledImage] = useState("/images/hyperbaric-walled-1.jpg");
  const [hardShellImage, setHardShellImage] = useState("/images/hyperbaric-hardshell-1.jpg");

  const images = [
    "/images/hyperbaric-32-1.jpg",
    "/images/hyperbaric-32-2.jpg",
    "/images/hyperbaric-32-3.jpg",
    "/images/hyperbaric-32-4.jpg",
    "/images/hyperbaric-32-5.jpg",
    "/images/hyperbaric-32-6.jpg",
    "/images/hyperbaric-32-7.jpg",
    "/images/hyperbaric-32-8.jpg"
  ];

  const walledImages = [
    "/images/hyperbaric-walled-1.jpg",
    "/images/hyperbaric-walled-2.jpg",
    "/images/hyperbaric-walled-3.jpg",
    "/images/hyperbaric-walled-4.jpg",
    "/images/hyperbaric-walled-5.jpg"
  ];

  const hardShellImages = [
    "/images/hyperbaric-hardshell-1.jpg",
    "/images/hyperbaric-hardshell-2.jpg",
    "/images/hyperbaric-hardshell-3.jpg",
    "/images/hyperbaric-hardshell-4.jpg",
    "/images/hyperbaric-hardshell-5.jpg",
    "/images/hyperbaric-hardshell-6.jpg",
    "/images/hyperbaric-hardshell-7.jpg",
    "/images/hyperbaric-hardshell-8.jpg",
    "/images/hyperbaric-hardshell-9.jpg",
    "/images/hyperbaric-hardshell-10.jpg"
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
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 to-cyan-800">
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Hyperbaric Oxygen Chambers
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Professional-grade hyperbaric chambers for enhanced healing, recovery, and wellness
            </p>
          </div>
        </section>

        {/* Product 1: Portable Hyperbaric Chamber - 32" */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Main Large Image */}
                <div className="mb-4">
                  <Image 
                    src={mainImage}
                    alt="Portable Hyperbaric Chamber 32 inch" 
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
                      <Image src={img} alt={`Chamber View ${idx + 1}`} width={150} height={100} className="object-cover w-full h-24" />
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {images.slice(4).map((img, idx) => (
                    <button 
                      key={idx + 4}
                      onClick={() => setMainImage(img)}
                      className={`relative rounded-lg overflow-hidden transition-all ${mainImage === img ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-blue-300'}`}
                    >
                      <Image src={img} alt={`Chamber View ${idx + 5}`} width={150} height={100} className="object-cover w-full h-24" />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Portable Hyperbaric Chamber - 32&quot;</h2>
                <p className="text-3xl font-bold text-blue-600 mb-6">$23,000.00</p>
                <p className="text-gray-600 text-lg mb-6">
                  Our top-tier Portable Hyperbaric Chamber, a favorite among families, doctors, celebrities, and athletes, offers a spacious 32-inch diameter for unrestricted movement while upholding rigorous safety standards.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">1.3 ATA (4 psi)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">92&quot; L x 32&quot; Diameter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">5 Year Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Free White Glove Delivery</span>
                  </div>
                </div>
                <a href="/" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white font-medium text-lg px-8 py-4 hover:bg-blue-700">
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Portable 32" Technical Specifications */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Portable 32&quot; Technical Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                <Gauge className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">1.3 ATA Operating Pressure</h4>
                <p className="text-gray-600 text-sm">Delivers gentle, effective oxygen therapy at 4 psi, promoting healing, recovery, and wellness in a safe, comfortable environment.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-600">
                <Layers className="w-8 h-8 text-indigo-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">44 oz. Urethane Coated Polyester</h4>
                <p className="text-gray-600 text-sm">Durable, double-sided bladder ensures robust, long-lasting performance, providing a secure and comfortable environment for effective oxygen therapy.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-600">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Dual Redundant Pressure Regulators</h4>
                <p className="text-gray-600 text-sm">Tamper-proof valves ensure precise, safe pressure control, maintaining consistent airflow for reliable and secure oxygen therapy sessions.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-600">
                <Zap className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Patented 2-Zipper Seal</h4>
                <p className="text-gray-600 text-sm">Provides a secure, airtight closure, ensuring optimal pressure retention and user safety during therapy sessions.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-cyan-600">
                <Wind className="w-8 h-8 text-cyan-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Optimized Airflow Design</h4>
                <p className="text-gray-600 text-sm">Precision-angled air inlets designed for improved airflow through chamber, ensuring consistent oxygen delivery and comfortable therapy.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-600">
                <Wrench className="w-8 h-8 text-orange-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Medical Pass-through Port</h4>
                <p className="text-gray-600 text-sm">Additional port for external medical devices allows seamless integration of medical tools, enhancing therapy customization and effectiveness.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-gray-600">
                <Maximize className="w-8 h-8 text-gray-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Rigid Frame</h4>
                <p className="text-gray-600 text-sm">Maintains form when deflated, ensuring structural integrity and easy setup for a reliable, user-friendly experience.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-600">
                <Layers className="w-8 h-8 text-teal-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Contoured Mattress</h4>
                <p className="text-gray-600 text-sm">Mattress contoured to fit inside the chamber provides tailored comfort, perfectly aligning with the interior to enhance relaxation.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-emerald-600">
                <Shield className="w-8 h-8 text-emerald-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Medical Grade Components</h4>
                <p className="text-gray-600 text-sm">Manufactured with nontoxic, medical grade components ensuring a safe, bio-compatible environment for effective oxygen therapy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portable 32" Weight & Dimensions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Weight & Dimensions</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 rounded-xl p-8">
                <h4 className="text-xl font-bold mb-6 text-gray-900">Component Weights</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between"><span className="text-gray-600">Bladder:</span> <span className="font-medium">35 lbs (15.87 kg)</span></li>
                  <li className="flex justify-between"><span className="text-gray-600">Frame:</span> <span className="font-medium">16 lbs (7.25 kg)</span></li>
                  <li className="flex justify-between"><span className="text-gray-600">Mattress:</span> <span className="font-medium">10 lbs (4.53 kg)</span></li>
                  <li className="flex justify-between"><span className="text-gray-600">Bolsters:</span> <span className="font-medium">7 lbs (3.17 kg)</span></li>
                  <li className="flex justify-between"><span className="text-gray-600">Compressor:</span> <span className="font-medium">37 lbs (16.78 kg)</span></li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8">
                <h4 className="text-xl font-bold mb-6 text-gray-900">Dimensions</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between"><span className="text-gray-600">Length:</span> <span className="font-medium">92 in (233.68 cm)</span></li>
                  <li className="flex justify-between"><span className="text-gray-600">Diameter (inflated):</span> <span className="font-medium">32 in (81.28 cm)</span></li>
                  <li className="flex justify-between"><span className="text-gray-600">Viewing Windows:</span> <span className="font-medium">3 Large Windows</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Product 2: Portable Walled Hyperbaric Chamber */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Portable Walled Hyperbaric Chamber - 32&quot;</h2>
                <p className="text-3xl font-bold text-blue-600 mb-6">$27,000.00</p>
                <p className="text-gray-600 text-lg mb-6">
                  The latest Portable Hyperbaric Chamber redefines oxygen therapy with a secure, innovative design, boasting a spacious 32-inch diameter interior for unrestricted comfort.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">1.3 ATA (4 psi)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">100&quot; L x 32&quot; Diameter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">5 Year Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Free White Glove Delivery</span>
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
                    src={walledImage}
                    alt="Portable Walled Hyperbaric Chamber" 
                    width={600} 
                    height={500} 
                    className="rounded-xl shadow-lg object-cover w-full h-[28rem] md:h-[32rem]" 
                  />
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-5 gap-2">
                  {walledImages.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setWalledImage(img)}
                      className={`relative rounded-lg overflow-hidden transition-all ${walledImage === img ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-blue-300'}`}
                    >
                      <Image src={img} alt={`Walled Chamber View ${idx + 1}`} width={150} height={100} className="object-cover w-full h-24" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Walled Chamber Technical Specifications */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Walled Chamber Technical Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                <Gauge className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">1.3 ATA Operating Pressure</h4>
                <p className="text-gray-600 text-sm">Delivers gentle, effective oxygen therapy at 4 psi, promoting healing, recovery, and wellness in a safe, comfortable environment.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-600">
                <Layers className="w-8 h-8 text-indigo-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">44 oz. Urethane Coated Polyester</h4>
                <p className="text-gray-600 text-sm">Durable, double-sided bladder ensures robust, long-lasting performance for effective oxygen therapy.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-600">
                <Shield className="w-8 h-8 text-red-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Pressure Tested Beyond 30 psi</h4>
                <p className="text-gray-600 text-sm">Exceeds PVHO-1 safety requirements, ensuring robust durability and secure oxygen therapy for enhanced wellness.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-600">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Dual Redundant Pressure Regulators</h4>
                <p className="text-gray-600 text-sm">Tamper-proof valves ensure precise, safe pressure control for reliable and secure oxygen therapy sessions.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-600">
                <Layers className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Ballistic Nylon Jacket</h4>
                <p className="text-gray-600 text-sm">Extreme performance reinforcing jacket enhances durability and safety, providing a robust outer layer for long-lasting therapy.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-600">
                <Zap className="w-8 h-8 text-orange-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">SafeSet Buckling System</h4>
                <p className="text-gray-600 text-sm">Patented buckling system with 3-zipper seal assembly provides enhanced enclosure security and airtight environment.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-gray-600">
                <Maximize className="w-8 h-8 text-gray-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Rigid External Steel Frame</h4>
                <p className="text-gray-600 text-sm">Provides patient stabilization and added comfort with a sturdy, supportive structure for secure and relaxing therapy.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-cyan-600">
                <Wrench className="w-8 h-8 text-cyan-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">3 Medical Pass-through Ports</h4>
                <p className="text-gray-600 text-sm">Multiple ports allow seamless integration of medical tools, enhancing therapy customization and effectiveness.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-emerald-600">
                <Shield className="w-8 h-8 text-emerald-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Medical Grade Components</h4>
                <p className="text-gray-600 text-sm">Manufactured with nontoxic, medical grade components ensuring a safe, bio-compatible environment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Walled Chamber Weight & Dimensions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Walled Chamber Weight & Dimensions</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h4 className="text-xl font-bold mb-6 text-gray-900">Component Weights</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between"><span className="text-gray-600">Bladder:</span> <span className="font-medium">38 lbs (17.23 kg)</span></li>
                  <li className="flex justify-between"><span className="text-gray-600">Frame:</span> <span className="font-medium">34 lbs (15.42 kg)</span></li>
                  <li className="flex justify-between"><span className="text-gray-600">Mattress:</span> <span className="font-medium">13 lbs (5.89 kg)</span></li>
                  <li className="flex justify-between"><span className="text-gray-600">Bolsters:</span> <span className="font-medium">7 lbs (3.17 kg)</span></li>
                  <li className="flex justify-between"><span className="text-gray-600">Compressor:</span> <span className="font-medium">37 lbs (16.78 kg)</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h4 className="text-xl font-bold mb-6 text-gray-900">Dimensions</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between"><span className="text-gray-600">Length:</span> <span className="font-medium">100 in (254 cm)</span></li>
                  <li className="flex justify-between"><span className="text-gray-600">Diameter (inflated):</span> <span className="font-medium">32 in (81.28 cm)</span></li>
                  <li className="flex justify-between"><span className="text-gray-600">External Frame:</span> <span className="font-medium">Steel Construction</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Product 3: Advanced Hyperbaric Chamber - Hard Shell */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Main Large Image */}
                <div className="mb-4">
                  <Image 
                    src={hardShellImage}
                    alt="Advanced Hyperbaric Chamber Hard Shell" 
                    width={600} 
                    height={500} 
                    className="rounded-xl shadow-lg object-cover w-full h-[28rem] md:h-[32rem]" 
                  />
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-5 gap-2">
                  {hardShellImages.slice(0, 5).map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setHardShellImage(img)}
                      className={`relative rounded-lg overflow-hidden transition-all ${hardShellImage === img ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-blue-300'}`}
                    >
                      <Image src={img} alt={`Hard Shell View ${idx + 1}`} width={150} height={100} className="object-cover w-full h-24" />
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-5 gap-2 mt-2">
                  {hardShellImages.slice(5).map((img, idx) => (
                    <button 
                      key={idx + 5}
                      onClick={() => setHardShellImage(img)}
                      className={`relative rounded-lg overflow-hidden transition-all ${hardShellImage === img ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-blue-300'}`}
                    >
                      <Image src={img} alt={`Hard Shell View ${idx + 6}`} width={150} height={100} className="object-cover w-full h-24" />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Advanced Hyperbaric Chamber - Hard Shell</h2>
                <p className="text-3xl font-bold text-blue-600 mb-6">$136,100.00</p>
                <p className="text-gray-600 text-lg mb-6">
                  This cutting-edge Advanced Hyperbaric Chamber, the most expansive and adaptable in its class, empowers physicians and patients with up to 3.0 ATA (29 psi) operating pressure.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Up to 3.0 ATA (29 psi)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">91&quot; L x 42&quot; Diameter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">5 Year Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Free White Glove Delivery</span>
                  </div>
                </div>
                <a href="/" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white font-medium text-lg px-8 py-4 hover:bg-blue-700">
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Hard Shell Technical Specifications */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Hard Shell Chamber Technical Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                <Gauge className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Up to 3.0 ATA Pressure</h4>
                <p className="text-gray-600 text-sm">Delivers powerful oxygen therapy at up to 29 psi, enhancing healing, recovery, and wellness with safe, high-pressure performance.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-600">
                <Monitor className="w-8 h-8 text-indigo-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Mirrored Internal/External Controls</h4>
                <p className="text-gray-600 text-sm">Controls accessible from both inside and outside for physician use and patient self-treatment combined.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-600">
                <Settings className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Variable Treatment Pressures</h4>
                <p className="text-gray-600 text-sm">Allows customizable oxygen therapy settings, enabling tailored treatments to optimize healing.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-600">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Dual Redundant Pressure Regulators</h4>
                <p className="text-gray-600 text-sm">Tamper-proof valves ensure precise, safe pressure control for reliable and secure oxygen therapy.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-gray-600">
                <Layers className="w-8 h-8 text-gray-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Reinforced Steel Construction</h4>
                <p className="text-gray-600 text-sm">High quality powder coating ensures exceptional durability and a sleek, corrosion-resistant finish.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-cyan-600">
                <Wrench className="w-8 h-8 text-cyan-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Adaptable Medical Ports</h4>
                <p className="text-gray-600 text-sm">Additional ports for external medical pass-through devices allow seamless integration of multiple medical tools.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-600">
                <Layers className="w-8 h-8 text-teal-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Contoured Mattress</h4>
                <p className="text-gray-600 text-sm">Mattress contoured to fit inside provides tailored comfort, enhancing relaxation and support during therapy.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-emerald-600">
                <Shield className="w-8 h-8 text-emerald-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">Medical Grade Components</h4>
                <p className="text-gray-600 text-sm">Manufactured with nontoxic, medical grade components ensuring a safe, bio-compatible environment.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-600">
                <Wind className="w-8 h-8 text-orange-600 mb-4" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">100% Oxygen Delivery</h4>
                <p className="text-gray-600 text-sm">Capable of delivering 100% oxygen at 3.0 ATA via cost-effective hood system.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hard Shell Weight & Dimensions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Hard Shell Chamber Weight & Dimensions</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 rounded-xl p-8">
                <h4 className="text-xl font-bold mb-6 text-gray-900">Component Weights</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between"><span className="text-gray-600">Hard Shell Chamber:</span> <span className="font-medium">1,250 lbs (567 kg)</span></li>
                  <li className="flex justify-between"><span className="text-gray-600">Compressor:</span> <span className="font-medium">37 lbs (16.78 kg)</span></li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8">
                <h4 className="text-xl font-bold mb-6 text-gray-900">Dimensions</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between"><span className="text-gray-600">Length:</span> <span className="font-medium">91 in (231.14 cm)</span></li>
                  <li className="flex justify-between"><span className="text-gray-600">Shell Diameter:</span> <span className="font-medium">42 in (106.68 cm)</span></li>
                  <li className="flex justify-between"><span className="text-gray-600">Door Diameter:</span> <span className="font-medium">26.3 in (66.80 cm)</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Warranty & Shipping */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-cyan-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <Shield className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                <h3 className="text-xl font-bold mb-2">5 Year Warranty</h3>
                <p className="text-white/80">Full parts and labor manufacturer warranty on all chambers</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <Truck className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                <h3 className="text-xl font-bold mb-2">Free White Glove Delivery</h3>
                <p className="text-white/80">Complimentary white glove delivery and installation included</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <Award className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                <h3 className="text-xl font-bold mb-2">Medical Grade Quality</h3>
                <p className="text-white/80">Built with nontoxic, medical-grade components for safe, effective therapy</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Experience Hyperbaric Oxygen Therapy?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to learn more about our hyperbaric chambers and find the perfect solution for your wellness needs.
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