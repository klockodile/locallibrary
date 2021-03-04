// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  let found = null;
  for (let i=0; i < accounts.length; i++) {
    if (accounts[i].id == id) found = accounts[i];   
  } return found;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((lastNameA, lastNameB) => (lastNameA.name.last < lastNameB.name.last ? -1 : 1));
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let filtered = books.filter((book)=>book.borrows.find((borrow)=>borrow.id === account.id)); 
  return filtered.length;
}

/*It returns an array of books and authors that represents all books _currently checked out_ by the given account. 
_Look carefully at the object below, as it's not just the book object; the author object is embedded inside of it. 
*/


function getBooksPossessedByAccount(account, books, authors) {
  let checkedOutBooks = books.filter((book) => book.borrows.find((borrowed) => borrowed.id === account.id && borrowed.returned === false));
  let result = checkedOutBooks.map((book) => {
    let searchAuthors = authors.find((author) => author.id === book.authorId);
    return {...book, author: searchAuthors};
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
