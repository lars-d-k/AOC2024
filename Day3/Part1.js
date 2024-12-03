let {data} = require('./data.json')

function findMultipliers(input) {
    let regex = /mul\([0-9]+,[0-9]+\)/g;
    return input.match(regex);
}

function findNumbers(input) {
    let regex = /[0-9]+/g;
    return input.match(regex).map(x => parseInt(x));
}

function mulIt() {
    multipliers = findMultipliers(data)
    total = 0
    for (let i = 0; i < multipliers.length; i++) {
        numbers = findNumbers(multipliers[i])
        total += numbers[0] * numbers[1]
    }
    console.log('total multiple: ', total)
}
mulIt()