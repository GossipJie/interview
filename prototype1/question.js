// 阿里面试题 考察变量提升 VO GO
function Foo () {
    getName = function () {
        console.log(1)
    }
    return this // 没有，返回window对象，即全局的this
}

Foo.getName = function () {
    console.log(2)
}

Foo.prototype.getName = function () {
    console.log(3)
}

var getName = function() {
    console.log(4)
}

function getName() {
    console.log(5)
}

Foo.getName();
getName()
// Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();

// 头条面试题 考察宏任务和微任务 EventLoop
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2() {
    console.log('async2')
}

console.log('script start');

setTimeout(function(){
    console.log('setTimeout')
},0)

async1()

new Promise(function(resolve){
    console.log('promise1')
    resolve();
}).then(function() {
    console.log('promise2')
})

console.log('script end')

