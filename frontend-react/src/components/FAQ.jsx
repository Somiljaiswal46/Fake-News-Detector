import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "How does the AI determine if news is fake?",
    a: "Our neural network analyzes over 1,000 linguistic features, cross-references claims against a database of 50M+ verified sources, and evaluates the emotional manipulation score to generate a highly accurate verdict."
  },
  {
    q: "Can I use the API for my own platform?",
    a: "Yes, we offer an Enterprise API with sub-100ms response times. It integrates seamlessly via REST endpoints and webhooks for real-time moderation."
  },
  {
    q: "What file formats do you support?",
    a: "Currently, our platform supports raw text pasting, live URLs, and document uploads in .TXT, .PDF, and .DOCX formats."
  },
  {
    q: "Is my data kept secure and private?",
    a: "Absolutely. We employ bank-level AES-256 encryption. Enterprise tier customers can also opt for zero-data-retention processing, meaning your documents are immediately destroyed after analysis."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="w-full max-w-3xl mx-auto mt-32">
      <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
       </div>
       <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
             <div key={i} className="glass-panel border border-cardBorder rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                >
                   <span className="font-bold text-lg">{faq.q}</span>
                   <ChevronDown className={`transition-transform duration-300 ${openIdx === i ? 'rotate-180 text-cyan' : 'text-slate-500'}`} />
                </button>
                <AnimatePresence>
                  {openIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-cardBorder/50 pt-4">
                         {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
          ))}
       </div>
    </div>
  );
}
