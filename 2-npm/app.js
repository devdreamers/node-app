const fs = require('fs');
const path = require('path');



// 1. 파일 확장자명 확인

// 2. 폴더 생성
// 2-1. video 가 있을 경우 video 폴더 생성
// 2-2. 캡쳐파일이 있을 경우 captured 폴더 생성
// 2-3. 편집본이 있을 경우 duplicated 폴더 생성


// 3. 파일 이동

const str = format(fs.readdir('../node/test/'));
console.log(str);

