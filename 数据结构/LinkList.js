// 节点类
function Node (element) {
    this.element = element
    this.next = null

}

/**
 * 单向链表
 */
function LList () {
    this.head = new Node("head")
    this.find = find
    this.insert = insert
    this.remove = remove
    this.display = display
}

function find (item) {
    var currNode = this.head;
    while(currNode.element != item) {
        currNode = currNode.next
    }
    return currNode
}

function insert (newElement, item) {
    var newNode = new Node(newElement)
    var currNode = this.find(item)
    newNode.next = currNode.next
    currNode.next = newNode
}

/**
 * 删除节点
 * @param {String} item 
 */
function remove (item) {
    var cNode = this.find(item)
    cNode.element = cNode.next.element
    cNode.next = cNode.next.next
}

function display () {
    var currNode = this.head
    var str = 'head'
    while(!(currNode.next === null)) {
        str = str + ' -> ' + currNode.next.element
        currNode = currNode.next
    }
    console.log(str + ' -> null')
}

// 测试
var cities = new LList()

cities.insert('北京', 'head')
cities.insert('上海', '北京')
cities.insert('南京', '上海')
cities.insert('南昌', '南京')

cities.display()

cities.remove('上海')

cities.display()