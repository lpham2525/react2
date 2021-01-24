import React from 'react'

const User = (props) => {
  console.log(props.user)
  return (
    <div className="card text-white bg-dark mb-3" style={{ maxWidth: '18rem' }}>
      <div className="card-header">{props.user.name}</div>
      <div className="card-body">
        <p className="card-text">Movie: {props.user.movie}</p>
        <p className="card-text">Game: {props.user.game}</p>
        <p className="card-text">Song: {props.user.song}</p>
        <p className="card-text">Book: {props.user.book}</p>
      </div>
    </div>
  )
}

export default User
