// 防抖;
// 当持续触发某一事件时，一段时间没有再触发事件时，事件处理函数才会执行
// 如果设定的时间到来之前，又一次触发了事件，则重新延迟
function debounce(fn, delay) {
    var timer = null
    return function() {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    }
}

// 节流：当持续触发某一事件，每间隔一定时间执行一次
function throttle(fn, delay) {
    var flag = true
    return function(){
        if (!flag) {
            return false
        }
        flag = false
        var timer = setTimeout(() => {
            fn.apply(this, arguments)
            flag = true
        }, delay)
    }
}

function throttle(fn, delay) {
    var lastTime = 0
    return function() {
        var now = new Date()
        if (now - letter >= delay){
            fn.apply(this, arguments)
            lastTime = new Date
        }
    }
}