import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlignLeft, Link as LinkIcon, Mic, Upload, Activity, AlertCircle, ScanText } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/predict";

export default function DetectionEngine({ setResultData, isLoading, setIsLoading }) {
  const [text, setText] = useState('');
  const [activeTab, setActiveTab] = useState('text');

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  const handleAnalyze = async () => {
    if (!text) return;
    setIsLoading(true);
    setResultData(null);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });
      const data = await res.json();
      
      // Add a slight artificial delay to show off the loading animation for premium feel
      setTimeout(() => {
         setResultData(data);
         setIsLoading(false);
      }, 800);
      
    } catch (error) {
      console.error(error);
      setResultData({ error: "Connection to Intelligence Server lost." });
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full glass-panel rounded-[2rem] p-2 relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 to-purple/10 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="bg-background/80 backdrop-blur-3xl rounded-[1.8rem] p-6 md:p-10 border border-cardBorder/50">
        
        {/* Input Tools Navbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
           <div className="flex items-center gap-1 bg-navy/50 p-1 rounded-xl border border-cardBorder w-max">
             <button onClick={() => setActiveTab('text')} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'text' ? 'bg-card text-white shadow-md border border-cardBorder' : 'text-slate-400 hover:text-white'}`}>
                <AlignLeft size={16}/> Text
             </button>
             <button onClick={() => setActiveTab('upload')} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'upload' ? 'bg-card text-white shadow-md border border-cardBorder' : 'text-slate-400 hover:text-white'}`}>
                <Upload size={16}/> Document
             </button>
             <button onClick={() => setActiveTab('url')} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'url' ? 'bg-card text-white shadow-md border border-cardBorder' : 'text-slate-400 hover:text-white'}`}>
                <LinkIcon size={16}/> URL
             </button>
           </div>
           
           <div className="hidden md:flex items-center gap-4 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1 bg-navy px-3 py-1.5 rounded-md border border-cardBorder"><ScanText size={14} className="text-cyan"/> EN-US</span>
              <span>{wordCount} Words</span>
              <span>{charCount} Chars</span>
           </div>
        </div>

        {/* Input Area */}
        <div className="relative">
          {activeTab === 'text' ? (
             <textarea
               value={text}
               onChange={(e) => setText(e.target.value)}
               placeholder="Enter the news article, social media post, or claim here to initiate deep neural analysis..."
               className="w-full h-64 bg-navy/30 border border-cardBorder rounded-2xl p-6 text-xl text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan/50 focus:bg-navy/50 focus:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all resize-none"
             />
          ) : (
             <div className="w-full h-64 bg-navy/30 border border-dashed border-cardBorder hover:border-cyan/50 rounded-2xl flex flex-col items-center justify-center text-slate-500 transition-colors cursor-pointer">
                <Upload size={48} className="mb-4 opacity-50"/>
                <p className="text-lg font-medium text-slate-300">Drag & Drop file to analyze</p>
                <p className="text-sm mt-2">Supports .TXT, .PDF, .DOCX</p>
             </div>
          )}
          
          {/* Action Footer */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
             <button className="text-slate-500 hover:text-white bg-navy/50 p-3 rounded-full border border-cardBorder transition-colors">
                <Mic size={20} />
             </button>

             <button 
               onClick={handleAnalyze}
               disabled={isLoading || wordCount === 0}
               className={`relative overflow-hidden flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all ${wordCount > 0 ? 'bg-blue hover:bg-blue/90 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:-translate-y-1' : 'bg-navy border border-cardBorder text-slate-500 cursor-not-allowed'}`}
             >
               {isLoading ? (
                 <>
                   <div className="absolute inset-0 bg-gradient-to-r from-cyan to-blue animate-shimmer opacity-50"></div>
                   <Activity size={22} className="animate-pulse relative z-10" /> 
                   <span className="relative z-10">Running Deep Scan...</span>
                 </>
               ) : (
                 <>Run Analysis</>
               )}
             </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
