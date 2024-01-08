import fs from 'fs';

fs.readFile('./readme.md','utf8', (err, contents) => {
    console.log(contents);
});
console.log('Doing something else');