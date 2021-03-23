// 大体实现思路：
// 1. 保留原生xhr对象
// 2. 将XMLHttpRequest对象置为新的对象
// 3. 对xhr对象的方法重写后放入新的对象中
// 4. 对属性进行重写 然后放到新的对象中

class XhrHook {
    constructor(beforeHooks = {}, afterHooks = {}) {
        this.XHR = window.XMLHttpRequest; // 保存原有的xhr
        this.beforeHooks = beforeHooks;
        this.afterHooks = afterHooks;
        this.init()
    }

    init() {
        let _this = this
        // 像这样，把XMLHttpRequest赋值为一个新的函数，用户全局访问到的就是我们自己写的新的函数。
        window.XMLHttpRequest = function () {
            this._xhr = new _this.XHR();    // 在实例上挂一个保留的原生的xhr实例 
            _this.overwrite(this)
        }
    }

    /**重写方法和属性 */
    overwrite(proxyXHR) {
        for (let key in proxyXHR._xhr) {
            if (typeof proxyXHR._xhr[key] === 'function') {
                this.overwriteMethod(key, proxyXHR);
                continue;
            }
            this.overwriteAttributes(key, proxyXHR);
        }
    }

    /**重写方法 */
    overwriteMethod(key, proxyXHR) {
        let beforeHooks = this.beforeHooks;
        let afterHooks = this.afterHooks;
        proxyXHR[key] = (...args) => {
            // 拦截
            if (beforeHooks[key]) {
                const res = beforeHooks[key].apply(proxyXHR, args);
                if (res === false) {
                    return;
                }
            }

            // 执行原生xhr实例中对应的方法
            const res = proxyXHR._xhr[key].apply(proxyXHR._xhr, args);

            // 原生方法执行完后执行的钩子
            afterHooks[key] && afterHooks[key].call(proxyXHR._xhr, res);

            return res
        }
    }

    /**重写属性 */
    overwriteAttributes(key, proxyXHR) {
        Object.defineProperty(proxyXHR, key, this.setProperyDescriptor(key, proxyXHR));
    }

    setProperyDescriptor(key, proxyXHR) {
        let obj = Object.create(null);
        let _this = this

        obj.set = function (val) {
            // 如果属性不是on开头，直接挂载
            if (!key.startsWith('on')) {
                proxyXHR['__' + key] = val;
                return
            }

            // 如果是on开头，查看是否有要执行的钩子
            if (_this.beforeHooks[key]) {
                // 包装一下，先执行钩子，再执行函数
                this._xhr[key] = function (...args) {
                    _this.beforeHooks[key].call(proxyXHR);
                    val.apply(proxyXHR, args);
                }
                return;
            }

            // 如果没有，直接挂载
            this._xhr[key] = val;
        }

        obj.get = function () {
            // 返回重写的属性
            return proxyXHR['__' + key] || this._xhr[key];
        }

        return obj;
    }
}

// 测试
new XhrHook({
    open: function () {
        console.log('open')
    },
    onload: function () {
        console.log('onload')
    },
    onreadystatechange: function () {
        console.log('onreadystatechange')
    },
    onerror: function () {
        console.log('onerror')
    }
})

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.baidu.com', true);
xhr.send();
xhr.onreadystatechange = function (res) {
    console.log(res)
}
xhr.onerror = function (e) {
    console.log(e)
}