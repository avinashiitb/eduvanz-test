// Dumb Component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterForm from '../../components/user/RegisterForm';

function mapStateToProps(store) {
  return {
    loader: store.loader,
    users: store.users
  }
}

class Register extends Component {

  render() {
    const {
      history,
      loader,
      dispatch,
      match
    } = this.props;
    // console.log("Props", this.props.users);
    return (
      <RegisterForm
        history = {history}
        loader = {loader}
        match = {match}
        dispatch = {dispatch}
      />
    )
  }
}

Register.propTypes = {
  history: PropTypes.object,
  loader: PropTypes.object,
  match: PropTypes.object,
  dispatch: PropTypes.func
};

// By passing nothing to connect it still gives access to dispatch as a prop, which is useful in this case, I do not need mapstatetoprops here.
export default connect(mapStateToProps)(Register);
