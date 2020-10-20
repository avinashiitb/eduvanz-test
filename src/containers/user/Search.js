// Dumb Component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomeComponent from './../../components/customer/HomeComponent';

function mapStateToProps(store) {
  return {
    loginActivity: store.loginActivity,
    userProfile: store.userDetails,
    storeDetails: store.storeDetails,
    categoryList: store.categoryList
  }
}

class Home extends Component {

  render() {
    const {
      history,
      loginActivity,
      match,
      dispatch,
      userProfile,
      storeDetails,
      categoryList
    } = this.props;
    const { category } = categoryList.categoryList;
    // console.log("Home Prop", this.props.isGeolocationEnabled)
    return (
        <HomeComponent
          history = {history}
          loginActivity = {loginActivity}
          userProfile = {userProfile}
          storeDetails = {storeDetails}
          categoryList = {categoryList}
          match = {match}
          dispatch = {dispatch}
        />
    )
  }
}

Home.propTypes = {
  history: PropTypes.object,
  loginActivity: PropTypes.object,
  userProfile: PropTypes.object,
  match: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(mapStateToProps)(Home);
