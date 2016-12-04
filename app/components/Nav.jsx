import React from 'react';
import {Link, IndexLink} from 'react-router';  //this is the same as var Link = require('react-router.link')

const Nav = () => {
  return (
    <div className="title-bar" data-responsive-toggle="menu" data-hide-for="medium">
      <div className="top-bar" id="menu">
        <div className="top-bar-left">
          <ul className="menu horizontal">
            <li className="menu-text">React Timer App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu horizontal">
            <li className="menu-text">Created by <a href="#" target="_blank">Paul Hiers</a></li>
            </ul>
        </div>
    </div>
  </div>
  );
};
 module.exports = Nav;
