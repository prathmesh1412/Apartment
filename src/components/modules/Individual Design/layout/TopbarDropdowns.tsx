import React from 'react';
import { User, Settings, Shield, LogOut } from 'lucide-react';
import { Select } from '@/components/common';

interface DropdownItemProps {
  title: string;
  desc: string;
  time: string;
  isAlert?: boolean;
}

export function DropdownItem({ title, desc, time, isAlert }: DropdownItemProps) {
  return (
    <div className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer transition-colors">
      <div className="flex justify-between items-start gap-2 mb-0.5">
        <span className={`font-semibold ${isAlert ? 'text-red-700' : 'text-gray-800'}`}>{title}</span>
        <span className="text-[9px] text-gray-400 whitespace-nowrap">{time}</span>
      </div>
      <p className="text-gray-500 leading-normal">{desc}</p>
    </div>
  );
}

export function RedBellDropdown() {
  return (
    <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 text-gray-800 animate-fadeIn">
      <div className="px-4 py-1.5 border-b border-gray-100 font-bold text-xs text-red-600 flex justify-between items-center">
        <span>CRITICAL ALERTS</span>
        <span className="bg-red-50 text-[9px] px-1.5 py-0.5 rounded font-normal">12 New</span>
      </div>
      <div className="max-h-60 overflow-y-auto text-[11px] divide-y divide-gray-55">
        <DropdownItem title="Fire NOC Expired" desc="Survey No. CSNO05A requires immediate renewal." time="10 mins ago" isAlert />
        <DropdownItem title="Tax Penalty Overdue" desc="Interest is accruing on outstanding amount of ₹12,450." time="1 hour ago" isAlert />
        <DropdownItem title="AI Inspector Warning" desc="Area difference found for UPIC-270465-2024." time="3 hours ago" isAlert />
      </div>
      <div className="px-4 pt-2 border-t border-gray-100 text-center">
        <a href="#" className="text-blue-600 font-bold text-[10px] hover:underline">View All Alerts</a>
      </div>
    </div>
  );
}

export function GreenBellDropdown() {
  return (
    <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 text-gray-800 animate-fadeIn">
      <div className="px-4 py-1.5 border-b border-gray-100 font-bold text-xs text-green-700 flex justify-between items-center">
        <span>NOTICES & UPDATES</span>
        <span className="bg-green-50 text-[9px] px-1.5 py-0.5 rounded font-normal">3 New</span>
      </div>
      <div className="max-h-60 overflow-y-auto text-[11px] divide-y divide-gray-55">
        <DropdownItem title="GIS Verification Approved" desc="Property UPIC-270465-2024-000123 has been verified." time="2 hours ago" />
        <DropdownItem title="Early Payment Discount Active" desc="Pay within 10 days to get 5% rebate." time="1 day ago" />
        <DropdownItem title="KYC Verification Complete" desc="Aadhaar and Mobile successfully linked." time="2 days ago" />
      </div>
      <div className="px-4 pt-2 border-t border-gray-100 text-center">
        <a href="#" className="text-blue-600 font-bold text-[10px] hover:underline">View All Notices</a>
      </div>
    </div>
  );
}

export function ProfileDropdown() {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50 text-gray-800 animate-fadeIn">
      <div className="px-4 py-2 border-b border-gray-100 text-xs">
        <p className="font-bold text-gray-900">admin scipl</p>
        <p className="text-[10px] text-gray-500 font-medium">admin@thane.gov.in</p>
      </div>

      <a href="#" className="flex items-center gap-2.5 px-4 py-2 text-xs hover:bg-gray-50 text-gray-700 transition-colors">
        <User size={14} className="text-gray-400" />
        <span>My Profile</span>
      </a>
      <a href="#" className="flex items-center gap-2.5 px-4 py-2 text-xs hover:bg-gray-50 text-gray-700 transition-colors">
        <Settings size={14} className="text-gray-400" />
        <span>Account Settings</span>
      </a>
      <a href="#" className="flex items-center gap-2.5 px-4 py-2 text-xs hover:bg-gray-50 text-gray-700 transition-colors">
        <Shield size={14} className="text-gray-400" />
        <span>Security Settings</span>
      </a>

      <div className="border-t border-gray-100 my-1"></div>

      <button className="flex items-center gap-2.5 w-full text-left px-4 py-2 text-xs text-red-600 hover:bg-red-50 transition-colors font-semibold cursor-pointer">
        <LogOut size={14} />
        <span>Logout</span>
      </button>
    </div>
  );
}

