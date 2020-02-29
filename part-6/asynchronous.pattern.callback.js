const path = require("path");
const fs = require("fs");
const fe = require("./fe");

/**
 * BELOW PATTERN HAS AN ISSUE WHEN THERE IS DEPENDENT ACTION, IT HAS TO BE NESTED UNDER THE CALLBACK.
 * THIS PHENOMENON IS KNOWN AS PYRAMID OF DOOM IN COMPUTER PROGRAMMING.
 */
fs.readFile(__filename, { encoding: "utf-8" }, (err, data) => {
  if (err) {
    switch (err.code) {
      case "ENOENT":
        console.log("FILE NOT FOUND");
        break;

      default:
        throw err;
    }
    return;
  }
  console.log("FILE DATA", data);
  /**
   * ON READING THE FILE, SUPPOSE YOU NEED TO WRITE A COPY OF THE SAME.
   * THAT ACTION CALL HAS TO BE NESTED HERE.
   */
  const fileExtension = fe(__filename);
  const copiedFilename = `${__filename.replace(
    fileExtension,
    "copy"
  )}.${fileExtension}`;
  console.log(copiedFilename);
  fs.writeFile(copiedFilename, data, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("FILE COPIED SUCCESSFULLY");
  });
});

console.log("TEST");
