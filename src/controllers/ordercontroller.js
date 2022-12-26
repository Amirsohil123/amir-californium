const orderModel = require("../models/ordermodel")
const userModel = require("../models/userModel")
const productModel = require("../models/productmodel")

const myOrderDetail = async function(req,res){
  
    let data = req.body
    let head = req.headers.isfreeappuser
    let userIdInOrder = req.body.userId
    let productIdInOrder = req.body.productId
    if(head=="true"){
         data.amount = 0
       let finalamount = await orderModel.create(data)
       return res.send({msg : finalamount})
     }
    if(head!="true"){
    
    let userBalance = await userModel.findById(userIdInOrder)
    let productPrice = await productModel.findById(productIdInOrder)
    if(userBalance.balance<productPrice.price){
        return res.send("Insufficient balance")
    }
  else {
    let umd = await userModel.findOneAndUpdate({_id:userIdInOrder},{$set:{balance:userBalance.balance - productPrice.price}},{new : true})
    data.amount = productPrice.price
    data.isFreeAppUser = false
    let create = await orderModel.create(req.body)
    return res.send({msg:create})
}

}
}


module.exports.myOrderDetail = myOrderDetail




