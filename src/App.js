import React, { Component } from 'react'
import User from './components/User'
import Form from './components/Form'

class App extends Component {

  state = {
    count: 0,
    name: '',
    movie: '',
    game: '',
    song: '',
    book: '',
    user: {}
  }

  handleInputChange = event => {
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ 
      user: {
        name: this.state.name,
        movie: this.state.movie,
        song: this.state.song,
        game: this.state.game,
        book: this.state.book
      },
      name: '',
      movie: '',
      game:'',
      song: '',
      book: ''})
  }

  render () {
    return (
      <>
      
      <Form 
        name={this.state.name}
        movie={this.state.movie}
        game={this.state.game}
        song={this.state.song}
        book={this.state.book}
        handleInputChange={this.state.handleInputChange}
        handleSubmit={this.state.handleSubmit}
      />
        { this.state.user.name ? <User user={this.state.user} /> : null }
      </>
    )
  }
}

export default App
