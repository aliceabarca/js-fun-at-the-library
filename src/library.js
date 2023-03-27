function createLibrary(libraryName) {
var library = {}
library.name = libraryName,
library.shelves = {},
library.shelves.fantasy = [],
library.shelves.fiction = [],
library.shelves.nonFiction = []
return library

}

function addBook(library, book) {
  switch (book.genre) {
    case 'fiction': 
      library.shelves.fiction.push(book);
      break;
    case 'nonFiction':
      library.shelves.nonFiction.push(book);
      break;
    case 'fantasy':
      library.shelves.fantasy.push(book);
  }
}

function checkoutBook( library, title, shelf) {
  for (var i = 0; i < library.shelves[shelf].length; i++)  {
    if (library.shelves[shelf][i].title === title) {
      var book = library.shelves[shelf][i];
      library.shelves[shelf].splice(i, 1);
    return `You have now checked out ${book.title} from the ${library.name}.`;
    } 
    }
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
  }

  function takeStock(library) {
    var countStock = 0;
    for(var i = 0; i < Object.keys(library.shelves).length; i++) {
     countStock = countStock + Object.values(library.shelves)[i].length; 
    }
    return `There are a total of ${countStock} fantasy books at the ${library.name}.`
  }



module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};