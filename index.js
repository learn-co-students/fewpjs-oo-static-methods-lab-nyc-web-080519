class Formatter {
  static capitalize(string) {
    const nameCapitalized = string.charAt(0).toUpperCase() + string.slice(1)
    return nameCapitalized
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    const mehArr = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    const origArr = string.split(" ")
    const newArr = []
    newArr.push(this.capitalize(origArr[0]))
    origArr.shift()
    origArr.forEach(function(word) {
      if (mehArr.includes(word) === false) {
        newArr.push(Formatter.capitalize(word))
      }
      else {
        newArr.push(word)
      }
    })
  return newArr.join(" ")
  }
}