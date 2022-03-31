const mysql = require('../../module/Mysql');

function verifyEmailAccounts(account, email) {
    return new Promise(async resolve => {
        let result = await mysql.query({
            name: 'schemauser',
            data: {
                account,
                email
            }
        })

        console.log(result)

        result[0] == undefined ? resolve(false) : resolve(true)
    })
}


module.exports = verifyEmailAccounts