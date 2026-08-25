import React from 'react';
import {
  Home,
  Briefcase,
  ShieldCheck,
  TrendingUp,
  Building2
} from 'lucide-react';
import { WingDetails } from '@/components/modules/Apartment_design/shared/mockData';

interface WingCardProps {
  wing: WingDetails;
  activeMetric: 'discount' | 'exemptions' | 'rvImpact';
  onMetricClick: (e: React.MouseEvent<HTMLButtonElement>, wing: WingDetails, metricType: 'discount' | 'exemptions' | 'rvImpact') => void;
  onDeleteClick: (e: React.MouseEvent<HTMLButtonElement>, wingId: string) => void;
  onAmcClick?: (e: React.MouseEvent<HTMLButtonElement>, wing: WingDetails) => void;
  onClick?: () => void;
}

export default function WingCard({
  wing,
  activeMetric,
  onMetricClick,
  onDeleteClick,
  onAmcClick,
  onClick
}: WingCardProps) {
  // Circle badge color
  const getBadgeBg = (id: string) => {
    switch (id) {
      case 'A': return 'bg-emerald-600';
      case 'B': return 'bg-purple-600';
      case 'C': return 'bg-emerald-600';
      case 'D': return 'bg-orange-600';
      default: return 'bg-blue-600';
    }
  };

  const getRating = (id: string) => {
    switch (id) {
      case 'A': return '4.8';
      case 'B': return '4.5';
      case 'C': return '4.7';
      case 'D': return '4.9';
      default: return '4.5';
    }
  };

  const getAreaFt = (id: string) => {
    switch (id) {
      case 'A': return '12,450';
      case 'B': return '11,520';
      case 'C': return '9,850';
      case 'D': return '8,400';
      default: return '10,000';
    }
  };

  const getSelectedPct = (id: string) => {
    switch (id) {
      case 'A': return '34%';
      case 'B': return '31%';
      case 'C': return '44%';
      case 'D': return '28%';
      default: return '30%';
    }
  };

  // Row breakdown data matching screenshot design
  const rowData = [
    {
      type: 'Residential',
      icon: <Home size={11} className="text-blue-500 shrink-0" />,
      units: wing.res || '16',
      area: wing.id === 'A' ? '8,420' : wing.id === 'B' ? '8,010' : wing.id === 'C' ? '6,420' : '5,800',
      old: wing.id === 'A' ? '₹48k' : wing.id === 'B' ? '₹50.4k' : wing.id === 'C' ? '₹41.1k' : '₹38k',
      cur: wing.id === 'A' ? '₹25.8k' : wing.id === 'B' ? '₹23.8k' : wing.id === 'C' ? '₹27.7k' : '₹22k',
      retro: wing.id === 'A' ? '₹41.4k' : wing.id === 'B' ? '₹41.4k' : wing.id === 'C' ? '₹31k' : '₹28k',
      total: wing.id === 'A' ? '₹67.2k' : wing.id === 'B' ? '₹71.2k' : wing.id === 'C' ? '₹58.7k' : '₹50k',
      deltaRev: wing.id === 'A' ? '+₹20.8k' : wing.id === 'B' ? '+₹20.8k' : wing.id === 'C' ? '+₹17.6k' : '+₹14.2k',
    },
    {
      type: 'Commercial',
      icon: <Briefcase size={11} className="text-amber-500 shrink-0" />,
      units: wing.com || '2',
      area: wing.id === 'A' ? '3,120' : wing.id === 'B' ? '3,120' : wing.id === 'C' ? '2,820' : '2,100',
      old: wing.id === 'A' ? '₹25.1k' : wing.id === 'B' ? '₹25.1k' : wing.id === 'C' ? '₹23.9k' : '₹18k',
      cur: wing.id === 'A' ? '₹11.7k' : wing.id === 'B' ? '₹11.7k' : wing.id === 'C' ? '₹13.6k' : '₹9k',
      retro: wing.id === 'A' ? '₹22.9k' : wing.id === 'B' ? '₹22.9k' : wing.id === 'C' ? '₹16k' : '₹12k',
      total: wing.id === 'A' ? '₹34.6k' : wing.id === 'B' ? '₹34.6k' : wing.id === 'C' ? '₹29.6k' : '₹21k',
      deltaRev: wing.id === 'A' ? '+₹9.9k' : wing.id === 'B' ? '+₹9.9k' : wing.id === 'C' ? '+₹5.7k' : '+₹4.1k',
    },
    {
      type: 'Amenity',
      icon: <ShieldCheck size={11} className="text-purple-500 shrink-0" />,
      units: wing.amen || '1',
      area: wing.id === 'A' ? '790' : wing.id === 'B' ? '790' : wing.id === 'C' ? '600' : '500',
      old: wing.id === 'A' ? '₹6.8k' : wing.id === 'B' ? '₹6.8k' : wing.id === 'C' ? '₹5.6k' : '₹4k',
      cur: wing.id === 'A' ? '₹2.1k' : wing.id === 'B' ? '₹2.1k' : wing.id === 'C' ? '₹2.8k' : '₹1.8k',
      retro: wing.id === 'A' ? '₹4.8k' : wing.id === 'B' ? '₹4.8k' : wing.id === 'C' ? '₹3.2k' : '₹2.5k',
      total: wing.id === 'A' ? '₹7k' : wing.id === 'B' ? '₹7k' : wing.id === 'C' ? '₹6k' : '₹4.3k',
      deltaRev: wing.id === 'A' ? '+₹0.2k' : wing.id === 'B' ? '+₹0.2k' : wing.id === 'C' ? '+₹0.3k' : '+₹0.1k',
    }
  ];

  return (
    <div
      onClick={onClick}
      className="bg-white border border-blue-900/20 hover:border-blue-900/40 rounded-2xl shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between h-full cursor-pointer select-none"
    >
      {/* 1. BLUE HEADER BAR */}
      <div className="bg-[#002fbe] text-white px-3 py-2 flex items-center justify-between gap-2 shrink-0">
        {/* Left: Badge + Wing Name + Rating */}
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white font-black text-[11px] shrink-0 ${getBadgeBg(wing.id)}`}>
            {wing.id}
          </div>
          <div>
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-[12.5px] font-black text-white tracking-tight">{wing.wing}</span>
              <span className="bg-[#facc15] text-[#422006] text-[9.5px] font-black px-1.5 py-0.25 rounded flex items-center gap-0.5 leading-none">
                ★ {getRating(wing.id)}
              </span>
            </div>
            <span className="text-[9.5px] text-slate-300 font-semibold leading-tight block mt-0.5">{wing.name}</span>
          </div>
        </div>

        {/* Right: Pill Stats */}
        <div className="flex items-center gap-1">
          <div className="bg-white text-slate-900 px-1.5 py-0.5 rounded-md text-center min-w-[38px]">
            <span className="font-black text-[9.5px] leading-none block">{wing.floors.replace('Floors', '')}</span>
            <span className="font-extrabold text-[7px] text-slate-400 uppercase leading-none block mt-0.5">FLOORS</span>
          </div>
          <div className="bg-white text-slate-900 px-1.5 py-0.5 rounded-md text-center min-w-[34px]">
            <span className="font-black text-[9.5px] leading-none block">{wing.units}</span>
            <span className="font-extrabold text-[7px] text-slate-400 uppercase leading-none block mt-0.5">PROPS</span>
          </div>
          <div className="bg-white text-slate-900 px-1.5 py-0.5 rounded-md text-center min-w-[46px]">
            <span className="font-black text-[9.5px] leading-none block">{getAreaFt(wing.id)}</span>
            <span className="font-extrabold text-[7px] text-slate-400 uppercase leading-none block mt-0.5">AREA FT²</span>
          </div>
          <div className="bg-white text-slate-900 px-1.5 py-0.5 rounded-md text-center min-w-[42px]">
            <span className="font-black text-[9.5px] text-emerald-600 leading-none block">{getSelectedPct(wing.id)}</span>
            <span className="font-extrabold text-[7px] text-emerald-600 uppercase leading-none block mt-0.5">SELECTED</span>
          </div>
          {/* Action icon button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (onAmcClick) {
                onAmcClick(e, wing);
              } else {
                onDeleteClick(e, wing.id);
              }
            }}
            className="bg-white/10 hover:bg-white/20 p-1 rounded-md text-white transition flex flex-col items-center justify-center relative cursor-pointer ml-0.5 border-none"
            title="View AMC Details"
          >
            <Building2 size={13} />
            <span className="text-[6px] font-black bg-blue-600 text-white rounded px-0.5 py-0 leading-none absolute -bottom-1">AMC</span>
          </button>
        </div>
      </div>

      {/* 2. MIDDLE BREAKDOWN TABLE */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse text-[9.5px]">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-400 font-extrabold uppercase text-[8px] h-[26px]">
              <th className="px-2.5 py-1">TYPE</th>
              <th className="px-1.5 py-1 text-center">UNITS</th>
              <th className="px-1.5 py-1 text-right">AREA FT²</th>
              <th className="px-1.5 py-1 text-right">OLD</th>
              <th className="px-1.5 py-1 text-right text-blue-600">CUR</th>
              <th className="px-1.5 py-1 text-right text-purple-600">RETRO</th>
              <th className="px-1.5 py-1 text-right">TOTAL</th>
              <th className="px-2 py-1 text-right text-emerald-600">Δ REV</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rowData.map((row, idx) => (
              <tr key={idx} className="h-[28px] hover:bg-slate-50/60 font-semibold">
                <td className="px-2.5 py-0.5">
                  <div className="flex items-center gap-1.5">
                    {row.icon}
                    <span className="font-bold text-slate-800 text-[10px]">{row.type}</span>
                  </div>
                </td>
                <td className="px-1.5 py-0.5 text-center font-bold text-slate-800">{row.units}</td>
                <td className="px-1.5 py-0.5 text-right font-bold text-slate-700">{row.area}</td>
                <td className="px-1.5 py-0.5 text-right text-slate-500 font-medium">{row.old}</td>
                <td className="px-1.5 py-0.5 text-right text-blue-600 font-bold">{row.cur}</td>
                <td className="px-1.5 py-0.5 text-right text-purple-600 font-bold">{row.retro}</td>
                <td className="px-1.5 py-0.5 text-right font-black text-slate-900">{row.total}</td>
                <td className="px-2 py-0.5 text-right">
                  <span className="bg-emerald-50 text-emerald-600 font-black text-[9px] px-1.5 py-0.5 rounded border border-emerald-200/60 inline-block whitespace-nowrap">
                    {row.deltaRev}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 3. BOTTOM FOOTER METRICS (3 Sub-Cards) */}
      <div className="p-2 bg-slate-50/60 border-t border-slate-200 grid grid-cols-3 gap-1.5">
        {/* Card 1: OVERALL TAX */}
        <div className="bg-white border border-slate-200/80 rounded-xl p-2 flex flex-col justify-between shadow-2xs">
          <span className="text-[7.5px] font-black text-slate-400 uppercase tracking-wider block">OVERALL TAX</span>
          <span className="text-[11px] font-black text-slate-900 leading-tight block mt-0.5">
            {wing.id === 'A' ? '₹70.4k – ₹1.13L' : wing.id === 'B' ? '₹62.3k – ₹1.13L' : wing.id === 'C' ? '₹70.8k – ₹94.1k' : '₹60.2k – ₹88.5k'}
          </span>
          <span className="text-[7.5px] font-bold text-slate-400 block mt-0.5">Old vs Total Tax Comparison</span>
        </div>

        {/* Card 2: REVENUE IMPACT */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onMetricClick(e, wing, 'rvImpact');
          }}
          className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-2 flex flex-col justify-between shadow-2xs text-left cursor-pointer hover:bg-emerald-100/60 transition"
        >
          <span className="text-[7.5px] font-black text-emerald-800 uppercase tracking-wider block">REVENUE IMPACT</span>
          <div className="flex items-center gap-1 mt-0.5">
            <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
              <TrendingUp size={10} className="text-emerald-600" />
            </div>
            <span className="text-[12px] font-black text-emerald-700 leading-tight">
              {wing.id === 'A' ? '↑ ₹34.4k' : wing.id === 'B' ? '↑ ₹30.5k' : wing.id === 'C' ? '↑ ₹23.5k' : '↑ ₹18.2k'}
            </span>
          </div>
          <span className="text-[7.5px] font-bold text-emerald-600 block mt-0.5">
            {wing.id === 'A' ? 'Increase 43.5% vs old tax' : wing.id === 'B' ? 'Increase 32.0% vs old tax' : wing.id === 'C' ? 'Increase 31.1% vs old tax' : 'Increase 25.4% vs old tax'}
          </span>
        </button>

        {/* Card 3: EXEMPTION APPLIED */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onMetricClick(e, wing, 'exemptions');
          }}
          className="bg-purple-50/70 border border-purple-200/80 rounded-xl p-2 flex flex-col justify-between shadow-2xs text-left cursor-pointer hover:bg-purple-100/60 transition"
        >
          <span className="text-[7.5px] font-black text-purple-800 uppercase tracking-wider block">EXEMPTION APPLIED</span>
          <span className="text-[11px] font-black text-purple-900 leading-tight block mt-0.5">
            {wing.id === 'A' ? '₹2,540' : wing.id === 'B' ? '₹1,880' : wing.id === 'C' ? '₹4,720' : '₹1,200'}
          </span>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="bg-purple-200/80 text-purple-800 font-black text-[7.5px] px-1 py-0.25 rounded uppercase">
              {wing.id === 'C' ? '1 PROPERTY' : '2 PROPERTIES'}
            </span>
            <span className="text-[7.5px] font-bold text-purple-600">Exempted</span>
          </div>
          <span className="text-[8px] font-black text-blue-600 hover:underline block mt-0.5">View List &gt;</span>
        </button>
      </div>
    </div>
  );
}
