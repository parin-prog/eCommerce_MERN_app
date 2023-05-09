const User = require('../models/User');
const { verifyTokenAndAuthorization } = require('./middleware/verifyToken');

const router = require('express').Router();

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SECR
        ).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true }
        );
        const {password, ...others} = updatedUser._doc;
        res.status(200).json({...others})

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router