import React, { Component } from 'react';

import axios from 'axios'

class CreateMoviePage extends Component  {
  constructor() {
    super()
    this.state = {
      movie: [],
      created: false
    }
  }

  onMovieFormChange = (event) => {
    const element = event.target
    const {name, value} = element

    const newState = {}
    newState[name] = value
    this.setState(newState)
  }

  onMovieFormSubmit = (event) => {

    console.log(`Form submitted:`);
    console.log(`Movie Name: ${this.state.title}`);

    event.preventDefault()

    let newMovie = {
      title: this.state.title,
      director: this.state.director,
      plot: this.state.plot,
      year: this.state.year
    }

    console.log(this.state)

    axios
      .post('/movies', newMovie)
      .then(response => {
        console.log(response.data)
        // let movies = response.data.movies
        this.setState({
          newMovie: newMovie,
          created: true
        })
      })
      .catch(error => {
        console.error("Error: ", error)
      })
  }

  render() {
    return (
      <form onChange={ this.onMovieFormChange } onSubmit={ this.onMovieFormSubmit }>
        <div>
          <label htmlFor="title">Movie Title: </label>
          <input
            type="text"
            name="title"
            placeholder="Movie Title"
            value={this.state.title}
          />
        </div>
        <div>
          <label htmlFor="director">Movie Director: </label>
          <input
            type="text"
            name="director"
            placeholder="Movie Director"
            value={this.state.director}
          />
        </div>
        <div>
          <label htmlFor="year">Movie Year: </label>
          <input
            type="text"
            name="year"
            placeholder="Movie Year"
            value={this.state.year}
          />
        </div>
        <div>
          <label htmlFor="plot">Movie Plot: </label>
          <input
            type="text"
            name="plot"
            placeholder="Movie plot"
            value={this.state.plot}
          />
        </div>
        <div>
          <button
            type="submit"
            className="button">Add Movie</button>
        </div>
      </form>
    )
  }

}

export default CreateMoviePage;
