import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import productsData from '../data/products.js';
import { motion } from 'framer-motion';
import { Leaf, Droplets, ShieldCheck, Sparkles, Check } from 'lucide-react';
import HairFallControl from '../assets/Image/Hair Fall Control.png';
import AcneReduction from '../assets/Image/Acne Reduction.png';
import GlowingSkin from '../assets/Image/Glowing Skin.png';
import PsoriasisCare from '../assets/Image/Psoriasis Care.png';
import Neem from '../assets/Image/Neem.png';
import AloeVera from '../assets/Image/Aloe Vera.png';
import Tulsi from '../assets/Image/Tulsi.png';
import Turmeric from '../assets/Image/Turmeric.png';

const Home = () => {
  const featuredProducts = productsData.filter(p => p.featured);

  const features = [
    { icon: <Leaf size={32} />, title: "100% Natural", description: "Pure botanical extracts sourced directly from nature." },
    { icon: <ShieldCheck size={32} />, title: "No Chemicals", description: "Free from parabens, sulfates, and synthetic fragrances." },
    { icon: <Droplets size={32} />, title: "Ayurvedic Formula", description: "Authentic recipes from ancient Ayurvedic texts." },
    { icon: <Sparkles size={32} />, title: "Safe for All", description: "Dermatologically tested and gentle on all skin types." }
  ];

  const benefits = [
    { title: "Hair Fall Control", image: HairFallControl },
    { title: "Acne Reduction", image: AcneReduction },
    { title: "Glowing Skin", image: GlowingSkin },
    { title: "Psoriasis Care", image: PsoriasisCare }
  ];

  const ingredients = [
    { name: "Neem", image: Neem },
    { name: "Aloe Vera", image: AloeVera },
    { name: "Tulsi", image: Tulsi },
    { name: "Turmeric", image: Turmeric }
  ];

  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Why Choose Us Section */}
      <section className="py-24 bg-brand-green text-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-medium uppercase tracking-[0.3em] text-sm mb-4 block">Our Promise</span>
            <h2 className="text-3xl md:text-5xl font-playfair mb-6">Why Anantya Natural?</h2>
            <div className="w-24 h-0.5 bg-brand-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center space-y-6 group"
              >
                <div className="w-16 h-16 bg-brand-beige/10 rounded-full flex items-center justify-center mx-auto text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-green transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-playfair font-medium text-brand-gold">{feature.title}</h3>
                <p className="text-brand-beige/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <ProductGrid 
        products={featuredProducts} 
        title="Our Bestselling Elixirs" 
        subtitle="Customer Favorites" 
      />

      {/* Benefits Section */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-subtitle">Real Results</span>
            <h2 className="section-title">Experience the Transformation</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/3] group overflow-hidden rounded-sm shadow-lg"
              >
                <img 
                  src={benefit.image} 
                  alt={benefit.title} 
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green/60 to-transparent flex items-end p-6">
                  <h3 className="text-white font-playfair text-xl group-hover:text-brand-gold transition-colors">{benefit.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-24 bg-brand-beige/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="text-left">
              <span className="section-subtitle text-left">Purity Matters</span>
              <h2 className="section-title text-left">Ingredients from Nature's Lap</h2>
            </div>
            <p className="text-brand-green/60 max-w-md font-light mb-2">
              We carefully select only the finest herbs, oils, and minerals that have been used in Ayurvedic healing for centuries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {ingredients.map((ing, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="space-y-4 text-center group"
              >
                <div className="aspect-square rounded-full overflow-hidden border-2 border-brand-gold/20 p-2 group-hover:border-brand-gold transition-all duration-500">
                  <img src={ing.image} alt={ing.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <h4 className="text-brand-green font-medium tracking-widest uppercase text-xs">{ing.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold rounded-full -translate-x-1/2 -translate-y-1/2 blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold rounded-full translate-x-1/2 translate-y-1/2 blur-[120px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h2 className="text-brand-beige text-4xl md:text-6xl font-playfair leading-tight">
              Start your natural care <span className="italic italic-gold text-brand-gold">journey</span> today
            </h2>
            <p className="text-brand-beige/70 text-lg max-w-xl mx-auto font-light leading-relaxed">
              Join thousands who have discovered the power of authentic Ayurvedic care. Your path to holistic beauty begins here.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="btn-gold px-12 py-4 text-lg">Products</button>
              <button className="border border-brand-beige/30 text-brand-beige px-12 py-4 text-lg hover:bg-brand-beige/10 transition-all">Join the Community</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
