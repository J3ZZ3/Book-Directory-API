const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const books = [];

function findBook(isbn) {
  return books.find((book) => book.isbn === isbn);
}

// GET all books
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

// GET book by ISBN
app.get('/books/:isbn', (req, res) => {
  const book = findBook(req.params.isbn);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.status(200).json(book);
});

// POST new book
app.post('/books', (req, res) => {
  const { title, author, publisher, publishedDate, isbn } = req.body;

  if (!title || !author || !publisher || !publishedDate || !isbn) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  if (typeof isbn !== 'string') {
    return res.status(400).json({ error: 'ISBN must be a valid string' });
  }

  if (findBook(isbn)) {
    return res.status(400).json({ error: 'Book with this ISBN already exists' });
  }

  const newBook = { title, author, publisher, publishedDate, isbn };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update book details
app.put('/books/:isbn', (req, res) => {
  const book = findBook(req.params.isbn);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  const { title, author, publisher, publishedDate } = req.body;

  if (title) book.title = title;
  if (author) book.author = author;
  if (publisher) book.publisher = publisher;
  if (publishedDate) book.publishedDate = publishedDate;

  res.status(200).json(book);
});

// DELETE a book by ISBN
app.delete('/books/:isbn', (req, res) => {
  const bookIndex = books.findIndex((book) => book.isbn === req.params.isbn);
  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  books.splice(bookIndex, 1);
  res.status(200).json({ message: 'Book deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/books`);
});
