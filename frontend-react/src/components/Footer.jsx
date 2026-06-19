import React from 'react';
import { ShieldAlert, Globe, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full mt-32 pt-16 pb-8 border-t border-cardBorder bg-background/80 backdrop-blur-lg">
       <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 max-w-7xl mx-auto px-6">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <ShieldAlert className="text-cyan w-6 h-6" />
                <span className="font-display font-bold text-xl text-white">TruthGuard<span className="text-cyan">.AI</span></span>
             </div>
             <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Securing the digital frontier through advanced neural linguistic processing and cognitive analysis.
             </p>
             <div className="flex gap-4 text-slate-400">
                <a href="#" className="hover:text-cyan transition-colors"><MessageCircle size={20}/></a>
                <a href="#" className="hover:text-cyan transition-colors"><Globe size={20}/></a>
             </div>
          </div>

          <div>
             <h4 className="font-bold text-white mb-6">Product</h4>
             <ul className="flex flex-col gap-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan transition-colors">Neural Engine</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Enterprise API</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Browser Extension</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Pricing</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold text-white mb-6">Resources</h4>
             <ul className="flex flex-col gap-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Research Papers</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Transparency Report</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold text-white mb-6">Company</h4>
             <ul className="flex flex-col gap-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Contact</a></li>
             </ul>
          </div>
       </div>

       <div className="pt-8 border-t border-cardBorder text-center text-sm text-slate-500 max-w-7xl mx-auto px-6">
          <p>© 2026 TruthGuard AI Intelligence Systems. All rights reserved.</p>
       </div>
    </footer>
  );
}
