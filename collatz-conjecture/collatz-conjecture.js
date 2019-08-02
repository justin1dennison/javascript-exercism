
const isEven = n => n % 2 === 0

const step = n => 
  isEven(n) ? 
  n / 2 :
  3 * n + 1

export const steps = n => {
  if(n <= 0) 
	throw Error('Only positive numbers are allowed')
  let [count, start] = [0, n]
  while(start != 1) {
     count += 1
     start = step(start) 
  }
  return count
}


