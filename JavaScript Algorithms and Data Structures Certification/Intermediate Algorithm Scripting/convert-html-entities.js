/**
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 * 
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities
 */
function convertHTML(str) {
  
  var newStr = str.replace(/&|<|>|\"|\'/g, function(e) {
    
    switch(e) {
    
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '\"':
        return '&quot;';
      case '\'':
        return '&apos;';
      default:
        return e;
    }
    
  });
  
  return newStr;
}

convertHTML("Dolce < Gabbana");