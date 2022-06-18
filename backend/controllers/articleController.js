const asyncHandler = require('express-async-handler')

// @desc Get Articles
// @route GET /api/articles
// @access Private
const getArticles = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get articles'})
})

// @desc Set Article
// @route POST /api/articles
// @access Private
const setArticle = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Create article'})
})

// @desc Update Article
// @route PUT /api/articles/:id
// @access Private
const updateArticle = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update article ${req.params.id}`})
})

// @desc Delete Article
// @route DELETE /api/articles
// @access Private
const deleteArticle = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete article ${req.params.id}`})
})

module.exports = {
    getArticles,
    setArticle,
    updateArticle,
    deleteArticle
}