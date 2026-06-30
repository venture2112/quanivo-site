'use client';

import { useState } from "react";
import { Menu, ShoppingCart, ChevronDown, ChevronUp, MessageCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is the Bio-Wellness Pod, and how does it work?",
    answer: "The Bio-Wellness Pod, also known as the Quantum Energy Wellness Bed Pod, is an advanced wellness device that integrates quantum energy principles, scalar waves, pulsed electromagnetic field (PEMF), and other modalities to promote holistic healing. It uses bio-stacking of combined modalities to assess and address energy imbalances, delivering personalized wellness to support cellular repair, reduce inflammation, and enhance relaxation. Ideal for home or professional use, the Pod targets physical, mental, and emotional well-being, offering a non-invasive approach to stress relief, pain management, and vitality."
  },
  {
    question: "What are the benefits of Quanivo Wellness's cryotherapy products?",
    answer: "Our specialty cryotherapy products, including the Cryo Bike and Cryo Treadmill, combine hot and cold therapy with exercise to accelerate recovery and boost wellness. These innovative devices apply targeted cold temperatures to key muscle groups during workouts, reducing inflammation, easing muscle soreness, and enhancing circulation. The Cryo Bike and Treadmill are perfect for athletes or fitness enthusiasts seeking faster recovery without the hassle of ice baths, offering a comfortable, self-operated experience that integrates seamlessly into fitness routines."
  },
  {
    question: "How do hyperbaric chambers from Quanivo Wellness support health?",
    answer: "The hyperbaric chambers deliver oxygen therapy by immersing users in 100% pure oxygen at pressures 1.5 to 3 times higher than normal. This process enhances oxygen delivery to tissues, promoting faster recovery from injuries, improved circulation, and reduced inflammation. Benefits may include relief from chronic fatigue, enhanced brain function, and support for conditions like wound healing or neurological disorders. The chambers feature modern designs with adjustable recliners and internet connectivity for a luxurious, user-friendly experience. You can choose between portable soft or hard shell chambers."
  },
  {
    question: "What features do Quanivo Wellness's zero gravity massage chairs offer?",
    answer: "Our high-end zero gravity massage chairs are engineered for ultimate relaxation and recovery. Featuring multiple massage mechanisms, intelligent control, and air-cell full-body compression, they target muscle tension and promote deep relaxation. The zero gravity position reduces spinal pressure, while features like heated rollers and Bluetooth speakers enhance the experience. These chairs are ideal for alleviating stress, improving posture, and supporting post-workout recovery."
  },
  {
    question: "What are the delivery options for Quanivo Wellness products?",
    answer: "For the Bio-Wellness Pods we offer front door delivery included in the price with white glove delivery optional for additional cost. If opted for, white glove delivery includes delivery to your room of choice (within one flight of stairs) and debris removal. For locations requiring multiple flights of stairs, please contact our team for assistance. Standard delivery (threshold drop-off) is available for select items, but note that boxes can weigh over 300 lbs, requiring professional handling. Shipping times vary based on inventory: in-stock items ship within 10–15 days, while made-to-order products may take 30–45 days. You'll receive a call to schedule delivery."
  },
  {
    question: "What financing options are available for Quanivo Wellness products?",
    answer: "Financing is available for qualified buyers to make our premium wellness products more accessible. We partner with top lenders to offer competitive rates, flexible terms, and deferred payment options. To explore financing, contact our sales team. Approval depends on creditworthiness, and terms vary by product. This allows you to invest in your wellness without upfront financial strain. Businesses can also apply."
  },
  {
    question: "What are the warranty details for Quanivo Wellness products?",
    answer: "Our warranties reflect our commitment to quality, ranging from 1 to 5 years depending on the product. The Bio-Wellness Pod, the Cryotherapy equipment, and the luxury massage chairs includes a 1-year warranty. The other products will vary up to 5 years. Ask us for more details."
  },
  {
    question: "Can I return or get support for my Quanivo Wellness purchase?",
    answer: "Due to the specialized nature of our high-end wellness equipment—such as the Bio-Wellness Pod, Cryo Bike, Cryo Treadmill, and zero gravity massage chairs—all sales are final. These products are often made to order or involve complex components tailored to specific wellness needs, making returns impractical. Additionally, their high value and white glove delivery process, which includes custom pre-assembly, preclude standard return policies. We encourage customers to thoroughly review product specifications, consult with our wellness ambassadors, and explore financing options before purchasing. To ensure confidence in your investment, we provide detailed product information and responsive customer support to address any questions. Our warranties also offer peace of mind by covering defects, ensuring long-term satisfaction with your purchase."
  },
  {
    question: "How do I maintain my Quanivo Wellness products?",
    answer: "To maintain optimal performance and ease of use, the Bio-Wellness Pod comes with built-in touch ozone disinfectant. One button push cleans the equipment after each use. For Cryo Bike and Treadmill, clean belts and motors regularly and lubricate as per the manual. It is good practice to inspect hyperbaric chambers for seal integrity and clean massage chair fabrics periodically. Follow product-specific guidelines. You can also contact our after-sales support team for detailed instructions or assistance if needed."
  },
  {
    question: "How can I contact Quanivo Wellness for support or inquiries?",
    answer: "We understand these are large purchases so we welcome your outreach to us. Reach our team via the website's contact form, email, or phone. For sales, financing, or delivery questions, call our wellness ambassadors or use live chat. For service or warranty issues, email support with your product serial number. We're dedicated to ensuring your wellness journey is seamless and supported."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a className="flex items-center gap-2" href="/">
              <div className="w-10 h-10 relative">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <circle cx="20" cy="20" r="15" fill="#56CCF2" />
                  <path d="M20 5 Q32 20 20 35 Q8 20 20 5" fill="none" stroke="white" strokeWidth="3" />
                </svg>
              </div>
              <span className="text-2xl font-semibold text-gray-800">Quanivo</span>
            </a>
            
            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-6">
              <a className="text-sm text-gray-500 hover:text-gray-700" href="/about-us">About Us</a>
              <div className="relative group">
                <a className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1" href="/bioresonance">
                  Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-48 hidden group-hover:block z-50">
                  <a href="/bioresonance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Bioresonance</a>
                  <a href="/cryotherapy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cryotherapy</a>
                  <a href="/hyperbaric" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hyperbaric Chambers</a>
                  <a href="/infrared" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Infrared</a>
                  <a href="/massage-chairs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Massage Chairs</a>
                  <a href="/fitness" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Fitness</a>
                </div>
              </div>
              <a className="text-sm text-gray-500 hover:text-gray-700" href="/businesses">For Business</a>
              <a className="text-sm text-gray-500 hover:text-gray-700" href="/financing">Financing</a>
              <a className="text-sm text-cyan-400 border-b-2 border-cyan-400 pb-1" href="/faq">FAQ</a>
              <a className="text-sm text-gray-500 hover:text-gray-700" href="/blog">Blog</a>
              <a className="text-sm text-gray-500 hover:text-gray-700" href="/contact">Contact</a>
            </div>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button className="lg:hidden p-2 text-gray-600 hover:text-gray-800">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* FAQ Section */}
      <section className="py-16 bg-white flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-cyan-500 text-lg font-medium tracking-wider uppercase mb-4">FAQ</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Frequently Asked Questions</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our wellness products, delivery, financing, and support.
            </p>
          </div>

          {/* Want More Info Section */}
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Want More info?</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Quanivo Wellness is dedicated to transforming health and recovery through cutting-edge wellness technologies. Our product lineup, including the Bio-Wellness Pod, specialty cryotherapy products like the Cryo Bike and Cryo Treadmill, hyperbaric chambers, and high-end zero gravity massage chairs, is designed to elevate your wellness journey.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              Below, we address common questions about our products, delivery, financing, warranties, and more to help you make informed decisions.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900 pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 bg-gray-50">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Contact Us
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-6">
            <a href="/contact" className="hover:text-gray-900">Contact</a>
            <a href="/privacy-policy" className="hover:text-gray-900">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-gray-900">Terms and Conditions</a>
            <a href="/disclaimer" className="hover:text-gray-900">Disclaimer</a>
            <a href="/refund-policy" className="hover:text-gray-900">Refund Policy</a>
            <a href="/dmca" className="hover:text-gray-900">DMCA</a>
            <a href="/cookies" className="hover:text-gray-900">Cookies</a>
            <a href="/california-privacy" className="hover:text-gray-900">California Privacy</a>
            <a href="/financing" className="hover:text-gray-900">Financing</a>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold text-cyan-500 mb-2">Quanivo Wellness</h3>
            <p className="text-gray-500 text-sm">Copyright 2025. All rights reserved</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg hover:bg-cyan-500 transition-colors">
          <MessageCircle className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
}
