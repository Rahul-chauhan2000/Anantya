import React from 'react';

export const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-brand-green/5 rounded-sm ${className}`} />
);

export const ProductCardSkeleton = () => (
  <div className="card-premium h-full flex flex-col">
    <div className="aspect-[4/5] bg-brand-green/5 animate-pulse" />
    <div className="p-5 flex-grow space-y-4">
      <div className="flex justify-between items-center">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-3 w-8" />
      </div>
      <Skeleton className="h-6 w-3/4" />
      <div className="pt-4 border-t border-brand-beige flex justify-between items-center">
        <Skeleton className="h-6 w-12" />
        <Skeleton className="h-4 w-16" />
      </div>
    </div>
  </div>
);

export const ProductDetailSkeleton = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <Skeleton className="aspect-[4/5] rounded-sm" />
      <div className="space-y-8">
        <div className="flex justify-between">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-10 w-24" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="flex gap-4 pt-10">
          <Skeleton className="h-14 flex-1" />
          <Skeleton className="h-14 w-14" />
        </div>
      </div>
    </div>
  </div>
);
