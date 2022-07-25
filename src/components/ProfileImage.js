import React from 'react'

export default function ProfileImage(props) {
  const {image} = props
  return (
    <div>
      <img src={image} className="profile" alt="profile"/>
    </div>
  )
}
