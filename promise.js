function promiseAll (arr) {
    return new Promise((resolve, reject) => {
        var res = []
        var count = 0
        for (var i=0; i<arr.length; i++) {
            arr[i].then(r => {
                res[i] = r
                count++
                if (count === arr.length) {
                    resolve(res[i])
                }
            }).catch(err=>{
                reject(err)
            })
        }
    })
}