class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-\s\']+/g, '');
  }

  static titleize(string) {
    let wordsArr = string.split(" ")
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let finishedArr = wordsArr.map(function(word) {
      let found = exceptions.find(function(wrd) {
        return wrd === word.toLowerCase()
      })
      if (!found || word === wordsArr[0]) {
        return Formatter.capitalize(word)
      }
      else {
        return word
      }
    })
    return finishedArr.join(" ")
  }
}