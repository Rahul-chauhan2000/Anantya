import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Heart, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/Logo.jpg';

const Navbar = () => {
  const { cartCount } = useCart();
  const { wishlist } = useWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/shop' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-brand-cream border-b border-brand-gold/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-green hover:text-brand-gold transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Left Side: Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img src={Logo} alt="Anantya Natural" className="h-14 w-auto object-contain rounded-sm" />
            </Link>
          </div>

          {/* Right Side: Nav Links + Icons */}
          <div className="hidden md:flex items-center justify-end flex-1 space-x-10">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-bold tracking-widest uppercase transition-colors ${
                      isActive ? 'text-brand-gold' : 'text-brand-green hover:text-brand-gold'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            
            <div className="flex items-center space-x-5 border-l border-brand-gold/20 pl-10">
              <button className="text-brand-green hover:text-brand-gold transition-colors">
                <Search size={20} />
              </button>
              <Link to="/login" className="text-brand-green hover:text-brand-gold transition-colors">
                <User size={20} />
              </Link>
              <Link to="/wishlist" className="text-brand-green hover:text-brand-gold transition-colors relative">
                <Heart size={20} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-brand-gold text-brand-green text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>
              <Link to="/cart" className="text-brand-green hover:text-brand-gold transition-colors relative">
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-brand-gold text-brand-green text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Right Icons */}
          <div className="flex md:hidden items-center space-x-4">
            <Link to="/wishlist" className="text-brand-green relative">
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-gold text-brand-green text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="text-brand-green relative">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-gold text-brand-green text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-beige overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-brand-green text-lg font-medium hover:text-brand-gold"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-brand-gold/10 flex space-x-6">
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-brand-green">
                  <User size={24} />
                </Link>
                <button className="text-brand-green">
                  <Search size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
