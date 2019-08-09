const lowercase = s => s.toLowerCase()
export const transform = scores => {
    const results = {}
    for(let [n, letters] of Object.entries(scores)) {
        for(let letter of letters.map(lowercase)) {
            results[letter] = +n
        }
    }
    return results
}
    
