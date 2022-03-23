import {
    promises as fs
} from 'fs';
//reading 1 file asychronously using async function. 
console.log("about to read...");

readFiles()

console.log("...doing other stuff")


async function readFiles() {
    console.log("starting sequential read...");
    const contents1 = await fs.readFile("test-1.txt", "utf8");
    console.log(contents1);
}