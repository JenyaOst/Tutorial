const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
  const value = this.books.indexOf(oldName);
 this.books.splice(value , 1, newName);
  },
 
};
bookShelf.updateBook("Haze", "Dungeon chronicles");
console.log(bookShelf);
bookShelf.updateBook("The last kingdom", "Dune");
console.log(bookShelf);