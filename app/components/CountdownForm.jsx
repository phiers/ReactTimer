import React from 'react';

export default class CountdownForm extends React.Component {
  onSubmit(evt) {
    evt.preventDefault();
    const secondsStr = this.refs.seconds.value;

    if (secondsStr.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(secondsStr, 10));
    }
  }
  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit.bind(this)} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds" />
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
}
