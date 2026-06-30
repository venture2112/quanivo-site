import Image from "next/image";
import { Sparkles, Menu, Phone, Mail, MapPin, ChevronDown } from "lucide-react";

export default function Businesses() {
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
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/about-us">About Us</a>
              <div className="relative group">
                <a className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1" href="/bioresonance">
                  Products <ChevronDown className="w-4 h-4" />
                </a>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px] hidden group-hover:block">
                  <a href="/bioresonance" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">Bioresonance</a>
                  <a href="/hyperbaric" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">Hyperbaric Chambers</a>
                  <a href="/infrared" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">Infrared</a>
                </div>
              </div>
              <a className="text-sm font-medium text-gray-900" href="/businesses">For Business</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/financing">Financing</a>
              <a href="/" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white text-sm font-medium px-6 py-3 hover:bg-blue-700">Get Quote</a>
            </div>
            <button className="lg:hidden p-2"><Menu className="w-6 h-6" /></button>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-20">
        {/* Hero Image Slider Section */}
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-xl">
              <div className="flex gap-4 overflow-x-auto pb-4">
                <div className="flex-shrink-0 w-full md:w-1/3">
                  <Image src="/images/hero-wellness-pod.jpeg" alt="Wellness Pod" width={400} height={300} className="rounded-lg shadow-md w-full h-64 object-cover" />
                </div>
                <div className="flex-shrink-0 w-full md:w-1/3">
                  <Image src="/images/pod-session.jpeg" alt="Pod Session" width={400} height={300} className="rounded-lg shadow-md w-full h-64 object-cover" />
                </div>
                <div className="flex-shrink-0 w-full md:w-1/3">
                  <Image src="/images/pod-interior.jpeg" alt="Pod Interior" width={400} height={300} className="rounded-lg shadow-md w-full h-64 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Headline Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Amplify Your Success with
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Quanivo Wellness Solutions
            </h1>
          </div>
        </section>

        {/* Welcome Text Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-700 mb-6">
              Welcome to Quanivo Wellness, where we empower spas, clinics, gyms, corporate wellness programs, and innovative business owners to lead the charge in the $3.7 trillion wellness industry.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Whether you're a gym, wellness center or spa owner, chiropractor, acupuncturist, nutritionist, practitioner, or natural health doctor, our bio-wellness pods and advanced equipment, like cryotherapy chambers, hyperbaric chambers, and luxury massage chairs, are designed to elevate your offerings, attract new clients, and boost profitability.
            </p>
            <p className="text-lg text-gray-700">
              By partnering with Quanivo Wellness, you gain access to cutting-edge quantum wellness solutions that deliver transformative results, ensuring your business thrives in a competitive market.
            </p>
          </div>
        </section>

        {/* Product Images Row */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Image src="/images/product-shot-1.png" alt="Product 1" width={400} height={300} className="rounded-lg shadow-md w-full h-64 object-cover" />
              <Image src="/images/product-shot-2.png" alt="Product 2" width={400} height={300} className="rounded-lg shadow-md w-full h-64 object-cover" />
              <Image src="/images/benefits-chart.png" alt="Benefits Chart" width={400} height={300} className="rounded-lg shadow-md w-full h-64 object-cover" />
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
              Why Choose Quanivo Wellness<br />for Your Business?
            </h2>
            <p className="text-lg text-gray-700">
              Our flagship Quantum Energy Bio-Wellness Pod is a game-changer, blending quantum energy, red light therapy (630nm-850nm), far-infrared heat, vibrational therapy, and more to create immersive 15-60 minute sessions that enhance circulation, detoxification, muscle recovery, and mental clarity. Priced at an average of $100/hour, these pods capitalize on your existing clientele—athletes, busy professionals, and wellness enthusiasts—while drawing new patrons with a service so exclusive it often commands waitlists due to limited availability. Requiring just 5x9 feet of space, the pod is a perfect fit for underutilized areas in spas, gyms, hotels, or wellness resorts, delivering rapid profitability with minimal staff training and seamless integration into your operations.
            </p>
          </div>
        </section>

        {/* Tailored Solutions Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Tailored Solutions for<br />Diverse Wellness Businesses
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wellness Practitioners</h3>
                <p className="text-gray-700">
                  Chiropractors, acupuncturists, and natural doctors can enhance their practice with our bio-wellness pods, offering clients a unique experience that complements existing therapies.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Spas and Gyms</h3>
                <p className="text-gray-700">
                  Maximize unused space and elevate your brand as a cutting-edge wellness destination. Our equipment styled in modern elegance, creates a luxurious ambiance, encouraging repeat visits and boosting revenue by up to 30%, as seen with similar technologies.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Wellness Programs</h3>
                <p className="text-gray-700">
                  Large businesses seeking employee perks can integrate our pods to reduce sick days and insurance claims. Bulk pricing is available, making it cost-effective to foster a healthier workforce with benefits like pain relief and stress reduction. Our hyperbaric chambers and massage chairs further enhance corporate wellness initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Investment Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
              Strategic Investment for<br />Long-Term Growth
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Investing in Quanivo's wellness solutions positions your business at the forefront of the holistic health movement. Our bio-wellness pods and related equipment offer customizable protocols for weight management, recovery, or relaxation, driving client loyalty and organic growth. With ease of use, your operations remain streamlined, allowing you to focus on delivering premium services.
            </p>
            <p className="text-lg text-gray-700">
              Transform your business into a beacon of health and profitability with Quanivo Wellness, where innovation meets unparalleled client satisfaction.
            </p>
          </div>
        </section>

        {/* Contact Section */}
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
