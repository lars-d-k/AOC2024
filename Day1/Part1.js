let {a, b} = require('./data.json')

function total_distance() {
    a = a.sort();
    b = b.sort();
    
    distance = 0;
    for (let i = 0; i < 1000; i++) {
        aEl = a.shift()
        bEl = b.shift()
        distance += Math.abs(aEl - bEl)
    }
    console.log('total distance: ', distance)
}
total_distance()