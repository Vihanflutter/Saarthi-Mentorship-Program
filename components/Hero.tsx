import React from 'react';
import { Star, Users, Award } from 'lucide-react';

interface HeroProps {
  onTalkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onTalkClick }) => {
  return (
    <div className="bg-[#004aad] text-white pb-8 md:pb-16 rounded-b-[2.5rem] md:rounded-b-[4rem] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-blue-300 blur-3xl -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-16 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Column: Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
            Soching Saarthi<br/>
            <span className="text-blue-200">Mentorship Program</span>
          </h1>
          
          <div className="inline-block bg-blue-800/50 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-1.5 text-blue-100 font-semibold mb-6 text-sm md:text-base">
             ✨ India's Most Personalized Mentorship
          </div>

          {/* Description */}
          <p className="text-blue-50 text-sm md:text-lg leading-relaxed mb-8 px-2 md:px-0 opacity-90 max-w-2xl mx-auto md:mx-0">
            Learn 1-on-1 with expert personal mentors, master every subject with customized strategies, and build a strong foundation for Class 10 & 12 success. Get dedicated support for ALL your doubts, weekly progress tracking, motivation from toppers' mentor Dr. Anshuman Sir.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 border-t border-white/20 pt-6 max-w-lg mx-auto md:mx-0">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-1 mb-1">
                 <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                 <span className="font-bold text-xl md:text-2xl leading-none">4.9</span>
              </div>
              <span className="text-[10px] md:text-xs text-blue-200 uppercase tracking-wide">19k+ Reviews</span>
            </div>
            <div className="flex flex-col items-center md:items-start border-l border-white/20 md:border-none pl-4 md:pl-0">
              <div className="flex items-center gap-1 mb-1">
                 <Users className="w-5 h-5 text-blue-200" />
                 <span className="font-bold text-xl md:text-2xl leading-none">20k+</span>
              </div>
              <span className="text-[10px] md:text-xs text-blue-200 uppercase tracking-wide">Aspirants</span>
            </div>
            <div className="flex flex-col items-center md:items-start border-l border-white/20 md:border-none pl-4 md:pl-0">
              <div className="flex items-center gap-1 mb-1">
                 <Award className="w-5 h-5 text-blue-200" />
                 <span className="font-bold text-xl md:text-2xl leading-none">100+</span>
              </div>
              <span className="text-[10px] md:text-xs text-blue-200 uppercase tracking-wide">Top Mentors</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visuals */}
        <div className="w-full md:w-1/2 max-w-md mx-auto md:max-w-none">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
             {/* 
                FOR DEPLOYMENT: 
                Replace the src below with the actual path to your 'Comparison Image' file.
                Example: src="/images/confused-to-topper.png"
             */}
             <img 
  src="/Saarthi-Mentorship-Program/comparison.jpeg" 
  alt="Soching Saarthi Transformation: From Confused Student to Confident Topper" 
  className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-300 border-4 border-white/20"
  width="800"
  height="800"
/>
             <p className="text-center text-blue-200/60 text-[10px] mt-2 font-medium">
               *Image illustrates student transformation journey
             </p>
          </div>
        </div>

      </div>
    </div>
  );
};