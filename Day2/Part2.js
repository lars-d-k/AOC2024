let data = require('./data.json')

function isAscendingCorrectlyDamper(arr) {
    let res = isAscendingCorrectly(arr)
    if (res == -1) {
        return true
    }
    const b = arr.filter((_, index) => res !== index)
    const a = arr.filter((_, index) => res - 1 !== index)
    res = isAscendingCorrectly(a) == -1 || isAscendingCorrectly(b) == -1
    return res
}

function isAscendingCorrectly(arr) {
    for (let i = 1; i < arr.length; i++) {
        a = arr[i - 1]
        b = arr[i]

        if (a > b) return i
        if (b == a) return i
        if ((b - a) > 3) return i
    }
    return -1;
}

function isDescendingCorrectlyDamper(arr) {
    let res = isDescendingCorrectly(arr)
    if (res == -1) {
        return true
    }
    const b = arr.filter((_, index) => res !== index)
    const a = arr.filter((_, index) => res - 1 !== index)
    res = isDescendingCorrectly(a) == -1 || isDescendingCorrectly(b) == -1
    return res
}

function isDescendingCorrectly(arr) {
    for (let i = 1; i < arr.length; i++) {
        a = arr[i - 1]
        b = arr[i]

        if (a < b) return i
        if (a == b) return i
        if ((a - b) > 3) return i
    }
    return -1;
}

function safety() {
    let safe = 0
    for (let i = 0; i < data.length; i++) {
        const items = data[i];
        if (isAscendingCorrectlyDamper(items) || isDescendingCorrectlyDamper(items)) {
            safe += 1;
        }
    }
    console.log('safe reports with damper: ', safe)
}
safety()