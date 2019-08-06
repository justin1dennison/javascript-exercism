const GIGASECOND = 1E9
const MILLISECONDS_PER_SECOND = 1E9
const add = x => y => x + y
const totalMilliSecondsSinceEpoch = date => date.getTime()
const dateFromMilliSecondsSinceEpoch = ms => new Date(ms)
const pipe = (...fns) => val => fns.reduce((acc, fn) => fn(acc), val)

export const gigasecond = pipe(
  totalMilliSecondsSinceEpoch, 
  add(GIGASECOND * MILLISECONDS_PER_SECOND),
  dateFromMilliSecondsSinceEpoch
)
