// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {

  // If prop doesn't exist, create it first
  if ( !collection[id].hasOwnProperty(prop) ) {
    collection[id][prop] = (prop === 'tracks') ? [value] : value;
    return collection
  }

  // If the prop already exists, update the value
  if ( collection[id].hasOwnProperty(prop) ) {

    // If the value is empty, delete the prop
    if ( value === '' ) {
      delete collection[id][prop]
      return collection
    }

    if ( prop === 'tracks' ) {
      if ( collection[id][prop].length > 0 ) {
        collection[id][prop].push(value)
      } else {
        collection[id][prop] = [value]
      }
    } else {
      collection[id][prop] = value;
    }
  }
  
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
