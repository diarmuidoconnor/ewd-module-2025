console.log('before')
//What will be logged to the console?
let i = 0
while (i < 5) {
    setTimeout(() => {
        console.log('i: ' + i)
    }, 0);
    i++
}
console.log('after')