interface SearchFilterProps {
  tempFilters: {
    searchBy: string;
    zone: string;
    ward: string;
    status: string;
  };
  setTempFilters: React.Dispatch<React.SetStateAction<{
    searchBy: string;
    zone: string;
    ward: string;
    status: string;
  }>>;
  clearFilters: () => void;
  applyFilters: () => void;
}

export function SearchFilterDropdown({ tempFilters, setTempFilters, clearFilters, applyFilters }: SearchFilterProps) {
  return (
    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-blue-100 p-3.5 z-55 text-gray-800 animate-fadeIn">
      <div className="text-[11px] text-[#002fbe] font-bold uppercase tracking-wider mb-2 border-b border-gray-100 pb-1.5">
        SEARCH FILTERS
      </div>
      <div className="space-y-3">
        <Select
          label="Search By"
          value={tempFilters.searchBy}
          onChange={(e, val) => setTempFilters({ ...tempFilters, searchBy: val })}
          options={[
            { label: 'Property No.', value: 'Property No.' },
            { label: 'UPIC', value: 'UPIC' },
            { label: 'Owner Name', value: 'Owner Name' },
            { label: 'Mobile Number', value: 'Mobile Number' },
            { label: 'Ward', value: 'Ward' },
            { label: 'Zone', value: 'Zone' },
            { label: 'Survey No.', value: 'Survey No.' },
            { label: 'Plot No.', value: 'Plot No.' },
            { label: 'Property Status', value: 'Property Status' },
          ]}
          selectSize="sm"
          className="text-xs bg-gray-50 border-gray-200 font-medium text-gray-700"
        />

        <div className="grid grid-cols-2 gap-2">
          <Select
            label="Zone"
            value={tempFilters.zone}
            onChange={(e, val) => setTempFilters({ ...tempFilters, zone: val })}
            options={[
              { label: 'All Zones', value: 'All Zones' },
              { label: 'Zone 1', value: 'Zone 1' },
              { label: 'Zone 2', value: 'Zone 2' },
              { label: 'Zone 3', value: 'Zone 3' },
            ]}
            selectSize="sm"
            className="text-xs bg-gray-50 border-gray-200 font-medium text-gray-700"
          />
          <Select
            label="Ward"
            value={tempFilters.ward}
            onChange={(e, val) => setTempFilters({ ...tempFilters, ward: val })}
            options={[
              { label: 'All Wards', value: 'All Wards' },
              { label: 'Ward 1', value: 'Ward 1' },
              { label: 'Ward 2', value: 'Ward 2' },
              { label: 'Ward 3', value: 'Ward 3' },
            ]}
            selectSize="sm"
            className="text-xs bg-gray-50 border-gray-200 font-medium text-gray-700"
          />
        </div>

        <Select
          label="Status"
          value={tempFilters.status}
          onChange={(e, val) => setTempFilters({ ...tempFilters, status: val })}
          options={[
            { label: 'All Statuses', value: 'All Statuses' },
            { label: 'Completed', value: 'Completed' },
            { label: 'In Progress', value: 'In Progress' },
            { label: 'Pending', value: 'Pending' },
          ]}
          selectSize="sm"
          className="text-xs bg-gray-55 border-gray-200 font-medium text-gray-700"
        />

        <div className="flex justify-between items-center pt-2 border-t border-gray-55">
          <button 
            onClick={clearFilters}
            className="text-[10px] text-red-500 font-bold hover:underline cursor-pointer"
          >
            Clear
          </button>
          <button 
            onClick={applyFilters}
            className="bg-[#002fbe] text-white text-[10px] font-bold px-3 py-1 rounded hover:bg-[#00259b] cursor-pointer shadow-xs"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
