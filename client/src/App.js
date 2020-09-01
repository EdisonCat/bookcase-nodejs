import React from 'react';
import BookList from './components/BookList';

class App extends React.Component {
  render() {
    return (
      <div id="main">
        <h1>Edison's Book List</h1>
        <BookList />
      </div>
    );
  }
}

export default App;
