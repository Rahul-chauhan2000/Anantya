import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, Github, Chrome, ShieldCheck } from 'lucide-react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Logging in...' : 'Registering...', formData);
    // Add logic for login/register here
  };

  return (
    <div className="min-h-screen bg-brand-cream flex items-center justify-center py-24 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold rounded-full -translate-x-1/2 -translate-y-1/2 blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold rounded-full translate-x-1/2 translate-y-1/2 blur-[120px]"></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-sm shadow-2xl overflow-hidden border border-brand-gold/10 relative z-10">
        {/* Left Side: Brand Story / Info */}
        <div className="hidden lg:flex flex-col justify-between bg-brand-green p-16 text-brand-beige relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1600857062241-98e5dba7f214?q=80&w=1000&auto=format&fit=crop" 
              alt="Ayurveda Heritage"
              className="w-full h-full object-cover scale-110"
            />
          </div>
          
          <div className="relative z-10">
            <Link to="/" className="text-3xl font-playfair font-bold tracking-tighter text-brand-gold mb-16 block">
              ANANTYA<span className="text-brand-beige">.</span>
            </Link>
            
            <div className="space-y-8 max-w-sm">
              <h2 className="text-4xl font-playfair leading-tight">
                Welcome to the <span className="italic italic-gold text-brand-gold">Anantya</span> Community
              </h2>
              <p className="text-brand-beige/70 font-light leading-relaxed">
                Join our circle of nature lovers and experience the holistic benefits of authentic Ayurvedic care.
              </p>
            </div>
          </div>

          <div className="relative z-10 space-y-6 pt-12 border-t border-brand-beige/10">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold">
                <ShieldCheck size={20} />
              </div>
              <p className="text-sm font-medium">100% Secure & Private</p>
            </div>
            <p className="text-xs text-brand-beige/40 uppercase tracking-widest font-bold">
              Trusted by over 10,000+ Ayurveda enthusiasts
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-12 sm:p-20 flex flex-col justify-center">
          <div className="mb-12">
            <h1 className="text-4xl font-playfair text-brand-green mb-4">
              {isLogin ? 'Sign In' : 'Create Account'}
            </h1>
            <p className="text-brand-green/60 font-light">
              {isLogin 
                ? 'Welcome back! Please enter your details.' 
                : 'Join us and start your natural care journey today.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-green/60">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-green/40" size={18} />
                    <input 
                      required 
                      type="text" 
                      name="fullName" 
                      value={formData.fullName} 
                      onChange={handleInputChange} 
                      className="w-full bg-brand-beige/30 border border-brand-gold/10 rounded-sm py-4 pl-12 pr-4 focus:outline-none focus:border-brand-gold text-brand-green transition-all"
                      placeholder="Anantya Natural"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-brand-green/60">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-green/40" size={18} />
                <input 
                  required 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className="w-full bg-brand-beige/30 border border-brand-gold/10 rounded-sm py-4 pl-12 pr-4 focus:outline-none focus:border-brand-gold text-brand-green transition-all"
                  placeholder="care@anantya.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-green/60">Password</label>
                {isLogin && (
                  <button type="button" className="text-[10px] font-bold uppercase tracking-widest text-brand-gold hover:text-brand-green transition-colors">Forgot Password?</button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-green/40" size={18} />
                <input 
                  required 
                  type="password" 
                  name="password" 
                  value={formData.password} 
                  onChange={handleInputChange} 
                  className="w-full bg-brand-beige/30 border border-brand-gold/10 rounded-sm py-4 pl-12 pr-4 focus:outline-none focus:border-brand-gold text-brand-green transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {!isLogin && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-2"
              >
                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-green/60">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-green/40" size={18} />
                  <input 
                    required 
                    type="password" 
                    name="confirmPassword" 
                    value={formData.confirmPassword} 
                    onChange={handleInputChange} 
                    className="w-full bg-brand-beige/30 border border-brand-gold/10 rounded-sm py-4 pl-12 pr-4 focus:outline-none focus:border-brand-gold text-brand-green transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </motion.div>
            )}

            <button type="submit" className="w-full btn-primary py-4 text-lg shadow-xl shadow-brand-green/10 flex items-center justify-center space-x-2 mt-10">
              <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-12 text-center">
            <div className="absolute top-1/2 left-0 w-full h-px bg-brand-gold/10"></div>
            <span className="relative bg-white px-6 text-[10px] font-bold uppercase tracking-widest text-brand-green/40">Or continue with</span>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-3 py-4 border border-brand-gold/10 rounded-sm hover:bg-brand-beige/20 transition-all text-brand-green">
              <Chrome size={18} />
              <span className="text-sm font-medium">Google</span>
            </button>
            
          </div>

          {/* Toggle Login/Register */}
          <div className="mt-12 text-center">
            <p className="text-brand-green/60 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 font-bold text-brand-gold hover:text-brand-green transition-colors uppercase tracking-widest text-xs"
              >
                {isLogin ? 'Sign Up Free' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
