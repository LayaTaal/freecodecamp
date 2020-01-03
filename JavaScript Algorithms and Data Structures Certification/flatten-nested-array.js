//Function to loop through and flatten a multi-level nested array.
function steamrollArray(arr) {
    // I'm a steamroller, baby
    return arr.reduce(function(acc, cur) {
      
      return acc.concat(
        Array.isArray(cur)
          ? steamrollArray(cur)
          : cur 
      );
      
    }, []);
  }
  