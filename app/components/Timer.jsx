import React from 'react';
import Clock from 'Clock'; //eslint-disable-line
import Controls from 'Controls'; //eslint-disable-line

export default class Timer extends React.Component {
  render() {
    return (
      <div>
        <p>Timer</p>
        <Clock />
        <Controls />
      </div>
    );
  }
}
