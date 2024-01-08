import fs from 'fs';

const contents = fs.readFileSync('./readme.md','utf8');
console.log(contents);
console.log('Doing something else');
