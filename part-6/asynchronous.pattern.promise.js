const util = require("util");
const fs = require("fs");

const readFile = util.promisify(fs.readFile);
/**
 * TWO APPROACHES ARE SHOWN BELOW:
 * 1. ONE IS COMMENTED OUT
 * 2. SECOND ONE IS THROUGH ASYNC AND AWAIT KEYWORD
 */
/*
readFile(__filename, { encoding: "utf-8" }).then(data => {
  console.log("FILE DATA", data);
});
*/

async function main() {
  const data = await readFile(__filename, { encoding: "utf-8" });
  console.log("FILE DATA", data);
}

main();

console.log("TEST");
