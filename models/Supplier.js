const mongoose = require('mongoose')
const Category = require('./Category')

const supplierSchema = mongoose.Schema({
    name:     { type: String, required: true },
    address:     { type: String, required: true },
    phone:     { type: String, required: true },
    email:     { type: String, required: true },
}, { collection: 'supplier' } )

const Supplier = mongoose.model('Supplier', supplierSchema)

module.exports = Supplier