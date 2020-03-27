const userFunctions = require('../helpers/userFunctions');
const tokenGenerator = require('../helpers/tokenGenerator')
const schemaValidator = require('../helpers/schemaValidators')
const productFunctions = require('../helpers/productFunctions')

async function registerUserHandler (req, res) {
    if (schemaValidator.verifySignupSchema(req.body)) {
        var registered = await userFunctions.registerUserDetails(req.body)
        if (registered.success) {
            res.status(200).send({
                "error": "Sign-up succesfull",
                "success": registered.success,
                "token": tokenGenerator.getToken(req.body.username),
                "products": []
            })
        } else {
            var products = await Promise.resolve(productFunctions.getUserProducts(req.body.username))
            res.status(403).send({
                "error": "user already registered",
                "success": registered.success,
                "token": tokenGenerator.getToken(req.body.username),
                "products": products
            })
        }
    } else {
        res.status(400).send({
            "error": "invalid user details",
            "sucess": false,
            "token": ""
        })
    }
}

module.exports = {
    registerUserHandler
}