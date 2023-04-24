const Product = require('../models/Product')


exports.createProduct = async (req, res, next) => {
    const product = await Product(req.body)

    const newProduct = await  product.save();
    res.status(201).json({
        sucess: true,
        newProduct
    })
}


exports.getAllProducts = (req, res) => {
    res.status(200).json({ message: "Route is working fine " })
}

