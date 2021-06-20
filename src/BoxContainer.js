import React from 'react'
import Button from './components/container/Button'
import RenderElements from './RenderElements'

function BoxContainer(props) {
  console.log('MainJsonConfig: ', props.jsonConfig)
  if (props.jsonConfig['type'] === 'container') {
    return (
      <div className="parentContainer">
        {props.jsonConfig['items'].map(RenderElements)}
        <Button />
      </div>
    )
  } else {
    return (
      <h1 style={{ color: 'red' }}>Type of root element should be 'container'</h1>
    )
  }
}

export default BoxContainer