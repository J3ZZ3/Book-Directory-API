Get Method{
    http://localhost:3000/books
}

GET by ISBN{
    http://localhost:3000/books/<ISBN>
}

POST Method{
    http://localhost:3000/books
    [
        {*must use format*
        "title": "Sample Book",
        "author": "Author Name",
        "publisher": "Sample Publisher",
        "publishedDate": "2024-10-31",
        "isbn": "1234567890"
        }
    ]
}

PUT Method{
    http://localhost:3000/books/<ISBN>
}

DELETE Method{
    http://localhost:3000/books/<ISBN>
}