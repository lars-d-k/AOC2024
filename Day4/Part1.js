const data = require('./data.json')

function checkDirection(callback, arr, x, y) {
    const chars = ["M", "A", "S"]
    for (let i = 0; i < chars.length; i++) {
        ({x, y} = callback(x, y));
        if (!arr[x] || !arr[x][y] || arr[x][y] != chars[i]) return false
    }
    return true
}

function checkXmas(arr, x, y) {
    let count = 0
    if (arr[x][y] != "X") return count
    
    if (checkDirection((x, y) => ({x: x - 1, y: y - 1}), arr, x, y)) count += 1
    if (checkDirection((x, y) => ({x: x - 1, y: y}), arr, x, y)) count += 1
    if (checkDirection((x, y) => ({x: x - 1, y: y + 1}), arr, x, y)) count += 1
    if (checkDirection((x, y) => ({x: x, y: y - 1}), arr, x, y)) count += 1
    if (checkDirection((x, y) => ({x: x, y: y + 1}), arr, x, y)) count += 1
    if (checkDirection((x, y) => ({x: x + 1, y: y - 1}), arr, x, y)) count += 1
    if (checkDirection((x, y) => ({x: x + 1, y: y}), arr, x, y)) count += 1
    if (checkDirection((x, y) => ({x: x + 1, y: y + 1}), arr, x, y)) count += 1
    return count
}

function xMas() {
    let parsedData = []
    let count = 0
    for (let i = 0; i < data.length; i++) {
        parsedData[i] = [...data[i]]
    }

    for (let x = 0; x < parsedData.length; x++) {
        for (let y = 0; y < parsedData[x].length; y++) {
            count += checkXmas(parsedData, x, y)
        }
    }

    console.log('XMAS count: ', count)
}
xMas()