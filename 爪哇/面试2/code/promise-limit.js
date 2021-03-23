/**
 * 
 * @param {*} urls 
 * @param {*} handler 
 * @param {*} limit 最大并发量
 */
function limitLoad(urls, handler, limit) {
    // 对数组做一个拷贝
    const sequence = [].concat(urls);

    let promises = []

    // 并发请求到最大数
    promises = sequence.splice(0, limit).map((url, index) => {
        return handler(url).then(() => {
            //  这里返回的index是任务在Promise的脚标，
            //  用于在Promise.race 之后找到完成的任务脚标
            return index
        })
    });

    let p = Promise.race(promises);

    for (let i = 0; i < sequence.length; i++) {
        console.log(i)
        p = p.then((res) => {
            promises[res] = handler(sequence[i]).then(() => {
                return res
            })
            
            return Promise.race(promises);
        })
    }

}

const urls = [{
    info: 'img1',
    time: 2000
}, {
    info: 'img2',
    time: 1000
}, {
    info: 'img3',
    time: 4000
}, {
    info: 'img5',
    time: 1000
}, {
    info: 'img6',
    time: 6000
}, {
    info: 'img7',
    time: 2000
}, {
    info: 'img8',
    time: 2000
}, {
    info: 'img9',
    time: 2000
}, {
    info: 'img10',
    time: 2000
}, {
    info: 'img11',
    time: 2000
}, {
    info: 'img12',
    time: 2000
}];

// 模拟加载图片
function loadImg(url) {
    return new Promise((resolve, reject) => {
        console.log("----" + url.info + " start!");
        setTimeout(() => {
            console.log(url.info + " OK!!!");
            resolve();
        }, url.time)
    })
}

limitLoad(urls, loadImg, 3)