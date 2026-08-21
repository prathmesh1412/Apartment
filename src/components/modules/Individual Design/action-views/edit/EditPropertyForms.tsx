import React from 'react';
import { Input, Select } from '@/components/common';

interface FormProps {
  formData: any;
  onChange: (field: string, value: string) => void;
  errors?: Record<string, string>;
}

export function KycForm({ formData, onChange, errors = {} }: FormProps) {
  return (
    <div className="grid grid-cols-2 gap-4 text-[10px]">
      <Input
        label="Aadhaar Number (UID)"
        value={formData.aadhaar}
        onChange={(e) => onChange('aadhaar', e.target.value)}
        className="h-8 p-2 font-bold text-[10px]"
      />
      <Input
        label="Mobile Number"
        required
        value={formData.mobile}
        onChange={(e) => onChange('mobile', e.target.value)}
        error={errors.mobile}
        className="h-8 p-2 font-bold text-[10px]"
      />
      <Input
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={(e) => onChange('email', e.target.value)}
        className="h-8 p-2 font-bold text-[10px]"
      />
      <Input
        label="PAN Number"
        value={formData.pan}
        onChange={(e) => onChange('pan', e.target.value)}
        className="h-8 p-2 font-bold text-[10px] uppercase"
      />
    </div>
  );
}

export function PropertyForm({ formData, onChange, errors = {} }: FormProps) {
  return (
    <div className="grid grid-cols-2 gap-4 text-[10px]">
      <Input
        label="Property ID / UPIC"
        required
        value={formData.upic}
        onChange={(e) => onChange('upic', e.target.value)}
        error={errors.upic}
        className="h-8 p-2 font-bold text-[10px]"
      />
      <Select
        label="Category"
        value={formData.category}
        onChange={(e, val) => onChange('category', val)}
        options={[
          { label: 'Residential', value: 'Residential' },
          { label: 'Commercial', value: 'Commercial' },
          { label: 'Mixed Use', value: 'Mixed Use' },
          { label: 'Industrial', value: 'Industrial' },
        ]}
        selectSize="sm"
        className="h-8 font-bold text-[10px]"
      />
      <Input
        label="Ward"
        value={formData.ward}
        onChange={(e) => onChange('ward', e.target.value)}
        className="h-8 p-2 font-bold text-[10px]"
      />
      <Input
        label="Tax Zone"
        value={formData.zone}
        onChange={(e) => onChange('zone', e.target.value)}
        className="h-8 p-2 font-bold text-[10px]"
      />
    </div>
  );
}

export function OwnerForm({ formData, onChange, errors = {} }: FormProps) {
  return (
    <div className="grid grid-cols-2 gap-4 text-[10px]">
      <div className="col-span-2">
        <Input
          label="Owner Full Name"
          required
          value={formData.ownerName}
          onChange={(e) => onChange('ownerName', e.target.value)}
          error={errors.ownerName}
          className="h-8 p-2 font-bold text-[10px]"
        />
      </div>
      <Input
        label="Owner Holder Relationship"
        value={formData.ownerHolder}
        onChange={(e) => onChange('ownerHolder', e.target.value)}
        className="h-8 p-2 font-bold text-[10px]"
      />
      <Select
        label="Gender"
        value={formData.gender}
        onChange={(e, val) => onChange('gender', val)}
        options={[
          { label: 'Male', value: 'Male' },
          { label: 'Female', value: 'Female' },
          { label: 'Other', value: 'Other' },
        ]}
        selectSize="sm"
        className="h-8 font-bold text-[10px]"
      />
    </div>
  );
}

export function AddressForm({ formData, onChange }: FormProps) {
  return (
    <div className="grid grid-cols-2 gap-4 text-[10px]">
      <Input
        label="Plot No."
        value={formData.plotNo}
        onChange={(e) => onChange('plotNo', e.target.value)}
        className="h-8 p-2 font-bold text-[10px]"
      />
      <Input
        label="Flat / Shop No."
        value={formData.flatNo}
        onChange={(e) => onChange('flatNo', e.target.value)}
        className="h-8 p-2 font-bold text-[10px]"
      />
      <Input
        label="Mouja Name"
        value={formData.mouja}
        onChange={(e) => onChange('mouja', e.target.value)}
        className="h-8 p-2 font-bold text-[10px]"
      />
      <Input
        label="Wing / Block"
        value={formData.wing}
        onChange={(e) => onChange('wing', e.target.value)}
        className="h-8 p-2 font-bold text-[10px]"
      />
    </div>
  );
}

export { BuildingForm, OldForm, SocietyForm, DiscountForm } from '@/components/modules/Individual Design/action-views/edit/EditPropertyFormsMore';
