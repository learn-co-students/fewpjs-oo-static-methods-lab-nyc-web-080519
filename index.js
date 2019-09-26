class Formatter {
  static capitalize(str){
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(str){
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newStr = []
    let words = str.split(" ")
    for(let i = 0; i < words.length; i++){
      // if the word is not in the exceptions or is the first word in the sent
      if (exceptions.indexOf(words[i].toLowerCase()) === -1 || i === 0) {
        newStr.push(this.capitalize(words[i]))
      } else {
        newStr.push(words[i])
      }
    }
    return newStr.join(" ")
  }
}