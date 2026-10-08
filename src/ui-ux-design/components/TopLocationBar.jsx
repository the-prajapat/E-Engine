/**
 * TopLocationBar.js
 * Phase 1 — Core UI Component
 *
 * Header bar showing delivery location with dropdown.
 * Matches QuickCart design: location pin + "Deliver to: Home – Street, City" + chevron.
 * Supports dark mode via data-theme CSS vars.
 */

import React, { useState } from 'react';

// ─── Dummy address data ────────────────────────────────────────────────────────
const ADDRESS_LIST = [
  { id: 1, label: 'Home',   address: '12, Nehru Nagar, Delhi – 110001',   icon: '🏠' },
  { id: 2, label: 'Office', address: '4th Floor, Cyber Hub, Gurugram',     icon: '🏢' },
  { id: 3, label: 'Mom\'s', address: '8, Shivaji Park, Mumbai – 400028',  icon: '❤️' },
  { id: 4, label: '+ Add new address', address: '',                         icon: '➕' },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

const LocationPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      fill="#1a56db"
    />
    <circle cx="12" cy="9" r="2.5" fill="#fff" />
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg
    width="16" height="16" viewBox="0 0 24 24" fill="none"
    style={{
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 220ms ease',
      flexShrink: 0,
    }}
  >
    <path d="M6 9l6 6 6-6" stroke="#1a56db" strokeWidth="2.2"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Main Component ────────────────────────────────────────────────────────────

/**
 * @param {Object} props
 * @param {Function} [props.onAddressChange] - Called with selected address object
 * @param {Object}  [props.style]            - Additional wrapper styles
 */
const TopLocationBar = ({ onAddressChange, style = {} }) => {
  const [selected, setSelected]   = useState(ADDRESS_LIST[0]);
  const [isOpen, setIsOpen]       = useState(false);

  const handleSelect = (addr) => {
    if (addr.id === 4) {
      // Future: navigate to address add screen
      console.log('[TopLocationBar] Navigate to Add Address');
      setIsOpen(false);
      return;
    }
    setSelected(addr);
    setIsOpen(false);
    onAddressChange && onAddressChange(addr);
  };

  return (
    <div style={{ position: 'relative', ...style }}>
      {/* ── Trigger ── */}
      <button
        id="location-bar-trigger"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(prev => !prev)}
        style={styles.trigger}
      >
        <LocationPin />

        <span style={styles.triggerText}>
          <span style={styles.label}>Deliver to:</span>
          {' '}
          <span style={styles.selected}>
            {selected.label}
            {selected.address && (
              <span style={styles.addressPreview}>
                {' – '}
                {selected.address.split(',')[0]}
              </span>
            )}
          </span>
        </span>

        <ChevronIcon open={isOpen} />
      </button>

      {/* ── Dropdown ── */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            style={styles.backdrop}
          />

          <div
            role="listbox"
            aria-label="Select delivery address"
            style={styles.dropdown}
          >
            <p style={styles.dropdownHeading}>Choose delivery address</p>

            {ADDRESS_LIST.map((addr) => (
              <button
                key={addr.id}
                role="option"
                aria-selected={selected.id === addr.id}
                onClick={() => handleSelect(addr)}
                style={{
                  ...styles.dropdownItem,
                  ...(selected.id === addr.id ? styles.dropdownItemActive : {}),
                }}
              >
                <span style={styles.addrIcon}>{addr.icon}</span>
                <span style={styles.addrDetails}>
                  <span style={styles.addrLabel}>{addr.label}</span>
                  {addr.address && (
                    <span style={styles.addrSub}>{addr.address}</span>
                  )}
                </span>
                {selected.id === addr.id && (
                  <span style={styles.checkMark}>✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// ─── Styles (inline — theme-agnostic, works light & dark via CSS vars) ─────────
const styles = {
  trigger: {
    display:        'flex',
    alignItems:     'center',
    gap:            '6px',
    background:     'transparent',
    border:         'none',
    cursor:         'pointer',
    padding:        '6px 4px',
    borderRadius:   '8px',
    transition:     'background 150ms ease',
    maxWidth:       '100%',
  },
  triggerText: {
    fontSize:   '14px',
    color:      'var(--color-text-primary, #0d1b3e)',
    whiteSpace: 'nowrap',
    overflow:   'hidden',
    textOverflow: 'ellipsis',
  },
  label: {
    fontWeight: 400,
    color:      'var(--color-text-secondary, #4a5568)',
  },
  selected: {
    fontWeight: 700,
    color:      'var(--color-text-primary, #0d1b3e)',
  },
  addressPreview: {
    fontWeight: 400,
    color:      'var(--color-text-secondary, #4a5568)',
  },
  backdrop: {
    position: 'fixed',
    inset:    0,
    zIndex:   998,
  },
  dropdown: {
    position:     'absolute',
    top:          'calc(100% + 8px)',
    left:         0,
    zIndex:       999,
    minWidth:     '280px',
    background:   'var(--color-card-bg, #fff)',
    border:       '1px solid var(--color-card-border, #e4eaf6)',
    borderRadius: '14px',
    boxShadow:    'var(--color-card-shadow, 0 8px 32px rgba(26,86,219,0.12))',
    padding:      '12px 8px',
    overflow:     'hidden',
  },
  dropdownHeading: {
    fontSize:      '11px',
    fontWeight:    600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color:         'var(--color-text-muted, #718096)',
    padding:       '0 10px 8px',
    margin:        0,
  },
  dropdownItem: {
    display:       'flex',
    alignItems:    'center',
    gap:           '10px',
    width:         '100%',
    padding:       '10px 12px',
    background:    'transparent',
    border:        'none',
    borderRadius:  '10px',
    cursor:        'pointer',
    textAlign:     'left',
    transition:    'background 150ms ease',
  },
  dropdownItemActive: {
    background: 'var(--color-primary-light, #e8f0fe)',
  },
  addrIcon: {
    fontSize:   '20px',
    flexShrink: 0,
  },
  addrDetails: {
    display:       'flex',
    flexDirection: 'column',
    flex:          1,
    minWidth:      0,
  },
  addrLabel: {
    fontSize:   '14px',
    fontWeight: 600,
    color:      'var(--color-text-primary, #0d1b3e)',
  },
  addrSub: {
    fontSize:     '12px',
    color:        'var(--color-text-muted, #718096)',
    whiteSpace:   'nowrap',
    overflow:     'hidden',
    textOverflow: 'ellipsis',
  },
  checkMark: {
    color:      '#1a56db',
    fontWeight: 700,
    fontSize:   '16px',
    flexShrink: 0,
  },
  dropdownHeading2: {},
};

export default TopLocationBar;
