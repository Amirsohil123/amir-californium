const express = require('express');
const router = express.Router();

const product = require("../controllers/productcontroller")
const myUser = require("../controllers/userController")
const myorder = require("../controllers/ordercontroller");
const midware = require('../middlewares/midware');


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/products", product.createpro )
router.post("/myUser", myUser.createMyUser )
router.post("/myorder",midware.head1,midware.checkid, myorder.myOrderDetail )


module.exports = router;