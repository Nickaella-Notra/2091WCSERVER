const express = require('express');
const app = express();

app.use(express.json());

const movies = [];

//add a movie
app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    }
    movies.push(movie);
    res.send(movie);
});


app.listen(5000, () => console.log('listening on port 5000'));