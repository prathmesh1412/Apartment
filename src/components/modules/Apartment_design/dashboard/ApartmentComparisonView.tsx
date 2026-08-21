import React from 'react';
import { RotateCcw } from 'lucide-react';
import { Tabs, TabList, Tab, Select, Button } from '@/components/common';
import ComparisonTable from '@/components/modules/Apartment_design/comparison/ComparisonTable';

interface ApartmentComparisonViewProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedWing: string;
  setSelectedWing: (wing: string) => void;
  selectedFloor: string;
  setSelectedFloor: (floor: string) => void;
  areaPolicyThreshold: string;
  setAreaPolicyThreshold: (threshold: string) => void;
  diffFilter: string;
  setDiffFilter: (filter: string) => void;
  comparisonTableRef: React.RefObject<HTMLDivElement | null>;
  isDashboardExpanded: boolean;
  setIsDashboardExpanded: (expanded: boolean) => void;
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1 leading-none shrink-0">
      <div className={`w-1.5 h-1.5 rounded-full ${color} shrink-0`}></div>
      <span className="text-[8px] text-slate-700 font-extrabold uppercase tracking-wide whitespace-nowrap">{label}</span>
    </div>
  );
}

export default function ApartmentComparisonView({
  activeTab,
  setActiveTab,
  selectedWing,
  setSelectedWing,
  selectedFloor,
  setSelectedFloor,
  areaPolicyThreshold,
  setAreaPolicyThreshold,
  diffFilter,
  setDiffFilter,
  comparisonTableRef,
  isDashboardExpanded,
  setIsDashboardExpanded
}: ApartmentComparisonViewProps) {
  const [activeValuationSubTab, setActiveValuationSubTab] = React.useState<'rateable' | 'capital' | 'dual'>('rateable');

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-1 shrink-0" ref={comparisonTableRef}>
        <div className="flex flex-nowrap items-center justify-between border-b border-gray-150 px-3 py-1.5 gap-3 bg-white rounded-t-xl overflow-x-auto">
          {/* Fit-content tabs container */}
          <div className="bg-slate-100/90 p-1 rounded-full border border-slate-200/60 inline-flex items-center shrink-0">
            <Tabs 
              value={activeTab} 
              onChange={(val) => setActiveTab(val as string)} 
              variant="pills" 
              size="sm"
              activeTabClassName="bg-[#111c44] text-white font-extrabold shadow-xs"
            >
              <TabList className="bg-transparent p-0 gap-1 border-none">
                <Tab value="wing-overview" className="rounded-full px-3 py-1 text-[10.5px]">Wing Overview</Tab>
                <Tab value="floor-comparison" className="rounded-full px-3 py-1 text-[10.5px]">Floor / Unit Comparison</Tab>
              </TabList>
            </Tabs>
          </div>

          {/* Right-side Valuation Method Selector Pill */}
          <div className="flex items-center gap-1 bg-blue-50/80 p-1 rounded-full text-[10.5px] font-bold text-[#002fbe] shadow-2xs shrink-0 whitespace-nowrap border border-blue-200">
            <button
              type="button"
              onClick={() => setActiveValuationSubTab('rateable')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer text-[10px] font-black ${
                activeValuationSubTab === 'rateable'
                  ? 'bg-[#002fbe] text-white shadow-xs'
                  : 'text-[#002fbe] hover:bg-blue-100/60'
              }`}
            >
              Rateable Value (RV)
            </button>
            <button
              type="button"
              onClick={() => setActiveValuationSubTab('capital')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer text-[10px] font-black ${
                activeValuationSubTab === 'capital'
                  ? 'bg-[#002fbe] text-white shadow-xs'
                  : 'text-[#002fbe] hover:bg-blue-100/60'
              }`}
            >
              Capital Value Method (CVM)
            </button>
            <button
              type="button"
              onClick={() => setActiveValuationSubTab('dual')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer text-[10px] font-black ${
                activeValuationSubTab === 'dual'
                  ? 'bg-[#002fbe] text-white shadow-xs'
                  : 'text-[#002fbe] hover:bg-blue-100/60'
              }`}
            >
              Dual Method View (RV + CVM)
            </button>
          </div>
        </div>
        {activeTab === 'floor-comparison' && (
          <div className="flex flex-col gap-2.5 p-3 bg-gray-50/50 rounded-b-xl border-t border-gray-150">
            {/* Row 1: Filters on Left, Actions on Right */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 w-full">
              {/* 4 Dropdowns in one line */}
              <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                <div className="flex items-center gap-1 shrink-0 text-slate-700">
                  <span className="text-[8.5px] text-slate-600 font-extrabold uppercase whitespace-nowrap">Select Wing</span>
                  <Select 
                    value={selectedWing} 
                    onChange={(e, val) => setSelectedWing(val)}
                    options={[
                      { label: 'All Wings (67)', value: 'All Wings' },
                      { label: 'B Wing (19)', value: 'B Wing (19)' },
                      { label: 'A Wing (19)', value: 'A Wing (19)' },
                      { label: 'C Wing (15)', value: 'C Wing (15)' },
                      { label: 'D Wing (14)', value: 'D Wing (14)' },
                    ]}
                    selectSize="sm"
                    className="w-[115px] [&>button]:rounded-full [&>button]:h-[22px] [&>button]:px-2.5 [&>button]:py-0 [&>button]:border-slate-400 [&>button_span]:text-[10px] [&>button_span]:font-bold [&>button_svg]:w-3 [&>button_svg]:h-3 [&>button_svg]:ml-0.5 [&>ul]:min-w-[140px]"
                  />
                </div>

                <div className="flex items-center gap-1 shrink-0 text-slate-700">
                  <span className="text-[8.5px] text-slate-600 font-extrabold uppercase whitespace-nowrap">Select Floor</span>
                  <Select 
                    value={selectedFloor} 
                    onChange={(e, val) => setSelectedFloor(val)}
                    options={[
                      { label: 'All Floors', value: 'All Floors' },
                      { label: 'Ground Floor', value: 'Ground Floor' },
                      { label: '1st Floor', value: '1st Floor' },
                      { label: '2nd Floor', value: '2nd Floor' },
                    ]}
                    selectSize="sm"
                    className="w-[95px] [&>button]:rounded-full [&>button]:h-[22px] [&>button]:px-2.5 [&>button]:py-0 [&>button]:border-slate-400 [&>button_span]:text-[10px] [&>button_span]:font-bold [&>button_svg]:w-3 [&>button_svg]:h-3 [&>button_svg]:ml-0.5 [&>ul]:min-w-[130px]"
                  />
                </div>

                {/* Policy Area Deviation Filter */}
                <div className="flex items-center gap-1 shrink-0 text-slate-700">
                  <span className="text-[8.5px] text-slate-600 font-extrabold uppercase whitespace-nowrap">Policy Area Δ</span>
                  <Select 
                    value={areaPolicyThreshold} 
                    onChange={(e, val) => setAreaPolicyThreshold(val)}
                    options={[
                      { label: 'All Deviations', value: 'all' },
                      { label: '> 5% Area Diff', value: '5' },
                      { label: '> 10% Area Diff', value: '10' },
                      { label: '> 20% Area Diff', value: '20' },
                    ]}
                    selectSize="sm"
                    className="w-[115px] [&>button]:rounded-full [&>button]:h-[22px] [&>button]:px-2.5 [&>button]:py-0 [&>button]:border-slate-400 [&>button_span]:text-[10px] [&>button_span]:font-bold [&>button_svg]:w-3 [&>button_svg]:h-3 [&>button_svg]:ml-0.5 [&>ul]:min-w-[140px]"
                  />
                </div>

                {/* Diff Category Filter */}
                <div className="flex items-center gap-1 shrink-0 text-slate-700">
                  <span className="text-[8.5px] text-slate-600 font-extrabold uppercase whitespace-nowrap">Filter Diff</span>
                  <Select 
                    value={diffFilter} 
                    onChange={(e, val) => setDiffFilter(val)}
                    options={[
                      { label: 'All Differences', value: 'all' },
                      { label: 'Carpet Diff Only', value: 'carpet' },
                      { label: 'BUA Diff Only', value: 'bua' },
                      { label: 'RV Diff Only', value: 'rv' },
                      { label: 'Tax Diff Only', value: 'tax' },
                    ]}
                    selectSize="sm"
                    className="w-[120px] [&>button]:rounded-full [&>button]:h-[22px] [&>button]:px-2.5 [&>button]:py-0 [&>button]:border-slate-400 [&>button_span]:text-[10px] [&>button_span]:font-bold [&>button_svg]:w-3 [&>button_svg]:h-3 [&>button_svg]:ml-0.5 [&>ul]:min-w-[150px]"
                  />
                </div>

                {/* Legend Items */}
                <div className="h-3.5 w-px bg-gray-250 mx-1 shrink-0 hidden xl:block" />
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 select-none">
                  <LegendItem color="bg-green-500" label="Matched" />
                  <LegendItem color="bg-amber-500" label="Modified" />
                  <LegendItem color="bg-blue-500" label="New" />
                  <LegendItem color="bg-red-500" label="Missing" />
                  <LegendItem color="bg-purple-500" label="Eligible for Discount" />
                  <LegendItem color="bg-teal-500" label="Exempted" />
                </div>
              </div>

              {/* Actions on Right: Restore All Tables */}
              <div className="flex items-center gap-2 select-none shrink-0 lg:ml-auto">
                <button
                  type="button"
                  onClick={() => {
                    if (setSelectedWing) setSelectedWing("All Wings");
                    if (setSelectedFloor) setSelectedFloor("All Floors");
                    if (setDiffFilter) setDiffFilter("All");
                    if (setAreaPolicyThreshold) setAreaPolicyThreshold("5");
                    window.dispatchEvent(new CustomEvent('restore-all-tables'));
                  }}
                  className="flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-slate-50 border border-[#002fbe]/30 text-[#002fbe] rounded-full font-extrabold text-[10px] shadow-2xs hover:shadow-xs cursor-pointer transition-all h-7"
                  title="Restore all tables and default filters"
                >
                  <RotateCcw size={12} />
                  <span>Restore All Tables</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <ComparisonTable 
        selectedWing={selectedWing} 
        selectedFloor={selectedFloor}
        areaPolicyThreshold={areaPolicyThreshold}
        diffFilter={diffFilter}
        activeTab={activeTab}
      />

      {/* Headwise Taxes Comparison embedded below table in floor-comparison mode */}
      {activeTab === 'floor-comparison' && (
        <div className="w-full flex flex-col bg-white p-3 border border-gray-200 rounded-xl shadow-xs mt-1.5 shrink-0">
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-gray-150 h-[34px] shrink-0 select-none">
            <div className="flex items-center gap-1.5">
              <h3 className="font-extrabold text-[#002fbe] text-[10.5px] uppercase tracking-wider leading-none">HEADWISE TAXES COMPARISON</h3>
              <span className="text-gray-500 text-[8px] font-bold leading-none">(All Floors Total)</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-50/75 text-gray-500 border border-gray-200/50 px-2.5 py-0.5 rounded-full text-[7.5px] font-semibold leading-none">
              <span>All figures in INR</span>
            </div>
          </div>
          <div className="relative border border-[#002fbe]/15 rounded-md overflow-hidden bg-white">
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-[10px] text-center border-collapse">
                <thead className="bg-[#002fbe] border-b border-[#002fbe]/15 text-white font-bold whitespace-nowrap">
                  <tr>
                    <th className="py-2 px-2 text-left sticky left-0 bg-[#002fbe] border-r border-white/10 uppercase text-[8px] font-extrabold z-20 text-white">TAXES</th>
                    <th className="py-2 px-2 border-r border-white/10 uppercase text-[8px] font-extrabold leading-tight text-white">GENERAL TAX</th>
                    <th className="py-2 px-2 border-r border-white/10 uppercase text-[8px] font-extrabold leading-tight text-white">STATE EDUCATION TAX</th>
                    <th className="py-2 px-2 border-r border-white/10 uppercase text-[8px] font-extrabold leading-tight text-white">TREE CESS</th>
                    <th className="py-2 px-2 border-r border-white/10 uppercase text-[8px] font-extrabold leading-tight text-white">SPECIAL WATER CESS</th>
                    <th className="py-2 px-2 border-r border-white/10 uppercase text-[8px] font-extrabold leading-tight text-white">ROAD CESS</th>
                    <th className="py-2 px-2 border-r border-white/10 uppercase text-[8px] font-extrabold leading-tight text-white">FIRE CESS</th>
                    <th className="py-2 px-2 border-r border-white/10 uppercase text-[8px] font-extrabold leading-tight text-white">LIGHT CESS</th>
                    <th className="py-2 px-2 border-r border-white/10 uppercase text-[8px] font-extrabold leading-tight text-white">WATER BENEFIT CESS</th>
                    <th className="py-2 px-2 border-r border-white/10 uppercase text-[8px] font-extrabold leading-tight text-white">SEWAGE DISPOSAL CESS</th>
                    <th className="py-2 px-2 uppercase text-[8px] font-extrabold leading-tight text-white">SPECIAL EDUCATION TAX</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 font-medium text-[#1e2b58] whitespace-nowrap bg-white text-center">
                  <tr className="bg-white hover:bg-slate-50 transition-colors duration-150">
                    <td className="py-1.5 px-2 text-left sticky left-0 bg-white border-r border-gray-200 z-10">
                      <span className="text-blue-600 text-[8.5px] font-black uppercase tracking-wider pl-1">OLD TAXES</span>
                    </td>
                    <td className="py-1.5 px-2 border-r border-gray-200 text-slate-800 font-bold">0</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 text-slate-800 font-bold">0</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 text-slate-800 font-bold">0</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 text-slate-800 font-bold">0</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 text-slate-800 font-bold">0</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 text-slate-800 font-bold">0</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 text-slate-800 font-bold">0</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 text-slate-800 font-bold">0</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 text-slate-800 font-bold">0</td>
                    <td className="py-1.5 px-2 text-slate-800 font-bold">0</td>
                  </tr>
                  <tr className="bg-slate-50/40 hover:bg-slate-50 transition-colors duration-150">
                    <td className="py-1.5 px-2 text-left sticky left-0 bg-[#fbfdff] border-r border-gray-200 z-10">
                      <span className="text-blue-700 text-[8.5px] font-black uppercase tracking-wider pl-1">RV TAXES</span>
                    </td>
                    <td className="py-1.5 px-2 border-r border-gray-200 font-bold text-slate-800 tabular-nums">33,480</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 font-bold text-slate-800 tabular-nums">6,480</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 font-bold text-slate-800 tabular-nums">1,080</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 font-bold text-slate-800 tabular-nums">2,160</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 font-bold text-slate-800 tabular-nums">6,480</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 font-bold text-slate-800 tabular-nums">1,080</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 font-bold text-slate-800 tabular-nums">10,800</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 font-bold text-slate-800 tabular-nums">18,360</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 font-bold text-slate-800 tabular-nums">15,120</td>
                    <td className="py-1.5 px-2 font-bold text-slate-800 tabular-nums">3,240</td>
                  </tr>
                  <tr className="bg-purple-50/20 hover:bg-purple-50/40 transition-colors duration-150 font-bold">
                    <td className="py-1.5 px-2 text-left sticky left-0 bg-[#fcfbfe] border-r border-gray-200 z-10">
                      <span className="text-purple-700 text-[8.5px] font-black uppercase tracking-wider pl-1">CV TAXES</span>
                    </td>
                    <td className="py-1.5 px-2 border-r border-gray-200 font-bold text-slate-800 tabular-nums">1,53,47,12,291</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 font-bold text-slate-800 tabular-nums">41,80,17,898</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 font-bold text-slate-800 tabular-nums">27,86,78,598</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 font-bold text-slate-800 tabular-nums">27,86,78,598</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 font-bold text-slate-800 tabular-nums">27,86,78,598</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 font-bold text-slate-800 tabular-nums">27,86,78,598</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 font-bold text-slate-800 tabular-nums">27,86,78,598</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 font-bold text-slate-800 tabular-nums">34,83,48,248</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 font-bold text-slate-800 tabular-nums">34,83,48,248</td>
                    <td className="py-1.5 px-2 font-bold text-slate-800 tabular-nums">27,86,78,598</td>
                  </tr>
                  <tr className="bg-white hover:bg-slate-50 transition-colors duration-150">
                    <td className="py-1.5 px-2 text-left sticky left-0 bg-[#fffdfd] border-r border-gray-200 z-10">
                      <span className="text-red-600 text-[8.5px] font-black uppercase tracking-wider pl-1">RETAIN U.S. 129</span>
                    </td>
                    <td className="py-1.5 px-2 border-r border-gray-200 text-slate-800 font-bold">0</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 text-slate-800 font-bold">0</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 text-slate-800 font-bold">0</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 text-slate-800 font-bold">0</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 text-slate-800 font-bold">0</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 text-slate-800 font-bold">0</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 text-slate-800 font-bold">0</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 text-slate-800 font-bold">0</td>
                    <td className="py-1.5 px-2 border-r border-gray-200 text-slate-800 font-bold">0</td>
                    <td className="py-1.5 px-2 text-slate-800 font-bold">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
