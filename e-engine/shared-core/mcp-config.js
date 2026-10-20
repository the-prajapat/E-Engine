export const mcpConfig = {
  mcpServers: {
    stitch: {
      serverUrl: process.env.NEXT_PUBLIC_STITCH_SERVER_URL,
      headers: {
        "X-Goog-Api-Key": process.env.NEXT_PUBLIC_STITCH_API_KEY
      }
    },
    testsprite: {
      name: "TestSprite Testing Engine",
      command: "npx",
      args: ["@testsprite/testsprite-mcp@latest"],
      env: {
        API_KEY: process.env.TESTSPRITE_API_KEY || process.env.TESTSTRIPS_API_KEY
      }
    }
  }
};
