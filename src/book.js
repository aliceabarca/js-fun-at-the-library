function createTitle(bookTitle) {
  return "The " + bookTitle

}

function buildMainCharacter (name, age, pronouns) {
 var character = {};

 character.name = name,
 character.age = age,
 character.pronouns = pronouns

 return character;
}

function saveReview(review, textReview) {
  if(!textReview.includes(review))
  textReview.push(review);
}

function calculatePageCount(addPages) {
  var pageCount = addPages.length * 20
  return pageCount
}

function writeBook(title, mainCharacter, genre) {
  var book = {};
  
  book.title = title,
  book.mainCharacter = mainCharacter;
  book.pageCount = calculatePageCount(title);
  book.genre = genre;

  return book;
}

function editBook(book) {
 
 return book.pageCount = (book.pageCount * 0.75)
  
 }

  


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}