const parse = s => s.split('\n').map(r => r.split(' ').map(col => Number(col)))
const transpose = rows => rows.map((row, idx) => rows.map(r => r[idx]))

export class Matrix {
    constructor(str) {
        this._data = parse(str) 
  }

  get rows() {
     return this._data
  }

  get columns() {
     return transpose(this.rows)
  }
}
