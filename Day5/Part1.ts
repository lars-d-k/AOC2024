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
    const middle = items[Math.floor((items.length - 1) / 2)]

    while (true) {
        const item = items.pop()!
        if (rules[item]) {
            if (items.filter(x => rules[item].includes(x)).length > 0) {
                break
            }
        }

        if (items.length == 0) {
            result += +middle
            break
        }
    }
}

console.log('Middle page number for correct print orders: ', result)