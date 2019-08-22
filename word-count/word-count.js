const has = (obj, property) => Object.prototype.call(obj, property)

export class Words {
  count(sentence) {
      const words = sentence.toLowerCase().trim().split(/\s+/ig)
      const results = {}
      for(let i = 0; i < words.length; i += 1) {
          const word = words[i]
          if(!(has(results, word))) results[word] = 0
          results[word] += 1
      }
      return results
  }
}
