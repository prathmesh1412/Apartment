import React from 'react';
import { ZoomIn } from 'lucide-react';
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
    <div className="w-full lg:w-[260px] xl:w-[270px] shrink-0 flex flex-col gap-2 h-full overflow-hidden select-none text-sans">
      {/* 1. PROPERTY PHOTO Card */}
      <div
        onMouseEnter={() => handleHoverImage("/apartment_image.jpg", "left")}
        onMouseLeave={() => handleHoverImage(null)}
        className="bg-white border border-slate-200 rounded-xl p-2 flex flex-col shadow-2xs group hover:border-blue-500 transition-colors cursor-pointer relative flex-1 min-h-0"
      >
        <div className="text-[9.5px] font-black text-slate-700 mb-1 uppercase tracking-wide shrink-0">
          PROPERTY PHOTO
        </div>
        <div className="overflow-hidden rounded-lg w-full flex-1 min-h-0 relative bg-slate-50 border border-slate-200">
          <img
            src="/apartment_image.jpg"
            className="w-full h-full object-cover rounded transition-transform duration-300 group-hover:scale-105"
            alt="Property Photo"
            onClick={() => openPreview("/apartment_image.jpg")}
          />
          <button 
            onClick={() => openPreview("/apartment_image.jpg")}
            className="absolute bottom-1.5 right-1.5 w-6 h-6 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center text-blue-600 shadow-xs hover:bg-white transition-colors cursor-pointer" 
            title="Enlarge Photo"
          >
            <ZoomIn size={12} />
          </button>
        </div>
      </div>

      {/* 2. PLOT PLAN Card */}
      <div
        onMouseEnter={() => handleHoverImage("/blueprint_plan.png", "left")}
        onMouseLeave={() => handleHoverImage(null)}
        className="bg-white border border-slate-200 rounded-xl p-2 flex flex-col shadow-2xs group hover:border-blue-500 transition-colors cursor-pointer relative flex-1 min-h-0"
      >
        <div className="text-[9.5px] font-black text-slate-700 mb-1 uppercase tracking-wide shrink-0">
          PLOT PLAN
        </div>
        <div className="overflow-hidden rounded-lg w-full flex-1 min-h-0 relative bg-slate-50 border border-slate-200 p-1 flex items-center justify-center">
          <img
            src="/blueprint_plan.png"
            className="w-full h-full object-contain rounded transition-transform duration-300 group-hover:scale-105"
            alt="Plot Plan"
            onClick={() => openPreview("/blueprint_plan.png")}
          />
        </div>
      </div>

      {/* 3. GIS / SATELLITE VIEW Card */}
      <div className="flex-1 min-h-0 flex flex-col">
        <MapBox
          title="GIS / SATELLITE VIEW"
          imgUrl="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=400&auto=format&fit=crop"
          onZoom={() => openPreview("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop")}
          onHover={(url: string | null) => handleHoverImage(url, "left")}
          height="h-full flex-1 min-h-0"
        />
      </div>

      {/* 4. ENCROACHMENT VIEW Card */}
      <div className="flex-1 min-h-0 flex flex-col">
        <ChangeDetectionBox
          title="ENCROACHMENT VIEW"
          beforeImg="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400&auto=format&fit=crop"
          afterImg="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop"
          beforeImgZoom="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
          afterImgZoom="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
          onHover={(url: string | null) => handleHoverImage(url, "left")}
          onZoom={() => openPreview("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop")}
          height="h-full flex-1 min-h-0"
        />
      </div>
    </div>
  );
}

