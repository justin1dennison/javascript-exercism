const or = (left, right) => left || right
const any = conditions => conditions.reduce(or, false)
const lte = n => val => val <= n
const lteZero = lte(0)
const sub = (left, right) => left - right

export class Triangle {
  constructor(x, y, z) {
    this.sides = [x, y, z].sort(sub)
  }

  kind() {
    const [x, y, z] = this.sides
    if(any(this.sides.map(lteZero))) 
	  throw new Error('Negative Side Lengths')
    if(!(z <= x + y))
	  throw new Error('Triangle Inequality not satisfied')
    if(x === z)  {
	return 'equilateral'
    } else if(x === y || y === z)  {
	return 'isosceles'
    } else {
    	return 'scalene'
    }
  }
}
