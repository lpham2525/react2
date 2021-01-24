import React, { Component } from 'react'
import User from './components/User'

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
      <form>
        <p>
          <label htmlFor='name'>name</label>
          <input 
          type='text' 
          name='name' 
          id='name'
          onChange={this.handleInputChange}
          value={this.state.name} />
        </p>
        <p>
          <label htmlFor='movie'>movie</label>
          <input 
          type='text' 
          name='movie' 
          id='movie'
          onChange={this.handleInputChange}
          value={this.state.movie} />
        </p>
        <p>
          <label htmlFor='game'>game</label>
          <input 
          type='text' 
          name='game' 
          id='game'
          onChange={this.handleInputChange}
          value={this.state.game} />
        </p>
        <p>
          <label htmlFor='song'>song</label>
          <input 
          type='text' 
          name='song' 
          id='song'
          onChange={this.handleInputChange}
          value={this.state.song} />
        </p>
        <p>
          <label htmlFor='book'>book</label>
          <input 
          type='text' 
          name='book' 
          id='book'
          onChange={this.handleInputChange}
          value={this.state.book} />
        </p>
        <button onClick={this.handleSubmit}>Submit Favorites</button>
      </form>
      <br />
        { this.state.user.name ? <User user={this.state.user} /> : null }
      </>
    )
  }
}

export default App
