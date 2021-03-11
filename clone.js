var obj1 = {
    a: 1,
    b: true,
    c: undefined,
    d: null,
    e: [1, 2, 3],
    f: function (i) {
        console.log(i)
    },
    h: {
        g: '1',
        h: 'h',
        i: new Date()
    },
    g: /^\d+$/
}

/**
 * 浅克隆
 * @param {Object} obj 
 */
function clone(obj) {
    var res = {}
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) res[key] = obj[key]
    }
    return res
}

var obj2 = clone(obj1)

// 浅克隆ES6写法
var obj3 = { ...obj1 }


// 深克隆一般写法（不支持Function；Date；RegExp等）
var objToString = JSON.stringify(obj1)
var obj4 = JSON.parse(objToString)

/**
 * 深克隆
 * @param {Object} obj 
 */
function deepClone(obj) {
    if (obj === null) return null
    if (typeof obj != 'object') return obj
    if (obj instanceof Date) return new Date(obj)
    if (obj instanceof RegExp) return new RegExp(obj)
    if (obj instanceof Array) {
        var arr = []
        for (var i in obj) {
            arr.push(obj[i])
        }
        return arr
    }

    var res = {}
    for (var key in obj) {
        res[key] = deepClone(obj[key])
    }
    return res
}