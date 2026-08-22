"use client";

import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

export default function TopPropertySearchBar({
  onSearch = () => {}
}: {
  onSearch?: (query: { wardNo: string; propertyNo: string; partitionNo: string }) => void;
}) {
  const [wardNo, setWardNo] = useState('Ward 1 - Kopri');
  const [propertyNo, setPropertyNo] = useState('UPIC-270465');
  const [partitionNo, setPartitionNo] = useState('0');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ wardNo, propertyNo, partitionNo });
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-50/90 via-indigo-50/40 to-slate-50 border border-blue-200/80 rounded-xl px-3 py-1.5 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs font-sans z-30 select-none">
      <form onSubmit={handleSearchSubmit} className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
        {/* Ward No Dropdown */}
        <div className="flex items-center gap-1.5">
          <label htmlFor="top-ward-no" className="font-extrabold text-[#002fbe] text-[11.5px] whitespace-nowrap">
            Ward No:
          </label>
          <div className="relative">
            <select
              id="top-ward-no"
              value={wardNo}
              onChange={(e) => setWardNo(e.target.value)}
              className="appearance-none bg-white border border-blue-200 hover:border-blue-400 rounded-lg px-2.5 py-1 pr-7 text-[11px] font-bold text-slate-800 shadow-2xs focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer transition-all min-w-[130px]"
            >
              <option value="Ward 1 - Kopri">Ward 1 - Kopri</option>
              <option value="Ward 2 - Naupada">Ward 2 - Naupada</option>
              <option value="Ward 3 - Majiwada">Ward 3 - Majiwada</option>
              <option value="Ward 4 - Vartak Nagar">Ward 4 - Vartak Nagar</option>
            </select>
            <ChevronDown size={13} className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600 pointer-events-none" />
          </div>
        </div>

        {/* Property No Dropdown */}
        <div className="flex items-center gap-1.5">
          <label htmlFor="top-property-no" className="font-extrabold text-[#002fbe] text-[11.5px] whitespace-nowrap">
            Property No:
          </label>
          <div className="relative">
            <select
              id="top-property-no"
              value={propertyNo}
              onChange={(e) => setPropertyNo(e.target.value)}
              className="appearance-none bg-white border border-blue-200 hover:border-blue-400 rounded-lg px-2.5 py-1 pr-7 text-[11px] font-bold text-slate-800 shadow-2xs focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer transition-all min-w-[150px]"
            >
              <option value="UPIC-270465">UPIC-270465-2024-000123</option>
              <option value="PROP-101">PROP-101 (Matoshree)</option>
              <option value="PROP-102">PROP-102 (Shree Ram)</option>
            </select>
            <ChevronDown size={13} className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600 pointer-events-none" />
          </div>
        </div>

        {/* Partition No Dropdown */}
        <div className="flex items-center gap-1.5">
          <label htmlFor="top-partition-no" className="font-extrabold text-[#002fbe] text-[11.5px] whitespace-nowrap">
            Partition No:
          </label>
          <div className="relative">
            <select
              id="top-partition-no"
              value={partitionNo}
              onChange={(e) => setPartitionNo(e.target.value)}
              className="appearance-none bg-white border border-blue-200 hover:border-blue-400 rounded-lg px-2.5 py-1 pr-7 text-[11px] font-bold text-slate-800 shadow-2xs focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer transition-all min-w-[90px]"
            >
              <option value="0">0 (Main)</option>
              <option value="1">Partition 1</option>
              <option value="2">Partition 2</option>
              <option value="A">Partition A</option>
            </select>
            <ChevronDown size={13} className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600 pointer-events-none" />
          </div>
        </div>

        {/* Search Action Button */}
        <button
          type="submit"
          className="bg-[#002fbe] hover:bg-[#002288] text-white p-1.5 rounded-lg shadow-xs hover:shadow-sm transition-all cursor-pointer flex items-center justify-center shrink-0 active:scale-95"
          title="Search Property"
        >
          <Search size={14} />
        </button>
      </form>

      {/* Right side active status indicator */}
      <div className="hidden sm:flex items-center gap-2 text-[10.5px]">
        <span className="bg-blue-100/80 text-[#002fbe] border border-blue-300 px-2 py-0.5 rounded-full font-black flex items-center gap-1 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 bg-[#002fbe] rounded-full animate-ping" />
          Property Sync Active
        </span>
      </div>
    </div>
  );
}
