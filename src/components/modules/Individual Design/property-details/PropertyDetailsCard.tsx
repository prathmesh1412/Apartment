"use client";

import React, { useState, useCallback } from 'react';
import {
  Copy,
  Check,
  Building2,
  MapPin,
  Landmark,
  Tag,
  Map,
  Compass,
  Grid,
  UserCheck,
  Mail,
  Phone,
  AtSign,
  Home,
  Ruler,
  Maximize,
  Hash,
  Pencil,
  TrendingUp,
  BarChart3,
  FileSpreadsheet,
  ShieldAlert,
  Wallet,
  AlertCircle
} from 'lucide-react';
import QuickDataEntryDrawer from '@/components/modules/Apartment_design/panels/QuickDataEntryDrawer';

// ============================================================================
// Types & Data Transfer Objects (DTOs)
// ============================================================================

export interface PropertyDetailsData {
  upicNo: string;
  division: string;
  moujaName: string;
  surveyNo: string;
  societyName: string;
  ownerCategory: string;
  taxZone: string;
  plotNo: string;
  landOwnerName: string;
  builderName: string;
  holderRegional: string;
  occupierName: string;
  occupierRegional: string;
  mobileNo: string;
  altMobileNo: string;
  emailId: string;
  address: string;
  pincode: string;
  plotAreaFtMtr: string;
  carpetAreaFtMtr: string;
  builtUpAreaFtMtr: string;
  propertyDescription?: string;
  additionalRevenue: {
    amount: string;
    growthPercent: string;
    comparisonPeriod: string;
  };
  metrics: {
    totalTax: string;
    retrospectiveTax: string;
    totalDemand: string;
    totalCollection: string;
    collectionPercentage: string;
    totalBalance: string;
  };
  imageSrc?: string;
}

export interface PropertyDetailsCardProps {
  data?: Partial<PropertyDetailsData>;
  className?: string;
  onCopyUpic?: (upic: string) => void;
}

// ============================================================================
// Default Mock Data for Property Details Screen
// ============================================================================

const DEFAULT_PROPERTY_DATA: PropertyDetailsData = {
  upicNo: 'UPIC-270465-2024-000123',
  division: 'कोपरी',
  moujaName: 'Kopri',
  surveyNo: 'CSN005A',
  societyName: 'MATOSHREE BUILDERS',
  ownerCategory: 'Individual',
  propertyDescription: 'निवासी',
  taxZone: '1 - KOLSHEET',
  plotNo: '55',
  landOwnerName: 'MATOSHREE BUILDERS',
  builderName: 'MATOSHREE BUILDERS',
  holderRegional: 'मातोश्री बिल्डर्स',
  occupierName: 'MATOSHREE BUILDERS',
  occupierRegional: 'मातोश्री बिल्डर्स',
  mobileNo: '+91 98765 43210',
  altMobileNo: '+91 98765 43211',
  emailId: 'contact@matoshreebuilders.in',
  address: 'Plot No. 55, Kopri',
  pincode: '400603',
  plotAreaFtMtr: '4305.60 / 400.00',
  carpetAreaFtMtr: '538.20 / 50.00',
  builtUpAreaFtMtr: '538.20 / 50.00',
  additionalRevenue: {
    amount: '₹12,892',
    growthPercent: '12.4%',
    comparisonPeriod: 'vs (Prev. Year)',
  },
  metrics: {
    totalTax: '₹70.4k',
    retrospectiveTax: '₹1.13L',
    totalDemand: '₹2.24L',
    totalCollection: '₹1.94L',
    collectionPercentage: '92%',
    totalBalance: '₹30.3k',
  },
  imageSrc: '/apartment_image.jpg',
};

// ============================================================================
// Property Details Card Component
// ============================================================================

