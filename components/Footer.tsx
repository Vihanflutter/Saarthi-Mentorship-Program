import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-24 pb-32 text-center text-sm">
      <div className="max-w-4xl mx-auto px-4">
        <p className="mb-4">© 2024 Soching Education. All rights reserved.</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};