export class Matrix {
    constructor(str) {
        this._data = str
            .split('\n')
            .map(row =>
                 row.split(' ').map(col => Number(col)))
  }

  get rows() {
      return this._data
  }

  get columns() {
      return this._data.reduce((acc, row, idx, matrix) => {
          return [
              ...acc,
              matrix.map(row => row[idx])
          ]
      }, [])
  }
}
