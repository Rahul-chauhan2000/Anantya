import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, Minus, Plus, ChevronLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-brand-cream px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-8"
        >
          <div className="w-32 h-32 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto text-brand-gold">
            <ShoppingBag size={48} />
          </div>
          <h2 className="text-4xl font-playfair text-brand-green">Your Cart is Empty</h2>
          <p className="text-brand-green/60 max-w-sm mx-auto font-light leading-relaxed">
            Looks like you haven't added anything to your cart yet. Discover our pure Ayurvedic treasures.
          </p>
          <Link to="/shop" className="btn-primary inline-flex items-center space-x-2">
            <span>Explore Products</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-brand-cream min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Cart Items */}
          <div className="flex-1 space-y-8">
            <div className="flex justify-between items-end border-b border-brand-gold/10 pb-6">
              <h1 className="text-4xl font-playfair text-brand-green">Shopping Cart</h1>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green/40">({cart.length} Items)</span>
            </div>

            <div className="space-y-6">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white rounded-sm shadow-sm border border-brand-gold/5"
                  >
                    {/* Image */}
                    <Link to={`/product/${item.id}`} className="w-32 h-32 flex-shrink-0 rounded-sm overflow-hidden bg-brand-beige/20">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </Link>

                    {/* Details */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg font-playfair text-brand-green mb-1">{item.name}</h3>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">{item.category}</p>
                      <p className="text-brand-green font-bold">₹{item.price}</p>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center border border-brand-gold/20 rounded-sm">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 text-brand-green hover:text-brand-gold transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm font-bold text-brand-green">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-brand-green hover:text-brand-gold transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="text-right sm:min-w-[100px]">
                      <p className="text-brand-green font-bold text-lg">₹{item.price * item.quantity}</p>
                    </div>

                    {/* Remove Button */}
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <Link to="/shop" className="inline-flex items-center space-x-2 text-brand-green/60 hover:text-brand-gold transition-colors font-medium text-sm">
              <ChevronLeft size={16} />
              <span>Explore Products</span>
            </Link>
          </div>

          {/* Order Summary */}
          <aside className="lg:w-96">
            <div className="bg-brand-green p-8 rounded-sm text-brand-beige sticky top-32">
              <h2 className="text-2xl font-playfair text-brand-gold mb-8">Order Summary</h2>
              
              <div className="space-y-6 pb-8 border-b border-brand-beige/10">
                <div className="flex justify-between text-sm">
                  <span className="text-brand-beige/60">Subtotal</span>
                  <span className="font-bold">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-beige/60">Shipping</span>
                  <span className="font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-beige/60">Estimated Taxes</span>
                  <span className="font-bold">Included</span>
                </div>
              </div>

              <div className="pt-8 mb-10 flex justify-between items-end">
                <span className="text-lg font-playfair">Total Amount</span>
                <span className="text-3xl font-bold text-brand-gold">₹{cartTotal}</span>
              </div>

              <div className="space-y-4">
                <Link to="/checkout" className="block w-full btn-gold py-4 text-center text-lg shadow-xl shadow-black/20">
                  Proceed to Checkout
                </Link>
                <p className="text-[10px] text-center text-brand-beige/40 uppercase tracking-widest font-bold">
                  Secure Checkout Guaranteed
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Cart;
