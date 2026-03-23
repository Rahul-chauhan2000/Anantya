import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-green text-brand-beige pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-playfair font-bold tracking-tighter text-brand-gold">
              ANANTYA<span className="text-brand-beige">.</span>
            </Link>
            <p className="text-brand-beige/70 leading-relaxed max-w-xs">
              Rooted in the timeless wisdom of Ayurveda, Anantya Natural brings you the purest essences of nature for holistic well-being.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-brand-beige/10 hover:bg-brand-gold hover:text-brand-green p-2 rounded-full transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-brand-beige/10 hover:bg-brand-gold hover:text-brand-green p-2 rounded-full transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-brand-beige/10 hover:bg-brand-gold hover:text-brand-green p-2 rounded-full transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-brand-gold font-playfair text-xl">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-brand-beige/70 hover:text-brand-gold transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-brand-beige/70 hover:text-brand-gold transition-colors">Our Story (About Us)</Link></li>
              <li><Link to="/wishlist" className="text-brand-beige/70 hover:text-brand-gold transition-colors">Wishlist</Link></li>
              <li><Link to="/contact" className="text-brand-beige/70 hover:text-brand-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-6">
            <h4 className="text-brand-gold font-playfair text-xl">Customer Care</h4>
            <ul className="space-y-4">
              <li><Link to="/shipping" className="text-brand-beige/70 hover:text-brand-gold transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-brand-beige/70 hover:text-brand-gold transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/faq" className="text-brand-beige/70 hover:text-brand-gold transition-colors">FAQs</Link></li>
              <li><Link to="/terms" className="text-brand-beige/70 hover:text-brand-gold transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-brand-gold font-playfair text-xl">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-brand-gold mt-1 flex-shrink-0" />
                {/* <span className="text-brand-beige/70">123 Ayurvedic Lane, Heritage Enclave, Varanasi, India</span> */}
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-brand-gold flex-shrink-0" />
                {/* <span className="text-brand-beige/70">7078</span> */}
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-brand-gold flex-shrink-0" />
                {/* <span className="text-brand-beige/70">rvan@gmail.com</span> */}
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter & Copyright */}
        <div className="pt-10 border-t border-brand-beige/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="w-full max-w-md">
            <h5 className="text-brand-gold mb-4 text-sm font-medium uppercase tracking-widest">Subscribe to our newsletter</h5>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-brand-beige/10 border border-brand-beige/20 text-brand-beige px-4 py-2 w-full focus:outline-none focus:border-brand-gold"
              />
              <button className="bg-brand-gold text-brand-green px-6 py-2 font-medium hover:bg-opacity-90 transition-all">Join</button>
            </div>
          </div>
          <div className="text-brand-beige/50 text-sm flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
            <span>© 2026 Anantya Natural. All rights reserved.</span>
            <span className="hidden md:block">|</span>
            <span>Designed & Developed with ♡ by <span className="text-brand-gold font-medium">Webmetrix Solution</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
