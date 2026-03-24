import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, User, Search, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/Logo.jpg';

const Navbar = () => {
  const { cartCount } = useCart();
  const { wishlist } = useWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const productDropdownRef = useRef(null);
  const navigate = useNavigate();

  const categories = [
    "Hair Care",
    "Skin Care",
    "Bath & Body Care",
    "Fragrance / Perfume",
    "Powder / Raw Herbal Products",
    "Combo / Gift Packs"
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/shop', hasDropdown: true },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (productDropdownRef.current && !productDropdownRef.current.contains(event.target)) {
        setIsProductDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategoryClick = (category) => {
    setIsProductDropdownOpen(false);
    setIsMenuOpen(false);
    navigate(`/shop?category=${encodeURIComponent(category)}`);
  };

  return (
    <nav className="bg-brand-cream border-b border-brand-gold/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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
            <Link to="/" className="shrink-0">
              <img src={Logo} alt="Anantya Natural" className="h-12 w-auto object-contain rounded-sm" />
            </Link>
          </div>

          {/* Right Side: Nav Links + Icons */}
          <div className="hidden md:flex items-center justify-end flex-1 space-x-10">
            <div className="flex space-x-8 items-center">
              {navLinks.map((link) => (
                <div key={link.name} className="relative" ref={link.hasDropdown ? productDropdownRef : null}>
                  {link.hasDropdown ? (
                    <button
                      onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                      className={`text-sm font-bold tracking-widest uppercase transition-colors flex items-center space-x-1 ${
                        isProductDropdownOpen ? 'text-brand-gold' : 'text-brand-green hover:text-brand-gold'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={14} className={`transition-transform duration-300 ${isProductDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `text-sm font-bold tracking-widest uppercase transition-colors ${
                          isActive ? 'text-brand-gold' : 'text-brand-green hover:text-brand-gold'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}

                  {link.hasDropdown && (
                    <AnimatePresence>
                      {isProductDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 mt-4 w-64 bg-brand-cream border border-brand-gold/20 shadow-xl rounded-sm py-4 z-50"
                        >
                          {categories.map((cat) => (
                            <button
                              key={cat}
                              onClick={() => handleCategoryClick(cat)}
                              className="w-full text-left px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-brand-green hover:bg-brand-gold/10 hover:text-brand-gold transition-colors"
                            >
                              {cat}
                            </button>
                          ))}
                          <div className="border-t border-brand-gold/10 mt-2 pt-2">
                            <Link
                              to="/shop"
                              onClick={() => setIsProductDropdownOpen(false)}
                              className="block px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-brand-gold hover:bg-brand-gold/10 transition-colors"
                            >
                              View All Products
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
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
                <div key={link.name} className="space-y-2">
                  {link.hasDropdown ? (
                    <div className="space-y-2">
                      <div className="text-brand-green text-lg font-medium border-b border-brand-gold/10 pb-1 flex justify-between items-center">
                        <span>{link.name}</span>
                      </div>
                      <div className="pl-4 space-y-3 pt-2">
                        {categories.map((cat) => (
                          <button
                            key={cat}
                            onClick={() => handleCategoryClick(cat)}
                            className="block w-full text-left text-brand-green/70 text-sm hover:text-brand-gold"
                          >
                            {cat}
                          </button>
                        ))}
                        <Link
                          to="/shop"
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-brand-gold text-sm font-bold uppercase tracking-widest pt-2"
                        >
                          View All Products
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-brand-green text-lg font-medium hover:text-brand-gold"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
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

