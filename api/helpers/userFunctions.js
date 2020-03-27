const db = require('../databases/db')
const tokenGenerator = require('../helpers/tokenGenerator')
/**
 * @dev registerUser checkAndRegister checks if a user is registered and registers them
 * @param user the user to be registered
 */
async function registerUserDetails(user) {
    var passwordHash = tokenGenerator.createHash(user.password)
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM User where username='${user.username}'`, (err, userTemp) => {
            if (!userTemp) {
                db.run(`REPLACE INTO user (username,password) VALUES('${user.username}','${passwordHash}')`)
                resolve({
                    "success": true
                })
            } else {
                resolve({
                    "success": false
                })
            }
        })
    })
}



module.exports={
    registerUserDetails
}