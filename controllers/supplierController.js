const Supplier_Product = require('../models/Supplier_Product'); 


const fetchAll = async (req, res) => {
    try {
        const suppliersWithProducts = await Supplier_Product.find()
            .populate('supplier', 'name')      
            .populate('product', 'name');      

        res.status(200).json(suppliersWithProducts);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los datos', error });
    }
};


const fetch = async (req, res) => {
    try {
        const suppliersWithProducts = await Supplier_Product.find()
            .populate('supplier', 'name')      
            .populate('product', 'name');      

        // Agrupamos los productos por supplier
        const result = suppliersWithProducts.reduce((acc, item) => {
            // Buscamos si el supplier ya está en el array
            let supplierEntry = acc.find(entry => entry.supplier === item.supplier.name);
            if (!supplierEntry) {
                supplierEntry = { supplier: item.supplier.name, products: [] };
                acc.push(supplierEntry);
            }
            // Agregamos el producto al array de productos de este supplier
            supplierEntry.products.push({ name: item.product.name });
            return acc;
        }, []);

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los datos', error });
    }
};


const fetchOne = async (req, res) => {
    const supplierName = req.params.name;
    try {
        const suppliersWithProducts = await Supplier_Product.find()
            .populate({
                path: 'supplier',
                match: { name: supplierName }, // Filtramos por el nombre del proveedor
                select: 'name'
            })      
            .populate('product', 'name');      

            const filteredSuppliersWithProducts = suppliersWithProducts.filter(item => item.supplier);

            // Agrupamos los productos por supplier
            const result = filteredSuppliersWithProducts.reduce((acc, item) => {
                let supplierEntry = acc.find(entry => entry.supplier === item.supplier.name);
                if (!supplierEntry) {
                    supplierEntry = { supplier: item.supplier.name, products: [] };
                    acc.push(supplierEntry);
                }
                supplierEntry.products.push({ name: item.product.name });
                return acc;
            }, []);
    
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener los datos', error });
        }
    };


module.exports = {fetchAll, fetch, fetchOne};