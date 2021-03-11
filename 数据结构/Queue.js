function Queue() {
    this.data = []
    this.enqueue = enqueue
    this.dequeue = dequeue
    this.front = front
    this.back = back
    this.toString = toString
    this.empty = empty

}

function enqueue(e) {
    this.data.push(e)
}

function dequeue() {
    return this.data.shift();
}

function front() {
    return this.data[0];
}

function back() {
    return this.data[this.data.length - 1];
}

function toString() {
    var resStr = ''
    for(var i=0;i<this.data.length; ++i) {
        retStr += this.data[i] + "\n"
    }
    return resStr
}

function empty() {
    if (this.data.length === 0) return true
    else return false
}