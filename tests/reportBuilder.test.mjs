import assert from "node:assert/strict";
import test from "node:test";
import { buildReport, getIssueLabel } from "../src/reportBuilder.js";

test("buildReport creates a structured civic report", () => {
  const report = buildReport({
    issueType: "sidewalk",
    location: "Main St and 4th Ave",
    details: "A construction sign blocks the curb ramp",
    impact: "access",
    urgency: "soon",
    evidence: ["photo", "nearby"]
  });

  assert.match(report, /Subject: Blocked or damaged sidewalk at Main St and 4th Ave/);
  assert.match(report, /Details: A construction sign blocks the curb ramp\./);
  assert.match(report, /blocks or limits access/);
  assert.match(report, /photo attached, nearby landmark included/);
});

test("buildReport falls back when key fields are missing", () => {
  const report = buildReport({});

  assert.match(report, /\[add exact location\]/);
  assert.match(report, /\[describe what you observed\]/);
  assert.match(report, /no attachments listed yet/);
});

test("getIssueLabel returns a stable fallback label", () => {
  assert.equal(getIssueLabel("streetlight"), "Broken streetlight");
  assert.equal(getIssueLabel("unknown"), "Public-space issue");
});

test("buildReport normalizes whitespace in user-provided fields", () => {
  const report = buildReport({
    issueType: "trash",
    location: "  Block  12\nnear the north gate ",
    details: " bags   left\nbeside the ramp ",
    impact: "cleanliness",
    urgency: "standard"
  });

  assert.match(report, /Trash or illegal dumping at Block 12 near the north gate/);
  assert.match(report, /Details: bags left beside the ramp\./);
});

test("buildReport ignores unknown evidence values", () => {
  const report = buildReport({
    issueType: "accessibility",
    location: "Library entrance",
    details: "The automatic door is not opening",
    impact: "access",
    urgency: "urgent",
    evidence: ["photo", "unknown-evidence"]
  });

  assert.match(report, /Accessibility barrier at Library entrance/);
  assert.match(report, /urgent safety concern/);
  assert.match(report, /Evidence: photo attached\./);
});
