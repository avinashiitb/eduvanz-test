// Dumb Component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AdminComponent from '../../components/admin';

function mapStateToProps(store) {
  return {
    loader: store.loader,
    users: store.users
  }
}

class Search extends Component {

  render() {
    const {
      history,
      loader,
      dispatch,
      match,
      users
    } = this.props;
    console.log("Search Prop", users)
    return (
        <AdminComponent
          history = {history}
          loader = {loader}
          match = {match}
          dispatch = {dispatch}
          users = {users}
        />
    )
  }
}

export default connect(mapStateToProps)(Search);
