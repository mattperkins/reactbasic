import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

const LemonStyle = {
 color: 'pink',
 fontFamily: 'sans-serif',
 background: '#f7f7f7',
 fontSize: 24,
 display: 'inline-block',
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
