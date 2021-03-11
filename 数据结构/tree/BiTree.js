// 实现二叉查找树

/**
 * 树节点
 * @param {TElementType} data 
 * @param {BiTNode} left 
 * @param {BiTNode} right 
 */
function BiTNode(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
    // 展示数据
    this.show = show
}

function show() {
    return this.data
}

// 二叉查找树
function BST() {
    this.root = null
    this.insert = insert
    // 遍历二叉查找树
    this.inOrder = inOrder
}

function insert(data) {
    var n = new BiTNode(data, null, null)
    if (this.root === null) {
        return this.root = n
    }
    var currNode = this.root
    if (data < currNode.data) {
        if (currNode.left === null) {
            currNode.left = n
        } else {
            var t = new BST()
            t.root = currNode.left
            t.insert(data)
        }
    } else {
        if (currNode.right === null) {
            currNode.right = n
        } else {
            var t = new BST()
            t.root = currNode.right
            t.insert(data)
            // currNode.right.insert(data)
        }
    }
}

function inOrder (node) {
    if (!(node == null)) {
        inOrder(node.left)
        console.log(node.show())
        inOrder(node.right)
    }
}

var treeTest = new BST();
treeTest.insert(23)
treeTest.insert(45)
treeTest.insert(16)
treeTest.insert(37)
treeTest.insert(3)
treeTest.insert(99)
treeTest.insert(22)

inOrder(treeTest.root)
console.log(treeTest)