import React from 'react';
import ReactDOM from 'react-dom';
/* eslint-disable */
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import CountdownForm from 'CountdownForm';
/* eslint-enable */
/* eslint-disable no-undef */
describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });
  it('should call onSetCountdown if valid seconds entered', () => {
    const spy = expect.createSpy();
    const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    const $el = $(ReactDOM.findDOMNode(countdownForm));
    countdownForm.refs.seconds.value = 109;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(109);
  });
  it('should not call onSetCountdown if invalid entry', () => {
    const spy = expect.createSpy();
    const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    const $el = $(ReactDOM.findDOMNode(countdownForm));
    countdownForm.refs.seconds.value = 'abc';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled('abc');
  });
});
