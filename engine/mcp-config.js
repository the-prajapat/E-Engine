export const mcpConfig = {
  mcpServers: {
    stitch: {
      serverUrl: process.env.NEXT_PUBLIC_STITCH_SERVER_URL,
      headers: {
        "X-Goog-Api-Key": process.env.NEXT_PUBLIC_STITCH_API_KEY
      }
    }
  }
};
