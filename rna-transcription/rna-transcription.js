const transcribe = nucleotide => ({
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
})[nucleotide]

export const toRna = strand => [...strand].map(transcribe).join('')
