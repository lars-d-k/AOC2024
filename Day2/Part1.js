let data = require('./data.json')

function isAscendingCorrectly(arr) {
    for (let i = 1; i < arr.length; i++) {
        a = arr[i - 1]
        b = arr[i]

        if (a > b) return false
        if (b == a) return false
        if ((b - a) > 3) return false
    }
    return true;
}

function isDescendingCorrectly(arr) {
    for (let i = 1; i < arr.length; i++) {
        a = arr[i - 1]
        b = arr[i]
        
        if (a < b) return false
        if (a == b) return false
        if ((a - b) > 3) return false
    }
    return true;
}

function safety() {
    safe = 0
    for (let i = 0; i < data.length; i++) {
        items = data[i];
        if (isAscendingCorrectly(items) || isDescendingCorrectly(items)) {
            safe += 1;
        }
    }
    console.log('safe reports: ', safe)
}
safety()