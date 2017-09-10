import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import 'semantic-ui-css/semantic.min.css'
import rootReducer from './rootReducer'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()
