import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { BarChart2, Activity } from 'lucide-react';

const data = [
  { name: 'Mon', fake: 4000, real: 2400 },
  { name: 'Tue', fake: 3000, real: 1398 },
  { name: 'Wed', fake: 2000, real: 9800 },
  { name: 'Thu', fake: 2780, real: 3908 },
  { name: 'Fri', fake: 1890, real: 4800 },
  { name: 'Sat', fake: 2390, real: 3800 },
  { name: 'Sun', fake: 3490, real: 4300 },
];

export default function AIAnalytics() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-8">
         <div className="p-3 bg-purple/20 text-purple rounded-xl border border-purple/30">
            <BarChart2 size={24} />
         </div>
         <div>
            <h2 className="text-3xl font-bold">Global Threat Intelligence</h2>
            <p className="text-slate-400">Real-time macro analytics from the neural network.</p>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         
         {/* Main Chart */}
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="lg:col-span-2 glass-panel p-6 rounded-[2rem]"
         >
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Activity size={18} className="text-cyan"/> Weekly Detection Volume</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorFake" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorReal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="name" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px' }}
                    itemStyle={{ color: '#f8fafc' }}
                  />
                  <Area type="monotone" dataKey="fake" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorFake)" />
                  <Area type="monotone" dataKey="real" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorReal)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
         </motion.div>

         {/* Side Stats */}
         <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-[2rem] flex-1 flex flex-col justify-center"
            >
               <h4 className="text-slate-400 font-bold uppercase tracking-wider text-xs mb-2">Network Health</h4>
               <p className="text-4xl font-black text-cyan mb-2">99.98%</p>
               <p className="text-sm text-slate-500">API Uptime past 30 days</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-8 rounded-[2rem] flex-1 flex flex-col justify-center bg-gradient-to-br from-navy to-purple/10"
            >
               <h4 className="text-slate-400 font-bold uppercase tracking-wider text-xs mb-2">Threats Blocked</h4>
               <p className="text-4xl font-black text-white mb-2">12.4M</p>
               <p className="text-sm text-slate-500">Total automated interceptions</p>
            </motion.div>
         </div>

      </div>
    </div>
  );
}
