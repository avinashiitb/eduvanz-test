import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { css } from "@emotion/core";
import DotLoader from "react-spinners/FadeLoader";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
  faUserPlus,
  faSearch,
  faUserCog,
  faUsersCog
} from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
// import Parse from "parse";
import PropTypes from 'prop-types';
// Actions
import { setLoading } from './../actions/loaderAction';

// Components
import Sidebar from './../components/common/Sidebar';
import Register from './../containers/user/Register';
import Search from './../containers/user/Search';
import Admin from './../containers/admin'
import './App.css';

library.add(
  faCoffee,
  faUserPlus,
  faCheckCircle,
  faSearch,
  faUserCog,
  faUsersCog
)
function mapStateToProps(store) {
  return {
    loginActivity: store.loginActivity
  }
}
const override = css`
  top:50%;
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class App extends Component {
  render() {
    const {
      loginActivity,
      dispatch,
      storeDetails,
      match
    } = this.props;
    const { auth } = loginActivity || "";
    let display="";
    if(!loginActivity.loader){
      display = "none";
    }

    return (
      <BrowserRouter>
        <Fragment>
          <div className="sweet-loading" style={{position: "fixed", zIndex: "10000", top: "110px", width: "100%", height:"75vh", display:`${display}`}}>
            <DotLoader
              css={override}
              size={15}
              color={"#123abc"}
              loading={loginActivity.loader}
            />
          </div>
          <Sidebar />
            <Route exact path='/' component={Register} />
            <Route path='/search' component={Search} />
            <Route path='/admin' component={Admin} />
        </Fragment>
      </BrowserRouter>
    );
  }
}


export default connect(mapStateToProps)(App);
