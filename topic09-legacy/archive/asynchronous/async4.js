import fs from 'fs';
//reading 3 files asychronously using callback functions. Order of callback execution determinable
console.log("about to read...");
fs.readFile("test-1.txt", "utf8", (err, contents) => {
    if (err) throw err;
    console.log(contents);
    fs.readFile("test-2.txt", "utf8", (err, contents) => {
        if (err) throw err;
        console.log(contents);
        fs.readFile("test-3.txt", "utf8", (err, contents) => {
            if (err) throw err;
            console.log(contents);
        });
    });
});

console.log("...done");