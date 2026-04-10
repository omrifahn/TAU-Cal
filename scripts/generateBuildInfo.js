const fs = require("fs");
const { execSync } = require("child_process");

let commitDate;
try {
    commitDate = execSync("git log -1 --format=%ci").toString().trim();
} catch (e) {
    commitDate = new Date().toISOString();
}

fs.writeFileSync(
    "src/buildInfo.json",
    JSON.stringify({ commitDate })
);
