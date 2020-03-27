
const Joi = require("@hapi/joi");


/**============================== Schema Functions ==============================*/
/**
 * @dev verifySignupSchema responsible for verifying the user json object passed in by user 
 *@param user the user json object to be verified contains user details
 */
function verifySignupSchema(user) {
    const schema = Joi.object()
        .keys({
            username: Joi.string()
                .alphanum()
                .min(2)
                .max(60)
                .required(),
            password: Joi.string()
                .alphanum()
                .min(8)
                .max(65)
                .required()
        })
        .with("username", ["password"]);

    try {
        const result = schema.validate(user);
        return !result.error;
    } catch (err) {
        return false;
    }
}
/**
 * @dev verifyProductSchema responsible for verifying the product json object passed in by user 
 *@param product the user json object to be verified
 */

function verifyProductSchema(product) {
    const schema = Joi.object()
        .keys({
            product_id: Joi.number()
                .required(),
            product_name: Joi.string()
                .alphanum()
                .min(6)
                .max(60)
                .required(),
            category: Joi.string()
                .alphanum()
                .min(1)
                .max(64)
                .required(),
            farmer_phone_number: Joi.string()
                .alphanum()
                .min(1)
                .max(15)
                .required(),
            quantity: Joi.number()
                .required(),
            country: Joi.string()
                .min(6)
                .max(60)
                .required(),
            price: Joi.number()
                .required(),
            transaction_hash: Joi.string()
                .min(1)
                .max(100)
                .required(),
        })
        .with("username", ["product_id", "product_name", "category", "farmer_phone_number", "quantity", "country", "price", "transaction_hash"]);

    try {
        const result = schema.validate(product);
        return !result.error;
    } catch (err) {
        return false;
    }
}
/**
 * @dev verifyProductRequestSchema responsible for verifying the json object passed in by user requesting 
 * a vehichles details
 *@param product the user json object to be verified
 */
function verifyProductRequestSchema(product) {
    const schema = Joi.object()
        .keys({
            username: Joi.string()
                .alphanum()
                .min(6)
                .max(60)
                .required(),
            product_id: Joi.number()
                .required(),
            category: Joi.string()
                .alphanum()
                .min(1)
                .max(64)
                .required()
        })
        .with("username", ["product_id", "category"]);

    try {
        const result = schema.validate(product);
        return !result.error;
    } catch (err) {
        return false;
    }
}

/**
 * @dev verifyGetProductSchema responsible for verifying the json object passed in by user
 *@param user the user json object to be verified
 */
function verifyGetProductSchema(user) {
    const schema = Joi.object()
        .keys({
            username: Joi.string()
                .alphanum()
                .min(6)
                .max(60)
                .required()
        })
    try {
        const result = schema.validate(user);
        return !result.error;
    } catch (err) {
        return false;
    }
}

module.exports = {
    verifyProductRequestSchema,
    verifyGetProductSchema,
    verifySignupSchema,
    verifyProductSchema
}