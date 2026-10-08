import QRCode from 'qrcode';
import fs from 'fs';

const url = 'http://192.168.29.98:5173';

// 1. Output ASCII QR in terminal
QRCode.toString(url, { type: 'terminal', small: true }, (err, str) => {
  if (err) throw err;
  console.log('\n======================================================');
  console.log('📱 SCAN THIS QR CODE WITH YOUR PHONE CAMERA OR SCANNER:');
  console.log(`🌐 Mobile URL: ${url}`);
  console.log('======================================================\n');
  console.log(str);
  console.log('\n======================================================');
  console.log('💡 Note: Ensure your mobile is on the same WiFi network (or hotspot).');
  console.log('======================================================\n');
});

// 2. Output PNG image for direct viewing
QRCode.toFile('mobile-preview-qr.png', url, {
  width: 400,
  margin: 2,
  color: {
    dark: '#0a235c',
    light: '#ffffff',
  },
}, (err) => {
  if (err) console.error(err);
  else console.log('Saved QR code image to mobile-preview-qr.png');
});
