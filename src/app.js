/*
 * Action creators
 * */

// Возвращает объект с типом действия и любыми дополнительными данными, которые нам нужны
const addPost = text => ({
  type: 'ADD_POST',
  text
});

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
      let id = +new Date; // bad practice :)

      // Формируем новый массив объектов, в котором будут объединены все необходимые нам данные
      // Возвращаем новое состояние данных приложения в нужном нам формате
      return [...state, Object.assign({}, action.text, {id})];

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
      {/* Вывод дочерних компонентов */}
      {props.children}
    </div>
  )
};

/*
* Дочерний компонент
* */

class Content extends React.Component {
  render() {
    let {posts} = this.props; // destruction нужных нам свойств из объекта props

    return (
      <div className="sidebar">
        <h2>Все посты</h2>

        <ul>
          {posts.map((post, i) =>
            <li key={i}>{post.text}</li>
          )}
        </ul>

        <input ref="add" onKeyPress={this.createPost.bind(this)} type="text" />
      </div>
    )
  }

  createPost(event) {
    // Если это не клавиша enter, то прерываем работу
    if(event.which !== 13) return;

    let text = ReactDOM.findDOMNode(this.refs.add).value;
    this.props.addPost({text});
  }
}

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