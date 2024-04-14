import {
    promises as fs
} from 'fs';
//reading 3 files using promises. Order of callback execution determinable
console.log("about to read...");
fs.readFile("test-1.txt", "utf8").then((contents) => {
    console.log(contents);
    return fs.readFile("tefst-2.txt", "utf8")
}).then((contents) => {
    console.log(contents);
    return fs.readFile("test-3.txt", "utf8")
}).then((contents) => {
    console.log(contents)
}).catch((error) => {
    console.error('File read failed', error)
});

console.log("...done");