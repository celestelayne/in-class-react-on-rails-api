# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.destroy_all

movies = Movie.create(
  [
    {
      title: 'Green Book',
      year: 2018,
      director: 'Peter Farrelly',
      runtime: '130 min',
      genre: 'Biography, Comedy, Drama, Music',
      actors: 'Viggo Mortensen, Mahershala Ali, Linda Cardellini, Sebastian Maniscalco',
      plot: 'A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.',
      poster: 'https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_SX300.jpg',
      website: 'https://www.uphe.com/movies/green-book'
    },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
      director: 'Peter Jackson',
      runtime: '178 min',
      genre: 'Adventure, Drama, Fantasy',
      actors: 'Alan Howard, Noel Appleby, Sean Astin, Sala Baker',
      plot: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
      poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
      website: 'http://www.lordoftherings.net/film/trilogy/thefellowship.html'
    },
    {
      title: 'The Matrix',
      year: 1999,
      director: 'Lana Wachowski, Lilly Wachowski',
      runtime: '136 min',
      genre: 'Action, Sci-Fi',
      actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving',
      plot: 'A computer hacker learns about the true nature of his reality.',
      poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
      website: 'http://www.whatisthematrix.com'
    },
    {
      title: 'Call Me By Your Name',
      year: 2017,
      director: 'Luca Guadagnino',
      runtime: '132 min',
      genre: 'Drama, Romance',
      actors: 'Armie Hammer, Timothée Chalamet, Michael Stuhlbarg, Amira Casar',
      plot: 'In 1980s Italy, a romance blossoms between a student and an older man.',
      poster: 'https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_SX300.jpg',
      website: 'https://sonyclassics.com/callmebyyourname/'
    },
    {
      title: 'Man of Steel',
      year: 2013,
      director: 'Zack Snyder',
      runtime: '143 min',
      genre: 'Action, Adventure, Sci-Fi',
      actors: 'Henry Cavill, Amy Adams, Michael Shannon, Diane Lane',
      plot: 'Clark Kent is an alien who as a child was evacuated from his dying world and came to Earth, living as a normal human. But when survivors of his alien home invade Earth, he must reveal himself to the world.',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg',
      website: 'http://manofsteel.warnerbros.com'
    },
    {
      title: 'The Insider',
      year: 1999,
      director: 'Michael Mann',
      runtime: '157 min',
      genre: 'Biography, Drama, Thriller',
      actors: 'Al Pacino, Russell Crowe, Christopher Plummer, Diane Venora',
      plot: 'A research chemist comes under personal and professional attack when he decides to appear in a "60 Minutes" expose on Big Tobacco.',
      poster: 'https://m.media-amazon.com/images/M/MV5BODg0YjAzNDQtOGFkMi00Yzk2LTg1NzYtYTNjY2UwZTM2ZDdkL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      website: 'http://www.theinsider-themovie.com'
    },
    {
      title: 'The Queen',
      year: 2006,
      director: 'Stephen Frears',
      runtime: '103 min',
      genre: 'Biography, Drama, History',
      actors: 'Helen Mirren, James Cromwell, Alex Jennings, Roger Allam',
      plot: 'After the death of Princess Diana, Queen Elizabeth II struggles with her reaction to a sequence of events nobody could have predicted.',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTQ3NTMxODg1Ml5BMl5BanBnXkFtZTcwMjEyMjczMQ@@._V1_SX300.jpg',
      website: 'http://www.thequeen-movie.com/'
    },
    {
      title: 'Gosford Park',
      year: 2001,
      director: 'Robert Altman',
      runtime: '131 min',
      genre: 'Comedy, Drama, Mystery',
      actors: 'Maggie Smith, Michael Gambon, Kristin Scott Thomas, Camilla Rutherford',
      plot: 'The lives of upstairs guests and downstairs servants at a party in 1932 in a country house in England as they investigate a murder involving one of them.',
      poster: 'https://m.media-amazon.com/images/M/MV5BYzM4YzlhZGMtYTI2Yi00OTY4LWE0MzctNDFlYTQ3YmFlOTBjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
      website: 'http://www.gosfordparkmovie.com'
    },
  ]
)

puts "#{Movie.count} movies created!"
