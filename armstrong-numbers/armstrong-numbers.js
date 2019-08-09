const plus = (x, y) => x + y
const digits = n => {
    const results = []
    while(n > 0) {
        const digit = n % 10
        results.push(digit)
        n = Math.floor(n / 10)
    }
    return results
}

export const validate = n => {
    const ds = digits(n)
    const length = ds.length
    return ds.map(d => Math.pow(d, length)).reduce(plus, 0) == n
};
