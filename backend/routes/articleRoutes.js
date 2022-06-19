const express = require('express')
const router = express.Router()
const 
{
    getArticles, 
    setArticle, 
    updateArticle, 
    deleteArticle
} = require('../controllers/articleController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getArticles).post(protect, setArticle)
router.route('/:id').put(protect, updateArticle).delete(protect, deleteArticle)

module.exports = router