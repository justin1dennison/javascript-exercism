const map = fn => mappable => mappable.map(fn)
const reduce = fn => start => reduceable => reduceable.reduce(fn, start)
const filter = fn => filterable => filterable.filter(fn)
const apply = (fn, val) => fn(val)
const flip = fn => (...args) => fn(...args.reverse())
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)
const or = (l, r) => l || r
const and = (l, r) => l && r
const all = reduce(and)(true)
const any = reduce(or)(false)
const chunk = exports.chunk = n => collection => {
  const results = []
  let i = 0;
  while(i < collection.length) {
    results.push(collection.slice(i, i + n))
    i += n
  }
  return results
}
const fillToCapacityWith = ({ what, capacity }) => 
	xs => 
	  xs.length < capacity ? 
	    xs.concat(Array(3 - xs.length)).fill(what, xs.length) : 
	    xs 
const hasLength = xs => !!xs.length
const until = condition => xs => {
  const results = []
  for(let x of xs) {
    if(condition(x)) break
    results.push(x)
  }
  return results
}
const triples = exports.triples = pipe(
  chunk(3),
  filter(hasLength),
  map(fillToCapacityWith({ what: '', capacity: 3 }))
)
const match = (...cases) => val => {
  for(let [condition, result] of cases) {
    if(condition(val)) return result
  }
}

const translation = match(
   [s => new Set(['AUG']).has(s), 'Methionine'],
   [s => new Set(['UUU', 'UUC']).has(s), 'Phenylalanine'],
   [s => new Set(['UUA', 'UUG']).has(s), 'Leucine'],
   [s => new Set(['UCU', 'UCC', 'UCA', 'UCG']).has(s), 'Serine'],
   [s => new Set(['UAU', 'UAC']).has(s), 'Tyrosine'],
   [s => new Set(['UGU', 'UGC']).has(s), 'Cysteine'],
   [s => new Set(['UGG']).has(s), 'Tryptophan'],
   [s => true, 'STOP']
)
const validNucleotides = new Set(['A', 'C', 'G', 'U'])
const isValid = strand => [...strand]
	.filter(nucleotide => !validNucleotides.has(nucleotide))
	.length === 0

const isSomething = xs => !!xs && xs.length && xs.length > 0
const throwWith = msg => fn => val => { 
  if(fn(val)){ 
    throw new Error(msg) 
  } else { 
    return  val 
  }
}
const defaultWith = d => val => !val ? d : val
const toArray = s => [...s]
const complement = fn => (...args) => !fn(...args)
const eq = fst => snd => fst === snd

export const translate = pipe(
  defaultWith(''),
  throwWith('Invalid codon')(complement(isValid)),
  toArray,
  triples,
  map(chunk => chunk.join('')),
  map(translation),
  until(eq('STOP'))
)
