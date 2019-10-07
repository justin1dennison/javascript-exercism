const punctuation = '[!@#$%^&*():;\'",.<>/?]'
const removePunctuation = s => s.replace(new RegExp(punctuation, 'ig'), '')
const removeSpaces = s => s.replace(/ /ig, '')
const asCharCodes = s => [...s].map((_, i) => s.charCodeAt(i))
const justNumbers = s => asCharCodes(removeSpaces(s))
	.every(c => c <= 57 && c >= 48)
const isShouting = message => {
    const transformed = removePunctuation(message.trim())
    return transformed.toUpperCase() === transformed && !justNumbers(transformed)
}
const isQuestion = message => /\?$/g.test(message.trim()) 
const isSilent = message => message.trim().length === 0
export const hey = message => {
    if(isSilent(message))
	return "Fine. Be that way!"
    if(isShouting(message) && isQuestion(message))
        return "Calm down, I know what I'm doing!"
    if(isShouting(message)) 
        return "Whoa, chill out!"
    if(isQuestion(message)) 
        return "Sure."
    return "Whatever."
}
