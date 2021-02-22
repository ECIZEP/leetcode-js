const fs = require('fs');
const path = require('path');

function getJsonFiles(jsonPath) {
  let jsonFiles = [];
  const { join } = path;
  function findJsonFile(path) {
    let files = fs.readdirSync(path);
    files.forEach(function (item, index) {
      let fPath = join(path, item);
      let stat = fs.statSync(fPath);
      if (stat.isDirectory() === true) {
        findJsonFile(fPath);
      }
      if (stat.isFile() === true) {
        jsonFiles.push({
          fileName: item,
          path: fPath
        });
      }
    });
  }
  findJsonFile(jsonPath);
  console.log(jsonFiles);
  return jsonFiles;
}

function writeOutPut() {
  // fs.mkdirSync('output');
  const filesPath = getJsonFiles(path.resolve(__dirname, './lottie/in'));
  filesPath.forEach(fileItem => {
    const data = JSON.parse(fs.readFileSync(fileItem.path).toString());
    removeNm(data);
    fs.writeFileSync(path.resolve(__dirname, 'output', fileItem.fileName), JSON.stringify(data))
  });
}

writeOutPut();


function removeNm(obj) {
  obj.nm && (delete obj.nm);
  obj.tyName && (delete obj.tyName);
  if (obj instanceof Array) {
    obj.forEach(item => removeNm(item));
  }
  obj.assets && removeNm(obj.assets);
  obj.layers && removeNm(obj.layers);
}