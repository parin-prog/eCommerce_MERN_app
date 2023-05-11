const express = require("express")
app = express()
const mongoose = require("mongoose")
const dotenv  = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const ordersRoute = require("./routes/orders")

dotenv.config();

// mongoDB connection setup
mongoose
    .connect(process.env.MONGO_URL)
    .then(()=> console.log("DB Connection Successfully!"))
    .catch((err)=>{
        console.log(err);
    });

// setting up all Routes
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/products", productRoute)
app.use("/api/cart", cartRoute)
app.use("/api/orders", ordersRoute)
app.use("/api/users", userRoute)

// listening to the API
app.listen(process.env.port || 5000, ()=>{
    console.log("Backend server is running!!")
})