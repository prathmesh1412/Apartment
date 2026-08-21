import React from 'react';
import { 
  UserCheck, 
  Split, 
  Merge, 
  AlertTriangle, 
  ShieldCheck, 
  Lock, 
  Archive, 
  FileSpreadsheet 
} from 'lucide-react';
import { Input, Select, TextArea } from '@/components/common';

export const adminActions = [
  { id: 'transfer', title: 'Ownership Transfer', icon: <UserCheck size={14} />, desc: 'Process official property registry title transfer to a new buyer or beneficiary.', color: 'hover:border-blue-500/50 hover:bg-blue-50/10' },
  { id: 'split', title: 'Registry Subdivision (Split)', icon: <Split size={14} />, desc: 'Subdivide this land parcel UPIC registration into multiple sub-plots.', color: 'hover:border-purple-500/50 hover:bg-purple-50/10' },
  { id: 'merge', title: 'Registry Merging', icon: <Merge size={14} />, desc: 'Combine this property record with adjacent registers to construct a unified UPIC.', color: 'hover:border-indigo-500/50 hover:bg-indigo-50/10' },
  { id: 'disputed', title: 'Disputed Registry Flag', icon: <AlertTriangle size={14} />, desc: 'Flag this property registry record under active legal case or tax dispute.', color: 'hover:border-amber-500/50 hover:bg-amber-50/10' },
  { id: 'exempted', title: 'Exemption Assessment Class', icon: <ShieldCheck size={14} />, desc: 'Apply statutory property tax exemption classes (religious, public, charitable).', color: 'hover:border-teal-500/50 hover:bg-teal-50/10' },
  { id: 'deactivate', title: 'Deactivate Property Record', icon: <Lock size={14} />, desc: 'Permanently deactivate property ID registration to halt tax cycles.', color: 'hover:border-red-500/50 hover:bg-red-50/10' },
  { id: 'archive', title: 'Archive Property Record', icon: <Archive size={14} />, desc: 'Archive registry data file records from the active search databases.', color: 'hover:border-rose-500/50 hover:bg-rose-50/10' },
  { id: 'audit-log', title: 'Database Audit Trails', icon: <FileSpreadsheet size={14} />, desc: 'Retrieve system query audit lists detailing data updates and history logs.', color: 'hover:border-gray-500/50 hover:bg-gray-50/10' }
];

interface AdminActionsGridProps {
  onSelect: (id: string) => void;
}

