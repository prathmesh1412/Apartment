import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { CapitalTable, DualTable } from '@/components/modules/Individual Design/property-details/FloorSubTables';
import { RateableTable } from '@/components/modules/Individual Design/property-details/RateableTable';

interface FloorComponentDetailsTableProps {
  activeSubTab?: 'rateable' | 'capital' | 'dual' | 'reassessment';
}

export default function FloorComponentDetailsTable({ activeSubTab = 'rateable' }: FloorComponentDetailsTableProps) {
  const tableRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [showScrollControls, setShowScrollControls] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = tableRef.current;
    if (el) {
      const hasOverflow = el.scrollWidth > el.clientWidth;
      setShowScrollControls(hasOverflow);
      setCanScrollLeft(el.scrollLeft > 2);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
    }
  }, []);

  useEffect(() => {
    const el = tableRef.current;
    if (el) {
      updateScrollState();
      el.addEventListener('scroll', updateScrollState);
      window.addEventListener('resize', updateScrollState);

      const observer = new MutationObserver(updateScrollState);
      observer.observe(el, { childList: true, subtree: true });

      return () => {
        el.removeEventListener('scroll', updateScrollState);
        window.removeEventListener('resize', updateScrollState);
        observer.disconnect();
      };
    }
  }, [activeSubTab, updateScrollState]);

  const scrollLeft = () => {
    const el = tableRef.current;
    if (el) {
      el.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const el = tableRef.current;
    if (el) {
      el.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col gap-1.5 w-full shrink-0">
      <div className="relative flex items-stretch gap-1.5 w-full">
        <div 
          ref={tableRef} 
          className={`overflow-x-auto overflow-y-auto border border-gray-200 rounded-lg relative table-scroll-container flex-grow scrollbar-thin transition-all duration-300 ${
            isExpanded ? 'max-h-[370px]' : 'max-h-[165px]'
          }`}
        >
          {activeSubTab === 'rateable' && <RateableTable />}
          {activeSubTab === 'capital' && <CapitalTable />}
          {activeSubTab === 'dual' && <DualTable />}
        </div>

        {showScrollControls && (
          <div className="flex flex-col gap-1 justify-center items-center shrink-0 w-8 border border-gray-200 rounded-lg bg-gray-50/50 p-1">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`w-6 h-6 flex items-center justify-center rounded-md border text-center transition-all cursor-pointer ${
                canScrollLeft
                  ? 'bg-white text-[#002fbe] border-blue-200 hover:bg-blue-50 active:scale-95 shadow-sm'
                  : 'bg-gray-100/50 text-gray-300 border-gray-200 cursor-not-allowed'
              }`}
              title="Scroll Left"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`w-6 h-6 flex items-center justify-center rounded-md border text-center transition-all cursor-pointer ${
                canScrollRight
                  ? 'bg-white text-[#002fbe] border-blue-200 hover:bg-blue-50 active:scale-95 shadow-sm'
                  : 'bg-gray-100/50 text-gray-300 border-gray-200 cursor-not-allowed'
              }`}
              title="Scroll Right"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={() => setIsExpanded(prev => !prev)}
          className="flex items-center gap-1.5 px-3.5 py-1 text-[10px] font-extrabold text-[#002fbe] bg-blue-50/80 hover:bg-[#002fbe] hover:text-white border border-blue-200 rounded-full transition-all cursor-pointer shadow-2xs active:scale-95"
        >
          {isExpanded ? (
            <>
              <ChevronUp size={12} />
              <span>Collapse</span>
            </>
          ) : (
            <>
              <ChevronDown size={12} />
              <span>Expand</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
