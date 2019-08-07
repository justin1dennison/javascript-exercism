const DNAToRNA = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}
const transcribe = nucleotide => DNAToRNA[nucleotide]

export const toRna = strand => [...strand].map(transcribe).join('')
