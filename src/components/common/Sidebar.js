import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {browserHistory} from "react-router";
import Parse from "parse";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowRight, Basket, BagPlus, BagPlusFill, HouseFill, HouseDoorFill } from 'react-bootstrap-icons';

class Sidebar extends Component {

  render() {
    return (
      <div className="navigation navbar navbar-light bg-primary">
        {/* Logo Start */}
        <a
          className="d-none d-xl-block bg-light rounded p-1"
          href="index.html"
        >
          <svg height={30} width={30} viewBox="0 0 512 511">
            <g>
              <path
                d="m120.65625 512.476562c-7.25 0-14.445312-2.023437-20.761719-6.007812-10.929687-6.902344-17.703125-18.734375-18.117187-31.660156l-1.261719-41.390625c-51.90625-46.542969-80.515625-111.890625-80.515625-183.992188 0-68.816406 26.378906-132.101562 74.269531-178.199219 47.390625-45.609374 111.929688-70.726562 181.730469-70.726562s134.339844 25.117188 181.730469 70.726562c47.890625 46.097657 74.269531 109.382813 74.269531 178.199219 0 68.8125-26.378906 132.097657-74.269531 178.195313-47.390625 45.609375-111.929688 70.730468-181.730469 70.730468-25.164062 0-49.789062-3.253906-73.195312-9.667968l-46.464844 20.5c-5.035156 2.207031-10.371094 3.292968-15.683594 3.292968zm135.34375-471.976562c-123.140625 0-216 89.816406-216 208.925781 0 60.667969 23.957031 115.511719 67.457031 154.425781 8.023438 7.226563 12.628907 17.015626 13.015625 27.609376l.003906.125 1.234376 40.332031 45.300781-19.988281c8.15625-3.589844 17.355469-4.28125 25.921875-1.945313 20.132812 5.554687 41.332031 8.363281 63.066406 8.363281 123.140625 0 216-89.816406 216-208.921875 0-119.109375-92.859375-208.925781-216-208.925781zm-125.863281 290.628906 74.746093-57.628906c5.050782-3.789062 12.003907-3.839844 17.101563-.046875l55.308594 42.992187c16.578125 12.371094 40.304687 8.007813 51.355469-9.433593l69.519531-110.242188c6.714843-10.523437-6.335938-22.417969-16.292969-14.882812l-74.710938 56.613281c-5.050781 3.792969-12.003906 3.839844-17.101562.046875l-55.308594-41.988281c-16.578125-12.371094-40.304687-8.011719-51.355468 9.429687l-69.554688 110.253907c-6.714844 10.523437 6.335938 22.421874 16.292969 14.886718zm0 0"
                data-original="#000000"
                className="active-path"
                data-old_color="#000000"
                fill="#665dfe"
              />
            </g>{" "}
          </svg>
        </a>
        <ul
          className="nav nav-minimal flex-row flex-grow-1 justify-content-between flex-xl-column justify-content-xl-center"
        >
          {/* register start */}
          <li className="nav-item">
            <NavLink
              className="nav-link p-0 py-xl-3"
              exact activeClassName="active" to="/"
              title="Register"
              style={{textAlign: "center"}}
            >
              <FontAwesomeIcon icon={['fas', 'user-plus']} />
              <span style={{display: "block", fontSize: "11px"}}><b>Register</b></span>
            </NavLink>
          </li>
          {/* Search Tab Start */}
          <li className="nav-item">
            <NavLink
              activeClassName="active" to="/myStore"
              className="nav-link p-0 py-xl-3"
              title="Search"
              style={{textAlign: "center"}}
            >
              <FontAwesomeIcon icon={['fas', 'store-alt']} />
              <span style={{display: "block", fontSize: "11px"}}><b>My Store</b></span>
              {/* Alternate :: External File link */}
              {/* <img class="injectable hw-24" src="./../assets/media/heroicons/outline/users.svg" alt="Friends icon"> */}
            </NavLink>
          </li>
          {/* Friends Tab End */}
          <li className="nav-item">
            <NavLink
              activeClassName="active" to="/history"
              className="nav-link p-0 py-xl-3"
              title="Order History"
              style={{textAlign: "center"}}
            >
              <FontAwesomeIcon icon={['fas', 'history']} />
              <span style={{display: "block", fontSize: "11px"}}><b>Order</b></span>
              {/* <i class="flaticon-buy"></i>  */}
            </NavLink>
          </li>
        </ul>
        {/* Main Nav End */}
      </div>     
    )
  }
}
export default Sidebar;
