import { Sparkles, Menu, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a className="flex items-center gap-2" href="/">
              <Sparkles className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold text-gold-gradient">Quanivo</span>
            </a>
            <div className="hidden lg:flex items-center gap-6">
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/">Home</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/products">Products</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/technology">Technology</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/business">For Business</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/residential">For Home</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/about">About</a>
              <a className="text-sm text-gray-600 hover:text-gray-900" href="/blog">Blog</a>
              <a className="text-sm font-medium text-blue-600" href="/contact">Contact</a>
              <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white text-sm font-medium px-4 py-2 hover:bg-blue-700">Get Quote</a>
            </div>
            <button className="lg:hidden p-2"><Menu className="w-6 h-6" /></button>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-16">
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ready to transform your wellness business? Get in touch.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><label className="block text-sm font-medium mb-2">First Name</label><input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" /></div>
                    <div><label className="block text-sm font-medium mb-2">Last Name</label><input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" /></div>
                  </div>
                  <div><label className="block text-sm font-medium mb-2">Email</label><input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" /></div>
                  <div><label className="block text-sm font-medium mb-2">Phone</label><input type="tel" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" /></div>
                  <div><label className="block text-sm font-medium mb-2">Business Type</label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option>Spa/Wellness Center</option>
                      <option>Medical Practice</option>
                      <option>Gym/Fitness Center</option>
                      <option>Hotel/Resort</option>
                      <option>Residential</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div><label className="block text-sm font-medium mb-2">Message</label><textarea rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"></textarea></div>
                  <button type="submit" className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700">Submit Request</button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4"><Mail className="w-6 h-6 text-blue-600" /><span>info@quanivo.com</span></div>
                    <div className="flex items-center gap-4"><Phone className="w-6 h-6 text-blue-600" /><span>1-800-QUANIVO</span></div>
                    <div className="flex items-center gap-4"><MapPin className="w-6 h-6 text-blue-600" /><span>Available nationwide</span></div>
                  </div>
                </div>

                <div className="bg-blue-600 rounded-xl shadow-lg p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">Schedule a Demo</h2>
                  <p className="mb-4">See the Quantum Wellness Pod in action. Schedule a live demonstration.</p>
                  <button className="bg-white text-blue-600 font-medium py-3 px-6 rounded-lg hover:bg-gray-100">Book Demo</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div><div className="flex items-center gap-2 mb-4"><Sparkles className="w-6 h-6 text-blue-400" /><span className="text-xl font-bold">Quanivo</span></div><p className="text-gray-400">Quantum wellness solutions.</p></div>
            <div><h4 className="font-bold mb-4">Products</h4><ul className="space-y-2 text-gray-400"><li><a href="/products" className="hover:text-white">Quantum Pod</a></li></ul></div>
            <div><h4 className="font-bold mb-4">Company</h4><ul className="space-y-2 text-gray-400"><li><a href="/about" className="hover:text-white">About</a></li></ul></div>
            <div><h4 className="font-bold mb-4">Contact</h4><ul className="space-y-2 text-gray-400"><li>info@quanivo.com</li></ul></div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">© 2024 Quanivo. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}