import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, AlertTriangle, ShieldAlert } from 'lucide-react';

export default function Hero() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-12 mt-10">
      {/* Left Content */}
      <div className="flex-1 flex flex-col items-start z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-semibold uppercase tracking-wider mb-8"
        >
          <Zap size={14} className="animate-pulse" />
          Neural Engine V2.4 Now Live
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6"
        >
          Detect Fake News <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-blue to-purple">
            Before It Spreads.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed font-light"
        >
          Enterprise-grade AI trust verification platform. We analyze linguistic patterns, emotional manipulation, and source reliability in milliseconds.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4 w-full"
        >
          <button 
            onClick={() => document.getElementById('detection-engine').scrollIntoView({ behavior: 'smooth' })}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue to-purple rounded-xl font-semibold text-white shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all"
          >
            Analyze Article <ArrowRight size={18} />
          </button>
          <button className="flex-1 md:flex-none px-8 py-4 bg-navy/50 border border-cardBorder rounded-xl font-semibold text-slate-200 hover:bg-navy transition-colors">
            View Demo
          </button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex items-center gap-6 text-sm text-slate-500 font-medium"
        >
          <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-real" /> 98.4% Accuracy</div>
          <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-blue" /> Reuters API Partner</div>
        </motion.div>
      </div>

      {/* Right 3D/Visual Elements */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex-1 relative w-full h-[500px] hidden md:flex items-center justify-center perspective-[1000px]"
      >
        {/* Abstract floating UI representation */}
        <div className="relative w-full max-w-md h-full flex items-center justify-center transform rotate-y-[-10deg] rotate-x-[5deg] transform-style-3d">
           <div className="absolute top-10 right-0 glass-panel p-4 rounded-xl shadow-2xl animate-bounce" style={{ animationDuration: '4s' }}>
             <div className="w-32 h-3 bg-slate-700 rounded-full mb-2"></div>
             <div className="w-24 h-3 bg-slate-800 rounded-full"></div>
             <div className="mt-4 flex items-center gap-2 text-xs font-bold text-real bg-real/10 px-2 py-1 rounded-md w-max border border-real/20">
                <ShieldCheck size={12} /> Authentic
             </div>
           </div>

           <div className="absolute bottom-20 left-0 glass-panel p-4 rounded-xl shadow-2xl animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
             <div className="w-40 h-3 bg-slate-700 rounded-full mb-2"></div>
             <div className="w-32 h-3 bg-slate-800 rounded-full mb-2"></div>
             <div className="w-20 h-3 bg-slate-800 rounded-full"></div>
             <div className="mt-4 flex items-center gap-2 text-xs font-bold text-fake bg-fake/10 px-2 py-1 rounded-md w-max border border-fake/20">
                <AlertTriangle size={12} /> High Risk
             </div>
           </div>

           {/* Central Core */}
           <div className="w-64 h-64 rounded-full border border-cardBorder bg-gradient-to-br from-navy to-background flex items-center justify-center shadow-[0_0_100px_rgba(6,182,212,0.15)] relative">
              <div className="absolute inset-0 rounded-full border border-cyan/30 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-2 rounded-full border border-purple/30 animate-[spin_15s_linear_infinite_reverse]"></div>
              <ShieldAlert className="w-20 h-20 text-cyan opacity-80" />
           </div>
        </div>
      </motion.div>
    </div>
  );
}
