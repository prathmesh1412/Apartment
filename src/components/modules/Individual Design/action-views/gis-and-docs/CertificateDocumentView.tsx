"use client";

import React, { useState } from 'react';
import {
  Folder,
  Plus,
  X,
  Search,
  Edit3,
  Trash2,
  Eye,
  AlertTriangle,
  CheckCircle,
  FileText,
  ChevronDown,
  Building2,
  Home,
  Store,
  Upload,
  Calendar,
  Check
} from 'lucide-react';

interface CertificateRecord {
  id: number;
  level: 'Apartment' | 'Wing' | 'Unit';
  applicableToTitle: string;
  applicableToSub: string;
  unitBadges?: string[];
  missingUnitsText?: string;
  certCode: string;
  certTitle: string;
  certBg: string;
  certText: string;
  certDate: string;
  certNumber: string;
  status: 'Active' | 'Pending' | 'Expired';
  docsCount: number;
}

const initialRecords: CertificateRecord[] = [
  {
    id: 1,
    level: 'Apartment',
    applicableToTitle: 'Entire Apartment',
    applicableToSub: '3 wings · 28 units',
    certCode: 'OC',
    certTitle: 'Occupancy Certificate',
    certBg: 'bg-blue-100 text-blue-700',
    certText: 'text-blue-700',
    certDate: '15/03/2010',
    certNumber: 'PMC/OC/2010/1234',
    status: 'Active',
    docsCount: 1
  },
  {
    id: 2,
    level: 'Wing',
    applicableToTitle: 'A Wing — Sai Block',
    applicableToSub: '11 units in this wing',
    certCode: 'FN',
    certTitle: 'Fire NOC',
    certBg: 'bg-red-100 text-red-700',
    certText: 'text-red-700',
    certDate: '20/06/2023',
    certNumber: 'PCMC/FNOC/2023/567',
    status: 'Active',
    docsCount: 2
  },
  {
    id: 3,
    level: 'Unit',
    applicableToTitle: 'Selected Units',
    applicableToSub: '2/7 units',
    unitBadges: ['101', '102'],
    missingUnitsText: '5 missing',
    certCode: 'EB',
    certTitle: 'Electricity Bill',
    certBg: 'bg-amber-100 text-amber-700',
    certText: 'text-amber-700',
    certDate: '01/07/2024',
    certNumber: 'MSEB/2024/B-101',
    status: 'Pending',
    docsCount: 1
  },
  {
    id: 4,
    level: 'Apartment',
    applicableToTitle: 'Entire Apartment',
    applicableToSub: '3 wings · 28 units',
    certCode: 'SS',
    certTitle: 'Structural Stability Certificate',
    certBg: 'bg-blue-100 text-blue-700',
    certText: 'text-blue-700',
    certDate: '10/01/2022',
    certNumber: 'PWD/SSC/2022/089',
    status: 'Active',
    docsCount: 1
  },
  {
    id: 5,
    level: 'Apartment',
    applicableToTitle: 'Entire Apartment',
    applicableToSub: '3 wings · 28 units',
    certCode: 'BP',
    certTitle: 'Building Permission',
    certBg: 'bg-purple-100 text-purple-700',
    certText: 'text-purple-700',
    certDate: '04/05/2005',
    certNumber: 'PMC/BP/2005/0432',
    status: 'Active',
    docsCount: 1
  }
];

// Document Types definition
const documentTypesList = [
  { code: 'OC', title: 'Occupancy Certificate', bg: 'bg-blue-100 text-blue-700' },
  { code: 'CC', title: 'Completion Certificate', bg: 'bg-slate-100 text-slate-700' },
  { code: 'EB', title: 'Electricity Bill', bg: 'bg-amber-100 text-amber-700' },
  { code: 'BP', title: 'Building Permission', bg: 'bg-purple-100 text-purple-700' },
  { code: 'SP', title: 'Sanctioned Plan', bg: 'bg-indigo-100 text-indigo-700' },
  { code: 'CM', title: 'Commencement Certificate', bg: 'bg-emerald-100 text-emerald-700' },
  { code: 'FN', title: 'Fire NOC', bg: 'bg-red-100 text-red-700' },
  { code: 'SS', title: 'Structural Stability Certificate', bg: 'bg-sky-100 text-sky-700' },
  { code: 'OD', title: 'Other Document', bg: 'bg-gray-100 text-gray-700' }
];

