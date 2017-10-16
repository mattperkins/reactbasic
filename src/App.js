import React from 'react'
import { inject, observer } from 'mobx-react'

const LemonStyle = {
 color: '#ff00aa',
 fontFamily: 'sans-serif',
 background: '#eee',
 fontSize: 24,
 display: 'inline-block',
 padding: 10,
}

const Lemon = ({lemon}) => 
 <p style={LemonStyle}>{lemon}</p>

@inject('Xstore')
@observer
export default class App extends React.Component {
  render() {
  const { Xstore } = this.props
    return (
     <div>
      <Lemon lemon="I am lemon" />
      <h2>The store contains {Xstore.xCount} items</h2>
     </div>
    )
  }
}


