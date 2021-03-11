function Stack () {
    this.data = []
    this.top = 0
    this.push = push
    this.pop = pop
    this.peek = peek
    // 新增两个
    this.length = length
    this.clear = clear
}

// 进栈
function push (element) {
    this.data[this.top++] = element
}

// 出栈
function pop () {
    return this.data[--this.top]
}

// 返回栈顶元素
function peek () {
  return this.data[this.top-1]
}

function length () {
    return this.top
}

function clear () {
    this.top = 0
}

// 斐波那切数列实现 1 1 2 3 5 8 ... f(n-2)+f(n-1)
 function fun (n) {
     if (n < 2) return n === 0 ? 0 : 1
     return fun(n-2) + fun(n-1)
 }

 console.log(fun(6))

// 栈模拟递归
// 求阶层
function factorial (n) {
    if (n === 0) return 1
    else
    return n * factorial(n-1)
}

function fact(n) {
    var s = new Stack()
    while (n > 1) {
        s.push(n--)
    }
    var p = 1
    while(s.length() > 0) {
        p = p * s.pop()
    }
    return p
}
console.log(factorial(5))
console.log(fact(5))