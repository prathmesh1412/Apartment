"use client";

import React, { useState } from 'react';
import { Copy, Camera, Star, Ruler, BarChart2, ChevronLeft } from 'lucide-react';

export default function PropertySummary({
  activeTab = 'property',
  onHoverImg,
  onClickImg,
  activeAction = null,
  setActiveAction = () => { },
  propertyCategory = 'Individual'
}: {
  activeTab?: string;
  onHoverImg?: (url: string | null, position?: 'left' | 'right' | 'property') => void;
  onClickImg?: (url: string) => void;
  activeAction?: string | null;
  setActiveAction?: (action: string | null) => void;
  propertyCategory?: string;
}) {
  const [copied, setCopied] = useState(false);
  const [description, setDescription] = useState('निवासी');
  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [showPerfModal, setShowPerfModal] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('UPIC-270465-2024-000123');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isApartment = propertyCategory?.toLowerCase().includes('apartment');

  return (
    <div className="flex flex-wrap xl:flex-nowrap items-stretch gap-3 w-full font-sans">

      {/* Card 1: Main Property Info & Details */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3.5 flex flex-grow flex-wrap xl:flex-nowrap items-center gap-5 relative overflow-visible z-20">
        {/* Background visual accent */}
        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#002fbe] rounded-l-xl pointer-events-none" />

        {activeAction && (
          <button
            onClick={() => setActiveAction(null)}
            className="absolute top-2.5 left-3.5 flex items-center gap-1 px-2.5 py-1 rounded bg-[#eff6ff] hover:bg-blue-150/15 border border-blue-250 text-[#002fbe] font-extrabold text-[8.5px] uppercase tracking-wider shadow-2xs cursor-pointer transition-all z-30"
          >
            <ChevronLeft size={11} className="shrink-0" />
            <span>Back</span>
          </button>
        )}

        {/* 1. Property ID / UPIC & Holder Block */}
        <div className={`min-w-[210px] space-y-2 shrink-0 transition-all ${activeAction ? 'mt-6' : ''}`}>
          <div>
            <div className="text-[10px] text-[#002fbe] uppercase tracking-wider font-extrabold">Property ID / UPIC</div>
            <div className="flex items-center gap-1.5 mt-0.5 relative">
              <span className="font-extrabold text-[#002fbe] text-sm tracking-wide select-all">UPIC-270465-2024-000123</span>
              <button
                onClick={handleCopy}
                className="p-1 hover:bg-gray-100 rounded text-[#002fbe] transition-colors cursor-pointer"
                title="Copy UPIC"
              >
                <Copy size={13} />
              </button>

              {/* Copied tooltip */}
              {copied && (
                <span className="absolute left-full ml-2 bg-green-600 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow z-50">
                  Copied!
                </span>
              )}
            </div>
            <div className="mt-1 flex items-center">
              <span className="bg-green-50 text-green-700 border border-green-200 text-[9px] px-2 py-0.5 rounded font-extrabold uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Active Property
              </span>
            </div>
          </div>

          <div className="space-y-1 text-[11px] leading-tight">
            <div className="flex items-center">
              <span className="font-bold text-[#002fbe] w-[110px]">{isApartment ? 'Secretary Name' : 'Owner'}</span>
              <span className="font-bold text-[#002fbe] mr-2">:</span>
              <span className="font-extrabold text-[#002fbe] uppercase text-left break-words max-w-[150px]">MATOSHREE BUILDERS PVT LTD</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-[#002fbe] w-[110px]">Property Holder</span>
              <span className="font-bold text-[#002fbe] mr-2">:</span>
              <span className="font-extrabold text-[#002fbe] uppercase text-left break-words max-w-[150px]">MATOSHREE BUILDERS</span>
            </div>
            {!isApartment && (
              <>
                <div className="flex items-center">
                  <span className="font-bold text-[#002fbe] w-[110px]">Holder (Regional)</span>
                  <span className="font-bold text-[#002fbe] mr-2">:</span>
                  <span className="font-extrabold text-red-650 text-left break-words max-w-[150px]">मातोश्री बिल्डर्स</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold text-[#002fbe] w-[110px]">Occupier Name</span>
                  <span className="font-bold text-[#002fbe] mr-2">:</span>
                  <span className="font-extrabold text-[#002fbe] uppercase text-left break-words max-w-[150px]">MATOSHREE BUILDERS</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold text-[#002fbe] w-[110px]">Occupier (Regional)</span>
                  <span className="font-bold text-[#002fbe] mr-2">:</span>
                  <span className="font-extrabold text-red-650 text-left break-words max-w-[150px]">मातोश्री बिल्डर्स</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* 2. Specifications Middle Columns */}
        <div className={`flex-[3] grid grid-cols-4 gap-x-4 gap-y-2.5 min-w-[420px] text-[10px] shrink-0 leading-tight transition-all ${activeAction ? 'mt-6' : ''}`}>
          {/* Column 1 */}
          <div className="space-y-2.5">
            <div>
              <div className="text-[#002fbe] font-bold uppercase tracking-wider text-[8.5px]">Division</div>
              <div className="font-extrabold text-[#002fbe] text-[11px] mt-0.5">कोपरी</div>
            </div>
            <div>
              <div className="text-[#002fbe] font-bold uppercase tracking-wider text-[8.5px]">Mouja Name</div>
              <div className="font-extrabold text-[#002fbe] text-[11px] mt-0.5">Kopri</div>
            </div>
            <div>
              <div className="text-[#002fbe] font-bold uppercase tracking-wider text-[8.5px]">Survey No.</div>
              <div className="font-extrabold text-[#002fbe] text-[11px] mt-0.5">CSN005A</div>
            </div>
            {!isApartment && (
              <div>
                <div className="text-[#002fbe] font-bold uppercase tracking-wider text-[8.5px]">Owner Category</div>
                <div className="font-extrabold text-[#002fbe] text-[11px] mt-0.5">Individual</div>
              </div>
            )}
          </div>

          {/* Column 2 */}
          <div className="space-y-2.5">
            <div>
              <div className="text-[#002fbe] font-bold uppercase tracking-wider text-[8.5px]">Plot No.</div>
              <div className="font-extrabold text-[#002fbe] text-[11px] mt-0.5">55</div>
            </div>
            <div>
              <div className="text-[#002fbe] font-bold uppercase tracking-wider text-[8.5px]">Tax Zone</div>
              <div className="font-extrabold text-[#002fbe] text-[11px] mt-0.5">1 - KOLSHEET</div>
            </div>
            <div>
              <div className="text-[#002fbe] font-bold uppercase tracking-wider text-[8.5px]">Aadhar No</div>
              <div className="font-extrabold text-[#002fbe] text-[11px] mt-0.5">XXXX-XXXX-8902</div>
            </div>
            {!isApartment && (
              <div>
                <div className="text-[#002fbe] font-bold uppercase tracking-wider text-[8.5px]">Title</div>
                <div className="font-extrabold text-[#002fbe] text-[11px] mt-0.5">M/S</div>
              </div>
            )}
          </div>

          {/* Column 3 */}
          <div className="space-y-2.5">
            <div>
              <div className="text-[#002fbe] font-bold uppercase tracking-wider text-[8.5px]">Mobile No</div>
              <div className="font-extrabold text-[#002fbe] text-[11px] mt-0.5">+91 98XXXXXX21</div>
            </div>
            <div>
              <div className="text-[#002fbe] font-bold uppercase tracking-wider text-[8.5px]">Alt. Mobile No</div>
              <div className="font-extrabold text-[#002fbe] text-[11px] mt-0.5">+91 97XXXXXX10</div>
            </div>
            <div>
              <div className="text-[#002fbe] font-bold uppercase tracking-wider text-[8.5px]">Email ID</div>
              <div className="font-extrabold text-[#002fbe] text-[11px] mt-0.5 truncate max-w-[120px]">contact@matoshree.com</div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="space-y-2.5">
            <div>
              <div className="text-[#002fbe] font-bold uppercase tracking-wider text-[8.5px]">Address</div>
              <div className="font-extrabold text-[#002fbe] text-[11px] mt-0.5 truncate max-w-[120px]" title="Plot No. 55, Kopri, Thane West">Plot No. 55, Kopri</div>
            </div>
            <div>
              <div className="text-[#002fbe] font-bold uppercase tracking-wider text-[8.5px]">Pincode</div>
              <div className="font-extrabold text-[#002fbe] text-[11px] mt-0.5">400603</div>
            </div>
          </div>
        </div>

        {/* 3. Areas Column Layout */}
        <div className={`min-w-[175px] shrink-0 space-y-2 transition-all ${activeAction ? 'mt-6' : ''}`}>
          {/* Plot Area */}
          <div className="flex items-center gap-2 group relative">
            <div className="bg-blue-50 p-1.5 rounded-md mt-0.5 shrink-0 border border-blue-100/55">
              <BarChart2 size={13} className="text-[#002fbe]" />
            </div>
            <div>
              <div className="text-[8.5px] text-[#002fbe] font-bold uppercase tracking-wider">Plot Area (ft/mtr)</div>
              <div className="font-extrabold text-[11.5px] text-[#002fbe] mt-0.5">4305.60 / 400.00</div>
            </div>
          </div>

          {/* Carpet Area */}
          <div className="flex items-center gap-2 group relative">
            <div className="bg-blue-50 p-1.5 rounded-md mt-0.5 shrink-0 border border-blue-100/55">
              <Ruler size={13} className="text-[#002fbe]" />
            </div>
            <div>
              <div className="text-[8.5px] text-[#002fbe] font-bold uppercase tracking-wider">Carpet Area (ft/mtr)</div>
              <div className="font-extrabold text-[11.5px] text-[#002fbe] mt-0.5">538.20 / 50.00</div>
            </div>
          </div>

          {/* Built-up Area */}
          <div className="flex items-center gap-2 group relative">
            <div className="bg-blue-50 p-1.5 rounded-md mt-0.5 shrink-0 border border-blue-100/55">
              <Camera size={13} className="text-[#002fbe]" />
            </div>
            <div>
              <div className="text-[8.5px] text-[#002fbe] font-bold uppercase tracking-wider">Built-up Area (ft/mtr)</div>
              <div className="font-extrabold text-[11.5px] text-[#002fbe] mt-0.5">538.20 / 50.00</div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2: Property Performance Summary */}
      <div className="bg-gradient-to-b from-white to-blue-50/20 rounded-xl shadow-xs hover:shadow-md border border-blue-200/80 p-3 flex flex-col justify-between w-full sm:w-[350px] shrink-0 relative overflow-hidden z-20 group transition-all duration-300">
        {/* Background visual accent */}
        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#002fbe] rounded-l-xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

        {/* local linear gradient definition for half star */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="star-half-orange" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="50%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
        </svg>

        {/* Card Title */}
        <div className="text-[11.5px] text-[#002fbe] font-black select-none leading-none mb-2 border-b border-blue-100/60 pb-1.5 uppercase tracking-wider flex items-center justify-between">
          <span>PROPERTY PERFORMANCE SUMMARY</span>
          <span className="w-1.5 h-1.5 bg-[#002fbe] rounded-full animate-ping" />
        </div>

        {/* Two Columns Grid/Flexbox Layout */}
        <div className="flex flex-row items-stretch gap-3 flex-grow">
          {/* Left Column: Property Grade */}
          <div className="w-1/2 flex flex-col justify-between pr-2 border-r border-blue-100/60">
            <div>
              <div className="text-[9.5px] text-gray-500 font-extrabold uppercase tracking-wider leading-none">
                Property Grade
              </div>
              <div className="flex text-orange-500 gap-0.5 mt-1.5 justify-start cursor-pointer hover:scale-105 transition-transform" title="Score: 6.2 / 7 (4.5 Stars)">
                <Star size={13} fill="#f97316" className="stroke-orange-500 hover:rotate-12 transition-transform" />
                <Star size={13} fill="#f97316" className="stroke-orange-500 hover:rotate-12 transition-transform" />
                <Star size={13} fill="#f97316" className="stroke-orange-500 hover:rotate-12 transition-transform" />
                <Star size={13} fill="#f97316" className="stroke-orange-500 hover:rotate-12 transition-transform" />
                <Star size={13} fill="url(#star-half-orange)" className="stroke-orange-500 hover:rotate-12 transition-transform" />
                <Star size={13} fill="transparent" className="stroke-gray-300 hover:rotate-12 transition-transform" />
              </div>
              <div className="text-[#002fbe] font-black text-[22px] flex items-baseline leading-none mt-1.5 select-all font-sans drop-shadow-2xs">
                <span>6.2</span>
                <span className="text-[11px] text-[#002fbe]/80 font-bold ml-1">/ 7</span>
              </div>
            </div>
            <div className="mt-1">
              <div className="text-emerald-600 text-[11px] font-black leading-tight flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                A+ Grade
              </div>
              <div className="text-gray-500 text-[9.5px] font-bold leading-tight mt-0.5">
                Excellent Property
              </div>
            </div>
          </div>

          {/* Right Column: Health Score */}
          <div className="w-1/2 flex flex-col justify-between pl-1">
            <div className="text-[9.5px] text-gray-500 font-extrabold uppercase tracking-wider leading-none">
              Health Score
            </div>

            <div className="flex flex-col items-center justify-center my-auto py-0.5 gap-1 group/score">
              {/* Interactive Circular progress badge with 92% score displayed above Excellent */}
              <div
                onClick={() => setShowPerfModal(true)}
                className="relative w-12 h-12 flex items-center justify-center shrink-0 cursor-pointer group-hover/score:scale-110 transition-transform"
                title="Click to view detailed Health Audit breakdown"
              >
                <svg width="48" height="48" viewBox="0 0 64 64" className="transform -rotate-90">
                  <circle cx="32" cy="32" r="25" stroke="#10b981" strokeWidth="5.5" strokeOpacity="0.2" fill="transparent" />
                  <circle
                    cx="32"
                    cy="32"
                    r="25"
                    stroke="#047857"
                    strokeWidth="5.5"
                    fill="transparent"
                    strokeDasharray="157.1"
                    strokeDashoffset="12.6"
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute font-black text-[13px] text-[#002fbe] select-none group-hover/score:text-emerald-600 transition-colors">92%</div>
              </div>

              {/* Status and View Details button */}
              <div className="flex flex-col items-center leading-none">
                <div className="text-emerald-600 text-[10px] font-black select-none flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                  Excellent
                </div>
                <button
                  onClick={() => setShowPerfModal(true)}
                  className="text-[8.5px] text-[#002fbe] font-black border border-blue-300 bg-blue-50/80 hover:bg-[#002fbe] hover:text-white rounded-full px-2.5 py-0.5 mt-1 transition-all cursor-pointer shadow-2xs hover:shadow-xs active:scale-95"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Property Description & Category Card (Property Overview) */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 flex flex-col justify-between w-full sm:w-[220px] shrink-0 relative overflow-visible z-20 group">
        {/* Background visual accent */}
        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#002fbe] rounded-l-xl pointer-events-none" />
        <div className="text-[11.5px] text-[#002fbe] font-extrabold select-none leading-none mb-2 border-b border-gray-100 pb-1.5 pl-1.5 uppercase tracking-wider flex items-center justify-between">
          <span>PROPERTY OVERVIEW</span>
          <span className="w-1.5 h-1.5 bg-[#002fbe] rounded-full animate-pulse" />
        </div>
        <div className="space-y-2.5 flex-grow flex flex-col justify-center pl-1.5 pr-0.5">
          <div className="bg-blue-50 p-2 rounded-lg border border-blue-200">
            <div className="text-[8.5px] text-[#002fbe] font-extrabold uppercase tracking-wider leading-none">
              Property Category
            </div>
            <div className="text-[#002fbe] font-black text-xs mt-1 uppercase tracking-wider flex items-center gap-1.5">
              <span>{propertyCategory}</span>
              <span className="px-1.5 py-0.25 bg-[#002fbe] text-white rounded text-[8px] font-extrabold tracking-normal">Prop</span>
            </div>
          </div>

          <div className="bg-red-50 p-2 rounded-lg border border-red-200">
            <div className="text-[8.5px] text-red-700 font-extrabold uppercase tracking-wider leading-none">
              Property Description
            </div>
            <div className="text-red-600 font-black text-sm mt-1 tracking-wide">
              {isEditingDesc ? (
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  onBlur={() => setIsEditingDesc(false)}
                  onKeyDown={(e) => e.key === 'Enter' && setIsEditingDesc(false)}
                  className="border border-blue-200 rounded px-1 text-xs font-bold text-red-600 outline-none w-24 bg-white"
                  autoFocus
                />
              ) : (
                <span
                  onClick={() => setIsEditingDesc(true)}
                  className="cursor-pointer hover:bg-red-100 px-1 rounded transition-colors"
                  title="Click to edit"
                >
                  {description}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Performance Health Audit Breakdown Modal */}
      {showPerfModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl border border-blue-100 shadow-2xl max-w-md w-full p-5 flex flex-col gap-4 relative animate-scaleIn">
            <button
              onClick={() => setShowPerfModal(false)}
              className="absolute top-4 right-4 w-7 h-7 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 flex items-center justify-center font-bold text-xs cursor-pointer transition-colors"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 border-b border-gray-150 pb-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center font-black text-base shadow-xs">
                92%
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-sm uppercase tracking-wide">Property Health Audit Details</h3>
                <span className="text-[10px] text-emerald-600 font-extrabold flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                  Score: 6.2 / 7.0 (A+ Grade)
                </span>
              </div>
            </div>

            <div className="space-y-2.5 text-[10.5px]">
              <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200 flex justify-between items-center">
                <div>
                  <div className="font-extrabold text-slate-800">GIS & Geolocation Mapping</div>
                  <div className="text-[9px] text-slate-400 font-bold">100% Boundary Precision</div>
                </div>
                <span className="bg-emerald-50 text-emerald-700 font-extrabold text-[9px] px-2 py-0.5 rounded-full border border-emerald-200">PASSED</span>
              </div>

              <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200 flex justify-between items-center">
                <div>
                  <div className="font-extrabold text-slate-800">Assessment & Tax Clearances</div>
                  <div className="text-[9px] text-slate-400 font-bold">Zero Outstanding Dues</div>
                </div>
                <span className="bg-emerald-50 text-emerald-700 font-extrabold text-[9px] px-2 py-0.5 rounded-full border border-emerald-200">100% CLEAR</span>
              </div>

              <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200 flex justify-between items-center">
                <div>
                  <div className="font-extrabold text-slate-800">Structural Safety & NOC Compliance</div>
                  <div className="text-[9px] text-slate-400 font-bold">Fire & Building NOC Audited</div>
                </div>
                <span className="bg-blue-50 text-blue-700 font-extrabold text-[9px] px-2 py-0.5 rounded-full border border-blue-200">VERIFIED</span>
              </div>

              <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200 flex justify-between items-center">
                <div>
                  <div className="font-extrabold text-slate-800">Occupancy & Lease Ledgers</div>
                  <div className="text-[9px] text-slate-400 font-bold">Minor verification pending for 1 unit</div>
                </div>
                <span className="bg-amber-50 text-amber-700 font-extrabold text-[9px] px-2 py-0.5 rounded-full border border-amber-200">92% SYNC</span>
              </div>
            </div>

            <button
              onClick={() => setShowPerfModal(false)}
              className="w-full bg-[#002fbe] hover:bg-[#002288] text-white font-extrabold text-[11px] py-2 rounded-xl uppercase tracking-wider cursor-pointer transition shadow-sm mt-1"
            >
              Close Health Audit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
