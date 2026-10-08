/**
 * VoiceSearchModal.js
 * Phase 1 — Experimental Feature (voice-search/)
 *
 * Glassmorphism overlay with:
 *   • Glowing pulsing microphone icon
 *   • Animated sound waveform bars (active listening state)
 *   • Partial transcript display
 *   • Dismiss / Stop listening controls
 */

import React, { useState, useEffect, useCallback } from 'react';

// ─── Inject keyframes once ──────────────────────────────────────────────────────
const KF_ID = 'vsm-keyframes';
if (typeof document !== 'undefined' && !document.getElementById(KF_ID)) {
  const s = document.createElement('style');
  s.id = KF_ID;
  s.textContent = `
    @keyframes vsmFadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes vsmSlideUp {
      from { opacity: 0; transform: translateY(40px) scale(0.96); }
      to   { opacity: 1; transform: translateY(0)   scale(1); }
    }
    @keyframes vsmGlow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(26,86,219,0); }
      50%      { box-shadow: 0 0 0 28px rgba(26,86,219,0.18), 0 0 60px rgba(26,86,219,0.25); }
    }
    @keyframes vsmMicPulse {
      0%, 100% { transform: scale(1); }
      50%      { transform: scale(1.08); }
    }
    @keyframes vsmBar1 { 0%,100%{height:8px}  25%{height:28px} 75%{height:14px} }
    @keyframes vsmBar2 { 0%,100%{height:20px} 30%{height:44px} 60%{height:10px} }
    @keyframes vsmBar3 { 0%,100%{height:14px} 20%{height:36px} 70%{height:8px}  }
    @keyframes vsmBar4 { 0%,100%{height:28px} 40%{height:12px} 80%{height:40px} }
    @keyframes vsmBar5 { 0%,100%{height:10px} 35%{height:32px} 65%{height:18px} }
    @keyframes vsmBar6 { 0%,100%{height:22px} 45%{height:8px}  85%{height:36px} }
    @keyframes vsmBar7 { 0%,100%{height:16px} 50%{height:40px} 90%{height:12px} }
    @keyframes vsmDot  { 0%,100%{opacity:1}   50%{opacity:0.3} }
  `;
  document.head.appendChild(s);
}

// ─── Waveform Bar ───────────────────────────────────────────────────────────────
const WaveBar = ({ index, isActive }) => (
  <div
    style={{
      width:           '5px',
      borderRadius:    '3px',
      background:      isActive
        ? `hsl(${214 + index * 6}, 80%, 58%)`
        : 'rgba(26,86,219,0.25)',
      animation:       isActive ? `vsmBar${index + 1} ${0.6 + index * 0.07}s ease-in-out infinite` : 'none',
      height:          isActive ? undefined : '8px',
      transition:      'background 300ms ease',
      alignSelf:       'center',
    }}
  />
);

