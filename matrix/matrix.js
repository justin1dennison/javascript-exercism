const parse = s => s.split('\n').map(r => r.split(' ').map(col => Number(col)))

export class Matrix {
    constructor(str) {
        this._data = parse(str) 
  }

  get rows() {
     return this._data
  }

  get columns() {
     const matrix = this._data
     return matrix.map((row, idx) => matrix.map(r => r[idx]))
  }
}
