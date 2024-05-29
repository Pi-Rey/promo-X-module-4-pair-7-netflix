USE Netflix;
# Sobre las películas
SELECT * FROM movies;
SELECT title, genre FROM movies WHERE year > 1990;
SELECT * FROM movies WHERE category = 'Top 10';
UPDATE movies SET year = 1997 WHERE title = 'La vita è bella';

# Sobre los actores
SELECT * FROM actors;
SELECT * FROM actors WHERE birthday BETWEEN '1950-01-01' AND '1960-01-01';
-- Cómo compara el between si es texto?
SELECT name, lastname FROM actors WHERE country = 'Estados Unidos';

# Sobre los usuarios
SELECT * FROM users;
SELECT * FROM users WHERE plan_details = 'Standard';
DELETE FROM users WHERE name LIKE 'M%';

# Bonus: Agrega más campos a las tablas
ALTER TABLE actors ADD image text;

# PRUEBA ELIMINAR DATABASE
create database PRUEBA;
drop database PRUEBA;