import React from 'react'

function Box(props) {
  return (
    <div style={{
      border: '1px solid black',
      width: 50,
      height: 50,
      margin: 5,
      backgroundColor: props.color
    }}>
    </div>
  )
}

export default Box;