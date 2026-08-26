'use client';

import React, { useState } from 'react';
import {
  FileText,
  X,
  RefreshCw,
  Home,
  UserCheck,
  Building,
  Building2,
  Percent,
  Layers,
  History,
  CheckCircle2
} from 'lucide-react';

interface QuickDataEntryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  propertyData?: any;
}

export default function QuickDataEntryDrawer({
  isOpen,
  onClose,
  propertyData
}: QuickDataEntryDrawerProps) {
  const [activeTab, setActiveTab] = useState<'property' | 'kyc' | 'society' | 'building' | 'discount' | 'floor' | 'olddetails'>('property');
  const [isUpdating, setIsUpdating] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Form State initialized with realistic defaults matching screenshot
  const [formData, setFormData] = useState({
    division: propertyData?.division || 'वर्तकनगर',
    category: propertyData?.category || 'Individual',
    taxZoneNo: propertyData?.taxZone || '3',
    rateSectionName: 'BANDRA',
    upicId: propertyData?.upicNo || 'NK14B28',
    propertyDescription: propertyData?.propertyDescription || 'C - दुकान',
    mouja: 'Kopri',
    subZoneNo: propertyData?.subZoneCsn || 'SZ-12',
    surveyNo: 'CSN005A',
    plotNo: propertyData?.plotNo || 'Plot-156',
    plotArea: propertyData?.plotArea || '0.00 / 0.00',
    totalCarpetArea: propertyData?.carpetBuiltUpArea || '2268.18 / 210.72',
    totalBuiltupArea: '1814.54 / 168.58',
    oldCarpetArea: propertyData?.oldCarpetBuiltUpArea || '1881.67 / 174.81',
    oldBuiltupArea: '2258.00 / 209.78'
  });

  if (!isOpen) return null;

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        onClose();
      }, 1200);
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-[100] transition-opacity animate-fadeIn select-none flex justify-end"
      onClick={onClose}
    >
      <div
        className="bg-white shadow-2xl border-l border-slate-200 w-full max-w-4xl h-full flex flex-col overflow-hidden animate-slideLeft transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#1d6bf3] text-white p-3 px-4 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <FileText size={20} className="shrink-0 text-blue-100" />
            <h2 className="font-extrabold text-base tracking-tight whitespace-nowrap">
              Property Quick Data Entry
            </h2>
            {/* Header Badges */}
            <div className="hidden lg:flex items-center gap-1.5 ml-3 overflow-x-auto text-[11px] font-bold">
              <span className="bg-white/15 text-white px-2 py-0.5 rounded-full border border-white/20 whitespace-nowrap">
                📍 Ward: NK14
              </span>
              <span className="bg-white/15 text-white px-2 py-0.5 rounded-full border border-white/20 whitespace-nowrap">
                # Property: 28
              </span>
              <span className="bg-white/15 text-white px-2 py-0.5 rounded-full border border-white/20 whitespace-nowrap">
                ☵ Partition: —
              </span>
              <span className="bg-white/15 text-white px-2 py-0.5 rounded-full border border-white/20 whitespace-nowrap">
                🏷️ Property Category: Individual
              </span>
              <span className="bg-white/15 text-white px-2 py-0.5 rounded-full border border-white/20 whitespace-nowrap">
                🏷️ Property Description: दुकान
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-lg text-white transition-colors cursor-pointer shrink-0"
            title="Close Drawer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="bg-[#f8fafc] border-b border-slate-200 px-4 py-2 flex items-center gap-2 overflow-x-auto shrink-0 scrollbar-none text-xs font-bold">
          <button
            type="button"
            onClick={() => setActiveTab('property')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'property'
                ? 'bg-[#1d6bf3] text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Home size={14} />
            Property
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('kyc')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'kyc'
                ? 'bg-[#1d6bf3] text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <UserCheck size={14} />
            KYC
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('society')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'society'
                ? 'bg-[#1d6bf3] text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Building2 size={14} />
            Society
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('building')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'building'
                ? 'bg-[#1d6bf3] text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Building size={14} />
            Building Permission
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('discount')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'discount'
                ? 'bg-[#1d6bf3] text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Percent size={14} />
            Discount & Social Data
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('floor')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'floor'
                ? 'bg-[#1d6bf3] text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Layers size={14} />
            Floor
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('olddetails')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'olddetails'
                ? 'bg-[#1d6bf3] text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <History size={14} />
            Old Details
          </button>
        </div>

        {/* Main Content Body */}
        <div className="p-4 sm:p-5 bg-slate-100 overflow-y-auto flex-1">
          <form onSubmit={handleUpdate} className="space-y-4">
            {/* Property Information Card */}
            <div className="bg-white border border-blue-200/90 rounded-xl p-4 sm:p-5 shadow-xs">
              <h3 className="text-sm font-extrabold text-[#1d6bf3] mb-4 pb-2 border-b border-blue-100 flex items-center justify-between">
                <span>Property Information</span>
                {showToast && (
                  <span className="text-xs text-emerald-600 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 animate-fadeIn">
                    <CheckCircle2 size={14} /> Changes Saved Successfully!
                  </span>
                )}
              </h3>

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
                {/* 1. Division */}
                <div>
                  <label className="font-bold text-slate-700 mb-1 block">
                    Division <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.division}
                    onChange={(e) => handleInputChange('division', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#1d6bf3] rounded-lg px-3 py-2 font-bold text-slate-800 focus:outline-none transition-all"
                  />
                </div>

                {/* 2. Category */}
                <div>
                  <label className="font-bold text-slate-700 mb-1 block">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#1d6bf3] rounded-lg px-3 py-2 font-bold text-slate-800 focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="Individual">Individual</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>

                {/* 3. Tax Zone No */}
                <div>
                  <label className="font-bold text-slate-700 mb-1 block">
                    Tax Zone No
                  </label>
                  <select
                    value={formData.taxZoneNo}
                    onChange={(e) => handleInputChange('taxZoneNo', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#1d6bf3] rounded-lg px-3 py-2 font-bold text-slate-800 focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="3">3</option>
                    <option value="1 - KOLSHEET">1 - KOLSHEET</option>
                    <option value="2">2</option>
                  </select>
                </div>

                {/* 4. Rate Section Name */}
                <div>
                  <label className="font-bold text-slate-700 mb-1 block">
                    Rate Section Name
                  </label>
                  <input
                    type="text"
                    value={formData.rateSectionName}
                    onChange={(e) => handleInputChange('rateSectionName', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#1d6bf3] rounded-lg px-3 py-2 font-bold text-slate-800 focus:outline-none transition-all"
                  />
                </div>

                {/* 5. UPIC ID */}
                <div>
                  <label className="font-bold text-slate-700 mb-1 block">
                    UPIC ID
                  </label>
                  <input
                    type="text"
                    value={formData.upicId}
                    onChange={(e) => handleInputChange('upicId', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#1d6bf3] rounded-lg px-3 py-2 font-bold text-slate-800 focus:outline-none transition-all"
                  />
                </div>

                {/* 6. Property Description */}
                <div>
                  <label className="font-bold text-slate-700 mb-1 block">
                    Property Description
                  </label>
                  <select
                    value={formData.propertyDescription}
                    onChange={(e) => handleInputChange('propertyDescription', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#1d6bf3] rounded-lg px-3 py-2 font-bold text-slate-800 focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="C - दुकान">C - दुकान</option>
                    <option value="निवासी">निवासी</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>

                {/* 7. Mouja */}
                <div>
                  <label className="font-bold text-slate-700 mb-1 block">
                    Mouja
                  </label>
                  <select
                    value={formData.mouja}
                    onChange={(e) => handleInputChange('mouja', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#1d6bf3] rounded-lg px-3 py-2 font-bold text-slate-800 focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="Kopri">Kopri</option>
                    <option value="Vartak Nagar">Vartak Nagar</option>
                    <option value="Thane">Thane</option>
                  </select>
                </div>

                {/* 8. Sub Zone No */}
                <div>
                  <label className="font-bold text-slate-700 mb-1 block">
                    Sub Zone No
                  </label>
                  <input
                    type="text"
                    value={formData.subZoneNo}
                    onChange={(e) => handleInputChange('subZoneNo', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#1d6bf3] rounded-lg px-3 py-2 font-bold text-slate-800 focus:outline-none transition-all"
                  />
                </div>

                {/* 9. Survey No */}
                <div>
                  <label className="font-bold text-slate-700 mb-1 block">
                    Survey No
                  </label>
                  <input
                    type="text"
                    value={formData.surveyNo}
                    onChange={(e) => handleInputChange('surveyNo', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#1d6bf3] rounded-lg px-3 py-2 font-bold text-slate-800 focus:outline-none transition-all"
                  />
                </div>

                {/* 10. Plot No */}
                <div>
                  <label className="font-bold text-slate-700 mb-1 block">
                    Plot No
                  </label>
                  <input
                    type="text"
                    value={formData.plotNo}
                    onChange={(e) => handleInputChange('plotNo', e.target.value)}
                    placeholder="e.g., Plot-156"
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#1d6bf3] rounded-lg px-3 py-2 font-bold text-slate-800 focus:outline-none transition-all"
                  />
                </div>

                {/* 11. Plot Area */}
                <div>
                  <label className="font-bold text-slate-700 mb-1 block">
                    Plot Area (sq.ft / sq.m)
                  </label>
                  <input
                    type="text"
                    value={formData.plotArea}
                    onChange={(e) => handleInputChange('plotArea', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#1d6bf3] rounded-lg px-3 py-2 font-bold text-slate-800 focus:outline-none transition-all"
                  />
                </div>

                {/* 12. Total Carpet Area */}
                <div>
                  <label className="font-bold text-slate-700 mb-1 block">
                    Total Carpet Area (sq.ft / sq.m)
                  </label>
                  <input
                    type="text"
                    value={formData.totalCarpetArea}
                    onChange={(e) => handleInputChange('totalCarpetArea', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#1d6bf3] rounded-lg px-3 py-2 font-bold text-slate-800 focus:outline-none transition-all"
                  />
                </div>

                {/* 13. Total Builtup Area */}
                <div>
                  <label className="font-bold text-slate-700 mb-1 block">
                    Total Builtup Area (sq.ft / sq.m)
                  </label>
                  <input
                    type="text"
                    value={formData.totalBuiltupArea}
                    onChange={(e) => handleInputChange('totalBuiltupArea', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#1d6bf3] rounded-lg px-3 py-2 font-bold text-slate-800 focus:outline-none transition-all"
                  />
                </div>

                {/* 14. Old Carpet Area */}
                <div>
                  <label className="font-bold text-slate-700 mb-1 block">
                    Old Carpet Area (sq.ft / sq.m)
                  </label>
                  <input
                    type="text"
                    value={formData.oldCarpetArea}
                    onChange={(e) => handleInputChange('oldCarpetArea', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#1d6bf3] rounded-lg px-3 py-2 font-bold text-slate-800 focus:outline-none transition-all"
                  />
                </div>

                {/* 15. Old Builtup Area */}
                <div>
                  <label className="font-bold text-slate-700 mb-1 block">
                    Old Builtup Area (sq.ft / sq.m)
                  </label>
                  <input
                    type="text"
                    value={formData.oldBuiltupArea}
                    onChange={(e) => handleInputChange('oldBuiltupArea', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#1d6bf3] rounded-lg px-3 py-2 font-bold text-slate-800 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-5 flex justify-end">
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="bg-[#1d6bf3] hover:bg-blue-700 text-white font-black px-6 py-2.5 rounded-xl flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw size={16} className={isUpdating ? 'animate-spin' : ''} />
                  {isUpdating ? 'Updating...' : 'Update Changes'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
