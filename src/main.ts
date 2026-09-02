// Task 2: Book class with typed properties
class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

// Task 3: Review interface
interface Review {
  bookId: number;
  rating: number;
  comment: string;
}

// Task 4 & 5: addReview function with typed parameters and return type
const reviews: Review[] = [];

function addReview(bookId: number, rating: number, comment: string): void {
  const review: Review = { bookId, rating, comment };
  reviews.push(review);
  console.log(`Review added for book ${bookId}:`, review);
}

// Task 1: displayBook with type annotations
function displayBook(book: Book): void {
  const bookList = document.getElementById("book-list");
  const bookDiv = document.createElement("div");
  bookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>By ${book.author}, ${book.year}</p>
  `;
  bookList!.appendChild(bookDiv);
}

// Create book objects
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);

// Display books
displayBook(book1);
displayBook(book2);

// Add a sample review
addReview(1, 5, "A timeless classic!");
