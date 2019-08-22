const partition = function* partition(iter) {
    let position = 0
    let last
    while(position < iter.length){
        const results = []
        last = iter[position]
        while(iter[position] === last) {
            results.push(iter[position])
            position += 1
        }
        yield results
    }
}

const groups = function* groups(s){
    let pattern = /\d{0,}[a-zA-Z ]/ig
    let found
    while(found = pattern.exec(s)) {
        const [group] = found
        if(group.length === 1) {
            yield [1, group]
        } else {
            const count = group.slice(0, group.length - 1)
            const letter = group.slice(group.length - 1)
            yield [+count, letter]
        }
    }
}

const repeat = (s, n) => {
    const result = []
    for(let i = 0; i < n; i += 1) result.push(s)
    return result.join('')
}

export const encode = s =>
    [...partition(s)]
    .map(chunk => `${chunk.length > 1  ? chunk.length : ''}${chunk[0]}`)
    .join('')

export const decode = s =>
    [...groups(s)]
    .map(([count, letter]) => repeat(letter, count))
    .join('')
