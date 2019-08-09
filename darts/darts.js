const distance = (x, y) => Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))

export const solve = (x, y) => {
    if(distance(x, y) <= 1) return 10
    if(distance(x, y) <= 5) return 5
    if(distance(x, y) <= 10) return 1
    return 0
};
