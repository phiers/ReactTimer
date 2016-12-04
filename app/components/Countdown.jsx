import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

export default class Countdown extends React.Component {
  render() {
    return (
    <div>
      <p>Countdown</p>
      <Clock />
      <Controls />
    </div>
    )
  }
};
