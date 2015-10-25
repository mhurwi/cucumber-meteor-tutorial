

(function () {

  'use strict';

  module.exports = function () {

    this.Given(/^I am logged in$/, function () {
      browser.url(process.env.ROOT_URL);
      browser.waitForExist('body *');
      browser.waitForVisible('body *');
      browser.waitForExist('#login-sign-in-link');
      browser.click('#login-sign-in-link');
      browser.setValue('#login-email', 'bob@example.com');
      browser.setValue('#login-password', 'testtest');
      browser.click('#login-buttons-password');
    });

    this.When(/^I fill in the name with "([^"]*)"$/, function (arg1) {
      browser.waitForVisible('#name');
      browser.setValue('#name', 'Alpha');
    });

    this.When(/^I click the button "([^"]*)"$/, function (arg1) {
      browser.click('#createWidget');
    });

    this.Then(/^I should see a widget named "([^"]*)"$/, function (arg1) {
      browser.waitForExist('.widget-name');
      var widgetName = browser.getText('.widget-name');
			expect(widgetName).toEqual("Alpha");

    });

  }

})();
