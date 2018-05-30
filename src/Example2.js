import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ping } from './redux/modules/ping';

//https://jsonplaceholder.typicode.com/posts

class Example2 extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
    this.handler = this.handler.bind(this);
  }

  componentDidMount() {
  }

  handler() {
    this.props.ping();
  }

  render() {
    return (
      <div>
        <button onClick={this.handler}>Click</button>
        <div>
          The status is <b>{this.props.isPinging ? 'PING' : 'PONG'}</b>
        </div>
      </div>
    );
  }
}

Example2.propTypes = {
  isPinging: PropTypes.bool,
  ping: PropTypes.func
};

const mapStateToProps = state => ({
  isPinging: state.ping.isPinging,
});

export default connect(mapStateToProps, { ping })(Example2);
