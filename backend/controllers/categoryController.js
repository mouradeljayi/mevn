const asyncHandler = require('express-async-handler')
const Category = require('../models/categoryModel')

// @desc Get Categories
// @route GET /api/categories
// @access Private
const getCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find()
    res.status(200).json(categories)
})

// @desc Set Category
// @route POST /api/categories
// @access Private
const setCategory = asyncHandler(async (req, res) => {
    const {name, icon} = req.body

    if(!name || !icon) {
        res.status(400)
        throw new Error('Please enter all fields')
    }
    const category = await Category.create({
        name,
        icon
    })
    res.status(200).json(category)
})

module.exports = {
    getCategories,
    setCategory,
}