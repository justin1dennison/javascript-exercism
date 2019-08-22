const rangeFrom1ToN = n => Array.from({ length: n }, (_, i) => i + 1)
const sum = array => array.reduce((x, y) => x + y, 0)
const square = n => n * n

export class Squares {
  constructor(limit) {
    this.limit = limit
  }

  get sumOfSquares() {
      return sum(rangeFrom1ToN(this.limit).map(square))
  }

  get squareOfSum() {
      const x = sum(rangeFrom1ToN(this.limit))
      return square(x) 
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares
  }
}
