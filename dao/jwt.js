const jwt = require("jsonwebtoken");

const mysql = require("../module/Mysql");

class Token {
    static secret = "dwooksdjadkowndjqdijsnd00910238u319dnmdmnaskndwmmn11";

    static createToken(data, tiem = 60 * 60 * 24 * 1000) {
        let token = jwt.sign(data, this.secret, {
            expiresIn: tiem
        });
        return token;
    }

    static verifyToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this.secret, (error, resulut) => {
                if (error) {
                    return reject(error);
                }
                // 判断token 是否与数据库的一致
                mysql
                    .query({
                        name: "schemauser",
                        data: {
                            userid: resulut.id
                        }
                    })
                    .then(
                        v => {
                            let value = v[0];

                            if (value == undefined || value.token !== token) {
                                reject(error);
                            } else {
                                resolve(resulut);
                            }
                        },
                        e => {
                            reject(error);
                        }
                    );
            });
        });
    }

    static parsing(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this.secret, (error, resulut) => {
                if (error) {
                    return reject(error);
                }
                resolve(resulut);
            });
        });
    }
}

module.exports = Token;