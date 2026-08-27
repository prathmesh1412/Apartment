"use client";

import React, { useState, useCallback } from 'react';
import {
  Copy,
  Check,
  BarChart3,
  ShieldAlert,
  FileSpreadsheet,
  Wallet,
  Percent,
  AlertCircle,
  Building2,
  MapPin,
  Landmark,
  Tag,
  Map,
  Compass,
  Grid,
  UserCheck,
  HardHat,
  Mail,
  Phone,
  AtSign,
  Home,
  Ruler,
  Maximize,
  History,
  Layers,
  PieChart,
  Hash,
  Pencil,
  TrendingUp
} from 'lucide-react';
import QuickDataEntryDrawer from './QuickDataEntryDrawer';

// ============================================================================
// Types & Data Transfer Objects (DTOs)
// ============================================================================

export interface FinancialMetric {
  label: string;
  value: string;
  type: 'default' | 'primary' | 'warning' | 'success' | 'danger';
  icon: React.ReactNode;
}

export interface PropertyDetailsData {
  upicNo: string;
  division: string;
  wardNo: string;
  societyName: string;
  category: string;
  taxZone: string;
  subZoneCsn: string;
  plotNo: string;
  landOwnerName: string;
  builderName: string;
  societyEmail: string;
  secretaryName: string;
  secretaryMobile: string;
  secretaryEmail: string;
  societyAddress: string;
  propertyDescription?: string;
  plotArea: string;
  carpetBuiltUpArea: string;
  oldCarpetBuiltUpArea: string;
  totalFloors: string;
  totalPropertiesBreakdown: string;
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
// Default Mock Data matching screenshot exactly
// ============================================================================

const DEFAULT_PROPERTY_DATA: PropertyDetailsData = {
  upicNo: 'UPIC-270465-2024-000123',
  division: 'कोपरी',
  wardNo: 'Ward I - Kopri',
  societyName: 'MATOSHREE BUILDERS',
  category: 'Apartment',
  propertyDescription: 'निवासी',
  taxZone: '1 - KOLSHEET',
  subZoneCsn: 'ADHAR KO - CSN005A',
  plotNo: '5S',
  landOwnerName: 'MATOSHREE BUILDERS',
  builderName: 'MATOSHREE BUILDERS',
  societyEmail: 'contact@matoshreebuilders.in',
  secretaryName: 'Amar Jadhav',
  secretaryMobile: '+91 98765 43210',
  secretaryEmail: 'amar.jadhav@matoshreebuilders.in',
  societyAddress: 'Plot No. 55, Kopri, Thane (W) - 400601, Maharashtra',
  plotArea: '4,356.60 sq.ft',
  carpetBuiltUpArea: '538.30 / 960.00',
  oldCarpetBuiltUpArea: '538.30 / 960.00',
  totalFloors: 'G + 7',
  totalPropertiesBreakdown: '16 / 2 / 1',
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
// Main Component
// ============================================================================

export default function PropertyDetailsCard({
  data: customData,
  className = '',
  onCopyUpic,
}: PropertyDetailsCardProps) {
  const data: PropertyDetailsData = { ...DEFAULT_PROPERTY_DATA, ...customData };
  const [copied, setCopied] = useState(false);
  const [isQuickDataEntryOpen, setIsQuickDataEntryOpen] = useState(false);

  const [initialDrawerTab, setInitialDrawerTab] = useState<string | undefined>(undefined);

  React.useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.activeTab) {
        setInitialDrawerTab(customEvent.detail.activeTab);
      }
      setIsQuickDataEntryOpen(true);
    };
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

        {/* 1. Left Thumbnail Image - Compact Height */}
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

          {/* Header Row: Property No., UPIC ID, and Society Name all formatted strictly IN-LINE */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 pb-1.5 border-b border-slate-200/50">
            {/* 1. Property No. (Inline) */}
            <div className="shrink-0 flex items-center gap-2">
              <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wide flex items-center gap-1 shrink-0">
                <Hash size={11} className="text-slate-400 shrink-0" />
                Property No.:
              </span>
              <span className="font-extrabold text-[#ef4444] text-[12.5px] tracking-tight">
                {data.propertyNo || '270465-2024-000123'}
              </span>
            </div>

            {/* 2. UPIC ID (Inline) */}
            <div className="shrink-0 flex items-center gap-2">
              <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wide flex items-center gap-1 shrink-0">
                <Hash size={11} className="text-blue-500 shrink-0" />
                UPIC ID:
              </span>
              <span className="font-extrabold text-[#ef4444] text-[12.5px] tracking-tight">
                {data.upicNo}
              </span>
              <button
                onClick={handleCopy}
                className="p-1 hover:bg-slate-100 rounded text-blue-600 transition-colors cursor-pointer relative ml-0.5"
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

            {/* 3. Society Name (Inline & Expands) */}
            <div className="flex-1 min-w-0 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wide flex items-center gap-1 shrink-0">
                  <Building2 size={11} className="text-slate-400 shrink-0" />
                  Owner Name:
                </span>
                <span className="font-black text-[#ef4444] text-[12.5px] tracking-tight truncate" title={data.societyName}>
                  {data.societyName}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsQuickDataEntryOpen(true)}
                className="p-0.5 hover:bg-blue-50 rounded-md text-blue-600 transition-colors cursor-pointer shrink-0 ml-0.5"
                title="Edit Property Details"
                aria-label="Edit Property Details"
              >
                <Pencil size={12} />
              </button>
            </div>
          </div>

