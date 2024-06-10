const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());
require('dotenv').config();
server.set('view engine', 'ejs');

//esa será la función que nos conecta con la db
async function connectionDB () { 
    const connex =  await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Nyaf4*4nj00b3',
        database: 'netflix'
    });
    await connex.connect();
    return connex;
}

//Endpoints
server.get('/movies', async (req, res) => {
	const conn = await connectionDB();

	//query params
	const genreFilterParam = req.query.genre;
	const sortFilterParam = req.query.sort;
	console.log(genreFilterParam);
	console.log(sortFilterParam);
	//sql -> SELECT
	let data;
	if (genreFilterParam === '' && sortFilterParam === 'asc') {
		const selectMovies = 'SELECT * FROM movies ORDER BY title ASC;';
		const [results] = await conn.query(selectMovies);
		data = results;
	} else if (genreFilterParam === '' && sortFilterParam === 'desc') {
		const selectMovies = 'SELECT * FROM movies ORDER BY title = ?;';
		const [results] = await conn.query(selectMovies, [sortFilterParam]);
		data = results;
	} else if (genreFilterParam !== '' && sortFilterParam === 'asc') {
		const selectMovies =
			'SELECT * FROM movies WHERE genre = ? ORDER BY title ASC;';
		const [results] = await conn.query(selectMovies, [genreFilterParam]);
		data = results;
	} else if (genreFilterParam !== '' && sortFilterParam === 'desc') {
		const selectMovies =
			'SELECT * FROM movies WHERE genre = ? ORDER BY title DESC;';
		const [results] = await conn.query(selectMovies, [genreFilterParam]);
		data = results;
	}

	//respondo con los datos
	res.json({ success: true, movies: data });
	conn.end();
});

server.get('/movie/:movieId', async (req, res) => {
	const movieId = req.params.movieId;
	const conn = await connectionDB();
	const select = 'SELECT * FROM movies WHERE idMovies = ?';
	//todas las sentencias sql con variables tengo que ejecutarlas en la query y tendré 2 parámetros, la sentencia y el listado de variables que tenga
	const [results] = await conn.query(select, [movieId]);
	//mando el primer elemento del array results, que es un objeto y así después es má sencillo operar con los datos en mi ejs
	res.render('detail', { movie: results[0] });
    console.log(results)
});

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
	console.log(`Server listening at http://localhost:${serverPort}`);
});

//TODO: qué endpoints puedo necesitar?
