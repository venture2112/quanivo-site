import Image from "next/image";
import { Sparkles, Menu, Phone, Mail, MapPin, Check, DollarSign, Calendar, Shield } from "lucide-react";

export default function Financing() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a className="flex items-center gap-2" href="/">
              <Sparkles className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Quanivo</span>
            </a>
            <div className="hidden lg:flex items-center gap-8">
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/about-us">About Us</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/bioresonance">Products</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/businesses">For Business</a>
              <a className="text-sm font-medium text-gray-900" href="/financing">Financing</a>
              <a href="/" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white text-sm font-medium px-6 py-3 hover:bg-blue-700">Get Quote</a>
            </div>
            <button className="lg:hidden p-2"><Menu className="w-6 h-6" /></button>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-20">
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 to-teal-800">
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Wellness Equipment Financing
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Flexible payment options to make your wellness investment affordable
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Competitive Rates</h3>
                <p className="text-gray-600">Low-interest financing options for qualified buyers</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Flexible Terms</h3>
                <p className="text-gray-600">Choose from 12 to 84 month payment plans</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Quick Approval</h3>
                <p className="text-gray-600">Fast credit decisions, often within 24-48 hours</p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Financing Options</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Business Financing</h3>
                  <p className="text-gray-600 mb-4">Tailored financing solutions for wellness centers, medical practices, and fitness facilities. Lease-to-own options available.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /><span>Tax advantages for business equipment</span></li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /><span>Preserve working capital</span></li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /><span>Flexible end-of-term options</span></li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Residential Financing</h3>
                  <p className="text-gray-600 mb-4">Make your home wellness dreams a reality with affordable monthly payments. No hidden fees or prepayment penalties.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /><span>Competitive interest rates</span></li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /><span>No money down options</span></li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /><span>Easy online application</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8">Contact us today to discuss your financing options and get pre-qualified.</p>
            <a href="/" className="inline-flex items-center justify-center rounded-lg bg-white text-blue-600 font-medium text-lg px-8 py-4 hover:bg-gray-100">
              Apply for Financing
            </a>
          </div>
        </section>

        <section className="py-20 bg-white">
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
                <li><a href="/bioresonance" className="hover:text-white">Products</a></li>
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
