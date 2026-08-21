import React, { useState } from 'react';
import { X, Settings, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { 
  adminActions, 
  AdminActionsGrid, 
  AuditLogTable, 
  WorkflowForm 
} from '@/components/modules/Individual Design/action-views/actions/MoreActionsComponents';

interface MoreActionsViewProps {
  onClose: () => void;
}

export default function MoreActionsView({ onClose }: MoreActionsViewProps) {
  const [selectedWorkflow, setSelectedWorkflow] = useState<string | null>(null);
  const [reasonText, setReasonText] = useState('');
  const [secondaryField, setSecondaryField] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleWorkflowSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reasonText.trim()) return;

    let msg = '';
    switch (selectedWorkflow) {
      case 'transfer': msg = `Ownership transfer request submitted for target: "${secondaryField}"!`; break;
      case 'split': msg = `Property registry split request filed for ${secondaryField} plots!`; break;
      case 'merge': msg = `Merging request submitted for adjacent UPIC: ${secondaryField}!`; break;
      case 'disputed': msg = `Disputed status registered under reference Case: ${secondaryField}!`; break;
      case 'exempted': msg = `Exemption classification applied successfully! Type: ${secondaryField}`; break;
      case 'deactivate': msg = 'Property registration deactivated successfully!'; break;
      case 'archive': msg = 'Property registry record moved to historical archives!'; break;
    }

    setSuccessMessage(msg);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedWorkflow(null);
      setReasonText('');
      setSecondaryField('');
    }, 2000);
  };

  const handleCancel = () => {
    setSelectedWorkflow(null);
    setReasonText('');
    setSecondaryField('');
  };

  return (
    <div className="flex flex-col h-full gap-3 font-sans animate-fadeIn p-1 relative select-none">
      {showSuccess && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[100] bg-green-600 text-white font-extrabold px-6 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 border border-green-500 animate-slideDown text-[9px] uppercase tracking-wider">
          <CheckCircle2 size={14} />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 shrink-0">
        <div className="flex items-center gap-2">
          {selectedWorkflow ? (
            <button 
              onClick={handleCancel}
              className="p-1 px-2.5 rounded-lg text-slate-655 hover:text-[#002fbe] hover:bg-blue-50 cursor-pointer flex items-center gap-1 text-[8.5px] font-black uppercase tracking-wider border border-gray-200 bg-white transition-all shadow-2xs"
            >
              <ChevronLeft size={12} />
              <span>Back</span>
            </button>
          ) : (
            <div className="bg-[#1e2b58] text-white p-2 rounded-xl shadow-xs"><Settings size={16} /></div>
          )}
          <div>
            <h2 className="font-extrabold text-[#1e2b58] text-xs uppercase tracking-wider leading-none">
              {selectedWorkflow ? `Workflow: ${adminActions.find(a => a.id === selectedWorkflow)?.title}` : 'Administrative Registry Operations'}
            </h2>
            <span className="text-slate-600 text-[9px] font-extrabold mt-1 block leading-none">Nagpur Municipal Corporation • Property ID: 1290082181</span>
          </div>
        </div>
        <button onClick={onClose} className="text-slate-500 hover:text-slate-800 font-extrabold hover:bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition-all active:scale-95"><X size={14} /></button>
      </div>

      <div className="flex-grow flex-1 min-h-0 overflow-y-auto pr-0.5 no-scrollbar">
        {!selectedWorkflow ? (
          <AdminActionsGrid onSelect={setSelectedWorkflow} />
        ) : selectedWorkflow === 'audit-log' ? (
          <AuditLogTable />
        ) : (
          <WorkflowForm
            selectedWorkflow={selectedWorkflow}
            secondaryField={secondaryField}
            setSecondaryField={setSecondaryField}
            reasonText={reasonText}
            setReasonText={setReasonText}
            onSubmit={handleWorkflowSubmit}
            onCancel={handleCancel}
          />
        )}
      </div>
    </div>
  );
}
