const letters = 'abcdefghijklmnopqrstuvwxyz'
const isLetter = s => new Set(letters).has(s)

export const isPangram = s =>  {
    const letters = new Set([...s.toLowerCase()].filter(isLetter))
    return letters.size === 26
}

