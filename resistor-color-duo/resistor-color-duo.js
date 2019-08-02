
const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]

export const value = colors => 
  parseInt(
   colors 
     .map(e => COLORS.indexOf(e))
     .join(''), 
   10
  )
  
  


