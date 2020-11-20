const caesar = (key, string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let chars = string.split("");
  let newString = [];

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] != " ") {
      let position = alphabet.indexOf(chars[i]) + key;

      if (position >= 26) {
        position = position - 26;
      }

      newString.push(alphabet[position]);
    } else {
      newString.push(" ");
    }
  }

  newString = newString.join("");

  return newString;
};

module.exports = caesar;
