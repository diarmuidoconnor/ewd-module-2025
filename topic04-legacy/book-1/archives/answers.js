let book = { 
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    price:  15.17,
    tableOfContent: {
        chapter01: 'The Good Parts',
        chapter02: 'Grammer',
        chapter03: 'Objects',
        chapter04: 'Lists',
        chapter05: 'Functions'
    },
    rating: 5,
    reviews: [ 
         {text: '... bla bla bla ...', name: 'Joe Bloggs'},
         {text: '... bla bla bla ...', name: 'Zach Smith'},
         {text: '... bla bla bla ...', name: 'Jane Fleming'}
        ],
    doSomething: function(value) {
        let result = null
        for (let i = 0; i < this.reviews.length; i++ ) {
            if (this.reviews[i].name === value) { 
                result = this.reviews[i].text
                break
            }
        }
        return result;
    }
}

book.rating = 6                   // Q2
book.publisher = 'O Reilly'       // Q3
console.log(book.isbn)            // Q4  undefined 
console.log(book.tableOfContent.chapter01)   // 'The Good Parts'
book.tableOfContent.chapter04 = 'Arrays'     //  Q6
book.tableOfContent.chapter06 = 'Methods'    //  Q7 
console.log(book.tableOfContent)
console.log(book.reviews[1].name)            // Q8  Zach Smith
book.reviews.push({test: '... bla bla bla ...', name: 'Brendan Eich'})  //  Q9
console.log(book.reviews)
console.log(book.doSomething('Zach Smith'))