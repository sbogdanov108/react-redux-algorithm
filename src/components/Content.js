import React from 'react';
import ReactDOM from 'react-dom';

class Content extends React.Component {
  render() {
    let {posts} = this.props; // destruction нужных нам свойств из объекта props

    return (
      <div className="content">
        <h2>Все посты</h2>

        <ul>
          {posts.map((post, i) =>
            <li key={i}>{post.text}</li>
          )}
        </ul>

        <input ref="add" onKeyPress={this.createPost.bind(this)} type="text"/>
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

export default Content;