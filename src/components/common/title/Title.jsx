import React from 'react'
import "./title.css"

const Title = ({ subtitel, title }) => {
  return (
      <div id='heading'>
        <h3>{subtitel}</h3>
        <h1>{title}</h1>
      </div>
  )
}

export default Title
