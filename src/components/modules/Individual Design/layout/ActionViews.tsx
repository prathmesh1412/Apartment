"use client";

import React from 'react';
import EditPropertyView from '@/components/modules/Individual Design/action-views/edit/EditPropertyView';
import PrintCardView from '@/components/modules/Individual Design/action-views/actions/PrintCardView';
import ViewDemandView from '@/components/modules/Individual Design/action-views/notice-and-history/ViewDemandView';
import ViewCollectionView from '@/components/modules/Individual Design/action-views/notice-and-history/ViewCollectionView';
import GenerateNoticeView from '@/components/modules/Individual Design/action-views/notice-and-history/GenerateNoticeView';
import PropertyHistoryView from '@/components/modules/Individual Design/action-views/notice-and-history/PropertyHistoryView';
import DocumentsView from '@/components/modules/Individual Design/action-views/gis-and-docs/DocumentsView';
import CertificateDocumentView from '@/components/modules/Individual Design/action-views/gis-and-docs/CertificateDocumentView';
import ApplyOcView from '@/components/modules/Individual Design/action-views/occupancy/ApplyOcView';
import MoreActionsView from '@/components/modules/Individual Design/action-views/actions/MoreActionsView';

interface ActionViewsProps {
  activeAction: string | null;
  setActiveAction: (action: string | null) => void;
}

export default function ActionViews({ activeAction, setActiveAction }: ActionViewsProps) {
  const onClose = () => setActiveAction(null);

  switch (activeAction) {
    case 'edit-property':
      return <EditPropertyView onClose={onClose} />;
    case 'print-card':
      return <PrintCardView onClose={onClose} />;
    case 'view-demand':
      return <ViewDemandView onClose={onClose} />;
    case 'view-collection':
      return <ViewCollectionView onClose={onClose} />;
    case 'generate-notice':
      return <GenerateNoticeView onClose={onClose} />;
    case 'property-history':
      return <PropertyHistoryView onClose={onClose} />;
    case 'documents':
    case 'apply-retro':
      return <CertificateDocumentView onClose={onClose} />;
    case 'apply-oc':
      return <ApplyOcView onClose={onClose} />;
    case 'more-actions':
      return <MoreActionsView onClose={onClose} />;
    default:
      return null;
  }
}
