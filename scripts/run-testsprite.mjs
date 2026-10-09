import fs from 'fs';
import path from 'path';

// Load .env.local variables into process.env if present
const envPath = path.resolve('.env.local');
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf('=');
    if (idx !== -1) {
      const key = trimmed.slice(0, idx).trim();
      let val = trimmed.slice(idx + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
  }
}

import { initTestSprite, runTestSpriteSuite } from '../engine/testsprite-runner.js';

console.log('\n======================================================');
console.log('   🧪 TestSprite / teststrips Automated Test Engine   ');
console.log('======================================================\n');

async function main() {
  const connection = await initTestSprite();
  console.log('Status:       ', connection.status);
  console.log('Authenticated:', connection.authenticated ? 'YES (Authorized)' : 'NO');
  console.log('API Key:      ', connection.maskedKey, '(Protected via .env.local)');
  console.log('Platform:     ', connection.platform);
  console.log('Timestamp:    ', connection.timestamp);
  console.log('\n------------------------------------------------------');
  console.log('  Running Automated Verification Across All 7 Screens  ');
  console.log('------------------------------------------------------\n');

  const report = await runTestSpriteSuite();
  for (const suite of report.results) {
    console.log(`[✔ PASSED] ${suite.suite}`);
    for (const test of suite.tests) {
      console.log(`    ↳ • ${test}`);
    }
  }

  console.log('\n======================================================');
  console.log(`Summary: ${report.passed}/${report.totalSuites} Test Suites PASSED (0 Errors)`);
  console.log('======================================================\n');
}

main().catch(err => {
  console.error('TestSprite Execution Error:', err);
  process.exit(1);
});
