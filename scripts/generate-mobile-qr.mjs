import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';

const IP_ADDRESS = '192.168.29.98';
const PORT = '5173';
const LIVE_URL = `http://${IP_ADDRESS}:${PORT}/`;

const rootPngPath = path.resolve('mobile-preview-qr.png');
const artifactDir = 'C:\\Users\\LENOVO\\.gemini\\antigravity-ide\\brain\\4736cd9c-49ba-47e2-8b36-de8a63dff754';
const artifactPngPath = path.join(artifactDir, 'mobile-preview-qr.png');

async function generate() {
  // 1. Generate high-resolution PNG
  await QRCode.toFile(rootPngPath, LIVE_URL, {
    width: 480,
    margin: 2,
    color: {
      dark: '#0f172a',
      light: '#ffffff',
    },
  });
  console.log(`[✔] Saved PNG QR code to: ${rootPngPath}`);

  // 2. Save into artifacts directory
  if (fs.existsSync(artifactDir)) {
    fs.copyFileSync(rootPngPath, artifactPngPath);
    console.log(`[✔] Saved Artifact QR code to: ${artifactPngPath}`);
  }

  // 3. Generate Terminal ASCII QR code
  const terminalQr = await QRCode.toString(LIVE_URL, { type: 'terminal', small: true });
  console.log('\n======================================================');
  console.log('  📱 SCAN THIS QR CODE WITH YOUR MOBILE CAMERA / SCANNER');
  console.log(`  🌐 URL: ${LIVE_URL}`);
  console.log('======================================================\n');
  console.log(terminalQr);
  console.log('======================================================\n');
}

generate().catch(console.error);
