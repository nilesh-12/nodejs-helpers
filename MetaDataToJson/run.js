import fs from 'fs';
import path from 'path';
import secure from './secure.js';
var args = process.argv.slice(2);
let typescriptFilename = args[0];
let outDirPath = args[1] ?? 'outJson/';
if (!typescriptFilename) {
  throw "Can you enter file name! (e.g. run.js hello.ts)";
}
main(typescriptFilename)
function main(filePath,outputPath) {
  console.log(filePath)
  const safeText = secure.cipher(filePath)
  const extractText = secure.decipher(safeText)
  console.log(`text: "${safeText}" "${extractText}"`);
  // return;

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
  return (_json) => {
    console.log("==saving..json==\n");
    console.log("output_path:", outFilePath);
    // console.log("_json_data:",_json);
    fs.writeFile(outFilePath, _json, FsWriteFile)
  }
}
function FsWriteFile(err) {
  if (err) {
    errorStack.push(err);
    console.log("writeFile failed!\n");      
    console.log(err?.message);      
  }
}

/**
Questions:
How does JS Object Literal coverts to JSON
=> if value is function then those key-value pair will not be included
=> {
    render: { componentType: 'currencyWithLeadingZeros' },
    name: 'totalTax',
    label: 'Total Tax',
    placeholder: 'Total Tax',
    dependentFields: [ 'gstType', 'totalTaxEditFlag' ],
    shouldExclude: 'shouldExcludeGSTR3BFields',
    isReadOnly: [Function: isReadOnly],
    GridProps: { xs: 12, md: 3, sm: 3 }
  }
  Above object literal will be convert to following:
    {
      "render": {
        "componentType":"currencyWithLeadingZeros"
      },
      "name":"totalTax",
      "label":"Total Tax",
      "placeholder":"Total Tax",
      "dependentFields":["gstType","totalTaxEditFlag"],
      "shouldExclude":"shouldExcludeGSTR3BFields",
      "GridProps":{"xs":12,"md":3,"sm":3}
    }
*/