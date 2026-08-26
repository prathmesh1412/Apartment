import React from 'react';
import { ShieldCheck } from 'lucide-react';
import FloorComponentDetailsTable from '@/components/modules/Individual Design/property-details/FloorComponentDetailsTable';
import TimelineAndMetricsRow from '@/components/modules/Individual Design/dashboard/TimelineAndMetricsRow';
import TaxesComparisonCard from '@/components/modules/Individual Design/dashboard/TaxesComparisonCard';

export default function KycDetailsTab({
  activeSubTab = 'rateable',
  selectedTimelineStage,
  onTimelineNodeClick
}: {
  activeSubTab?: 'rateable' | 'capital' | 'dual' | 'reassessment';
  selectedTimelineStage?: string | null;
  onTimelineNodeClick?: (stageId: string, event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-3 font-sans text-gray-800 animate-fadeIn">
      {/* Shared Floor Details components */}
      <FloorComponentDetailsTable activeSubTab={activeSubTab} />
      <TimelineAndMetricsRow 
        selectedTimelineStage={selectedTimelineStage}
        onTimelineNodeClick={onTimelineNodeClick}
      />
      <TaxesComparisonCard />
    </div>
  );
}
