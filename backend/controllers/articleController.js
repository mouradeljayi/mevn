const asyncHandler = require('express-async-handler')
const Article = require('../models/articleModel')
const User = require('../models/userModel')
const fs = require('fs')

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

    if(!req.body.title || !req.body.description || !req.body.city || !req.body.category || !req.file) {
        res.status(400)
        throw new Error('You must enter all fields')
    } else {
        const imagename = req.file.filename

        const article = await Article.create({
            title: req.body.title,
            description: req.body.description,
            city: req.body.city,
            category: req.body.category,
            user: req.user.id,
            imageUrl: imagename
        })
        res.status(200).json(article)
    }
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
    // image update
    let new_image = ''

    if(req.file) {
        new_image = req.file.filename
        try{
            fs.unlinkSync('./uploads/' + req.body.old_image)
        }catch(err) {
            console.log(err)
        }
    }else {
        new_image = req.body.old_image
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
    if(article.imageUrl != '') {
        try{
            fs.unlinkSync('./uploads/'+article.imageUrl)
        }catch(err) {
            console.log(err)
        }
    }
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getArticles,
    setArticle,
    updateArticle,
    deleteArticle
}