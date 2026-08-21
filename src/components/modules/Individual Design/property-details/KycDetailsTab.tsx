import React from 'react';
import { ShieldCheck } from 'lucide-react';
import FloorComponentDetailsTable from '@/components/modules/Individual Design/property-details/FloorComponentDetailsTable';
import TimelineAndMetricsRow from '@/components/modules/Individual Design/dashboard/TimelineAndMetricsRow';
import TaxesComparisonCard from '@/components/modules/Individual Design/dashboard/TaxesComparisonCard';

export default function KycDetailsTab({
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
      {/* Expanded Owner KYC Credentials Section */}
      <div className="bg-[#eff6ff]/35 border border-[#002fbe]/20 rounded-xl p-3 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#002fbe]/15 pb-2 mb-3">
          <div className="text-[10.5px] text-[#002fbe] uppercase tracking-wider font-extrabold flex items-center gap-1.5">
            <ShieldCheck size={14} />
            <span>Owner KYC Credentials & Property Information</span>
          </div>
          <span className="bg-green-50 text-green-700 border border-green-200 text-[8.5px] px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Verified
          </span>
        </div>

        {/* 2-Row Grid with clean Label and Value presentation without individual boxes */}
        <div className="space-y-3 pt-1">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-4 gap-y-2">
            {/* Owner Category */}
            <div className="flex flex-col">
              <span className="text-[8.5px] font-extrabold text-[#002fbe] uppercase tracking-wider truncate">Owner Category</span>
              <span className="font-extrabold text-[11px] text-[#002fbe] mt-0.5 truncate">Individual</span>
            </div>
            {/* Title */}
            <div className="flex flex-col">
              <span className="text-[8.5px] font-extrabold text-[#002fbe] uppercase tracking-wider truncate">Title</span>
              <span className="font-extrabold text-[11px] text-[#002fbe] mt-0.5 truncate">M/S</span>
            </div>
            {/* Property Holder Name(Regional) */}
            <div className="flex flex-col col-span-1 sm:col-span-2">
              <span className="text-[8.5px] font-extrabold text-[#002fbe] uppercase tracking-wider truncate">Property Holder Name(Regional)</span>
              <span className="font-extrabold text-[11px] text-red-650 mt-0.5 truncate">मातोश्री बिल्डर्स</span>
            </div>
            {/* Property Holder Name */}
            <div className="flex flex-col col-span-1 sm:col-span-2">
              <span className="text-[8.5px] font-extrabold text-[#002fbe] uppercase tracking-wider truncate">Property Holder Name</span>
              <span className="font-extrabold text-[11px] text-[#002fbe] uppercase mt-0.5 truncate">MATOSHREE BUILDERS</span>
            </div>
            {/* Occupier Name(Regional) */}
            <div className="flex flex-col col-span-1 sm:col-span-1">
              <span className="text-[8.5px] font-extrabold text-[#002fbe] uppercase tracking-wider truncate">Occupier Name(Regional)</span>
              <span className="font-extrabold text-[11px] text-red-650 mt-0.5 truncate">मातोश्री बिल्डर्स</span>
            </div>
            {/* Occupier Name */}
            <div className="flex flex-col col-span-1 sm:col-span-1">
              <span className="text-[8.5px] font-extrabold text-[#002fbe] uppercase tracking-wider truncate">Occupier Name</span>
              <span className="font-extrabold text-[11px] text-[#002fbe] uppercase mt-0.5 truncate">MATOSHREE BUILDERS</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-x-4 gap-y-2">
            {/* Aadhar No */}
            <div className="flex flex-col">
              <span className="text-[8.5px] font-extrabold text-[#002fbe] uppercase tracking-wider truncate">Aadhar No</span>
              <span className="font-extrabold text-[11px] text-[#002fbe] mt-0.5 truncate">XXXX-XXXX-8902</span>
            </div>
            {/* Mobile No */}
            <div className="flex flex-col">
              <span className="text-[8.5px] font-extrabold text-[#002fbe] uppercase tracking-wider truncate">Mobile No</span>
              <span className="font-extrabold text-[11px] text-[#002fbe] mt-0.5 truncate">+91 98XXXXXX21</span>
            </div>
            {/* Alt. Mobile No */}
            <div className="flex flex-col">
              <span className="text-[8.5px] font-extrabold text-[#002fbe] uppercase tracking-wider truncate">Alt. Mobile No</span>
              <span className="font-extrabold text-[11px] text-[#002fbe] mt-0.5 truncate">+91 97XXXXXX10</span>
            </div>
            {/* Email ID */}
            <div className="flex flex-col">
              <span className="text-[8.5px] font-extrabold text-[#002fbe] uppercase tracking-wider truncate">Email ID</span>
              <span className="font-extrabold text-[11px] text-[#002fbe] mt-0.5 truncate">contact@matoshree.com</span>
            </div>
            {/* Address(Regional) */}
            <div className="flex flex-col">
              <span className="text-[8.5px] font-extrabold text-[#002fbe] uppercase tracking-wider truncate">Address(Regional)</span>
              <span className="font-extrabold text-[11px] text-red-650 mt-0.5 truncate">प्लाट नं. ५५, कोपरी, ठाणे</span>
            </div>
            {/* Address */}
            <div className="flex flex-col">
              <span className="text-[8.5px] font-extrabold text-[#002fbe] uppercase tracking-wider truncate">Address</span>
              <span className="font-extrabold text-[11px] text-[#002fbe] mt-0.5 truncate">Plot No. 55, Kopri, Thane West</span>
            </div>
            {/* Pincode */}
            <div className="flex flex-col">
              <span className="text-[8.5px] font-extrabold text-[#002fbe] uppercase tracking-wider truncate">Pincode</span>
              <span className="font-extrabold text-[11px] text-[#002fbe] mt-0.5 truncate">400603</span>
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
