const input = await Deno.readTextFile("./input.txt");
const lines = input.split("\r\n");

// map to 2d array
const map: string[][] = [];
let [x, y] = [0, 0];
for (let rowIndex = 0; rowIndex < lines.length; rowIndex++) {
    for (let charIndex = 0; charIndex < lines[rowIndex].length; charIndex++) {
        if (rowIndex == 0) {
            map[charIndex] = [];
        }
        const char = lines[rowIndex][charIndex];
        if (char == "^") {
            map[rowIndex][charIndex] = "X";
            [x, y] = [charIndex, rowIndex];
        } else {
            map[rowIndex][charIndex] = char;
        }
    }
}

// walk until out of bounds

let inBounds = true
while (inBounds) {
    while (inBounds && up()) { /* up */ }
    while (inBounds && right()) { /* right */ }
    while (inBounds && down()) { /* down */ }
    while (inBounds && left()) { /*left */ }
}

// count crossed cells
const steps = map.flat().reduce((acc, pos) => {
    return acc + (pos == 'X' ? 1 : 0)
}, 0);
console.log('total guard positions', steps);

// walking functions
function up(): boolean {
    if (!map[y - 1]) {
        inBounds = false
        return false
    }

    if (map[y - 1][x] == "#") {
        return false;
    }

    y--;
    map[y][x] = "X";
    return true;
}

function down(): boolean {
    if (!map[y + 1]) {
        inBounds = false
        return false
    }

    if (map[y + 1][x] == "#") {
        return false;
    }

    y++;
    map[y][x] = "X";
    return true;
}

function left(): boolean {
    if (!map[y][x - 1]) {
        inBounds = false
        return false
    }

    if (map[y][x - 1] == "#") {
        return false;
    }

    x--;
    map[y][x] = "X";
    return true;
}

function right(): boolean {
    if (!map[y][x + 1]) {
        inBounds = false
        return false
    }

    if (map[y][x + 1] == "#") {
        return false;
    }

    x++;
    map[y][x] = "X";
    return true;
}