import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, FileText, UploadCloud, AlertTriangle, CheckCircle, Activity, Loader2 } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/predict";

export default function DetectionInterface() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  const handleAnalyze = async () => {
    if (!text) return;
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      setResult({ error: "Could not connect to analysis server." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full glass-panel p-2 rounded-3xl"
      >
        <div className="bg-slate-900/50 rounded-2xl p-6 md:p-8">
          {/* Tabs */}
          <div className="flex gap-6 mb-6 border-b border-cardBorder pb-4">
            <button className="flex items-center gap-2 text-primary border-b-2 border-primary pb-4 -mb-[18px] font-semibold text-lg">
              <FileText size={20} /> Paste Text
            </button>
            <button className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition pb-4 -mb-[18px] font-semibold text-lg">
              <UploadCloud size={20} /> Upload Document
            </button>
          </div>

          <div className="relative">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste the article, news snippet, or claim here for AI verification..."
              className="w-full h-56 bg-transparent border border-cardBorder hover:border-slate-600 focus:border-primary text-xl text-slate-100 placeholder:text-slate-500 focus:outline-none resize-none p-4 rounded-xl transition-colors"
            />
            <div className="absolute bottom-4 right-4 text-sm font-medium text-slate-400 bg-black/40 px-4 py-1.5 rounded-full border border-cardBorder backdrop-blur-md">
              {wordCount} words
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center border-t border-cardBorder pt-6">
            <div className="text-sm font-medium text-slate-400 flex items-center gap-2">
              <Sparkles size={18} className="text-accent animate-pulse" />
              Advanced NLP & Deep Learning Ready
            </div>
            <button 
              onClick={handleAnalyze}
              disabled={loading || wordCount === 0}
              className="bg-gradient-to-r from-primary to-accent hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed px-10 py-4 rounded-xl font-bold text-lg text-white shadow-lg shadow-primary/20 flex items-center gap-3 transition-all active:scale-95 hover:-translate-y-1"
            >
              {loading ? (
                <><Loader2 size={24} className="animate-spin" /> Processing...</>
              ) : (
                <>Analyze Article <Activity size={24} /></>
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Results Section */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: 20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full mt-8 overflow-hidden"
          >
            {result.error ? (
              <div className="glass-panel border-danger/50 p-6 rounded-2xl flex items-center gap-4 text-danger bg-danger/10">
                <AlertTriangle size={32} />
                <p className="text-lg font-semibold">{result.error}</p>
              </div>
            ) : (
              <div className={`glass-panel p-8 rounded-3xl border shadow-[0_0_50px_-12px] ${result.prediction === 'Real News' ? 'border-success/30 bg-success/5 shadow-success/20' : 'border-danger/30 bg-danger/5 shadow-danger/20'}`}>
                
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between border-b border-cardBorder pb-8 mb-8">
                  <div className="flex items-center gap-5">
                    <div className={`p-5 rounded-2xl shadow-inner ${result.prediction === 'Real News' ? 'bg-success/20 text-success' : 'bg-danger/20 text-danger'}`}>
                      {result.prediction === 'Real News' ? <CheckCircle size={48} /> : <AlertTriangle size={48} />}
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-slate-400 mb-1 font-bold">AI Verification Status</p>
                      <h2 className={`text-5xl font-extrabold tracking-tight ${result.prediction === 'Real News' ? 'text-success' : 'text-danger'}`}>
                        {result.prediction}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 bg-black/30 p-5 rounded-2xl border border-cardBorder">
                     <div className="text-center">
                        <p className="text-xs text-slate-400 uppercase tracking-widest mb-2 font-semibold">Confidence Score</p>
                        <p className="text-3xl font-black">{result.confidence_score}%</p>
                     </div>
                     <div className="w-px h-16 bg-cardBorder"></div>
                     <div className="text-center">
                        <p className="text-xs text-slate-400 uppercase tracking-widest mb-2 font-semibold">Risk Level</p>
                        <p className={`text-3xl font-black ${result.risk_level === 'Low' ? 'text-success' : 'text-danger'}`}>{result.risk_level}</p>
                     </div>
                  </div>
                </div>

                {/* Advanced Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="bg-black/30 p-6 rounded-2xl border border-cardBorder transition-colors hover:bg-black/40">
                      <h4 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-3">Sentiment Overview</h4>
                      <p className="text-xl font-semibold">{result.sentiment}</p>
                   </div>
                   <div className="bg-black/30 p-6 rounded-2xl border border-cardBorder transition-colors hover:bg-black/40">
                      <h4 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-3">Suspicious Triggers</h4>
                      {result.suspicious_words && result.suspicious_words.length > 0 ? (
                         <div className="flex flex-wrap gap-2">
                           {result.suspicious_words.map((w, i) => (
                             <span key={i} className="px-4 py-1.5 rounded-full bg-danger/20 text-danger text-sm font-bold border border-danger/30 shadow-sm shadow-danger/10">
                               {w}
                             </span>
                           ))}
                         </div>
                      ) : (
                         <p className="text-xl font-semibold text-success flex items-center gap-2">
                           <CheckCircle size={20}/> No triggers detected
                         </p>
                      )}
                   </div>
                </div>

              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
