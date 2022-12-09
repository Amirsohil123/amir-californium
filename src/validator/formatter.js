let xyz = function(x){
     y = x.trim()
    console.log(`this string is trimmed ${y}`)
}
let upper = function(a){
    y = a.toUpperCase()
   console.log(`this string is converted to uppercase ${y}`)
}
let lower = function(b){
    y = b.toLowerCase()
   console.log(`this string is converted to Lowercase ${y}`)
}


module.exports.xyz= xyz
module.exports.upper=upper
module.exports.lower=lower