
//A cool function to sum two numbers

function addTogether() {
  
    //Create a function to check argument type
    var checkNum = function(num) {
      if (typeof num !== 'number') {
        return undefined;
      } else {
        return num;
      }
    };
    
    if (arguments.length === 1) {
      
      var a = checkNum(arguments[0]);
      
      if (a === undefined) {
        return undefined;
      } else {
       return function(b) {
          if (checkNum(b) !== undefined) {
            return a + b;
          } else {
            return undefined;
          }
        };
      }
      
    } else if (arguments.length === 2) {
      
      var c = checkNum(arguments[0]);
      var d = checkNum(arguments[1]);
      
      if (c != undefined && d != undefined) {
        return c + d;
      } else {
        return undefined;
      }
      
    } else {
      return undefined;
    }
    
  }
  
  //addTogether(2, 3) should return 5.
  //addTogether(2)(3) should return 5.
  //addTogether("http://bit.ly/IqT6zt") should return undefined.
  //addTogether(2, "3") should return undefined.
  //addTogether(2)([3]) should return undefined. 
  