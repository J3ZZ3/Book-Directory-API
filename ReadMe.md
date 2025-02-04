# Book Directory API

## Description
A simple RESTful API for managing a book directory. This API allows users to create, read, update, and delete book entries.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/J3ZZ3/Book-Directory-API.git
   cd Book-Directory-API
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
To start the server, run:

```bash
node index
```

The server will run on `http://localhost:3000`.

## API Endpoints

### GET all books
- **Endpoint:** `/books`
- **Method:** GET
- **Response:** Returns a list of all books in JSON format.

### GET book by ISBN
- **Endpoint:** `/books/<ISBN>`
- **Method:** GET
- **Response:** Returns the book with the specified ISBN.
- **Error Response:** 404 if the book is not found.

### POST new book
- **Endpoint:** `/books`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "title": "Sample Book",
    "author": "Author Name",
    "publisher": "Sample Publisher",
    "publishedDate": "2024-10-31",
    "isbn": "1234567890"
  }
  ```
- **Response:** Returns the created book object.
- **Error Responses:**
  - 400 if any field is missing or if ISBN is not a valid string.
  - 400 if a book with the same ISBN already exists.

### PUT update book details
- **Endpoint:** `/books/<ISBN>`
- **Method:** PUT
- **Request Body:**
  ```json
  {
    "title": "Updated Title",
    "author": "Updated Author",
    "publisher": "Updated Publisher",
    "publishedDate": "2024-11-01"
  }
  ```
- **Response:** Returns the updated book object.
- **Error Response:** 404 if the book is not found.

### DELETE a book by ISBN
- **Endpoint:** `/books/<ISBN>`
- **Method:** DELETE
- **Response:** Returns a success message.
- **Error Response:** 404 if the book is not found.