export default function PropertyDetailsCard({
  data: customData,
  className = '',
  onCopyUpic,
}: PropertyDetailsCardProps) {
  const data: PropertyDetailsData = { ...DEFAULT_PROPERTY_DATA, ...customData };
  const [copied, setCopied] = useState(false);
  const [isQuickDataEntryOpen, setIsQuickDataEntryOpen] = useState(false);

  React.useEffect(() => {
    const handleOpen = () => setIsQuickDataEntryOpen(true);
    if (typeof window !== 'undefined') {
      window.addEventListener('openQuickDataEntry', handleOpen);
      return () => window.removeEventListener('openQuickDataEntry', handleOpen);
    }
  }, []);

  const handleCopy = useCallback(() => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(data.upicNo);
      setCopied(true);
      if (onCopyUpic) onCopyUpic(data.upicNo);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [data.upicNo, onCopyUpic]);

  return (
    <div className={`w-full font-sans select-none ${className}`}>
      {/* Main Container Card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xs p-2 flex flex-col xl:flex-row items-stretch gap-2.5 relative overflow-hidden">

        {/* 1. Left Thumbnail Image */}
        <div className="shrink-0 w-full xl:w-[138px] min-h-[140px] rounded-lg overflow-hidden border border-slate-200 relative group bg-slate-100 self-stretch">
          <img
            src={data.imageSrc || '/apartment_image.jpg'}
            alt={data.societyName}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <Building2 className="w-10 h-10 text-slate-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* 2. Middle Info Block */}
        <div className="flex-1 flex flex-col justify-start min-w-0 gap-1">

          {/* Header Row: Property No., UPIC ID, and Society Name formatted IN-LINE */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pb-1 border-b border-slate-200/40">
            {/* 1. Property No. */}
            <div className="shrink-0 flex items-center gap-1.5">
              <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wide flex items-center gap-1 shrink-0">
                <Hash size={11} className="text-slate-400 shrink-0" />
                Property No.:
              </span>
              <span className="font-extrabold text-[#ef4444] text-[12.5px] tracking-tight">
                270465-2024-000123
              </span>
            </div>

            {/* 2. UPIC ID */}
            <div className="shrink-0 flex items-center gap-1.5">
              <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wide flex items-center gap-1 shrink-0">
                <Hash size={11} className="text-blue-500 shrink-0" />
                UPIC ID:
              </span>
              <span className="font-extrabold text-[#ef4444] text-[12.5px] tracking-tight">
                {data.upicNo}
              </span>
              <button
                onClick={handleCopy}
                className="p-1 hover:bg-slate-100 rounded text-blue-600 transition-colors cursor-pointer relative"
                title="Copy Property ID"
                aria-label="Copy UPIC Number"
              >
                {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                {copied && (
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow whitespace-nowrap z-30">
                    Copied!
                  </span>
                )}
              </button>
            </div>

            {/* 3. Society Name */}
            <div className="flex-1 min-w-0 flex items-center justify-between gap-1.5">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wide flex items-center gap-1 shrink-0">
                  <Building2 size={11} className="text-slate-400 shrink-0" />
                  Society Name:
                </span>
                <span className="font-black text-[#ef4444] text-[12.5px] tracking-tight truncate" title={data.societyName}>
                  {data.societyName}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsQuickDataEntryOpen(true)}
                className="p-0.5 hover:bg-blue-50 rounded-md text-blue-600 transition-colors cursor-pointer shrink-0"
                title="Edit Property Details"
                aria-label="Edit Property Details"
              >
                <Pencil size={12} />
              </button>
            </div>
          </div>

          {/* 3-Column Specifications Grid - New Property Details Screen Fields */}
          <div className="flex flex-col md:flex-row gap-2.5 text-[10px]">
            
            {/* Column 1: Ownership & Occupiers (6 Fields) */}
            <div className="flex-1 min-w-0 space-y-1.5 border-r-0 md:border-r border-slate-200/50 pr-2">
              <div className="flex justify-between md:justify-start md:gap-1.5 items-center">
                <span className="font-extrabold text-slate-600 w-[110px] shrink-0 flex items-center gap-1">
                  <UserCheck size={10.5} className="text-[#2563eb] shrink-0" />
                  Owner
                </span>
                <span className="font-black text-[#2563eb] truncate" title={data.landOwnerName}>{data.landOwnerName}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-1.5 items-center">
                <span className="font-extrabold text-slate-600 w-[110px] shrink-0 flex items-center gap-1">
                  <UserCheck size={10.5} className="text-[#2563eb] shrink-0" />
                  Property Holder
                </span>
                <span className="font-black text-[#2563eb] truncate" title={data.builderName}>{data.builderName}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-1.5 items-center">
                <span className="font-extrabold text-slate-600 w-[110px] shrink-0 flex items-center gap-1">
                  <UserCheck size={10.5} className="text-[#2563eb] shrink-0" />
                  Holder (Regional)
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.holderRegional}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-1.5 items-center">
                <span className="font-extrabold text-slate-600 w-[110px] shrink-0 flex items-center gap-1">
                  <UserCheck size={10.5} className="text-[#2563eb] shrink-0" />
                  Occupier Name
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.occupierName}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-1.5 items-center">
                <span className="font-extrabold text-slate-600 w-[110px] shrink-0 flex items-center gap-1">
                  <UserCheck size={10.5} className="text-[#2563eb] shrink-0" />
                  Occupier (Regional)
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.occupierRegional}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-1.5 items-center">
                <span className="font-extrabold text-slate-600 w-[110px] shrink-0 flex items-center gap-1">
                  <Tag size={10.5} className="text-[#2563eb] shrink-0" />
                  Owner Category
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.ownerCategory}</span>
              </div>
            </div>

            {/* Column 2: Location, Mouja & Survey Details (6 Fields) */}
            <div className="flex-1 min-w-0 space-y-1.5 border-r-0 md:border-r border-slate-200/50 px-0 md:px-1.5">
              <div className="flex justify-between md:justify-start md:gap-1.5 items-center">
                <span className="font-extrabold text-slate-600 w-[115px] shrink-0 flex items-center gap-1">
                  <MapPin size={10.5} className="text-[#2563eb] shrink-0" />
                  Division
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.division}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-1.5 items-center">
                <span className="font-extrabold text-slate-600 w-[115px] shrink-0 flex items-center gap-1">
                  <Landmark size={10.5} className="text-[#2563eb] shrink-0" />
                  Mouja Name
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.moujaName}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-1.5 items-center">
                <span className="font-extrabold text-slate-600 w-[115px] shrink-0 flex items-center gap-1">
                  <Compass size={10.5} className="text-[#2563eb] shrink-0" />
                  Survey No.
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.surveyNo}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-1.5 items-center">
                <span className="font-extrabold text-slate-600 w-[115px] shrink-0 flex items-center gap-1">
                  <Map size={10.5} className="text-[#2563eb] shrink-0" />
                  Tax Zone
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.taxZone}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-1.5 items-center">
                <span className="font-extrabold text-slate-600 w-[115px] shrink-0 flex items-center gap-1">
                  <Grid size={10.5} className="text-[#2563eb] shrink-0" />
                  Plot No.
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.plotNo}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-1.5 items-center">
                <span className="font-extrabold text-slate-600 w-[115px] shrink-0 flex items-center gap-1">
                  <Hash size={10.5} className="text-[#2563eb] shrink-0" />
                  Aadhar / Title
                </span>
                <span className="font-black text-[#2563eb] truncate">XXXX-XXXX-8902 (M/S)</span>
              </div>
            </div>

            {/* Column 3: Contact & Area Specifications (6 Fields) */}
            <div className="flex-1 min-w-0 space-y-1.5 pl-0 md:pl-1.5">
              <div className="flex justify-between md:justify-start md:gap-1.5 items-center">
                <span className="font-extrabold text-slate-600 w-[115px] shrink-0 flex items-center gap-1">
                  <Phone size={10.5} className="text-[#2563eb] shrink-0" />
                  Mobile No.
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.mobileNo}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-1.5 items-center">
                <span className="font-extrabold text-slate-600 w-[115px] shrink-0 flex items-center gap-1">
                  <AtSign size={10.5} className="text-[#2563eb] shrink-0" />
                  Email ID
                </span>
                <span className="font-black text-[#2563eb] truncate" title={data.emailId}>{data.emailId}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-1.5 items-start">
                <span className="font-extrabold text-slate-600 w-[115px] shrink-0 flex items-center gap-1">
                  <Home size={10.5} className="text-[#2563eb] shrink-0 mt-0.5" />
                  Address & Pincode
                </span>
                <span className="font-black text-[#2563eb] leading-tight truncate" title={`${data.address}, ${data.pincode}`}>{data.address} ({data.pincode})</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-1.5 items-center">
                <span className="font-extrabold text-slate-600 w-[115px] shrink-0 flex items-center gap-1">
                  <Ruler size={10.5} className="text-[#2563eb] shrink-0" />
                  Plot Area (Ft/Mtr)
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.plotAreaFtMtr}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-1.5 items-center">
                <span className="font-extrabold text-slate-600 w-[115px] shrink-0 flex items-center gap-1">
                  <Maximize size={10.5} className="text-[#2563eb] shrink-0" />
                  Carpet Area (Ft/Mtr)
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.carpetAreaFtMtr}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-1.5 items-center">
                <span className="font-extrabold text-slate-600 w-[115px] shrink-0 flex items-center gap-1">
                  <Maximize size={10.5} className="text-[#2563eb] shrink-0" />
                  Built-Up Area (Ft/Mtr)
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.builtUpAreaFtMtr}</span>
              </div>
            </div>

          </div>
        </div>

        {/* 4. Far Right Panel: Additional Revenue Generated & Metrics */}
        <div className="w-full xl:w-[295px] shrink-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 rounded-xl border border-blue-100/80 p-2 flex flex-col justify-between gap-1.5 shadow-2xs hover:shadow-xs transition-all">

          {/* Header Title with Property Description */}
          <div className="flex items-center justify-between border-b border-blue-100/80 pb-1">
            <div className="text-[9.5px] font-black text-slate-900 uppercase tracking-wide flex items-center gap-1">
              <TrendingUp size={11} className="text-slate-900" />
              ADDITIONAL REVENUE GENERATED
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-wider">
                Desc:
              </span>
              <span className="text-[9.5px] font-black text-[#dc2626] bg-red-50 border border-red-200 px-1.5 py-0.25 rounded shadow-2xs">
                {data.propertyDescription || 'निवासी'}
              </span>
            </div>
          </div>

          {/* Hero Revenue Row - Compact Glass Card with 3D Cyan Smile Emoji */}
          <div className="flex items-center gap-2.5 bg-gradient-to-r from-blue-50/80 via-white to-blue-50/40 p-1.5 rounded-xl border border-blue-100 shadow-2xs hover:shadow-md transition-all duration-300 group cursor-pointer">
            {/* 3D Cyan Smiling Avatar with Borderless 3D Float & Hover Animation */}
            <div className="w-[36px] h-[36px] shrink-0 relative flex items-center justify-center cursor-pointer group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-bounce">
              <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/cyan_smile.jpg"
                  alt="3D Cyan Smile Avatar"
                  className="w-full h-full object-cover scale-110 select-none mix-blend-multiply"
                />
              </div>
            </div>

            {/* Revenue Numbers */}
            <div className="flex-1">
              <div className="text-[16px] font-black text-slate-900 tracking-tight leading-none group-hover:text-[#1d6bf3] transition-colors">
                {data.additionalRevenue.amount}
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="bg-emerald-100/90 border border-emerald-200 text-emerald-700 font-extrabold text-[9px] px-1 py-0.25 rounded-full flex items-center gap-0.5 leading-none">
                  ↑ {data.additionalRevenue.growthPercent}
                </span>
                <span className="text-[9.5px] font-bold text-slate-400">
                  {data.additionalRevenue.comparisonPeriod}
                </span>
              </div>
            </div>
          </div>

          {/* 6 Metric Cards 3x2 Matrix */}
          <div className="grid grid-cols-3 gap-1.5 text-left">
            {/* Card 1: Current Tax */}
            <div className="bg-white p-1.5 rounded-lg border border-blue-100 shadow-2xs hover:border-blue-300 transition-colors flex flex-col justify-between">
              <div className="text-[8.5px] font-extrabold text-blue-600 flex items-center gap-0.5">
                <BarChart3 size={9.5} className="shrink-0" />
                <span className="truncate">Current Tax</span>
              </div>
              <div className="text-[12px] font-black text-slate-900 leading-tight">
                {data.metrics.totalTax}
              </div>
            </div>

            {/* Card 2: Retro Tax */}
            <div className="bg-white p-1.5 rounded-lg border border-blue-100 shadow-2xs hover:border-blue-300 transition-colors flex flex-col justify-between">
              <div className="text-[8.5px] font-extrabold text-blue-600 flex items-center gap-0.5">
                <FileSpreadsheet size={9.5} className="shrink-0" />
                <span className="truncate">Retro Tax</span>
              </div>
              <div className="text-[12px] font-black text-slate-900 leading-tight">
                {data.metrics.retrospectiveTax}
              </div>
            </div>

            {/* Card 3: Total Tax */}
            <div className="bg-white p-1.5 rounded-lg border border-blue-100 shadow-2xs hover:border-blue-300 transition-colors flex flex-col justify-between">
              <div className="text-[8.5px] font-extrabold text-blue-600 flex items-center gap-0.5">
                <BarChart3 size={9.5} className="shrink-0" />
                <span className="truncate">Total Tax</span>
              </div>
              <div className="text-[12px] font-black text-slate-900 leading-tight">
                ₹1.83L
              </div>
            </div>

            {/* Card 4: Total Demand */}
            <div className="bg-amber-50/60 p-1.5 rounded-lg border border-amber-200/80 shadow-2xs hover:border-amber-400 transition-colors flex flex-col justify-between">
              <div className="text-[8.5px] font-extrabold text-amber-700 flex items-center gap-0.5">
                <ShieldAlert size={9.5} className="shrink-0" />
                <span className="truncate">Total Demand</span>
              </div>
              <div className="text-[12px] font-black text-slate-900 leading-tight">
                {data.metrics.totalDemand}
              </div>
            </div>

            {/* Card 5: Total Collection with 92% badge */}
            <div className="bg-emerald-50/60 p-1.5 rounded-lg border border-emerald-200/80 shadow-2xs hover:border-emerald-400 transition-colors flex flex-col justify-between">
              <div className="text-[8.5px] font-extrabold text-emerald-700 flex items-center justify-between gap-0.5">
                <div className="flex items-center gap-0.5 min-w-0">
                  <Wallet size={9.5} className="shrink-0" />
                  <span className="truncate">Colle...</span>
                </div>
                <span className="text-[8px] font-black text-emerald-800 bg-emerald-200/90 px-1 py-0.25 rounded-full border border-emerald-300 shrink-0">
                  {data.metrics.collectionPercentage}
                </span>
              </div>
              <div className="text-[12px] font-black text-slate-900 leading-tight">
                {data.metrics.totalCollection}
              </div>
            </div>

            {/* Card 6: Total Balance */}
            <div className="bg-red-50/50 p-1.5 rounded-lg border border-red-100 shadow-2xs hover:border-red-300 transition-colors flex flex-col justify-between">
              <div className="text-[8.5px] font-extrabold text-red-600 flex items-center gap-0.5">
                <AlertCircle size={9.5} className="shrink-0" />
                <span className="truncate">Total Balance</span>
              </div>
              <div className="text-[12px] font-black text-[#ef4444] leading-tight">
                {data.metrics.totalBalance}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Quick Data Entry Drawer Component */}
      <QuickDataEntryDrawer
        isOpen={isQuickDataEntryOpen}
        onClose={() => setIsQuickDataEntryOpen(false)}
        initialData={{
          upicNo: data.upicNo,
          societyName: data.societyName,
          landOwnerName: data.landOwnerName,
          builderName: data.builderName,
          societyEmail: data.societyEmail,
          secretaryName: data.secretaryName,
          secretaryMobile: data.secretaryMobile,
          secretaryEmail: data.secretaryEmail,
          societyAddress: data.societyAddress,
        }}
        onSave={(updated) => {
          setIsQuickDataEntryOpen(false);
        }}
      />
    </div>
  );
}
