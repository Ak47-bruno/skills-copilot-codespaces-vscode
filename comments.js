const express = require('express');

// Create web server
const app = express();
const port = 3000;

app.use(express.json());

let comments = [];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.status(201).json(comment);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});