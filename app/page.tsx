import Image from "next/image";
import { Sparkles, Menu, Phone, Mail, MapPin } from "lucide-react";

export default function Home() {
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
              <a className="text-sm font-medium text-gray-900" href="/">Home</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/about-us">About Us</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/bioresonance">Products</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/businesses">For Business</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/financing">Financing</a>
              <a href="/" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white text-sm font-medium px-6 py-3 hover:bg-blue-700">Get Quote</a>
            </div>
            <button className="lg:hidden p-2"><Menu className="w-6 h-6" /></button>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-wellness-pod.jpeg"
              alt="Quantum Wellness Pod"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Bioresonance Energy Beds
            </h1>
            <h2 className="text-2xl md:text-3xl text-white/90 mb-8">
              & More State of the Art Wellness Equipment for Business and Home
            </h2>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white font-medium text-lg px-10 py-4 hover:bg-blue-700">
              Book Free Consultation
            </a>
          </div>
        </section>

        {/* Product Categories Grid */}
        <section id="products" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="group">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-square relative">
                    <Image src="/images/product-shot-2.png" alt="Fitness" fill className="object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-900">Fitness</h3>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-square relative">
                    <Image src="/images/product-shot-1.png" alt="Infrared" fill className="object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-900">Infrared</h3>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-square relative">
                    <Image src="/images/logo.png" alt="Hyperbaric" fill className="object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-900">Hyperbaric</h3>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-square relative">
                    <Image src="/images/pod-interior.jpeg" alt="Massage Chairs" fill className="object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-900">Massage Chairs</h3>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-square relative">
                    <Image src="/images/icon-feature.png" alt="Bio-Resonance" fill className="object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-900">Bio-Resonance</h3>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-square relative">
                    <Image src="/images/benefits-chart.png" alt="Cryotherapy" fill className="object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-900">Cryotherapy</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quantum Wellness Content */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Quantum Wellness & Bio-Stacking:
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-600">
              Revolutionizing Holistic Health
            </h3>
            <div className="prose prose-lg mx-auto text-gray-600 text-left">
              <p className="mb-4">
                Quantum wellness and bio-stacking represent a dynamic fusion of cutting-edge science and holistic health, redefining how we optimize well-being. Quantum wellness harnesses the principles of quantum physics, viewing the body as an energy system vibrating at specific frequencies.
              </p>
              <p className="mb-4">
                By using advanced technologies like quantum energy devices or bio-resonance, it aligns these frequencies to enhance cellular function, reduce stress, and promote self-healing. For example, quantum energy bio-wellness beds leverage electromagnetic fields to stimulate cellular repair, fostering vitality and balance across physical and mental states.
              </p>
              <p className="mb-4">
                This non-invasive approach appeals to those seeking innovative solutions to complement traditional health practices, emphasizing the interplay of mind, body, and energy. Bio-stacking amplifies these benefits by combining multiple wellness modalities for a synergistic effect, targeting diverse health aspects simultaneously.
              </p>
              <p className="mb-4">
                Pairing therapies like cryotherapy for inflammation reduction, infrared light for circulation, and vibrational therapy for emotional balance creates a powerful, personalized protocol. This integrated approach optimizes systems such as the circulatory, lymphatic, and nervous systems, making it ideal for high-end wellness settings or home use.
              </p>
              <p>
                By strategically layering therapies, bio-stacking maximizes outcomes like muscle recovery, detoxification, and stress relief, empowering individuals to achieve transformative health. Together, quantum wellness and bio-stacking offer a forward-thinking path to vibrant, holistic well-being.
              </p>
            </div>
          </div>
        </section>

        {/* Product Line CTA */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white font-medium text-xl px-12 py-5 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all">
              View Our Product Line
            </a>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900">Perfect For</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Luxury Homes', 'Wellness Enthusiasts', 'Fitness Facilities', 'Senior Communities', 'Cryotherapy Centers', 'Functional Medicine Providers', 'Wellness Clinics', 'Therapy Facilities', 'Athletes & Teams', 'Spas & Resorts'].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
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
                <li><a href="/" className="hover:text-white">Home</a></li>
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