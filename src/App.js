import React from 'react'

const LemonStyle = {
 color: '#ff00aa',
 fontFamily: 'sans-serif',
 background: '#eee',
 fontSize: 24,
 display: 'inline-block',
 padding: 10,
 top: 0,
 left: 10,
 position: 'absolute',
}

const Lemon = ({lemon}) => 
 <p style={LemonStyle}>{lemon}</p>

export default class App extends React.Component {
  render() {
    return (
     <div>
      <Lemon lemon="I am lemon" /> 
     </div>
    )
  }
}


