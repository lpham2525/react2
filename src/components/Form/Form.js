import React from 'react'

const Form = props => {
  return (
    <form>
      <p>
        <label htmlFor='name'>name</label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={props.handleInputChange}
          value={props.name}
        />
      </p>
      <p>
        <label htmlFor='movie'>movie</label>
        <input
          type='text'
          name='movie'
          id='movie'
          onChange={props.handleInputChange}
          value={props.movie}
        />
      </p>
      <p>
        <label htmlFor='game'>game</label>
        <input
          type='text'
          name='game'
          id='game'
          onChange={props.handleInputChange}
          value={props.game}
        />
      </p>
      <p>
        <label htmlFor='song'>song</label>
        <input
          type='text'
          name='song'
          id='song'
          onChange={props.handleInputChange}
          value={props.song}
        />
      </p>
      <p>
        <label htmlFor='book'>book</label>
        <input
          type='text'
          name='book'
          id='book'
          onChange={props.handleInputChange}
          value={props.book}
        />
      </p>
      <button onClick={props.handleSubmit}>Submit Favorites</button>
    </form>
  )
}

export default Form
