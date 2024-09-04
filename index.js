const path = require("path");
const fs=require('fs');

// process.argv[2] for input taking
const operation = process.argv[2];
operation=='append' ? file = process.argv[4]  :  file = process.argv[3];
operation=='append' ? content = process.argv[3]:  null 
operation=='rename' ? content = process.argv[4]:  null

// Please use following format => operation filename
// please use following format for rename => operation filename newfilename
// Please use following format for append => operation content(append_message) filename 
// please write append_message in " " (in quotes)

// function for reading file
const readFile=(file)=>{
    fs.readFile(file,'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    })
}

// function for deleting file
const deleteFile =(file)=>{
    fs.unlink(file,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(`File ${file} Deleted Successfully`);
        }
    })
}

// function for creating file
const createFile=(file)=>{
    fs.writeFile(file,'This is a new file created by Node',(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(`File ${file} Created Successfully`);
        }
    })
}

// function for appending file
const appendFile=(file)=>{
    fs.appendFile(file,`\n ${content}\r\n`,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(`${content} appended to ${file}`);
        }
    })
}

// function for renaming file
const renameFile=(file)=>{
    fs.rename(file,content,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(`File ${file} renamed to `+content);
        }
    })
}

// function for listing files
const listFile=(file)=>{
    fs.readdir(file, (err, data) => {
        if (err) {
            console.log(file);
          console.log(err);
        }else{
           data.forEach(data => {
            console.log(data);
          }); 
        }
    });
}

// switch case for operation
switch (operation) {

    case 'read':
    if(file){
        readFile(file)
      }
    break

    case 'delete':
    if(file){
        deleteFile(file)
    }
    break

    case 'create':
    if(file){
        createFile(file)
    }
    break

    case 'append':
    if(file){
        appendFile(file)
    }
    break

    case 'rename':
    if(file){
        renameFile(file)
    }
    break

    case 'list':
    if(file){
        listFile(file)
    }
    break
// default case
    default:
        console.log(`Invalid operation '${operation}'`);
}