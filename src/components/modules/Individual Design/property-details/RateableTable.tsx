import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Pencil } from 'lucide-react';

export function RateableTable() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggleRow = (rowNum: number) => {
    setExpandedRow(prev => prev === rowNum ? null : rowNum);
  };

  const renderExpandedSubRow = (taxableVal: string, floorName: string, carpetVal: string, buaVal: string) => (
    <tr className="bg-sky-50/70 border-b border-blue-200 animate-fadeIn">
      <td colSpan={21} className="py-2 px-4 text-left">
        {/* Cess breakdown pills */}
        <div className="flex flex-wrap items-center gap-1.5 text-[9.5px]">
          <span className="px-2.5 py-1 rounded-md bg-white border border-blue-300 text-blue-700 font-bold shadow-2xs">General Tax: ₹ 0.00</span>
          <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-300 text-emerald-700 font-bold shadow-2xs">Tree Cess: ₹ 0.00</span>
          <span className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-300 text-blue-700 font-bold shadow-2xs">Special Water Cess: ₹ 0.00</span>
          <span className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-300 text-gray-700 font-bold shadow-2xs">Road Cess: ₹ 0.00</span>
          <span className="px-2.5 py-1 rounded-md bg-rose-50 border border-rose-300 text-rose-700 font-bold shadow-2xs">Fire Cess: ₹ 0.00</span>
          <span className="px-2.5 py-1 rounded-md bg-amber-50 border border-amber-300 text-amber-700 font-bold shadow-2xs">Light Cess: ₹ 0.00</span>
          <span className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-300 text-blue-700 font-bold shadow-2xs">Water Benefit Cess: ₹ 0.00</span>
          <span className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-300 text-gray-700 font-bold shadow-2xs">Sewage Disposal Cess: ₹ 0.00</span>
          <span className="px-2.5 py-1 rounded-md bg-purple-50 border border-purple-300 text-purple-700 font-bold shadow-2xs">Special Education Tax: ₹ 0.00</span>
        </div>
      </td>
    </tr>
  );

  return (
    <table className="w-full text-[10px] text-center border-collapse animate-fadeIn bg-white table-auto">
      <thead className="bg-[#002fbe] text-white font-extrabold whitespace-nowrap sticky top-0 z-20">
        <tr>
          <th className="py-2.5 px-1.5 font-extrabold text-white w-7 border-r border-white/10 text-[8.5px] uppercase sticky left-0 bg-[#002fbe] z-30">#</th>
          <th className="py-2.5 px-1.5 w-14 border-r border-white/10 font-bold uppercase tracking-wider text-[8.5px]">Taxable</th>
          <th className="py-2.5 px-1.5 w-24 border-r border-white/10 font-bold uppercase tracking-wider text-[8.5px]">Floor</th>
          <th className="py-2.5 px-1.5 w-20 border-r border-white/10 font-bold uppercase tracking-wider text-[8.5px]">Use</th>
          <th className="py-2.5 px-1.5 w-28 border-r border-white/10 font-bold uppercase tracking-wider text-[8.5px]">Sub Type</th>
          <th className="py-2.5 px-1.5 w-16 border-r border-white/10 font-bold uppercase tracking-wider text-[8.5px]">Rooms / Units</th>
          <th className="py-2.5 px-1.5 w-32 border-r border-white/10 font-bold uppercase tracking-wider text-[8.5px]">Carpet Area (ft/mtr)</th>
          <th className="py-2.5 px-1.5 w-32 border-r border-white/10 font-bold uppercase tracking-wider text-[8.5px]">Built-up Area (ft/mtr)</th>
          <th className="py-2.5 px-1.5 w-32 border-r border-white/10 font-bold uppercase tracking-wider text-[8.5px]">Rateable Value (₹)</th>
          <th className="py-2.5 px-1.5 w-32 border-r border-white/10 font-bold uppercase tracking-wider text-[8.5px]">Tax (Current) (₹)</th>
          <th className="py-2.5 px-1.5 w-20 border-r border-white/10 font-bold uppercase tracking-wider text-[8.5px]">Actions</th>
          <th className="py-2.5 px-1.5 w-14 border-r border-white/10 font-bold uppercase tracking-wider text-[8.5px]">Taxable</th>
          <th className="py-2.5 px-1.5 w-24 border-r border-white/10 font-bold uppercase tracking-wider text-[8.5px]">Floor</th>
          <th className="py-2.5 px-1.5 w-20 border-r border-white/10 font-bold uppercase tracking-wider text-[8.5px]">Use</th>
          <th className="py-2.5 px-1.5 w-28 border-r border-white/10 font-bold uppercase tracking-wider text-[8.5px]">Sub Type</th>
          <th className="py-2.5 px-1.5 w-16 border-r border-white/10 font-bold uppercase tracking-wider text-[8.5px]">Rooms / Units</th>
          <th className="py-2.5 px-1.5 w-32 border-r border-white/10 font-bold uppercase tracking-wider text-[8.5px]">Carpet Area (ft/mtr)</th>
          <th className="py-2.5 px-1.5 w-32 border-r border-white/10 font-bold uppercase tracking-wider text-[8.5px]">Built-up Area (ft/mtr)</th>
          <th className="py-2.5 px-1.5 w-32 border-r border-white/10 font-bold uppercase tracking-wider text-[8.5px]">Rateable Value (₹)</th>
          <th className="py-2.5 px-1.5 w-32 border-r border-white/10 font-bold uppercase tracking-wider text-[8.5px]">Tax (Current) (₹)</th>
          <th className="py-2.5 px-1.5 w-20 font-bold uppercase tracking-wider text-[8.5px]">Actions</th>
        </tr>
      </thead>
      <tbody className="font-medium text-gray-700 whitespace-nowrap bg-white text-center">
        <tr className="hover:bg-gray-50/50 border-b border-gray-200">
          <td className="py-2 px-1.5 text-gray-400 font-bold border-r border-gray-200 sticky left-0 bg-white z-10 whitespace-nowrap">
            <div className="flex items-center justify-center gap-1">
              <button
                type="button"
                onClick={() => toggleRow(1)}
                className={`w-4 h-4 rounded border flex items-center justify-center cursor-pointer transition-colors shadow-2xs ${expandedRow === 1 ? 'border-blue-500 bg-blue-600 text-white' : 'border-blue-300 bg-white hover:bg-blue-50 text-blue-600'}`}
                title="Expand row details"
              >
                {expandedRow === 1 ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
              </button>
              <button
                type="button"
                className="w-4 h-4 rounded border border-blue-300 bg-white hover:bg-blue-50 text-blue-600 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
                title="Edit floor row"
              >
                <Pencil size={9} />
              </button>
            </div>
          </td>
          <td className="py-2 px-2 text-red-500 font-extrabold border-r border-gray-200 text-[9.5px]">No</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Open Plot</td>
          <td className="py-2 px-2 text-gray-400 font-extrabold border-r border-gray-200 text-[9.5px]">-</td>
          <td className="py-2 px-2 text-gray-400 font-extrabold border-r border-gray-200 text-[9.5px]">-</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">0</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">0.00 / 0.00</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">0.00 / 0.00</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">0</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">0</td>
          <td className="py-2 px-2 border-r border-gray-200 text-center"><span className="bg-gray-100 text-gray-400 rounded px-2.5 py-0.5 text-[8.5px] font-extrabold border border-gray-200">NA</span></td>
          <td className="py-2 px-2 text-red-500 font-extrabold border-r border-gray-200 text-[9.5px]">No</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Open Plot</td>
          <td className="py-2 px-2 text-gray-400 font-extrabold border-r border-gray-200 text-[9.5px]">-</td>
          <td className="py-2 px-2 text-gray-400 font-extrabold border-r border-gray-200 text-[9.5px]">-</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">0</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">0.00 / 0.00</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">0.00 / 0.00</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">0</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">0</td>
          <td className="py-2 px-2 border-r border-gray-200 text-center"><span className="bg-gray-100 text-gray-400 rounded px-2.5 py-0.5 text-[8.5px] font-extrabold border border-gray-200">NA</span></td>
        </tr>
        {expandedRow === 1 && renderExpandedSubRow("No", "Open Plot", "0.00 / 0.00", "0.00 / 0.00")}
        <tr className="hover:bg-gray-50/50 border-b border-gray-200">
          <td className="py-2 px-1.5 text-gray-400 font-bold border-r border-gray-200 sticky left-0 bg-white z-10 whitespace-nowrap">
            <div className="flex items-center justify-center gap-1">
              <button
                type="button"
                onClick={() => toggleRow(2)}
                className={`w-4 h-4 rounded border flex items-center justify-center cursor-pointer transition-colors shadow-2xs ${expandedRow === 2 ? 'border-blue-500 bg-blue-600 text-white' : 'border-blue-300 bg-white hover:bg-blue-50 text-blue-600'}`}
                title="Expand row details"
              >
                {expandedRow === 2 ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
              </button>
              <button
                type="button"
                className="w-4 h-4 rounded border border-blue-300 bg-white hover:bg-blue-50 text-blue-600 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
                title="Edit floor row"
              >
                <Pencil size={9} />
              </button>
            </div>
          </td>
          <td className="py-2 px-2 text-green-600 font-extrabold border-r border-gray-200 text-[9.5px]">Yes</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Ground Floor</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold font-sans border-r border-gray-200 text-[9.5px]">व्यवसायिक</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Shop</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">2</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">120.50 / 11.20</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">135.75 / 12.62</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 1,20,500</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 18,752</td>
          <td className="py-2 px-2 border-r border-gray-200 text-center"><span className="bg-[#ecfdf5] text-[#10b981] rounded px-2.5 py-0.5 text-[8.5px] font-extrabold border border-[#10b981]/20">Verified</span></td>
          <td className="py-2 px-2 text-green-600 font-extrabold border-r border-gray-200 text-[9.5px]">Yes</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Ground Floor</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold font-sans border-r border-gray-200 text-[9.5px]">व्यवसायिक</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Shop</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">2</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">120.50 / 11.20</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">135.75 / 12.62</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 1,20,500</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 18,752</td>
          <td className="py-2 px-2 border-r border-gray-200 text-center"><span className="bg-[#ecfdf5] text-[#10b981] rounded px-2.5 py-0.5 text-[8.5px] font-extrabold border border-[#10b981]/20">Verified</span></td>
        </tr>
        {expandedRow === 2 && renderExpandedSubRow("Yes", "Ground Floor", "120.50 / 11.20", "135.75 / 12.62")}
        <tr className="hover:bg-gray-50/50 border-b border-gray-200">
          <td className="py-2 px-1.5 text-gray-400 font-bold border-r border-gray-200 sticky left-0 bg-white z-10 whitespace-nowrap">
            <div className="flex items-center justify-center gap-1">
              <button
                type="button"
                onClick={() => toggleRow(3)}
                className={`w-4 h-4 rounded border flex items-center justify-center cursor-pointer transition-colors shadow-2xs ${expandedRow === 3 ? 'border-blue-500 bg-blue-600 text-white' : 'border-blue-300 bg-white hover:bg-blue-50 text-blue-600'}`}
                title="Expand row details"
              >
                {expandedRow === 3 ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
              </button>
              <button
                type="button"
                className="w-4 h-4 rounded border border-blue-300 bg-white hover:bg-blue-50 text-blue-600 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
                title="Edit floor row"
              >
                <Pencil size={9} />
              </button>
            </div>
          </td>
          <td className="py-2 px-2 text-green-600 font-extrabold border-r border-gray-200 text-[9.5px]">Yes</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">First Floor</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold font-sans border-r border-gray-200 text-[9.5px]">निवासी</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Residential</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">5</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">138.75 / 12.89</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">155.40 / 14.43</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 1,38,750</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 21,456</td>
          <td className="py-2 px-2 border-r border-gray-200 text-center"><span className="bg-[#ecfdf5] text-[#10b981] rounded px-2.5 py-0.5 text-[8.5px] font-extrabold border border-[#10b981]/20">Verified</span></td>
          <td className="py-2 px-2 text-green-600 font-extrabold border-r border-gray-200 text-[9.5px]">Yes</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">First Floor</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold font-sans border-r border-gray-200 text-[9.5px]">निवासी</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Residential</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">5</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">138.75 / 12.89</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">155.40 / 14.43</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 1,38,750</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 21,456</td>
          <td className="py-2 px-2 border-r border-gray-200 text-center"><span className="bg-[#ecfdf5] text-[#10b981] rounded px-2.5 py-0.5 text-[8.5px] font-extrabold border border-[#10b981]/20">Verified</span></td>
        </tr>
        {expandedRow === 3 && renderExpandedSubRow("Yes", "First Floor", "138.75 / 12.89", "155.40 / 14.43")}
        <tr className="hover:bg-gray-50/50 border-b border-gray-200">
          <td className="py-2 px-1.5 text-gray-400 font-bold border-r border-gray-200 sticky left-0 bg-white z-10 whitespace-nowrap">
            <div className="flex items-center justify-center gap-1">
              <button
                type="button"
                className="w-4 h-4 rounded border border-blue-300 bg-white hover:bg-blue-50 text-blue-600 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
                title="Expand row details"
              >
                <ChevronDown size={10} />
              </button>
              <button
                type="button"
                className="w-4 h-4 rounded border border-blue-300 bg-white hover:bg-blue-50 text-blue-600 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
                title="Edit floor row"
              >
                <Pencil size={9} />
              </button>
            </div>
          </td>
          <td className="py-2 px-2 text-green-600 font-extrabold border-r border-gray-200 text-[9.5px]">Yes</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Second Floor</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold font-sans border-r border-gray-200 text-[9.5px]">निवासी</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Residential</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">5</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">138.75 / 12.89</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">155.40 / 14.43</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 1,38,750</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 21,456</td>
          <td className="py-2 px-2 border-r border-gray-200 text-center"><span className="bg-[#ecfdf5] text-[#10b981] rounded px-2.5 py-0.5 text-[8.5px] font-extrabold border border-[#10b981]/20">Verified</span></td>
          <td className="py-2 px-2 text-green-600 font-extrabold border-r border-gray-200 text-[9.5px]">Yes</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Second Floor</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold font-sans border-r border-gray-200 text-[9.5px]">निवासी</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Residential</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">5</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">138.75 / 12.89</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">155.40 / 14.43</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 1,38,750</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 21,456</td>
          <td className="py-2 px-2 border-r border-gray-200 text-center"><span className="bg-[#ecfdf5] text-[#10b981] rounded px-2.5 py-0.5 text-[8.5px] font-extrabold border border-[#10b981]/20">Verified</span></td>
        </tr>
        <tr className="hover:bg-gray-50/55 border-b border-gray-200">
          <td className="py-2 px-1.5 text-gray-400 font-bold border-r border-gray-200 sticky left-0 bg-white z-10 whitespace-nowrap">
            <div className="flex items-center justify-center gap-1">
              <button
                type="button"
                onClick={() => toggleRow(4)}
                className={`w-4 h-4 rounded border flex items-center justify-center cursor-pointer transition-colors shadow-2xs ${expandedRow === 4 ? 'border-blue-500 bg-blue-600 text-white' : 'border-blue-300 bg-white hover:bg-blue-50 text-blue-600'}`}
                title="Expand row details"
              >
                {expandedRow === 4 ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
              </button>
              <button
                type="button"
                className="w-4 h-4 rounded border border-blue-300 bg-white hover:bg-blue-50 text-blue-600 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
                title="Edit floor row"
              >
                <Pencil size={9} />
              </button>
            </div>
          </td>
          <td className="py-2 px-2 text-green-600 font-extrabold border-r border-gray-200 text-[9.5px]">Yes</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Third Floor</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold font-sans border-r border-gray-200 text-[9.5px]">निवासी</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Residential</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">5</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">138.75 / 12.89</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">155.40 / 14.43</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 1,38,750</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 21,456</td>
          <td className="py-2 px-2 border-r border-gray-200 text-center"><span className="bg-[#ecfdf5] text-[#10b981] rounded px-2.5 py-0.5 text-[8.5px] font-extrabold border border-[#10b981]/20">Verified</span></td>
          <td className="py-2 px-2 text-green-600 font-extrabold border-r border-gray-200 text-[9.5px]">Yes</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Third Floor</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold font-sans border-r border-gray-200 text-[9.5px]">निवासी</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Residential</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">5</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">138.75 / 12.89</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">155.40 / 14.43</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 1,38,750</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 21,456</td>
          <td className="py-2 px-2 border-r border-gray-200 text-center"><span className="bg-[#ecfdf5] text-[#10b981] rounded px-2.5 py-0.5 text-[8.5px] font-extrabold border border-[#10b981]/20">Verified</span></td>
        </tr>
        <tr className="hover:bg-gray-50/55 border-b border-gray-200">
          <td className="py-2 px-1.5 text-gray-400 font-bold border-r border-gray-200 sticky left-0 bg-white z-10 whitespace-nowrap">
            <div className="flex items-center justify-center gap-1">
              <button
                type="button"
                className="w-4 h-4 rounded border border-blue-300 bg-white hover:bg-blue-50 text-blue-600 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
                title="Expand row details"
              >
                <ChevronDown size={10} />
              </button>
              <button
                type="button"
                className="w-4 h-4 rounded border border-blue-300 bg-white hover:bg-blue-50 text-blue-600 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
                title="Edit floor row"
              >
                <Pencil size={9} />
              </button>
            </div>
          </td>
          <td className="py-2 px-2 text-green-600 font-extrabold border-r border-gray-200 text-[9.5px]">Yes</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Terrace Floor</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold font-sans border-r border-gray-200 text-[9.5px]">छत</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Terrace</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">0</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">0.00 / 0.00</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">21.25 / 1.97</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 21,250</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 1,620</td>
          <td className="py-2 px-2 border-r border-gray-200 text-center"><span className="bg-[#ecfdf5] text-[#10b981] rounded px-2.5 py-0.5 text-[8.5px] font-extrabold border border-[#10b981]/20">Verified</span></td>
          <td className="py-2 px-2 text-green-600 font-extrabold border-r border-gray-200 text-[9.5px]">Yes</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Terrace Floor</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold font-sans border-r border-gray-200 text-[9.5px]">छत</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Terrace</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">0</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">0.00 / 0.00</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">21.25 / 1.97</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 21,250</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 1,620</td>
          <td className="py-2 px-2 border-r border-gray-200 text-center"><span className="bg-[#ecfdf5] text-[#10b981] rounded px-2.5 py-0.5 text-[8.5px] font-extrabold border border-[#10b981]/20">Verified</span></td>
        </tr>
        <tr className="hover:bg-gray-50/55 border-b border-gray-200">
          <td className="py-2 px-1.5 text-gray-400 font-bold border-r border-gray-200 sticky left-0 bg-white z-10 whitespace-nowrap">
            <div className="flex items-center justify-center gap-1">
              <button
                type="button"
                className="w-4 h-4 rounded border border-blue-300 bg-white hover:bg-blue-50 text-blue-600 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
                title="Expand row details"
              >
                <ChevronDown size={10} />
              </button>
              <button
                type="button"
                className="w-4 h-4 rounded border border-blue-300 bg-white hover:bg-blue-50 text-blue-600 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
                title="Edit floor row"
              >
                <Pencil size={9} />
              </button>
            </div>
          </td>
          <td className="py-2 px-2 text-green-600 font-extrabold border-r border-gray-200 text-[9.5px]">Yes</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Fourth Floor</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold font-sans border-r border-gray-200 text-[9.5px]">निवासी</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Residential</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">5</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">138.75 / 12.89</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">155.40 / 14.43</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 1,38,750</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 21,456</td>
          <td className="py-2 px-2 border-r border-gray-200 text-center"><span className="bg-[#ecfdf5] text-[#10b981] rounded px-2.5 py-0.5 text-[8.5px] font-extrabold border border-[#10b981]/20">Verified</span></td>
          <td className="py-2 px-2 text-green-600 font-extrabold border-r border-gray-200 text-[9.5px]">Yes</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Fourth Floor</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold font-sans border-r border-gray-200 text-[9.5px]">निवासी</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Residential</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">5</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">138.75 / 12.89</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">155.40 / 14.43</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 1,38,750</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 21,456</td>
          <td className="py-2 px-2 border-r border-gray-200 text-center"><span className="bg-[#ecfdf5] text-[#10b981] rounded px-2.5 py-0.5 text-[8.5px] font-extrabold border border-[#10b981]/20">Verified</span></td>
        </tr>
        <tr className="hover:bg-gray-50/55 border-b border-gray-200">
          <td className="py-2 px-1.5 text-gray-400 font-bold border-r border-gray-200 sticky left-0 bg-white z-10 whitespace-nowrap">
            <div className="flex items-center justify-center gap-1">
              <button
                type="button"
                className="w-4 h-4 rounded border border-blue-300 bg-white hover:bg-blue-50 text-blue-600 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
                title="Expand row details"
              >
                <ChevronDown size={10} />
              </button>
              <button
                type="button"
                className="w-4 h-4 rounded border border-blue-300 bg-white hover:bg-blue-50 text-blue-600 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
                title="Edit floor row"
              >
                <Pencil size={9} />
              </button>
            </div>
          </td>
          <td className="py-2 px-2 text-green-600 font-extrabold border-r border-gray-200 text-[9.5px]">Yes</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Fifth Floor</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold font-sans border-r border-gray-200 text-[9.5px]">निवासी</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Residential</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">5</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">138.75 / 12.89</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">155.40 / 14.43</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 1,38,750</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 21,456</td>
          <td className="py-2 px-2 border-r border-gray-200 text-center"><span className="bg-[#ecfdf5] text-[#10b981] rounded px-2.5 py-0.5 text-[8.5px] font-extrabold border border-[#10b981]/20">Verified</span></td>
          <td className="py-2 px-2 text-green-600 font-extrabold border-r border-gray-200 text-[9.5px]">Yes</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Fifth Floor</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold font-sans border-r border-gray-200 text-[9.5px]">निवासी</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Residential</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">5</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">138.75 / 12.89</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">155.40 / 14.43</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 1,38,750</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 21,456</td>
          <td className="py-2 px-2 border-r border-gray-200 text-center"><span className="bg-[#ecfdf5] text-[#10b981] rounded px-2.5 py-0.5 text-[8.5px] font-extrabold border border-[#10b981]/20">Verified</span></td>
        </tr>
        <tr className="hover:bg-gray-50/55 border-b border-gray-200">
          <td className="py-2 px-1.5 text-gray-400 font-bold border-r border-gray-200 sticky left-0 bg-white z-10 whitespace-nowrap">
            <div className="flex items-center justify-center gap-1">
              <button
                type="button"
                className="w-4 h-4 rounded border border-blue-300 bg-white hover:bg-blue-50 text-blue-600 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
                title="Expand row details"
              >
                <ChevronDown size={10} />
              </button>
              <button
                type="button"
                className="w-4 h-4 rounded border border-blue-300 bg-white hover:bg-blue-50 text-blue-600 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
                title="Edit floor row"
              >
                <Pencil size={9} />
              </button>
            </div>
          </td>
          <td className="py-2 px-2 text-green-600 font-extrabold border-r border-gray-200 text-[9.5px]">Yes</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Sixth Floor</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold font-sans border-r border-gray-200 text-[9.5px]">निवासी</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Residential</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">5</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">138.75 / 12.89</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">155.40 / 14.43</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 1,38,750</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 21,456</td>
          <td className="py-2 px-2 border-r border-gray-200 text-center"><span className="bg-[#ecfdf5] text-[#10b981] rounded px-2.5 py-0.5 text-[8.5px] font-extrabold border border-[#10b981]/20">Verified</span></td>
          <td className="py-2 px-2 text-green-600 font-extrabold border-r border-gray-200 text-[9.5px]">Yes</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Sixth Floor</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold font-sans border-r border-gray-200 text-[9.5px]">निवासी</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Residential</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">5</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">138.75 / 12.89</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">155.40 / 14.43</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 1,38,750</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 21,456</td>
          <td className="py-2 px-2 border-r border-gray-200 text-center"><span className="bg-[#ecfdf5] text-[#10b981] rounded px-2.5 py-0.5 text-[8.5px] font-extrabold border border-[#10b981]/20">Verified</span></td>
        </tr>
        <tr className="hover:bg-gray-50/55">
          <td className="py-2 px-1.5 text-gray-400 font-bold border-r border-gray-200 sticky left-0 bg-white z-10 whitespace-nowrap">
            <div className="flex items-center justify-center gap-1">
              <button
                type="button"
                className="w-4 h-4 rounded border border-blue-300 bg-white hover:bg-blue-50 text-blue-600 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
                title="Expand row details"
              >
                <ChevronDown size={10} />
              </button>
              <button
                type="button"
                className="w-4 h-4 rounded border border-blue-300 bg-white hover:bg-blue-50 text-blue-600 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
                title="Edit floor row"
              >
                <Pencil size={9} />
              </button>
            </div>
          </td>
          <td className="py-2 px-2 text-green-600 font-extrabold border-r border-gray-200 text-[9.5px]">Yes</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Seventh Floor</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold font-sans border-r border-gray-200 text-[9.5px]">निवासी</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Residential</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">5</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">138.75 / 12.89</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">155.40 / 14.43</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 1,38,750</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 21,456</td>
          <td className="py-2 px-2 border-r border-gray-200 text-center"><span className="bg-[#ecfdf5] text-[#10b981] rounded px-2.5 py-0.5 text-[8.5px] font-extrabold border border-[#10b981]/20">Verified</span></td>
          <td className="py-2 px-2 text-green-600 font-extrabold border-r border-gray-200 text-[9.5px]">Yes</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Seventh Floor</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold font-sans border-r border-gray-200 text-[9.5px]">निवासी</td>
          <td className="py-2 px-2 text-[#1e2b58] font-extrabold border-r border-gray-200 text-[9.5px]">Residential</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">5</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">138.75 / 12.89</td>
          <td className="py-2 px-2 font-extrabold text-gray-600 border-r border-gray-200 text-[9.5px]">155.40 / 14.43</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 1,38,750</td>
          <td className="py-2 px-2 font-extrabold text-[#1e2b58] border-r border-gray-200 text-[9.5px]">₹ 21,456</td>
          <td className="py-2 px-2 border-r border-gray-200 text-center"><span className="bg-[#ecfdf5] text-[#10b981] rounded px-2.5 py-0.5 text-[8.5px] font-extrabold border border-[#10b981]/20">Verified</span></td>
        </tr>
      </tbody>
    </table>
  );
}
