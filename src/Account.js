'use strict';

(function(exports) {
  function Account() {
    this.balance = INITIAL_BALANCE;
  }

  const INITIAL_BALANCE = 0

  Account.prototype.deposit = function (amount) {
    this.balance += amount
  };

  exports.Account = Account
})(this);
