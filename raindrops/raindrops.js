const hasFactor = x => y => y % x === 0
const pling = n => hasFactor(3)(n) ? 'Pling' : ''
const plang = n => hasFactor(5)(n) ? 'Plang' : ''
const plong = n => hasFactor(7)(n) ? 'Plong' : ''
const apply = fns => val => fns.map(fn => fn(val))

export const convert = n => {
    const digits = apply([pling, plang, plong])(n)
    const joined = digits.join('')
    return joined.length > 0 ? joined : String(n)
}
