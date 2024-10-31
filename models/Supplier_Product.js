const mongoose = require('mongoose')
const Product = require('./Product')
const Supplier = require('./Supplier')

const Supplier_ProductSchema = mongoose.Schema({
    supplier: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Supplier',
                require: true
    },
    product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                require: true
    }
}, { collection: 'supplier_product' } )

const Supplier_Product = mongoose.model('Supplier_Product', Supplier_ProductSchema)

module.exports = Supplier_Product