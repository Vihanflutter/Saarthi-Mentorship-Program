import React, { useState } from 'react';
import { X, Check, ChevronDown } from 'lucide-react';
import { Button } from './Button';

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    board: '',
    class: '',
    consent: false,
    whatsapp: true
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.consent) {
      onSubmit();
    } else {
      alert("Please agree to the Privacy Policy.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-t-3xl md:rounded-3xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh] animate-in slide-in-from-bottom-10 duration-300">
        
        {/* Header */}
        <div className="p-5 flex items-center justify-between bg-white border-b border-gray-100">
          <h3 className="text-xl font-bold text-slate-900">Talk to Program Advisor</h3>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Close form">
            <X className="w-5 h-5 text-slate-900" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar bg-white">
          <form id="lead-form" onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-semibold text-slate-700">Name</label>
              <input 
                id="name"
                required
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all text-slate-900 bg-white placeholder:text-slate-400 font-medium"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</label>
              <div className="flex relative">
                <div className="absolute left-0 top-0 bottom-0 flex items-center pl-3.5 pr-2 border-r border-slate-300 pointer-events-none z-10">
                  <span className="text-lg mr-2">🇮🇳</span>
                  <ChevronDown className="w-3 h-3 text-slate-500" />
                </div>
                <input 
                  id="phone"
                  required
                  type="tel" 
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                  placeholder="99999 99999" 
                  className="w-full p-3.5 pl-24 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all text-slate-900 bg-white placeholder:text-slate-400 font-medium"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10)})}
                />
              </div>
            </div>

            {/* Boards */}
            <div className="space-y-1.5">
              <label htmlFor="board" className="text-sm font-semibold text-slate-700">Boards</label>
              <div className="relative">
                <select 
                  id="board"
                  required
                  className="w-full p-3.5 pr-10 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all text-slate-900 bg-white appearance-none font-medium"
                  value={formData.board}
                  onChange={(e) => setFormData({...formData, board: e.target.value})}
                >
                  <option value="" disabled>Select Board</option>
                  <option value="CBSE">CBSE</option>
                  <option value="ICSE">ICSE</option>
                  <option value="NIOS">NIOS</option>
                  <option value="Maharashtra Board">Maharashtra Board</option>
                  <option value="Rajasthan (RBSE)">Rajasthan (RBSE)</option>
                  <option value="Madhya Pradesh (MPBSE)">Madhya Pradesh (MPBSE)</option>
                  <option value="Tamil Nadu Board">Tamil Nadu Board</option>
                  <option value="Odisha (BSE Odisha)">Odisha (BSE Odisha)</option>
                  <option value="Uttar Pradesh (UP Board)">Uttar Pradesh (UP Board)</option>
                  <option value="Bihar (BSEB)">Bihar (BSEB)</option>
                  <option value="Punjab (PSEB)">Punjab (PSEB)</option>
                  <option value="Haryana (HBSE)">Haryana (HBSE)</option>
                  <option value="Gujarat (GSEB)">Gujarat (GSEB)</option>
                  <option value="Telangana (BSE Telangana)">Telangana (BSE Telangana)</option>
                  <option value="Himachal Pradesh (HPBOSE)">Himachal Pradesh (HPBOSE)</option>
                  <option value="Jharkhand (JAC)">Jharkhand (JAC)</option>
                  <option value="Uttarakhand (UBSE)">Uttarakhand (UBSE)</option>
                  <option value="West Bengal (WBBSE)">West Bengal (WBBSE)</option>
                  <option value="Goa (GBSHSE)">Goa (GBSHSE)</option>
                  <option value="Karnataka (KSEEB)">Karnataka (KSEEB)</option>
                  <option value="Other">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-900">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Class */}
            <div className="space-y-1.5">
              <label htmlFor="class" className="text-sm font-semibold text-slate-700">Class</label>
              <div className="relative">
                 <select 
                  id="class"
                  required
                  className="w-full p-3.5 pr-10 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all text-slate-900 bg-white appearance-none font-medium"
                  value={formData.class}
                  onChange={(e) => setFormData({...formData, class: e.target.value})}
                >
                  <option value="" disabled>Select Class</option>
                  <option value="Class 9">Class 9</option>
                  <option value="Class 10">Class 10</option>
                  <option value="Class 11">Class 11</option>
                  <option value="Class 12">Class 12</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-900">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Agreements */}
            <div className="space-y-4 pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                 <div className="relative flex items-center mt-0.5">
                  <input 
                    type="checkbox" 
                    required
                    className="peer appearance-none w-5 h-5 border-2 border-orange-400 rounded bg-white checked:bg-orange-400 transition-colors cursor-pointer"
                    checked={formData.consent}
                    onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                  />
                  <Check className="absolute w-3.5 h-3.5 text-white pointer-events-none hidden peer-checked:block left-[3px]" strokeWidth={3} />
                </div>
                <span className="text-xs text-slate-500 leading-snug group-hover:text-slate-700 transition-colors">
                  I have read and agree to the <a href="#" className="underline font-semibold text-slate-600">Privacy Policy</a> and <a href="#" className="underline font-semibold text-slate-600">Terms & Conditions</a>.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center mt-0.5">
                  <input 
                    type="checkbox" 
                    className="peer appearance-none w-5 h-5 border-2 border-orange-400 rounded bg-white checked:bg-orange-400 transition-colors cursor-pointer"
                    checked={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.checked})}
                  />
                   <Check className="absolute w-3.5 h-3.5 text-white pointer-events-none hidden peer-checked:block left-[3px]" strokeWidth={3} />
                </div>
                <span className="text-sm text-slate-600 font-medium group-hover:text-slate-800 transition-colors">Send me updates on WhatsApp</span>
              </label>
            </div>

            <Button type="submit" variant="primary" fullWidth className="mt-4 py-4 text-lg rounded-xl bg-blue-600 hover:bg-blue-700 shadow-none">
              Continue
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};