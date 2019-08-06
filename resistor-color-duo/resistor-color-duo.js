
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
   +colors 
     .map(e => COLORS.indexOf(e))
     .join('')
  
  


