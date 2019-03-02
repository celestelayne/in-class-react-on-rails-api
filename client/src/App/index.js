import React, { Component } from "react"

import MoviesList from '../MoviesList/MoviesList'

import axios from 'axios'

class App extends Component {

  constructor(){
    super()
    this.state = {
      apiData: null,
      apiDataLoaded: false
    }
  }

  getMovieData = () => {
    axios
      .get('/movies')
      .then(response => {
        console.log(response.data)
        let movies = response.data.movies
        this.setState({
          apiData: movies,
          apiDataLoaded: true
        })
      })
      .catch(error => {
        console.error("Error: ", error)
      })
  }

  componentDidMount = () => {
    this.getMovieData()
  }

  render() {
    console.log(this.state.apiData)

    return (
      <div className="App">
        <MoviesList movies={this.state.apiData} />
      </div>
    )

  }
}

export default App;
