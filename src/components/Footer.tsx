import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-600 p-2 rounded-xl">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight font-serif">
                भगवद्गीता
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A humble tribute to the timeless wisdom of the Gita.
              Explore teachings, verses, and reflections that guide life with clarity and purpose.
            </p>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Explore</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Chapters</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Shlokas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Commentary</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">About</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 text-yellow-500 shrink-0" />
                <span>Bharat, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-yellow-500 shrink-0" />
                <span>+91 00000 00000</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-yellow-500 shrink-0" />
                <span>contact@gitawebsite.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Stay Connected</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive a daily shloka and reflection.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-gray-700"
              />
              <button className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg shadow-yellow-900/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Bhagavad Gita. All Rights Reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;