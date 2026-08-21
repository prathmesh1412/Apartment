import React from 'react';
import { Camera } from 'lucide-react';
import { MapBox, ChangeDetectionBox } from '@/components/modules/Individual Design/shared/DesignComponents';

interface DesignRightPanelProps {
  handleHoverImage: (url: string | null, position?: 'left' | 'right') => void;
  openPreview: (url: string) => void;
}

export default function DesignRightPanel({
  handleHoverImage,
  openPreview
}: DesignRightPanelProps) {
  return (
    <div className="w-full lg:w-[270px] shrink-0 flex flex-col gap-2.5 h-full lg:overflow-y-auto overflow-visible scrollbar-thin pr-1 select-none">
      {/* Property Photo Card */}
      <div
        onMouseEnter={() => handleHoverImage("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop", "left")}
        onMouseLeave={() => handleHoverImage(null)}
        className="bg-white border border-[#002fbe]/25 rounded-lg p-2 flex flex-col shadow-md group hover:border-[#002fbe] transition-colors cursor-pointer flex-1 min-h-0 relative"
      >
        <div className="text-[9px] font-extrabold text-[#002fbe] mb-1.5 uppercase tracking-wider">Property Photo</div>
        <div className="overflow-hidden rounded w-full relative bg-gray-50 flex items-center justify-center border border-dashed border-gray-200 flex-1 min-h-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop"
            className="w-full h-full object-cover rounded transition-transform duration-500 group-hover:scale-110"
            alt="Property Photo"
            onClick={() => openPreview("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop")}
          />
          <button className="absolute bottom-1.5 right-1.5 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#002fbe] shadow-sm hover:bg-gray-50 transition-colors cursor-pointer" title="Update photo">
            <Camera size={12} />
          </button>
        </div>
      </div>
      <div
        onMouseEnter={() => handleHoverImage("/blueprint_plan.png", "left")}
        onMouseLeave={() => handleHoverImage(null)}
        className="bg-white border border-[#002fbe]/25 rounded-lg p-2 flex flex-col shadow-md group hover:border-[#002fbe] transition-colors cursor-pointer flex-1 min-h-0"
      >
        <div className="text-[9px] font-extrabold text-[#002fbe] mb-1.5 uppercase tracking-wider">Photo Plan</div>
        <div className="overflow-hidden rounded w-full relative bg-gray-50 flex items-center justify-center border border-dashed border-gray-200 flex-1 min-h-0">
          <img
            src="/blueprint_plan.png"
            className="w-full h-full object-contain rounded transition-transform duration-500 group-hover:scale-110"
            alt="Blueprint Plan"
            onClick={() => openPreview("/blueprint_plan.png")}
          />
        </div>
      </div>

      <div className="flex-1 min-h-0 flex flex-col">
        <MapBox
          title="GIS / Satellite View"
          imgUrl="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=400&auto=format&fit=crop"
          onZoom={() => openPreview("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop")}
          onHover={(url: string | null) => handleHoverImage(url, "left")}
        />
      </div>



      <div className="flex-1 min-h-0 flex flex-col">
        <ChangeDetectionBox
          title="Change Detection"
          beforeImg="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400&auto=format&fit=crop"
          afterImg="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop"
          beforeImgZoom="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
          afterImgZoom="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
          onHover={(url: string | null) => handleHoverImage(url, "left")}
          onZoom={() => openPreview("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop")}
        />
      </div>
    </div>
  );
}
