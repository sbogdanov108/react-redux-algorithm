import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

/*
* Reducers
* */
import * as reducers from './reducers';

/*
* Главный компонент
* */
import App from './components/App';

/*
* Дочерний компонент
* */
import Content from './components/Content';

/*
 * Store
 * */
const store = createStore(combineReducers(reducers));

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Content/>
    </App>
  </Provider>,
  document.getElementById('root')
);