// ─── Microphone SVG ─────────────────────────────────────────────────────────────
const MicIcon = ({ size = 40, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="8" y="2" width="8" height="12" rx="4" fill={color} />
    <path
      d="M5 11a7 7 0 0014 0"
      stroke={color} strokeWidth="2" strokeLinecap="round"
      fill="none"
    />
    <line x1="12" y1="18" x2="12" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="8"  y1="22" x2="16" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// ─── Mock transcript cycle (simulates STT) ──────────────────────────────────────
const MOCK_TRANSCRIPTS = [
  'Listening...',
  'Fresh apples...',
  'Fresh apples 1 kg...',
  'Fresh apples 1 kg under ₹120...',
];

// ─── Main Component ─────────────────────────────────────────────────────────────

/**
 * @param {Object}   props
 * @param {boolean}  props.isOpen          - Controls visibility
 * @param {Function} props.onClose         - Called when user dismisses
 * @param {Function} [props.onResult]      - Called with final transcript string
 */
const VoiceSearchModal = ({ isOpen, onClose, onResult }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript,  setTranscript]  = useState('');
  const [transcriptIdx, setTranscriptIdx] = useState(0);

  // Auto-start listening when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsListening(true);
      setTranscriptIdx(0);
      setTranscript(MOCK_TRANSCRIPTS[0]);
    } else {
      setIsListening(false);
      setTranscript('');
    }
  }, [isOpen]);

  // Cycle mock transcript
  useEffect(() => {
    if (!isListening) return;
    if (transcriptIdx >= MOCK_TRANSCRIPTS.length - 1) return;
    const t = setTimeout(() => {
      const next = transcriptIdx + 1;
      setTranscriptIdx(next);
      setTranscript(MOCK_TRANSCRIPTS[next]);
    }, 1200);
    return () => clearTimeout(t);
  }, [isListening, transcriptIdx]);

  const handleStop = useCallback(() => {
    setIsListening(false);
    if (transcript && transcript !== 'Listening...') {
      onResult && onResult(transcript);
    }
  }, [transcript, onResult]);

  const handleClose = useCallback(() => {
    setIsListening(false);
    setTranscript('');
    onClose && onClose();
  }, [onClose]);

  if (!isOpen) return null;

  return (
    // ── Backdrop ──
    <div
      id="voice-search-backdrop"
      onClick={handleClose}
      style={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label="AI Voice Search"
    >
      {/* ── Card ── */}
      <div
        onClick={e => e.stopPropagation()}
        style={styles.card}
      >
        {/* Close button */}
        <button
          id="vsm-close"
          onClick={handleClose}
          aria-label="Close voice search"
          style={styles.closeBtn}
        >
          ✕
        </button>

        {/* Title */}
        <p style={styles.title}>AI Voice Search</p>
        <p style={styles.subtitle}>
          {isListening ? 'Say something...' : 'Tap to start'}
        </p>

        {/* ── Mic button with glow ── */}
        <button
          id="vsm-mic-btn"
          aria-label={isListening ? 'Stop listening' : 'Start voice search'}
          onClick={() => isListening ? handleStop() : setIsListening(true)}
          style={{
            ...styles.micBtn,
            animation: isListening
              ? 'vsmGlow 2s ease-in-out infinite, vsmMicPulse 1.8s ease-in-out infinite'
              : 'none',
          }}
        >
          <MicIcon size={38} color="#fff" />
        </button>

        {/* ── Waveform ── */}
        <div style={styles.waveform} aria-hidden="true">
          {[...Array(7)].map((_, i) => (
            <WaveBar key={i} index={i} isActive={isListening} />
          ))}
        </div>

        {/* ── Transcript ── */}
        <div style={styles.transcriptBox} aria-live="polite">
          {transcript
            ? <span style={styles.transcriptText}>{transcript}</span>
            : <span style={styles.transcriptPlaceholder}>Your speech appears here</span>
          }
          {isListening && (
            <span style={styles.listeningDot} aria-hidden="true">●</span>
          )}
        </div>

        {/* ── Actions ── */}
        <div style={styles.actions}>
          {isListening ? (
            <button
              id="vsm-stop"
              onClick={handleStop}
              style={styles.stopBtn}
            >
              Stop & Search
            </button>
          ) : (
            <button
              id="vsm-start"
              onClick={() => {
                setIsListening(true);
                setTranscriptIdx(0);
                setTranscript(MOCK_TRANSCRIPTS[0]);
              }}
              style={styles.startBtn}
            >
              🎤 Tap to Speak
            </button>
          )}
        </div>

        {/* Tip */}
        <p style={styles.tip}>
          Try: <em>"Fresh milk 1L"</em> or <em>"Maggi noodles"</em>
        </p>
      </div>
    </div>
  );
};

