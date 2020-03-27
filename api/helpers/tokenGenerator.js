require('dotenv').config({
    path: '../config/vars.env',
    encoding: 'utf8'
})
const config = require('../config/config');
const crypto = require('crypto')
const jwt = require('jsonwebtoken');
const secret = config.secret

/**
 * @dev createHash responsible for creating a one way hash of the user password
 * @param password the user password to be hashed
 */
function createHash(password) {
    var hash = crypto.createHash('sha256')
        .update(password)
        .digest('hex');
    return hash
}

function getToken(username) {
    let token = jwt.sign({
            username: username
        },
        secret, {
            expiresIn: '1h' // expires in 1 hour
        }
    );
    return token
}

module.exports = {
    createHash,
    getToken
}