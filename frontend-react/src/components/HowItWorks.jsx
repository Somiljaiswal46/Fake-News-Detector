import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Cpu, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: 'Input Data',
      desc: 'Paste text or upload documents into the secure intelligence interface.',
      color: 'text-cyan',
      bg: 'bg-cyan/10',
      border: 'border-cyan/30'
    },
    {
      icon: Cpu,
      title: 'Neural Analysis',
      desc: 'Our deep learning models analyze 1,000+ linguistic and contextual data points.',
      color: 'text-purple',
      bg: 'bg-purple/10',
      border: 'border-purple/30'
    },
    {
      icon: CheckCircle,
      title: 'Instant Verdict',
      desc: 'Receive a definitive Trust Score, Bias rating, and manipulation analysis.',
      color: 'text-blue',
      bg: 'bg-blue/10',
      border: 'border-blue/30'
    }
  ];

  return (
    <div className="w-full mt-32 relative">
       <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How The Engine Works</h2>
       </div>

       <div className="relative flex flex-col md:flex-row justify-between gap-8 md:gap-4 max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[50px] left-0 right-0 h-[2px] bg-gradient-to-r from-cyan via-purple to-blue opacity-30 z-0"></div>

          {steps.map((step, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.2 }}
               className="relative z-10 flex-1 flex flex-col items-center text-center"
             >
                <div className={`w-24 h-24 rounded-full flex items-center justify-center ${step.bg} border ${step.border} mb-6 shadow-2xl backdrop-blur-md`}>
                   <step.icon size={40} className={step.color} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm px-4 leading-relaxed">{step.desc}</p>
             </motion.div>
          ))}
       </div>
    </div>
  );
}
