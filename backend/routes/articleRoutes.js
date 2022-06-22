const express = require('express')
const multer = require('multer')
const fileFilter = require('../middleware/fileMiddleware')
const router = express.Router()
const 
{
    getArticles, 
    setArticle, 
    updateArticle, 
    deleteArticle
} = require('../controllers/articleController')

const { protect } = require('../middleware/authMiddleware')

const upload = multer({
    dest: './uploads',
    fileFilter,
    limits: {
        fileSize: 500000
    }
})

router.route('/').get(protect, getArticles)
router.route('/', upload.single('file')).post(protect, setArticle)
router.route('/:id').put(protect, updateArticle).delete(protect, deleteArticle)

module.exports = router