export function AdminActionsGrid({ onSelect }: AdminActionsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-0.5">
      {adminActions.map((action) => (
        <button
          key={action.id}
          onClick={() => onSelect(action.id)}
          className={`bg-white border border-gray-250 rounded-2xl p-4 text-left flex items-start gap-3.5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer ${action.color}`}
        >
          <div className={`p-2.5 rounded-xl border mt-0.5 transition-colors shrink-0 ${
            action.id === 'transfer' ? 'bg-blue-50 text-blue-600 border-blue-100' :
            action.id === 'split' ? 'bg-purple-50 text-purple-700 border-purple-100' :
            action.id === 'merge' ? 'bg-indigo-50 text-indigo-700 border-indigo-100' :
            action.id === 'disputed' ? 'bg-amber-50 text-amber-600 border-amber-100' :
            action.id === 'exempted' ? 'bg-teal-50 text-teal-700 border-teal-100' :
            action.id === 'deactivate' ? 'bg-red-50 text-red-600 border-red-100' :
            action.id === 'archive' ? 'bg-rose-50 text-rose-600 border-rose-100' : 'bg-gray-50 text-slate-600 border-gray-200'
          }`}>{action.icon}</div>
          <div className="flex flex-col gap-1 text-[9.5px] leading-snug flex-1">
            <span className="font-black text-[#1e2b58] uppercase tracking-wider text-[10px]">{action.title}</span>
            <p className="text-slate-700 font-extrabold leading-normal">{action.desc}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

export function AuditLogTable() {
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-gray-55 border border-gray-200 rounded-xl overflow-hidden shadow-sm flex-1 min-h-[160px]">
        <table className="w-full text-[9px] text-center border-collapse bg-white">
          <thead className="bg-[#1e2b58] text-white font-extrabold uppercase text-[8px] tracking-wider sticky top-0">
            <tr>
              <th className="py-2.5 px-1.5 border-r border-white/10">Log ID</th>
              <th className="py-2.5 px-1.5 border-r border-white/10">Operator</th>
              <th className="py-2.5 px-1.5 border-r border-white/10">Action Logged</th>
              <th className="py-2.5 px-1.5 border-r border-white/10">Timestamp</th>
              <th className="py-2.5 px-1.5">Source IP</th>
            </tr>
          </thead>
          <tbody className="font-extrabold text-slate-800">
            <tr className="border-b border-gray-150 hover:bg-gray-50/20">
              <td className="py-2.5 px-1 text-blue-700 font-black font-mono">#AUD-9921</td>
              <td className="py-2.5 px-1 font-black">Manoj Shinde</td>
              <td className="py-2.5 px-1 text-slate-705 font-extrabold">Updated mobile contact</td>
              <td className="py-2.5 px-1 text-slate-705 font-extrabold">29-Jul-2026 12:00</td>
              <td className="py-2.5 px-1 font-mono text-slate-800 font-black">192.168.1.104</td>
            </tr>
            <tr className="border-b border-gray-150 hover:bg-gray-50/20">
              <td className="py-2.5 px-1 text-blue-700 font-black font-mono">#AUD-9854</td>
              <td className="py-2.5 px-1 font-black">Officer Joshi</td>
              <td className="py-2.5 px-1 text-slate-705 font-extrabold">Reassessment completed</td>
              <td className="py-2.5 px-1 text-slate-750 font-extrabold">20-Apr-2024 10:45</td>
              <td className="py-2.5 px-1 font-mono text-slate-800 font-black">10.0.12.89</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface WorkflowFormProps {
  selectedWorkflow: string;
  secondaryField: string;
  setSecondaryField: (v: string) => void;
  reasonText: string;
  setReasonText: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}

export function WorkflowForm({
  selectedWorkflow,
  secondaryField,
  setSecondaryField,
  reasonText,
  setReasonText,
  onSubmit,
  onCancel
}: WorkflowFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 font-semibold text-gray-700 text-[9px] p-0.5">
      {['deactivate', 'archive'].includes(selectedWorkflow) && (
        <div className="bg-red-50 border border-red-200 text-red-655 p-3 rounded-lg flex items-start gap-1.5 shadow-2xs leading-normal">
          <AlertTriangle size={13} className="shrink-0 mt-0.5" />
          <p className="text-[9px]">Warning: Deactivating or Archiving is a major destructive action. This will freeze current assessment cycles.</p>
        </div>
      )}
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Property UPIC ID"
          value="1290082181"
          disabled
          className="p-2 font-bold text-[9px] bg-gray-100 border-gray-200 cursor-not-allowed select-none"
        />
        <div className="flex flex-col">
          {selectedWorkflow === 'transfer' && (
            <Input
              label="Proposed New Owner Name"
              required
              placeholder="e.g. Manoj Balasaheb Thackeray"
              value={secondaryField}
              onChange={(e) => setSecondaryField(e.target.value)}
              className="h-8 p-2 font-bold text-[9px] bg-white border-gray-200"
            />
          )}
          {selectedWorkflow === 'split' && (
            <Select
              label="Number of subdivisions"
              required
              value={secondaryField}
              onChange={(e, val) => setSecondaryField(val)}
              options={[
                { label: '2 Plots', value: '2 Plots' },
                { label: '3 Plots', value: '3 Plots' },
              ]}
              placeholder="Choose subdivisions..."
              selectSize="sm"
              className="text-[9px] font-bold bg-white border-gray-200 h-8"
            />
          )}
          {selectedWorkflow === 'merge' && (
            <Input
              label="Adjacent Target Property ID"
              required
              placeholder="e.g. 1290082190"
              value={secondaryField}
              onChange={(e) => setSecondaryField(e.target.value)}
              className="h-8 p-2 font-bold text-[9px] bg-white border-gray-200"
            />
          )}
          {selectedWorkflow === 'disputed' && (
            <Input
              label="Dispute Reference / Case ID"
              required
              placeholder="e.g. Court-Case-908B-Nagpur"
              value={secondaryField}
              onChange={(e) => setSecondaryField(e.target.value)}
              className="h-8 p-2 font-bold text-[9px] bg-white border-gray-200"
            />
          )}
          {selectedWorkflow === 'exempted' && (
            <Select
              label="Exemption Category Class"
              required
              value={secondaryField}
              onChange={(e, val) => setSecondaryField(val)}
              options={[
                { label: 'Religious Trust (100%)', value: 'Religious Trust Exemption (100%)' },
                { label: 'Gov Educational (100%)', value: 'Government Educational Class (100%)' },
              ]}
              placeholder="Choose Exemption..."
              selectSize="sm"
              className="text-[9px] font-bold bg-white border-gray-200 h-8"
            />
          )}
        </div>
      </div>
      <TextArea
        label="Workflow Comments"
        required
        rows={3}
        value={reasonText}
        onChange={(e) => setReasonText(e.target.value)}
        placeholder="Enter formal comments..."
        className="p-2 font-bold text-[9px] bg-white border-gray-200 resize-none h-16"
      />
      <div className="flex items-center justify-end gap-2.5 border-t border-gray-100 pt-2.5 text-[9px] font-extrabold select-none mt-2">
        <button type="button" onClick={onCancel} className="px-3.5 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600 bg-white cursor-pointer transition-all">Cancel</button>
        <button type="submit" disabled={!reasonText.trim() || (!['deactivate', 'archive'].includes(selectedWorkflow) && !secondaryField.trim())} className={`px-4 py-2 text-white border rounded-lg cursor-pointer transition-all ${['deactivate', 'archive'].includes(selectedWorkflow) ? 'bg-red-655 hover:bg-red-700 border-red-700' : 'bg-[#002fbe] hover:bg-[#002598] border-blue-650'} disabled:opacity-50`}>Confirm Action</button>
      </div>
    </form>
  );
}
