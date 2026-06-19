import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ShieldCheck, AlertTriangle, TrendingUp, BrainCircuit, Activity, BarChart3 } from 'lucide-react';

export default function PredictionResult({ result }) {
  if (result.error) {
    return (
      <div className="w-full glass-panel border-danger/50 p-8 rounded-[2rem] flex items-center gap-4 text-danger bg-danger/5">
        <AlertTriangle size={40} />
        <div>
           <h3 className="text-xl font-bold">Analysis Failed</h3>
           <p className="text-slate-400">{result.error}</p>
        </div>
      </div>
    );
  }

  const isReal = result.prediction === 'Real News';
  const themeColor = isReal ? 'text-real' : 'text-fake';
  const themeBg = isReal ? 'bg-real/10' : 'bg-fake/10';
  const themeBorder = isReal ? 'border-real/30' : 'border-fake/30';
  const shadowGlow = isReal ? 'shadow-[0_0_50px_rgba(16,185,129,0.15)]' : 'shadow-[0_0_50px_rgba(239,68,68,0.15)]';

  // Circular Progress SVG
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (result.confidence_score / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full glass-panel rounded-[2rem] p-8 md:p-12 border ${themeBorder} ${shadowGlow}`}
    >
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Column: Primary Verdict */}
        <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-navy/40 rounded-3xl border border-cardBorder">
           <motion.div 
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{ type: "spring", bounce: 0.5 }}
             className={`w-32 h-32 rounded-full flex items-center justify-center mb-6 relative ${themeBg} border ${themeBorder}`}
           >
              {/* Animated rings */}
              <div className={`absolute inset-0 rounded-full border border-dashed ${isReal ? 'border-real' : 'border-fake'} animate-[spin_10s_linear_infinite]`}></div>
              {isReal ? <ShieldCheck size={64} className={themeColor} /> : <ShieldAlert size={64} className={themeColor} />}
           </motion.div>
           
           <h4 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-2">Neural Verdict</h4>
           <h2 className={`text-5xl md:text-6xl font-black mb-4 ${themeColor}`}>{result.prediction}</h2>
           
           <p className="text-slate-300 text-lg max-w-sm">
             {result.content_risk_analysis}
           </p>
        </div>

        {/* Right Column: Detailed Metrics */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
           
           {/* Confidence Score Dial */}
           <div className="col-span-1 md:col-span-2 bg-navy/40 p-6 rounded-3xl border border-cardBorder flex items-center justify-between">
              <div>
                 <h4 className="text-slate-400 font-bold uppercase tracking-wider text-sm mb-1 flex items-center gap-2"><BrainCircuit size={16}/> AI Confidence Score</h4>
                 <p className="text-sm text-slate-500">Certainty level of the neural network</p>
              </div>
              <div className="relative flex items-center justify-center w-24 h-24">
                 <svg className="transform -rotate-90 w-24 h-24">
                   <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-800" />
                   <motion.circle 
                     initial={{ strokeDashoffset: circumference }}
                     animate={{ strokeDashoffset: offset }}
                     transition={{ duration: 1.5, ease: "easeOut" }}
                     cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" 
                     strokeDasharray={circumference} 
                     className={themeColor}
                   />
                 </svg>
                 <span className="absolute text-xl font-bold">{result.confidence_score}%</span>
              </div>
           </div>

           {/* Small Metric Cards */}
           <div className="bg-navy/40 p-6 rounded-3xl border border-cardBorder">
              <h4 className="text-slate-400 font-bold uppercase tracking-wider text-xs mb-4 flex items-center gap-2"><Activity size={14}/> Bias Score</h4>
              <div className="flex items-end justify-between">
                 <span className="text-3xl font-black">{result.bias_score}<span className="text-sm text-slate-500 font-normal">/100</span></span>
                 <span className="text-xs px-2 py-1 bg-card border border-cardBorder rounded text-slate-300">Moderate</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full mt-4 overflow-hidden">
                 <motion.div initial={{ width: 0 }} animate={{ width: `${result.bias_score}%` }} className="h-full bg-blue"></motion.div>
              </div>
           </div>

           <div className="bg-navy/40 p-6 rounded-3xl border border-cardBorder">
              <h4 className="text-slate-400 font-bold uppercase tracking-wider text-xs mb-4 flex items-center gap-2"><TrendingUp size={14}/> Emotional Manipulation</h4>
              <div className="flex items-end justify-between">
                 <span className="text-3xl font-black">{result.emotional_manipulation_score}<span className="text-sm text-slate-500 font-normal">/100</span></span>
                 <span className={`text-xs px-2 py-1 rounded border font-bold ${result.emotional_manipulation_score > 50 ? 'bg-fake/10 border-fake/30 text-fake' : 'bg-real/10 border-real/30 text-real'}`}>
                   {result.emotional_manipulation_score > 50 ? 'High' : 'Low'}
                 </span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full mt-4 overflow-hidden">
                 <motion.div initial={{ width: 0 }} animate={{ width: `${result.emotional_manipulation_score}%` }} className={`h-full ${result.emotional_manipulation_score > 50 ? 'bg-fake' : 'bg-real'}`}></motion.div>
              </div>
           </div>

           {/* Suspicious Words */}
           <div className="col-span-1 md:col-span-2 bg-navy/40 p-6 rounded-3xl border border-cardBorder">
              <h4 className="text-slate-400 font-bold uppercase tracking-wider text-xs mb-4 flex items-center gap-2"><BarChart3 size={14}/> Flagged Linguistic Triggers</h4>
              {result.suspicious_words && result.suspicious_words.length > 0 ? (
                 <div className="flex flex-wrap gap-3">
                   {result.suspicious_words.map((w, i) => (
                     <span key={i} className="px-4 py-2 rounded-xl bg-fake/10 text-fake border border-fake/20 text-sm font-bold shadow-sm shadow-fake/5">
                       "{w}"
                     </span>
                   ))}
                 </div>
              ) : (
                 <div className="flex items-center gap-2 text-real font-medium bg-real/5 border border-real/10 p-3 rounded-xl w-max">
                   <ShieldCheck size={18}/> No manipulative triggers detected in text
                 </div>
              )}
           </div>

        </div>
      </div>
    </motion.div>
  );
}
