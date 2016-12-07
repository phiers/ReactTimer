import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () =>
(
  <div className="title-bar" data-responsive-toggle="menu" data-hide-for="medium">
    <div className="top-bar" id="menu">
      <div className="top-bar-left">
        <ul className="menu horizontal">
          <li className="menu-text">React Timer App</li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu horizontal">
          <li className="menu-text">Created by <a href="https://github.com/phiers/Reacttimer" target="_blank">Paul Hiers</a></li>
        </ul>
      </div>
    </div>
  </div>
  );

module.exports = Nav;
