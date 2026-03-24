import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { ProductCardSkeleton } from '../components/Skeletons';
import productsData from '../data/products.js';
import { Search, Filter, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(3000);
  const [sortBy, setSortBy] = useState('default');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    } else {
      setSelectedCategory('All');
    }
  }, [categoryFromUrl]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const categories = [
    'All',
    "Hair Care",
    "Skin Care",
    "Bath & Body Care",
    "Fragrance / Perfume",
    "Powder / Raw Herbal Products",
    "Combo / Gift Packs"
  ];

  const filteredProducts = useMemo(() => {
    return productsData
      .filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesPrice = product.price <= priceRange;
        return matchesSearch && matchesCategory && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-cream min-h-screen"
    >
      {/* Page Header */}
      <section className="bg-brand-green py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full translate-x-1/2 -translate-y-1/2 blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-subtitle text-brand-gold/60 mb-4 block"
          >
            Our Collection
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-playfair text-brand-beige mb-6"
          >
            Experience <span className="italic italic-gold text-brand-gold">Purity</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-beige/70 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Discover our range of authentic Ayurvedic products, handcrafted with the finest natural ingredients to nurture your body and soul.
          </motion.p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-brand-gold/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-green/40" size={18} />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full bg-brand-beige/30 border border-brand-gold/20 rounded-sm py-3 pl-12 pr-4 focus:outline-none focus:border-brand-gold text-brand-green placeholder:text-brand-green/40 transition-all focus:bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSidebarOpen(true)}
                className="flex items-center space-x-2 text-brand-green font-bold uppercase tracking-widest text-[10px] hover:text-brand-gold transition-colors"
              >
                <Filter size={16} />
                <span>Filters</span>
              </motion.button>
              
              <div className="relative group">
                <select 
                  className="appearance-none bg-transparent border-none text-brand-green font-bold uppercase tracking-widest text-[10px] pr-6 focus:outline-none cursor-pointer hover:text-brand-gold transition-colors"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Sort By: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-brand-gold" size={14} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-64 space-y-12 shrink-0">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h4 className="text-brand-green font-playfair text-xl mb-6 border-b border-brand-gold/10 pb-2">Categories</h4>
              <ul className="space-y-4">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button 
                      onClick={() => {
                        setSelectedCategory(cat);
                        setSearchParams(cat === 'All' ? {} : { category: cat });
                      }}
                      className={`text-[10px] tracking-widest uppercase transition-all duration-300 flex items-center group font-bold ${
                        selectedCategory === cat ? 'text-brand-gold' : 'text-brand-green/40 hover:text-brand-gold'
                      }`}
                    >
                      <motion.span 
                        animate={{ scale: selectedCategory === cat ? 1 : 0 }}
                        className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-3"
                      />
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <h4 className="text-brand-green font-playfair text-xl mb-6 border-b border-brand-gold/10 pb-2">Max Price: ₹{priceRange}</h4>
              <input 
                type="range" 
                min="0" 
                max="3000" 
                step="50"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full accent-brand-gold h-1 bg-brand-gold/10 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[9px] text-brand-green/30 mt-3 font-bold uppercase tracking-widest">
                <span>₹0</span>
                <span>₹3000</span>
              </div>
            </motion.div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1 overflow-visible">
            <AnimatePresence mode="popLayout">
              {loading ? (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                  {[...Array(6)].map((_, i) => (
                    <ProductCardSkeleton key={i} />
                  ))}
                </motion.div>
              ) : filteredProducts.length > 0 ? (
                <motion.div 
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                  {filteredProducts.map((product) => (
                    <motion.div 
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-32 space-y-6 bg-white/50 rounded-sm border border-dashed border-brand-gold/20"
                >
                  <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto text-brand-gold/40">
                    <Search size={32} />
                  </div>
                  <h3 className="text-2xl font-playfair text-brand-green">No products found</h3>
                  <p className="text-brand-green/40 max-w-sm mx-auto font-light">Try adjusting your filters or search terms to find what you're looking for.</p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                      setSearchParams({});
                      setPriceRange(3000);
                    }}
                    className="btn-primary text-xs tracking-widest"
                  >
                    Clear All Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* Mobile Filter Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-brand-green/40 backdrop-blur-sm z-60"
            />
            <motion.aside 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-brand-cream z-70 p-8 shadow-2xl border-l border-brand-gold/10"
            >
              <div className="flex justify-between items-center mb-12">
                <h3 className="text-2xl font-playfair text-brand-green">Filters</h3>
                <button onClick={() => setIsSidebarOpen(false)} className="text-brand-green hover:text-brand-gold transition-colors">
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-12">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-green/40 mb-6 border-b border-brand-gold/20 pb-2">Categories</h4>
                  <ul className="space-y-4">
                    {categories.map((cat) => (
                      <li key={cat}>
                        <button 
                          onClick={() => {
                            setSelectedCategory(cat);
                            setSearchParams(cat === 'All' ? {} : { category: cat });
                            setIsSidebarOpen(false);
                          }}
                          className={`text-xs tracking-[0.2em] uppercase transition-all font-bold ${
                            selectedCategory === cat ? 'text-brand-gold' : 'text-brand-green/40'
                          }`}
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-green/40 mb-6 border-b border-brand-gold/20 pb-2">Price Range (₹{priceRange})</h4>
                  <input 
                    type="range" 
                    min="0" 
                    max="3000" 
                    step="50"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="w-full accent-brand-gold h-1 bg-brand-gold/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setSearchParams({});
                    setPriceRange(3000);
                    setIsSidebarOpen(false);
                  }}
                  className="w-full btn-secondary mt-8 text-xs tracking-widest"
                >
                  Reset Filters
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Shop;
