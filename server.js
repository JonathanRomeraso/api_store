const express = require('express')
require('dotenv').config()
const cors = require('cors');
const mongoose = require('mongoose');


const api_prefix = process.env.API_PREFIX
const app = express()
app.use(cors());
app.use(express.json())

const port = process.env.APP_PORT
const product_routes = require('./routes/product_route')
const supplier_routes = require('./routes/supplier_route')


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.CONN_STRING);
    
    console.log("Connected Succesfuly..");
    app.use(`${api_prefix}`, product_routes)
    app.use(`${api_prefix}`, supplier_routes)

    app.listen(port, () => {
        console.log(`Listening on port ${port}!`)
    })
}



