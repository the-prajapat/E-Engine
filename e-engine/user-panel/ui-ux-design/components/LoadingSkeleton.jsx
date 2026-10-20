import React from 'react';

/**
 * LoadingSkeleton Component (Dumb Presentation Component)
 * Mobile-first fluid skeleton loader with zero fixed-pixel bottlenecks.
 *
 * @param {Object} props
 * @param {number} [props.count=4]
 * @param {string} [props.message='Loading catalog...']
 */
export default function LoadingSkeleton({ count = 4, message = 'Loading catalog...' }) {
  return (
    <div className="w-full flex flex-col items-center justify-center py-6 px-2 select-none">
      <div className="w-8 h-8 border-3 border-slate-200 border-t-blue-700 rounded-full animate-spin mb-2" />
      <p className="text-xs font-semibold text-slate-500 mb-4">{message}</p>

      <div className="w-full grid grid-cols-2 gap-3">
        {Array.from({ length: count }).map((_, idx) => (
          <div
            key={idx}
            className="w-full h-44 bg-slate-200/70 rounded-2xl animate-pulse flex flex-col p-3 gap-2"
          >
            <div className="w-full h-24 bg-slate-300/80 rounded-xl" />
            <div className="w-3/4 h-3 bg-slate-300/80 rounded" />
            <div className="w-1/2 h-3 bg-slate-300/80 rounded mt-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
