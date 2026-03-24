import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import local assets
// import Banner1 from '../assets/Banner1.png';
// import Banner2 from '../assets/Banner2.png';
// import Banner3 from '../assets/Banner3.png';
import Banner1 from '../assets/Banner4.png';
import Banner2 from '../assets/Banner5.png';
import Banner3 from '../assets/Banner6.png';

const banners = [
  {
    image: Banner1,
    subtitle: "Rooted in Tradition, Pure by Nature",
    title: "Natural Ayurvedic Care for Healthy Skin & Hair",
    description: "Pure ingredients. Traditional Ayurveda. Real results you can trust. Experience the timeless beauty secrets of nature."
  },
  {
    image: Banner2,
    subtitle: "Ancient Wisdom, Modern Luxury",
    title: "Holistic Wellness for Your Mind & Body",
    description: "Discover the power of botanical extracts and essential oils. Handcrafted with love and ancient wisdom."
  },
  {
    image: Banner3,
    subtitle: "Purity You Can Feel",
    title: "Revive Your Natural Radiance Today",
    description: "100% organic, chemical-free formulations designed to bring out your inner glow and outer beauty."
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === banners.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? banners.length - 1 : current - 1);

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-brand-green">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={banners[current].image} 
            alt="Ayurvedic Natural Care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-brand-green/70 via-brand-green/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-xs mb-6 block drop-shadow-sm">
                {banners[current].subtitle}
              </span>
              
              <h1 className="text-white text-5xl md:text-7xl font-playfair mb-8 leading-[1.1] drop-shadow-md">
                {banners[current].title.split('Healthy').map((part, i) => (
                  part === '' ? <span key={i} className="italic text-brand-gold">Healthy</span> : part
                ))}
              </h1>
              
              <p className="text-brand-beige/90 text-lg md:text-xl mb-12 leading-relaxed max-w-lg font-light drop-shadow-sm">
                {banners[current].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/shop" className="btn-gold px-12 py-4 text-lg text-center shadow-2xl shadow-black/20">
                  Products
                </Link>
                <Link to="/about" className="border border-white/40 text-white px-12 py-4 text-lg rounded-sm hover:bg-white/10 transition-all backdrop-blur-md text-center">
                  Explore Products
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 right-10 z-20 flex space-x-4">
        <button 
          onClick={prevSlide}
          className="p-4 border border-white/20 text-white rounded-full hover:bg-brand-gold hover:text-brand-green hover:border-brand-gold transition-all backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="p-4 border border-white/20 text-white rounded-full hover:bg-brand-gold hover:text-brand-green hover:border-brand-gold transition-all backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 transition-all duration-500 rounded-full ${
              current === index ? 'w-12 bg-brand-gold' : 'w-4 bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-10 z-10 hidden lg:flex flex-col items-center"
      >
        <span className="text-[9px] text-white/40 uppercase tracking-[0.3em] mb-4 font-bold [writing-mode:vertical-lr]">Scroll</span>
        <div className="w-px h-16 bg-linear-to-b from-brand-gold to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
