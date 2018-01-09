function convertHTML(str) {
  // &colon;&rpar;
  
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