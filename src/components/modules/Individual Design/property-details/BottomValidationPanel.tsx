import React, { useState } from 'react';
import {
  AlertTriangle,
  Camera,
  Map,
  UserCheck,
  FileText,
  Droplet,
  ShieldCheck,
  FileEdit,
  Link2,
  Wallet,
  ChevronDown,
  ChevronUp,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { ComplianceIssue } from '@/components/modules/Individual Design/shared/aiReportData';

interface BottomValidationPanelProps {
  activeTab: string;
  aiReportPopupOpen: boolean;
  onViewReportClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  issues?: ComplianceIssue[];
}

export default function BottomValidationPanel({
  activeTab,
  aiReportPopupOpen,
  onViewReportClick,
  issues = []
}: BottomValidationPanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    const handleToggle = () => {
      setIsOpen(prev => !prev);
    };
    window.addEventListener('toggle-ai-validation-panel', handleToggle);
    return () => window.removeEventListener('toggle-ai-validation-panel', handleToggle);
  }, []);

  const openIssues = issues.filter(i => i.status === 'Open');
  const half = Math.ceil(openIssues.length / 2);
  const leftColIssues = openIssues.slice(0, half);
  const rightColIssues = openIssues.slice(half);

  const isFireNocValid = !openIssues.some(i => i.id === 'fire-noc');
  const isWaterLinked = !openIssues.some(i => i.id === 'water-dup');
  const isMobileVerified = !openIssues.some(i => i.id === 'mobile-verify');

  const renderIssueRow = (issue: ComplianceIssue) => {
    let colorClass = 'text-blue-500 fill-blue-50';
    let badgeClass = 'bg-[#ecfdf5] text-[#10b981] border-[#10b981]/20';
    if (issue.severity === 'High') {
      colorClass = 'text-orange-500 fill-orange-50';
      badgeClass = 'bg-[#fef2f2] text-[#ef4444] border-[#ef4444]/20';
    } else if (issue.severity === 'Medium') {
      colorClass = 'text-amber-500 fill-amber-50';
      badgeClass = 'bg-[#fff7ed] text-[#f97316] border-[#f97316]/20';
    }

    return (
      <div key={issue.id} className="flex items-center justify-between">
        <span className="flex items-center gap-1 text-gray-655 truncate max-w-[80%]">
          <AlertTriangle size={10} className={colorClass} />
          <span className="truncate">{issue.title}</span>
        </span>
        <span className={`border font-bold px-1.5 py-0.5 rounded text-[8px] leading-none shrink-0 ${badgeClass}`}>
          {issue.severity}
        </span>
      </div>
    );
  };

  if (activeTab !== 'property') {
    /* AI Property Inspector full width for Building Permission tab */
    return (
      <div className="shrink-0 bg-white border border-[#002fbe]/25 rounded-lg p-2.5 flex flex-col justify-between shadow-md w-full mt-1">
        <div>
          <div className="flex items-center justify-between border-b border-gray-100 pb-1.5 mb-2 shrink-0">
            <h3 className="font-extrabold text-[#002fbe] text-[9.5px] uppercase tracking-wider">AI Property Inspector</h3>
            <span className="text-gray-400 text-[8.5px] font-bold">Issues Found ({openIssues.length})</span>
          </div>

          {openIssues.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-6 text-[#10b981] gap-1 animate-fadeIn">
              <span className="text-sm font-black">✓ COMPLIANCE SECURED</span>
              <span className="text-[8px] text-gray-400 font-bold uppercase tracking-wider">All system compliance checks verified successfully</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 text-[8.5px]">
              <div className="space-y-1.5 font-bold">
                {leftColIssues.map(renderIssueRow)}
              </div>
              <div className="space-y-1.5 sm:border-l sm:border-gray-100 sm:pl-3 font-bold">
                {rightColIssues.map(renderIssueRow)}
              </div>
            </div>
          )}
        </div>
        <button
          id="ai-view-report-btn-full"
          onClick={onViewReportClick}
          aria-expanded={aiReportPopupOpen}
          aria-controls="ai-report-popup"
          className="w-full mt-2 py-1 bg-[#edf2ff] hover:bg-[#dbeafe] border border-[#3b82f6]/20 text-[#3b82f6] font-extrabold text-[8.5px] rounded transition-all text-center cursor-pointer shadow-xs shrink-0"
          type="button"
        >
          View All Report
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Dropdown Content Overlay Panel */}
      {isOpen && (
        <div className="absolute bottom-full left-0 right-0 z-50 mb-2 p-3 bg-white/95 backdrop-blur-md border border-[#002fbe]/30 rounded-xl shadow-2xl grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-hidden items-stretch animate-fadeIn transition-all duration-300 max-h-[80vh] overflow-y-auto">
          {/* AI Property Inspector */}
          <div className="bg-white border border-[#002fbe]/25 rounded-lg p-2.5 flex flex-col justify-between shadow-xs h-full">
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-1.5 mb-2 shrink-0">
                <h3 className="font-extrabold text-[#002fbe] text-[9.5px] uppercase tracking-wider">AI Property Inspector</h3>
                <span className="text-gray-400 text-[8.5px] font-bold">Issues Found ({openIssues.length})</span>
              </div>

              {openIssues.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 text-[#10b981] gap-1 animate-fadeIn h-full">
                  <span className="text-sm font-black">✓ COMPLIANCE SECURED</span>
                  <span className="text-[8px] text-gray-400 font-bold uppercase tracking-wider">All compliance checks cleared</span>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[8.5px] font-bold">
                  <div className="space-y-1.5">
                    {leftColIssues.map(renderIssueRow)}
                  </div>
                  <div className="space-y-1.5 border-l border-gray-100 pl-3">
                    {rightColIssues.map(renderIssueRow)}
                  </div>
                </div>
              )}
            </div>
            <button
              id="ai-view-report-btn-half"
              onClick={onViewReportClick}
              aria-expanded={aiReportPopupOpen}
              aria-controls="ai-report-popup"
              className="w-full mt-2 py-1 bg-[#edf2ff] hover:bg-[#dbeafe] border border-[#3b82f6]/20 text-[#3b82f6] font-extrabold text-[8.5px] rounded transition-all text-center cursor-pointer shadow-xs shrink-0"
              type="button"
            >
              View All Report
            </button>
          </div>

          {/* Validation Status */}
          <div className="bg-white border border-[#002fbe]/25 rounded-lg p-2.5 flex flex-col justify-between shadow-xs h-full">
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-1.5 mb-2 shrink-0">
                <h3 className="font-extrabold text-[#002fbe] text-[9.5px] uppercase tracking-wider">Validation Status</h3>
                <span className="text-gray-400 text-[8.5px] font-bold">
                  ({[true, true, true, isMobileVerified, true, isWaterLinked, isFireNocValid, true, true, true, true].filter(Boolean).length}/11)
                </span>
              </div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-[8.5px]">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between"><span className="flex items-center gap-1 text-gray-655"><Camera size={10} className="text-blue-600" /><span>Photo</span></span><span className="text-green-600 font-bold">Valid</span></div>
                  <div className="flex items-center justify-between"><span className="flex items-center gap-1 text-gray-655"><Map size={10} className="text-blue-600" /><span>GIS</span></span><span className="text-green-600 font-bold">Verified</span></div>
                  <div className="flex items-center justify-between"><span className="flex items-center gap-1 text-gray-655"><UserCheck size={10} className="text-blue-600" /><span>Aadhaar</span></span><span className="text-green-600 font-bold">Verified</span></div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-gray-655"><UserCheck size={10} className="text-blue-600" /><span>Mobile</span></span>
                    <span className={isMobileVerified ? "text-green-600 font-bold" : "text-orange-500 font-bold"}>
                      {isMobileVerified ? "Verified" : "Unverified"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between"><span className="flex items-center gap-1 text-gray-655"><FileText size={10} className="text-blue-600" /><span>Documents</span></span><span className="text-green-600 font-bold">Verified</span></div>
                </div>
                <div className="space-y-1.5 border-l border-gray-100 pl-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-gray-655"><Droplet size={10} className="text-blue-600" /><span>Water</span></span>
                    <span className={isWaterLinked ? "text-green-600 font-bold" : "text-orange-500 font-bold"}>
                      {isWaterLinked ? "Linked" : "Not Linked"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-gray-655"><ShieldCheck size={10} className="text-blue-600" /><span>Fire</span></span>
                    <span className={isFireNocValid ? "text-green-600 font-bold" : "text-red-500 font-bold"}>
                      {isFireNocValid ? "Valid" : "Expired"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between"><span className="flex items-center gap-1 text-gray-655"><FileEdit size={10} className="text-blue-600" /><span>Mutation</span></span><span className="text-orange-500 font-bold">Pending</span></div>
                  <div className="flex items-center justify-between"><span className="flex items-center gap-1 text-gray-655"><Link2 size={10} className="text-blue-600" /><span>BPMS</span></span><span className="text-green-600 font-bold">Linked</span></div>
                  <div className="flex items-center justify-between"><span className="flex items-center gap-1 text-gray-655"><UserCheck size={10} className="text-blue-600" /><span>Email</span></span><span className="text-green-600 font-bold">Verified</span></div>
                  <div className="flex items-center justify-between"><span className="flex items-center gap-1 text-gray-655"><Wallet size={10} className="text-blue-600" /><span>Bank</span></span><span className="text-green-600 font-bold">Verified</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
