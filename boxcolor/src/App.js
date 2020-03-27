import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      color: 'blue',
      clickCounter: 0
    }
  }
  onChange = (e) => {
    this.setState((prevstate)=>{

     return( {clickCounter: prevstate.clickCounter++,
      color:(prevstate.color==='blue')?'orange':'blue'});
    });
    console.log("click counter ===> ", this.state.clickCounter)
  }
  render(){

  return (
    <div className="App">
       <h1> Box color change .</h1>
        <div              className="colorBox"
        style={{backgroundColor: this.state.color}}
        onClick={this.onChange}
        >
        <p>Click Here</p>
        </div>
    </div>
  );
}}

export default App;
