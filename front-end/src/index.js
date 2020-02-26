import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

// function repositoryReducer(state, action) {
//   switch (action.type) {
//     case 'TOGGLE_SELECT_REPOSITORY': {
//       return applyToggleSelectRepository(state, action);
//     }
//     default:
//       return state;
//   }
// }

// function applyToggleSelectRepository(state, action) {
//   const {
//     id,
//     isSelected
//   } = action;
//   const selectedRepositoryIds = isSelected ?
//     state.selectedRepositoryIds.filter(itemId => itemId !== id) :
//     state.selectedRepositoryIds.concat(id);
//   return {
//     ...state,
//     selectedRepositoryIds
//   };
// }

// const initialState = {
//   selectedRepositoryIds: [],
// };

const store = createStore(reducers)

// Redux manages local data
// Apollo manage remote data
// "When using Apollo Client instead of Redux for remote data, you can 100% rely on its caching, normalization and request states."

ReactDOM.render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
