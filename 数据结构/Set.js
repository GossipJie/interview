// 集合
// 由一组无序但彼此之间又有一定关系性的成员构成的，每个成员在集合中只能出现一次
// 用大括号将一组成员括起来表示集合；如{0,1,2,3}

// SET类实现
function MySet() {
    this.dataStore = []
    this.add = add
    this.remove = remove
    this.size = size
    this.show = show
    this.contains = contains

    this.union = union
    this.intersect = intersect
    this.subSet = subSet
}

function show() {
    return this.dataStore
}

function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true
    } else {
        return false
    }
}

function remove(data) {
    var pos = this.dataStore.indexOf(data)
    if (pos > -1) {
        this.dataStore.splice(pos, 1)
        return true
    } else {
        return false
    }
}

function size() {
    return this.dataStore.length
}

function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
        return true
    } else {
        return false
    }
}

/**
 * 并集
 * @param {MySet} set 
 */
function union(set) {
    var res = new MySet()
    for (var i = 0; i < this.size(); i++) {
        res.add(this.dataStore[i])
    }
    for (var i = 0; i < set.size(); i++) {
        // if (!res.contains(set.dataStore[i])) {
        //     res.dataStore.push(set.dataStore[i])
        // }
        res.add(set.dataStore[i])
    }
    return res
}

// 求两个集合的交集
function intersect(set) {
    var tempSet = new MySet()
    for (var i = 0; i < this.dataStore.length; i++) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i])
        }
    }
    return tempSet
}

// 判断一个集合是否是另一个集合的子集
function subSet(set) {
    if (this.size() > set.size()) {
        return false
    } else {
        for (var num of this.dataStore) {
            if (!set.contains(num)) {
                return false
            }
        };
        console.log('true')
        return true
    }
}

// 求两个集合的补集
function difference(set) {
    var res = new MySet()
    for (var i = 0; i<this.dataStore.length; i++) {
        if (!set.contains(this.dataStore[i])) {
            res.add(this.dataStore[i])
        }
    }
    return res
}


var names = new MySet()
names.add('Mike')
names.add('Clayton')
names.add('Jennifer')
names.add('Raymond')

var dmp = new MySet()
dmp.add('Raymond')
dmp.add('Cynthia')
dmp.add('Jonathan')
dmp.add('Cynthia')

// 求两个集合的并集
var it = new MySet()
it = names.union(dmp)
console.log(it)

// 求交集
var inter = names.intersect(dmp)
console.log('交集：', inter)

// 判断子集
var subSet1 = new MySet()
subSet1.add('Raymond1')
subSet1.subSet(dmp)