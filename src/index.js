import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

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


class App extends Component {
  render() {
    return (
     <div>
      <Lemon lemon="I am lemon" /> 
     </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
