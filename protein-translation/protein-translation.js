const map = fn => mappable => mappable.map(fn)
const filter = fn => filterable => filterable.filter(fn)
const find = fn => findable => findable.find(fn)
const get = index => indexable => indexable[index]
const second = get(1)
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)
const prop = name => obj => obj[name]
const hasLength = xs => !!xs.length
const join = sep => xs => xs.join(sep)
const defaultWith = d => val => (!val ? d : val)
const toArray = s => [...s]
const complement = fn => (...args) => !fn(...args)
const eq = fst => snd => fst === snd
const validNucleotides = new Set(['A', 'C', 'G', 'U'])

const throwWith = msg => fn => val => {
  if (fn(val)) {
    throw new Error(msg)
  } else {
    return val
  }
}

const chunk = n => collection => {
  const results = []
  let i = 0
  while (i < collection.length) {
    results.push(collection.slice(i, i + n))
    i += n
  }
  return results
}

const until = condition => xs => {
  const results = []
  for (let x of xs) {
    if (condition(x)) break
    results.push(x)
  }
  return results
}

const triples = pipe(
  chunk(3),
  filter(hasLength)
)

const select = cases => val =>
  pipe(
    find(([condition]) => condition(val)),
    second
  )(cases)

const translation = select([
  [s => new Set(['AUG']).has(s), 'Methionine'],
  [s => new Set(['UUU', 'UUC']).has(s), 'Phenylalanine'],
  [s => new Set(['UUA', 'UUG']).has(s), 'Leucine'],
  [s => new Set(['UCU', 'UCC', 'UCA', 'UCG']).has(s), 'Serine'],
  [s => new Set(['UAU', 'UAC']).has(s), 'Tyrosine'],
  [s => new Set(['UGU', 'UGC']).has(s), 'Cysteine'],
  [s => new Set(['UGG']).has(s), 'Tryptophan'],
  [() => true, 'STOP']
])

const isValid = pipe(
  toArray,
  filter(n => !validNucleotides.has(n)),
  prop('length'),
  eq(0)
)

exports.translate = pipe(
  defaultWith(''),
  throwWith('Invalid codon')(complement(isValid)),
  toArray,
  triples,
  map(join('')),
  map(translation),
  until(eq('STOP'))
)
