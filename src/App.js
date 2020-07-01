import React, {Component} from 'react';
import Logo from './Logo/Logo.js';
import InputForm from './InputForm/InputForm.js';
import Output from './Output/Output.js';
import './App.css';
import 'tachyons';


  const initialState = {
    route: 'reset',
    calc:{
      numberofdays: 0,
     numberofhours: 0,
     numberofminutes: 0,
     numberofseconds: 0,
     numberofweeks: 0,
     numberofdaysleft: 0 
    }
     
  }

  


class App extends Component {


  constructor() {
    super();
    this.state = initialState;
  }

  loadData = (data) => {
    console.log(data);
    this.setState({calc:{
      numberofdays: data.numberofdays,
      numberofhours: data.numberofhours,
      numberofminutes: data.numberofminutes,
      numberofseconds: data.numberofseconds,
      numberofweeks: data.numberofWeeks,
      numberofdaysleft: data.numberofDaysleft 
    }})
  }

  onRouteChange = route => this.setState({'route': route});
  
  render(){
    const { route } = this.state;
    return (
    <div className="tc">
      <h1>Number Of Days Calculator</h1>
      <Logo />
      <InputForm onRouteChange={this.onRouteChange} loadData = {this.loadData} />
      {route === 'calculate'
        ?<Output calc = {this.state.calc}/>
        :<div></div>
      }
      
    </div>
  );
  }
}


export default App;
