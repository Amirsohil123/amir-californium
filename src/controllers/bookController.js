const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisher= require("../models/publisher")


const createAuthor= async function (req, res) {
    let Auther = req.body
    let AuthorCreated = await authorModel.create(Auther)
    res.send({data: AuthorCreated})
}

const Publisher= async function (req, res) {
    let Pub = req.body
    let PubCreated = await publisher.create(Pub)
    res.send({data: PubCreated})
}

const Books= async function (req, res) {
    let book = req.body
    let BookCreated = await bookModel.create(book)
    res.send({data: BookCreated})
}


// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails

module.exports={createAuthor,Publisher,Books}