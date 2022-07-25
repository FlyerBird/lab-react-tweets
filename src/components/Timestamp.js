import React from 'react'

export default function Timestamp(props) {
  const {timeStamp} = props;
  return (
    <span className="timestamp"> {timeStamp} </span>
  )
}
