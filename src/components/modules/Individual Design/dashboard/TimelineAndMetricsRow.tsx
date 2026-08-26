import React from 'react';
import {
  FileText,
  UserCheck,
  Percent,
  Wallet,
  Briefcase,
  Home,
  Building2
} from 'lucide-react';

interface TimelineAndMetricsRowProps {
  selectedTimelineStage?: string | null;
  onTimelineNodeClick?: (stageId: string, event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function TimelineAndMetricsRow({
  selectedTimelineStage,
  onTimelineNodeClick
}: TimelineAndMetricsRowProps) {
  return (
    <div className="summary-timeline-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 shrink-0 select-none items-stretch">
      {/* Card 1: Changes of Use */}
      <div className="border-2 border-blue-300/80 rounded-xl p-1.5 bg-gradient-to-b from-white to-emerald-50/30 hover:border-blue-500 shadow-xs hover:shadow-md flex items-center gap-2 min-w-0 h-full transition-all duration-300 relative overflow-hidden group hover:-translate-y-0.5 cursor-pointer">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#002fbe]" />
        <div className="bg-emerald-50 w-8 h-8 rounded-lg grid place-items-center text-emerald-600 shrink-0 border border-emerald-200 group-hover:scale-110 group-hover:bg-[#002fbe] group-hover:text-white transition-all shadow-2xs">
          <Home size={15} />
        </div>
        <div className="leading-tight min-w-0 flex flex-col gap-0.5 flex-1">
          <div className="font-black text-[#002fbe] text-[10px] leading-tight uppercase tracking-wider summary-card-title flex items-center justify-between">
            <span>Changes of Use</span>
            <span className="text-base select-none leading-none">🏠</span>
          </div>
          <div className="space-y-0.5 text-gray-600 font-bold text-[9.5px] lg:text-[10px] summary-card-label">
            <div>OLD: <span className="font-extrabold text-gray-700 summary-card-primary-value whitespace-nowrap text-[10px] lg:text-[10.5px]">Residential</span></div>
            <div>NEW: <span className="font-black text-slate-900 summary-card-primary-value whitespace-nowrap text-[10.5px] lg:text-[11px]">Resi + Comm</span></div>
            <div className="text-emerald-700 font-black summary-card-growth flex items-center gap-1 mt-0.5 whitespace-nowrap text-[9px] lg:text-[9.5px] bg-emerald-100/90 px-1.5 py-0.25 rounded-full border border-emerald-300 shadow-2xs w-fit">
              <span className="animate-pulse flex items-center gap-1">🏠 ⬆ Updated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2: ALV */}
      <div className="border-2 border-blue-300/80 rounded-xl p-1.5 bg-gradient-to-b from-white to-emerald-50/30 hover:border-blue-500 shadow-xs hover:shadow-md flex items-center gap-2 min-w-0 h-full transition-all duration-300 relative overflow-hidden group hover:-translate-y-0.5 cursor-pointer">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#002fbe]" />
        <div className="bg-emerald-50 w-8 h-8 rounded-lg grid place-items-center text-emerald-600 shrink-0 border border-emerald-200 group-hover:scale-110 group-hover:bg-[#002fbe] group-hover:text-white transition-all shadow-2xs">
          <Building2 size={15} />
        </div>
        <div className="leading-tight min-w-0 flex flex-col gap-0.5 flex-1">
          <div className="font-black text-[#002fbe] text-[10px] leading-tight uppercase tracking-wider summary-card-title flex items-center justify-between">
            <span>ALV</span>
            <span className="text-base select-none leading-none">🧮</span>
          </div>
          <div className="space-y-0.5 text-gray-600 font-bold text-[9.5px] lg:text-[10px] summary-card-label">
            <div>OLD: <span className="font-extrabold text-gray-700 summary-card-primary-value whitespace-nowrap text-[10px] lg:text-[10.5px]">₹18,00,000</span></div>
            <div>NEW: <span className="font-black text-slate-900 summary-card-primary-value whitespace-nowrap text-[10.5px] lg:text-[11px]">₹20,50,000</span></div>
            <div className="text-emerald-700 font-black summary-card-growth flex items-center gap-1 mt-0.5 whitespace-nowrap text-[9px] lg:text-[9.5px] bg-emerald-100/90 px-1.5 py-0.25 rounded-full border border-emerald-300 shadow-2xs w-fit">
              <span className="animate-pulse flex items-center gap-1">🧮 ⬆ +13.89%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Rateable Value */}
      <div className="border-2 border-blue-300/80 rounded-xl p-1.5 bg-gradient-to-b from-white to-emerald-50/30 hover:border-blue-500 shadow-xs hover:shadow-md flex items-center gap-2 min-w-0 h-full transition-all duration-300 relative overflow-hidden group hover:-translate-y-0.5 cursor-pointer">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#002fbe]" />
        <div className="bg-emerald-50 w-8 h-8 rounded-lg grid place-items-center text-emerald-600 shrink-0 border border-emerald-200 group-hover:scale-110 group-hover:bg-[#002fbe] group-hover:text-white transition-all shadow-2xs">
          <UserCheck size={15} />
        </div>
        <div className="leading-tight min-w-0 flex flex-col gap-0.5 flex-1">
          <div className="font-black text-[#002fbe] text-[10px] leading-tight uppercase tracking-wider summary-card-title flex items-center justify-between">
            <span>Rateable Value (RV)</span>
            <span className="text-base select-none leading-none">📈</span>
          </div>
          <div className="space-y-0.5 text-gray-600 font-bold text-[9.5px] lg:text-[10px] summary-card-label">
            <div>OLD: <span className="font-extrabold text-gray-700 summary-card-primary-value whitespace-nowrap text-[10px] lg:text-[10.5px]">₹16,20,000</span></div>
            <div>NEW: <span className="font-black text-slate-900 summary-card-primary-value whitespace-nowrap text-[10.5px] lg:text-[11px]">₹18,45,000</span></div>
            <div className="text-emerald-700 font-black summary-card-growth flex items-center gap-1 mt-0.5 whitespace-nowrap text-[9px] lg:text-[9.5px] bg-emerald-100/90 px-1.5 py-0.25 rounded-full border border-emerald-300 shadow-2xs w-fit">
              <span className="animate-pulse flex items-center gap-1">📈 ⬆ +13.89%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4: Tax (Current) */}
      <div className="border-2 border-blue-300/80 rounded-xl p-1.5 bg-gradient-to-b from-white to-emerald-50/30 hover:border-blue-500 shadow-xs hover:shadow-md flex items-center gap-2 min-w-0 h-full transition-all duration-300 relative overflow-hidden group hover:-translate-y-0.5 cursor-pointer">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#002fbe]" />
        <div className="bg-emerald-50 w-8 h-8 rounded-lg grid place-items-center text-emerald-600 shrink-0 border border-emerald-200 group-hover:scale-110 group-hover:bg-[#002fbe] group-hover:text-white transition-all shadow-2xs">
          <Percent size={15} />
        </div>
        <div className="leading-tight min-w-0 flex flex-col gap-0.5 flex-1">
          <div className="font-black text-[#002fbe] text-[10px] leading-tight uppercase tracking-wider summary-card-title flex items-center justify-between">
            <span>Tax (Current)</span>
            <span className="text-base select-none leading-none">📊</span>
          </div>
          <div className="space-y-0.5 text-gray-600 font-bold text-[9.5px] lg:text-[10px] summary-card-label">
            <div>OLD: <span className="font-extrabold text-gray-700 summary-card-primary-value whitespace-nowrap text-[10px] lg:text-[10.5px]">₹16,500</span></div>
            <div>NEW: <span className="font-black text-slate-900 summary-card-primary-value whitespace-nowrap text-[10.5px] lg:text-[11px]">₹18,752</span></div>
            <div className="text-emerald-700 font-black summary-card-growth flex items-center gap-1 mt-0.5 whitespace-nowrap text-[9px] lg:text-[9.5px] bg-emerald-100/90 px-1.5 py-0.25 rounded-full border border-emerald-300 shadow-2xs w-fit">
              <span className="animate-pulse flex items-center gap-1">📊 ⬆ +13.65%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
