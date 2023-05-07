const router = require('express').Router();

// Endpoint for the restAPI
router.get("/usertest", (req,res)=>{
    res.send("user test successful")
})

router.post("/userposttest", (req,res)=>{
    const username = req.body.username;
    console.log(username)
    res.send(username);
})

module.exports = router