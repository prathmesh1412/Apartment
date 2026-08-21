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
    <div className="summary-timeline-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2.5 shrink-0 select-none items-stretch">
      {/* Card 1: Area Comparison */}
      <div className="border-2 border-blue-300/80 rounded-xl p-2.5 bg-gradient-to-b from-white to-emerald-50/30 hover:border-blue-500 shadow-xs hover:shadow-md flex items-center gap-2.5 min-w-0 h-full transition-all duration-300 relative overflow-hidden group hover:-translate-y-0.5 cursor-pointer">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#002fbe]" />
        <div className="bg-emerald-50 w-10 h-10 rounded-xl grid place-items-center text-emerald-600 shrink-0 border border-emerald-200 group-hover:scale-110 group-hover:bg-[#002fbe] group-hover:text-white transition-all shadow-2xs">
          <FileText size={18} />
        </div>
        <div className="leading-tight min-w-0 flex flex-col gap-0.5 flex-1">
          <div className="font-black text-[#002fbe] text-[10.5px] leading-tight uppercase tracking-wider summary-card-title flex items-center justify-between">
            <span>Area Comparison</span>
            <span className="text-xl select-none leading-none">📐</span>
          </div>
          <div className="space-y-0.5 text-gray-600 font-bold text-[10px] lg:text-[11px] summary-card-label">
            <div>OLD: <span className="font-extrabold text-gray-700 summary-card-primary-value whitespace-nowrap text-[10.5px] lg:text-[11.5px]">400.00 m²</span></div>
            <div>NEW: <span className="font-black text-slate-900 summary-card-primary-value whitespace-nowrap text-[11px] lg:text-[12px]">440.00 m²</span></div>
            <div className="text-emerald-700 font-black summary-card-growth flex items-center gap-1 mt-0.5 whitespace-nowrap text-[10px] lg:text-[11px] bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-300 shadow-2xs w-fit">
              <span className="animate-pulse flex items-center gap-1">📐 ⬆ +40 m² (+10%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2: R-RV */}
      <div className="border-2 border-blue-300/80 rounded-xl p-2.5 bg-gradient-to-b from-white to-emerald-50/30 hover:border-blue-500 shadow-xs hover:shadow-md flex items-center gap-2.5 min-w-0 h-full transition-all duration-300 relative overflow-hidden group hover:-translate-y-0.5 cursor-pointer">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#002fbe]" />
        <div className="bg-emerald-50 w-10 h-10 rounded-xl grid place-items-center text-emerald-600 shrink-0 border border-emerald-200 group-hover:scale-110 group-hover:bg-[#002fbe] group-hover:text-white transition-all shadow-2xs">
          <Home size={18} />
        </div>
        <div className="leading-tight min-w-0 flex flex-col gap-0.5 flex-1">
          <div className="font-black text-[#002fbe] text-[10.5px] leading-tight uppercase tracking-wider summary-card-title flex items-center justify-between">
            <span>R-RV</span>
            <span className="text-xl select-none leading-none">🏠</span>
          </div>
          <div className="space-y-0.5 text-gray-600 font-bold text-[10px] lg:text-[11px] summary-card-label">
            <div>OLD: <span className="font-extrabold text-gray-700 summary-card-primary-value whitespace-nowrap text-[10.5px] lg:text-[11.5px]">₹10,50,000</span></div>
            <div>NEW: <span className="font-black text-slate-900 summary-card-primary-value whitespace-nowrap text-[11px] lg:text-[12px]">₹12,20,000</span></div>
            <div className="text-emerald-700 font-black summary-card-growth flex items-center gap-1 mt-0.5 whitespace-nowrap text-[10px] lg:text-[11px] bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-300 shadow-2xs w-fit">
              <span className="animate-pulse flex items-center gap-1">🏠 ⬆ +16.19%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: C-RV */}
      <div className="border-2 border-blue-300/80 rounded-xl p-2.5 bg-gradient-to-b from-white to-emerald-50/30 hover:border-blue-500 shadow-xs hover:shadow-md flex items-center gap-2.5 min-w-0 h-full transition-all duration-300 relative overflow-hidden group hover:-translate-y-0.5 cursor-pointer">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#002fbe]" />
        <div className="bg-emerald-50 w-10 h-10 rounded-xl grid place-items-center text-emerald-600 shrink-0 border border-emerald-200 group-hover:scale-110 group-hover:bg-[#002fbe] group-hover:text-white transition-all shadow-2xs">
          <Building2 size={18} />
        </div>
        <div className="leading-tight min-w-0 flex flex-col gap-0.5 flex-1">
          <div className="font-black text-[#002fbe] text-[10.5px] leading-tight uppercase tracking-wider summary-card-title flex items-center justify-between">
            <span>C-RV</span>
            <span className="text-xl select-none leading-none">🏢</span>
          </div>
          <div className="space-y-0.5 text-gray-600 font-bold text-[10px] lg:text-[11px] summary-card-label">
            <div>OLD: <span className="font-extrabold text-gray-700 summary-card-primary-value whitespace-nowrap text-[10.5px] lg:text-[11.5px]">₹5,70,000</span></div>
            <div>NEW: <span className="font-black text-slate-900 summary-card-primary-value whitespace-nowrap text-[11px] lg:text-[12px]">₹6,25,000</span></div>
            <div className="text-emerald-700 font-black summary-card-growth flex items-center gap-1 mt-0.5 whitespace-nowrap text-[10px] lg:text-[11px] bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-300 shadow-2xs w-fit">
              <span className="animate-pulse flex items-center gap-1">🏢 ⬆ +9.65%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4: Rateable Value */}
      <div className="border-2 border-blue-300/80 rounded-xl p-2.5 bg-gradient-to-b from-white to-emerald-50/30 hover:border-blue-500 shadow-xs hover:shadow-md flex items-center gap-2.5 min-w-0 h-full transition-all duration-300 relative overflow-hidden group hover:-translate-y-0.5 cursor-pointer">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#002fbe]" />
        <div className="bg-emerald-50 w-10 h-10 rounded-xl grid place-items-center text-emerald-600 shrink-0 border border-emerald-200 group-hover:scale-110 group-hover:bg-[#002fbe] group-hover:text-white transition-all shadow-2xs">
          <UserCheck size={18} />
        </div>
        <div className="leading-tight min-w-0 flex flex-col gap-0.5 flex-1">
          <div className="font-black text-[#002fbe] text-[10.5px] leading-tight uppercase tracking-wider summary-card-title flex items-center justify-between">
            <span>Rateable Value (RV)</span>
            <span className="text-xl select-none leading-none">📈</span>
          </div>
          <div className="space-y-0.5 text-gray-600 font-bold text-[10px] lg:text-[11px] summary-card-label">
            <div>OLD: <span className="font-extrabold text-gray-700 summary-card-primary-value whitespace-nowrap text-[10.5px] lg:text-[11.5px]">₹16,20,000</span></div>
            <div>NEW: <span className="font-black text-slate-900 summary-card-primary-value whitespace-nowrap text-[11px] lg:text-[12px]">₹18,45,000</span></div>
            <div className="text-emerald-700 font-black summary-card-growth flex items-center gap-1 mt-0.5 whitespace-nowrap text-[10px] lg:text-[11px] bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-300 shadow-2xs w-fit">
              <span className="animate-pulse flex items-center gap-1">📈 ⬆ +13.89%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 5: Tax (Current) */}
      <div className="border-2 border-blue-300/80 rounded-xl p-2.5 bg-gradient-to-b from-white to-emerald-50/30 hover:border-blue-500 shadow-xs hover:shadow-md flex items-center gap-2.5 min-w-0 h-full transition-all duration-300 relative overflow-hidden group hover:-translate-y-0.5 cursor-pointer">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#002fbe]" />
        <div className="bg-emerald-50 w-10 h-10 rounded-xl grid place-items-center text-emerald-600 shrink-0 border border-emerald-200 group-hover:scale-110 group-hover:bg-[#002fbe] group-hover:text-white transition-all shadow-2xs">
          <Percent size={18} />
        </div>
        <div className="leading-tight min-w-0 flex flex-col gap-0.5 flex-1">
          <div className="font-black text-[#002fbe] text-[10.5px] leading-tight uppercase tracking-wider summary-card-title flex items-center justify-between">
            <span>Tax (Current)</span>
            <span className="text-xl select-none leading-none">📊</span>
          </div>
          <div className="space-y-0.5 text-gray-600 font-bold text-[10px] lg:text-[11px] summary-card-label">
            <div>OLD: <span className="font-extrabold text-gray-700 summary-card-primary-value whitespace-nowrap text-[10.5px] lg:text-[11.5px]">₹16,500</span></div>
            <div>NEW: <span className="font-black text-slate-900 summary-card-primary-value whitespace-nowrap text-[11px] lg:text-[12px]">₹18,752</span></div>
            <div className="text-emerald-700 font-black summary-card-growth flex items-center gap-1 mt-0.5 whitespace-nowrap text-[10px] lg:text-[11px] bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-300 shadow-2xs w-fit">
              <span className="animate-pulse flex items-center gap-1">📊 ⬆ +13.65%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 6: Collection */}
      <div className="border-2 border-blue-300/80 rounded-xl p-2.5 bg-gradient-to-b from-white to-emerald-50/30 hover:border-blue-500 shadow-xs hover:shadow-md flex items-center gap-2.5 min-w-0 h-full transition-all duration-300 relative overflow-hidden group hover:-translate-y-0.5 cursor-pointer">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#002fbe]" />
        <div className="bg-emerald-50 w-10 h-10 rounded-xl grid place-items-center text-emerald-600 shrink-0 border border-emerald-200 group-hover:scale-110 group-hover:bg-[#002fbe] group-hover:text-white transition-all shadow-2xs">
          <Wallet size={18} />
        </div>
        <div className="leading-tight min-w-0 flex flex-col gap-0.5 flex-1">
          <div className="font-black text-[#002fbe] text-[10.5px] leading-tight uppercase tracking-wider summary-card-title flex items-center justify-between">
            <span>Collection</span>
            <span className="text-xl select-none leading-none">💰</span>
          </div>
          <div className="space-y-0.5 text-gray-600 font-bold text-[10px] lg:text-[11px] summary-card-label">
            <div>Paid: <span className="font-extrabold text-emerald-600 summary-card-primary-value whitespace-nowrap text-[10.5px] lg:text-[11.5px]">₹12,456</span></div>
            <div>O/S: <span className="font-extrabold text-rose-600 summary-card-primary-value whitespace-nowrap text-[10.5px] lg:text-[11.5px]">₹6,296</span></div>
            <div className="text-emerald-700 font-black summary-card-growth flex items-center gap-1 mt-0.5 whitespace-nowrap text-[10px] lg:text-[11px] bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-300 shadow-2xs w-fit">
              <span className="animate-pulse flex items-center gap-1">💰 ⬆ Total: ₹18,752</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 7: Additional Revenue */}
      <div className="border-2 border-blue-300/80 rounded-xl p-2.5 bg-gradient-to-b from-white to-emerald-50/30 hover:border-blue-500 shadow-xs hover:shadow-md flex items-center gap-2.5 min-w-0 h-full transition-all duration-300 relative overflow-hidden group hover:-translate-y-0.5 cursor-pointer">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#002fbe]" />
        <div className="bg-emerald-50 w-10 h-10 rounded-xl grid place-items-center text-emerald-600 shrink-0 border border-emerald-200 group-hover:scale-110 group-hover:bg-[#002fbe] group-hover:text-white transition-all shadow-2xs">
          <Briefcase size={18} />
        </div>
        <div className="leading-tight min-w-0 flex flex-col gap-0.5 flex-1">
          <div className="font-black text-[#002fbe] text-[10.5px] leading-tight uppercase tracking-wider summary-card-title flex items-center justify-between">
            <span>Addl. Revenue</span>
            <span className="text-xl select-none leading-none inline-block animate-bounce group-hover:scale-125 transition-transform">😊</span>
          </div>
          <div className="text-gray-500 font-extrabold text-[9px] lg:text-[9.5px] summary-card-label">This Assessment</div>
          <div className="flex flex-wrap items-baseline gap-1 mt-0.5">
            <span className="font-black text-slate-900 leading-none summary-card-primary-value whitespace-nowrap text-[11.5px] lg:text-[12.5px]">₹1,12,892</span>
            <span className="text-emerald-700 font-black summary-card-growth shrink-0 whitespace-nowrap text-[10px] lg:text-[10.5px] bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-300 shadow-2xs animate-pulse flex items-center gap-1">😊 ⬆ +12.4%</span>
          </div>
          <div className="text-gray-500 font-extrabold mt-0.5 text-[8.5px] lg:text-[9.5px] whitespace-nowrap">(Tax+Pen+Int)</div>
        </div>
      </div>
    </div>
  );
}
