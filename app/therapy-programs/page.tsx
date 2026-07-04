import Image from "next/image";
import { Sparkles, Menu, Phone, Mail, MapPin, Check, Moon, Sun, Zap, Heart, Brain, Shield, Wind, Activity, Coffee, Music } from "lucide-react";

const therapyPrograms = [
  {
    id: "relaxation",
    name: "Deep Relaxation",
    icon: Moon,
    duration: "30-45 min",
    description: "Gentle frequencies designed to calm the nervous system and induce a state of deep relaxation.",
    benefits: ["Reduces cortisol levels", "Calms racing thoughts", "Prepares body for sleep", "Eases muscle tension"],
    frequencies: "0.5-4 Hz (Delta/Theta waves)"
  },
  {
    id: "energy",
    name: "Energy Boost",
    icon: Zap,
    duration: "15-20 min",
    description: "Invigorating frequency patterns that stimulate cellular energy production and mental alertness.",
    benefits: ["Increases ATP production", "Enhances mental clarity", "Combats fatigue", "Improves focus"],
    frequencies: "15-30 Hz (Beta waves)"
  },
  {
    id: "detox",
    name: "Cellular Detox",
    icon: Wind,
    duration: "45-60 min",
    description: "Specific frequencies that support the body's natural detoxification processes at the cellular level.",
    benefits: ["Supports lymphatic drainage", "Enhances cellular cleansing", "Boosts immune function", "Reduces inflammation"],
    frequencies: "7.83-10 Hz (Schumann/Alpha)"
  },
  {
    id: "sleep",
    name: "Sleep Enhancement",
    icon: Moon,
    duration: "30-60 min",
    description: "Carefully calibrated frequencies that promote natural melatonin production and sleep readiness.",
    benefits: ["Regulates circadian rhythm", "Deepens sleep cycles", "Reduces insomnia", "Improves sleep quality"],
    frequencies: "0.5-2 Hz (Delta waves)"
  },
  {
    id: "pain-relief",
    name: "Pain Relief",
    icon: Activity,
    duration: "30-45 min",
    description: "Targeted frequencies that help interrupt pain signals and promote natural pain-relieving mechanisms.",
    benefits: ["Reduces chronic pain", "Eases joint discomfort", "Relieves muscle soreness", "Supports healing"],
    frequencies: "10-15 Hz (Alpha/Beta transition)"
  },
  {
    id: "recovery",
    name: "Athletic Recovery",
    icon: Heart,
    duration: "30-45 min",
    description: "Optimized for post-workout recovery, reducing inflammation and accelerating muscle repair.",
    benefits: ["Speeds muscle recovery", "Reduces post-exercise soreness", "Decreases inflammation", "Restores energy"],
    frequencies: "8-12 Hz (Alpha waves)"
  },
  {
    id: "mental-clarity",
    name: "Mental Clarity",
    icon: Brain,
    duration: "20-30 min",
    description: "Frequencies that enhance cognitive function, memory, and mental processing speed.",
    benefits: ["Improves concentration", "Enhances memory recall", "Boosts creativity", "Reduces brain fog"],
    frequencies: "12-20 Hz (Low Beta waves)"
  },
  {
    id: "immune",
    name: "Immune Support",
    icon: Shield,
    duration: "45-60 min",
    description: "Frequencies selected to support and strengthen the body's natural immune response.",
    benefits: ["Boosts immune function", "Supports white blood cell activity", "Reduces stress hormones", "Enhances vitality"],
    frequencies: "7.83 Hz (Schumann resonance)"
  },
  {
    id: "balance",
    name: "Chakra Balance",
    icon: Sun,
    duration: "45-60 min",
    description: "A journey through frequencies associated with each energy center for holistic alignment.",
    benefits: ["Balances energy centers", "Promotes emotional harmony", "Enhances spiritual wellness", "Restores equilibrium"],
    frequencies: "Multi-range sweep (396-963 Hz)"
  },
  {
    id: "vitality",
    name: "Morning Vitality",
    icon: Coffee,
    duration: "15-20 min",
    description: "Gentle energizing frequencies perfect for starting your day with renewed vigor.",
    benefits: ["Natural energy boost", "Reduces morning grogginess", "Enhances mood", "Prepares body for activity"],
    frequencies: "10-18 Hz (Alpha/Low Beta)"
  },
  {
    id: "stress",
    name: "Stress Release",
    icon: Music,
    duration: "30-45 min",
    description: "Specifically designed to dissolve stress and anxiety through calming frequency patterns.",
    benefits: ["Lowers anxiety levels", "Releases physical tension", "Promotes inner peace", "Balances emotions"],
    frequencies: "6-10 Hz (Theta/Alpha)"
  },
  {
    id: "custom",
    name: "Custom Program",
    icon: Activity,
    duration: "Variable",
    description: "Create your own frequency sequence tailored to your specific wellness goals and preferences.",
    benefits: ["Personalized therapy", "Targeted treatment", "Flexible duration", "User-defined frequencies"],
    frequencies: "User selectable (0.5-50 Hz)"
  }
];

export default function TherapyPrograms() {
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
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900">
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              12 Therapy Programs
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Discover the power of frequency therapy with our Bio-Wellness Energy Bed's pre-configured programs
            </p>
            <a href="/bioresonance" className="inline-flex items-center justify-center rounded-lg bg-white text-purple-900 font-medium text-lg px-10 py-4 hover:bg-gray-100">
              View Bio-Wellness Energy Bed
            </a>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Science-Backed Frequency Therapy</h2>
            <p className="text-xl text-gray-600 mb-8">
              Each of our 12 preset therapy programs has been carefully developed using decades of research 
              into bioresonance and frequency therapy. From deep relaxation to energy enhancement, 
              there's a program designed for every wellness goal.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-purple-50 rounded-xl p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">12</div>
                <p className="text-gray-700">Unique Programs</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">0.5-50</div>
                <p className="text-gray-700">Hz Frequency Range</p>
              </div>
              <div className="bg-indigo-50 rounded-xl p-6">
                <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
                <p className="text-gray-700">Customizable</p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Explore Our Therapy Programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {therapyPrograms.map((program) => {
                const IconComponent = program.icon;
                return (
                  <div key={program.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{program.name}</h3>
                          <p className="text-sm text-purple-600">{program.duration}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{program.description}</p>
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Key Benefits:</p>
                        <ul className="space-y-1">
                          {program.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-500">
                          <span className="font-semibold">Frequencies:</span> {program.frequencies}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">How to Choose Your Program</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Identify Your Goal</h3>
                <p className="text-gray-600">Determine what you want to achieve: relaxation, energy, pain relief, or recovery.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Check Duration</h3>
                <p className="text-gray-600">Consider how much time you have available for your therapy session.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Select Program</h3>
                <p className="text-gray-600">Use the digital control panel to select your desired therapy program.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">4</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Relax & Enjoy</h3>
                <p className="text-gray-600">Lie back and let the frequencies work their magic on your body and mind.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Experience All 12 Programs</h2>
            <p className="text-xl text-white/90 mb-8">
              The Bio-Wellness Energy Bed puts the power of frequency therapy at your fingertips. 
              Which program will you try first?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/bioresonance" className="inline-flex items-center justify-center rounded-lg bg-white text-purple-900 font-medium text-lg px-10 py-4 hover:bg-gray-100">
                Learn About Energy Bed
              </a>
              <a href="/" className="inline-flex items-center justify-center rounded-lg bg-transparent border-2 border-white text-white font-medium text-lg px-10 py-4 hover:bg-white/10">
                Request Quote
              </a>
            </div>
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