          {/* 3-Column Specifications Grid - Apartment Property Fields */}
          <div className="flex flex-col md:flex-row gap-4 text-[10.5px] pt-1">
            
            {/* Column 1: Location & Property Info (6 Fields - Reduced Width) */}
            <div className="flex-[0.7] min-w-0 space-y-2 border-r-0 md:border-r border-slate-200/50 pr-3">
              <div className="flex justify-between md:justify-start md:gap-4 items-center">
                <span className="font-extrabold text-slate-600 w-[115px] shrink-0 flex items-center gap-1">
                  <MapPin size={11} className="text-[#2563eb] shrink-0" />
                  Division
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.division}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-4 items-center">
                <span className="font-extrabold text-slate-600 w-[115px] shrink-0 flex items-center gap-1">
                  <Landmark size={11} className="text-[#2563eb] shrink-0" />
                  Ward No.
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.wardNo}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-4 items-center">
                <span className="font-extrabold text-slate-600 w-[115px] shrink-0 flex items-center gap-1">
                  <Tag size={11} className="text-[#2563eb] shrink-0" />
                  Category
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.category}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-4 items-center">
                <span className="font-extrabold text-slate-600 w-[115px] shrink-0 flex items-center gap-1">
                  <Map size={11} className="text-[#2563eb] shrink-0" />
                  Tax Zone & Name
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.taxZone}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-4 items-center">
                <span className="font-extrabold text-slate-600 w-[115px] shrink-0 flex items-center gap-1">
                  <Compass size={11} className="text-[#2563eb] shrink-0" />
                  Sub Zone & CSN No.
                </span>
                <span className="font-black text-[#2563eb] truncate" title={data.subZoneCsn}>{data.subZoneCsn}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-4 items-center">
                <span className="font-extrabold text-slate-600 w-[115px] shrink-0 flex items-center gap-1">
                  <Grid size={11} className="text-[#2563eb] shrink-0" />
                  Plot No.
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.plotNo}</span>
              </div>
            </div>

            {/* Column 2: Ownership & Contact Details (6 Fields - Increased Width) */}
            <div className="flex-[1.15] min-w-0 space-y-2 border-r-0 md:border-r border-slate-200/50 px-0 md:px-3">
              <div className="flex justify-between md:justify-start md:gap-4 items-center">
                <span className="font-extrabold text-slate-600 w-[130px] shrink-0 flex items-center gap-1">
                  <UserCheck size={11} className="text-[#2563eb] shrink-0" />
                  Land Owner Name
                </span>
                <span className="font-black text-[#2563eb] truncate" title={data.landOwnerName}>{data.landOwnerName}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-4 items-center">
                <span className="font-extrabold text-slate-600 w-[130px] shrink-0 flex items-center gap-1">
                  <HardHat size={11} className="text-[#2563eb] shrink-0" />
                  Builder Name
                </span>
                <span className="font-black text-[#2563eb] truncate" title={data.builderName}>{data.builderName}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-4 items-center">
                <span className="font-extrabold text-slate-600 w-[130px] shrink-0 flex items-center gap-1">
                  <Mail size={11} className="text-[#2563eb] shrink-0" />
                  Society Email
                </span>
                <span className="font-black text-[#2563eb] truncate" title={data.societyEmail}>{data.societyEmail}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-4 items-center">
                <span className="font-extrabold text-slate-600 w-[130px] shrink-0 flex items-center gap-1">
                  <UserCheck size={11} className="text-[#2563eb] shrink-0" />
                  Secretary Name
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.secretaryName}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-4 items-center">
                <span className="font-extrabold text-slate-600 w-[130px] shrink-0 flex items-center gap-1">
                  <Phone size={11} className="text-[#2563eb] shrink-0" />
                  Secretary Mobile No.
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.secretaryMobile}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-4 items-center">
                <span className="font-extrabold text-slate-600 w-[130px] shrink-0 flex items-center gap-1">
                  <AtSign size={11} className="text-[#2563eb] shrink-0" />
                  Secretary Email ID
                </span>
                <span className="font-black text-[#2563eb] truncate" title={data.societyEmail}>{data.secretaryEmail}</span>
              </div>
            </div>

            {/* Column 3: Area Metrics & Building Info (6 Fields - Increased Width) */}
            <div className="flex-[1.15] min-w-0 space-y-2 pl-0 md:pl-3">
              <div className="flex justify-between md:justify-start md:gap-4 items-start">
                <span className="font-extrabold text-slate-600 w-[130px] shrink-0 flex items-center gap-1">
                  <Home size={11} className="text-[#2563eb] shrink-0 mt-0.5" />
                  Society Address
                </span>
                <span className="font-black text-[#2563eb] leading-tight truncate" title={data.societyAddress}>{data.societyAddress}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-4 items-center">
                <span className="font-extrabold text-slate-600 w-[130px] shrink-0 flex items-center gap-1">
                  <Ruler size={11} className="text-[#2563eb] shrink-0" />
                  Plot Area
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.plotArea}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-4 items-center">
                <span className="font-extrabold text-slate-600 w-[130px] shrink-0 flex items-center gap-1">
                  <Maximize size={11} className="text-[#2563eb] shrink-0" />
                  Carpet / Built-up Area
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.carpetBuiltUpArea}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-4 items-center">
                <span className="font-extrabold text-slate-600 w-[130px] shrink-0 flex items-center gap-1">
                  <History size={11} className="text-[#2563eb] shrink-0" />
                  Old Carpet / Built-up
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.oldCarpetBuiltUpArea}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-4 items-center">
                <span className="font-extrabold text-slate-600 w-[130px] shrink-0 flex items-center gap-1">
                  <Layers size={11} className="text-[#2563eb] shrink-0" />
                  Total Floors
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.totalFloors}</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-4 items-center">
                <span className="font-extrabold text-slate-600 w-[130px] shrink-0 flex items-center gap-1">
                  <PieChart size={11} className="text-[#2563eb] shrink-0" />
                  Total Properties (Res/Comm/Amen)
                </span>
                <span className="font-black text-[#2563eb] truncate">{data.totalPropertiesBreakdown}</span>
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
              ADD. REVENUE
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[8.5px] font-black text-slate-900 uppercase tracking-wider">
                Desc:
              </span>
              <span className="text-[11px] font-black text-red-600 bg-red-50 border border-red-300 px-1.5 py-0.25 rounded shadow-2xs tracking-wide">
                {data.propertyDescription || 'निवासी'}
              </span>
            </div>
          </div>

          {/* Hero Revenue Row - Compact Glass Card */}
          <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-blue-50/80 via-white to-blue-50/40 p-2 rounded-xl border border-blue-100 shadow-2xs hover:shadow-md transition-all duration-300 group cursor-pointer">
            {/* 3D Cyan Smiling Avatar with Borderless 3D Float & Hover Animation */}
            <div className="w-[44px] h-[44px] shrink-0 relative flex items-center justify-center cursor-pointer group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-bounce">
              <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/cyan_smile.jpg"
                  alt="3D Cyan Smile Avatar"
                  className="w-full h-full object-cover scale-150 select-none mix-blend-multiply"
                />
              </div>
            </div>

            {/* Revenue Numbers (Aligned Right) */}
            <div className="flex-1 flex flex-col items-end text-right">
              <div className="text-[16px] font-black text-slate-900 tracking-tight leading-none group-hover:text-[#1d6bf3] transition-colors">
                {data.additionalRevenue.amount}
              </div>
              <div className="flex items-center justify-end gap-1 mt-0.5">
                <span className="bg-emerald-100/90 border border-emerald-200 text-emerald-700 font-extrabold text-[9px] px-1 py-0.25 rounded-full flex items-center gap-0.5 leading-none">
                  ↑ {data.additionalRevenue.growthPercent}
                </span>
                <span className="text-slate-400 text-[8.5px] font-bold">
                  {data.additionalRevenue.comparisonPeriod}
                </span>
              </div>
            </div>
          </div>

          {/* 6 Metric Cards (Symmetrical 2 rows x 3 columns) - Compact Fit */}
          <div className="grid grid-cols-3 gap-1">

            {/* 1. Current Tax */}
            <div className="bg-blue-50/50 hover:bg-blue-100/80 border-2 border-blue-400 hover:border-blue-600 rounded-lg p-1.5 flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 cursor-pointer group/card">
              <div className="flex items-center gap-1">
                <BarChart3 size={11} className="text-blue-500 group-hover/card:scale-110 transition-transform shrink-0" />
                <span className="text-[8px] font-bold text-blue-600 truncate" title="Current Tax">Current Tax</span>
              </div>
              <div className="text-[11.5px] font-black text-slate-900 mt-0.5 group-hover/card:text-blue-700 transition-colors">
                {data.metrics.totalTax}
              </div>
            </div>

            {/* 2. Retrospective Tax */}
            <div className="bg-blue-50/50 hover:bg-blue-100/80 border-2 border-blue-400 hover:border-blue-600 rounded-lg p-1.5 flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 cursor-pointer group/card">
              <div className="flex items-center gap-1">
                <FileSpreadsheet size={11} className="text-blue-500 group-hover/card:scale-110 transition-transform shrink-0" />
                <span className="text-[8px] font-bold text-blue-600 truncate" title="Retrospective Tax">Retro Tax</span>
              </div>
              <div className="text-[11.5px] font-black text-slate-900 mt-0.5 group-hover/card:text-blue-700 transition-colors">
                {data.metrics.retrospectiveTax}
              </div>
            </div>

            {/* 3. Total Tax */}
            <div className="bg-blue-50/50 hover:bg-blue-100/80 border-2 border-blue-400 hover:border-blue-600 rounded-lg p-1.5 flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 cursor-pointer group/card">
              <div className="flex items-center gap-1">
                <BarChart3 size={11} className="text-blue-600 group-hover/card:scale-110 transition-transform shrink-0" />
                <span className="text-[8px] font-bold text-blue-600 truncate" title="Total Tax">Total Tax</span>
              </div>
              <div className="text-[11.5px] font-black text-slate-900 mt-0.5 group-hover/card:text-blue-700 transition-colors">
                ₹1.83L
              </div>
            </div>

            {/* 4. Total Demand */}
            <div className="bg-amber-50/60 hover:bg-amber-100/80 border-2 border-amber-400 hover:border-amber-600 rounded-lg p-1.5 flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 cursor-pointer group/card">
              <div className="flex items-center gap-1">
                <ShieldAlert size={11} className="text-amber-600 group-hover/card:scale-110 transition-transform shrink-0" />
                <span className="text-[8px] font-bold text-amber-700 truncate" title="Total Demand">Total Demand</span>
              </div>
              <div className="text-[11.5px] font-black text-slate-900 mt-0.5 group-hover/card:text-amber-700 transition-colors">
                {data.metrics.totalDemand}
              </div>
            </div>

            {/* 5. Total Collection & % Combined Card */}
            <div className="bg-emerald-50/60 hover:bg-emerald-100/80 border-2 border-emerald-400 hover:border-emerald-600 rounded-lg p-1.5 flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 cursor-pointer group/card">
              <div className="flex items-center justify-between gap-0.5">
                <div className="flex items-center gap-1 min-w-0">
                  <Wallet size={11} className="text-emerald-600 group-hover/card:scale-110 transition-transform shrink-0" />
                  <span className="text-[8px] font-bold text-emerald-700 truncate" title="Total Collection">Collection</span>
                </div>
                <span className="bg-emerald-200/80 text-emerald-800 font-extrabold text-[8px] px-1 py-0.25 rounded-full leading-none shrink-0 border border-emerald-400">
                  {data.metrics.collectionPercentage}
                </span>
              </div>
              <div className="text-[11.5px] font-black text-slate-900 mt-0.5 group-hover/card:text-emerald-700 transition-colors">
                {data.metrics.totalCollection}
              </div>
            </div>

            {/* 6. Total Balance */}
            <div className="bg-rose-50/60 hover:bg-rose-100/80 border-2 border-rose-400 hover:border-rose-600 rounded-lg p-1.5 flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 cursor-pointer group/card">
              <div className="flex items-center gap-1">
                <AlertCircle size={11} className="text-rose-600 group-hover/card:scale-110 transition-transform shrink-0" />
                <span className="text-[8px] font-bold text-rose-600 truncate" title="Total Balance">Total Balance</span>
              </div>
              <div className="text-[11.5px] font-black text-[#ef4444] mt-0.5 group-hover/card:text-rose-700 transition-colors">
                {data.metrics.totalBalance}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Property Quick Data Entry Modal Drawer */}
      <QuickDataEntryDrawer
        isOpen={isQuickDataEntryOpen}
        onClose={() => setIsQuickDataEntryOpen(false)}
        propertyData={data}
        initialTab={initialDrawerTab as any}
      />
    </div>
  );
}
