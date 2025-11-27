import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ComparisonTable } from './components/ComparisonTable';
import { Testimonials } from './components/Testimonials';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { StickyCTA } from './components/StickyCTA';
import { LeadForm } from './components/LeadForm';
import { SuccessModal } from './components/SuccessModal';
import { Footer } from './components/Footer';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const handleOpenForm = () => setIsFormOpen(true);
  
  const handleCloseForm = () => setIsFormOpen(false);
  
  const handleFormSubmit = () => {
    setIsFormOpen(false);
    setTimeout(() => {
        setIsSuccessOpen(true);
    }, 300); // Small delay for smooth transition
  };

  const handleCloseSuccess = () => setIsSuccessOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Hero Section */}
      <Hero onTalkClick={handleOpenForm} />

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 pt-16 pb-8 space-y-24">
        
        {/* Comparison Section */}
        <section id="comparison" className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Why Choose Us?</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800">Other Coaching vs <span className="text-blue-600">Soching Saarthi</span></h3>
            </div>
            <ComparisonTable />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="max-w-6xl mx-auto">
            <Testimonials />
        </section>

        {/* Features Grid */}
        <section id="features" className="max-w-7xl mx-auto">
             <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800">Everything you need to <span className="text-blue-600">Succeed</span></h3>
                <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Comprehensive support designed to take you from where you are to where you want to be.</p>
            </div>
            <Features />
        </section>

        {/* FAQ Section */}
        <section id="faq" className="max-w-3xl mx-auto">
             <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800">Frequently Asked Questions</h3>
            </div>
            <FAQ />
        </section>

      </main>

      <Footer />

      {/* Sticky Bottom Actions */}
      <StickyCTA onTalkClick={handleOpenForm} />

      {/* Modals */}
      <LeadForm 
        isOpen={isFormOpen} 
        onClose={handleCloseForm} 
        onSubmit={handleFormSubmit} 
      />
      
      <SuccessModal 
        isOpen={isSuccessOpen} 
        onClose={handleCloseSuccess} 
      />

    </div>
  );
}

export default App;