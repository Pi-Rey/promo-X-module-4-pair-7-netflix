CREATE DATABASE Netflix;
USE Netflix;
CREATE TABLE movies (
idMovies int auto_increment primary key,
title varchar(45) not null,
genre varchar(45) not null,
image varchar(1000) not null,
category varchar(45) not null,
year int
);

CREATE TABLE users (
idUser int auto_increment primary key,
user varchar(45) not null,
password varchar(45) not null,
name varchar(45) not null,
email varchar(45) not null,
plan_details varchar(45) not null
);

CREATE TABLE actors(
idActor int auto_increment primary key,
name varchar(45) not null,
lastname varchar(45) not null,
country varchar(45) not null,
birthday date
);