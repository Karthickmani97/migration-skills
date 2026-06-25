import { spawn } from 'node:child_process';

// Main logic: run all 50 Playwright shards locally in parallel as a quick non-E2B benchmark.
const SHARDS = 50;

function runShard(index) {
  return new Promise((resolve) => {
    const child = spawn(
      'npx',
      ['playwright', 'test', `--shard=${index}/${SHARDS}`, '--config=playwright.config.mjs'],
      { stdio: 'inherit', shell: true }
    );

    child.on('close', (code) => {
      resolve({ index, code: code ?? 1 });
    });
  });
}

async function main() {
  // Launch all shards at once and collect exit codes for a final pass/fail summary.
  const promises = [];
  for (let i = 1; i <= SHARDS; i += 1) {
    promises.push(runShard(i));
  }

  const results = await Promise.all(promises);
  const failed = results.filter((r) => r.code !== 0);

  if (failed.length > 0) {
    console.error(`Failed shards: ${failed.map((f) => f.index).join(', ')}`);
    process.exit(1);
  }

  console.log('All local shards passed.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
