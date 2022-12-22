const express = require('express');
const router = express.Router();


const bookController= require("../controllers/bookController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor",bookController.createAuthor )
router.post("/createPublisher", bookController.Publisher)
router.post("/createBook", bookController.createbook)
router.get("/GetBook", bookController.BookwithAPD)
router.put("/updatebook", bookController.updatebook)
router.put("/updateprice", bookController.updatedPrice)
module.exports = router;