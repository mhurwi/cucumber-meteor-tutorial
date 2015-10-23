(function () {

  'use strict';

  module.exports = function () {

    this.Before(function () {
      console.log('running!');
      this.server.call('reset');
      this.server.call('addUser', {email: "bob@example.com"});
    });

  };

})();
