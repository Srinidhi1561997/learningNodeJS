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
   const value= fs.writeFileSync(filePath,JSON.stringify(fileData));
   console.log('written', value);
  };