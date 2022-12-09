const { chunk } = require("lodash")

const arr = ['jan','feb','mar','april','may','june','july','aug','sept','oct','nov','dec']
const dash = function(){
    b= chunk(arr,3)
    console.log(b)
}
const arr0 = [1,3,5,7,9,11,13,15,17,19,]
var _ = require('lodash');
const trail= function(){
    b = _.tail(arr0)
    console.log(b)
}

const arr1 = [1,1,2,7,2,3,4]
const arr2 = [1,1,2,6,2,3,4]
const arr3 = [1,3,2,1,5,3,4]
const arr4 = [1,1,2,4,2,3,4]
const arr5 = [1,2,2,1,2,3,4]

const unique = function(){
    b = _.union(arr1,arr2,arr3,arr4,arr5)
    console.log(b)
}

const array = [ ['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth'] ]
const Pair = function(){
    b = _.fromPairs(array)
    console.log(b)
}


module.exports.dash=dash
module.exports.trail=trail
module.exports.unique=unique
module.exports.Pair=Pair