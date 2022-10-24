const mongoose = require('mongoose');

const Movie = require('../../api/models/movie');

//require('dotenv').config();

const connectDb = require('../db/db');

const movies = [
    {
      title: 'The Matrix',
      director: 'Hermanas Wachowski',
      year: 1999,
      genre: 'Acción',
    },
    {
      title: 'The Matrix Reloaded',
      director: 'Hermanas Wachowski',
      year: 2003,
      genre: 'Acción',
    },
    {
      title: 'Buscando a Nemo',
      director: 'Andrew Stanton',
      year: 2003,
      genre: 'Animación',
    },
    {
      title: 'Buscando a Dory',
      director: 'Andrew Stanton',
      year: 2016,
      genre: 'Animación',
    },
    {
      title: 'Interestelar',
      director: 'Christopher Nolan',
      year: 2014,
      genre: 'Ciencia ficción',
    },
    {
      title: '50 primeras citas',
      director: 'Peter Segal',
      year: 2004,
      genre: 'Comedia romántica',
    },
  ];
//crear nuevo array para poder meterlo en la base de datos 
  const moviesDocuments = movies.map(movie => new Movie(movie));


  connectDb().then(async () => {
    await Movie.collection.drop();
    console.log("se han eliminado guay los datos")

  }).catch((error) => console.log("no se ha podido eliminar", error))
  .then(async () => {
    await Movie.insertMany(moviesDocuments);
    console.log("se han guaradado guay los datos")

  })

  .catch ((error)=> console.log("no he podido meter peliculas, error"))
  .finally(() => mongoose.disconnect());
  /* const connectDb = await mongoose.connect(DB_URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () =>{
    const allMovies = await movies.find();
  }) */