import React, { Component } from 'react'

class App extends Component {

  state = {
    count: 0,
    name: '',
    displayName: '',
    movie: '',
    displayMovie: '',
    game: '',
    displayGame: '',
    song: '',
    displaySong: '',
    book: '',
    displayBook:''
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1})
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 })
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
      displayName: this.state.name, name: '',
      displayMovie: this.state.movie, movie: '',
      displayGame: this.state.game, game:'',
      displaySong: this.state.song, song: '',
      displayBook: this.state.book, book: ''})
  }

  render () {
    return (
      <>
      <h1>Submit your name and favorites for the following categories!</h1>
      <h1>Name: {this.state.user.name}</h1>
      <h1>Movie: {this.state.user.movie}</h1>
      <h1>Game: {this.state.user.game}</h1>
      <h1>Song: {this.state.user.song}</h1>
      <h1>Book: {this.state.user.book}</h1>
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
      <hr />
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.handleIncrement}>Plus</button>
      <button onClick={this.handleDecrement}>Minus</button>
      </>
    )
  }
}

export default App
