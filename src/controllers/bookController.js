const { count } = require("console")
const authorModel = require("../models/authorModel")
const BookModel= require("../models/booksModel")

//problem 1
const Author = async (req,res) => {
    let data = req.body
    let author = await authorModel.create(data)
    res.send(author)


}

const Bookname = async (req,res) => {
    let data = req.body
    let book = await BookModel.create(data)
    res.send(book)
}

//problem 2
const chetanBhagat = async (req,res) => {
    let id = await authorModel.findOne({ author_name: "Chetan Bhagat" })
    let _id1 = id.author_id
    let Book = await BookModel.findOne({ author_id:_id1})
    res.send({Book})
}

//problem 3
const findauthor = async (req,res) =>{
let obj = await BookModel.findOneAndUpdate(
    {name:"Two states"},
    {$set:{price: 100}},
    {new : true});
let xyz = obj.author_id
let Details = await authorModel.findOne({author_id : xyz})
let newobj = {
    "authorname" : Details.author_name,
    "UpdatedPrice": obj.price
}
res.send({msg: newobj})
}

//problem 4
const Pricesoff = async (req,res) =>{
    let  abc = await BookModel.find( { price : { $gte: 50, $lte: 100} })
    let xyz = abc.map(book=>book.author_id)
    let authorname = await authorModel.find({author_id:{$in : xyz}})
    res.send(authorname)
}

{
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}
}
module.exports = {Author,Bookname,chetanBhagat,findauthor,Pricesoff}






