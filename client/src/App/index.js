import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"

import MoviesList from '../MoviesList/MoviesList'
import CreateMoviePage from "../CreateMoviePage/CreateMoviePage"

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
        <Switch>
          <Route
            exact path="/"
            render={() => <MoviesList
            movies={this.state.apiData} />}
          />
          <Route
            path="/create-movie"
            component={CreateMoviePage}
          />
        </Switch>
      </div>
    )

  }
}

export default App;
