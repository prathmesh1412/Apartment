import React, { useState } from 'react';
import { ChevronRight, Cpu, Building, Percent, History, FileCheck, ShieldCheck, Award, FileText, Pencil, TrendingUp, Layers } from 'lucide-react';
import WingCard from './WingCard';
import { WingDetails } from '@/components/modules/Apartment_design/shared/mockData';

interface WingSummaryProps {
  summaryRef: React.RefObject<HTMLDivElement | null>;
  wings: WingDetails[];
  activeMetrics: Record<string, 'discount' | 'exemptions' | 'rvImpact'>;
  handleMetricClick: (e: React.MouseEvent<HTMLButtonElement>, wing: WingDetails, metricType: 'discount' | 'exemptions' | 'rvImpact') => void;
  handleDeleteWing: (e: React.MouseEvent<HTMLButtonElement>, wingId: string) => void;
  onAmcClick?: (e: React.MouseEvent<HTMLButtonElement>, wing: WingDetails) => void;
  onAddWingClick: () => void;
  onWingCardClick: (wingName: string) => void;
}

export default function WingSummary({
  summaryRef,
  wings,
  activeMetrics,
  handleMetricClick,
  handleDeleteWing,
  onAmcClick,
  onAddWingClick,
  onWingCardClick
}: WingSummaryProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [selectedSectionTab, setSelectedSectionTab] = React.useState<'wing' | 'building' | 'discount' | 'old'>('wing');
  const [activeValuationMethod, setActiveValuationMethod] = useState<'rv' | 'cvm' | 'dual'>('rv');
  const cardsScrollRef = React.useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (cardsScrollRef.current) {
      cardsScrollRef.current.scrollBy({ left: 450, behavior: 'smooth' });
    }
  };

  const handleOpenDrawer = (drawerTab: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('openQuickDataEntry', { detail: { activeTab: drawerTab } }));
    }
  };

  return (
    <div ref={summaryRef} className="bg-white border border-gray-200 rounded-xl p-3 shadow-xs relative shrink-0 transition-all duration-300">
      {/* Primary Navigation Tabs Row with Right-Aligned Valuation Method Switcher */}
      <div className="flex items-center justify-between border-b border-[#002fbe] mb-2 px-0.5 overflow-x-auto no-scrollbar select-none gap-2">
        {/* Left Navigation Tabs */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Tab 1: Wing Intelligence */}
          <button
            type="button"
            onClick={() => {
              setSelectedSectionTab('wing');
              setIsCollapsed(false);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-black rounded-t-lg transition-all cursor-pointer ${
              selectedSectionTab === 'wing'
                ? 'bg-white text-[#002fbe] border-2 border-b-0 border-[#002fbe] shadow-2xs -mb-[1px] z-10'
                : 'bg-[#002fbe] text-white hover:bg-[#0028a3]'
            }`}
          >
            <Cpu size={13} />
            <span>Wing Intelligence</span>
          </button>

          {/* Tab 2: Building Permission */}
          <button
            type="button"
            onClick={() => {
              setSelectedSectionTab('building');
              setIsCollapsed(false);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-extrabold rounded-t-lg transition-all cursor-pointer ${
              selectedSectionTab === 'building'
                ? 'bg-white text-[#002fbe] border-2 border-b-0 border-[#002fbe] shadow-2xs -mb-[1px] z-10'
                : 'bg-[#002fbe] text-white hover:bg-[#0028a3]'
            }`}
          >
            <Building size={13} />
            <span>Building Permission</span>
          </button>

          {/* Tab 3: Discount & Social Data */}
          <button
            type="button"
            onClick={() => {
              setSelectedSectionTab('discount');
              setIsCollapsed(false);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-extrabold rounded-t-lg transition-all cursor-pointer ${
              selectedSectionTab === 'discount'
                ? 'bg-white text-[#002fbe] border-2 border-b-0 border-[#002fbe] shadow-2xs -mb-[1px] z-10'
                : 'bg-[#002fbe] text-white hover:bg-[#0028a3]'
            }`}
          >
            <Percent size={13} />
            <span>Discount & Social Data</span>
          </button>

          {/* Tab 4: Old Details */}
          <button
            type="button"
            onClick={() => {
              setSelectedSectionTab('old');
              setIsCollapsed(false);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-extrabold rounded-t-lg transition-all cursor-pointer ${
              selectedSectionTab === 'old'
                ? 'bg-white text-[#002fbe] border-2 border-b-0 border-[#002fbe] shadow-2xs -mb-[1px] z-10'
                : 'bg-[#002fbe] text-white hover:bg-[#0028a3]'
            }`}
          >
            <History size={13} />
            <span>Old Details</span>
          </button>
        </div>

        {/* Right Side: Valuation Method Selector Tabs (RV, CVM, Dual Method) */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => setActiveValuationMethod('rv')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-black rounded-t-lg transition-all cursor-pointer ${
              activeValuationMethod === 'rv'
                ? 'bg-white text-[#002fbe] border-2 border-b-0 border-[#002fbe] shadow-2xs -mb-[1px] z-10'
                : 'bg-[#002fbe] text-white hover:bg-[#0028a3]'
            }`}
          >
            <FileText size={13} />
            <span>Rateable Value (RV)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveValuationMethod('cvm')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-extrabold rounded-t-lg transition-all cursor-pointer ${
              activeValuationMethod === 'cvm'
                ? 'bg-white text-[#002fbe] border-2 border-b-0 border-[#002fbe] shadow-2xs -mb-[1px] z-10'
                : 'bg-[#002fbe] text-white hover:bg-[#0028a3]'
            }`}
          >
            <TrendingUp size={13} />
            <span>Capital Value Method (CVM)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveValuationMethod('dual')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-extrabold rounded-t-lg transition-all cursor-pointer ${
              activeValuationMethod === 'dual'
                ? 'bg-white text-[#002fbe] border-2 border-b-0 border-[#002fbe] shadow-2xs -mb-[1px] z-10'
                : 'bg-[#002fbe] text-white hover:bg-[#0028a3]'
            }`}
          >
            <Layers size={13} />
            <span>Dual Method View (RV + CVM)</span>
          </button>
        </div>
      </div>

      {/* Tab 1 Content: Wing Intelligence */}
      {selectedSectionTab === 'wing' && (
        <>
          {/* Section Header with Expand/Collapse & Legend */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 px-1 gap-2 select-none">
            <button
              type="button"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
              title={isCollapsed ? "Click to expand Wing Intelligence" : "Click to collapse Wing Intelligence"}
            >
              <div className="flex items-baseline gap-1.5">
                <h3 className="text-[12px] font-black text-[#1e2b58] group-hover:text-blue-600 tracking-tight uppercase transition-colors">
                  Wing Intelligence
                </h3>
                <span className="text-[9px] text-gray-500 font-bold hidden sm:inline">(Click any wing to load comparison)</span>
              </div>
              <span className="text-gray-400 group-hover:text-blue-600 transition-transform duration-200">
                <ChevronRight size={14} className={`transition-transform duration-200 ${isCollapsed ? 'rotate-0' : 'rotate-90'}`} />
              </span>
              {isCollapsed && (
                <span className="text-[9px] font-bold text-blue-600 bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded-full ml-1 animate-pulse">
                  Click to Expand ({wings.length} Wings)
                </span>
              )}
            </button>
            
            {/* Legend Row */}
            {!isCollapsed && (
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
            )}
          </div>

          {/* Horizontal row of Wing cards */}
          {!isCollapsed && (
            <div className="relative flex items-center transition-all duration-300">
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
                      onAmcClick={onAmcClick}
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
          )}
        </>
      )}

      {/* Tab 2 Content: Building Permission */}
      {selectedSectionTab === 'building' && (
        <div className="p-3 bg-blue-50/40 rounded-xl border border-blue-100 flex flex-col gap-2.5">
          <div className="flex items-center justify-between border-b border-blue-200/60 pb-1.5">
            <div className="flex items-center gap-2">
              <Building size={16} className="text-[#002fbe]" />
              <h4 className="font-black text-[#1e2b58] text-[12px] uppercase tracking-wide">Building Permission & BPMS Records</h4>
            </div>
            <span className="bg-emerald-100 text-emerald-800 font-extrabold text-[9px] px-2 py-0.5 rounded-full border border-emerald-300 flex items-center gap-1">
              <ShieldCheck size={11} /> Approved & Verified
            </span>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-2xs">
            <table className="w-full text-left text-[11px] border-collapse">
              <thead>
                <tr className="bg-slate-100/80 text-slate-700 font-extrabold text-[10px] uppercase border-b border-slate-200">
                  <th className="py-2 px-3">Permit No / Plan</th>
                  <th className="py-2 px-3">Sanction Date</th>
                  <th className="py-2 px-3">Approved Floors</th>
                  <th className="py-2 px-3">Sanctioned Area</th>
                  <th className="py-2 px-3 text-center">Status</th>
                  <th className="py-2 px-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-bold text-slate-800">
                <tr className="hover:bg-blue-50/30 transition-colors">
                  <td className="py-2 px-3 font-extrabold text-blue-700">BPMS-2024-00981</td>
                  <td className="py-2 px-3">14 Jan 2024</td>
                  <td className="py-2 px-3">Ground + 7 Floors</td>
                  <td className="py-2 px-3 text-emerald-700 font-extrabold">34,500.00 sq.ft</td>
                  <td className="py-2 px-3 text-center">
                    <span className="bg-emerald-50 text-emerald-700 text-[9.5px] px-2 py-0.5 rounded-full border border-emerald-200">Sanctioned</span>
                  </td>
                  <td className="py-2 px-3 text-center">
                    <button
                      onClick={() => handleOpenDrawer('building')}
                      className="p-1 hover:bg-blue-100 rounded-md text-blue-600 transition cursor-pointer"
                      title="Edit Building Permission"
                    >
                      <Pencil size={13} />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-blue-50/30 transition-colors">
                  <td className="py-2 px-3 font-extrabold text-blue-700">BPMS-2021-00432</td>
                  <td className="py-2 px-3">08 Mar 2021</td>
                  <td className="py-2 px-3">Ground + 4 Floors</td>
                  <td className="py-2 px-3 text-emerald-700 font-extrabold">22,100.00 sq.ft</td>
                  <td className="py-2 px-3 text-center">
                    <span className="bg-blue-50 text-blue-700 text-[9.5px] px-2 py-0.5 rounded-full border border-blue-200">Revised</span>
                  </td>
                  <td className="py-2 px-3 text-center">
                    <button
                      onClick={() => handleOpenDrawer('building')}
                      className="p-1 hover:bg-blue-100 rounded-md text-blue-600 transition cursor-pointer"
                      title="Edit Building Permission"
                    >
                      <Pencil size={13} />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-blue-50/30 transition-colors">
                  <td className="py-2 px-3 font-extrabold text-blue-700">CC-2019-00105</td>
                  <td className="py-2 px-3">20 Nov 2019</td>
                  <td className="py-2 px-3">Plinth Level CC</td>
                  <td className="py-2 px-3 text-emerald-700 font-extrabold">18,500.00 sq.ft</td>
                  <td className="py-2 px-3 text-center">
                    <span className="bg-slate-100 text-slate-700 text-[9.5px] px-2 py-0.5 rounded-full border border-slate-300">Commenced</span>
                  </td>
                  <td className="py-2 px-3 text-center">
                    <button
                      onClick={() => handleOpenDrawer('building')}
                      className="p-1 hover:bg-blue-100 rounded-md text-blue-600 transition cursor-pointer"
                      title="Edit Building Permission"
                    >
                      <Pencil size={13} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3 Content: Discount & Social Data */}
      {selectedSectionTab === 'discount' && (
        <div className="p-3 bg-emerald-50/40 rounded-xl border border-emerald-100 flex flex-col gap-2.5">
          <div className="flex items-center justify-between border-b border-emerald-200/60 pb-1.5">
            <div className="flex items-center gap-2">
              <Percent size={16} className="text-emerald-600" />
              <h4 className="font-black text-[#1e2b58] text-[12px] uppercase tracking-wide">Concessions, Discounts & Social Category Data</h4>
            </div>
            <span className="bg-blue-100 text-blue-800 font-extrabold text-[9px] px-2 py-0.5 rounded-full border border-blue-300 flex items-center gap-1">
              <Award size={11} /> 3 Active Incentives
            </span>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-2xs">
            <table className="w-full text-left text-[11px] border-collapse">
              <thead>
                <tr className="bg-slate-100/80 text-slate-700 font-extrabold text-[10px] uppercase border-b border-slate-200">
                  <th className="py-2 px-3">Incentive / Scheme</th>
                  <th className="py-2 px-3">Category</th>
                  <th className="py-2 px-3">Concession Rate</th>
                  <th className="py-2 px-3">Applicable Period</th>
                  <th className="py-2 px-3 text-center">Status</th>
                  <th className="py-2 px-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-bold text-slate-800">
                <tr className="hover:bg-emerald-50/30 transition-colors">
                  <td className="py-2 px-3 font-extrabold text-emerald-700">Solar Energy Rebate</td>
                  <td className="py-2 px-3">Green Building</td>
                  <td className="py-2 px-3 text-emerald-700 font-extrabold">5% Annual Discount</td>
                  <td className="py-2 px-3">2024 - 2026</td>
                  <td className="py-2 px-3 text-center">
                    <span className="bg-emerald-50 text-emerald-700 text-[9.5px] px-2 py-0.5 rounded-full border border-emerald-200">Active</span>
                  </td>
                  <td className="py-2 px-3 text-center">
                    <button
                      onClick={() => handleOpenDrawer('discount')}
                      className="p-1 hover:bg-emerald-100 rounded-md text-emerald-600 transition cursor-pointer"
                      title="Edit Discount & Social Data"
                    >
                      <Pencil size={13} />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-emerald-50/30 transition-colors">
                  <td className="py-2 px-3 font-extrabold text-blue-700">Senior Citizen Concession</td>
                  <td className="py-2 px-3">Social Category</td>
                  <td className="py-2 px-3 text-blue-700 font-extrabold">10% Tax Exemption</td>
                  <td className="py-2 px-3">Lifetime</td>
                  <td className="py-2 px-3 text-center">
                    <span className="bg-blue-50 text-blue-700 text-[9.5px] px-2 py-0.5 rounded-full border border-blue-200">Applied</span>
                  </td>
                  <td className="py-2 px-3 text-center">
                    <button
                      onClick={() => handleOpenDrawer('discount')}
                      className="p-1 hover:bg-emerald-100 rounded-md text-emerald-600 transition cursor-pointer"
                      title="Edit Discount & Social Data"
                    >
                      <Pencil size={13} />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-emerald-50/30 transition-colors">
                  <td className="py-2 px-3 font-extrabold text-emerald-700">Rainwater Harvesting</td>
                  <td className="py-2 px-3">Eco Infrastructure</td>
                  <td className="py-2 px-3 text-emerald-700 font-extrabold">3% General Rebate</td>
                  <td className="py-2 px-3">2023 - 2025</td>
                  <td className="py-2 px-3 text-center">
                    <span className="bg-emerald-50 text-emerald-700 text-[9.5px] px-2 py-0.5 rounded-full border border-emerald-200">Active</span>
                  </td>
                  <td className="py-2 px-3 text-center">
                    <button
                      onClick={() => handleOpenDrawer('discount')}
                      className="p-1 hover:bg-emerald-100 rounded-md text-emerald-600 transition cursor-pointer"
                      title="Edit Discount & Social Data"
                    >
                      <Pencil size={13} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4 Content: Old Details */}
      {selectedSectionTab === 'old' && (
        <div className="p-3 bg-amber-50/40 rounded-xl border border-amber-100 flex flex-col gap-2.5">
          <div className="flex items-center justify-between border-b border-amber-200/60 pb-1.5">
            <div className="flex items-center gap-2">
              <History size={16} className="text-amber-600" />
              <h4 className="font-black text-[#1e2b58] text-[12px] uppercase tracking-wide">Historical Tax & Property Legacy Records</h4>
            </div>
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[9px] px-2 py-0.5 rounded-full border border-amber-300 flex items-center gap-1">
              <FileText size={11} /> 2018-2023 Legacy
            </span>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-2xs">
            <table className="w-full text-left text-[11px] border-collapse">
              <thead>
                <tr className="bg-slate-100/80 text-slate-700 font-extrabold text-[10px] uppercase border-b border-slate-200">
                  <th className="py-2 px-3">Assessment Year</th>
                  <th className="py-2 px-3">Old Rateable Value (RV)</th>
                  <th className="py-2 px-3">Annual Tax</th>
                  <th className="py-2 px-3">Legacy Owner</th>
                  <th className="py-2 px-3 text-center">Status</th>
                  <th className="py-2 px-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-bold text-slate-800">
                <tr className="hover:bg-amber-50/30 transition-colors">
                  <td className="py-2 px-3 font-extrabold text-amber-800">2022 - 2023</td>
                  <td className="py-2 px-3 font-extrabold text-slate-900">₹16,20,000</td>
                  <td className="py-2 px-3 text-emerald-700 font-extrabold">₹18,500</td>
                  <td className="py-2 px-3">MATOSHREE BUILDERS</td>
                  <td className="py-2 px-3 text-center">
                    <span className="bg-emerald-50 text-emerald-700 text-[9.5px] px-2 py-0.5 rounded-full border border-emerald-200">Paid</span>
                  </td>
                  <td className="py-2 px-3 text-center">
                    <button
                      onClick={() => handleOpenDrawer('olddetails')}
                      className="p-1 hover:bg-amber-100 rounded-md text-amber-700 transition cursor-pointer"
                      title="Edit Old Details"
                    >
                      <Pencil size={13} />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-amber-50/30 transition-colors">
                  <td className="py-2 px-3 font-extrabold text-amber-800">2021 - 2022</td>
                  <td className="py-2 px-3 font-extrabold text-slate-900">₹14,50,000</td>
                  <td className="py-2 px-3 text-emerald-700 font-extrabold">₹16,200</td>
                  <td className="py-2 px-3">MATOSHREE BUILDERS</td>
                  <td className="py-2 px-3 text-center">
                    <span className="bg-emerald-50 text-emerald-700 text-[9.5px] px-2 py-0.5 rounded-full border border-emerald-200">Paid</span>
                  </td>
                  <td className="py-2 px-3 text-center">
                    <button
                      onClick={() => handleOpenDrawer('olddetails')}
                      className="p-1 hover:bg-amber-100 rounded-md text-amber-700 transition cursor-pointer"
                      title="Edit Old Details"
                    >
                      <Pencil size={13} />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-amber-50/30 transition-colors">
                  <td className="py-2 px-3 font-extrabold text-amber-800">2020 - 2021</td>
                  <td className="py-2 px-3 font-extrabold text-slate-900">₹12,80,000</td>
                  <td className="py-2 px-3 text-emerald-700 font-extrabold">₹14,800</td>
                  <td className="py-2 px-3">MATOSHREE BUILDERS</td>
                  <td className="py-2 px-3 text-center">
                    <span className="bg-slate-100 text-slate-700 text-[9.5px] px-2 py-0.5 rounded-full border border-slate-300">Archived</span>
                  </td>
                  <td className="py-2 px-3 text-center">
                    <button
                      onClick={() => handleOpenDrawer('olddetails')}
                      className="p-1 hover:bg-amber-100 rounded-md text-amber-700 transition cursor-pointer"
                      title="Edit Old Details"
                    >
                      <Pencil size={13} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
