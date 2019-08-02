
const isEven = n => n % 2 === 0

const step = n => 
  isEven(n) ? 
  n / 2 :
  3 * n + 1

export const steps = n => {
  if(n === 0 || n < 0) 
	throw Error('Only positive numbers are allowed')
  if(n === 1) return 0
  let count = 0
  let start = n
  while(start != 1) {
     count += 1
     start = step(start) 
  }
  return count
}


