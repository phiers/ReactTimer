/* eslint-disable */
import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';
/* eslint-enable */
export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'stopped',
    };
    this.handleSetCountdown = this.handleSetCountdown.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
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
  // I only made this function becuase ESLint doesn't like setState in CWU
  clearTimer() {
    this.setState({ count: 0 });
  }

  startTimer() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0,
        countdownStatus: newCount >= 0 ? 'started' : 'stopped',
      });
    }, 1000);
  }

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started',
    });
  }

  handleStatusChange(newStatus) {
    this.setState({ countdownStatus: newStatus });
  }

  render() {
    const { count, countdownStatus } = this.state;
    const renderControlsArea = () => {
      let controlArea;
      if (countdownStatus !== 'stopped') {
        controlArea = (<Controls
          countdownStatus={countdownStatus}
          onStatusChange={this.handleStatusChange}
        />);
      } else {
        controlArea = <CountdownForm onSetCountdown={this.handleSetCountdown} />;
      }
      return controlArea;
    };

    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count} />
        { renderControlsArea() }
      </div>
    );
  }
}
