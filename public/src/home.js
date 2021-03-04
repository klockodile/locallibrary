// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let filtered = books.filter((book) =>
    book.borrows.find((borrow) => borrow.returned === false)
  );
  return filtered.length;
}

// Helper function to sort an object
function sortObjValue(obj) {
  const keysValues = Object.keys(obj);
  return keysValues.sort((keyA, keyB) => {
    if (obj[keyA] > obj[keyB]) {
      return -1;
    } else if (obj[keyA] < obj[keyB]) {
      return 1;
    } else {
      return 0;
    }
  });
}

function getMostCommonGenres(books) {
  const count = books.reduce((acc, { genre }) => {
    if (acc[genre]) {
      acc[genre] += 1;
    } else {
      acc[genre] = 1;
    }
    return acc;
  }, {});
  const sortedGenre = sortObjValue(count);
  return sortedGenre.map((name) => ({ name, count: count[name] })).slice(0, 5);
}

function getMostPopularBooks(books) {
  const result = books.map((book) => {
    const popular = {
      name: book.title,
      count: book.borrows.length,
    };
    return popular;
  });
  return result
    .sort((titleA, titleB) => titleB.count - titleA.count)
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let authorID = []; 
  for (let i = 0; i < books.length; i++) 
  for (let b = 0; b < authors.length; b++) {
      if (books[i].authorId === authors[b].id) {
        let wholeName = (authors[b].name.first + " " + authors[b].name.last);
        authorID.push({ name: wholeName, count: books[i].borrows.length });
      } 
    } 
    authorID.sort((a, b) => (a.count > b.count ? -1 : 1)); 
  return authorID.slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
