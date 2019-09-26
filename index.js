class Formatter {
  
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let title = []
    let noCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = string.split(" ")

    words.forEach(word => {
      if (noCap.includes(word)) {
        title.push(word)
      } else {
        title.push(this.capitalize(word))
      }
    })
    title[0] = this.capitalize(title[0])
    return title.join(" ")
  }
}