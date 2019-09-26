class Formatter {
  static capitalize(str) {
    let firstLetter = str[0].toUpperCase()
    return firstLetter + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9 '-]+/g, '')
  }

  static titleize(str) {
    let ignore = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    let strArr = str.split(" ");
    let newStrArr = strArr.map(str => {
      if (ignore.includes(str)) {
        return str
      }
      else {
        return this.capitalize(str)
      }
    })
    let thing = newStrArr.join(" ");
    return this.capitalize(thing)
  }
}