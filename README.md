# React on Rails | Movies App

This README would normally document whatever steps are necessary to get the
application up and running.

## Instructions

- Fork and clone **this repo**
- Run `bundle install` in the root directory to install all the required gems
- Set up the database, `rails db:create`
- Create the database tables by running the migration, `rails db:migrate`
- Seed the database, `rails db:seed`
- Navigate to the client directory and run `npm install` to set up the React application
- Navigate back to the root directory and start the server, **foreman start -p 3000**
- Now you're cooking with gas!

#### Component Architecture
    
    /src/...
    ├── App (renders the Header, Footer and MoviesList)
    ├── MoviesList (renders all movies)
    ├── MovieItem (renders one movie)
    ├── CreateMoviePage (create a new movie)
    ├── UpdateMoviePage (update a movie's information)
    ├── MovieForm (adds new movies to the db)
    ├── Header (includes navbar)
    ├── Footer *(optional)*
