// Dumb Component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import StoreComponent from '../../components/storeOwner/StoreComponent';
import { getMyStore } from '../../parseMethod/StoreMethod';
import { getMyStoreAction } from '../../actions/storeAction';
import { setLoading } from '../../actions/loaderAction';

function mapStateToProps(store) {
  return {
    loginActivity: store.loginActivity,
    userProfile: store.userDetails,
    myStoreDetails: store.myStoreDetails
  }
}

class AdminStore extends Component {
  constructor() {
    super();
    // this.state = {
    //   storeOptionList: {}
    // }
    this.getMyStore = this.getMyStore.bind(this);
  }
  componentDidMount() {
    this.getMyStore();
  }
  getMyStore(){
    this.props.dispatch(setLoading(true));
    getMyStore().then(res =>{
        // console.log("MyStore List", res);
        this.props.dispatch(getMyStoreAction(res));
        this.props.dispatch(setLoading(false));
      },
      error => {
        console.log(error);
      }
    );
   }
  render() {
    const {
      history,
      loginActivity,
      match,
      dispatch,
      userProfile,
      myStoreDetails
    } = this.props;
    // console.log("myStoreDetails", myStoreDetails)
    return (
      <StoreComponent
        history = {history}
        loginActivity = {loginActivity}
        userProfile = {userProfile}
        match = {match}
        dispatch = {dispatch}
        myStoreDetails = {myStoreDetails}
      />
    )
  }
}

AdminStore.contextTypes = {
  router: PropTypes.object.isRequired
};

AdminStore.propTypes = {
  history: PropTypes.object,
  loginActivity: PropTypes.object,
  userProfile: PropTypes.object,
  match: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(mapStateToProps)(AdminStore);
