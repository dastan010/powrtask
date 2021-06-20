import './App.css'
import React from 'react'
import BoxContainer from './BoxContainer'

function App() {

  const configJson = {
    'type': 'container',
    'items': [
      {
        'type': 'box',
        'color': 'orange'
      },
      {
        'type': 'container',
        'items': [
          {
            'type': 'box',
            'color': 'green',
          },
          {
            'type': 'box',
            'color': 'red',
          },
          {
            'type': 'container',
            'items': [
              {
                'type': 'container',
                'items': [
                  {
                    'type': 'box',
                    'color': 'pink'
                  }
                ]
              },
            ]
          }
        ]
      }
    ],
  }

  return (
    <div className="App">
      <BoxContainer jsonConfig={configJson} />
    </div>
  );
}

export default App;
