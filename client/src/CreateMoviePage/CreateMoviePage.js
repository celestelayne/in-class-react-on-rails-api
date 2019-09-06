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
      <div class="columns">
        <div class="column is-one-third"></div>
        <div class="column is-one-third">
          <form onChange={ this.onMovieFormChange } onSubmit={ this.onMovieFormSubmit }>
            <h2>Create Movie Form</h2>
            <div className="field">
              <label className="label" htmlFor="title">Movie Title: </label>
              <input
                className="input"
                type="text"
                name="title"
                placeholder="e.g. Star Wars"
                value={this.state.title}
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="director">Movie Director: </label>
              <input
                className="input"
                type="text"
                name="director"
                placeholder="e.g. George Lucas"
                value={this.state.director}
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="year">Movie Year: </label>
              <input
                className="input"
                type="text"
                name="year"
                placeholder="e.g. 1970"
                value={this.state.year}
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="plot">Movie Plot: </label>
              <input
                className="input"
                type="text"
                name="plot"
                placeholder="e.g. Help me Obie Wan Kanobi"
                value={this.state.plot}
              />
            </div>
            <div>
              <button
                type="submit"
                className="button">Add Movie</button>
            </div>
          </form>
        </div>
        <div class="column is-one-third"></div>
      </div>
    )
  }

}

export default CreateMoviePage;
