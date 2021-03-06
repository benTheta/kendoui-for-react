import React, { Component } from 'react';
import { DatePicker } from '@progress/kendo-dateinputs-react-wrapper'
import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        dateTime: new Date()
      };
      this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    console.log(e.sender.value())
    this.setState({
      dateTime: e.sender.value()
    });
  }

  render() {
    return (
      <div className="App">
        <div className="date-picker">
          <DatePicker 
            value={this.dateTime}
            min={ new Date(2017,11,1)}
            max={ new Date(2020, 11, 1)}
            format= {"dd/MM/yyyy"}
            change= {"dd/MM/yyyy"}
            />
        </div>
      </div>
    );
  }
}

export default App;
