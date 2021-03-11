/**
 * 字典：以键-值对形式存储数据的数据结构；类似电话簿，字典
 */
function Dictionary () {
    this.dataStore = []
    this.add = add
    this.remove = remove
    this.find = find
    this.showAll = showAll
    // 辅助功能
    this.count = count
    this.clear = clear
}

function add (key, val) {
    this.dataStore[key] = val
}

function find (key) {
    return this.dataStore[key]
}

function remove (key) {
    delete this.dataStore[key]
}

function showAll () {
    console.log(Object.keys(this.dataStore))
    for (var key of Object.keys(this.dataStore).sort()) {
        // console.log('key', key, 'val', this.dataStore[key])
        console.log(key, '->', this.dataStore[key])
    }
    // Object.keys(this.dataStore).forEach(key => {
    //     console.log(key, '->', this.dataStore[key])
    // })
}

function count () {
    var n = 0
    for (var key in Object.keys(this.dataStore)) {
        ++n
    }
    return n
}

function clear () {
    for (var key in Object.keys(this.dataStore)) {
        delete this.dataStore[key]
    }
}

var dicts =  new Dictionary()
dicts.add('Mike', '123')
dicts.add('Cidy', '456')
dicts.add('Mary', '18')
dicts.add('Xiaofeiji', '20')

console.log('字典总数：', dicts.count())
dicts.showAll()

// 练习
function fun (str) {
    var dicts = new Dictionary()
    var arr = str.split()
    arr.forEach(element => {
        
    });
}