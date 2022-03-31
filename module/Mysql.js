const mysql = require("mysql");

const connection = {
    host: "localhost",
    user: "root",
    password: "123456",
    database: "thedog"
};

class MySql {
    constructor(connection = {}) {
        this.connection = connection;
    }

    // 查询表
    query({ name, data = null, options = "*", ans = "and", ane = "or" }) {
        if (options instanceof Array) {
            options = options.join(",");
        }

        let sql = `select ${options} from ${name}`;

        let str = "";

        let arr = [];

        if (data !== null) {
            str += " WHERE ";

            let keys = Object.keys(data);

            keys.forEach((el, index) => {
                let val = data[el];
                if (val instanceof Array) {
                    str += '('
                    for (let i = 0; i < val.length; i++) {
                        let v = val[i]
                        str += ` ${el}= '${v}' `;
                        if (i !== val.length - 1) {
                            str += ` ${ane} `
                        }
                    }
                    str += ')'
                } else {
                    str += ` ${el}='${data[el]}' `;
                }
                if (index !== keys.length - 1) {
                    str += `${ans}`;
                }
            });
        }

        return this.linkMySql(sql + str);
    }

    // 插入数据
    insert({ name, options }) {
        let sql = `INSERT INTO ${name} (`;

        let d = "";

        let val = "values(";

        let arr = Object.keys(options);

        let o = [];

        arr.forEach((key, index) => {
            d += `${key}`;
            val += `'${options[key]}'`;

            o.push(options[key]);
            if (index !== arr.length - 1) {
                d += ",";
                val += ",";
            }
        });

        sql = sql + d + ") " + val + ")";


        return this.linkMySql(sql);
    }

    // 修改
    modifyThe({ name, update, options }) {
        let sql = `UPDATE ${name} set`;

        for (let item in update) {
            sql += ` ${item} = '${update[item]}'`;
        }

        sql += ` WHERE `;

        let opArrkey = Object.keys(options);

        for (let item in opArrkey) {
            let key = opArrkey[item]
            sql += ` ${key } = '${options[key]}' `;
            if (item != opArrkey.length - 1) {
                sql += "and"
            }
        }
        return this.linkMySql(sql);
    }


    deleteRecord({ name, options, card = "any" }) {
        let sql = `DELETE FROM ${name} WHERE `

        let keys = Object.keys(options);

        keys.forEach((key, index) => {
            // 是否为不等于
            let boolean = key.indexOf('!') == -1

            if (boolean) {
                sql += ` ${key} = '${options[key]}' `
            } else {
                sql += ` ${key} != '${options[key]}' `
            }

            if (index !== keys.length - 1) {
                sql += card
            }
        })


        return this.linkMySql(sql)
    }

    // 链接数据库的
    linkMySql(sql, arr = []) {
        console.log(sql);
        let connection = mysql.createConnection(this.connection);

        connection.connect();

        const p = new Promise((resolve, reject) => {
            connection.query(sql, ...arr, function(err, res) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(res);
            });
        });

        connection.end();

        return p;
    }


    // 修改
    modifyTheArr({ name, update, options }) {
        let sql = `UPDATE ${name} set`;

        for (let item in update) {
            sql += ` ${item} = '${update[item]}'`;
        }

        sql += ` WHERE `;

        let opArrkey = Object.keys(options);

        for (let key in opArrkey) {
            let item = opArrkey[key]
            options[item].forEach((el, index) => {
                sql += ` ${item} = '${el}' `
                if (index != options[item].length - 1) {
                    sql += "or"
                }
            })
        }
        return this.linkMySql(sql);
    }
}

const msql = new MySql(connection);

module.exports = msql;