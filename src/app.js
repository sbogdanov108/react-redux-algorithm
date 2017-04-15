import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';

/*
 * Action creators
 * */
import {addPost} from './actions';

/*
* Reducers
* */
import * as reducers from './reducers';

/*
* Store
* */
const store = createStore(combineReducers(reducers));

/*
* Главный компонент
* */
import App from './components/App';

/*
* Дочерний компонент
* */
import Content from './components/Content';

// При каждом изменении store, будет запускаться эта функция
function run() {
  // Получаем данные, которые передадим в компонент Content
  let state = store.getState();

  ReactDOM.render(
    <App>
      <Content
        posts={state.posts}
        addPost={text => store.dispatch(addPost(text))}
      />
    </App>,
    document.getElementById('root')
  );
}

run();

// Подписываемся на изменения store, чтобы запускать run()
store.subscribe(run);