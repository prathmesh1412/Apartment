import React from 'react';
import { ChevronRight } from 'lucide-react';
import WingCard from './WingCard';
import { WingDetails } from '@/components/modules/Apartment_design/shared/mockData';

interface WingSummaryProps {
  summaryRef: React.RefObject<HTMLDivElement | null>;
  wings: WingDetails[];
  activeMetrics: Record<string, 'discount' | 'exemptions' | 'rvImpact'>;
  handleMetricClick: (e: React.MouseEvent<HTMLButtonElement>, wing: WingDetails, metricType: 'discount' | 'exemptions' | 'rvImpact') => void;
  handleDeleteWing: (e: React.MouseEvent<HTMLButtonElement>, wingId: string) => void;
  onAddWingClick: () => void;
  onWingCardClick: (wingName: string) => void;
}

export default function WingSummary({
  summaryRef,
  wings,
  activeMetrics,
  handleMetricClick,
  handleDeleteWing,
  onAddWingClick,
  onWingCardClick
}: WingSummaryProps) {
  const cardsScrollRef = React.useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (cardsScrollRef.current) {
      cardsScrollRef.current.scrollBy({ left: 450, behavior: 'smooth' });
    }
  };

  return (
    <div ref={summaryRef} className="bg-white border border-gray-200 rounded-xl p-3 shadow-xs relative shrink-0">
      {/* Section Title & Legend Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2.5 px-1 gap-2 select-none">
        <div className="flex items-baseline gap-1.5">
          <h3 className="text-[12px] font-black text-[#1e2b58] tracking-tight uppercase">Wing Intelligence</h3>
          <span className="text-[9px] text-gray-500 font-bold">(Click any wing to load comparison)</span>
        </div>
        
        {/* Legend Row */}
        <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-[9px] font-bold text-gray-500">
          <span className="flex items-center gap-1">
            <span className="text-emerald-600 font-black text-[9.5px]">A+</span>
            <span className="text-gray-700 font-bold text-[8.5px]">: Excellent (90%+)</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="text-emerald-500 font-black text-[9.5px]">A</span>
            <span className="text-gray-700 font-bold text-[8.5px]">: Good (75-90%)</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="text-amber-500 font-black text-[9.5px]">B</span>
            <span className="text-gray-700 font-bold text-[8.5px]">: Average (50-75%)</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="text-orange-500 font-black text-[9.5px]">C</span>
            <span className="text-gray-700 font-bold text-[8.5px]">: Poor (&lt;50%)</span>
          </span>
        </div>
      </div>

      {/* Horizontal row of Wing cards */}
      <div className="relative flex items-center">
        <div 
          ref={cardsScrollRef}
          className="flex gap-3 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent w-full scroll-smooth"
        >
          {wings.map((wing) => (
            <div key={wing.wing} className="flex-shrink-0 w-[440px] lg:w-[480px]">
              <WingCard 
                wing={wing}
                activeMetric={activeMetrics[wing.id] || 'discount'}
                onMetricClick={handleMetricClick}
                onDeleteClick={handleDeleteWing}
                onClick={() => onWingCardClick(wing.wing)}
              />
            </div>
          ))}
        </div>

        {/* Right Scroll Next Button */}
        {wings.length > 2 && (
          <button
            type="button"
            onClick={scrollNext}
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-white hover:bg-blue-50 border border-blue-200 text-blue-600 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition cursor-pointer"
            title="Scroll next wings"
          >
            <ChevronRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
