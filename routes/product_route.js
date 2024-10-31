

const express = require('express')
//const { ObjectId } = require('mongodb')
const router =  express.Router()
//const Product = require('../models/Product')
const ProductController = require('../controllers/productController')

router.get('/products', ProductController.fetchAll)

router.get('/products/:id', ProductController.fetchOne);

router.post('/products', ProductController.create);

router.put('/products/:id', ProductController.edit );


router.delete('/products/:id', ProductController.remove);



module.exports = router