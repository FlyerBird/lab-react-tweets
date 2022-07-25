import React from 'react'

export default function User(props) {
  const {userData} = props;
  return (
    <span className="user">
      <span className="name"> {userData.name} </span>
      <span className="handle">{userData.handle}</span>
  </span>
  )
}
