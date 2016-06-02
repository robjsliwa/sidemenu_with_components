import React, { Component } from 'react';
import MainMenu from './components/main-menu';

class App extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className='app-container'>
        <MainMenu />
      </div>
    );
  }
}

export default App;
