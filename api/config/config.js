require('dotenv').config({
    path: '../config/vars.env',
    encoding: 'utf8'
})

module.exports = {
    secret: process.env.SECRET
};