const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisher= require("../models/publisher")
var ObjectId = require('mongodb').ObjectId

//problem 1
const createAuthor= async function (req, res) {
    let Auther = req.body
    let AuthorCreated = await authorModel.create(Auther)
    res.send({data: AuthorCreated})
}

//problem 2
const Publisher= async function (req, res) {
    let Pub = req.body
    let PubCreated = await publisher.create(Pub)
    res.send({data: PubCreated})
}

//problem 3
const createbook = async (req,res)=>{
    if(!(req.body.author && req.body.publisher)){
        return res.send("author/publisher is required");
        }
      else if(!(ObjectId.isValid(req.body.author) && ObjectId.isValid(req.body.publisher))){
        return res.send("author/publisher is not present");
      }
      else{
        let BookCreated = await bookModel.create(req.body);
        res.send({msg :BookCreated})
      }  
}

//problem 4
const BookwithAPD= async (req,res)=>{
    let Book4 = await bookModel.find().populate('author').populate('publisher')
    res.send({Data : Book4})
}

//problem 5 (A)
const updatebook = async function(req,res){
    const publishers = await publisher.find({name:{$in:['Penguin','Harper Collins']}})
    const publishersid = publishers.map(x=>x._id)
    const updateddata = await bookModel.updateMany({publisher:{$in:publishersid}}, {$set:{isHardcover:true}})
    res.send({data: updateddata})
}

//(B)
const updatedPrice=async function(req,res){
    
    const updatePrice=await bookModel.updateMany(
        {ratings:{$gt:3.5}},
        {$inc:{"price":10}},
        {new:true})
    res.send({msg:updatePrice});
}
{
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
}

module.exports={createAuthor,Publisher,createbook,BookwithAPD,updatebook,updatedPrice}