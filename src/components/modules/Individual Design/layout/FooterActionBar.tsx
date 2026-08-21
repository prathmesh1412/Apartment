"use client";

import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Target,
  CheckCircle2,
  RotateCcw,
  Database,
  ArrowUpRight,
  RefreshCw,
  Pencil,
  GitFork,
  Droplet,
  FileText,
  Plus,
  Activity,
  ChevronDown
} from 'lucide-react';

interface FooterActionBarProps {
  activeAction: string | null;
  setActiveAction: (action: string | null) => void;
}

export default function FooterActionBar({ activeAction, setActiveAction }: FooterActionBarProps) {
  const [propertyNumber, setPropertyNumber] = useState(1);
  const totalProperties = 500;

  const handlePrev = () => setPropertyNumber(prev => Math.max(1, prev - 1));
  const handleNext = () => setPropertyNumber(prev => Math.min(totalProperties, prev + 1));
  const handleFirst = () => setPropertyNumber(1);
  const handleLast = () => setPropertyNumber(totalProperties);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-2 flex items-center justify-between gap-2.5 shadow-md select-none w-full relative z-30 text-sm font-sans overflow-x-auto no-scrollbar">

      {/* Group 1: Navigation Control */}
      <div className="flex items-center gap-1 bg-[#f8fafc] border border-blue-100 rounded-lg p-1.5 shrink-0">
        <button
          onClick={handleFirst}
          className="p-1 hover:bg-white rounded text-gray-400 hover:text-[#002fbe] transition-colors cursor-pointer"
          title="First Property"
        >
          <ChevronsLeft size={16} />
        </button>
        <button
          onClick={handlePrev}
          className="p-1 hover:bg-white rounded text-gray-400 hover:text-[#002fbe] transition-colors cursor-pointer"
          title="Previous Property"
        >
          <ChevronLeft size={16} />
        </button>

        <span className="px-2 text-xs font-extrabold text-[#1e2b58] whitespace-nowrap">
          Property {propertyNumber} of {totalProperties}
        </span>

        <button
          onClick={handleNext}
          className="p-1 hover:bg-[#eff6ff] rounded text-gray-400 hover:text-[#002fbe] transition-colors cursor-pointer"
          title="Next Property"
        >
          <ChevronRight size={16} />
        </button>
        <button
          onClick={handleLast}
          className="p-1 hover:bg-[#eff6ff] rounded text-gray-400 hover:text-[#002fbe] transition-colors cursor-pointer"
          title="Last Property"
        >
          <ChevronsRight size={16} />
        </button>
      </div>

      {/* Group 2: Action Icons */}
      <div className="flex items-center gap-1.5 shrink-0">
        <button className="w-8.5 h-8.5 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-slate-50 text-[#002fbe] transition-colors cursor-pointer" title="Verify QC">
          <CheckCircle2 size={16} />
        </button>
        <button className="w-8.5 h-8.5 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-slate-50 text-[#002fbe] transition-colors cursor-pointer" title="Approval Check">
          <CheckCircle2 size={16} className="text-gray-400" />
        </button>
        <button className="w-8.5 h-8.5 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-slate-50 text-[#002fbe] transition-colors cursor-pointer" title="Undo Action">
          <RotateCcw size={16} />
        </button>
        <button className="w-8.5 h-8.5 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-slate-50 text-[#002fbe] transition-colors cursor-pointer" title="Database Sync">
          <Database size={16} />
        </button>
        <button className="w-8.5 h-8.5 flex items-center justify-center rounded-lg bg-[#2563eb] text-white hover:bg-blue-700 transition-colors cursor-pointer" title="Send Upward">
          <ArrowUpRight size={17} />
        </button>

        {/* Refresh Taxes Main Action Button */}
        <button className="flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-[#1e40af] to-[#1d4ed8] text-white font-black text-xs rounded-lg hover:brightness-110 shadow-sm transition-all cursor-pointer uppercase tracking-wider shrink-0">
          <RefreshCw size={14} className="animate-spin-slow" />
          <span>Refresh Taxes</span>
        </button>

        <button className="w-8.5 h-8.5 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-slate-50 text-[#002fbe] transition-colors cursor-pointer" title="Edit Record">
          <Pencil size={16} />
        </button>
        <button className="w-8.5 h-8.5 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-slate-50 text-[#002fbe] transition-colors cursor-pointer" title="Fork / Split">
          <GitFork size={16} />
        </button>
        <button className="w-8.5 h-8.5 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-slate-50 text-[#002fbe] transition-colors cursor-pointer" title="Water Link">
          <Droplet size={16} />
        </button>

        {/* View Document Button */}
        <button
          onClick={() => setActiveAction(activeAction === 'documents' ? null : 'documents')}
          className={`w-8.5 h-8.5 flex items-center justify-center rounded-lg border transition-colors cursor-pointer shrink-0 ${activeAction === 'documents'
            ? 'bg-[#2563eb] text-white border-blue-700'
            : 'bg-blue-50 border-blue-200 text-[#002fbe] hover:bg-blue-100'
            }`}
          title="View Documents"
        >
          <FileText size={17} />
        </button>

        {/* Apply Retro Button */}
        <button
          onClick={() => setActiveAction(activeAction === 'apply-retro' ? null : 'apply-retro')}
          className={`flex items-center gap-1.5 px-2 py-1 rounded-lg border text-xs font-black transition-all cursor-pointer uppercase tracking-wider shrink-0 shadow-xs ${activeAction === 'apply-retro'
            ? 'bg-[#2563eb] text-white border-blue-700'
            : 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200 text-emerald-700'
            }`}
          title="Apply Retroactive Tax Calculation"
        >
          <RotateCcw size={12} />
          <span>Apply Retro</span>
        </button>
      </div>

      {/* Group 3: Dropdowns & Action Triggers */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Policy Select */}
        <div className="flex flex-col">
          <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider leading-none">Policy</label>
          <div className="relative mt-0.5">
            <select className="appearance-none bg-white border border-gray-250 rounded-lg px-2.5 py-1 pr-6 text-xs font-extrabold text-[#1e2b58] outline-none cursor-pointer hover:border-[#002fbe] transition-colors">
              <option>Select Policy</option>
              <option>Standard RV Policy</option>
              <option>Commercial Tax Policy</option>
            </select>
            <ChevronDown size={13} className="absolute right-2 top-2 pointer-events-none text-gray-500" />
          </div>
        </div>

        {/* Action Select */}
        <div className="flex flex-col">
          <label className="text-[9px] font-black text-[#002fbe] uppercase tracking-wider leading-none">Action</label>
          <div className="relative mt-0.5">
            <select className="appearance-none bg-white border border-gray-250 rounded-lg px-2.5 py-1 pr-6 text-xs font-extrabold text-[#1e2b58] outline-none cursor-pointer hover:border-[#002fbe] transition-colors">
              <option>Select Action</option>
              <option>Submit for Approval</option>
              <option>Re-assess Property</option>
              <option>Issue Notice</option>
            </select>
            <ChevronDown size={13} className="absolute right-2 top-2 pointer-events-none text-gray-500" />
          </div>
        </div>

        {/* QC Status Select */}
        <div className="flex flex-col">
          <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider leading-none">QC Status</label>
          <div className="relative mt-0.5">
            <select className="appearance-none bg-white border border-gray-250 rounded-lg px-2.5 py-1 pr-6 text-xs font-extrabold text-[#1e2b58] outline-none cursor-pointer hover:border-[#002fbe] transition-colors">
              <option>QC Status</option>
              <option>Passed</option>
              <option>Pending QC</option>
              <option>Rejected</option>
            </select>
            <ChevronDown size={13} className="absolute right-2 top-2 pointer-events-none text-gray-500" />
          </div>
        </div>

        {/* Track Status Button */}
        <button
          onClick={() => setActiveAction(activeAction === 'track-status' ? null : 'track-status')}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-[#002fbe] font-black text-xs rounded-lg transition-colors cursor-pointer ml-1"
        >
          <Activity size={14} />
          <span>Track Status</span>
        </button>
      </div>

    </div>
  );
}
