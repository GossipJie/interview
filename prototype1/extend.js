function Foo (name) {
    this.name = name
}

Foo.prototype.myName = function () {
    return this.name
}

function Bar (name, label) {
    Foo.call(this, name)
    this.label = label
}

Bar.prototype = new Foo()

Bar.prototype.myLabel = function () {
    return this.label
}

var b = new Bar('夏可馨', '小可爱')

b.myName()
b.myLabel()

