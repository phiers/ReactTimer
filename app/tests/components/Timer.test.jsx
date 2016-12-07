/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Timer from 'Timer';
/* eslint-enable */
/* eslint-disable no-undef */

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should start when timerStatus is started', (done) => {
    const timer = TestUtils.renderIntoDocument(<Timer />);
    timer.handleStatusChange('started');
    timer.setState({ count: 10 });

    expect(timer.state.timerStatus).toBe('started');
    setTimeout(() => {
      expect(timer.state.count).toBe(11);
      done();
    }, 1001);
  });
  it('should pause when timerStatus is paused', (done) => {
    const timer = TestUtils.renderIntoDocument(<Timer />);
    timer.handleStatusChange('paused');
    timer.setState({ count: 10 });

    expect(timer.state.timerStatus).toBe('paused');
    setTimeout(() => {
      expect(timer.state.count).toBe(10);
      done();
    }, 1001);
  });
  it('should clear when timerStatus is stopped', (done) => {
    const timer = TestUtils.renderIntoDocument(<Timer />);
    timer.setState({ count: 10 });
    timer.handleStatusChange('stopped');

    expect(timer.state.timerStatus).toBe('stopped');
    setTimeout(() => {
      expect(timer.state.count).toBe(0);
      done();
    }, 1001);
  });
});
