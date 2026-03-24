import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.js';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, ShoppingBag, ShieldCheck, Truck, RefreshCcw, Minus, Plus, ChevronRight } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import { ProductDetailSkeleton } from '../components/Skeletons';
import toast from 'react-hot-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    setLoading(true);
    const foundProduct = productsData.find(p => p.id === parseInt(id));
    
    // Simulate loading
    const timer = setTimeout(() => {
      setProduct(foundProduct);
      setLoading(false);
      window.scrollTo(0, 0);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${quantity} x ${product.name} added to cart!`, {
      style: {
        background: '#0f3d2e',
        color: '#d4af37',
        border: '1px solid #d4af37',
        fontSize: '14px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontFamily: 'Playfair Display'
      }
    });
  };

  if (loading) {
    return (
      <div className="bg-brand-cream min-h-screen py-24">
        <ProductDetailSkeleton />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-cream">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-playfair text-brand-green">Product Not Found</h2>
          <Link to="/shop" className="btn-primary inline-block">Back to Products</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = productsData.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-cream pb-20"
    >
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center text-[9px] font-bold uppercase tracking-[0.2em] text-brand-green/30">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <ChevronRight size={10} className="mx-2" />
          <Link to="/shop" className="hover:text-brand-gold transition-colors">Products</Link>
          <ChevronRight size={10} className="mx-2" />
          <span className="text-brand-gold">{product.name}</span>
        </nav>
      </div>

      {/* Product Main Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <div className="aspect-4/5 rounded-sm overflow-hidden bg-white shadow-2xl group cursor-zoom-in relative flex items-center justify-center">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain p-4"
              />
              <div className="absolute inset-0 bg-brand-green/5 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold"
              >
                {product.category}
              </motion.span>
              <div className="flex items-center text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} className="mr-0.5" />
                ))}
                <span className="text-[10px] ml-3 font-bold text-brand-green/30 tracking-widest uppercase">({product.reviews} Reviews)</span>
              </div>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-playfair text-brand-green mb-8 leading-[1.1]"
            >
              {product.name}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold text-brand-green mb-10 flex items-center"
            >
              ₹{product.price}
              <span className="ml-4 text-[10px] font-bold text-brand-gold uppercase tracking-widest bg-brand-gold/10 px-3 py-1 rounded-full">In Stock</span>
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-brand-green/60 text-lg leading-relaxed mb-12 font-light italic"
            >
              "{product.description}"
            </motion.p>

            <div className="space-y-10 pb-12 border-b border-brand-gold/10">
              {/* Quantity Selector */}
              <div className="flex items-center space-x-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-green/40">Quantity</span>
                <div className="flex items-center border border-brand-gold/20 rounded-sm bg-white">
                  <motion.button 
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-4 text-brand-green hover:text-brand-gold transition-colors"
                  >
                    <Minus size={16} />
                  </motion.button>
                  <span className="w-16 text-center font-bold text-brand-green text-lg">{quantity}</span>
                  <motion.button 
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-4 text-brand-green hover:text-brand-gold transition-colors"
                  >
                    <Plus size={16} />
                  </motion.button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="flex-1 btn-primary py-5 flex items-center justify-center space-x-4 text-lg shadow-2xl shadow-brand-green/20"
                >
                  <ShoppingBag size={22} />
                  <span className="tracking-widest uppercase text-sm font-bold">Add to Cart</span>
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleWishlist(product)}
                  className={`px-10 py-5 border rounded-sm transition-all duration-500 flex items-center justify-center shadow-lg ${
                    isInWishlist(product.id) 
                      ? 'border-brand-gold bg-brand-gold/10 text-brand-gold' 
                      : 'border-brand-green/20 text-brand-green hover:border-brand-gold hover:text-brand-gold bg-white'
                  }`}
                >
                  <Heart size={22} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                </motion.button>
              </div>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12">
              <div className="flex flex-col items-center text-center space-y-3 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-brand-gold transition-all duration-500">
                  <Truck size={24} className="text-brand-gold group-hover:text-brand-green" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-green/40">Free Express Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-brand-gold transition-all duration-500">
                  <ShieldCheck size={24} className="text-brand-gold group-hover:text-brand-green" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-green/40">100% Certified Organic</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-brand-gold transition-all duration-500">
                  <RefreshCcw size={24} className="text-brand-gold group-hover:text-brand-green" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-green/40">15-Day Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="flex border-b border-brand-gold/10 overflow-x-auto no-scrollbar">
          {['description', 'ingredients', 'benefits'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-6 px-12 text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative whitespace-nowrap ${
                activeTab === tab ? 'text-brand-green' : 'text-brand-green/30 hover:text-brand-gold'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
                />
              )}
            </button>
          ))}
        </div>

        <div className="py-16 min-h-75">
          <AnimatePresence mode="wait">
            {activeTab === 'description' && (
              <motion.div 
                key="desc"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-4xl"
              >
                <p className="text-brand-green/70 leading-relaxed text-xl font-light">
                  {product.description} This authentic Ayurvedic preparation is meticulously crafted using traditional methods. Each ingredient is hand-picked for its purity and potency, ensuring that you receive the maximum therapeutic benefits from the lap of nature. Our process respects the biorhythms of the herbs to preserve their vital essence.
                </p>
              </motion.div>
            )}

            {activeTab === 'ingredients' && (
              <motion.div 
                key="ing"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {product.ingredients.map((ing, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -5 }}
                      className="bg-white p-8 rounded-sm shadow-sm border border-brand-gold/10 text-center group"
                    >
                      <span className="text-brand-green font-bold tracking-[0.2em] uppercase text-[10px] group-hover:text-brand-gold transition-colors">{ing}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'benefits' && (
              <motion.div 
                key="ben"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {product.benefits.map((benefit, i) => (
                    <motion.li 
                      key={i}
                      whileHover={{ x: 10 }}
                      className="flex items-center space-x-6 bg-white p-6 rounded-sm border-l-4 border-brand-gold shadow-sm"
                    >
                      <div className="w-3 h-3 rounded-full bg-brand-gold shrink-0 shadow-lg"></div>
                      <span className="text-brand-green/80 font-medium text-lg italic leading-relaxed">"{benefit}"</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-32 pt-20 border-t border-brand-gold/10">
          <ProductGrid 
            products={relatedProducts} 
            title="Harmonious Pairings" 
            subtitle="Complete Your Ritual" 
          />
        </section>
      )}
    </motion.div>
  );
};

export default ProductDetail;
