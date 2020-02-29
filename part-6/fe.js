//(function(exports, require, module, __filename, __dirname){
module.exports = filename => {
  if (typeof filename !== "string") throw "INVALID FILE NAME";
  const extension = filename.substr(filename.lastIndexOf(".") + 1);
  return extension;
};
//})(module.exports, require, module, filename, dirname);