// ─── Styles ──────────────────────────────────────────────────────────────────────
const styles = {
  backdrop: {
    position:        'fixed',
    inset:           0,
    zIndex:          1000,
    background:      'rgba(7, 13, 26, 0.65)',
    backdropFilter:  'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    display:         'flex',
    alignItems:      'flex-end',
    justifyContent:  'center',
    animation:       'vsmFadeIn 200ms ease forwards',
    padding:         '0 0 0 0',
  },
  card: {
    width:           '100%',
    maxWidth:        '480px',
    background:      'rgba(255,255,255,0.12)',
    backdropFilter:  'blur(28px)',
    WebkitBackdropFilter: 'blur(28px)',
    border:          '1px solid rgba(255,255,255,0.22)',
    borderRadius:    '28px 28px 0 0',
    padding:         '32px 28px 40px',
    display:         'flex',
    flexDirection:   'column',
    alignItems:      'center',
    gap:             '20px',
    position:        'relative',
    animation:       'vsmSlideUp 320ms cubic-bezier(0.34,1.56,0.64,1) forwards',
    boxShadow:       '0 -8px 40px rgba(26,86,219,0.2)',
  },
  closeBtn: {
    position:   'absolute',
    top:        '16px',
    right:      '20px',
    background: 'rgba(255,255,255,0.15)',
    border:     'none',
    color:      '#fff',
    fontSize:   '18px',
    width:      '36px',
    height:     '36px',
    borderRadius:'50%',
    cursor:     'pointer',
    display:    'flex',
    alignItems: 'center',
    justifyContent:'center',
    transition: 'background 150ms ease',
  },
  title: {
    margin:     0,
    fontSize:   '18px',
    fontWeight: 700,
    color:      '#ffffff',
    letterSpacing: '0.01em',
  },
  subtitle: {
    margin:    0,
    fontSize:  '13px',
    color:     'rgba(255,255,255,0.65)',
    marginTop: '-12px',
  },
  micBtn: {
    width:          '92px',
    height:         '92px',
    borderRadius:   '50%',
    background:     'linear-gradient(135deg, #1a56db 0%, #3b82f6 100%)',
    border:         '3px solid rgba(255,255,255,0.3)',
    cursor:         'pointer',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    transition:     'transform 150ms ease',
    flexShrink:     0,
  },
  waveform: {
    display:        'flex',
    alignItems:     'center',
    gap:            '6px',
    height:         '52px',
  },
  transcriptBox: {
    background:   'rgba(255,255,255,0.1)',
    border:       '1px solid rgba(255,255,255,0.18)',
    borderRadius: '14px',
    padding:      '14px 20px',
    width:        '100%',
    minHeight:    '54px',
    display:      'flex',
    alignItems:   'center',
    gap:          '8px',
  },
  transcriptText: {
    color:      '#fff',
    fontSize:   '16px',
    fontWeight: 500,
    flex:       1,
  },
  transcriptPlaceholder: {
    color:    'rgba(255,255,255,0.4)',
    fontSize: '14px',
    flex:     1,
  },
  listeningDot: {
    color:     '#3b82f6',
    fontSize:  '10px',
    animation: 'vsmDot 1s ease-in-out infinite',
    flexShrink:0,
  },
  actions: {
    width: '100%',
  },
  stopBtn: {
    width:        '100%',
    padding:      '14px',
    background:   'linear-gradient(135deg, #1a56db 0%, #3b82f6 100%)',
    border:       'none',
    borderRadius: '14px',
    color:        '#fff',
    fontSize:     '16px',
    fontWeight:   700,
    cursor:       'pointer',
    transition:   'opacity 150ms ease',
  },
  startBtn: {
    width:        '100%',
    padding:      '14px',
    background:   'rgba(255,255,255,0.15)',
    border:       '1.5px solid rgba(255,255,255,0.3)',
    borderRadius: '14px',
    color:        '#fff',
    fontSize:     '16px',
    fontWeight:   600,
    cursor:       'pointer',
    transition:   'background 150ms ease',
  },
  tip: {
    margin:   0,
    fontSize: '12px',
    color:    'rgba(255,255,255,0.45)',
    textAlign:'center',
  },
};

export default VoiceSearchModal;
