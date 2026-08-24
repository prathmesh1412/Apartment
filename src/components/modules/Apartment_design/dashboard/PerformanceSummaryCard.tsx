import React from 'react';
import { Star, Briefcase } from 'lucide-react';

interface PerformanceSummaryCardProps {
  role?: 'surveyor' | 'qc' | 'final';
}

export default function PerformanceSummaryCard({ role = 'surveyor' }: PerformanceSummaryCardProps) {
  // Surveyor View (default)
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-2.5 flex flex-col justify-start xl:col-span-3 w-full relative overflow-hidden group xl:h-[148px] shrink-0 animate-fadeIn">
      {/* Background visual accent */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#002fbe] rounded-l-xl pointer-events-none" />
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="star-half-orange" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" stopColor="#f97316" />
            <stop offset="50%" stopColor="#e5e7eb" />
          </linearGradient>
        </defs>
      </svg>
      <div className="text-[11.5px] text-[#002fbe] font-extrabold leading-none mb-2 border-b border-gray-100 pb-1.5 flex justify-between items-center uppercase tracking-wide">
        <span>PROPERTY PERFORMANCE SUMMARY</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 items-stretch gap-2.5 flex-grow min-h-0">
        {/* Column 1: Property Grade */}
        <div className="flex flex-col justify-between pr-2 border-r border-gray-200 py-0.5">
          <div>
            <div className="text-[9.5px] text-gray-500 font-extrabold uppercase tracking-wider leading-none">Property Grade</div>
            <div className="flex text-orange-500 gap-0.5 mt-1.5 justify-start">
              <Star size={13} fill="#f97316" className="stroke-orange-500" />
              <Star size={13} fill="#f97316" className="stroke-orange-500" />
              <Star size={13} fill="#f97316" className="stroke-orange-500" />
              <Star size={13} fill="#f97316" className="stroke-orange-500" />
              <Star size={13} fill="url(#star-half-orange)" className="stroke-orange-500" />
              <Star size={13} fill="transparent" className="stroke-gray-300" />
            </div>
            <div className="text-[#002fbe] font-extrabold text-[22px] flex items-baseline leading-none mt-1.5 select-all font-sans">
              <span>6.2</span>
              <span className="text-[11px] text-[#002fbe] font-semibold ml-1">/ 7</span>
            </div>
          </div>
          <div className="mt-1">
            <div className="text-green-600 text-[10.5px] font-bold leading-tight">A+ Grade</div>
            <div className="text-gray-500 text-[9.5px] font-medium leading-tight mt-0.5">Excellent Property</div>
          </div>
        </div>

        {/* Column 2: Health Score */}
        <div className="flex flex-col justify-between px-1 border-r border-gray-200 py-0.5">
          <div className="text-[9.5px] text-gray-500 font-extrabold uppercase tracking-wider leading-none">Survey Health Score</div>
          <div className="flex items-center gap-2 mt-1 flex-grow">
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
              <svg width="48" height="48" viewBox="0 0 56 56" className="transform -rotate-90">
                <circle cx="28" cy="28" r="22" stroke="#10b981" strokeWidth="4.5" strokeOpacity="0.2" fill="transparent" />
                <circle cx="28" cy="28" r="22" stroke="#047857" strokeWidth="4.5" fill="transparent" strokeDasharray="138.2" strokeDashoffset="11.0" strokeLinecap="round" />
              </svg>
              <div className="absolute font-black text-[11px] text-[#002fbe] select-none">92%</div>
            </div>
            <div className="flex-1 flex flex-col justify-center leading-none">
              <div>
                <div className="text-green-600 text-[10px] font-bold select-none flex items-center gap-1">
                  <span className="w-1 h-1 bg-green-500 rounded-full" />
                  Excellent
                </div>
              </div>
              <button className="text-[#002fbe] text-[8.5px] font-bold mt-1.5 hover:bg-[#002fbe] hover:text-white transition-all text-center cursor-pointer border border-[#002fbe] rounded-md px-1.5 py-0.25 bg-white w-fit shadow-2xs select-none" type="button">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Column 3: Addl Revenue */}
        <div className="flex flex-col justify-between pl-1 py-0.5">
          <div className="text-[9.5px] text-[#002fbe] font-extrabold uppercase tracking-wider leading-none flex items-center justify-between gap-1">
            <span>ADDL. REVENUE</span>
            <span className="w-10 h-10 flex items-center justify-center text-[34px] select-none shrink-0 animate-bounce hover:scale-125 hover:rotate-12 transition-all cursor-pointer">😊</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="bg-emerald-50 w-8 h-8 rounded-lg grid place-items-center text-emerald-600 shrink-0 border border-emerald-200">
              <Briefcase size={14} />
            </div>
            <div className="leading-tight min-w-0 flex flex-col gap-0.5 flex-1">
              <div className="text-gray-500 font-extrabold text-[8px] uppercase tracking-wider">This Assessment</div>
              <div className="font-black text-slate-900 leading-none text-[12.5px]">₹1,12,892</div>
              <div className="mt-0.5">
                <span className="text-emerald-700 font-black shrink-0 whitespace-nowrap text-[9.5px] bg-emerald-100/90 px-1.5 py-0.5 rounded-full border border-emerald-300 flex items-center gap-1 w-fit">
                  <span className="text-sm">😊</span> ⬆ +12.4%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
