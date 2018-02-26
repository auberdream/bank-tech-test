'use strict';

(function(exports) {
  function Account(accountHistoryLog = new AccountHistoryLog()) {
    this.balance = INITIAL_BALANCE;
    this.accountHistoryLog = accountHistoryLog
  }

  const INITIAL_BALANCE = 0

  Account.prototype.deposit = function (amount) {
    this._increaseBalance(amount)
  };

  Account.prototype.withdraw = function (amount) {
    this._decreaseBalance(amount)
  };

  // private

  Account.prototype._increaseBalance = function (amount) {
    this.balance += amount;
  };

  Account.prototype._decreaseBalance = function (amount) {
    this.balance -= amount;
  };

  exports.Account = Account;
})(this);
