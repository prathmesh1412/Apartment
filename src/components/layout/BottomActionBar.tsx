'use client';

import { useTransition } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { FooterAction } from '@/lib/api/footer.service';
import { handleFooterAction } from '@/app/[locale]/footer-actions';
import { toast } from 'sonner';
import { FooterPagination } from './FooterPagination';
import { UtilityActions, RightActions } from './FooterActionButtons';
import { useFooterActions } from '@/hooks/layout/useFooterActions';
import type { PropertyListItem } from '@/types/ptis.types';

interface BottomActionBarProps {
  actions?: FooterAction[];
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  onAction?: (command: string) => void;
  isLoading?: boolean;
  leftContent?: React.ReactNode;
  centerContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  properties?: PropertyListItem[];
}

export function BottomActionBar({
  actions = [],
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  onAction,
  isLoading = false,
  leftContent,
  centerContent,
  rightContent,
  properties = [],
}: BottomActionBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [, startTransition] = useTransition();
  const [isPaginationPending, startPaginationTransition] = useTransition();

  const groupedActions = useFooterActions(actions);

  // Find current property index in properties array
  const activePropertyId = searchParams.get('propertyId') ? Number(searchParams.get('propertyId')) : null;
  const activeIndex = activePropertyId && properties.length > 0
    ? properties.findIndex((p) => p.propertyId === activePropertyId)
    : -1;

  const hasProperties = properties.length > 0;
  const activePropertySelected = activeIndex !== -1;
  const resolvedCurrentPage = hasProperties
    ? (activePropertySelected ? activeIndex + 1 : 0)
    : currentPage;
  const resolvedTotalPages = hasProperties
    ? properties.length
    : totalPages;

  const isPaginationDisabled = hasProperties && !activePropertySelected;

  const handlePageChange = onPageChange || ((page: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (hasProperties) {
      const targetProperty = properties[page - 1];
      if (targetProperty) {
        newParams.set('propertyId', String(targetProperty.propertyId));
        newParams.set('propertyNo', targetProperty.propertyNo);
        const rawPart = targetProperty.partitionNo;
        newParams.set('partitionNo', rawPart && rawPart.trim() !== '' && rawPart !== '0' ? rawPart : '0');
        // Reset table pageNumber as we are switching properties
        newParams.delete('pageNumber');
      }
    } else {
      newParams.set('pageNumber', String(page));
    }
    startPaginationTransition(() => {
      router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });
    });
  });

  const handleActionClick = async (command: string) => {
    if (onAction) {
      onAction(command);
      return;
    }
    startTransition(async () => {
      const propertyId = searchParams.get('propertyId') || undefined;
      const wardNo = searchParams.get('wardNo') || undefined;
      const wardId = searchParams.get('wardId') || undefined;
      const propertyNo = searchParams.get('propertyNo') || undefined;
      const partitionNo = searchParams.get('partitionNo') || undefined;
      const tab = searchParams.get('tab') || undefined;
      const valuationTab = searchParams.get('valuationTab') || undefined;
      const appartmentTab = searchParams.get('appartmentTab') || undefined;
      const subTab = searchParams.get('subTab') || undefined;
      const showDetails = searchParams.get('showDetails') || undefined;
      
      const rateableExpand = searchParams.getAll('rateableExpand');
      const capitalExpand = searchParams.getAll('capitalExpand');
      const dualExpand = searchParams.getAll('dualExpand');

      const rateableExpandParam = rateableExpand.length > 0 ? rateableExpand : undefined;
      const capitalExpandParam = capitalExpand.length > 0 ? capitalExpand : undefined;
      const dualExpandParam = dualExpand.length > 0 ? dualExpand : undefined;

      const pathnameSegments = pathname.split('/').filter(Boolean);
      const locale = pathnameSegments[0] || 'en';

      const result = await handleFooterAction(command, {
        propertyId,
        locale,
        wardNo,
        wardId,
        propertyNo,
        partitionNo,
        tab,
        valuationTab,
        appartmentTab,
        subTab,
        showDetails,
        rateableExpand: rateableExpandParam,
        capitalExpand: capitalExpandParam,
        dualExpand: dualExpandParam,
      });
      if (result.success) {
        toast.success(result.message || 'Action executed.');
      } else {
        toast.error(result.error || 'Action failed.');
      }
    });
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[50] h-auto min-h-[48px] md:h-14 bg-white/95 backdrop-blur-xl border-t border-slate-200/60 shadow-[0_-8px_40px_rgb(0,0,0,0.06)] print:hidden transition-all duration-300 layout-content-shifted flex flex-col md:flex-row items-stretch md:items-center justify-between px-3 sm:px-6 py-2 md:py-0">
      {/* Premium glossy top highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />

      <div className="w-full max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 md:gap-4">
        {/* ROW 1: Pagination & Controls (Mobile), LEFT on Desktop */}
        <div className="w-full md:w-auto flex items-center justify-between md:justify-start gap-2 md:gap-3 shrink-0">
          <FooterPagination
            currentPage={resolvedCurrentPage}
            totalPages={resolvedTotalPages}
            onPageChange={handlePageChange}
            leftContent={leftContent}
            isPropertyPagination={hasProperties}
            isLoading={isPaginationPending || isLoading}
            disabled={isPaginationDisabled}
          />
        </div>

        {/* ROW 2: Utilities & Right Actions (Mobile), CENTER & RIGHT on Desktop */}
        <div className="w-full md:flex-1 flex items-center justify-between md:justify-end gap-2 md:gap-4 min-w-0">
          {/* MIDDLE: Centered Utilities with Scroll Gradient Overlays */}
          <div className="relative flex-1 min-w-0 flex items-center">
            {/* Left Fade Overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-white/95 to-transparent pointer-events-none z-10" />

            {/* Scrollable container starting at justify-start (mobile) and md:justify-center (desktop) */}
            <div className="flex-1 flex items-center justify-start md:justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar px-2 min-w-0">
              <UtilityActions
                actions={groupedActions.utility}
                onActionClick={handleActionClick}
                isLoading={isLoading}
              />
              {centerContent}
            </div>

            {/* Right Fade Overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-3 bg-gradient-to-l from-white/95 to-transparent pointer-events-none z-10" />
          </div>

          {/* RIGHT: High-Priority Actions */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0 pl-2 border-l border-slate-100 md:border-l-0 md:pl-0">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('toggle-ai-validation-panel'))}
              title="Toggle AI Inspector & Validation Status Panel"
              className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg border border-blue-300 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-[#002fbe] flex items-center justify-center relative shadow-xs transition-all cursor-pointer hover:scale-105 active:scale-95 shrink-0"
            >
              <svg className="w-4 h-4 text-[#002fbe]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full" />
            </button>

            <RightActions
              actions={groupedActions.right}
              onActionClick={handleActionClick}
              isLoading={isLoading}
            />
            {rightContent}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </div>
  );
}
