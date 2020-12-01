import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {

    const {counter, increment, decrement} = this.props;

    return (
      <div style={{padding: '20px', border: '1px solid #ccc', margin: '2rem 0'}}>
        <h1>Counter {counter}</h1>
        <hr/>
        <div>
          <button onClick={decrement}>Sub</button>
          <button onClick={increment}>Add</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter2.counter2
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT2' }),
    decrement: () => dispatch({ type: 'DECREMENT2' })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);