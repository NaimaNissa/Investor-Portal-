const fs = require("fs");
const path = require("path");

const replacements = [
  ["bg-surface-950", "bg-white"],
  ["bg-surface-900/50", "bg-gray-50"],
  ["bg-surface-900", "bg-gray-50"],
  ["bg-surface-800/50", "bg-gray-100"],
  ["bg-surface-800", "bg-gray-100"],
  ["bg-surface-700", "bg-gray-200"],
  ["border-surface-700", "border-gray-200"],
  ["border-surface-800", "border-gray-200"],
  ["border-surface-600", "border-gray-300"],
  ["text-surface-100", "text-gray-900"],
  ["text-surface-200", "text-gray-800"],
  ["text-surface-300", "text-gray-700"],
  ["text-surface-400", "text-gray-500"],
  ["text-surface-500", "text-gray-600"],
  ["text-surface-600", "text-gray-600"],
  ["hover:bg-surface-800", "hover:bg-gray-100"],
  ["hover:text-surface-100", "hover:text-gray-900"],
  ["hover:text-surface-400", "hover:text-gray-600"],
  ["hover:bg-surface-700", "hover:bg-gray-200"],
  ["text-white", "text-gray-900"],
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;
  for (const [from, to] of replacements) {
    if (content.includes(from)) {
      content = content.split(from).join(to);
      changed = true;
    }
  }
  if (changed) fs.writeFileSync(filePath, content);
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (f.endsWith(".tsx")) processFile(full);
  }
}

walk(path.join(__dirname, "..", "app"));
walk(path.join(__dirname, "..", "components"));
console.log("Done.");
