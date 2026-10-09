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

  // Currency Conversion: Dollars ($) to Indian Rupees (₹)
  const priceMap = [
    ['$1,500', '₹1,20,000'],
    ['$2,200', '₹1,76,000'],
    ['$850', '₹68,000'],
    ['$41.20', '₹3,296'],
    ['$29.00', '₹2,320'],
    ['$18.50', '₹1,480'],
    ['$34.38', '₹1,720'],
    ['$29.88', '₹1,494'],
    ['$28.40', '₹1,420'],
    ['$25.00', '₹499'],
    ['$25', '₹499'],
    ['$23.21', '₹1,160'],
    ['$17.50', '₹899'],
    ['$14.99', '₹749'],
    ['$11.99', '₹599'],
    ['$7.68', '₹385'],
    ['$6.49', '₹325'],
    ['$5.73', '₹285'],
    ['$4.89', '₹210'],
    ['$4.50', '₹90'],
    ['$4.49', '₹225'],
    ['$4.28', '₹75'],
    ['$4.20', '₹180'],
    ['$4.19', '₹175'],
    ['$3.99', '₹199'],
    ['$3.49', '₹149'],
    ['$3.00', '₹50'],
    ['$2.99', '₹149'],
    ['$2.49', '₹120'],
    ['$2.30', '₹115'],
    ['$2.00', '₹40'],
    ['$1.99', '₹80'],
    ['$1.89', '₹95'],
    ['$0.99', '₹49'],
    ['$3', '₹100'],
    ['$2', '₹50'],
    ['$1', '₹20'],
  ];

  for (const [usd, inr] of priceMap) {
    inner = inner.replaceAll(usd, inr);
  }

  // Any remaining generic $ followed by numbers converted to ₹
  inner = inner.replace(/\$(\d[\d,.]*)/g, '₹$1');

  // Indian Localization adjustments
  inner = inner.replaceAll('42 Elm Street, Brooklyn, NY', 'Civil Lines, Metro Sector 14, Jaipur');
  inner = inner.replaceAll('Brooklyn, NY', 'Jaipur, Rajasthan');

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
    console.log(`Regenerated in Rupees (₹): ${m.comp}.jsx (${jsx.length} bytes)`);
  }
}
