import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

const store = createStore(reducers)

ReactDOM.render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>, 
    document.getElementById('root')
);

serviceWorker.unregister();

// Learning notes:
//  Redux manages local data
// Apollo manage remote data
// "When using Apollo Client instead of Redux for remote data, you can 100% rely on its caching, normalization and request states."
