import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { increment, decrement } from '../actions/Index';

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
      <h3>{this.props.reducers.get('value')}</h3>
    </div>);
  }
}

Main.propTypes = {
  reducers: React.PropTypes.instanceOf(Immutable.Map),
  dispatch: React.PropTypes.func,
};

function mapStateToProps(reducers) {
  return {
    reducers,
  };
}

export default connect(mapStateToProps)(Main);
