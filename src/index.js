const express = require('express');
const cors = require('cors');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

//Endpoints
server.get('/movies', (req, res) => {
	const fakeMovies = [
		{
			id: 1,
			title: 'Wonder Woman',
			genre: 'Action',
			image:
				'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/12/gal-gadot-como-wonder-woman-universo-extendido-dc-2895594.jpg?tf=3840x',
			category: 'Superhero',
			year: 2017,
			director: 'Patty Jenkins',
		},
		{
			id: 2,
			title: 'Inception',
			genre: 'Science Fiction',
			image:
				'https://m.media-amazon.com/images/S/pv-target-images/e826ebbcc692b4d19059d24125cf23699067ab621c979612fd0ca11ab42a65cb._SX1080_FMjpg_.jpg',
			category: 'Thriller',
			year: 2010,
			director: 'Christopher Nolan',
		},
	];

	if (fakeMovies.length === 0) {
		res.status(500).json({ message: 'No hay películas', success: false });
	} else {
		res.status(200).json({ movies: fakeMovies, success: true });
	}
});

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
	console.log(`Server listening at http://localhost:${serverPort}`);
});

//TODO: qué endpoints puedo necesitar?
