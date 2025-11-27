import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  { q: "Is this actually 1-on-1, or will I be grouped with other students?", a: "It is strictly 1-on-1 mentorship. You get dedicated time with your mentor." },
  { q: "What if I'm not improving?", a: "We track weekly progress. If there's no improvement, we adjust the strategy immediately." },
  { q: "How much time does mentorship take?", a: "It's designed to save you time, not consume it. Expect brief, high-impact weekly calls." },
  { q: "Can I message my mentor anytime?", a: "Yes, you have unlimited chat access for doubt solving and guidance." },
  { q: "Do I need to be a Soching Education student already?", a: "No, this program is open to all students from any school or coaching." },
  { q: "What if I don't like my mentor?", a: "You can request a mentor change within the first two weeks if the fit isn't right." },
  { q: "How is this different from tuition?", a: "Tuition teaches subjects. We teach you HOW to study, strategize, and perform at your peak." },
  { q: "Is there a money-back guarantee?", a: "We offer a satisfaction guarantee. Terms and conditions apply." },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3 my-8">
      {faqData.map((item, idx) => (
        <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <button 
            onClick={() => toggle(idx)}
            className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-slate-50 transition-colors"
          >
            <span className="font-bold text-blue-700 pr-4">{item.q}</span>
            {openIndex === idx ? (
              <Minus className="text-blue-500 w-5 h-5 flex-shrink-0" />
            ) : (
              <Plus className="text-blue-500 w-5 h-5 flex-shrink-0" />
            )}
          </button>
          
          {openIndex === idx && (
            <div className="p-4 pt-0 text-slate-600 text-sm leading-relaxed animate-in slide-in-from-top-2 duration-200">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};