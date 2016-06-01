var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () =>{
    it('should set state to started and count down', (done) => {  // done allows for asynchronous tests
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10); //test countdown with 10 seconds

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      //count should be 9 after one second (asynchronous)
      setTimeout( () => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001)
    });

    it('should never set count less than zero', (done) => {  // done allows for asynchronous tests
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1); //test countdown with 1 seconds

      //wait 3 seconds to ensure count stops at 0
      setTimeout( () => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001)
    });

  });
});
