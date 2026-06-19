import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DetectionEngine from './components/DetectionEngine';
import PredictionResult from './components/PredictionResult';
import AIAnalytics from './components/AIAnalytics';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [resultData, setResultData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen relative w-full bg-background overflow-hidden text-slate-100 font-sans selection:bg-cyan/30">
      
      {/* Animated Mesh / Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-50"></div>
      
      <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple/20 rounded-full blur-[120px] animate-blob z-0"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue/10 rounded-full blur-[150px] animate-blob z-0" style={{ animationDelay: '2s' }}></div>
      <div className="fixed top-[40%] left-[60%] w-[400px] h-[400px] bg-cyan/10 rounded-full blur-[100px] animate-blob z-0" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow flex flex-col items-center pt-32 pb-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
          
          {/* Main Hero Section */}
          <div id="platform" className="w-full">
            <Hero />
          </div>

          {/* Engine & Results Section */}
          <div id="detection-engine" className="w-full mt-16 scroll-mt-32">
            <DetectionEngine 
              setResultData={setResultData} 
              isLoading={isLoading} 
              setIsLoading={setIsLoading} 
            />
          </div>

          <div className="w-full mt-10">
            {resultData && <PredictionResult result={resultData} />}
          </div>

          {/* Analytics Dashboard */}
          <div id="analytics" className="w-full mt-32 scroll-mt-32">
             <AIAnalytics />
          </div>

          <div id="solutions" className="w-full scroll-mt-32">
            <FeatureGrid />
            <HowItWorks />
          </div>
          
          <div id="enterprise" className="w-full scroll-mt-32">
            <Testimonials />
            <FAQ />
          </div>

        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
