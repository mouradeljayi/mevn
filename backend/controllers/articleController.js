const asyncHandler = require('express-async-handler')
const Article = require('../models/articleModel')
const User = require('../models/userModel')

// @desc Get Articles
// @route GET /api/articles
// @access Private
const getArticles = asyncHandler(async (req, res) => {
    const articles = await Article.find({ user: req.user.id })
    res.status(200).json(articles)
})

// @desc Set Article
// @route POST /api/articles
// @access Private
const setArticle = asyncHandler(async (req, res) => {
    const { title, description, city, imageUrl, category} = req.body

    if(!title || !description || !city || !imageUrl || !category) {
        res.status(400)
        throw new Error('Please enter all fields')
    }
    const article = await Article.create({
        title,
        description,
        city,
        imageUrl,
        category,
        user: req.user.id
    })
    res.status(200).json(article)
})

// @desc Update Article
// @route PUT /api/articles/:id
// @access Private
const updateArticle = asyncHandler(async (req, res) => {
    const article = await Article.findById(req.params.id)
    if(!article) {
        res.status(400)
        throw new Error('Article not found')
    }

    // Check for user
    const user = await User.findById(req.user.id)
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches the article user
    if(article.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
    })
    res.status(200).json(updatedArticle)
})

// @desc Delete Article
// @route DELETE /api/articles
// @access Private
const deleteArticle = asyncHandler(async (req, res) => {
    const article = await Article.findById(req.params.id)
    if(!article) {
        res.status(400)
        throw new Error('Article not found')
    }
    
    // Check for user
    const user = await User.findById(req.user.id)
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches the article user
    if(article.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    await article.remove()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getArticles,
    setArticle,
    updateArticle,
    deleteArticle
}