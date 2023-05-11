const User = require("../models/User");
const {
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./middleware/verifyToken");

const router = require("express").Router();

// User Update
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
                $set: req.body,
            },
            { new: true }
        );
        const { password, ...others } = updatedUser._doc;
        res.status(200).json({ ...others });
    } catch (err) {
        res.status(500).json(err);
    }
});

// User Delete
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get User
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all user
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new; /* URL query */
    try {
        const users = query
            ? await User.find().sort({ id: -1 }).limit(5)
            : await User.find().limit(55);
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get User Stats
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" }
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 }
                }
            }
        ]);
        res.status(200).json(data)

    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;
