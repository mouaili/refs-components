import React, { Component } from 'react';
import MyRef from './components/MyRef';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.refComp = React.createRef();
  }

  handleClickEvent = () => {
    this.refComp.current.focus();
  };

  render() {
    return (
      <div className='App'>
        <MyRef name='Toto' ref={this.refComp} />
        <button onClick={this.handleClickEvent}>Valider</button>
      </div>
    );
  }
}

export default App;
