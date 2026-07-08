import Image from "next/image";
import { Menu, Phone, Mail, MapPin, ArrowRight, Wallet } from "lucide-react";

const products = [
  {
    id: "bioresonance",
    name: "Bio-Resonance",
    description: "Quantum Bio-Wellness Energy Beds & Recliners featuring advanced bioresonance technology for cellular regeneration and holistic healing.",
    image: "/images/bioresonance-category-new.jpg",
    features: ["Quantum Energy Field", "Cellular Regeneration", "Stress Reduction", "Energy Balance"],
    href: "/bioresonance"
  },
  {
    id: "hyperbaric",
    name: "Hyperbaric Chambers",
    description: "Professional-grade hyperbaric oxygen chambers delivering 100% pure oxygen at increased pressure for enhanced recovery and wellness.",
    image: "/images/logo.png",
    features: ["Oxygen Therapy", "Enhanced Recovery", "Anti-Inflammatory", "Cognitive Support"],
    href: "/hyperbaric"
  },
  {
    id: "infrared",
    name: "Infrared Therapy",
    description: "State-of-the-art infrared panels, beds, and saunas for deep tissue healing, detoxification, and relaxation.",
    image: "/images/product-shot-1.png",
    features: ["Deep Heat Therapy", "Detoxification", "Pain Relief", "Improved Circulation"],
    href: "/infrared"
  },
  {
    id: "cryotherapy",
    name: "Cryotherapy",
    description: "Advanced cryotherapy solutions including Cryo Bike and Cryo Treadmill for accelerated recovery and performance enhancement.",
    image: "/images/product-shot-2.png",
    features: ["Cold Therapy", "Recovery Acceleration", "Inflammation Reduction", "Metabolic Boost"],
    href: "/cryotherapy"
  },
  {
    id: "massage-chairs",
    name: "Massage Chairs",
    description: "Luxury zero-gravity massage chairs with intelligent control, full-body compression, and multiple massage mechanisms.",
    image: "/images/pod-interior.jpeg",
    features: ["Zero Gravity", "Full Body Massage", "Heat Therapy", "Stress Relief"],
    href: "/massage-chairs"
  },
  {
    id: "fitness",
    name: "Specialty Fitness",
    description: "Cutting-edge fitness equipment designed for optimal performance, recovery, and overall physical wellness.",
    image: "/images/fitness-category-new.jpg",
    features: ["Performance Training", "Recovery Equipment", "Strength Building", "Cardio Health"],
    href: "/fitness"
  }
];

export default function Products() {
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
              <a className="text-sm font-medium text-gray-900" href="/products">Products</a>
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
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700">
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              State-of-the-art wellness equipment for businesses and homes
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-[4/3] relative">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3 text-gray-900">{product.name}</h2>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a 
                      href={product.href}
                      className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Why Choose Quanivo Wellness</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image src="/images/logo-new.jpg" alt="Quanivo" width={40} height={40} className="rounded" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Premium Quality</h3>
                <p className="text-gray-600">Each product is carefully selected for its quality, effectiveness, and ability to deliver real results.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Support</h3>
                <p className="text-gray-600">Our team of wellness experts is dedicated to helping you find the perfect solutions for your unique needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wallet className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Flexible Financing</h3>
                <p className="text-gray-600">Make your wellness investment manageable with competitive financing options. We work with multiple lenders to find the best solution for your budget and business needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Wellness?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to learn more about our products and find the perfect solution for your needs.
            </p>
            <a href="/" className="inline-flex items-center justify-center rounded-lg bg-white text-blue-900 font-medium text-lg px-10 py-4 hover:bg-gray-100">
              Get a Free Consultation
            </a>
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
