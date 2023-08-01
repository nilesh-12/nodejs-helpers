import fs from 'fs';
import path from 'path';
var args = process.argv.slice(2);
let typescriptFilename = args[0];
let outDirPath = args[1] ?? 'outJson/';
if (!typescriptFilename) {
  throw "Can you enter file name! (e.g. run.js hello.ts)";
}
main(typescriptFilename)
function main(filePath,outputPath) {
  fs.stat(filePath, function (err, stats) {
    if (err) { throw err; }
    if (stats.isFile()) { fs.exists(filePath, FileExist(filePath)); }
    if (stats.isDirectory()) { fs.readdir(filePath, FolderExistRead(filePath)) }
  });
  // for (let i = 0; i < 
  // fs.exists(typescriptFilename, FileExist())
}
function FolderExistRead(filePath) {
  return (err,files) => {
    console.log(err)
    console.log(files);
    files.forEach(function (filename) {
      try {
        let fullPath = path.join(filePath, filename);
        // outDirPath = "outJson\\"+fullPath
        fs.exists(fullPath, FileExist(fullPath));
      } catch(err) {
        console.log(err)
      }
    })
  }
}
function FileExist(fn) {
  return (doesIt) => {
    console.log("FileExist argument type: ",typeof doesIt)
    if(doesIt) {
      console.log(`=File (${fn}) found`);
      CreateJsonDump(fn)
    } else {
      console.log("file doesn't exist");
    }
  }
}
function CreateJsonDump(filename) {
  console.log(`=Creating Json for ${filename}`);
  // let fn = filename.split('.');
  // fn.pop();
  // fn = fn.join('');
  // fs.readFile(filename, ReadFile(SaveJson(fn+'.json')))
  // console.log(require("./"+filename)); // cannot understands export
  // import("./"+fn+".js").then(ImportThen(SaveJson(outDirPath)));
  let inPath = "./"+filename.replace("\\","/")
  let outPath =  "./"+outDirPath+filename.replace("\\","/") + ".json"
  import(inPath).then(ImportThen(SaveJson(outPath)));
}
function ImportThen(cb) {
  return (module) => {
    console.log(module[Object.keys(module)[0]].form)
    cb?.(JSON.stringify(module[Object.keys(module)[0]]))
  }
}
function ReadFile(cb) { 
  return (err,bytes) => {
    console.log("File read [DONE]");
    if (err) {
      console.log("Error:", err.message);
    } else {
      // console.log(JSON.stringify(bytes)) // returns buffer
      // console.log(eval(String(bytes).replace("export",""))) // returns undefined
      //cb?.(JSON.stringify(bytes))
    }
  }
}
function SaveJson(fn) {
  const outFilePath = fn;
  console.log("Saving json file with name:",outFilePath);
  return (_json) => {
    fs.writeFile(outFilePath, _json, FsWriteFile)
  }
}
function FsWriteFile(err) {
  console.log("FsWriteFile:error:",err?.message);
  console.log("File should be there in current directory!")
}
