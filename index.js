class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = string.split(' ');
    let results = [];
    for(let i = 0; i < words.length; i++){
      if(i === 0) {
        results.push(this.capitalize(words[i]));
      } else {
          if(exceptions.includes(words[i])) {
            results.push(words[i]);
          } else {
            results.push(this.capitalize(words[i]));
          }
      }
    }
    return results.join(' ');
  }

}