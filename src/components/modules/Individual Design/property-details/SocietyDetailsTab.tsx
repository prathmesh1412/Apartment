import React from 'react';
import { Home } from 'lucide-react';
import FloorComponentDetailsTable from '@/components/modules/Individual Design/property-details/FloorComponentDetailsTable';
import TimelineAndMetricsRow from '@/components/modules/Individual Design/dashboard/TimelineAndMetricsRow';
import TaxesComparisonCard from '@/components/modules/Individual Design/dashboard/TaxesComparisonCard';

export default function SocietyDetailsTab({
  activeSubTab = 'rateable',
  selectedTimelineStage,
  onTimelineNodeClick
}: {
  activeSubTab?: 'rateable' | 'capital' | 'dual' | 'reassessment';
  selectedTimelineStage?: string | null;
  onTimelineNodeClick?: (stageId: string, event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-3 font-sans text-gray-800 animate-fadeIn">
      {/* Expanded Society Registry Section */}
      <div className="bg-[#eff6ff]/35 border border-[#002fbe]/20 rounded-xl p-3 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#002fbe]/15 pb-2 mb-3">
          <div className="text-[10.5px] text-[#002fbe] uppercase tracking-wider font-extrabold flex items-center gap-1.5">
            <Home size={14} />
            <span>Society Registry & Contact Information</span>
          </div>
          <span className="bg-green-50 text-green-700 border border-green-200 text-[8.5px] px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Active
          </span>
        </div>

        {/* 2-Row Grid matching Screenshot 1 without input boxes */}
        <div className="space-y-3 pt-1">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-2">
            {/* Land Owner */}
            <div className="flex flex-col">
              <span className="text-[8.5px] font-extrabold text-[#002fbe] uppercase tracking-wider truncate">Land Owner</span>
              <span className="font-extrabold text-[11px] text-[#002fbe] mt-0.5 truncate">MATOSHREE BUILDERS</span>
            </div>
            {/* Builder Name */}
            <div className="flex flex-col">
              <span className="text-[8.5px] font-extrabold text-[#002fbe] uppercase tracking-wider truncate">Builder Name</span>
              <span className="font-extrabold text-[11px] text-[#002fbe] uppercase mt-0.5 truncate">MATOSHREE BUILDERS PVT LTD</span>
            </div>
            {/* Society Name */}
            <div className="flex flex-col col-span-1 sm:col-span-1 md:col-span-1">
              <span className="text-[8.5px] font-extrabold text-[#002fbe] uppercase tracking-wider truncate">Society Name</span>
              <span className="font-extrabold text-[11px] text-[#002fbe] uppercase mt-0.5 truncate">MATOSHREE CHS LTD</span>
            </div>
            {/* Society Email */}
            <div className="flex flex-col">
              <span className="text-[8.5px] font-extrabold text-[#002fbe] uppercase tracking-wider truncate">Society Email</span>
              <span className="font-extrabold text-[11px] text-[#002fbe] mt-0.5 truncate">society.matoshree@gmail.com</span>
            </div>
            {/* Secretary / Manager Name */}
            <div className="flex flex-col">
              <span className="text-[8.5px] font-extrabold text-[#002fbe] uppercase tracking-wider truncate">Secretary / Manager Name</span>
              <span className="font-extrabold text-[11px] text-[#002fbe] uppercase mt-0.5 truncate">SHRI VIPUL SHAH</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2">
            {/* Secretary / Manager Mobile */}
            <div className="flex flex-col">
              <span className="text-[8.5px] font-extrabold text-[#002fbe] uppercase tracking-wider truncate">Secretary / Manager Mobile</span>
              <span className="font-extrabold text-[11px] text-[#002fbe] mt-0.5 truncate">+91 98210 54321</span>
            </div>
            {/* Secretary / Manager Email */}
            <div className="flex flex-col">
              <span className="text-[8.5px] font-extrabold text-[#002fbe] uppercase tracking-wider truncate">Secretary / Manager Email</span>
              <span className="font-extrabold text-[11px] text-[#002fbe] mt-0.5 truncate">secretary.matoshree@gmail.com</span>
            </div>
            {/* Society Address */}
            <div className="flex flex-col">
              <span className="text-[8.5px] font-extrabold text-[#002fbe] uppercase tracking-wider truncate">Society Address</span>
              <span className="font-extrabold text-[11px] text-[#002fbe] mt-0.5 truncate">Plot No. 55, Kopri, Kolsheet Tax Zone, Thane West</span>
            </div>
          </div>
        </div>
      </div>

      {/* Shared Floor Details components */}
      <FloorComponentDetailsTable activeSubTab={activeSubTab} />
      <TimelineAndMetricsRow 
        selectedTimelineStage={selectedTimelineStage}
        onTimelineNodeClick={onTimelineNodeClick}
      />
      <TaxesComparisonCard />
    </div>
  );
}
