import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "TruthGuard AI has completely revolutionized our editorial process. We now verify incoming tips with 99% accuracy before publishing.",
    author: "Sarah Jenkins",
    role: "Senior Editor, Global News",
    img: "https://i.pravatar.cc/150?img=47"
  },
  {
    quote: "As a cybersecurity analyst, I've tested dozens of tools. The linguistic pattern recognition in this platform is unmatched in the industry.",
    author: "David Chen",
    role: "Lead Threat Analyst",
    img: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "We integrated their API into our social platform. It reduced fake news sharing by 84% within the first month of deployment.",
    author: "Elena Rodriguez",
    role: "Product Manager, TechCorp",
    img: "https://i.pravatar.cc/150?img=5"
  }
];

export default function Testimonials() {
  return (
    <div className="w-full mt-32">
      <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="glass-panel p-8 rounded-3xl relative"
             >
                <Quote size={40} className="text-cyan/20 absolute top-6 left-6" />
                <p className="text-slate-300 mb-8 relative z-10 pt-4 font-light text-lg">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                   <img src={t.img} alt={t.author} className="w-12 h-12 rounded-full border border-cardBorder" />
                   <div>
                      <h4 className="font-bold text-white">{t.author}</h4>
                      <p className="text-xs text-slate-400">{t.role}</p>
                   </div>
                </div>
             </motion.div>
          ))}
       </div>
    </div>
  );
}
