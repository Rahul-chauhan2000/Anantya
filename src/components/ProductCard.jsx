import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
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

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    const inWishlist = isInWishlist(product.id);
    toast(inWishlist ? `Removed ${product.name} from wishlist` : `Added ${product.name} to wishlist`, {
      icon: <Heart size={16} fill={!inWishlist ? '#d4af37' : 'none'} color="#d4af37" />,
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

  return (
    <motion.div 
      whileHover={{ y: -12 }}
      className="group card-premium relative flex flex-col h-full bg-white transition-shadow duration-500 hover:shadow-2xl"
    >
      {/* Product Image */}
      <div className="relative aspect-4/5 overflow-hidden bg-brand-beige/20 flex items-center justify-center p-6">
        <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
          />
        </Link>
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-4 backdrop-blur-[2px]">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleToggleWishlist}
            className={`p-3 rounded-full transition-all duration-300 transform translate-y-8 group-hover:translate-y-0 shadow-xl ${
              isInWishlist(product.id) 
                ? 'bg-brand-gold text-brand-green' 
                : 'bg-white text-brand-green hover:bg-brand-gold hover:text-brand-green'
            }`}
          >
            <Heart size={20} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
            className="p-3 bg-white text-brand-green hover:bg-brand-gold hover:text-brand-green rounded-full transition-all duration-300 transform translate-y-8 group-hover:translate-y-0 delay-100 shadow-xl"
          >
            <ShoppingBag size={20} />
          </motion.button>
        </div>
        
        {/* Badge (if any) */}
        {product.featured && (
          <div className="absolute top-4 left-4 bg-brand-gold text-brand-green text-[8px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg">
            Best Seller
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6 flex flex-col grow bg-white min-h-40">
        <div className="flex justify-between items-start mb-3">
          <p className="text-[9px] uppercase tracking-widest font-bold text-brand-gold/60">{product.category}</p>
          <div className="flex items-center text-brand-gold">
            <Star size={10} fill="currentColor" />
            <span className="text-[10px] ml-1 font-bold text-brand-green/40">{product.rating}</span>
          </div>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="text-brand-green font-playfair text-xl leading-tight group-hover:text-brand-gold transition-colors mb-4 min-h-12">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-auto flex justify-between items-center pt-5 border-t border-brand-beige/50">
          <span className="text-brand-green font-bold text-lg">₹{product.price}</span>
          <motion.button 
            whileHover={{ x: 3 }}
            onClick={handleAddToCart}
            className="text-[10px] font-bold uppercase tracking-widest text-brand-green hover:text-brand-gold transition-colors flex items-center group/btn"
          >
            Add to Cart
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold ml-2 scale-0 group-hover/btn:scale-100 transition-transform"></div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
