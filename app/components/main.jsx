import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.dispatch(increment({}));
  }

  decrement() {
    this.dispatch(decrement({}));
  }

  render() {
    return (<div>
      <h2>Add/Remove Values</h2>
      <b><a href="#" onClick={this.decrement}>Decrease</a></b>
      &nbsp;&nbsp;
      <b><a href="#" onClick={this.increment}>Increase</a></b>
      <h3>{this.props.value}</h3>
    </div>);
  }
}

Main.propTypes = {
  value: React.PropTypes.number.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    value: state.value,
  };
}

export default connect(mapStateToProps)(Main);
