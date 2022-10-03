const fs = require('fs');
exports.readFile = (
  returnJson = false,
  filePath,
  ) => {
   const value = fs.readFileSync(filePath);
   return returnJson?JSON.parse(value):value;
  };

exports.writeFile = (
    fileData,
    filePath,
  ) => {
    fs.writeFileSync(filePath,JSON.stringify(fileData));
  };