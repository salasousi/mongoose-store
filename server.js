////  REQUIRE DEPENDENCIES
const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config();
const Product = require("./models/products")

//// INITIALIZE THE EXPRESS APP
const app = express()

//// CONFIGURE SETTINGS
const port = process.env.port;


mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
	useUnifiedTopology: true
})

const db = mongoose.connection
db.on("error", (err) => console.log("MongoDB has encountered an error: " + err.message()))
db.on("connected", () => console.log(`Connected to MongoDB on ${db.host}:${db.port}`))
db.on('disconnected', () => console.log('mongo disconnected'));



//// MOUNT MIDDLEWARE
app.use(express.urlencoded({ extended: true }))

////MOUNT ROUTES

////I
app.get("/products", (req, res) =>{
    Product.find({}, (error, products) => {
        res.render("index.ejs", {
            products
        })
    })
})

////N
app.get("/products/new", (req, res) => {
    res.render("new.ejs")
})

////D

////U

////C
app.post('/products', (req, res) => {
	res.send(req.body);

    Product.create(req.body, (error, createdProduct) =>{
        res.redirect("/products")
    })
});

////E

////S



app.listen(port, () => {
    console.log(`Express is listening on port: ${port}`);
})