import React from 'react';
import { Button } from './Button';
import { MessageCircle } from 'lucide-react';

interface StickyCTAProps {
  onTalkClick: () => void;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ onTalkClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200 p-4 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] safe-area-bottom">
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
        <Button onClick={onTalkClick} variant="primary" fullWidth className="text-lg">
          Talk to Program Advisor
        </Button>
        <Button 
          variant="whatsapp" 
          fullWidth 
          className="text-lg font-semibold flex items-center justify-center gap-2"
          onClick={() => window.open('https://wa.me/918949193467', '_blank', 'noopener,noreferrer')}
        >
          <MessageCircle className="w-5 h-5" />
          Chat on WhatsApp
        </Button>
      </div>
    </div>
  );
};