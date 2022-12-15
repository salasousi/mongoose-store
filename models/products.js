

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema(
    {
        name: String,
        description: String,
        img: String,
        price: Number,
        qty: Number
    })

module.exports = mongoose.model("Product", productSchema)