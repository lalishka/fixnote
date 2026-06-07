import { buildReport } from "./reportBuilder.js";

const form = document.querySelector("#report-form");
const output = document.querySelector("#report-output");
const copyButton = document.querySelector("#copy-button");
const printButton = document.querySelector("#print-button");
const copyStatus = document.querySelector("#copy-status");

function readForm() {
  const data = new FormData(form);
  return {
    issueType: data.get("issueType"),
    location: data.get("location"),
    details: data.get("details"),
    impact: data.get("impact"),
    urgency: data.get("urgency"),
    evidence: data.getAll("evidence")
  };
}

function renderReport() {
  output.textContent = buildReport(readForm());
}

async function copyReport() {
  renderReport();
  const text = output.textContent;

  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "Copied.";
  } catch {
    copyStatus.textContent = "Select the report text and copy it manually.";
  }
}

function printReport() {
  renderReport();
  window.print();
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // The app still works without installable offline support.
    });
  });
}

form.addEventListener("input", renderReport);
form.addEventListener("change", renderReport);
copyButton.addEventListener("click", copyReport);
printButton.addEventListener("click", printReport);

renderReport();
registerServiceWorker();
