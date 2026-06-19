import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, LogIn, ChevronDown, X, Mail, Lock } from 'lucide-react';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 w-full z-40 bg-background/40 backdrop-blur-md border-b border-cardBorder"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan/20 to-purple/20 border border-cardBorder group-hover:border-cyan/50 transition-colors">
              <ShieldAlert className="text-cyan w-5 h-5" />
              <div className="absolute inset-0 rounded-xl bg-cyan/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="font-display font-bold text-xl tracking-wide text-white">TruthGuard<span className="text-cyan">.AI</span></span>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-300">
            <button onClick={() => scrollTo('platform')} className="hover:text-white transition-colors">Platform</button>
            <button onClick={() => scrollTo('solutions')} className="flex items-center gap-1 hover:text-white transition-colors">Solutions</button>
            <button onClick={() => scrollTo('analytics')} className="hover:text-white transition-colors">Analytics</button>
            <button onClick={() => scrollTo('enterprise')} className="hover:text-white transition-colors">Enterprise</button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button onClick={() => setIsModalOpen(true)} className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
              <LogIn size={16} /> Sign In
            </button>
            <button onClick={() => setIsModalOpen(true)} className="relative px-5 py-2.5 rounded-lg font-semibold text-sm bg-white text-navy hover:bg-slate-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              Start Free Trial
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Auth Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            ></motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-navy border border-cardBorder rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
               {/* Modal Background Glows */}
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan via-purple to-blue"></div>
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple/20 rounded-full blur-3xl pointer-events-none"></div>

               <div className="flex justify-between items-center mb-8 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Access Terminal</h3>
                    <p className="text-slate-400 text-sm">Sign in to your enterprise account</p>
                  </div>
                  <button onClick={() => setIsModalOpen(false)} className="p-2 bg-background rounded-full hover:bg-slate-800 transition-colors border border-cardBorder">
                    <X size={20} className="text-slate-400" />
                  </button>
               </div>

               <div className="space-y-5 relative z-10">
                  <div>
                     <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Corporate Email</label>
                     <div className="relative">
                       <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                       <input type="email" placeholder="agent@company.com" className="w-full bg-background border border-cardBorder rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all" />
                     </div>
                  </div>
                  <div>
                     <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Passcode</label>
                     <div className="relative">
                       <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                       <input type="password" placeholder="••••••••" className="w-full bg-background border border-cardBorder rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-purple/50 focus:ring-1 focus:ring-purple/50 transition-all" />
                     </div>
                  </div>
                  
                  <button onClick={() => setIsModalOpen(false)} className="w-full py-3.5 bg-gradient-to-r from-cyan to-blue text-white font-bold rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all hover:-translate-y-0.5 mt-2">
                    Initialize Connection
                  </button>

                  <div className="mt-6 text-center text-sm text-slate-500">
                    <p>Don't have clearance? <a href="#" className="text-cyan hover:underline">Request access</a></p>
                  </div>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
