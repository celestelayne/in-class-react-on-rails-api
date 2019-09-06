import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import axios from 'axios'

class UpdateMoviePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      updated: false
    }
  }

  handleMovieFormChange = (event) => {}

  handleMovieFormSubmit = (event) => {}

  render(){
    return (
      <div>
        <h2>Update Movie Form</h2>
      </div>
    )
  }
}

export default UpdateMoviePage;
