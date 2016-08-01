import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions/index'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.dispatch(increment({}))
  }

  render() {
    return <div>
      <a href="#" onClick={this.increment}>Increment</a> :  {this.props.reducers.get('value')}

    </div>
  }
}

function mapStateToProps(reducers) {
  return {
    reducers: reducers
  }
}

export default connect(mapStateToProps)(Main);
