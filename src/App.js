import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {

  state = {
    cars: [
      {
        name: 'BMW',
        year: 2021
      },
      {
        name: 'Audi A8',
        year: '2019'
      },
      {
        name: 'Mazda',
        year: 2010
      }
    ],
    pageTitle: 'Yo, buddy!!!'
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    const cars = this.state.cars.map(car => <Car name={car.name} year={car.year} />);
  
    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
  
        { cars }
      </div>
    );
  }
}

export default App;
