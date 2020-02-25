import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { create } from 'domain';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

function repositoryReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_SELECT_REPOSITORY': {
      return applyToggleSelectRepository(state, action);
    }
    default:
      return state;
  }
}

function applyToggleSelectRepository(state, action) {
  const {
    id,
    isSelected
  } = action;
  const selectedRepositoryIds = isSelected ?
    state.selectedRepositoryIds.filter(itemId => itemId !== id) :
    state.selectedRepositoryIds.concat(id);
  return {
    ...state,
    selectedRepositoryIds
  };
}

const initialState = {
  selectedRepositoryIds: [],
};

const store = createStore(repositoryReducer, initialState)

ReactDOM.render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
