
const numerals = [
    [1000, "M"],
    [900,  "CM"],
    [800,  "DCCC"],
    [700,  "DCC"],
    [600,  "DC"],
    [500,  "D"],
    [400,  "CD"],
    [100,  "C"],
    [90,   "XC"],
    [80,   "LXXX"],
    [70,   "LXX"],
    [60,   "LX"],
    [50,   "L"],
    [40,   "XL"],
    [10,   "X"],
    [9,    "IX"],
    [8,    "VIII"],
    [7,    "VII"],
    [6,    "VI"],
    [5,    "V"],
    [4,    "IV"],
    [1,    "I"]
]

const fromPairs = ps => ps.reduce((acc, pair) => {
    const [k, v] = pair
    acc[k] = v
    return acc
}, {})

const decompose = n => {
    const results = []
    let pos = 0
    let m = n
    while(pos < numerals.length) {
        const [val] = numerals[pos]
        if(val <= m) {
            results.push(val)
            m -= val
        } else {
            pos += 1
        }
    }
    return results
}

export const toRoman = n => {
    const ns = decompose(n)
    const numeralDict = fromPairs(numerals)
    const numeral = ns.map(n => numeralDict[n]).join("")
    return numeral
}
