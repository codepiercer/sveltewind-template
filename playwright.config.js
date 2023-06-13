const config = {
  webServer: {
    command: `npm run preview`,
    port: 4173,
    reuseExistingServer: !process.env.CI,
    stderr: `ignore`
  },
  use: {
    headless: true,
    baseUrl: `http://localhost:4173`
  },
  testDir: `tests`,
  testMatch: /(.+)\.[jt]s/,
  reporter: [[`list`], [`junit`, { outputFile: `results.xml` }]]
}

export default config
