const express = require('express')
const router = express.Router()
const multer = require('multer')
const 
{
    getArticles, 
    setArticle, 
    updateArticle, 
    deleteArticle,
    getArticle
} = require('../controllers/articleController')

const { protect } = require('../middleware/authMiddleware')

// multer middleware
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
    }
})

let upload = multer({
    storage: storage
}).single('imageUrl')

router.route('/').get(protect, getArticles)
router.route('/').post(protect, upload, setArticle)
router.route('/:id').get(protect, getArticle).put(protect, upload, updateArticle).delete(protect, deleteArticle)

module.exports = router