// Mock units list for Unit Level selection
const mockUnits = [
  { unit: '101', wing: 'Wing 1A', floor: '1st Floor', use: 'Residential' },
  { unit: '102', wing: 'Wing 1A', floor: '1st Floor', use: 'Residential' },
  { unit: '103', wing: 'Wing 1A', floor: '1st Floor', use: 'Residential' },
  { unit: '201', wing: 'Wing 1A', floor: '2nd Floor', use: 'Residential' },
  { unit: '202', wing: 'Wing 1A', floor: '2nd Floor', use: 'Residential' },
  { unit: 'S-01', wing: 'Wing 1A', floor: 'Ground', use: 'Commercial' },
  { unit: 'S-02', wing: 'Wing 1A', floor: 'Ground', use: 'Commercial' },
];

export default function CertificateDocumentView({ onClose }: { onClose: () => void }) {
  const [records, setRecords] = useState<CertificateRecord[]>(initialRecords);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [levelFilter, setLevelFilter] = useState('All Levels');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingRecordId, setEditingRecordId] = useState<number | null>(null);
  const [selectedRecordForDocs, setSelectedRecordForDocs] = useState<CertificateRecord | null>(null);

  // -------------------------------------------------------------
  // Add/Edit Certificate Record Drawer Form State
  // -------------------------------------------------------------
  const [appLevel, setAppLevel] = useState<'Apartment' | 'Wing' | 'Unit'>('Apartment');
  const [selectedWing, setSelectedWing] = useState<'A Wing' | 'B Wing' | 'C Wing'>('A Wing');
  const [selectedUnits, setSelectedUnits] = useState<string[]>([]);
  const [unitSearch, setUnitSearch] = useState('');
  const [unitWingFilter, setUnitWingFilter] = useState('A');
  const [unitFloorFilter, setUnitFloorFilter] = useState('All Floors');
  const [unitUseFilter, setUnitUseFilter] = useState('All Uses');

  const [selectedDocCode, setSelectedDocCode] = useState('OC');
  const [certDateInput, setCertDateInput] = useState('');
  const [certNumberInput, setCertNumberInput] = useState('');
  const [certStatusInput, setCertStatusInput] = useState<'Active' | 'Pending' | 'Expired'>('Active');
  const [certRemarksInput, setCertRemarksInput] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const selectedDocObj = documentTypesList.find(d => d.code === selectedDocCode) || documentTypesList[0];

  const handleOpenAddDrawer = () => {
    setEditingRecordId(null);
    setAppLevel('Apartment');
    setSelectedWing('A Wing');
    setSelectedDocCode('OC');
    setCertDateInput('');
    setCertNumberInput('');
    setCertStatusInput('Active');
    setCertRemarksInput('');
    setSelectedUnits([]);
    setUploadedFiles([]);
    setIsAddModalOpen(true);
  };

  const handleOpenEditDrawer = (rec: CertificateRecord) => {
    setEditingRecordId(rec.id);
    setAppLevel(rec.level);
    if (rec.applicableToTitle.includes('Wing')) {
      const wingName = rec.applicableToTitle.split(' ')[0] + ' Wing';
      setSelectedWing(wingName === 'B Wing' ? 'B Wing' : wingName === 'C Wing' ? 'C Wing' : 'A Wing');
    }
    setSelectedDocCode(rec.certCode);
    setCertDateInput(rec.certDate ? rec.certDate.split('/').reverse().join('-') : '');
    setCertNumberInput(rec.certNumber);
    setCertStatusInput(rec.status);
    setSelectedUnits(rec.unitBadges || []);
    setIsAddModalOpen(true);
  };

  const filteredRecords = records.filter(rec => {
    const matchesSearch =
      rec.certTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.certNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.applicableToTitle.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLevel = levelFilter === 'All Levels' || rec.level === levelFilter;
    const matchesStatus = statusFilter === 'All Status' || rec.status === statusFilter;
    const matchesType = typeFilter === 'All Types' || rec.certTitle === typeFilter;

    return matchesSearch && matchesLevel && matchesStatus && matchesType;
  });

  const handleSaveCertificateRecord = (e: React.FormEvent) => {
    e.preventDefault();

    let applicableTitle = 'Entire Apartment';
    let applicableSub = '3 wings · 28 units';
    let unitBadgesList: string[] | undefined = undefined;

    if (appLevel === 'Wing') {
      applicableTitle = `${selectedWing} — Sai Block`;
      applicableSub = '11 units in this wing';
    } else if (appLevel === 'Unit') {
      applicableTitle = 'Selected Units';
      applicableSub = `${selectedUnits.length}/7 units`;
      unitBadgesList = selectedUnits.length > 0 ? selectedUnits : ['101', '102'];
    }

    const formattedDate = certDateInput ? certDateInput.split('-').reverse().join('/') : '24/08/2026';

    if (editingRecordId !== null) {
      // Update existing record
      setRecords(records.map(rec => rec.id === editingRecordId ? {
        ...rec,
        level: appLevel,
        applicableToTitle: applicableTitle,
        applicableToSub: applicableSub,
        unitBadges: unitBadgesList,
        certCode: selectedDocObj.code,
        certTitle: selectedDocObj.title,
        certBg: selectedDocObj.bg,
        certDate: formattedDate,
        certNumber: certNumberInput,
        status: certStatusInput
      } : rec));
    } else {
      // Add new record
      const newRec: CertificateRecord = {
        id: Date.now(),
        level: appLevel,
        applicableToTitle: applicableTitle,
        applicableToSub: applicableSub,
        unitBadges: unitBadgesList,
        certCode: selectedDocObj.code,
        certTitle: selectedDocObj.title,
        certBg: selectedDocObj.bg,
        certText: 'text-blue-700',
        certDate: formattedDate,
        certNumber: certNumberInput || `PMC/${selectedDocObj.code}/2026/${Math.floor(1000 + Math.random() * 9000)}`,
        status: certStatusInput,
        docsCount: uploadedFiles.length > 0 ? uploadedFiles.length : 1
      };
      setRecords([newRec, ...records]);
    }

    setIsAddModalOpen(false);
    setEditingRecordId(null);

    // Reset Form
    setCertDateInput('');
    setCertNumberInput('');
    setCertRemarksInput('');
    setSelectedUnits([]);
    setUploadedFiles([]);
  };

  const handleDeleteRecord = (id: number) => {
    if (confirm('Are you sure you want to delete this certificate record?')) {
      setRecords(records.filter(r => r.id !== id));
    }
  };

  const toggleUnitSelection = (unitNo: string) => {
    setSelectedUnits(prev =>
      prev.includes(unitNo) ? prev.filter(u => u !== unitNo) : [...prev, unitNo]
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans select-none">
      {/* Dimmed Overlay Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      {/* Main Drawer Container (Sliding in from Right) */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-4xl lg:max-w-5xl xl:max-w-6xl bg-white border-l border-gray-200 shadow-2xl flex flex-col justify-between animate-slideLeft">

          {/* Top Banner Header */}
          <div className="bg-[#1e1b4b] px-5 py-3.5 flex items-center justify-between shrink-0 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                <Folder size={20} className="text-amber-400" />
              </div>
              <div>
                <h2 className="font-extrabold text-white text-base tracking-wide leading-none">Certificate & Document Records</h2>
                <span className="text-slate-300 text-[11px] font-semibold mt-1 block leading-none">Shivam Residency · {records.length} records</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleOpenAddDrawer}
                className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs px-4 py-2 rounded-lg border border-amber-300 shadow-xs flex items-center gap-1.5 cursor-pointer transition-all uppercase tracking-wider active:scale-95"
              >
                <Plus size={15} className="stroke-[3]" />
                <span>Add Certificate Record</span>
              </button>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center cursor-pointer transition-all active:scale-95"
                title="Close Drawer"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Filter and Search Bar */}
          <div className="bg-slate-50/70 px-5 py-3 border-b border-gray-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
            {/* Search input */}
            <div className="relative flex-1 min-w-[240px] max-w-md">
              <Search size={15} className="absolute left-3 top-2.5 text-gray-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search certificate, wing, type..."
                className="w-full pl-9 pr-3 py-1.5 text-xs font-semibold bg-white border border-gray-250 rounded-lg outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-slate-800 placeholder-gray-400 shadow-2xs"
              />
            </div>

            {/* Dropdowns */}
            <div className="flex items-center gap-2.5 flex-wrap text-xs">
              <div className="relative">
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="appearance-none bg-white border border-gray-250 rounded-lg px-3 py-1.5 pr-8 text-xs font-bold text-slate-700 outline-none cursor-pointer hover:bg-gray-50 transition-colors shadow-2xs"
                >
                  <option>All Types</option>
                  <option>Occupancy Certificate</option>
                  <option>Fire NOC</option>
                  <option>Electricity Bill</option>
                  <option>Structural Stability Certificate</option>
                  <option>Building Permission</option>
                </select>
                <ChevronDown size={13} className="absolute right-2.5 top-2.5 pointer-events-none text-gray-400" />
              </div>

              <div className="relative">
                <select
                  value={levelFilter}
                  onChange={(e) => setLevelFilter(e.target.value)}
                  className="appearance-none bg-white border border-gray-250 rounded-lg px-3 py-1.5 pr-8 text-xs font-bold text-slate-700 outline-none cursor-pointer hover:bg-gray-50 transition-colors shadow-2xs"
                >
                  <option>All Levels</option>
                  <option>Apartment</option>
                  <option>Wing</option>
                  <option>Unit</option>
                </select>
                <ChevronDown size={13} className="absolute right-2.5 top-2.5 pointer-events-none text-gray-400" />
              </div>

              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="appearance-none bg-white border border-gray-250 rounded-lg px-3 py-1.5 pr-8 text-xs font-bold text-slate-700 outline-none cursor-pointer hover:bg-gray-50 transition-colors shadow-2xs"
                >
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Expired</option>
                </select>
                <ChevronDown size={13} className="absolute right-2.5 top-2.5 pointer-events-none text-gray-400" />
              </div>

              <span className="text-gray-400 text-xs font-extrabold ml-1">
                {filteredRecords.length}/{records.length} records
              </span>
            </div>
          </div>

          {/* Main Table Content */}
          <div className="flex-1 overflow-auto bg-white p-4">
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-2xs">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-gray-200 text-slate-500 font-black text-[11px] uppercase tracking-wider h-11 select-none">
                    <th className="py-2.5 px-3 text-center w-12">#</th>
                    <th className="py-2.5 px-3">LEVEL</th>
                    <th className="py-2.5 px-3">APPLICABLE TO</th>
                    <th className="py-2.5 px-3">CERTIFICATE TYPE</th>
                    <th className="py-2.5 px-3">CERTIFICATE DATE</th>
                    <th className="py-2.5 px-3">CERTIFICATE NUMBER</th>
                    <th className="py-2.5 px-3">STATUS</th>
                    <th className="py-2.5 px-3 text-center">ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-150 text-slate-700 font-semibold">
                  {filteredRecords.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="py-12 text-center text-gray-400 font-bold text-xs">
                        No certificate records matching criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredRecords.map((row, idx) => (
                      <tr key={row.id} className="hover:bg-slate-50/90 transition-colors duration-150 h-16">
                        {/* Index */}
                        <td className="py-2 px-3 text-center font-bold text-gray-400 text-xs">{idx + 1}</td>

                        {/* Level */}
                        <td className="py-2 px-3">
                          <span className={`px-2.5 py-0.5 rounded font-black text-[10.5px] tracking-wide inline-block ${row.level === 'Apartment' ? 'bg-blue-100 text-blue-700' :
                            row.level === 'Wing' ? 'bg-amber-100 text-amber-800' :
                              'bg-emerald-100 text-emerald-700'
                            }`}>
                            {row.level}
                          </span>
                        </td>

                        {/* Applicable To */}
                        <td className="py-2 px-3">
                          <div className="flex flex-col">
                            {row.unitBadges ? (
                              <div className="flex items-center gap-1 mb-0.5">
                                {row.unitBadges.map(ub => (
                                  <span key={ub} className="bg-blue-50 text-blue-700 font-black px-1.5 py-0.25 rounded text-[9.5px] border border-blue-200">
                                    {ub}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <span className="font-black text-slate-800 text-xs">{row.applicableToTitle}</span>
                            )}

                            <div className="flex items-center gap-1.5 text-[10.5px] text-gray-400 font-semibold">
                              <span>{row.applicableToSub}</span>
                              {row.missingUnitsText && (
                                <span className="text-red-500 font-bold flex items-center gap-0.5">
                                  <AlertTriangle size={11} />
                                  {row.missingUnitsText}
                                </span>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* Certificate Type */}
                        <td className="py-2 px-3">
                          <div className="flex items-center gap-2.5">
                            <span className={`w-7.5 h-7.5 rounded-full font-black text-[10.5px] flex items-center justify-center shrink-0 border border-black/5 ${row.certBg}`}>
                              {row.certCode}
                            </span>
                            <span className="font-extrabold text-slate-800 text-xs">{row.certTitle}</span>
                          </div>
                        </td>

                        {/* Certificate Date */}
                        <td className="py-2 px-3 text-slate-600 font-extrabold text-[11px] tabular-nums">
                          {row.certDate}
                        </td>

                        {/* Certificate Number */}
                        <td className="py-2 px-3 font-black text-slate-800 text-xs tracking-tight">
                          {row.certNumber}
                        </td>

                        {/* Status */}
                        <td className="py-2 px-3">
                          <span className={`px-2.5 py-0.5 rounded-full font-extrabold text-[10.5px] flex items-center gap-1.5 w-fit ${row.status === 'Active' ? 'bg-green-50 text-green-700 border border-green-200' :
                            row.status === 'Pending' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                              'bg-red-50 text-red-700 border border-red-200'
                            }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${row.status === 'Active' ? 'bg-green-600 animate-pulse' : row.status === 'Pending' ? 'bg-amber-500' : 'bg-red-500'}`}></span>
                            {row.status}
                          </span>
                        </td>

                        {/* Actions */}
                        <td className="py-2 px-3">
                          <div className="flex items-center justify-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => handleOpenEditDrawer(row)}
                              className="bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 px-2.5 py-1 rounded text-[10.5px] font-black flex items-center gap-1 cursor-pointer transition-all active:scale-95"
                              title="Edit certificate details"
                            >
                              <Edit3 size={11} />
                              <span>Edit</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteRecord(row.id)}
                              className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-2.5 py-1 rounded text-[10.5px] font-black flex items-center gap-1 cursor-pointer transition-all active:scale-95"
                              title="Delete record"
                            >
                              <Trash2 size={11} />
                              <span>Delete</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => setSelectedRecordForDocs(row)}
                              className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded text-[10.5px] font-black flex items-center gap-1 cursor-pointer transition-all active:scale-95"
                              title="View attached document files"
                            >
                              <Eye size={11} />
                              <span>Docs ({row.docsCount})</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="bg-slate-50 border-t border-gray-200 py-3 px-5 text-center shrink-0 flex items-center justify-between">
            <span className="text-gray-400 text-xs font-bold tracking-wide">
              Certificate & Document Management · Shivam Residency
            </span>

            <button
              onClick={onClose}
              className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-extrabold text-xs px-4 py-1.5 rounded-lg transition-all cursor-pointer uppercase tracking-wider"
            >
              Close Drawer
            </button>
          </div>

        </div>
      </div>

      {/* ========================================================================================= */}
      {/* 2-STEP "ADD / EDIT CERTIFICATE RECORD" SLIDE-OVER DRAWER (RIGHT HAND DRAWER) */}
      {/* ========================================================================================= */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[60] overflow-hidden font-sans select-none">
          {/* Dimmed Overlay Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity animate-fadeIn"
            onClick={() => setIsAddModalOpen(false)}
          />

          {/* Slide-over Drawer Panel from Right */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
            <div className="w-screen max-w-3xl lg:max-w-4xl xl:max-w-5xl bg-slate-100 border-l border-gray-200 shadow-2xl flex flex-col justify-between animate-slideLeft">

              {/* Drawer Top Header */}
              <div className="bg-[#1e1b4b] px-5 py-3.5 flex items-center justify-between text-white shrink-0 shadow-md">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                    <Plus size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm uppercase tracking-wider leading-none">
                      {editingRecordId !== null ? 'Edit Certificate Record' : 'Add Certificate Record'}
                    </h3>
                    <span className="text-slate-300 text-[10.5px] font-semibold mt-1 block">Specify scope level, certificate reference, and upload supporting files.</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center cursor-pointer transition-all active:scale-95"
                  title="Close Drawer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable Form Content */}
              <form onSubmit={handleSaveCertificateRecord} className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-xs no-scrollbar">

                {/* ------------------------------------------------------------- */}
                {/* SECTION 1: SELECT APPLICATION LEVEL */}
                {/* ------------------------------------------------------------- */}
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-2xs">
                  {/* Step Header Bar */}
                  <div className="bg-[#5c54ec] text-white px-4 py-2.5 flex items-center justify-between font-black">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-white/20 text-white font-black text-[11px] flex items-center justify-center">1</span>
                      <span className="text-xs uppercase tracking-wider">Select Application Level</span>
                    </div>
                    <span className="text-[10.5px] text-white/80 font-semibold">Choose where this record should apply</span>
                  </div>

                  {/* Step Body */}
                  <div className="p-4 space-y-3">
                    {/* 3 Level Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {/* Apartment Level */}
                      <button
                        type="button"
                        onClick={() => setAppLevel('Apartment')}
                        className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${appLevel === 'Apartment'
                          ? 'bg-[#5c54ec] text-white border-[#5c54ec] shadow-md'
                          : 'bg-white text-slate-700 hover:bg-slate-50 border-gray-250'
                          }`}
                      >
                        <Building2 size={18} className={appLevel === 'Apartment' ? 'text-white' : 'text-slate-400'} />
                        <span className="font-extrabold text-xs">Apartment Level</span>
                      </button>

                      {/* Wing Level */}
                      <button
                        type="button"
                        onClick={() => setAppLevel('Wing')}
                        className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${appLevel === 'Wing'
                          ? 'bg-[#5c54ec] text-white border-[#5c54ec] shadow-md'
                          : 'bg-white text-slate-700 hover:bg-slate-50 border-gray-250'
                          }`}
                      >
                        <Home size={18} className={appLevel === 'Wing' ? 'text-white' : 'text-slate-400'} />
                        <span className="font-extrabold text-xs">Wing Level</span>
                      </button>

                      {/* Unit Level */}
                      <button
                        type="button"
                        onClick={() => setAppLevel('Unit')}
                        className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${appLevel === 'Unit'
                          ? 'bg-[#5c54ec] text-white border-[#5c54ec] shadow-md'
                          : 'bg-white text-slate-700 hover:bg-slate-50 border-gray-250'
                          }`}
                      >
                        <Store size={18} className={appLevel === 'Unit' ? 'text-white' : 'text-slate-400'} />
                        <span className="font-extrabold text-xs">Unit Level</span>
                      </button>
                    </div>

                    {/* Conditional: Wing Level Selector */}
                    {appLevel === 'Wing' && (
                      <div className="pt-2 space-y-1.5 animate-fadeIn">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">SELECT WING</span>
                        <div className="grid grid-cols-3 gap-3">
                          {(['A Wing', 'B Wing', 'C Wing'] as const).map((w) => (
                            <button
                              key={w}
                              type="button"
                              onClick={() => setSelectedWing(w)}
                              className={`py-2 px-4 rounded-xl border text-xs font-black transition-all cursor-pointer ${selectedWing === w
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-500 shadow-2xs'
                                : 'bg-white text-slate-600 border-gray-250 hover:bg-slate-50'
                                }`}
                            >
                              {w}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Conditional: Unit Level Selector */}
                    {appLevel === 'Unit' && (
                      <div className="pt-2 space-y-3 animate-fadeIn">
                        {/* Select Wing Tabs */}
                        <div>
                          <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block mb-1.5">SELECT WING</span>
                          <div className="grid grid-cols-3 gap-3">
                            {(['A Wing', 'B Wing', 'C Wing'] as const).map((w) => (
                              <button
                                key={w}
                                type="button"
                                onClick={() => setSelectedWing(w)}
                                className={`py-2 px-4 rounded-xl border text-xs font-black transition-all cursor-pointer ${selectedWing === w
                                  ? 'bg-blue-50 text-blue-700 border-blue-500 shadow-2xs'
                                  : 'bg-white text-slate-600 border-gray-250 hover:bg-slate-50'
                                  }`}
                              >
                                {w}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Select Units Filter & Table */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider">SELECT UNITS</span>
                            <span className="text-[11px] font-bold text-gray-400">{selectedUnits.length} units selected</span>
                          </div>

                          {/* Filter Bar */}
                          <div className="flex items-center gap-2">
                            <div className="relative flex-1">
                              <Search size={14} className="absolute left-2.5 top-2.5 text-gray-400 pointer-events-none" />
                              <input
                                type="text"
                                value={unitSearch}
                                onChange={(e) => setUnitSearch(e.target.value)}
                                placeholder="Search unit or sub-property..."
                                className="w-full pl-8 pr-3 py-1.5 text-xs font-semibold bg-white border border-gray-250 rounded-lg outline-none"
                              />
                            </div>
                            <select value={unitWingFilter} onChange={(e) => setUnitWingFilter(e.target.value)} className="bg-white border border-gray-250 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-700">
                              <option value="A">A</option>
                              <option value="B">B</option>
                              <option value="C">C</option>
                            </select>
                            <select value={unitFloorFilter} onChange={(e) => setUnitFloorFilter(e.target.value)} className="bg-white border border-gray-250 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-700">
                              <option>All Floors</option>
                              <option>1st Floor</option>
                              <option>2nd Floor</option>
                            </select>
                            <select value={unitUseFilter} onChange={(e) => setUnitUseFilter(e.target.value)} className="bg-white border border-gray-250 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-700">
                              <option>All Uses</option>
                              <option>Residential</option>
                              <option>Commercial</option>
                            </select>
                          </div>

                          {/* Units Table */}
                          <div className="border border-gray-200 rounded-xl overflow-hidden max-h-40 overflow-y-auto bg-white">
                            <table className="w-full text-left border-collapse text-xs">
                              <thead>
                                <tr className="bg-slate-50 border-b border-gray-200 text-slate-500 font-black text-[10px] uppercase h-8">
                                  <th className="px-3 py-1 text-center w-8">
                                    <input
                                      type="checkbox"
                                      onChange={(e) => {
                                        if (e.target.checked) setSelectedUnits(mockUnits.map(u => u.unit));
                                        else setSelectedUnits([]);
                                      }}
                                      checked={selectedUnits.length === mockUnits.length}
                                      className="rounded border-gray-300 text-blue-600 cursor-pointer"
                                    />
                                  </th>
                                  <th className="px-3 py-1">Unit / Sub-property</th>
                                  <th className="px-3 py-1">Wing</th>
                                  <th className="px-3 py-1">Floor</th>
                                  <th className="px-3 py-1">Use</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-150 font-semibold text-slate-700">
                                {mockUnits.map((u) => (
                                  <tr key={u.unit} className="hover:bg-slate-50 h-8">
                                    <td className="px-3 py-1 text-center">
                                      <input
                                        type="checkbox"
                                        checked={selectedUnits.includes(u.unit)}
                                        onChange={() => toggleUnitSelection(u.unit)}
                                        className="rounded border-gray-300 text-blue-600 cursor-pointer"
                                      />
                                    </td>
                                    <td className="px-3 py-1 font-bold text-blue-700">{u.unit}</td>
                                    <td className="px-3 py-1 text-blue-600 font-bold">{u.wing}</td>
                                    <td className="px-3 py-1 text-slate-600">{u.floor}</td>
                                    <td className="px-3 py-1">
                                      <span className={`px-2 py-0.5 rounded text-[9.5px] font-bold ${u.use === 'Residential' ? 'bg-blue-50 text-blue-700' : 'bg-amber-50 text-amber-700'}`}>
                                        {u.use}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* ------------------------------------------------------------- */}
                {/* SECTION 2: ADD DOCUMENT DETAILS */}
                {/* ------------------------------------------------------------- */}
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-2xs">
                  {/* Step Header Bar */}
                  <div className="bg-[#5c54ec] text-white px-4 py-2.5 flex items-center justify-between font-black">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-white/20 text-white font-black text-[11px] flex items-center justify-center">2</span>
                      <span className="text-xs uppercase tracking-wider">Add Document Details</span>
                    </div>
                    <span className="text-[10.5px] text-white/80 font-semibold">Select a type from the left</span>
                  </div>

                  {/* Step Body (2-Column Layout) */}
                  <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-gray-200">

                    {/* Left Sidebar: Document Types List (4 cols) */}
                    <div className="md:col-span-4 bg-slate-50/50 p-2 flex flex-col gap-1 max-h-[380px] overflow-y-auto">
                      {documentTypesList.map((doc) => {
                        const isSelected = selectedDocCode === doc.code;
                        return (
                          <button
                            key={doc.code}
                            type="button"
                            onClick={() => setSelectedDocCode(doc.code)}
                            className={`p-2.5 rounded-xl border flex items-center gap-3 text-left transition-all cursor-pointer ${isSelected
                              ? 'bg-blue-50/90 text-blue-700 border-blue-500 font-extrabold shadow-2xs border-l-4 border-l-blue-600'
                              : 'bg-white text-slate-700 hover:bg-slate-100/70 border-gray-200 font-bold'
                              }`}
                          >
                            <span className={`w-7 h-7 rounded-full font-black text-[10px] flex items-center justify-center shrink-0 border border-black/5 ${doc.bg}`}>
                              {doc.code}
                            </span>
                            <span className="text-[11.5px] leading-tight">{doc.title}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Right Column: Input Form (8 cols) */}
                    <div className="md:col-span-8 p-4 flex flex-col gap-4">

                      {/* Doc Title & Subtitle */}
                      <div className="flex items-center gap-3 border-b border-gray-150 pb-3">
                        <span className={`w-9 h-9 rounded-full font-black text-xs flex items-center justify-center shrink-0 border border-black/5 ${selectedDocObj.bg}`}>
                          {selectedDocObj.code}
                        </span>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm leading-none">{selectedDocObj.title}</h4>
                          <span className="text-gray-400 text-[11px] font-semibold mt-1 block">Add the date, reference number and <strong className="text-blue-600">supporting files</strong>.</span>
                        </div>
                      </div>

                      {/* Input Fields Row (2 cols) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* Date */}
                        <div className="space-y-1">
                          <label className="font-extrabold text-slate-700 text-[11px] block">{selectedDocObj.title} Date</label>
                          <div className="relative">
                            <input
                              type="date"
                              value={certDateInput}
                              onChange={(e) => setCertDateInput(e.target.value)}
                              className="w-full bg-white border border-gray-250 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 outline-none focus:border-blue-600 transition-colors shadow-2xs"
                              required
                            />
                            <Calendar size={14} className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" />
                          </div>
                        </div>

                        {/* Number */}
                        <div className="space-y-1">
                          <label className="font-extrabold text-slate-700 text-[11px] block">{selectedDocObj.title} Number</label>
                          <input
                            type="text"
                            value={certNumberInput}
                            onChange={(e) => setCertNumberInput(e.target.value)}
                            placeholder="Enter certificate/reference number"
                            className="w-full bg-white border border-gray-250 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 outline-none focus:border-blue-600 transition-colors shadow-2xs"
                            required
                          />
                        </div>
                      </div>

                      {/* Supporting Documents Drag & Drop Upload Zone */}
                      <div className="relative border-2 border-dashed border-gray-250 hover:border-blue-400 rounded-2xl p-6 bg-slate-50/50 hover:bg-blue-50/20 transition-all flex flex-col items-center justify-center text-center gap-1.5 cursor-pointer group">
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => {
                            if (e.target.files) {
                              const files = Array.from(e.target.files).map(f => f.name);
                              setUploadedFiles(prev => [...prev, ...files]);
                            }
                          }}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 group-hover:scale-110 transition-transform flex items-center justify-center">
                          <Upload size={20} />
                        </div>
                        <span className="font-black text-slate-800 text-xs">Supporting documents</span>
                        <span className="text-[10px] text-gray-400 font-semibold">PDF, JPG, JPEG or PNG · Multiple files allowed</span>

                        {uploadedFiles.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {uploadedFiles.map((fn, i) => (
                              <span key={i} className="bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold px-2 py-0.5 rounded text-[10px] flex items-center gap-1">
                                ✓ {fn}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Status & Remarks Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        {/* Status Buttons */}
                        <div className="space-y-1">
                          <label className="font-extrabold text-slate-700 text-[11px] block">Status</label>
                          <div className="grid grid-cols-3 gap-2">
                            {(['Active', 'Pending', 'Expired'] as const).map((st) => (
                              <button
                                key={st}
                                type="button"
                                onClick={() => setCertStatusInput(st)}
                                className={`py-1.5 px-2 rounded-xl border text-xs font-black transition-all cursor-pointer ${certStatusInput === st
                                  ? st === 'Active' ? 'bg-emerald-50 text-emerald-700 border-emerald-400 shadow-2xs' :
                                    st === 'Pending' ? 'bg-amber-50 text-amber-700 border-amber-400 shadow-2xs' :
                                      'bg-red-50 text-red-700 border-red-400 shadow-2xs'
                                  : 'bg-white text-slate-600 border-gray-250 hover:bg-slate-50'
                                  }`}
                              >
                                {st}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Remarks */}
                        <div className="space-y-1">
                          <label className="font-extrabold text-slate-700 text-[11px] block">Remarks</label>
                          <input
                            type="text"
                            value={certRemarksInput}
                            onChange={(e) => setCertRemarksInput(e.target.value)}
                            placeholder="Optional notes..."
                            className="w-full bg-white border border-gray-250 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 outline-none focus:border-blue-600 transition-colors shadow-2xs"
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </form>

              {/* Drawer Bottom Action Footer */}
              <div className="p-4 bg-white border-t border-gray-200 flex items-center justify-between shrink-0 shadow-lg">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-5 py-2 rounded-xl border border-gray-300 hover:bg-slate-50 font-extrabold text-slate-600 text-xs cursor-pointer transition-all"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSaveCertificateRecord}
                  className="px-6 py-2 rounded-xl bg-[#5c54ec] hover:bg-indigo-700 text-white font-extrabold text-xs cursor-pointer transition-all shadow-md flex items-center gap-2 active:scale-95 uppercase tracking-wider"
                >
                  <Check size={16} className="stroke-[3]" />
                  <span>{editingRecordId !== null ? 'Update Certificate Record' : 'Save Certificate Record'}</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Modal 2: View Document Preview / Attached File */}
      {selectedRecordForDocs && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-[70] p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden border border-gray-200">
            <div className="bg-[#1e1b4b] px-4 py-3 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-emerald-400" />
                <h3 className="font-extrabold text-xs uppercase tracking-wider">
                  Attached Document: {selectedRecordForDocs.certTitle}
                </h3>
              </div>
              <button onClick={() => setSelectedRecordForDocs(null)} className="text-gray-300 hover:text-white cursor-pointer">
                <X size={16} />
              </button>
            </div>

            <div className="p-4 flex flex-col gap-3 text-xs">
              <div className="bg-slate-50 border border-gray-200 rounded-xl p-3 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-gray-400 font-bold">Certificate No:</span>
                  <span className="font-black text-slate-800">{selectedRecordForDocs.certNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-bold">Issue Date:</span>
                  <span className="font-black text-slate-800">{selectedRecordForDocs.certDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-bold">Applicable Scope:</span>
                  <span className="font-black text-blue-700">{selectedRecordForDocs.applicableToTitle}</span>
                </div>
              </div>

              <div className="border border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-2 bg-slate-50/50">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                  <CheckCircle size={24} />
                </div>
                <span className="font-black text-slate-800 text-xs uppercase">Sanctioned PDF Attached</span>
                <p className="text-gray-500 text-[10.5px]">Official Municipal Digital Signature Verified (SHA-256 Link Verified)</p>
              </div>

              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setSelectedRecordForDocs(null)}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white font-extrabold cursor-pointer hover:bg-blue-700"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
