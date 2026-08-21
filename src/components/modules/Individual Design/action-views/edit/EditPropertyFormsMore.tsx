import React from 'react';
import { Input } from '@/components/common';

interface FormProps {
  formData: any;
  onChange: (field: string, value: string) => void;
  errors?: Record<string, string>;
}

export function BuildingForm({ formData, onChange }: FormProps) {
  return (
    <div className="grid grid-cols-2 gap-4 text-[10px]">
      <Input
        label="Total Floors"
        type="number"
        value={formData.floors}
        onChange={(e) => onChange('floors', e.target.value)}
        className="h-8 p-2 font-bold text-[10px]"
      />
      <Input
        label="Construction Type"
        value={formData.constructionType}
        onChange={(e) => onChange('constructionType', e.target.value)}
        className="h-8 p-2 font-bold text-[10px]"
      />
      <Input
        label="Built-Up Area (sq. ft.)"
        value={formData.builtUpArea}
        onChange={(e) => onChange('builtUpArea', e.target.value)}
        className="h-8 p-2 font-bold text-[10px]"
      />
      <Input
        label="Carpet Area (sq. ft.)"
        value={formData.carpetArea}
        onChange={(e) => onChange('carpetArea', e.target.value)}
        className="h-8 p-2 font-bold text-[10px]"
      />
    </div>
  );
}

export function OldForm({ formData, onChange }: FormProps) {
  return (
    <div className="grid grid-cols-2 gap-4 text-[10px]">
      <Input
        label="Old Property ID"
        value={formData.oldPropId}
        onChange={(e) => onChange('oldPropId', e.target.value)}
        className="h-8 p-2 font-bold text-[10px]"
      />
      <Input
        label="Old Rateable Value (₹)"
        value={formData.oldRateableValue}
        onChange={(e) => onChange('oldRateableValue', e.target.value)}
        className="h-8 p-2 font-bold text-[10px]"
      />
    </div>
  );
}

export function SocietyForm({ formData, onChange }: FormProps) {
  return (
    <div className="grid grid-cols-2 gap-4 text-[10px]">
      <Input
        label="Society Name"
        value={formData.societyName}
        onChange={(e) => onChange('societyName', e.target.value)}
        className="h-8 p-2 font-bold text-[10px]"
      />
      <Input
        label="Society Registration Number"
        value={formData.registrationNo}
        onChange={(e) => onChange('registrationNo', e.target.value)}
        className="h-8 p-2 font-bold text-[10px]"
      />
    </div>
  );
}

export function DiscountForm({ formData, onChange }: FormProps) {
  return (
    <div className="grid grid-cols-2 gap-4 text-[10px]">
      <Input
        label="Exemption Category"
        value={formData.exemptionType}
        onChange={(e) => onChange('exemptionType', e.target.value)}
        className="h-8 p-2 font-bold text-[10px]"
      />
      <Input
        label="Exemption Value (%)"
        value={formData.exemptionPercent}
        onChange={(e) => onChange('exemptionPercent', e.target.value)}
        className="h-8 p-2 font-bold text-[10px]"
      />
    </div>
  );
}
