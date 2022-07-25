import React from 'react'

export default function Message(props) {
  const {message} = props;
  return (
    <div>
      <p className="message"> {message} </p>
    </div>
  )
}
