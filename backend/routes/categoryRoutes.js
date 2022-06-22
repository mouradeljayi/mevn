const express = require('express')
const router = express.Router() 
const
{
    getCategories, 
    setCategory, 
    
} = require('../controllers/categoryController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getCategories).post(protect, setCategory)

module.exports = router