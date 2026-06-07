const issueLabels = {
  streetlight: "Broken streetlight",
  pothole: "Pothole or road damage",
  trash: "Trash or illegal dumping",
  sidewalk: "Blocked or damaged sidewalk",
  crossing: "Unsafe crossing",
  accessibility: "Accessibility barrier",
  other: "Public-space issue"
};

const impactText = {
  safety: "This creates a safety risk for people nearby.",
  access: "This blocks or limits access for pedestrians, wheelchair users, strollers, or deliveries.",
  cleanliness: "This creates a cleanliness concern and may attract more dumping or pests.",
  mobility: "This slows safe movement through the area.",
  quality: "This reduces quality of life for residents and visitors."
};

const urgencyText = {
  standard: "Please inspect and schedule repair or cleanup when possible.",
  soon: "Please review soon because the issue is affecting daily use of the area.",
  urgent: "Please prioritize this as an urgent safety concern."
};

const evidenceLabels = {
  photo: "photo attached",
  time: "time observed noted",
  repeat: "reported as a repeated issue",
  nearby: "nearby landmark included"
};

function cleanText(value, fallback) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  return text || fallback;
}

export function buildReport(input = {}) {
  const issueType = issueLabels[input.issueType] || issueLabels.other;
  const location = cleanText(input.location, "[add exact location]");
  const details = cleanText(input.details, "[describe what you observed]");
  const impact = impactText[input.impact] || impactText.quality;
  const urgency = urgencyText[input.urgency] || urgencyText.standard;
  const evidence = Array.isArray(input.evidence) ? input.evidence : [];
  const evidenceList = evidence.map((item) => evidenceLabels[item]).filter(Boolean);
  const evidenceLine = evidenceList.length > 0 ? evidenceList.join(", ") : "no attachments listed yet";

  return [
    `Subject: ${issueType} at ${location}`,
    "",
    `Hello, I would like to report a ${issueType.toLowerCase()} at ${location}.`,
    "",
    `Details: ${details}.`,
    `Impact: ${impact}`,
    `Requested action: ${urgency}`,
    `Evidence: ${evidenceLine}.`,
    "",
    "Thank you."
  ].join("\n");
}

export function getIssueLabel(issueType) {
  return issueLabels[issueType] || issueLabels.other;
}
