const asyncHandler = require('express-async-handler')
const Article = require('../models/articleModel')


// @desc Get Articles
// @route GET /api/articles
// @access Private
const getArticles = asyncHandler(async (req, res) => {
    const articles = await Article.find()
    res.status(200).json(articles)
})

// @desc Set Article
// @route POST /api/articles
// @access Private
const setArticle = asyncHandler(async (req, res) => {
   /* if(!req.body.title) {
        res.status(400)
        throw new Error('Please add a text field')
    }*/
    const article = await Article.create({
        title: req.body.title,
        description: req.body.description,
        city: req.body.city,
        imageUrl: req.body.imageUrl,
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
    await article.remove()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getArticles,
    setArticle,
    updateArticle,
    deleteArticle
}