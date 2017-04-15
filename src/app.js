/*
* Reducers
* */

/*
 * state - состояние данных (posts) приложения в момент обращения к редуктору
 * action - действие, при котором происходит обращение к редуктору
 * */
const posts = (state, action) => {
  switch(action.type) {
    case 'ADD_POST':
      // Создаем новый объект, на основе существующих
      let newCard = Object.assign({}, action.data, {
        id: +new Date // bad practice :)
      });

      // Возвращаем обновленное состояние данных приложения в нужном нам формате
      return state.concat([newCard]);

    default:
      return state || [];
  }
};

/*
* Store
* */

const store = Redux.createStore(Redux.combineReducers({
  posts
}));

/*
* Главный компонент
* */

const App = (props) => {
  return (
    <div className='app'>
      <h1>Привет, React & Redux!</h1>
    </div>
  )
};

/*
* Дочерний компонент
* */

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);
