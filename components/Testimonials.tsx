
import React, { useState, useEffect } from 'react';
import { Testimonial } from '../types';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonialData: Testimonial[] = [
  {
    name: "Aisha",
    location: "Delhi | Class 10 Topper",
    quote: "I was scoring 65% in Class 9. I felt lost. My mentor understood my pace and created a plan just for me. The 1-on-1 attention changed everything.",
    beforeScore: "65%",
    afterScore: "94%",
    improvement: "+29%",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Rohit",
    location: "Mumbai | Class 9",
    quote: "I studied 6 hours but averaged 65%. My mentor showed me the problem wasn't intelligence, it was strategy. Now I study 4 hours with better results.",
    beforeScore: "65%",
    afterScore: "Wait & Watch",
    improvement: "Pending",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Priya",
    location: "Bangalore | Class 12",
    quote: "Physics was a nightmare until my mentor broke it down into manageable chunks. The weekly tracking kept me honest and focused.",
    beforeScore: "55%",
    afterScore: "88%",
    improvement: "+33%",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Arjun",
    location: "Pune | JEE Aspirant",
    quote: "The personalized strategy for JEE preparation helped me balance my board exams and competitive prep perfectly.",
    beforeScore: "Mock 120",
    afterScore: "Mock 210",
    improvement: "+90 Marks",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Sneha",
    location: "Chennai | Class 11",
    quote: "Transitioning to Class 11 was tough. My mentor acted like a lighthouse, guiding me through the syllabus shock.",
    beforeScore: "70%",
    afterScore: "85%",
    improvement: "+15%",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Vikram",
    location: "Jaipur | Class 10",
    quote: "I never thought I could complete the syllabus on time. The smart timetable generator is a game changer.",
    beforeScore: "60%",
    afterScore: "91%",
    improvement: "+31%",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Ananya",
    location: "Hyderabad | Class 12",
    quote: "The doubt solving is actually unlimited. No question is too small, and my mentor never gets annoyed.",
    beforeScore: "72%",
    afterScore: "95%",
    improvement: "+23%",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Dev",
    location: "Lucknow | Class 9",
    quote: "My confidence has skyrocketed. I used to be scared of exams, now I look forward to testing my knowledge.",
    beforeScore: "58%",
    afterScore: "82%",
    improvement: "+24%",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  // Responsive items per page
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) setCardsToShow(3);
      else if (window.innerWidth >= 768) setCardsToShow(2);
      else setCardsToShow(1);
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const maxIndex = Math.max(0, testimonialData.length - cardsToShow);

  // Ensure index stays in bounds on resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsToShow, maxIndex, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="py-8 relative group">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-10 leading-tight">
        Real Students. Real Results. <br/><span className="text-blue-600">Real Transformations.</span>
      </h2>
      
      <div className="relative px-4 md:px-12">
        {/* Slider Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
          >
            {testimonialData.map((t, idx) => (
              <div 
                key={idx} 
                className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] px-3"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 h-full flex flex-col relative hover:-translate-y-1 transition-transform duration-300">
                  
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-6 text-purple-100">
                    <Quote size={40} fill="currentColor" />
                  </div>

                  {/* Header with Image */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-r from-blue-400 to-purple-400">
                      <img 
                        src={t.image} 
                        alt={t.name} 
                        className="w-full h-full rounded-full object-cover border-2 border-white"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">{t.name}</div>
                      <div className="text-xs text-blue-600 font-medium uppercase tracking-wide">{t.location}</div>
                    </div>
                  </div>

                  <p className="text-slate-600 italic mb-6 text-base leading-relaxed flex-grow relative z-10">
                    "{t.quote}"
                  </p>
                  
                  <div className="bg-purple-50 rounded-xl p-3 flex flex-wrap items-center justify-between text-sm font-bold text-slate-800 mt-auto">
                     <div className="flex flex-col">
                       <span className="text-xs text-purple-400 font-medium uppercase">Score</span>
                       <span>{t.beforeScore} → {t.afterScore}</span>
                     </div>
                     <div className="h-8 w-[1px] bg-purple-200 mx-2 hidden sm:block"></div>
                     <div className="flex flex-col items-end">
                       <span className="text-xs text-green-600 font-medium uppercase">Improvement</span>
                       <span className="text-green-700">{t.improvement}</span>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg text-slate-600 hover:text-blue-600 hover:scale-110 transition-all z-20 md:left-2 border border-gray-100"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg text-slate-600 hover:text-blue-600 hover:scale-110 transition-all z-20 md:right-2 border border-gray-100"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx ? 'w-8 bg-blue-600' : 'w-2 bg-blue-200 hover:bg-blue-300'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
