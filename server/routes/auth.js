const User = require("../models/User");
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


// Register
router.post("/register", async (req, res) => {
    const newUser = new User({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SECR
        ).toString()  /* AES algorithm cyphered password */
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }

});

// Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Wrong credentials")

        // Checking correct user password
        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SECR
        );
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
        OriginalPassword !== req.body.password &&
            res.status(401).json("Wrong credentials")

        // Signing <<JWT token>> with JWT_SECR
        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin
            },
            process.env.JWT_SECR,
            { expiresIn: "3d" }
        );

        // Separate password from user for response
        const {password, ...others} = user._doc;
        res.status(200).json({...others, accessToken})
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router