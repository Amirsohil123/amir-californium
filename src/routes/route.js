const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authentication = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.myUserData  )

router.post("/login", userController.login)
 router.get("/login/:userId",authentication.authenticate, userController.userloggedin)
 router.put("/login/:userId",authentication.authenticate, userController.updateUser)
 router.post("/login/:userId/posts",authentication.authenticate, userController.postMessage)
router.delete("/login/:userId",authentication.authenticate, userController.deleteuser)


module.exports = router;