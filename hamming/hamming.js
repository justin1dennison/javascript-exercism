const plus = (x, y) => x + y
const isEmpty = s => s.length === 0

export const compute = (fst, snd) => {
    if(isEmpty(fst) && !isEmpty(snd))
        throw new Error('left strand must not be empty')
    if(isEmpty(snd) && !isEmpty(fst))
        throw new Error('right strand must not be empty')
    if(fst.length !== snd.length)
        throw new Error('left and right strands must be of equal length')
    return [...fst]
        .map((letter, idx) => snd[idx] != letter ? 1 : 0)
        .reduce(plus, 0)

}
    
