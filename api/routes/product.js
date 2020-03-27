const productFunctions = require('../helpers/productFunctions')
const schemaValidator = require('../helpers/schemaValidators')

async function registerProductHandler(req, res){
    if (schemaValidator.verifyProductSchema(req.body)) {
        var success = await Promise.resolve(productFunctions.uploadProduct(req.body));
        if (success) {
            res.status(200).json({
                "error": 'Succesfully uploaded product',
                "success": success
            })
        } else {
            res.status(403).json({
                "error": 'Something went wrong whilst adding the product to your profile, please try again later',
                "success": success
            })
        }
    } else {
        res.status(404).json({
            "error": "Invalid product object",
            "success": false
        })
    }
}

async function removeProductHandler (req, res) {
    if (schemaValidator.verifyProductRequestSchema(req.body)) {
        var success = await Promise.resolve(productFunctions.removeProduct(req.body));
        if (success) {
            res.status(200).json({
                "error": 'Succesfully removed product',
                "success": success
            })
        } else {
            res.status(403).json({
                "error": 'Something went wrong whilst removing the product from your profile, please try again later',
                "success": success
            })

        }
    } else {
        res.status(403).json({
            "error": "Invalid product object",
            "success": false
        })
    }
}

async function updateProductHandler (req, res) {
    if (schemaValidator.verifyProductsSchema(req.body)) {
        var removed = await Promise.resolve(productFunctions.updateProduct(req.body));
        if (removed) {
            res.status(200).json({
                "error": 'Succesfull removed product',
                "success": removed
            })
        } else {
            res.status(403).json({
                "error": 'Something went wrong whilst removing your product, please try again later',
                "success": removed
            })
        }
    } else {
        res.status(404).json({
            "error": "Invalid product details",
            "success": false
        })
    }
}

async function getProductHandler (req, res) {
    if (schemaValidator.verifyGetProductsSchema(req.body)) {
        var products = await Promise.resolve(productFunctions.getUserProducts(req.body));
        if (products) {
            res.status(200).json({
                "error": 'Succesfully fetched products',
                "products": products,
                "success": true
            })
        } else {
            res.status(403).json({
                "error": 'Something went wrong whilst fetching your products, please try again later',
                "products": products,
                "success": false
            })
        }
    } else {
        res.status(404).json({
            "error": "Invalid user details",
            "products": {},
            "success": false
        })
    }
}
module.exports={
    registerProductHandler,
    removeProductHandler,
    updateProductHandler,
    getProductHandler
}