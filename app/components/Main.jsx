import React from 'react';
import Nav from 'Nav';


const Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Nav />
          {props.children}
        </div>
      </div>

    </div>
  );
}

module.exports = Main;
