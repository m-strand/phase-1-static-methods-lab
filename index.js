class Formatter {
  //add static methods here
  static capitalize(word) {
    word.toLowerCase();
    word.toUpperCase(word[0]);
  }

  static sanitize(string) {
     let fixedIt = string.replace(/[^-,'A-Za-z0-9]+/g, '');
      return fixedIt;
    }

  static titleize(string) {
    string = string.toLowerCase().split(' ');
    for (let i = 0; i < string.length; ++i) {
      string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
      return string.join(' ');
  }
}