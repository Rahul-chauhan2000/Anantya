import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { CreditCard, Truck, ShieldCheck, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(prev => prev + 1);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setStep(3); // Success step
    clearCart();
  };

  if (step === 3) {
    return (
      <div className="min-h-screen bg-brand-cream py-24 px-4 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center space-y-8 bg-white p-12 rounded-sm shadow-2xl border border-brand-gold/10"
        >
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="text-4xl font-playfair text-brand-green">Order Placed!</h1>
          <p className="text-brand-green/60 font-light leading-relaxed">
            Thank you for your purchase. Your Ayurvedic treasures will reach you soon. Order ID: #AN-{Math.floor(Math.random() * 100000)}
          </p>
          <div className="pt-8 space-y-4">
            <Link to="/shop" className="block w-full btn-primary py-4 text-center">Explore Products</Link>
            <Link to="/" className="block w-full text-brand-green/60 hover:text-brand-gold transition-colors font-medium text-sm">Return Home</Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-brand-cream min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Header */}
        <div className="flex items-center justify-center space-x-8 mb-16">
          <div className={`flex items-center space-x-2 ${step >= 1 ? 'text-brand-green' : 'text-brand-green/20'}`}>
            <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm ${step >= 1 ? 'border-brand-gold bg-brand-gold/10' : 'border-brand-green/10'}`}>1</span>
            <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">Shipping</span>
          </div>
          <div className="w-12 h-px bg-brand-gold/20"></div>
          <div className={`flex items-center space-x-2 ${step >= 2 ? 'text-brand-green' : 'text-brand-green/20'}`}>
            <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm ${step >= 2 ? 'border-brand-gold bg-brand-gold/10' : 'border-brand-green/10'}`}>2</span>
            <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">Payment</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Checkout Forms */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div 
                  key="shipping"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-10"
                >
                  <h2 className="text-3xl font-playfair text-brand-green border-b border-brand-gold/10 pb-6">Shipping Information</h2>
                  <form onSubmit={handleNextStep} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-green/60">First Name</label>
                        <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full bg-white border border-brand-gold/20 rounded-sm py-3 px-4 focus:outline-none focus:border-brand-gold" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-green/60">Last Name</label>
                        <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full bg-white border border-brand-gold/20 rounded-sm py-3 px-4 focus:outline-none focus:border-brand-gold" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-green/60">Email Address</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-white border border-brand-gold/20 rounded-sm py-3 px-4 focus:outline-none focus:border-brand-gold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-green/60">Street Address</label>
                      <input required type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full bg-white border border-brand-gold/20 rounded-sm py-3 px-4 focus:outline-none focus:border-brand-gold" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-green/60">City</label>
                        <input required type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full bg-white border border-brand-gold/20 rounded-sm py-3 px-4 focus:outline-none focus:border-brand-gold" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-green/60">ZIP / Postal Code</label>
                        <input required type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} className="w-full bg-white border border-brand-gold/20 rounded-sm py-3 px-4 focus:outline-none focus:border-brand-gold" />
                      </div>
                    </div>
                    <button type="submit" className="w-full btn-primary py-4 text-lg mt-8 flex items-center justify-center space-x-2">
                      <span>Continue to Payment</span>
                      <ChevronRight size={18} />
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="payment"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-10"
                >
                  <h2 className="text-3xl font-playfair text-brand-green border-b border-brand-gold/10 pb-6">Payment Method</h2>
                  <form onSubmit={handlePlaceOrder} className="space-y-6">
                    <div className="bg-brand-green p-6 rounded-sm text-brand-beige mb-8">
                      <div className="flex justify-between items-start mb-12">
                        <div className="w-12 h-8 bg-brand-gold/20 rounded-sm"></div>
                        <CreditCard size={24} className="text-brand-gold" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold/60">Card Number</p>
                        <p className="text-xl tracking-[0.2em] font-mono">
                          {formData.cardNumber ? formData.cardNumber.replace(/(\d{4})/g, '$1 ').trim() : '•••• •••• •••• ••••'}
                        </p>
                      </div>
                      <div className="flex justify-between mt-8">
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/60">Card Holder</p>
                          <p className="text-sm font-medium">{formData.firstName} {formData.lastName}</p>
                        </div>
                        <div className="space-y-1 text-right">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/60">Expires</p>
                          <p className="text-sm font-medium">{formData.expiryDate || 'MM/YY'}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-green/60">Card Number</label>
                      <input required type="text" maxLength="16" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} className="w-full bg-white border border-brand-gold/20 rounded-sm py-3 px-4 focus:outline-none focus:border-brand-gold" placeholder="0000 0000 0000 0000" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-green/60">Expiry Date</label>
                        <input required type="text" placeholder="MM/YY" name="expiryDate" value={formData.expiryDate} onChange={handleInputChange} className="w-full bg-white border border-brand-gold/20 rounded-sm py-3 px-4 focus:outline-none focus:border-brand-gold" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-green/60">CVV</label>
                        <input required type="password" maxLength="3" name="cvv" value={formData.cvv} onChange={handleInputChange} className="w-full bg-white border border-brand-gold/20 rounded-sm py-3 px-4 focus:outline-none focus:border-brand-gold" placeholder="***" />
                      </div>
                    </div>
                    <div className="flex gap-4 pt-8">
                      <button type="button" onClick={() => setStep(1)} className="flex-1 btn-secondary py-4">Back</button>
                      <button type="submit" className="flex-2 btn-primary py-4 text-lg shadow-xl shadow-brand-green/10">Place Order ₹{cartTotal}</button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <aside className="lg:w-96">
            <div className="bg-white p-8 rounded-sm shadow-sm border border-brand-gold/5 sticky top-32">
              <h3 className="text-xl font-playfair text-brand-green mb-8">Order Summary</h3>
              
              <div className="max-h-60 overflow-y-auto mb-8 pr-4 space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 rounded-sm overflow-hidden bg-brand-beige/20 shrink-0 flex items-center justify-center p-2">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-brand-green truncate">{item.name}</h4>
                      <p className="text-[10px] font-bold text-brand-green/40">QTY: {item.quantity}</p>
                      <p className="text-sm font-bold text-brand-green">₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-8 border-t border-brand-gold/10">
                <div className="flex justify-between text-sm">
                  <span className="text-brand-green/60">Subtotal</span>
                  <span className="font-bold">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-green/60">Shipping</span>
                  <span className="font-bold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between items-end pt-4">
                  <span className="text-lg font-playfair">Total</span>
                  <span className="text-2xl font-bold text-brand-green">₹{cartTotal}</span>
                </div>
              </div>

              <div className="mt-8 space-y-4 pt-8 border-t border-brand-gold/10">
                <div className="flex items-center space-x-3 text-brand-green/40">
                  <ShieldCheck size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Secure 256-bit SSL encryption</span>
                </div>
                <div className="flex items-center space-x-3 text-brand-green/40">
                  <Truck size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Hand-picked & quality tested</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
