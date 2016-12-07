import React from 'react';

import Clock from 'Clock'; //eslint-disable-line
import Controls from 'Controls'; //eslint-disable-line

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      timerStatus: 'paused',
    };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.clearTimer();
        case 'paused': // eslint-disable-line no-fallthrough
          clearInterval(this.timer);
          this.timer = undefined;
          break;
        default:
          break;
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  handleStatusChange(newStatus) {
    this.setState({ timerStatus: newStatus });
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }

  clearTimer() {
    this.setState({ count: 0 });
  }

  render() {
    const { count, clockStatus } = this.state;
    return (
      <div>
        <h1 className="page-title">Clock App</h1>
        <Clock totalSeconds={count} />
        <Controls countdownStatus={clockStatus} onStatusChange={this.handleStatusChange} />
      </div>
    );
  }
}
