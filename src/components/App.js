import React from 'react';

const App = (props) => {
  return (
    <div className='app'>
      {/* Вывод дочерних компонентов */}
      {props.children}
    </div>
  )
};

export default App;