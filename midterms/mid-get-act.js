const express = require('express');
const app = express();

//Array for GET Method
const movies = [{
    id: 1,
    title: 'Superman',
    num: 'one'
},
{
    id: 2,
    title: 'Thor',
    num: 'two'
},
{
    id: 3,
    title: 'Iron Man',
    num: 'three'
}];

// get all movies
app.get('/api/movies', (req, res) => {
    res.send(movies);
});

//get movie by id 
app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(h => h.id === parseInt(req.params.id));
    if(!movie) return res.status(404).send('The movie with the given ID was not found.');
    res.send(movies);
});

//get method for searching title
app.get('/api/movies/id/:title', (req, res) => {
    const titlem = movies.find(a => a.title === req.params.title);
    if(!titlem) return res.status(404).send('The movie with the given title was not found.');
    res.send(movies);
});



app.listen(4000, () => console.log('listening on port 4000'));