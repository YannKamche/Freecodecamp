// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {

  //Assigns the value to the property if it is not empty and property is not track
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  }

//Checks if the album doesn't have property
  else if (prop === "tracks" && records[id].hasOwnProperty("tracks") == false) {
    records[id][prop] = [];
    records[id][prop].push(value)
  } 

  //Checks if the album has property
  else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value)
  }

    //Delete a given property if value is empty
   else if (value === "") {
    delete records[id][prop]
  }
  
  return records;
}
