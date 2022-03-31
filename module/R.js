class R {
    // 判断常见的错误 如果为 就是验证 全部 传进来的 参数 列入 a==null || b == null  如果返回是 true 那就是 他们中其中有个为 false
    static whetherEmpty(...val) {
        let boolean = false
        for (let item in val) {
            if (!Boolean(val[item])) {
                return true
            }
        }
        return boolean;
    }

    // 多减少多少if 加入  if(a ==3)  if(b == 4);  支持异步函数 必须是一个函数否则将会抛出一个错误
    static execute(...val) {
        return new Promise(async(resolve, reject) => {
            let data = {}
                // 默认不通过
            for (let i = 0; i < val.length; i++) {
                let fun = val[i]
                try {
                    let result = fun instanceof Function && await fun(data)
                    if (result == false) {
                        reject(i)
                    }
                    data[i] = result
                } catch {
                    reject(i)
                }
            }
            resolve(data);
        })
    }

    // 传入跳转全部正确  a==3 && b == 4  


    /*
        格式

        {
            value, 就是需要比较的值
            type type 就是选中器 Object Array 比如是 a instanceof Array
            options: value = options
        }
    
    
    */
    static allCorrect(...val) {
        for (let i = 0; i < val.length; i++) {
            let v = val[i];
            if (v instanceof Object) {
                const { value, type, options } = v;

                let result = null,
                    result2 = null;

                if (!R.whetherEmpty(type)) {
                    result = type == value.constructor;
                }

                if (!R.whetherEmpty(options)) {
                    result2 = value === options
                }

                result = result === null ? true : result

                result2 = result2 === null ? true : result2


                if (!(value && result2 && result)) return false;

            } else {
                if (R.whetherEmpty(v)) {
                    return false;
                }
            }
        }

        return true;
    }
}

module.exports = R

module.whetherEmpty = R.whetherEmpty

module.execute = R.execute

module.allCorrect = R.allCorrect