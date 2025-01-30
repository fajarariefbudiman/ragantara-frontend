import React from "react";
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t-4 border-emerald-500 mt-10 bg-white">
      <div className="container px-20 py-8 sm:py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About section */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif text-gray-900">Tentang Ragantara</h3>
            <p className="text-gray-600 text-sm">Temukan koleksi pakaian eksklusif untuk setiap momen spesial Anda. Kami menyediakan berbagai pilihan pakaian dengan kualitas terbaik.</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              {["FAQ", "Size Guide", "Cara Pemesanan", "Kebijakan Retur", "Kebijakan Privasi"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact section */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif text-gray-900">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-600">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Jl. Fashion Street No. 123, Jakarta</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>+62 123 4567 890</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>info@ragantara.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter section */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif text-gray-900">Newsletter</h3>
            <p className="text-gray-600 text-sm">Dapatkan update terbaru tentang koleksi dan promo spesial kami.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg sm:rounded-r-none focus:outline-none focus:border-emerald-500"
              />
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg sm:rounded-l-none hover:bg-emerald-700 transition-colors">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
            <p className="text-gray-600 text-sm text-center sm:text-left">© 2024 Ragantara. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
