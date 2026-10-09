import React from 'react';
import { stitchTheme } from '../theme.config.js';

/**
 * ProjectCard Component (Stitch AI UI)
 * STRICT RULE: Dumb presentation component. Accepts props only.
 *
 * @param {Object} props
 * @param {Object} props.project - Project entity
 * @param {string|number} props.project.id
 * @param {string} props.project.name
 * @param {string} props.project.status - 'In Progress' | 'Completed' | 'Pending'
 * @param {string} props.project.client
 * @param {number|string} [props.project.budget]
 * @param {Function} [props.onSelectProject]
 */
export default function ProjectCard({ project, onSelectProject }) {
  if (!project) return null;

  const getStatusColor = (status = '') => {
    switch (status.toLowerCase()) {
      case 'completed':
        return stitchTheme.colors.accent;
      case 'in progress':
      case 'active':
        return stitchTheme.colors.primary;
      case 'pending':
        return stitchTheme.colors.accentWarning;
      default:
        return stitchTheme.colors.textMuted;
    }
  };

  const statusColor = getStatusColor(project.status);

  return (
    <div
      style={{
        backgroundColor: stitchTheme.colors.bgCard,
        borderRadius: stitchTheme.radius.lg,
        border: `1px solid ${stitchTheme.colors.border}`,
        padding: '1.25rem',
        boxShadow: stitchTheme.shadows.card,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <span style={{ fontSize: '0.75rem', color: stitchTheme.colors.textMuted }}>
            Client: {project.client || 'Enterprise'}
          </span>
          <h4
            style={{
              margin: '0.2rem 0 0 0',
              fontSize: '1.05rem',
              fontWeight: 700,
              color: stitchTheme.colors.textMain,
            }}
          >
            {project.name}
          </h4>
        </div>

        <span
          style={{
            fontSize: '0.72rem',
            fontWeight: 600,
            padding: '0.25rem 0.6rem',
            borderRadius: stitchTheme.radius.full,
            color: statusColor,
            backgroundColor: `${statusColor}18`,
            border: `1px solid ${statusColor}40`,
          }}
        >
          ● {project.status || 'Active'}
        </span>
      </div>

      {project.description && (
        <p
          style={{
            margin: 0,
            fontSize: '0.85rem',
            color: stitchTheme.colors.textMuted,
            lineHeight: 1.4,
          }}
        >
          {project.description}
        </p>
      )}

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '0.5rem',
          paddingTop: '0.75rem',
          borderTop: `1px solid ${stitchTheme.colors.border}`,
        }}
      >
        <div>
          <span style={{ fontSize: '0.75rem', color: stitchTheme.colors.textMuted }}>Allocation: </span>
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: stitchTheme.colors.textMain }}>
            ₹{project.budget ? Number(project.budget).toLocaleString('en-IN') : 'N/A'}
          </span>
        </div>

        {onSelectProject && (
          <button
            onClick={() => onSelectProject(project)}
            type="button"
            style={{
              padding: '0.35rem 0.75rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: stitchTheme.colors.primary,
              backgroundColor: 'transparent',
              border: `1px solid ${stitchTheme.colors.primary}`,
              borderRadius: stitchTheme.radius.md,
              cursor: 'pointer',
            }}
          >
            View Details →
          </button>
        )}
      </div>
    </div>
  );
}
