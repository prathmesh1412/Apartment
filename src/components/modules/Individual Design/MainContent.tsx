"use client";

import React, { useState, useEffect, useRef } from 'react';
import TopPropertySearchBar from '@/components/modules/Individual Design/layout/TopPropertySearchBar';
import PropertySummary from '@/components/modules/Individual Design/property-details/PropertySummary';
import PropertyDetailsCard from '@/components/modules/Individual Design/property-details/PropertyDetailsCard';
import ActionViews from '@/components/modules/Individual Design/layout/ActionViews';
import { initialComplianceIssues, ComplianceIssue } from '@/components/modules/Individual Design/shared/aiReportData';
import FloorComponentDetailsTable from '@/components/modules/Individual Design/property-details/FloorComponentDetailsTable';
import TimelineAndMetricsRow from '@/components/modules/Individual Design/dashboard/TimelineAndMetricsRow';
import TaxesComparisonCard from '@/components/modules/Individual Design/dashboard/TaxesComparisonCard';
import BottomValidationPanel from '@/components/modules/Individual Design/property-details/BottomValidationPanel';
import AiReportPopup from '@/components/modules/Individual Design/shared/AiReportPopup';
import TimelinePopup from '@/components/modules/Individual Design/shared/TimelinePopup';
import DesignRightPanel from '@/components/modules/Individual Design/property-details/DesignRightPanel';
import KycDetailsTab from '@/components/modules/Individual Design/property-details/KycDetailsTab';
import SocietyDetailsTab from '@/components/modules/Individual Design/property-details/SocietyDetailsTab';
import OldDetailsTab from '@/components/modules/Individual Design/property-details/OldDetailsTab';
import PlaceholderContent from '@/components/modules/Individual Design/layout/PlaceholderContent';
import { 
  calculatePopupPosition, 
  StatusBadgesRow, 
  NavigationTabs, 
  HoverZoomPreview, 
  EnlargedZoomModal 
} from '@/components/modules/Individual Design/property-details/MainContentHelpers';

