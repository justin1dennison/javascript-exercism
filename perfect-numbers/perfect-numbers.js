const deficient = 'deficient'
const abundant = 'abundant'
const perfect = 'perfect'
const factors = n => {
    const results = [1]
    let count = 2
    while(count < n){
        if(n % count === 0) results.push(count)
        count += 1
    }
    return results
}
const sum = xs => xs.reduce((x, y) => x + y, 0)

export const classify = n => {
    if(n <= 0) throw new Error('Classification is only possible for natural numbers.')
    const fs = factors(n)
    const total = sum(fs)
    if(total === n && fs.length > 1) return perfect
    if(total < n || fs.length === 1) return deficient
    return abundant

}
