
const types = {
   SCALENE: 'scalene',
   ISOSCELES: 'isosceles',
   EQUILATERAL: 'equilateral'
}
const any = conditions => 
  conditions.reduce((acc, n) => 
	  acc || n, false)

const lte = n => val => val <= n

const lteZero = lte(0)

const satisfiesTriangleInequality = ([a, b, c]) => 
	a + b >= c &&
	b + c >= a &&
	c + a >= b 

export class Triangle {
  constructor(x, y, z) {
    this.x = x
    this.y = y
    this.z = z
  }

  kind() {
    const sides = [this.x, this.y, this.z]
    if(any(sides.map(lteZero))) 
	  throw new Error('Negative Side Lengths')
    if(!satisfiesTriangleInequality(sides)) 
	  throw new Error()
    if(
	    this.x === this.y && 
	    this.x === this.z && 
	    this.y === this.z
    )  {
	  return types.EQUILATERAL
    } else if(
	    this.x === this.y || 
	    this.y === this.z || 
	    this.x === this.z
    )  {
	  return types.ISOSCELES
    } else {
    	return types.SCALENE
    }
  }
}
