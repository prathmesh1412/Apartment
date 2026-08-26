import React from 'react';
import { 
  CheckCircle2, 
  Wallet, 
  Droplet, 
  ShieldCheck, 
  Briefcase, 
  Link2,
  BarChart3
} from 'lucide-react';
import StatusBadge from '@/components/modules/shared/StatusBadge';

export default function VerificationBadges() {
  return (
    <div className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs text-[10px] flex items-center justify-between gap-x-1.5 shrink-0 select-none h-[40px] xl:h-[42px] overflow-x-auto no-scrollbar whitespace-nowrap w-full">
      <StatusBadge icon={<CheckCircle2 size={12} className="text-emerald-600" />} title="GIS Verified" status="Verified" statusColor="text-emerald-600" />
      <StatusBadge icon={<CheckCircle2 size={12} className="text-emerald-600" />} title="Assessment" status="Completed" statusColor="text-emerald-600" />
      <StatusBadge icon={<Wallet size={12} className="text-emerald-600" />} title="Collection Status" status="On Track" statusColor="text-emerald-600" />
      <StatusBadge icon={<Droplet size={12} className="text-blue-600" />} title="Active Demands" status="None" statusColor="text-blue-600" isBlue />
      <StatusBadge icon={<ShieldCheck size={12} className="text-emerald-600" />} title="Fire NOC" status="Valid" statusColor="text-emerald-600" />
      <StatusBadge icon={<Briefcase size={12} className="text-emerald-600" />} title="Noo License" status="Active" statusColor="text-emerald-600" />
      <StatusBadge icon={<Link2 size={12} className="text-emerald-600" />} title="BPMS Sync" status="Active" statusColor="text-emerald-600" />
      <StatusBadge icon={<BarChart3 size={12} className="text-emerald-600" />} title="Wing Certif Status" status="Active" statusColor="text-emerald-600" />
    </div>
  );
}
