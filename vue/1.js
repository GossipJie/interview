// 什么情况下成立
// var a = {
//     i: 0,
//     // valueOf() {
//     //     console.log('valueOf')
//     // },
//     toString() {
//         // console.log('toString')
//         return ++this.i
//     }
// }

// 数据劫持实现
var i = 0
// Object.defineProperty(global, 'a', {
//     get () {
//         console.log(i)
//         return ++i;
//     },
//     set() {
//         console.log(2)
//     }
// })

// if (a == 1 && a==2 && a==3) {
//     console.log('条件成立')
// }

// 3. 
// var a = [1,2,3]
// a.toString = a.shift
// if (a == 1 && a==2 && a==3) {
//     console.log('3.条件成立')
// }

// 4.


var obj = {} 
obj = new Proxy(obj, {
    get (target, key) {
        return ++i;
    },
    set (target) {

    }
})
if (obj.a == 1 && obj.a==2 && obj.a==3) {
    console.log('4.条件成立')
}