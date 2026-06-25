import 'dotenv/config';
import { Template, defaultBuildLogger } from 'e2b';
import { template } from '../e2b/template.mjs';

// Main logic: build a higher-resource production template for large parallel runs.
async function main() {
  await Template.build(template, 'playwright-runner', {
    cpuCount: 4,
    memoryMB: 4096,
    onBuildLogs: defaultBuildLogger(),
  });
  console.log('Production template built: playwright-runner');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
