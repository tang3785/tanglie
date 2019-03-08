import React, { Component } from 'react';
import './App.css';
import Mypic from './index/index';
import img1 from './index/images/1.png'
import img2 from './index/images/2.png'
class App extends Component {
    constructor(){
        super();
    }
  render() {
    return (
      <div className="App">
       {/*<ToDoList/>*/}
       <Mypic
           num="4"
           imgSrc={img1}
       title="Camera"
       content="Jacob Cummings"
       a="Take a look"
       />
        <Mypic
            num="5"
            imgSrc={img2}
            title="Camera"
            content="Jacob Cummings"
            a="Take a look"
        />
      </div>
    );
  }
}

export default App;
