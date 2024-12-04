const data = require('./data.json')

function checkOpposites(arr, f, s, comparisons) {
    if (!arr[f.x] || !arr[f.x][f.y] || !arr[s.x] || !arr[s.x][s.y]) return false
    return comparisons.filter(coord => coord != arr[f.x][f.y] && coord != arr[s.x][s.y]).length == 0
}

function checkXmas(arr, x, y) {
    if (arr[x][y] != "A") return false
    
    return (checkOpposites(arr, {x: x - 1, y: y - 1}, {x: x + 1, y: y + 1}, ["M", "S"]) &&
        checkOpposites(arr, {x: x + 1, y: y - 1}, {x: x - 1, y: y + 1}, ["M", "S"]))
}

function xShapedMas() {
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

    console.log('X-MAS count: ', count)
}
xShapedMas()