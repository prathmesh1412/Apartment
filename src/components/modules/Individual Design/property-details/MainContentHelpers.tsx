import {
  Map,
  FileText,
  Wallet,
  Droplet,
  ShieldCheck,
  Briefcase,
  Link2,
  FolderOpen,
  UserCheck,
  Users,
  Building,
  Percent,
  History,
  Calculator,
  TrendingUp,
  Layers
} from 'lucide-react';
import { Tab, StatusBadge } from '@/components/modules/Individual Design/shared/DesignComponents';

export function calculatePopupPosition(
  buttonEl: HTMLButtonElement,
  containerEl: HTMLDivElement | null,
  popupWidth = 360,
  popupHeight = 285
) {
  const rect = buttonEl.getBoundingClientRect();
  let left = rect.left + rect.width / 2 - popupWidth / 2;
  let top = rect.bottom + 8;
  if (containerEl) {
    const containerRect = containerEl.getBoundingClientRect();
    left = rect.left - containerRect.left + rect.width / 2 - popupWidth / 2;
    top = rect.bottom - containerRect.top + 8;
    if (left < 16) left = 16;
    if (left + popupWidth > containerRect.width - 16) {
      left = containerRect.width - popupWidth - 16;
    }
    if (top + popupHeight > containerRect.height - 16) {
      top = rect.top - containerRect.top - popupHeight - 8;
    }
  }
  return { top, left };
}

interface StatusBadgesRowProps {
  isWaterLinked: boolean;
  isFireNocValid: boolean;
}

export function StatusBadgesRow({ isWaterLinked, isFireNocValid }: StatusBadgesRowProps) {
  return (
    <div className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm text-xs flex flex-wrap items-center justify-between gap-y-1.5 shrink-0 select-none">
      <StatusBadge icon={<Map size={13} className="text-green-600" />} title="GIS Verified" status="Verified" statusColor="text-green-600" />
      <StatusBadge icon={<FileText size={13} className="text-green-600" />} title="Assessment" status="Approved" statusColor="text-green-600" />
      <StatusBadge icon={<Wallet size={13} className="text-green-600" />} title="Collection Status" status="Paid" statusColor="text-green-600" />
      <StatusBadge icon={<Droplet size={13} className={isWaterLinked ? "text-blue-600" : "text-orange-500"} />} title="Water Connection" status={isWaterLinked ? "Active" : "Not Linked"} statusColor={isWaterLinked ? "text-green-600" : "text-orange-500"} isBlue={isWaterLinked} />
      <StatusBadge icon={<ShieldCheck size={13} className={isFireNocValid ? "text-green-600" : "text-red-500"} />} title="Fire NOC" status={isFireNocValid ? "Valid" : "Expired"} statusColor={isFireNocValid ? "text-green-600" : "text-red-500"} />
      <StatusBadge icon={<Briefcase size={13} className="text-green-600" />} title="Trade License" status="Active" statusColor="text-green-600" />
      <StatusBadge icon={<Link2 size={13} className="text-green-600" />} title="BPMS Linked" status="Yes" statusColor="text-green-600" />
    </div>
  );
}

interface NavigationTabsProps {
  activeTab: 'property' | 'kyc' | 'building' | 'discount' | 'old';
  setActiveTab: (tab: 'property' | 'kyc' | 'building' | 'discount' | 'old') => void;
  activeSubTab?: 'rateable' | 'capital' | 'dual' | 'reassessment';
  setActiveSubTab?: (subTab: 'rateable' | 'capital' | 'dual' | 'reassessment') => void;
}

export function NavigationTabs({ 
  activeTab, 
  setActiveTab, 
  activeSubTab = 'rateable', 
  setActiveSubTab = () => {} 
}: NavigationTabsProps) {
  return (
    <div className="flex items-center justify-between border-b border-[#002fbe] font-bold text-xs text-[#002fbe] shrink-0 select-none mt-1 pb-[1px] overflow-x-auto no-scrollbar gap-2">
      <div className="flex items-end gap-1.5 shrink-0">
        <Tab active={activeTab === 'property'} onClick={() => setActiveTab('property')} icon={<FolderOpen size={13} />} label="Floor Details" />
        <Tab active={activeTab === 'building'} onClick={() => setActiveTab('building')} icon={<Building size={13} />} label="Building Permission" />
        <Tab active={activeTab === 'discount'} onClick={() => setActiveTab('discount')} icon={<Percent size={13} />} label="Discount & Social Data" />
        <Tab active={activeTab === 'old'} onClick={() => setActiveTab('old')} icon={<History size={13} />} label="Old Details" />
      </div>

      {/* Right-side Valuation Method Selector Tabs */}
      <div className="flex items-end gap-1 shrink-0">
        <Tab 
          active={activeSubTab === 'rateable'} 
          onClick={() => setActiveSubTab('rateable')} 
          icon={<Calculator size={13} />} 
          label="Rateable Value (RV)" 
        />
        <Tab 
          active={activeSubTab === 'capital'} 
          onClick={() => setActiveSubTab('capital')} 
          icon={<TrendingUp size={13} />} 
          label="Capital Value Method (CVM)" 
        />
        <Tab 
          active={activeSubTab === 'dual'} 
          onClick={() => setActiveSubTab('dual')} 
          icon={<Layers size={13} />} 
          label="Dual Method View (RV + CVM)" 
        />
      </div>
    </div>
  );
}

interface HoverZoomPreviewProps {
  hoveredImg: string;
  hoverPosition: 'left' | 'right' | 'property';
}

export function HoverZoomPreview({ hoveredImg, hoverPosition }: HoverZoomPreviewProps) {
  return (
    <div className={`fixed z-50 w-96 bg-white border border-gray-300 rounded-xl shadow-2xl p-2.5 pointer-events-none animate-fadeIn flex flex-col gap-2 ${
      hoverPosition === 'left' ? 'right-[290px] top-[180px]' : 
      hoverPosition === 'property' ? 'left-[235px] top-[25px]' : 
      'left-[290px] top-[180px]'
    }`}>
      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex justify-between">
        <span>Complete Zoom View</span>
        <span className="text-[#1e2b58] font-semibold text-[8px] bg-blue-50 px-1 py-0.25 rounded">Live Preview</span>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-100 bg-gray-50 h-72 w-full flex items-center justify-center">
        <img src={hoveredImg} className="w-full h-full object-contain" alt="Complete Zoom" />
      </div>
    </div>
  );
}

interface EnlargedZoomModalProps {
  selectedImg: string;
  onClose: () => void;
}

export function EnlargedZoomModal({ selectedImg, onClose }: EnlargedZoomModalProps) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/75 flex items-center justify-center z-[999] cursor-zoom-out animate-fadeIn font-sans"
    >
      <div className="relative max-w-4xl max-h-[85vh] p-2 bg-white rounded-xl shadow-2xl">
        <img src={selectedImg} alt="Large Preview" className="max-w-full max-h-[80vh] rounded-lg object-contain" />
        <div className="text-center text-xs text-gray-550 mt-2 font-medium">Click anywhere to close preview</div>
      </div>
    </div>
  );
}
