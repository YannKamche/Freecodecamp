// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
const add = (list, bookName) => [...list, bookName]
  // Change code above this line



const remove = (list, bookName) => {
  let newList = [...list];
  if(newList.indexOf(bookName) >= 0) {
    newList.splice(newList.indexOf(bookName), 1)
    return newList
  }
}