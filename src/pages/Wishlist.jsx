import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Trash2, Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-brand-cream px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-8"
        >
          <div className="w-32 h-32 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto text-brand-gold">
            <Heart size={48} />
          </div>
          <h2 className="text-4xl font-playfair text-brand-green">Your Wishlist is Empty</h2>
          <p className="text-brand-green/60 max-w-sm mx-auto font-light leading-relaxed">
            Looks like you haven't saved any of our Ayurvedic treasures yet.
          </p>
          <Link to="/shop" className="btn-primary inline-flex items-center space-x-2">
            <span>Explore Collection</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-brand-cream min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end border-b border-brand-gold/10 pb-6 mb-12">
          <h1 className="text-4xl font-playfair text-brand-green">My Wishlist</h1>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-green/40">({wishlist.length} Items)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {wishlist.map((product) => (
              <motion.div 
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-sm shadow-sm border border-brand-gold/5 group overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Link to={`/product/${product.id}`}>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </Link>
                  <button 
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-4 right-4 p-3 bg-white/90 text-red-400 hover:text-red-600 rounded-full shadow-md backdrop-blur-sm transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">{product.category}</span>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-xl font-playfair text-brand-green mt-1 group-hover:text-brand-gold transition-colors">{product.name}</h3>
                    </Link>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-brand-gold/10">
                    <span className="text-brand-green font-bold text-lg">₹{product.price}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="btn-primary py-2 px-6 flex items-center space-x-2 text-sm"
                    >
                      <ShoppingBag size={16} />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
