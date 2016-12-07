import React from 'react';

export default class Controls extends React.Component {
  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  }
  render() {
    const { countdownStatus } = this.props;
    const renderStartStopButton = () => {
      let button;
      if (countdownStatus === 'started') {
        button = <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>;
      } else {
        button = <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>;
      }
      return button;
    };
    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
}

Controls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired,
  onStatusChange: React.PropTypes.func.isRequired,
};
