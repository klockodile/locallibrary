// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  for (let i=0; i< authors.length; i++) {
    let author = authors[i];
    if (author.id === id)
    return author
  }
}

function findBookById(books, id) {
  let foundBookById = books.find((book) => book.id === id);
  return foundBookById;
}

function partitionBooksByBorrowedStatus(books) {
  let returnedBooks = books.filter((book) => book.borrows[0].returned);
  let unreturnedBooks = books.filter((book) => !book.borrows[0].returned);
  let partitionedBooks = [unreturnedBooks, returnedBooks];
  return partitionedBooks;
}

function getBorrowersForBook(book, accounts) {
  let tenBorrowed = book.borrows.slice(0, 10);
  let borrowers = tenBorrowed.map((info) => {
  let user = accounts.find((userInfo) => userInfo.id === info.id);
    return {...info, ...user};
  }); return borrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
