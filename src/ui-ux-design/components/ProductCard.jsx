import React from 'react';
import { stitchTheme } from '../theme.config.js';

/**
 * ProductCard Component (Stitch AI UI)
 * STRICT RULE: Dumb presentation component. Accepts props only.
 *
 * @param {Object} props
 * @param {Object} props.product - Product data object
 * @param {string|number} props.product.id
 * @param {string} props.product.title
 * @param {number} props.product.price
 * @param {string} [props.product.category]
 * @param {string} [props.product.image]
 * @param {string} [props.product.moq] - Minimum Order Quantity for Wholesale
 * @param {Function} [props.onAddToCart]
 */
export default function ProductCard({ product, onAddToCart }) {
  if (!product) return null;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: stitchTheme.colors.bgCard,
        borderRadius: stitchTheme.radius.lg,
        border: `1px solid ${stitchTheme.colors.border}`,
        padding: '1rem',
        boxShadow: stitchTheme.shadows.card,
        transition: stitchTheme.transitions.normal,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Product Image / Visual Badge */}
      <div
        style={{
          width: '100%',
          height: '140px',
          borderRadius: stitchTheme.radius.md,
          backgroundColor: stitchTheme.colors.bgLight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.5rem',
          marginBottom: '0.85rem',
          overflow: 'hidden',
        }}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <span>📦</span>
        )}
      </div>

      {/* Category Tag */}
      {product.category && (
        <span
          style={{
            alignSelf: 'flex-start',
            fontSize: '0.7rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: stitchTheme.colors.primary,
            backgroundColor: stitchTheme.colors.primaryLight,
            padding: '0.2rem 0.5rem',
            borderRadius: stitchTheme.radius.sm,
            marginBottom: '0.4rem',
          }}
        >
          {product.category}
        </span>
      )}

      {/* Product Title */}
      <h3
        style={{
          margin: '0 0 0.35rem 0',
          fontSize: '0.95rem',
          fontWeight: stitchTheme.typography.semiBoldWeight,
          color: stitchTheme.colors.textMain,
          lineHeight: 1.35,
        }}
      >
        {product.title}
      </h3>

      {/* MOQ / B2B spec if present */}
      {product.moq && (
        <p
          style={{
            margin: '0 0 0.5rem 0',
            fontSize: '0.75rem',
            color: stitchTheme.colors.accentWarning,
            fontWeight: 500,
          }}
        >
          MOQ: {product.moq} Units
        </p>
      )}

      {/* Price & Action */}
      <div
        style={{
          marginTop: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '0.75rem',
          borderTop: `1px solid ${stitchTheme.colors.border}`,
        }}
      >
        <div>
          <span style={{ fontSize: '0.75rem', color: stitchTheme.colors.textMuted }}>Price: </span>
          <span
            style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              color: stitchTheme.colors.primary,
            }}
          >
            ₹{Number(product.price).toLocaleString('en-IN')}
          </span>
        </div>

        {onAddToCart && (
          <button
            onClick={() => onAddToCart(product)}
            type="button"
            style={{
              backgroundColor: stitchTheme.colors.primary,
              color: '#ffffff',
              border: 'none',
              padding: '0.45rem 0.85rem',
              borderRadius: stitchTheme.radius.md,
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: stitchTheme.transitions.fast,
            }}
          >
            + Add
          </button>
        )}
      </div>
    </div>
  );
}
