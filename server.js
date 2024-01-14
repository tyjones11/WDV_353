const http = require("http");

const todos = [
    {id: 1, task: "Task One"},
    {id: 2, task: "Task Two"},
    {id: 3, task: "Task Three"},
];

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
        success: true,
        method: req.method,
        data: todos,
    })
    );
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});

//GET /books => lists all the books in the database
//DELETE /books/{bookId} => Deletes a book based on their id
//POST /books => Creates a book
//PUT /books/{bookId} => Method to update a book
//GET /books/{bookId} => Retrieves a book based on their id

