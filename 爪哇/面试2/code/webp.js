/**
 * 判断浏览器是否支持webp格式
 */
function checkWebp() {
    try {
        return document.createElement('canvas')
            .toDataURL('image/webp')
            .indexOf('data:image/webp') === 0
    } catch (e) {
        return false
    }
}

const supportWebp = checkWebp();

export function getWebpImageUrl(url) {
    if (!url) {
        throw Error('url 不能为空');
    }

    if (url.startWith('data:')) {
        return url;
    }

    if (!supportWebp) {
        return url
    }

    return url + '?x-oss-processxxxxxxxxx'
}