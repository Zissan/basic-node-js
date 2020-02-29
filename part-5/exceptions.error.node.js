const path = require("path");
const fs = require("fs");

//test.rc is not available under the directory
const files = [".babel.json", "test.rc", ".npmrc"];
files.forEach(file => {
  /**
   * BELOW ENV's ARE AVAILABLE IN WINDOWS ONLY. FOR MAC USE,
   * path.resolve(process.env.HOME, file)
   */
  const filePath = path.resolve(
    process.env.HOMEDRIVE,
    process.env.HOMEPATH,
    file
  );
  try {
    const fileData = fs.readFileSync(filePath);
    //const fileData = fs.readFileSync(filePath, "utf-13"); //WRONG ENCODING IS AN ERROR
    console.log(fileData);
  } catch (error) {
    if (error.code === "ENOENT") {
      /**
       * EXCEPTIONS ARE KNOWN ERROR WHICH MIGHT OCCUR AND
       * THE APPLICATION CAN HANDLE IT. IT IS CONSIDERED TO BE A GOOD PRACTISE.
       */
      console.log("FILE NOT FOUND");
    } else {
      /**
       * ERRORS ARE NOT KNOWN THING, WHICH MIGHT OCCUR DUE TO BAD CODING PRACTISES.
       */
      throw error;
    }
  }
});
