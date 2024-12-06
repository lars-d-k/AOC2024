const input = await Deno.readTextFile("./input.txt");
const lines = input.split("\r\n");

// map to 2d array
const map: string[][] = [];
let [xStart, yStart] = [0, 0];
for (let rowIndex = 0; rowIndex < lines.length; rowIndex++) {
    for (let col = 0; col < lines[rowIndex].length; col++) {
        if (rowIndex == 0) {
            map[col] = [];
        }
        const char = lines[rowIndex][col];
        if (char == "^") {
            map[rowIndex][col] = "X";
            [xStart, yStart] = [col, rowIndex];
        } else {
            map[rowIndex][col] = char;
        }
    }
}
const [x, y] = [xStart, yStart]

// check how many loops we can create by adding 1 object
let looping = 0
for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[row].length; col++) {
        if (map[row][col] === '.') {
            const mapCopy = map.map(r => [...r]);
            mapCopy[row][col] = '#'

            if (isLooping(mapCopy, x, y)) looping++;
        }
    }
}

console.log('loops possible by adding one item', looping)

// check if the map
function isLooping(map: string[][], xPos: number, yPos: number): boolean {
    let [x, y] = [xPos, yPos]
    let inBounds = true
    while (inBounds) {
        const startState = map.map(r => [...r]);

        // up
        while (inBounds) {
            try {
                if (!map[y - 1]) {
                    inBounds = false
                    break
                }
                if (map[y - 1][x] == "#") {
                    break
                }

                y--;
                map[y][x] = "X";
            }
            catch { inBounds = false }
        }

        // right
        while (inBounds) {
            try {
                if (!map[y][x + 1]) {
                    inBounds = false
                    break
                }
                if (map[y][x + 1] == "#") {
                    break
                }

                x++;
                map[y][x] = "X";
            }
            catch { inBounds = false }
        }

        // down
        while (inBounds) {
            try {
                if (!map[y + 1]) {
                    inBounds = false
                    break
                }
                if (map[y + 1][x] == "#") {
                    break
                }

                y++;
                map[y][x] = "X";
            }
            catch { inBounds = false }
        }

        // left
        while (inBounds) {
            try {
                if (!map[y][x - 1]) {
                    inBounds = false
                    break
                }
                if (map[y][x - 1] == "#") {
                    break
                }

                x--;
                map[y][x] = "X";
            }
            catch { inBounds = false }
        }

        const unchanged = map.length === startState.length && map.every((row, i) => row.length === startState[i].length && row.every((val, j) => val === startState[i][j]));
        if (unchanged) {
            return true
        }
    }
    return false
}