import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import { Provider } from 'mobx-react'
import Xstore from './Xstore'

const Root = (
<Provider Xstore={Xstore}>
 <App />
</Provider>
)

ReactDOM.render(Root, document.getElementById('root'))
registerServiceWorker()
