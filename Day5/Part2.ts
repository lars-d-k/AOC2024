const input = await Deno.readTextFile("./input.txt");
const [rulesSection, printSection] = input.split("\r\n\r\n")

// process rules
const rulesLines = rulesSection.split("\r\n")
const rules: {[key: string]: string[]} = {}

for (let i = 0; i < rulesLines.length; i++) {
    const [key, rule] = rulesLines[i].split('|');
    if (!rules[key]) {
        rules[key] = [];
    }
    rules[key].push(rule)
}

// process print queues with rules
const printLines = printSection.split("\r\n")
let result = 0

for (let i = 0; i < printLines.length; i++) {
    const items = printLines[i].split(',');

    if (inOrder(items)) {
        continue
    }
    
    while (true) {
        if (tryOrderItems(items)) {
            result += +items[Math.floor((items.length - 1) / 2)]
            break
        }
    }
}

function tryOrderItems(arr: string[]) {
    for (let i = arr.length - 1; i > 0; i--) {
        const item = arr[i];
        if (rules[item]) {
            const prevItems = arr.slice(0, i)
            const ruleViolations = prevItems.filter(x => rules[item].includes(x))
            if (ruleViolations.length > 0) {
                const violationIndexes = ruleViolations.map(violation => +arr.indexOf(violation))
                arr.splice(Math.min(...violationIndexes), 0, arr.splice(i, 1)[0]);
                return false
            }
        }
        
    }
    return true
}


function inOrder(arr: string[]) {
    for (let i = arr.length - 1; i > 0; i--) {
        const item = arr[i];
        if (rules[item]) {
            const prevItems = arr.slice(0, i)
            const ruleViolations = prevItems.filter(x => rules[item].includes(x))
            if (ruleViolations.length > 0) {
                return false
            }
        }
    }
    return true
}

console.log('Middle page number for correct print orders: ', result)