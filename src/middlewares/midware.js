//const orderModel = require("../models/ordermodel")
const userModel = require("../models/userModel")
const productModel = require("../models/productmodel")



const head1 = function(req,res,next){
    
    let checkData = req.headers.isfreeappuser
    if(checkData==null)
{
    res.send("mandatory header is missing")
}
      next()
}

const checkid = async function(req,res,next){
    let myid = req.body.userId
    let prid = req.body.productId
    
    const final = await userModel.findById({_id:myid})
    if(!final){
        res.send("user id did not match")
    }
    const final2 = await productModel.findById({_id:prid})
    if(!final2){
        res.send("product id did not match")
    }
    next()
}

module.exports={head1,checkid}