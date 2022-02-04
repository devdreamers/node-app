const fs = require('fs');
const path = require('path');
const os = require('os');


const folder = process.argv[2];
const workingDir = path.join(os.homedir(), 'Desktop', 'sample', 'NODE', 'node', folder);

if(!folder || !fs.existsSync(workingDir) ) {
    console.error('Please enter folder name in node');
    return;
}

const videoDir = path.join(workingDir, 'video');
const captureDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');

console.log(videoDir);
console.log(captureDir);
console.log(duplicatedDir);

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(captureDir) && fs.mkdirSync(captureDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

fs.promises
    .readdir(workingDir) //
    .then(processFiles)
    .catch(console.log);

function processFiles(files) {
    files.forEach((file) => {
        if(isVideoFile(file)) {
            move(file, videoDir);
        } else if (isCapturedFile(file)) {
            move(file, captureDir);
        } else if (isDuplicatedFile(files, file)) {
            move(file, duplicatedDir);
        }
    })
}

function isVideoFile(file) {
    const regExp = /(mp4|mov)$/gm;
    const match = file.match(regExp);
    return !!match;
}
function isCapturedFile(file) {
    const regExp = /(png|aae)$/gm;
    const match = file.match(regExp);
    return !!match;
}
function isDuplicatedFile(files, file) {
    if(!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
        return false;
    }

    const edited = `IMG_E${file.split('_')[1]}`;
    const found = files.find((f) => f.includes(edited));
    return !!found;
}

function move(file, targetDir) {
    console.info(`move ${file} to ${path.basename(targetDir)}`);
    const oldPath = path.join(workingDir, file);
    const newPath = path.join(targetDir, file);
    fs.promises
        .rename(oldPath, newPath) //
        .catch(console.error);
}


