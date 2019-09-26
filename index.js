class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string){
    string = string.toLowerCase()
    let words = string.split(' ')
    let newString = []
    const exclusions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    for (let i = 0; i < words.length; i++) {
      let word = words[i]
      // console.log(string[i], i)
      if(!exclusions.includes(word) || i === 0){
         newString.push(this.capitalize(word))
        // console.log(newString)
      } else {
        newString.push(word)
      }
    }
    // return newString.join(' ')
    return newString.join(' ')
  }
}

Formatter.titleize("in the night kitchen")