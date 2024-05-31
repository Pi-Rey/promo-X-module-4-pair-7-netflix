-- Buscar cuantas películas como favorita tiene cada usuario.
SELECT users.name, COUNT(fkMovies) AS numero_favoritos
FROM users_has_movies
INNER JOIN users ON fkUsers = idUser
GROUP BY fkUsers;

-- Buscar el usuario con mayor cantidad de películas favoritas.
SELECT users.name, COUNT(fkMovies) AS numero_favoritos
FROM users_has_movies
INNER JOIN users ON fkUsers = idUser
GROUP BY users.idUser
ORDER BY numero_favoritos DESC
LIMIT 1;
