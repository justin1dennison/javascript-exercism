const punctuation = /[!@#$%^&*():;'",.<>/?]/g
const space = / /g
const question = /\?$/
const empty = ''
const removePunctuation = s => s.replace(punctuation, empty)
const removeSpaces = s => s.replace(space, empty)
const justNumbers = s => [...removeSpaces(s)].every(c => c <= '9' && c >= '0')
const isShouting = message => {
    const transformed = removePunctuation(message)
    return transformed.toUpperCase() === transformed && !justNumbers(transformed)
}
const isQuestion = message => question.test(message) 
const isSilent = message => message.length === 0
export const hey = message => {
    const trimmed = message.trim()
    if(isSilent(trimmed))
	return "Fine. Be that way!"
    if(isShouting(trimmed) && isQuestion(trimmed))
        return "Calm down, I know what I'm doing!"
    if(isShouting(trimmed)) 
        return "Whoa, chill out!"
    if(isQuestion(trimmed)) 
        return "Sure."
    return "Whatever."
}
