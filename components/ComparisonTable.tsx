import React from 'react';

export const ComparisonTable: React.FC = () => {
  const rows = [
    { label: "Student-Teacher Ratio", generic: "1 teacher : 50 students", soching: "1 mentor : YOU personally" },
    { label: "Study Strategy", generic: "Same plan for everyone", soching: "Your custom strategy" },
    { label: "Learning Environment", generic: "High pressure to perform", soching: "Growth-focused support" },
    { label: "Annual Cost", generic: "₹15,000-25,000/year", soching: "₹2,499/year for 2 Academic Years*" },
    { label: "Recognition", generic: "You're a number", soching: "You're a person" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 my-8">
      <div className="grid grid-cols-3 text-center">
        {/* Headers */}
        <div className="bg-emerald-800 text-white p-4 flex items-center justify-center font-bold text-sm md:text-base">
          Comparison
        </div>
        <div className="bg-emerald-700 text-white p-4 flex items-center justify-center font-bold text-sm md:text-base">
          Other Coaching
        </div>
        <div className="bg-orange-500 text-white p-4 flex items-center justify-center font-bold text-sm md:text-base">
          Soching Saarthi
        </div>

        {/* Rows */}
        {rows.map((row, idx) => (
          <React.Fragment key={idx}>
            <div className={`p-4 text-emerald-900 font-bold text-xs md:text-sm flex items-center ${idx % 2 === 0 ? 'bg-emerald-50' : 'bg-white'}`}>
              {row.label}
            </div>
            <div className={`p-4 text-gray-600 text-xs md:text-sm flex items-center justify-center border-l border-emerald-100 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
              {row.generic}
            </div>
            <div className={`p-4 text-orange-900 font-bold text-xs md:text-sm flex items-center justify-center border-l border-orange-100 ${idx % 2 === 0 ? 'bg-orange-50' : 'bg-white'}`}>
              {row.soching}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};