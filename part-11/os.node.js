const os = require("os");

console.log("OS platform", os.platform());
console.log("OS CPU architecture", os.arch());
console.log("# of logical CPU Cores", os.cpus().length);
console.log("HOME DIRECTORY", os.homedir());
console.log("line 1" + os.EOL + "line 2");
