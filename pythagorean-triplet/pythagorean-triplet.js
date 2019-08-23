function * range (start, stop, step = 1) {
  if (!stop) {
    stop = start
    start = 1
  }
  while (start <= stop) {
    yield start
    start += step
  }
}

function * product (xs, ys, zs) {
  for (const x of xs) {
    for (const y of ys) {
      for (const z of zs) {
        yield [x, y, z]
      }
    }
  }
}

export class Triplet {
  constructor (a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }

  sum () {
    return this.a + this.b + this.c
  }

  product () {
    return this.a * this.b * this.c
  }

  isPythagorean () {
    return Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2)) === this.c
  }

  static where ({ sum, minFactor = 1, maxFactor } = {}) {
    const as = Array.from(range(minFactor, maxFactor))
    const bs = Array.from(range(minFactor, maxFactor))
    const cs = Array.from(range(minFactor, maxFactor))
    const triplets = Array.from(product(as, bs, cs))
      .filter(([a, b, c]) => a > b || a > c || b > c)
          .map(t => new Triplet(...t))
          .filter(t => t.isPythagorean())
          .sort((l, r) => l.product() - r.product())
      
      return sum ? triplets.filter(t => t.sum() === sum) : triplets
  }
}
