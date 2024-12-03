let {data} = require('./data.json')

// find mul() do() don't()
function findItems(input) {
    let regex = /(mul\([0-9]+,[0-9]+\))|(do\(\))|(don't\(\))/g;
    return input.match(regex);
}

function findNumbers(input) {
    let regex = /[0-9]+/g;
    return input.match(regex).map(Number);
}

function mulIt() {
    const items = findItems(data)
    
    total = 0
    enabled = true
    for (let i = 0; i < items.length; i++) {
        const item = items[i]
        if (item.startsWith('do(')) {
            enabled = true
        }
        else if (item.startsWith('don\'t(')) {
            enabled = false
        }
        else if (enabled) {
            const [a, b] = findNumbers(item)
            total += a * b
        }
    }
    console.log('total multiple with do\'s and don\'ts: ', total)
}
mulIt()