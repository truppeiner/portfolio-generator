const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject)=>{
        fs.writeFile('./dist/index.html', fileContent, err =>{
            //if error, reject promise and send it to catch 
            if (err){
                reject(err);
                return;
            }
            // if everything successful resolve the promise and send success
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject)=>{
        fs.copyFile('./src/style.css', './dist/style.css', err =>{
            //if error reject 
            if (err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File Copied!'
            });
        });
    });
};

module.exports = {
    writeFile,
    copyFile
};