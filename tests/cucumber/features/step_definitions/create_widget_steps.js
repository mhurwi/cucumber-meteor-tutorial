var assert = require('assert');

(function () {

  'use strict';

  module.exports = function () {

    this.Given(/^I am logged in$/, function (callback) {
      this.client.
      url(process.env.ROOT_URL).
      waitForExist('body *').
      waitForVisible('body *').
      click('#login-sign-in-link').
      setValue('#login-email', 'bob@example.com').
      setValue('#login-password', 'testtest').
      click('#login-buttons-password').
      call(callback);
    });

    this.When(/^I fill in the name with "([^"]*)"$/, function (arg1, callback) {
      this.client.
      setValue('#name', 'Alpha').
      call(callback);
    });

    this.When(/^I click the button "([^"]*)"$/, function (arg1, callback) {
      this.client.
      click('#createWidget').
      call(callback);
    });

    this.Then(/^I should see a widget named "([^"]*)"$/, function (arg1, callback) {
      this.client.
      waitForExist('.widget-name', 100).
      getText('.widget-name').then( function (names) {
        assert.equal(names[0], 'Alpha');
      }).
      call(callback);

    });

  }

})();
