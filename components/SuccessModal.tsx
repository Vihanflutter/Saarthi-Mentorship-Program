import React from 'react';
import { Button } from './Button';
import { Check } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/95 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-sm flex flex-col items-center text-center animate-in zoom-in-95 duration-300">
        
        {/* Animated Checkmark Circle */}
        <div className="relative mb-8">
           {/* Confetti decorations */}
           <div className="absolute -top-4 -left-6 w-3 h-3 bg-blue-400 rounded-sm rotate-12 animate-bounce" style={{animationDelay: '0.1s'}}></div>
           <div className="absolute top-0 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
           <div className="absolute -bottom-2 -left-4 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
           <div className="absolute bottom-6 -right-8 w-3 h-3 bg-purple-400 rounded-sm rotate-45 animate-bounce" style={{animationDelay: '0.2s'}}></div>
           <div className="absolute top-10 -left-10 w-2 h-2 bg-green-400 rounded-full"></div>
           <div className="absolute -top-6 left-4 w-2 h-4 bg-orange-300 rounded-full rotate-45"></div>

           <div className="w-28 h-28 bg-[#4ade80] rounded-full flex items-center justify-center shadow-2xl shadow-green-200">
             <Check className="w-16 h-16 text-white" strokeWidth={4} />
           </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 leading-snug px-2">
          Thank you for showing your interest in Soching Saarthi Mentorship Program!
        </h3>

        <p className="text-slate-500 mb-10 text-base leading-relaxed px-4">
          We have received your request and our team will get in touch with you shortly to share further details.
        </p>

        <Button onClick={onClose} variant="primary" className="w-full max-w-[280px] py-3.5 text-base rounded-xl font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200">
          Go to Home Page
        </Button>
      </div>
    </div>
  );
};