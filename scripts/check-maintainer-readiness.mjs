import { access, readFile } from "node:fs/promises";

const requiredFiles = [
  "README.md",
  "CONTRIBUTING.md",
  "SECURITY.md",
  "ACCESSIBILITY.md",
  "LICENSE",
  "docs/README.md",
  "docs/PROJECT_STATE.md",
  "docs/OSS_MAINTENANCE.md",
  "docs/TESTING.md",
  "docs/RUNBOOK.md",
  ".github/pull_request_template.md",
  ".github/ISSUE_TEMPLATE/bug_report.md",
  ".github/ISSUE_TEMPLATE/feature_request.md",
  ".github/workflows/ci.yml",
  ".github/workflows/pages.yml"
];

const requiredPackageScripts = ["test", "check"];
const destructiveShellPatterns = [
  /\brm\s+-rf\b/,
  /\bgit\s+reset\s+--hard\b/,
  /\bgit\s+clean\b/,
  /\bfind\b.+\s-delete\b/,
  /\brsync\b.+--delete\b/
];

const failures = [];

async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

for (const file of requiredFiles) {
  if (!(await fileExists(file))) {
    failures.push(`Missing required maintainer file: ${file}`);
  }
}

const packageJson = JSON.parse(await readFile("package.json", "utf8"));
const scripts = packageJson.scripts || {};

for (const scriptName of requiredPackageScripts) {
  if (!scripts[scriptName]) {
    failures.push(`Missing package script: ${scriptName}`);
  }
}

for (const [scriptName, command] of Object.entries(scripts)) {
  for (const pattern of destructiveShellPatterns) {
    if (pattern.test(command)) {
      failures.push(`Package script "${scriptName}" contains a destructive command: ${command}`);
    }
  }
}

if (failures.length > 0) {
  console.error("FixNote maintainer readiness check failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("FixNote maintainer readiness check passed.");
console.log(`Checked ${requiredFiles.length} files and ${requiredPackageScripts.length} package scripts.`);
