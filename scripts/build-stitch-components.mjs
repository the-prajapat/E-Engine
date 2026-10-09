import fs from 'fs';
import path from 'path';

const rawDir = path.join('src', 'ui-ux-design', 'stitch-raw');
const outDir = path.join('src', 'ui-ux-design', 'components', 'stitch');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function convertHtmlToJsx(html, componentName, title) {
  // Extract body content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let inner = bodyMatch ? bodyMatch[1] : html;

  // Strip script tags
  inner = inner.replace(/<script[\s\S]*?<\/script>/gi, '');

  // Convert HTML comments <!-- ... --> to JSX comments {/* ... */}
  inner = inner.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

  // Convert HTML attributes to JSX
  inner = inner.replaceAll('class="', 'className="');
  inner = inner.replaceAll('for="', 'htmlFor="');
  inner = inner.replaceAll('tabindex="', 'tabIndex="');
  inner = inner.replaceAll('checked=""', 'defaultChecked');
  inner = inner.replaceAll('autocomplete="', 'autoComplete="');
  inner = inner.replaceAll('autocapitalize="', 'autoCapitalize="');
  inner = inner.replaceAll('autofocus="', 'autoFocus="');
  inner = inner.replaceAll('spellcheck="', 'spellCheck="');
  inner = inner.replaceAll('readonly="', 'readOnly="');
  inner = inner.replaceAll('novalidate="', 'noValidate="');
  inner = inner.replaceAll('colspan="', 'colSpan="');
  inner = inner.replaceAll('rowspan="', 'rowSpan="');
  inner = inner.replaceAll('clip-rule="', 'clipRule="');
  inner = inner.replaceAll('fill-rule="', 'fillRule="');
  inner = inner.replaceAll('stroke-width="', 'strokeWidth="');
  inner = inner.replaceAll('stroke-linecap="', 'strokeLinecap="');
  inner = inner.replaceAll('stroke-linejoin="', 'strokeLinejoin="');
  inner = inner.replaceAll('viewbox="', 'viewBox="');

  // Convert inline event attributes
  inner = inner.replace(/onsubmit="[^"]*"/gi, 'onSubmit={(e) => e.preventDefault()}');
  inner = inner.replace(/onclick="[^"]*"/gi, '');

  // Convert style strings to JSX objects
  inner = inner.replace(/style="([^"]*)"/gi, (match, p1) => {
    const rules = p1.split(';').map(r => r.trim()).filter(Boolean);
    const styleObj = {};
    for (const rule of rules) {
      const idx = rule.indexOf(':');
      if (idx === -1) continue;
      const rawKey = rule.slice(0, idx).trim();
      const rawVal = rule.slice(idx + 1).trim();
      const key = rawKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      styleObj[key] = rawVal;
    }
    return `style={${JSON.stringify(styleObj)}}`;
  });

  // Ensure self-closing void elements
  const voidTags = ['input', 'img', 'br', 'hr'];
  for (const tag of voidTags) {
    const re = new RegExp('<' + tag + '([^>]*?)(?<!/)>', 'gi');
    inner = inner.replace(re, '<' + tag + '$1 />');
  }

  return `import React from 'react';

/**
 * ${componentName}
 * Stitch AI Screen: "${title}"
 * STRICT RULE: Pure presentation component. Accepts callbacks and dynamic props.
 */
export default function ${componentName}({ onNavigate, onAction, data, ...props }) {
  return (
    <div className="stitch-screen-container w-full min-h-screen text-on-surface">
${inner}
    </div>
  );
}
`;
}

const map = [
  { file: 'QuickCommerceHome.html', comp: 'StitchQuickCommerceHome', title: 'Quick-Commerce Home Screen' },
  { file: 'SmartCartSplitCheckout.html', comp: 'StitchSmartCartSplitCheckout', title: 'Smart Cart & Split Checkout' },
  { file: 'LiveOrderTracking.html', comp: 'StitchLiveOrderTracking', title: 'Live Order Tracking' },
  { file: 'AccountTypeOnboarding.html', comp: 'StitchAccountTypeOnboarding', title: 'Account Type Onboarding' },
  { file: 'B2BWholesaleMarketplace.html', comp: 'StitchB2BWholesaleMarketplace', title: 'B2B Wholesale Marketplace Dashboard' },
  { file: 'B2BLiveNegotiationDealBoard.html', comp: 'StitchB2BLiveNegotiationDealBoard', title: 'B2B Live Negotiation & Deal Board' },
  { file: 'B2BBusinessProfileDashboard.html', comp: 'StitchB2BBusinessProfileDashboard', title: 'B2B Business Profile Dashboard' },
];

for (const m of map) {
  const rawPath = path.join(rawDir, m.file);
  if (fs.existsSync(rawPath)) {
    const rawHtml = fs.readFileSync(rawPath, 'utf8');
    const jsx = convertHtmlToJsx(rawHtml, m.comp, m.title);
    fs.writeFileSync(path.join(outDir, `${m.comp}.jsx`), jsx, 'utf8');
    console.log(`Regenerated: ${m.comp}.jsx (${jsx.length} bytes)`);
  }
}
