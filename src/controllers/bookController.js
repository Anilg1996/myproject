const BookModel = require("../models/bookModel")

// Create Book in DB
const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

// Fetch Book Data From DB
const getBooksData = async function (req, res) { 
    let allBooks = await BookModel.find()
    res.send({ msg: allBooks })
}

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData