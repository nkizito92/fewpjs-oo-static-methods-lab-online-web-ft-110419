class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
   return string.replace(/[^A-Za-z0-9 '-]+/g, "")

  }
  static titleize(string) {
   let isExcepted = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let word = [];
    let arrayOfWords = sentence.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        word.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( isExcepted.includes( arrayOfWords[ n ] ) ) {
          word.push( arrayOfWords[ n ] )
        } else {
          word.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
  }
}