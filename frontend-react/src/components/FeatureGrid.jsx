import React from 'react';
import { motion } from 'framer-motion';
import { Network, Zap, ShieldCheck, Database, Layers, Fingerprint, Eye, Lock, BrainCircuit } from 'lucide-react';

const features = [
  { icon: Network, title: 'Real-time Detection', desc: 'Scan and verify articles in milliseconds using edge computing.' },
  { icon: BrainCircuit, title: 'Deep NLP Analysis', desc: 'Identify manipulative language and hidden emotional triggers.' },
  { icon: ShieldCheck, title: 'Trust Scoring', desc: 'Enterprise-grade reliability metrics for every data source.' },
  { icon: Database, title: 'Source Verification', desc: 'Cross-reference against 50M+ verified academic and news sources.' },
  { icon: Fingerprint, title: 'Pattern Recognition', desc: 'Detect AI-generated text and deepfake linguistic patterns.' },
  { icon: Layers, title: 'Multi-format Upload', desc: 'Analyze text, PDFs, DOCX, and raw URLs seamlessly.' },
  { icon: Eye, title: 'Bias Detection', desc: 'Highlight political, social, and commercial bias automatically.' },
  { icon: Lock, title: 'Enterprise Security', desc: 'Bank-level encryption for all your confidential text scans.' },
];



export default function FeatureGrid() {
  return (
    <div className="w-full mt-32">
       <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Unmatched Intelligence <span className="text-cyan">Arsenal</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Everything you need to combat digital misinformation at scale, built into one powerful dashboard.</p>
       </div>
       
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="glass-panel p-8 rounded-3xl group hover:-translate-y-2 transition-transform duration-300 gradient-border cursor-pointer"
             >
                <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center border border-cardBorder mb-6 group-hover:bg-cyan/10 group-hover:text-cyan transition-colors shadow-lg">
                   <feat.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
             </motion.div>
          ))}
       </div>
    </div>
  );
}
