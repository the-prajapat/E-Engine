import React from 'react';

/**
 * ProjectCard Component (Dumb Presentation Component)
 * Normalized mobile card for B2B Projects with min 44px tap targets.
 *
 * @param {Object} props
 * @param {Object} props.project
 * @param {Function} [props.onSelectProject]
 */
export default function ProjectCard({ project, onSelectProject }) {
  if (!project) return null;

  const isCompleted = project.status?.toLowerCase() === 'completed';
  const isActive = project.status?.toLowerCase() === 'active' || project.status?.toLowerCase() === 'in progress';

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm flex flex-col gap-3 transition-all hover:shadow-md">
      <div className="flex justify-between items-start gap-2">
        <div className="min-w-0 flex-1">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
            Client: {project.client || 'Enterprise'}
          </span>
          <h4 className="text-sm font-bold text-slate-900 truncate mt-0.5">
            {project.name}
          </h4>
        </div>

        <span
          className={`shrink-0 text-[11px] font-bold px-2 py-0.5 rounded-full border ${
            isCompleted
              ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
              : isActive
              ? 'text-blue-700 bg-blue-50 border-blue-200'
              : 'text-amber-700 bg-amber-50 border-amber-200'
          }`}
        >
          ● {project.status || 'Active'}
        </span>
      </div>

      {project.description && (
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      )}

      <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <div>
          <span className="text-[10px] font-medium text-slate-400 block">Allocation</span>
          <span className="text-xs font-bold text-slate-900">
            ₹{project.budget ? Number(project.budget).toLocaleString('en-IN') : 'N/A'}
          </span>
        </div>

        {onSelectProject && (
          <button
            onClick={() => onSelectProject(project)}
            type="button"
            className="min-h-[44px] px-3.5 flex items-center justify-center text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 active:bg-blue-200 rounded-xl transition-all active:scale-95 border border-blue-100"
          >
            View Details →
          </button>
        )}
      </div>
    </div>
  );
}
