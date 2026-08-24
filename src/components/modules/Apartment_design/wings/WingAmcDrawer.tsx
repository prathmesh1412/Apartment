import React, { useState } from 'react';
import { X, Building2, ChevronDown, Check, Info } from 'lucide-react';
import { WingDetails } from '@/components/modules/Apartment_design/shared/mockData';

interface WingAmcDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wing: WingDetails | null;
}

export default function WingAmcDrawer({ isOpen, onClose, wing }: WingAmcDrawerProps) {
  const [assessmentYear, setAssessmentYear] = useState('2026-27');

  if (!isOpen || !wing) return null;

  const wingLetter = wing.id || 'A';
  const wingName = wing.wing || `${wingLetter} Wing`;
  const blockName = wing.name || 'Krishna Block';
  const totalProps = wing.units || 19;
  const floorsText = wing.floors || 'G + 7 Floors';

  // Mock calculation values based on wing
  const demandTotal = wingLetter === 'A' ? '₹1,12,770' : wingLetter === 'B' ? '₹1,08,240' : wingLetter === 'C' ? '₹94,120' : '₹88,500';
  const collectionTotal = wingLetter === 'A' ? '₹38,529' : wingLetter === 'B' ? '₹35,120' : wingLetter === 'C' ? '₹31,400' : '₹28,900';
  const collectionPct = wingLetter === 'A' ? '34.2%' : wingLetter === 'B' ? '32.5%' : wingLetter === 'C' ? '33.4%' : '32.6%';
  const balanceTotal = wingLetter === 'A' ? '₹74,241' : wingLetter === 'B' ? '₹73,120' : wingLetter === 'C' ? '₹62,720' : '₹59,600';
  const discountTotal = wingLetter === 'A' ? '₹5,391' : wingLetter === 'B' ? '₹4,820' : wingLetter === 'C' ? '₹3,950' : '₹3,100';

  const currentDemand = wingLetter === 'A' ? '₹43,920' : wingLetter === 'B' ? '₹43,920' : wingLetter === 'C' ? '₹43,920' : '₹40,220';
  const retroDemand = wingLetter === 'A' ? '₹68,850' : wingLetter === 'B' ? '₹64,240' : wingLetter === 'C' ? '₹48,560' : '₹42,390';

  // Discount breakdowns
  const discountsAppliedList = [
    { id: 1, title: 'Early Payment Rebate', subtitle: '12 properties - 5% rate', amount: '₹3,150', code: 'Early Payment' },
    { id: 2, title: 'Women Ownership Benefit', subtitle: '4 properties - eligible share', amount: '₹1,241', code: 'Women Ownership' },
    { id: 3, title: 'Green Building Incentive', subtitle: '3 properties - fixed benefit', amount: '₹1,000', code: 'Green Building' },
  ];

  // Unit-wise discount list
  const unitDiscounts = [
    { prop: `${wingLetter}/101`, owner: 'Matoshree Builders', type: 'Residential', tag: 'Early Payment', tagBg: 'bg-amber-100 text-amber-800 border-amber-300', rule: '5% payment rebate', amount: '₹750' },
    { prop: `${wingLetter}/104`, owner: 'Patil Family', type: 'Residential', tag: 'Women Ownership', tagBg: 'bg-orange-100 text-orange-800 border-orange-300', rule: 'Female ownership benefit', amount: '₹641' },
    { prop: `${wingLetter}/105`, owner: 'Shine Traders', type: 'Commercial', tag: 'Early Payment', tagBg: 'bg-amber-100 text-amber-800 border-amber-300', rule: '5% payment rebate', amount: '₹1,000' },
    { prop: `${wingLetter}/701`, owner: 'Society Office', type: 'Amenity', tag: 'Green Building', tagBg: 'bg-emerald-100 text-emerald-800 border-emerald-300', rule: 'Green certified block', amount: '₹1,000' },
    { prop: `${wingLetter}/802`, owner: 'Kulkarni Family', type: 'Residential', tag: 'Early Payment', tagBg: 'bg-amber-100 text-amber-800 border-amber-300', rule: '5% payment rebate', amount: '₹920' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans select-none">
      {/* Dimmed Overlay Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md xl:max-w-lg bg-white border-l border-gray-200 shadow-2xl flex flex-col justify-between animate-slideLeft">
          
          {/* 1. Header */}
          <div className="p-4 border-b border-gray-200 bg-white flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#002fbe] flex items-center justify-center shrink-0">
                <Building2 size={20} />
              </div>
              <div>
                <h2 className="text-base font-black text-slate-900 leading-tight">
                  {wingName} - AMC Details
                </h2>
                <div className="text-[11px] text-gray-500 font-bold mt-0.5">
                  {blockName} • {totalProps} properties • {floorsText}
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition cursor-pointer"
              title="Close Drawer"
            >
              <X size={16} />
            </button>
          </div>

          {/* 2. Scrollable Body Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-slate-800 text-[11px] bg-slate-50/40 no-scrollbar">
            
            {/* Assessment Year Filter */}
            <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-2.5 shadow-2xs">
              <span className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">ASSESSMENT YEAR</span>
              <div className="relative">
                <select
                  value={assessmentYear}
                  onChange={(e) => setAssessmentYear(e.target.value)}
                  className="appearance-none bg-blue-50/80 hover:bg-blue-100/70 border border-blue-200 font-black text-[#002fbe] text-[11px] py-1 pl-3 pr-7 rounded-lg cursor-pointer outline-none transition"
                >
                  <option value="2026-27">2026-27</option>
                  <option value="2025-26">2025-26</option>
                  <option value="2024-25">2024-25</option>
                </select>
                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#002fbe] pointer-events-none" />
              </div>
            </div>

            {/* 4 Summary Stat Box Cards */}
            <div className="grid grid-cols-2 gap-2.5">
              {/* TOTAL DEMAND */}
              <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-2xs flex flex-col justify-between">
                <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider">TOTAL DEMAND</span>
                <span className="text-lg font-black text-slate-900 mt-1 leading-none">{demandTotal}</span>
                <span className="text-[8.5px] font-bold text-gray-500 mt-1">Current + Retro demand</span>
              </div>

              {/* COLLECTION */}
              <div className="bg-white border border-emerald-200 rounded-xl p-3 shadow-2xs flex flex-col justify-between bg-emerald-50/20">
                <span className="text-[9px] font-extrabold text-emerald-700 uppercase tracking-wider">COLLECTION</span>
                <span className="text-lg font-black text-emerald-600 mt-1 leading-none">{collectionTotal}</span>
                <span className="text-[8.5px] font-extrabold text-emerald-600 mt-1">{collectionPct} Realized</span>
              </div>

              {/* BALANCE */}
              <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-2xs flex flex-col justify-between">
                <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider">BALANCE</span>
                <span className="text-lg font-black text-slate-900 mt-1 leading-none">{balanceTotal}</span>
                <span className="text-[8.5px] font-bold text-gray-500 mt-1">Outstanding amount</span>
              </div>

              {/* DISCOUNTS APPLIED */}
              <div className="bg-white border border-amber-200 rounded-xl p-3 shadow-2xs flex flex-col justify-between bg-amber-50/20">
                <span className="text-[9px] font-extrabold text-amber-700 uppercase tracking-wider">DISCOUNTS APPLIED</span>
                <span className="text-lg font-black text-amber-600 mt-1 leading-none">{discountTotal}</span>
                <span className="text-[8.5px] font-bold text-amber-600 mt-1">3 discount rules</span>
              </div>
            </div>

            {/* COLLECTION POSITION BAR CARD */}
            <div className="bg-white border border-gray-200 rounded-xl p-3.5 shadow-2xs space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10.5px] font-black text-slate-900 uppercase tracking-wider">COLLECTION POSITION</span>
                <span className="text-[9.5px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">{collectionPct} RECOVERY</span>
              </div>

              {/* Progress track */}
              <div>
                <div className="flex justify-between text-[9px] font-extrabold text-gray-500 mb-1">
                  <span>Demand recovery</span>
                  <span className="text-emerald-700 font-black">{collectionTotal} / {demandTotal}</span>
                </div>
                <div className="w-full bg-gray-150 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: collectionPct }} />
                </div>
              </div>

              {/* Split current vs retro demand */}
              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-gray-100">
                <div className="bg-slate-50 p-2 rounded-lg border border-gray-150">
                  <span className="text-[8.5px] font-extrabold text-gray-400 uppercase tracking-wider block">CURRENT DEMAND</span>
                  <span className="text-xs font-black text-slate-800 mt-0.5 block">{currentDemand}</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg border border-gray-150">
                  <span className="text-[8.5px] font-extrabold text-gray-400 uppercase tracking-wider block">RETRO DEMAND</span>
                  <span className="text-xs font-black text-[#002fbe] mt-0.5 block">{retroDemand}</span>
                </div>
              </div>
            </div>

            {/* APPLIED DISCOUNT DETAILS */}
            <div className="bg-white border border-gray-200 rounded-xl p-3.5 shadow-2xs space-y-3">
              <div className="flex items-center justify-between pb-1.5 border-b border-gray-100">
                <span className="text-[10.5px] font-black text-slate-900 uppercase tracking-wider">APPLIED DISCOUNT DETAILS</span>
                <span className="text-[9.5px] font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">{discountTotal} TOTAL</span>
              </div>

              <div className="space-y-2">
                {discountsAppliedList.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-amber-50/40 p-2.5 rounded-xl border border-amber-150/70">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-black text-[10px] flex items-center justify-center shrink-0 border border-amber-300">
                        {item.id}
                      </div>
                      <div>
                        <div className="font-extrabold text-slate-800 text-[10.5px]">{item.title}</div>
                        <div className="text-[9px] text-gray-500 font-bold">{item.subtitle}</div>
                      </div>
                    </div>
                    <span className="font-black text-emerald-700 text-xs">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* UNIT WISE DISCOUNT APPLIED PROPERTIES TABLE */}
            <div className="bg-white border border-gray-200 rounded-xl p-3.5 shadow-2xs space-y-2.5">
              <div className="flex items-center justify-between pb-1.5 border-b border-gray-100">
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-wider">UNIT WISE DISCOUNT APPLIED PROPERTIES</span>
                <span className="text-[9px] font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">5 PROPERTIES</span>
              </div>

              <div className="overflow-x-auto no-scrollbar border border-gray-150 rounded-lg">
                <table className="w-full text-left border-collapse text-[9.5px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-gray-200 text-gray-500 font-black uppercase text-[8px] h-7">
                      <th className="px-2 py-1">PROP / UNIT</th>
                      <th className="px-2 py-1">OWNER / USE</th>
                      <th className="px-2 py-1">TYPE</th>
                      <th className="px-2 py-1">DISCOUNT RULE</th>
                      <th className="px-2 py-1 text-right">AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 font-semibold text-slate-700">
                    {unitDiscounts.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/60 h-8">
                        <td className="px-2 py-1">
                          <div className="font-black text-slate-900">{row.prop}</div>
                          <div className="text-[8px] text-gray-400 font-bold">{wingName}</div>
                        </td>
                        <td className="px-2 py-1">
                          <div className="font-bold text-slate-800 text-[9px]">{row.owner}</div>
                          <div className="text-[8px] text-gray-400 font-medium">{row.type}</div>
                        </td>
                        <td className="px-2 py-1">
                          <span className={`text-[7.5px] font-black px-1.5 py-0.25 rounded border whitespace-nowrap ${row.tagBg}`}>
                            {row.tag}
                          </span>
                        </td>
                        <td className="px-2 py-1 text-[8.5px] text-slate-600 font-medium">{row.rule}</td>
                        <td className="px-2 py-1 text-right font-black text-emerald-600">{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* EXEMPTION POSITION CARD */}
            <div className="bg-white border border-gray-200 rounded-xl p-3.5 shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-wider">EXEMPTION POSITION</span>
                <span className="text-[9.5px] font-black text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">₹2,540</span>
              </div>
              
              <div className="flex items-center justify-between bg-purple-50/30 p-2 rounded-lg border border-purple-150">
                <div className="text-[10px] text-purple-900 font-bold">
                  2 exempt properties / units
                </div>
                <span className="font-black text-purple-800 text-xs">₹2,540</span>
              </div>
              <p className="text-[8.5px] text-blue-600 font-extrabold flex items-center gap-1 cursor-pointer hover:underline">
                <Info size={11} /> Click the Exemption section on the wing card to view units with exempted properties.
              </p>
            </div>

          </div>

          {/* 3. Sticky Bottom Action Buttons */}
          <div className="p-3 border-t border-gray-200 bg-white flex items-center gap-2 shrink-0 shadow-lg">
            <button
              onClick={onClose}
              className="flex-1 py-2 px-3 border border-gray-300 hover:bg-slate-50 text-slate-700 font-extrabold text-[11px] rounded-xl uppercase tracking-wider transition cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                alert(`Viewing full AMC Ledger for ${wingName}`);
              }}
              className="flex-[2] py-2 px-3 bg-[#002fbe] hover:bg-[#002288] text-white font-extrabold text-[11px] rounded-xl uppercase tracking-wider transition shadow-sm cursor-pointer"
            >
              View Detailed AMC Ledger
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
