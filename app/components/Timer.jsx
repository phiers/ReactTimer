import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

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