export default function MainContent({ 
  activeAction = null, 
  setActiveAction = () => {} 
}: { 
  activeAction?: string | null; 
  setActiveAction?: (action: string | null) => void; 
  activeValuationModel?: 'rv' | 'cvm' | 'dual' 
} = {}) {
  const [activeTab, setActiveTab] = useState<'property' | 'kyc' | 'building' | 'discount' | 'old'>('property');
  const [selectedTimelineStage, setSelectedTimelineStage] = useState<string | null>(null);
  const [timelinePopupOpen, setTimelinePopupOpen] = useState(false);
  const [popupPosition, setPopupPosition] = useState<{ top: number; left: number } | null>(null);
  const [timelineLoading, setTimelineLoading] = useState(false);
  const [timelineError, setTimelineError] = useState<string | null>(null);
  const hasRetriedApproval = useRef(false);

  // AI Property Inspector Popups
  const [aiReportPopupOpen, setAiReportPopupOpen] = useState(false);
  const [aiReportPopupPosition, setAiReportPopupPosition] = useState<{ top: number; left: number } | null>(null);
  const [aiReportLoading, setAiReportLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeSubTab, setActiveSubTab] = useState<'rateable' | 'capital' | 'dual' | 'reassessment'>('rateable');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [hoveredImg, setHoveredImg] = useState<string | null>(null);
  const [hoverPosition, setHoverPosition] = useState<'left' | 'right' | 'property'>('right');

  const [issues, setIssues] = useState<ComplianceIssue[]>(initialComplianceIssues);

  const handleIssueStatusChange = (id: string, status: 'Resolved' | 'Overridden' | 'Open') => {
    setIssues(prev => prev.map(issue => issue.id === id ? { ...issue, status } : issue));
  };

  const isFireNocValid = issues.find(i => i.id === 'fire-noc')?.status !== 'Open';
  const isWaterLinked = issues.find(i => i.id === 'water-dup')?.status !== 'Open';

  const handleViewReportClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAiReportPopupPosition(calculatePopupPosition(event.currentTarget, containerRef.current));
    setAiReportPopupOpen(true);
    setAiReportLoading(true);
    setTimeout(() => setAiReportLoading(false), 400);
  };

  const loadStageDetails = (stageId: string) => {
    setTimelineLoading(true);
    setTimelineError(null);
    if (stageId === 'approval' && !hasRetriedApproval.current) {
      setTimeout(() => {
        setTimelineLoading(false);
        setTimelineError('Unable to load stage details.');
      }, 400);
      return;
    }
    setTimeout(() => setTimelineLoading(false), 400);
  };

  const handleTimelineNodeClick = (stageId: string, event: React.MouseEvent<HTMLButtonElement>) => {
    setPopupPosition(calculatePopupPosition(event.currentTarget, containerRef.current));
    setSelectedTimelineStage(stageId);
    setTimelinePopupOpen(true);
    loadStageDetails(stageId);
  };

  const handleRetryLoad = () => {
    if (selectedTimelineStage === 'approval') hasRetriedApproval.current = true;
    if (selectedTimelineStage) loadStageDetails(selectedTimelineStage);
  };

  const closeStageDetails = () => {
    setTimelinePopupOpen(false);
    setSelectedTimelineStage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeStageDetails();
        setAiReportPopupOpen(false);
      }
    };
    if (timelinePopupOpen || aiReportPopupOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [timelinePopupOpen, aiReportPopupOpen, selectedTimelineStage]);

  return (
    <div ref={containerRef} className="dashboard-content flex-1 h-full overflow-hidden bg-transparent p-0 font-sans text-gray-800 relative z-10 flex flex-col gap-2">
      <TopPropertySearchBar />
      {activeAction ? (
        <div className="flex-grow flex-1 min-h-0 bg-white border border-gray-200 rounded-xl p-3.5 shadow-md overflow-hidden relative">
          <ActionViews activeAction={activeAction} setActiveAction={setActiveAction} />
        </div>
      ) : (
        <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-2.5 overflow-hidden">
          <div className="flex-grow flex-1 min-h-0 flex flex-col gap-2 overflow-y-auto scrollbar-thin pr-1 w-full lg:w-0">
            <PropertyDetailsCard />
            <StatusBadgesRow isWaterLinked={isWaterLinked} isFireNocValid={isFireNocValid} />
            <NavigationTabs 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
              activeSubTab={activeSubTab}
              setActiveSubTab={setActiveSubTab}
            />

            {/* Tab Panel Content */}
            <div className="flex-1 min-h-0 bg-white border border-gray-200 rounded-lg p-2.5 shadow-sm flex flex-col overflow-y-auto no-scrollbar gap-2">
                {activeTab === 'property' && (
                  <>
                    <FloorComponentDetailsTable activeSubTab={activeSubTab} />
                    <TimelineAndMetricsRow 
                      selectedTimelineStage={selectedTimelineStage}
                      onTimelineNodeClick={handleTimelineNodeClick}
                    />
                    <TaxesComparisonCard />
                    <BottomValidationPanel 
                      activeTab={activeTab}
                      aiReportPopupOpen={aiReportPopupOpen}
                      onViewReportClick={handleViewReportClick}
                      issues={issues}
                    />
                  </>
                )}

                {activeTab === 'kyc' && (
                  <KycDetailsTab 
                    activeSubTab={activeSubTab}
                    selectedTimelineStage={selectedTimelineStage}
                    onTimelineNodeClick={handleTimelineNodeClick}
                  />
                )}

                {activeTab === 'building' && (
                  <div className="p-3 bg-blue-50/40 rounded-xl border border-blue-100 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between border-b border-blue-200/60 pb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-black text-[#1e2b58] text-[12px] uppercase tracking-wide">Building Permission & BPMS Records</span>
                      </div>
                      <span className="bg-emerald-100 text-emerald-800 font-extrabold text-[9px] px-2 py-0.5 rounded-full border border-emerald-300">Approved & Verified</span>
                    </div>

                    <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-2xs">
                      <table className="w-full text-left text-[11px] border-collapse">
                        <thead>
                          <tr className="bg-slate-100/80 text-slate-700 font-extrabold text-[10px] uppercase border-b border-slate-200">
                            <th className="py-2 px-3">Permit No / Plan</th>
                            <th className="py-2 px-3">Sanction Date</th>
                            <th className="py-2 px-3">Approved Floors</th>
                            <th className="py-2 px-3">Sanctioned Area</th>
                            <th className="py-2 px-3 text-center">Status</th>
                            <th className="py-2 px-3 text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-bold text-slate-800">
                          <tr className="hover:bg-blue-50/30 transition-colors">
                            <td className="py-2 px-3 font-extrabold text-blue-700">BPMS-2024-00981</td>
                            <td className="py-2 px-3">14 Jan 2024</td>
                            <td className="py-2 px-3">Ground + 7 Floors</td>
                            <td className="py-2 px-3 text-emerald-700 font-extrabold">34,500.00 sq.ft</td>
                            <td className="py-2 px-3 text-center">
                              <span className="bg-emerald-50 text-emerald-700 text-[9.5px] px-2 py-0.5 rounded-full border border-emerald-200">Sanctioned</span>
                            </td>
                            <td className="py-2 px-3 text-center">
                              <button
                                onClick={() => {
                                  if (typeof window !== 'undefined') {
                                    window.dispatchEvent(new CustomEvent('openQuickDataEntry', { detail: { activeTab: 'building' } }));
                                  }
                                }}
                                className="p-1 hover:bg-blue-100 rounded-md text-blue-600 transition cursor-pointer"
                                title="Edit Building Permission"
                              >
                                ✏️
                              </button>
                            </td>
                          </tr>
                          <tr className="hover:bg-blue-50/30 transition-colors">
                            <td className="py-2 px-3 font-extrabold text-blue-700">BPMS-2021-00432</td>
                            <td className="py-2 px-3">08 Mar 2021</td>
                            <td className="py-2 px-3">Ground + 4 Floors</td>
                            <td className="py-2 px-3 text-emerald-700 font-extrabold">22,100.00 sq.ft</td>
                            <td className="py-2 px-3 text-center">
                              <span className="bg-blue-50 text-blue-700 text-[9.5px] px-2 py-0.5 rounded-full border border-blue-200">Revised</span>
                            </td>
                            <td className="py-2 px-3 text-center">
                              <button
                                onClick={() => {
                                  if (typeof window !== 'undefined') {
                                    window.dispatchEvent(new CustomEvent('openQuickDataEntry', { detail: { activeTab: 'building' } }));
                                  }
                                }}
                                className="p-1 hover:bg-blue-100 rounded-md text-blue-600 transition cursor-pointer"
                                title="Edit Building Permission"
                              >
                                ✏️
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'discount' && (
                  <div className="p-3 bg-emerald-50/40 rounded-xl border border-emerald-100 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between border-b border-emerald-200/60 pb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-black text-[#1e2b58] text-[12px] uppercase tracking-wide">Concessions, Discounts & Social Category Data</span>
                      </div>
                      <span className="bg-blue-100 text-blue-800 font-extrabold text-[9px] px-2 py-0.5 rounded-full border border-blue-300">3 Active Incentives</span>
                    </div>

                    <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-2xs">
                      <table className="w-full text-left text-[11px] border-collapse">
                        <thead>
                          <tr className="bg-slate-100/80 text-slate-700 font-extrabold text-[10px] uppercase border-b border-slate-200">
                            <th className="py-2 px-3">Incentive / Scheme</th>
                            <th className="py-2 px-3">Category</th>
                            <th className="py-2 px-3">Concession Rate</th>
                            <th className="py-2 px-3">Applicable Period</th>
                            <th className="py-2 px-3 text-center">Status</th>
                            <th className="py-2 px-3 text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-bold text-slate-800">
                          <tr className="hover:bg-emerald-50/30 transition-colors">
                            <td className="py-2 px-3 font-extrabold text-emerald-700">Solar Energy Rebate</td>
                            <td className="py-2 px-3">Green Building</td>
                            <td className="py-2 px-3 text-emerald-700 font-extrabold">5% Annual Discount</td>
                            <td className="py-2 px-3">2024 - 2026</td>
                            <td className="py-2 px-3 text-center">
                              <span className="bg-emerald-50 text-emerald-700 text-[9.5px] px-2 py-0.5 rounded-full border border-emerald-200">Active</span>
                            </td>
                            <td className="py-2 px-3 text-center">
                              <button
                                onClick={() => {
                                  if (typeof window !== 'undefined') {
                                    window.dispatchEvent(new CustomEvent('openQuickDataEntry', { detail: { activeTab: 'discount' } }));
                                  }
                                }}
                                className="p-1 hover:bg-emerald-100 rounded-md text-emerald-600 transition cursor-pointer"
                                title="Edit Discount Data"
                              >
                                ✏️
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'old' && <OldDetailsTab />}

                {activeTab !== 'property' && activeTab !== 'kyc' && activeTab !== 'building' && activeTab !== 'discount' && activeTab !== 'old' && (
                  <PlaceholderContent title={activeTab} />
                )}
            </div>
          </div>

          <DesignRightPanel 
            handleHoverImage={(url, pos) => {
              setHoveredImg(url);
              if (pos) setHoverPosition(pos);
            }}
            openPreview={(url) => setSelectedImg(url)}
          />
        </div>
      )}

      {hoveredImg && <HoverZoomPreview hoveredImg={hoveredImg} hoverPosition={hoverPosition} />}

      <AiReportPopup 
        aiReportPopupOpen={aiReportPopupOpen}
        aiReportPopupPosition={aiReportPopupPosition}
        aiReportLoading={aiReportLoading}
        closeAiReport={() => setAiReportPopupOpen(false)}
        issues={issues}
        onResolve={(id) => handleIssueStatusChange(id, 'Resolved')}
        onOverride={(id) => handleIssueStatusChange(id, 'Overridden')}
        onReopen={(id) => handleIssueStatusChange(id, 'Open')}
      />

      <TimelinePopup 
        selectedTimelineStage={selectedTimelineStage}
        popupPosition={popupPosition}
        timelineLoading={timelineLoading}
        timelineError={timelineError}
        closeStageDetails={closeStageDetails}
        handleRetryLoad={handleRetryLoad}
      />

      {selectedImg && <EnlargedZoomModal selectedImg={selectedImg} onClose={() => setSelectedImg(null)} />}
    </div>
  );
}
