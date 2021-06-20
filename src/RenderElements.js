import React from "react"
import Container from './components/container/Container'
import Box from './components/Box'

const KeysToComponentMap = {
  'container': Container,
  'box': Box,
}

function renderer(config) {
  if (config.type === 'container') {
    if (typeof KeysToComponentMap[config.type] !== 'undefined') {
      return React.createElement(
        KeysToComponentMap[config.type],
        {},
        config['items'] ? config['items'].map(renderer) : ''
      )
    }
  } else {
    if (config.type === 'box') {
      if (typeof KeysToComponentMap[config.type] !== 'undefined') {
        return React.createElement(
          KeysToComponentMap[config.type],
          config.color ? {
            color: config.color
          } : {
            color: 'orange'
          },
          null
        )
      }
    } else {
      return (
        <h1 style={{ color: 'red' }}>Type of root element should be 'container'</h1>
      )
    }
  }
}

export default renderer