let {a, b} = require('./data.json')

function similarity_score() {    
    similarity = 0;
    for (let i = 0; i < 1000; i++) {
        aEl = a.shift()
        similarity += (b.filter(x => x == aEl).length * aEl)
    }
    console.log('similarity score: ', similarity)
}
similarity_score()