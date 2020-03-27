const db = require('../databases/db').db

/**
 * @dev getUserProducts responsible for fetching all product belonging to a user
 * @param user username 
 */
async function getUserProducts(user) {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM Product where owner='${user.username}'`, (err, products) => {
            if (!products) {
                resolve({})
            } else {
                resolve(products)
            }
        })
    })
}

/**
 * @dev uploadProduct responsible for adding a new product to a users list
 * @param product the product to be added to the users product list
 */
async function uploadProduct(product) {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO Product (owner,product_id,product_name,category,farmer_phone_number,quantity,country,price) VALUES('${product.username}','${product.product_id}','${product.product_name}','${product.category}','${product.farmer_phone_number}','${product.quantity}','${product.country}','${product.price}')`, [], (err) => {
            if (err) {
                resolve(false)

            } else {
                resolve(true)
            }
        })
    })
}
/**
 * @dev getProduct responsible for fetching a product from the users list
 * @param product the product id and make
 */
async function getProduct(product) {
    return new Promise((resolve, reject) => {
        db.get(`Select * from Product where product_id='${product.product_id}' AND category='${product.category}'`, (err, product) => {
            if (!product) { //sometimes undefined so just return an empty object
                resolve({})
            } else {
                resolve(product)
            }
        })
    })
}

/**
 * @dev removeProduct responsible for removing a product from a users product list
 * @param product the product to be removed 
 */
async function removeProduct(product) {
    return new Promise((resolve, reject) => {
        db.run(`DELETE From Product where product_id='${product.product_id}' AND category='${product.category}'`, async (err, ok) => {
            var queryProduct = await Promise.resolve(getProduct(product)) //@dev query product to check if it has been removed
            if (!queryProduct) { //sometimes undefined so just return an empty object
                resolve(false)
            } else {
                resolve(true)
            }
        })
    })
}
/**
 * @dev responsible for update the details of a product
 * @param product represents the product containing the new details
 */
async function updateProduct(product) {
    return new Promise((resolve, reject) => {
        db.run(`UPDATE Product SET model= '${product.model}', username= '${product.username}', product_id= '${product.product_id}', product_name= '${product.product_name}', category= '${product.category}', farmer_phone_number= '${product.farmer_phone_number}', quantity= '${product.quantity}', country= '${product.country}', price= '${product.price}`, (err, ok) => {
            if (err) {
                resolve(false)
            } else {
                resolve(true)
            }
        })
    })
}

module.exports={
    updateProduct,
    removeProduct,
    getProduct,
    uploadProduct,
    getUserProducts
}