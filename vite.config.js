import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react({
        include: /\.(jsx|js)$/,
      }),
    ],
    define: {
      'process.env.NEXT_PUBLIC_STITCH_API_KEY': JSON.stringify(env.NEXT_PUBLIC_STITCH_API_KEY || ''),
      'process.env.NEXT_PUBLIC_STITCH_SERVER_URL': JSON.stringify(env.NEXT_PUBLIC_STITCH_SERVER_URL || 'https://stitch.googleapis.com/mcp'),
      'process.env.TESTSPRITE_API_KEY': JSON.stringify(env.TESTSPRITE_API_KEY || ''),
      'process.env.TESTSTRIPS_API_KEY': JSON.stringify(env.TESTSTRIPS_API_KEY || ''),
      'process.env': JSON.stringify({
        NEXT_PUBLIC_STITCH_API_KEY: env.NEXT_PUBLIC_STITCH_API_KEY || '',
        NEXT_PUBLIC_STITCH_SERVER_URL: env.NEXT_PUBLIC_STITCH_SERVER_URL || 'https://stitch.googleapis.com/mcp',
        TESTSPRITE_API_KEY: env.TESTSPRITE_API_KEY || '',
        TESTSTRIPS_API_KEY: env.TESTSTRIPS_API_KEY || '',
      }),
    },
    server: {
      host: '0.0.0.0',
      port: 5173,
      cors: true,
    },
  };
});
