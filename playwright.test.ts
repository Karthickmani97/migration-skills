import { Sandbox } from '@e2b/desktop'
import { chromium } from 'playwright-core'
import * as fs from 'fs'
import * as dotenv from 'dotenv'

dotenv.config()

// 1. Create E2B desktop sandbox
const sandbox = await Sandbox.create({
  resolution: [1024, 720],
  dpi: 96,
  timeoutMs: 300_000,
})

await sandbox.stream.start()
console.log('View desktop at:', sandbox.stream.getUrl())

// 2. Launch Chromium inside the sandbox
await sandbox.commands.run(
  'DISPLAY=:99 chromium-browser --remote-debugging-port=9222 --no-sandbox &',
  { background: true }
)
await new Promise(r => setTimeout(r, 3000)) // wait for browser to start

// 3. Get the CDP URL via sandbox port
const cdpUrl = `https://${sandbox.getHost(9222)}`

// 4. Connect playwright-core to the remote browser
const browser = await chromium.connectOverCDP(cdpUrl)
const page = await browser.newPage()

// 5. Run your Playwright test
await page.goto('https://example.com')
console.log('Title:', await page.title())
const screenshot = await page.screenshot()
fs.writeFileSync('playwright_result.png', screenshot)
console.log('Screenshot saved to playwright_result.png')

await browser.close()
await sandbox.kill()