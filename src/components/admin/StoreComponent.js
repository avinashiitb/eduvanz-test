// Dumb Component
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CreateStore from './store/CreateStore';
import CreateStoreForm from './store/CreateStoreForm';
import StoreList from './store/StoreList';

class StoreComponent extends Component {
  constructor() {
    super();
    this.state = {
      isCreateForm: false
    }
    // this.handleInputChange = this.handleInputChange.bind(this);
    this.setOption = this.setOption.bind(this);
  }
  setOption() {
    this.setState({
      isCreateForm: true
    })
  }
  // componentDidMount() {
  //   getStore().then(
  //     storeObj => {
  //       console.log("Store", storeObj);
  //       // console.log(this.props)
  //       this.props.dispatch(getStoreAction(storeObj));
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }
  render() {
    const {
      history,
      loginActivity,
      userProfile,
      myStoreDetails,
      match,
      dispatch,
      orderDetails
    } = this.props;

    const { isCreateForm } = this.state;

    return (
      <Fragment>
        <StoreList 
          history = { history }
          loginActivity = { loginActivity }
          userProfile = { userProfile }
          myStoreDetails = { myStoreDetails }
          match = { match }
          dispatch = { dispatch }
        />
        <main className="main">
        {
          isCreateForm ?
            <CreateStoreForm 
              history = {history}
              loginActivity = {loginActivity}
              userProfile = {userProfile}
              match = {match}
              dispatch = {dispatch}
              myStoreDetails = { myStoreDetails }
              setOption = {this.setOption}
            />
          :
            <CreateStore 
              history = {history}
              loginActivity = {loginActivity}
              userProfile = {userProfile}
              match = {match}
              dispatch = {dispatch}
              setOption = {this.setOption}
          />
        }
        </main>
        
        
      </Fragment>
    )
  }
}

StoreComponent.propTypes = {
  history: PropTypes.object,
  loginActivity: PropTypes.object,
  userProfile: PropTypes.object,
  match: PropTypes.object,
  dispatch: PropTypes.func
};

export default StoreComponent;
