import 'dotenv/config';
import { Template, defaultBuildLogger } from 'e2b';
import { template } from '../e2b/template.mjs';

// Main logic: build a lower-cost development template for rapid POC iteration.
async function main() {
  await Template.build(template, 'playwright-runner-dev', {
    cpuCount: 2,
    memoryMB: 2048,
    onBuildLogs: defaultBuildLogger(),
  });
  console.log('Development template built: playwright-runner-dev');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
