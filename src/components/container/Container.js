import React from 'react'
import Button from './Button';

function Container(props) {
  console.log('Container props: ', props)
  return (
    <div className="container">
      {props.children}
      <Button />
    </div>
  )
}

export default Container;