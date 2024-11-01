const express = require('express')
//const { ObjectId } = require('mongodb')
const router =  express.Router()
//const Product = require('../models/Product')

const SuplierController = require('../controllers/supplierController')

router.get('/supplier', SuplierController.fetch)

router.get('/supplier2', SuplierController.fetchAll)

router.get('/supplier/:name', SuplierController.fetchOne)



module.exports = router