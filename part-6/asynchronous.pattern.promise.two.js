const util = require("util");
const { readFile, writeFile } = require("fs").promises;
/**
 * TWO APPROACHES ARE SHOWN BELOW:
 * 1. ONE IS COMMENTED OUT
 * 2. SECOND ONE IS THROUGH ASYNC AND AWAIT KEYWORD
 */
/*
readFile(__filename, { encoding: "utf-8" }).then(data => {
  writeFile(__filename + ".copy", data)
});
*/

async function main() {
  const data = await readFile(__filename, { encoding: "utf-8" });
  await writeFile(__filename + ".copy", data);
}

main();

console.log("TEST");
